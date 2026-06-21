import React from 'react';
import { motion } from 'motion/react';
import {
  Activity,
  Cpu,
  Database,
  Globe,
  Network,
  Radar,
  Search,
  ShieldCheck,
  Target,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const sourceCards = [
  {
    title: 'External Attack Surface',
    detail: 'Internet-facing assets, exposed services, domains, and shadow IT.',
    icon: Globe,
    accent: 'text-cyan-200',
    border: 'border-cyan-300/18',
  },
  {
    title: 'Threat Intelligence',
    detail: 'Adversary signals, campaign indicators, leaked secrets, and dark-web monitoring.',
    icon: Search,
    accent: 'text-sky-200',
    border: 'border-sky-300/18',
  },
  {
    title: 'Validation Signals',
    detail: 'Breach simulations, ATT&CK coverage, control behavior, and response telemetry.',
    icon: Target,
    accent: 'text-rose-200',
    border: 'border-rose-300/18',
  },
  {
    title: 'Compliance Evidence',
    detail: 'Control state, audit artifacts, policy mapping, and signed readiness evidence.',
    icon: ShieldCheck,
    accent: 'text-emerald-200',
    border: 'border-emerald-300/18',
  },
] as const;

const platformCapabilities = [
  {
    title: 'Discovery & Attribution',
    detail: 'Correlates assets, domains, cloud services, and ownership context.',
    icon: Radar,
    accent: 'text-cyan-200',
  },
  {
    title: 'Risk Graph Engine',
    detail: 'Builds attack-path context to prioritize exploitable exposure.',
    icon: Database,
    accent: 'text-[#0030FF]/70',
  },
  {
    title: 'AI Prioritization',
    detail: 'Turns technical telemetry into operator-ready actions and summaries.',
    icon: Cpu,
    accent: 'text-[#0030FF]/70',
  },
  {
    title: 'Evidence Readiness',
    detail: 'Converts validated remediation into live compliance proof.',
    icon: Activity,
    accent: 'text-emerald-200',
  },
] as const;

const outcomeCards = [
  {
    title: 'Security Operations',
    detail: 'Teams see what is exposed, what is exploitable, and what to fix first.',
  },
  {
    title: 'Risk Leadership',
    detail: 'Leaders get one measurable view of attackable risk and reduction progress.',
  },
  {
    title: 'Compliance Teams',
    detail: 'Auditors and governance teams receive current readiness with linked evidence.',
  },
] as const;

const deploymentModes = ['SaaS', 'Hybrid', 'On-Premise'] as const;

const surfaceMetrics = [
  '2,500+ ports scanned',
  '200+ MITRE techniques validated',
  'Graph-backed attack pathing',
] as const;

function CardShell({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]',
        className,
      )}
    >
      {children}
    </div>
  );
}

