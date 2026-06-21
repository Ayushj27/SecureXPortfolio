import { google } from 'googleapis';

type ContactPayload = {
    firstName?: string;
    lastName?: string;
    email?: string;
    message?: string;
    website?: string;
};

const SHEETS_SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

function jsonResponse(body: Record<string, unknown>, status: number) {
    return new Response(JSON.stringify(body), {
        status,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

function cleanText(value: unknown, maxLength: number) {
    if (typeof value !== 'string') {
        return '';
    }

    return value.trim().replace(/\s+/g, ' ').slice(0, maxLength);
}

function cleanMessage(value: unknown, maxLength: number) {
    if (typeof value !== 'string') {
        return '';
    }

    return value.trim().slice(0, maxLength);
}

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getRequiredEnv(name: string) {
    const value = process.env[name];

    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }

    return value;
}

async function appendToSheet(submission: {
    submissionId: string;
    timestamp: string;
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    ipAddress: string;
    userAgent: string;
}) {
    const clientEmail = getRequiredEnv('GOOGLE_SERVICE_ACCOUNT_EMAIL');
    const privateKey = getRequiredEnv('GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY').replace(/\\n/g, '\n');
    const spreadsheetId = getRequiredEnv('GOOGLE_SHEETS_SPREADSHEET_ID');
    const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || 'Contact Submissions';

    const auth = new google.auth.JWT({
        email: clientEmail,
        key: privateKey,
        scopes: [SHEETS_SCOPE],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: `${sheetName}!A:H`,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
            values: [[
                submission.timestamp,
                submission.submissionId,
                submission.firstName,
                submission.lastName,
                submission.email,
                submission.message,
                submission.ipAddress,
                submission.userAgent,
            ]],
        },
    });
}

async function sendSlackMessage(submission: {
    submissionId: string;
    timestamp: string;
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}) {
    const webhookUrl = getRequiredEnv('SLACK_WEBHOOK_URL');

    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            text: 'New SecureXLabs contact form submission',
            blocks: [
                {
                    type: 'header',
                    text: {
                        type: 'plain_text',
                        text: 'New SecureXLabs contact lead',
                    },
                },
                {
                    type: 'section',
                    fields: [
                        {
                            type: 'mrkdwn',
                            text: `*Submission ID*\n${submission.submissionId}`,
                        },
                        {
                            type: 'mrkdwn',
                            text: `*Received At*\n${submission.timestamp}`,
                        },
                        {
                            type: 'mrkdwn',
                            text: `*First Name*\n${submission.firstName}`,
                        },
                        {
                            type: 'mrkdwn',
                            text: `*Last Name*\n${submission.lastName}`,
                        },
                        {
                            type: 'mrkdwn',
                            text: `*Email*\n${submission.email}`,
                        },
                    ],
                },
                {
                    type: 'section',
                    text: {
                        type: 'mrkdwn',
                        text: `*Message*\n${submission.message}`,
                    },
                },
            ],
        }),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Slack webhook failed: ${response.status} ${errorText}`);
    }
}

export default async function handler(request: Request) {
    if (request.method !== 'POST') {
        return jsonResponse({ error: 'Method not allowed' }, 405);
    }

    try {
        const payload = (await request.json()) as ContactPayload;

        if (cleanText(payload.website, 10)) {
            return jsonResponse({ ok: true }, 200);
        }

        const firstName = cleanText(payload.firstName, 100);
        const lastName = cleanText(payload.lastName, 100);
        const email = cleanText(payload.email, 254).toLowerCase();
        const message = cleanMessage(payload.message, 5000);

        if (!firstName || !lastName || !email || !message) {
            return jsonResponse({ error: 'All fields are required.' }, 400);
        }

        if (!isValidEmail(email)) {
            return jsonResponse({ error: 'Please enter a valid email address.' }, 400);
        }

        const timestamp = new Date().toISOString();
        const submissionId = crypto.randomUUID();
        const ipAddress = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
        const userAgent = request.headers.get('user-agent') || 'unknown';

        const submission = {
            submissionId,
            timestamp,
            firstName,
            lastName,
            email,
            message,
            ipAddress,
            userAgent,
        };

        await appendToSheet(submission);
        await sendSlackMessage(submission);

        return jsonResponse({ ok: true }, 200);
    } catch (error) {
        console.error('Contact form submission failed', error);
        return jsonResponse({ error: 'Unable to send your message right now.' }, 500);
    }
}