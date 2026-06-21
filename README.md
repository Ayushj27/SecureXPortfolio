# SecureXLabs Website

SecureXLabs Website is a Vite + React + TypeScript marketing site for the SecureXLabs cybersecurity platform and its ThreatForge product experience.

The site presents:

- platform and solutions messaging
- the ThreatForge product page and architecture story
- company and leadership information
- research, resources, and supporting marketing pages

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- React Router
- Motion
- Three.js

## Local Development

Prerequisites:

- Node.js 18+
- npm

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The app runs on:

```text
http://localhost:3000
```

## Scripts

```bash
npm run dev      # Start the local dev server
npm run build    # Create a production build
npm run preview  # Preview the production build locally
npm run lint     # Run TypeScript checks
```

## Project Structure

```text
src/
  components/    Shared sections and UI components
  lib/           Shared utilities
  pages/         Route-level pages
  main.tsx       App bootstrap
  App.tsx        Router and app shell
```

## Key Pages

- Home
- Platform
- Solutions
- ThreatForge
- Company
- Resources
- Contact

## Design Direction

The website uses a dark, high-contrast visual system with glass panels, gradient accents, motion-driven sections, and product-focused storytelling tailored to enterprise cybersecurity buyers.

## Build Notes

- The site is built as a static frontend with Vite.
- Production output is generated in the `dist` folder.
- Three.js is used for interactive visual background effects.

## Contact Form Delivery

The contact form now posts to `/api/contact`.

This endpoint is intended to run as a serverless function on Vercel so secrets stay on the server.

Required environment variables:

```text
SLACK_WEBHOOK_URL=
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY=
GOOGLE_SHEETS_SPREADSHEET_ID=
GOOGLE_SHEETS_SHEET_NAME=Contact Submissions
```

Optional frontend override:

```text
VITE_CONTACT_API_URL=
```

Google Sheets setup:

1. Create a Google Cloud service account.
2. Enable the Google Sheets API for that project.
3. Create or choose the destination spreadsheet.
4. Share the spreadsheet with the service account email.
5. Put the spreadsheet ID and service account credentials into your deployment environment variables.

Slack setup:

1. Create an incoming webhook for the target Slack channel.
2. Save that webhook URL in `SLACK_WEBHOOK_URL`.

Suggested sheet columns:

```text
timestamp | submission_id | first_name | last_name | email | message | ip_address | user_agent
```

## Purpose

This repository is focused on presenting the SecureXLabs brand, explaining the ThreatForge value proposition, and supporting product marketing, company, and conversion-focused website flows.