export default function ThreatForgeHydraInfographic() {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/8 bg-[linear-gradient(180deg,rgba(13,18,30,0.98),rgba(8,11,18,0.98))] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.34)] md:p-6 lg:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(81,144,255,0.10),transparent_38%),radial-gradient(circle_at_bottom,rgba(45,212,191,0.06),transparent_30%)]" />
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,rgba(132,145,172,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(132,145,172,0.4)_1px,transparent_1px)] [background-size:44px_44px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/14 bg-cyan-300/[0.05] px-4 py-2 text-[10px] font-mono uppercase tracking-[0.24em] text-cyan-200">
          <Network className="h-3.5 w-3.5" />
          ThreatForge Client Architecture
        </div>
        <h3 className="mt-5 text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
          A simple platform view clients can understand in one pass.
        </h3>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-foreground-muted lg:text-base">
          ThreatForge ingests security signals from across the environment, correlates them in one platform, and delivers prioritized outcomes for operations, leadership, and compliance.
        </p>
      </div>

      <div className="relative z-10 mx-auto mt-8 max-w-6xl md:mt-10">
        <div className="md:hidden space-y-4">
          <div>
            <div className="mb-3 text-center text-[10px] font-mono uppercase tracking-[0.24em] text-cyan-200">Inputs</div>
            <div className="grid gap-3">
              {sourceCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  animate={{ y: [0, index % 2 === 0 ? -2 : 2, 0] }}
                  transition={{ duration: 5 + index * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <CardShell className={cn('p-4', card.border)}>
                    <div className="flex items-start gap-3">
                      <div className={cn('rounded-2xl border border-white/10 bg-white/[0.03] p-2.5', card.accent)}>
                        <card.icon className="h-5 w-5" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-semibold text-foreground">{card.title}</div>
                        <div className="mt-1 text-sm leading-relaxed text-foreground-muted">{card.detail}</div>
                      </div>
                    </div>
                  </CardShell>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="h-10 w-px bg-gradient-to-b from-cyan-300/40 to-transparent" />
          </div>

          <CardShell className="p-5 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[20px] border border-cyan-300/18 bg-cyan-300/[0.05] text-cyan-200">
              <Database className="h-7 w-7" />
            </div>
            <div className="mt-3 text-[10px] font-mono uppercase tracking-[0.24em] text-cyan-200">ThreatForge Platform</div>
            <div className="mt-2 text-xl font-semibold text-foreground">Correlation, prioritization, and evidence orchestration</div>
            <div className="mt-3 text-sm leading-relaxed text-foreground-muted">
              Discovery, risk graphing, validation, AI reasoning, and compliance readiness operate in one shared control plane.
            </div>
          </CardShell>

          <div className="grid gap-3 sm:grid-cols-2">
            {platformCapabilities.map((capability) => (
              <CardShell key={capability.title} className="p-4">
                <div className="flex items-start gap-3">
                  <div className={cn('rounded-2xl border border-white/10 bg-white/[0.03] p-2.5', capability.accent)}>
                    <capability.icon className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-foreground">{capability.title}</div>
                    <div className="mt-1 text-sm leading-relaxed text-foreground-muted">{capability.detail}</div>
                  </div>
                </div>
              </CardShell>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="h-10 w-px bg-gradient-to-b from-cyan-300/40 to-transparent" />
          </div>

          <div>
            <div className="mb-3 text-center text-[10px] font-mono uppercase tracking-[0.24em] text-cyan-200">Business Outcomes</div>
            <div className="grid gap-3">
              {outcomeCards.map((card) => (
                <CardShell key={card.title} className="p-4">
                  <div className="text-sm font-semibold text-foreground">{card.title}</div>
                  <div className="mt-1 text-sm leading-relaxed text-foreground-muted">{card.detail}</div>
                </CardShell>
              ))}
            </div>
          </div>
        </div>

        <div className="relative hidden md:block">
          <svg viewBox="0 0 1200 720" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
            <defs>
              <linearGradient id="tf-connector" x1="0" x2="1">
                <stop offset="0%" stopColor="rgba(103,232,249,0.08)" />
                <stop offset="50%" stopColor="rgba(103,232,249,0.40)" />
                <stop offset="100%" stopColor="rgba(103,232,249,0.08)" />
              </linearGradient>
            </defs>

            <line x1="600" y1="142" x2="600" y2="240" stroke="url(#tf-connector)" strokeWidth="2" strokeDasharray="5 7" />
            <line x1="600" y1="430" x2="600" y2="522" stroke="url(#tf-connector)" strokeWidth="2" strokeDasharray="5 7" />
            <line x1="190" y1="570" x2="1010" y2="570" stroke="url(#tf-connector)" strokeWidth="1.5" opacity="0.5" />
            <line x1="190" y1="166" x2="1010" y2="166" stroke="url(#tf-connector)" strokeWidth="1.5" opacity="0.45" />
            <line x1="290" y1="166" x2="430" y2="240" stroke="url(#tf-connector)" strokeWidth="1.2" opacity="0.45" />
            <line x1="510" y1="166" x2="540" y2="240" stroke="url(#tf-connector)" strokeWidth="1.2" opacity="0.45" />
            <line x1="690" y1="166" x2="660" y2="240" stroke="url(#tf-connector)" strokeWidth="1.2" opacity="0.45" />
            <line x1="910" y1="166" x2="770" y2="240" stroke="url(#tf-connector)" strokeWidth="1.2" opacity="0.45" />
            <line x1="420" y1="430" x2="300" y2="522" stroke="url(#tf-connector)" strokeWidth="1.2" opacity="0.45" />
            <line x1="540" y1="430" x2="600" y2="522" stroke="url(#tf-connector)" strokeWidth="1.2" opacity="0.45" />
            <line x1="780" y1="430" x2="900" y2="522" stroke="url(#tf-connector)" strokeWidth="1.2" opacity="0.45" />
          </svg>

          <div className="text-center text-[10px] font-mono uppercase tracking-[0.24em] text-cyan-200">Security Inputs</div>
          <div className="mt-4 grid grid-cols-4 gap-4">
            {sourceCards.map((card, index) => (
              <motion.div
                key={card.title}
                animate={{ y: [0, index % 2 === 0 ? -3 : 3, 0] }}
                transition={{ duration: 5.8 + index * 0.25, repeat: Infinity, ease: 'easeInOut' }}
              >
                <CardShell className={cn('h-full p-4', card.border)}>
                  <div className={cn('inline-flex rounded-2xl border border-white/10 bg-white/[0.03] p-2.5', card.accent)}>
                    <card.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 text-base font-semibold leading-tight text-foreground">{card.title}</div>
                  <div className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.detail}</div>
                </CardShell>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center text-[10px] font-mono uppercase tracking-[0.24em] text-cyan-200">ThreatForge Platform</div>
          <CardShell className="relative mt-4 p-6 lg:p-7">
            <div className="grid items-center gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
              <div className="rounded-[24px] border border-cyan-300/16 bg-[radial-gradient(circle_at_top,rgba(0,48,255,0.16),rgba(12,16,27,0.92))] p-6 text-center shadow-[0_0_60px_rgba(96,165,250,0.10)]">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] border border-cyan-300/18 bg-cyan-300/[0.05] text-cyan-200">
                  <Database className="h-8 w-8" />
                </div>
                <div className="mt-4 text-[10px] font-mono uppercase tracking-[0.24em] text-cyan-200">ThreatForge Core</div>
                <div className="mt-2 text-2xl font-semibold tracking-tight text-foreground">Unified Correlation Plane</div>
                <div className="mt-3 text-sm leading-relaxed text-foreground-muted">
                  Connects attack surface, risk graphing, validation evidence, and compliance context in one shared operating layer.
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {platformCapabilities.map((capability) => (
                  <CardShell key={capability.title} className="h-full p-4">
                    <div className={cn('inline-flex rounded-2xl border border-white/10 bg-white/[0.03] p-2.5', capability.accent)}>
                      <capability.icon className="h-5 w-5" />
                    </div>
                    <div className="mt-4 text-base font-semibold leading-tight text-foreground">{capability.title}</div>
                    <div className="mt-2 text-sm leading-relaxed text-foreground-muted">{capability.detail}</div>
                  </CardShell>
                ))}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {surfaceMetrics.map((metric) => (
                <div key={metric} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.16em] text-foreground-muted">
                  {metric}
                </div>
              ))}
            </div>
          </CardShell>

          <div className="mt-16 text-center text-[10px] font-mono uppercase tracking-[0.24em] text-cyan-200">Organization Outcomes</div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {outcomeCards.map((card, index) => (
              <motion.div
                key={card.title}
                animate={{ y: [0, index % 2 === 0 ? -2 : 2, 0] }}
                transition={{ duration: 6 + index * 0.28, repeat: Infinity, ease: 'easeInOut' }}
              >
                <CardShell className="h-full p-4 lg:p-5">
                  <div className="text-base font-semibold text-foreground">{card.title}</div>
                  <div className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.detail}</div>
                </CardShell>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-foreground-muted">Deployment Modes</div>
            {deploymentModes.map((mode) => (
              <div key={mode} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.16em] text-cyan-100">
                {mode}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}