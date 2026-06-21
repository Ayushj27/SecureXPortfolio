"use client";

import React from 'react';
import { Shield } from 'lucide-react';
import { IconContainer, Radar } from '@/components/ui/radar-effect';

const DATRAX_FLOW_POINTS = [
    'Human Actor Transfers',
    'Non-Human API Accounts',
    'GenAI Payload Inspection',
    'SaaS & Cloud Channels',
    'Covert Cloud Exfiltration',
    'Structured Databases',
    'Unstructured payloads',
    'DPDP Act Compliance',
];

export default function DatraXRadarEffectDemo() {
    const topRow = DATRAX_FLOW_POINTS.slice(0, 3);
    const middleRow = DATRAX_FLOW_POINTS.slice(3, 5);
    const bottomRow = DATRAX_FLOW_POINTS.slice(5, 8);

    return (
        <div className="flex w-full items-center justify-center p-6 md:p-8">
            <div className="relative flex h-96 w-full max-w-4xl flex-col items-center justify-center space-y-4 overflow-hidden px-4 py-6">
                <div className="mx-auto w-full max-w-3xl">
                    <div className="flex w-full items-center justify-center space-x-4 md:justify-between md:space-x-0">
                        {topRow.map((point, idx) => (
                            <IconContainer
                                key={point}
                                text={point}
                                delay={0.15 + idx * 0.08}
                                icon={<Shield className="h-7 w-7 text-emerald-400" />}
                            />
                        ))}
                    </div>
                </div>

                <div className="mx-auto w-full max-w-xl">
                    <div className="flex w-full items-center justify-center space-x-8 md:justify-between md:space-x-0">
                        {middleRow.map((point, idx) => (
                            <IconContainer
                                key={point}
                                text={point}
                                delay={0.45 + idx * 0.1}
                                icon={<Shield className="h-7 w-7 text-emerald-400" />}
                            />
                        ))}
                    </div>
                </div>

                <div className="mx-auto w-full max-w-3xl">
                    <div className="flex w-full items-center justify-center space-x-4 md:justify-between md:space-x-0">
                        {bottomRow.map((point, idx) => (
                            <IconContainer
                                key={point}
                                text={point}
                                delay={0.65 + idx * 0.08}
                                icon={<Shield className="h-7 w-7 text-emerald-400" />}
                            />
                        ))}
                    </div>
                </div>

                <Radar className="absolute -bottom-12 opacity-80" />
                <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
            </div>
        </div>
    );
}
