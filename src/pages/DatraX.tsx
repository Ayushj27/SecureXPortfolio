import React from 'react';
import { motion } from 'motion/react';
import {
  Shield,
  Radar,
  Zap,
  Target,
  ArrowRight,
  Activity,
  Globe,
  Lock,
  Cpu,
  Database,
  Search,
  CheckCircle2,
  AlertCircle,
  Network,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import DatraXHydraInfographic from '@/components/DatraXHydraInfographic';
import DatraXRadarEffectDemo from '@/components/ui/datrax-radar-effect-demo';

const WidgetFrame = ({
  label,
  status,
  children,
}: {
  label: string;
  status: string;
  children: React.ReactNode;
}) => (
  <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_24px_80px_rgba(0,0,0,0.22)]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.08),transparent_34%)]" />
    <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/14 to-transparent" />
    <div className="relative">
      <div className="mb-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.22em] text-foreground-muted">
        <span>{label}</span>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[9px] tracking-[0.18em] text-foreground">{status}</span>
      </div>
      {children}
    </div>
  </div>
);

const SurfacePulseVisual = () => (
  <WidgetFrame label="Data Flow Atlas" status="Live Intercept">
    <div className="grid grid-cols-[1.2fr_0.8fr] gap-4">
      <div>
        <div className="mb-3 flex h-20 items-end gap-2 rounded-2xl border border-white/8 bg-black/18 px-3 pb-3 pt-4">
          {[28, 42, 36, 58, 46, 70, 52, 64, 44, 74].map((height, index) => (
            <motion.div
              key={index}
              className="flex-1 rounded-full bg-gradient-to-t from-emerald-500/20 via-teal-300/55 to-white/90 shadow-[0_0_16px_rgba(16,185,129,0.22)]"
              animate={{ height: [`${Math.max(18, height - 12)}%`, `${height}%`, `${Math.max(24, height - 6)}%`] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.06 }}
            />
          ))}
        </div>
        <div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-[0.18em] text-foreground-muted">
          <span>Shadow data movement</span>
          <span className="text-emerald-300">+4 anomalies</span>
        </div>
      </div>
      <div className="rounded-2xl border border-white/8 bg-black/18 p-3">
        <div className="text-[9px] font-mono uppercase tracking-[0.18em] text-foreground-muted">Channel DNA</div>
        <div className="mt-3 space-y-2">
          {[
            { label: 'Email & Office 365', width: '41%', tone: 'from-emerald-400/85 to-emerald-300/20' },
            { label: 'Cloud & SaaS', width: '34%', tone: 'from-teal-400/85 to-teal-300/20' },
            { label: 'Web, FTP & GenAI', width: '25%', tone: 'from-cyan-400/85 to-cyan-200/15' },
          ].map((item) => (
            <div key={item.label}>
              <div className="mb-1 flex items-center justify-between text-[9px] font-mono text-foreground-muted">
                <span>{item.label}</span>
                <span>{item.width}</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/6">
                <div className={cn('h-full rounded-full bg-gradient-to-r', item.tone)} style={{ width: item.width }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </WidgetFrame>
);

const BreachPathVisual = () => (
  <WidgetFrame label="Actor Path Engine" status="3 Steps to Exfiltration">
    <div className="rounded-2xl border border-white/8 bg-black/18 p-4">
      <div className="relative h-24 overflow-hidden rounded-xl border border-white/6 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_58%)]">
        <div className="absolute left-5 right-5 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-emerald-400/35 via-teal-400/35 to-rose-400/35" />
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className="absolute top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border border-white/15 bg-background-elevated shadow-[0_0_18px_rgba(16,185,129,0.18)]"
            style={{ left: `${12 + index * 24}%` }}
          />
        ))}
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="absolute top-1/2 h-8 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent"
            style={{ left: `${24 + index * 24}%` }}
          />
        ))}
        <motion.div
          className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.9)]"
          animate={{ left: ['12%', '36%', '60%', '84%'], opacity: [0.45, 1, 1, 0.7] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 h-10 w-10 -translate-y-1/2 rounded-full border border-emerald-400/30"
          animate={{ left: ['8%', '32%', '56%', '80%'], opacity: [0, 0.5, 0.22, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-[9px] font-mono uppercase tracking-[0.16em] text-foreground-muted">
        <div className="rounded-xl border border-white/8 bg-white/[0.03] px-2.5 py-2 text-center">Actor Identified</div>
        <div className="rounded-xl border border-white/8 bg-white/[0.03] px-2.5 py-2 text-center">Data Classified</div>
        <div className="rounded-xl border border-white/8 bg-white/[0.03] px-2.5 py-2 text-center">Transfer Blocked</div>
      </div>
    </div>
  </WidgetFrame>
);

const MitreHeatmapVisual = () => (
  <WidgetFrame label="Control Reality Check" status="Blocked vs. Passed">
    <div className="grid grid-cols-[1fr_72px] gap-4">
      <div className="grid grid-cols-6 gap-1.5 rounded-2xl border border-white/8 bg-black/18 p-3">
        {[0.18, 0.28, 0.62, 0.76, 0.35, 0.2, 0.48, 0.84, 0.4, 0.58, 0.22, 0.7, 0.14, 0.5, 0.92, 0.38, 0.64, 0.26].map((level, index) => (
          <motion.div
            key={index}
            className="aspect-square rounded-[10px] border border-white/6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
            animate={{ opacity: [Math.max(0.26, level - 0.12), level, Math.max(0.28, level - 0.08)] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.05, ease: 'easeInOut' }}
            style={{
              background:
                level > 0.75 ? 'linear-gradient(180deg, rgba(248,113,113,0.9), rgba(127,29,29,0.45))' :
                  level > 0.5 ? 'linear-gradient(180deg, rgba(20,184,166,0.82), rgba(13,148,136,0.38))' :
                    'linear-gradient(180deg, rgba(16,185,129,0.4), rgba(4,120,87,0.25))',
            }}
          />
        ))}
      </div>
      <div className="rounded-2xl border border-white/8 bg-black/18 p-3 text-[9px] font-mono uppercase tracking-[0.14em] text-foreground-muted">
        <div className="mb-3 text-white/80">Signal</div>
        <div className="space-y-3">
          <div>
            <div className="mb-1 h-2 rounded-full bg-gradient-to-r from-red-500/90 to-red-300/40" />
            <span>Block</span>
          </div>
          <div>
            <div className="mb-1 h-2 rounded-full bg-gradient-to-r from-teal-500/90 to-teal-300/40" />
            <span>Classify</span>
          </div>
          <div>
            <div className="mb-1 h-2 rounded-full bg-gradient-to-r from-emerald-500/70 to-emerald-300/30" />
            <span>Detect</span>
          </div>
        </div>
      </div>
    </div>
  </WidgetFrame>
);

const RiskBoardVisual = () => (
  <WidgetFrame label="AI Governance Assistant" status="Top 3 Data Risks">
    <div className="rounded-2xl border border-white/8 bg-black/18 p-3.5">
      <div className="rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2.5 text-sm text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
        What should the CISO govern before the next compliance cycle?
      </div>
      <motion.div
        className="mt-3 rounded-xl border border-accent/20 bg-[linear-gradient(180deg,rgba(16,185,129,0.18),rgba(16,185,129,0.08))] px-3 py-3 text-sm text-foreground"
        animate={{ opacity: [0.76, 1, 0.84], y: [0, -1, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        Unsanctioned GenAI uploads, malware-initiated FTP exfiltration path, and drifting DPDP evidence coverage.
      </motion.div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[
          ['Exposure', '31%'],
          ['Validated', '67'],
          ['Burn Down', '-18%'],
        ].map(([label, value]) => (
          <div key={label} className="rounded-xl border border-white/8 bg-white/[0.03] px-2.5 py-2 text-center">
            <div className="text-[8px] font-mono uppercase tracking-[0.16em] text-foreground-muted">{label}</div>
            <div className="mt-1 text-sm font-semibold text-foreground">{value}</div>
          </div>
        ))}
      </div>
    </div>
  </WidgetFrame>
);

const ComplianceDriftVisual = () => {
  const chartValues = [64, 68, 71, 73, 78, 82, 88];
  const chartPath = 'M 28 132 C 60 126, 84 118, 116 112 C 148 106, 174 98, 206 94 C 238 90, 262 82, 294 76 C 326 70, 350 56, 382 52 C 414 48, 442 38, 474 32';
  const chartArea = `${chartPath} L 474 156 L 28 156 Z`;
  const evidenceEvents = [
    { label: 'DPDP control mapped', time: '09:14', tone: 'bg-emerald-400' },
    { label: 'ISO evidence signed', time: '10:32', tone: 'bg-cyan-300' },
    { label: 'Data risk exception closed', time: '12:08', tone: 'bg-[#0030FF]' },
  ];

  return (
    <WidgetFrame label="Compliance Drift Monitor" status="Evidence Signed">
      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_104px]">
        <div className="rounded-2xl border border-white/8 bg-black/18 p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="text-[9px] font-mono uppercase tracking-[0.18em] text-foreground-muted">Compliance drift monitor</div>
            <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[9px] font-mono uppercase tracking-[0.18em] text-white/80">
              Evidence signed
            </div>
          </div>

          <div className="mt-4 rounded-[20px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-3">
            <div className="relative h-[154px] overflow-hidden rounded-[18px] border border-white/6 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.10),transparent_58%)] px-3 py-2.5">
              <div className="absolute inset-x-3 top-2.5 bottom-7">
                {[0, 1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className="absolute left-0 right-0 border-t border-white/6"
                    style={{ top: `${index * 25}%` }}
                  />
                ))}
                {[0, 1, 2, 3, 4, 5, 6].map((index) => (
                  <div
                    key={`axis-${index}`}
                    className="absolute bottom-0 top-0 border-l border-white/5"
                    style={{ left: `${index * 16.66}%` }}
                  />
                ))}
              </div>

              <svg viewBox="0 0 500 160" className="absolute inset-x-3 top-3 bottom-8 h-[calc(100%-2.75rem)] w-[calc(100%-1.5rem)]" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="compliance-area" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="rgba(16,185,129,0.38)" />
                    <stop offset="60%" stopColor="rgba(45,212,191,0.16)" />
                    <stop offset="100%" stopColor="rgba(45,212,191,0.02)" />
                  </linearGradient>
                  <linearGradient id="compliance-line" x1="0" x2="1">
                    <stop offset="0%" stopColor="rgba(103,232,249,0.86)" />
                    <stop offset="100%" stopColor="rgba(16,185,129,0.96)" />
                  </linearGradient>
                </defs>
                <motion.path
                  d={chartArea}
                  fill="url(#compliance-area)"
                  animate={{ opacity: [0.7, 0.95, 0.78] }}
                  transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.path
                  d={chartPath}
                  fill="none"
                  stroke="url(#compliance-line)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  animate={{ pathLength: [0.92, 1, 0.96] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                />
                {chartValues.map((value, index) => {
                  const cx = 28 + index * 74;
                  const cy = 156 - value * 1.4;

                  return (
                    <g key={index}>
                      <circle cx={cx} cy={cy} r="7" fill="rgba(16,24,39,0.95)" stroke="rgba(255,255,255,0.12)" />
                      <circle cx={cx} cy={cy} r="3.5" fill="rgba(94,234,212,0.95)" />
                    </g>
                  );
                })}
              </svg>

              <div className="absolute inset-x-4 bottom-2 flex items-center justify-between text-[8px] font-mono uppercase tracking-[0.14em] text-foreground-muted">
                {['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'].map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
            </div>

            <div className="mt-3 grid gap-2 md:grid-cols-3">
              {evidenceEvents.map((event) => (
                <div key={event.label} className="rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2">
                  <div className="flex items-center gap-2 text-[9px] font-mono uppercase tracking-[0.14em] text-foreground-muted">
                    <span className={cn('h-1.5 w-1.5 rounded-full', event.tone)} />
                    {event.time}
                  </div>
                  <div className="mt-1 text-xs leading-relaxed text-foreground">{event.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/8 bg-black/18 p-3 text-[9px] font-mono uppercase tracking-[0.14em] text-foreground-muted">
          <div className="mb-3 text-white/80">Readiness</div>
          <div className="space-y-3">
            <div>
              <div className="text-[8px]">Discover</div>
              <div className="mt-1 h-1.5 rounded-full bg-white/6"><div className="h-full w-[88%] rounded-full bg-emerald-400/80" /></div>
            </div>
            <div>
              <div className="text-[8px]">Control</div>
              <div className="mt-1 h-1.5 rounded-full bg-white/6"><div className="h-full w-[81%] rounded-full bg-cyan-300/75" /></div>
            </div>
            <div>
              <div className="text-[8px]">Respond</div>
              <div className="mt-1 h-1.5 rounded-full bg-white/6"><div className="h-full w-[74%] rounded-full bg-accent/80" /></div>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-white/8 bg-white/[0.03] px-2.5 py-2.5">
            <div className="text-[8px] text-foreground-muted">Trend</div>
            <div className="mt-1 text-sm font-semibold text-foreground">+12%</div>
            <div className="mt-1 text-[8px] leading-relaxed text-foreground-muted">Quarter-over-quarter evidence completeness uplift.</div>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
};

const AssetGraph = () => {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto glass rounded-3xl p-8 overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-emerald-500/10 opacity-50" />

      {/* Central Node */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center z-20 shadow-[0_0_30px_rgba(16,185,129,0.4)]"
      >
        <Shield className="w-8 h-8 text-accent" />
      </motion.div>

      {/* Orbiting Nodes */}
      {[...Array(6)].map((_, i) => {
        const angle = (i * 60) * (Math.PI / 180);
        const radius = 120;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <React.Fragment key={i}>
            {/* Connection Line */}
            <motion.div
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.2 }}
              transition={{ duration: 2, delay: i * 0.2 }}
              className="absolute top-1/2 left-1/2 w-[120px] h-px bg-accent origin-left z-10"
              style={{ transform: `rotate(${i * 60}deg)` }}
            />

            {/* Node */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                x: [0, 5, 0]
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
              className="absolute top-1/2 left-1/2 w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center z-20"
              style={{
                marginLeft: `${x - 20}px`,
                marginTop: `${y - 20}px`
              }}
            >
              {i % 3 === 0 ? <Database className="w-4 h-4 text-accent" /> :
                i % 3 === 1 ? <Globe className="w-4 h-4 text-emerald-400" /> :
                  <Cpu className="w-4 h-4 text-teal-400" />}
            </motion.div>
          </React.Fragment>
        );
      })}

      {/* Scanning Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-dashed border-accent/20"
      />

      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
        <div>
          <div className="text-[10px] font-mono text-foreground-muted uppercase tracking-widest mb-1">Data Flow Atlas</div>
          <div className="text-xl font-bold text-foreground">Governance Engine</div>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400">
          <Activity className="w-3 h-3" />
          LIVE INTERCEPT
        </div>
      </div>
    </div>
  );
};

const DatraX = () => {
  const pillars = [
    {
      title: 'Universal Actor Intelligence',
      icon: Globe,
      desc: 'Know who — or what — is moving your data, before it leaves. Track every human, machine, malware process, and AI agent across your entire data estate.',
      features: [
        'Human & Non-Human Tracking: Identifies users, service accounts, bots, AI agents, and malware process IDs initiating data transfers.',
        'Contextual Intent Mapping: Determines authorisation and operational intent for every data movement event.',
        'Insider Threat Detection: Pinpoints the exact actor behind any unauthorised data transfer in real time.',
        'Stealth Breach Exposure: Uncovers covert exfiltration by non-human processes attempting to move camouflaged sensitive data.'
      ]
    },
    {
      title: 'In-Flight Auto Classification',
      icon: Target,
      desc: 'No labels. No templates. No manual effort. Classify structured and unstructured data dynamically as it moves, with deep semantic analysis.',
      features: [
        'Real-Time Classification: Identifies and categorises sensitive data in motion without predefined templates or rules.',
        'Structured & Unstructured Coverage: Detects hidden PII across documents, emails, cloud uploads, and AI tool payloads simultaneously.',
        'Zero-Touch Operation: Completely eliminates 6-to-24 month manual data discovery and labelling cycles.',
        'Disguised Data Detection: Identifies sensitive content even when renamed, mislabelled, hidden, or disguised.'
      ]
    },
    {
      title: 'C4I CyberSOC Command Layer',
      icon: Cpu,
      desc: 'Centralised Command, Control, Collaboration, and Intelligence for data governance at scale. A single command surface for distributed global deployments.',
      features: [
        'Unified Policy Management: Design, deploy, and enforce data governance rules across all channels from one interface.',
        'Multi-Level Escalation Workflows: Automatically generate escalation chains for flagged data movement events before transmission.',
        'Zero-Touch Policy Generation: Reads Active Directory to autonomously build and deploy rules, cutting administrative overhead by over 90%.',
        'Global Deployment Support: Manages policy precision across distributed environments with consistent enforcement.'
      ]
    },
    {
      title: 'Sovereign Compliance & Forensic Auditing',
      icon: CheckCircle2,
      desc: 'Immutable evidence. Regulatory defensibility. Map every data governance event directly to applicable mandates with cryptographic-grade audit trails.',
      features: [
        'Framework Mapping: Automatically map events to DPDP Act, ISO 27001, NIST, RBI, CERT-In, and CIS Controls.',
        'Immutable Audit Trails: Generate forensic-grade, tamper-proof records of every data movement event.',
        'DPDP Enforcement: Autonomously classify personal data including Aadhaar and PAN, and produce audit-ready evidence.',
        'Absolute Data Sovereignty: Operates entirely on-premise with zero external cloud connectivity required.'
      ]
    }
  ];

  const commandWidgets = [
    {
      title: 'Data Surface Intelligence Hub',
      eyebrow: 'Data Flow Atlas',
      icon: Globe,
      accent: 'text-emerald-400',
      border: 'border-emerald-400/20',
      summary: 'Convert data discovery into action with live visibility into every channel, actor, and in-flight transfer across your enterprise.',
      metrics: [
        'Active data channels monitored: 12+',
        'Unauthorised transfers intercepted today: 38',
        'New actors attributed in < 60 seconds',
      ],
      visual: <SurfacePulseVisual />,
    },
    {
      title: 'Actor Intelligence Navigator',
      eyebrow: 'Actor Path Engine',
      icon: Radar,
      accent: 'text-teal-400',
      border: 'border-teal-400/20',
      summary: 'Prioritise the highest-risk data movements with blast-radius mapping, actor identity resolution, and intent classification.',
      metrics: [
        'Active unauthorised transfer paths: 7',
        'Non-human actor events under review: 3',
        'Policy block candidate removes 4 active risk paths',
      ],
      visual: <BreachPathVisual />,
    },
    {
      title: 'Pre-Transmission Control Lab',
      eyebrow: 'Control Reality Check',
      icon: Target,
      accent: 'text-cyan-400',
      border: 'border-cyan-400/20',
      summary: 'Prove whether policies intercept and block real-world data movement behaviour with simulation-backed coverage and response metrics.',
      metrics: [
        'Allowed vs. blocked ratio: 21 / 79',
        'Mean Time to Classify: 11 seconds',
        'Mean Time to Block: < 1 second',
      ],
      visual: <MitreHeatmapVisual />,
    },
    {
      title: 'Data Risk Board',
      eyebrow: 'Risk Command Center',
      icon: Cpu,
      accent: 'text-accent',
      border: 'border-accent/20',
      summary: 'Give leaders a validated data risk view based on exploitability, live exposure, and measurable risk reduction over time.',
      metrics: [
        'Validated data risk score: 67 / 100',
        'Uncontrolled exposure channels: 31%',
        'Risk reduction this quarter: 18%',
      ],
      visual: <RiskBoardVisual />,
    },
    {
      title: 'Compliance Readiness Hub',
      eyebrow: 'Evidence Stamp',
      icon: CheckCircle2,
      accent: 'text-emerald-400',
      border: 'border-emerald-400/20',
      summary: 'Turn intercepted and governed data events into auditor-ready evidence with live readiness scoring across discovery, control, and response functions.',
      metrics: [
        'DPDP Act readiness: 88%',
        'ISO 27001 Detect category: 81%',
        'Signed evidence bundles generated daily',
      ],
      visual: <ComplianceDriftVisual />,
    },
  ];

  const integrationCategories = [
    { label: 'Identity & Directory', desc: 'Microsoft Active Directory, Azure AD, Okta' },
    { label: 'Productivity & SaaS', desc: 'Office 365, Google Workspace, Salesforce' },
    { label: 'SIEM / SOAR', desc: 'Splunk, Microsoft Sentinel, Cortex XSOAR' },
    { label: 'Endpoint & Detection', desc: 'CrowdStrike, Microsoft Defender, SentinelOne' },
  ];

  const uspRows = [
    {
      title: 'Autonomous Governance Control Plane',
      modernName: 'C4I CyberSOC Command Layer',
      icon: Zap,
      accent: 'text-accent',
      proof: 'Universal Actor Intelligence + In-Flight Classification + GenAI Guardrails + Forensic GRC in one operating surface',
      difference: 'DatraX links actor identity directly to data context and compliance evidence instead of splitting them across isolated DLP, CASB, and GRC products.',
      impact: 'Closes the governance gap between what data is leaving, who is moving it, and whether controls are actually working.',
    },
    {
      title: 'Universal Actor Intelligence',
      modernName: 'Actor Path Engine',
      icon: Globe,
      accent: 'text-cyan-300',
      proof: 'Tracks human users, malware processes, service accounts, bots, and AI agents across every data channel simultaneously',
      difference: 'DatraX governs non-human actors that legacy DLP was never designed to detect — including malware IDs, autonomous agents, and AI copilots.',
      impact: 'Exposes stealth exfiltration and insider risk that alert-based tools miss entirely.',
    },
    {
      title: 'In-Flight Auto Classification',
      modernName: 'Data Flow Atlas',
      icon: Cpu,
      accent: 'text-[#0030FF]',
      proof: 'Deep semantic analysis classifies structured and unstructured data in motion without templates, labels, or manual tagging',
      difference: 'DatraX eliminates dependency on user discipline and predefined rules — classification happens at the point of movement, not after.',
      impact: 'Reduces data exposure windows from months to milliseconds and makes governance continuous rather than periodic.',
    },
    {
      title: 'GenAI & Cloud Exfiltration Guardrails',
      modernName: 'Pre-Transmission Control Lab',
      icon: CheckCircle2,
      accent: 'text-emerald-300',
      proof: 'Real-time interception of GenAI platform uploads, webmail draft exfiltration, and cloud-based covert bypass techniques',
      difference: 'DatraX governs AI-era data pathways — including browser-based uploads and cloud draft staging — that no legacy DLP product can see.',
      impact: 'Enables controlled AI adoption across the enterprise without creating unmanaged disclosure risk.',
    },
    {
      title: 'Absolute Data Sovereignty',
      modernName: 'Sovereign Deployment Fabric',
      icon: Shield,
      accent: 'text-amber-300',
      proof: 'Fully on-premise deployment — data, telemetry, policy logic, and audit evidence never leave authorised infrastructure',
      difference: 'DatraX supports strict data residency and sovereignty mandates including DPDP Act, RBI, CERT-In, and MeitY requirements that block cloud-only DLP adoption.',
      impact: 'Meets the governance requirements of regulated industries and public sector bodies without compromise.',
    },
  ];

  const modernDifferentiatorNames = [
    'Data Flow Atlas',
    'Actor Path Engine',
    'Pre-Transmission Control Lab',
    'Data Risk Board',
    'C4I CyberSOC Command Layer',
  ];

  const whyDatraXReasons = [
    {
      title: 'The Power of Autonomous Data Governance',
      icon: Zap,
      accent: 'text-accent',
      proof: 'Universal Actor Intelligence, In-Flight Auto Classification, C4I CyberSOC, and Forensic GRC consolidated into one Data Risk Command Center.',
      advantage: 'DatraX replaces fragmented, rules-heavy DLP tooling with one platform that links actor identity, data context, channel coverage, and compliance evidence.',
      value: 'You get one clear data governance posture instead of visibility gaps between what data is moving, who is moving it, and whether your controls are actually stopping it.',
    },
    {
      title: 'Universal Actor Intelligence',
      icon: Globe,
      accent: 'text-cyan-300',
      proof: 'Tracks every entity — human, malware process, bot, service account, and AI agent — in real time across all data movement events.',
      advantage: 'DatraX identifies the exact actor behind every transfer, including non-human processes that legacy DLP completely ignores.',
      value: 'That means faster detection of stealth malware exfiltration, rogue AI agents, and insider threats that other tools classify only as file movement.',
    },
    {
      title: 'In-Flight Classification Without Templates',
      icon: Target,
      accent: 'text-emerald-300',
      proof: 'Deep semantic analysis classifies structured and unstructured data dynamically as it moves, with no predefined labels or manual tagging required.',
      advantage: 'DatraX eliminates the 6-to-24 month data discovery and classification cycles that cripple traditional DLP programmes.',
      value: 'You move from policy debt to autonomous governance, including accurate detection of disguised, renamed, and mislabelled sensitive data in transit.',
    },
    {
      title: 'GenAI Guardrails for the Modern Enterprise',
      icon: Cpu,
      accent: 'text-[#0030FF]',
      proof: 'Real-time inspection of payload uploads to public LLMs including ChatGPT, Gemini, and Copilot, blocking unauthorised PII and IP transmission before it completes.',
      advantage: 'DatraX governs AI-era data movement that legacy DLP was never designed to address, including cloud draft exfiltration and browser-based uploads.',
      value: 'CIOs can enable controlled AI adoption without blanket bans, with evidence that sensitive data is governed at the point of transmission.',
    },
    {
      title: 'Forensic-Grade Compliance Evidence',
      icon: CheckCircle2,
      accent: 'text-emerald-300',
      proof: 'Technical governance events mapped directly to DPDP Act, ISO 27001, NIST, RBI, and CERT-In with immutable, signed audit trails.',
      advantage: 'DatraX replaces manual self-attestation with objective compliance scoring based on real data movement telemetry and classification evidence.',
      value: 'Auditors and regulators receive non-repudiable proof that data protection controls are not only present, but operating autonomously in practice.',
    },
    {
      title: 'Absolute Data Sovereignty for Regulated Environments',
      icon: Shield,
      accent: 'text-amber-300',
      proof: 'Fully on-premise deployment with zero external cloud connectivity — all data, policy logic, telemetry, and audit evidence stays inside authorised infrastructure.',
      advantage: 'DatraX operates in privacy-sensitive and highly regulated environments without forcing any data outside the customer\'s sovereign boundary.',
      value: 'Public sector bodies, financial institutions, and regulated enterprises maintain strict data residency and isolation requirements while receiving the same level of autonomous protection.',
    },
  ];

  const integrationBrands = [
    { name: 'Microsoft Active Directory', detail: 'User identity, group policy, zero-touch rule generation' },
    { name: 'Office 365', detail: 'Email, OneDrive, SharePoint data movement and draft interception' },
    { name: 'Splunk', detail: 'Data governance alerts, classification events, actor telemetry' },
    { name: 'Microsoft Sentinel', detail: 'Incidents, analytics rules, governance investigation context' },
    { name: 'CrowdStrike', detail: 'Endpoint process context, non-human actor correlation, prevention events' },
    { name: 'Salesforce', detail: 'CRM data movement tracking, export governance, field-level sensitivity' },
    { name: 'Google Workspace', detail: 'Drive, Gmail, and Meet data flow monitoring' },
    { name: 'ServiceNow', detail: 'Governance incidents, remediation ticket state, escalation workflows' },
  ];

  return (
    <div 
      className="pt-32 min-h-screen relative"
      style={{
        '--color-accent': '#10B981',
        '--color-accent-bright': '#34D399',
      } as React.CSSProperties}
    >
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-2 mb-8">
                <div className="h-px w-8 bg-accent" />
                <span className="text-accent text-[10px] font-mono tracking-widest uppercase">
                  Autonomous Data Protection Platform
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-semibold text-foreground tracking-[-0.03em] mb-8 leading-[0.9] text-gradient">
                DatraX: <br />
                <span className="bg-gradient-to-r from-accent via-emerald-400 to-accent bg-clip-text text-transparent">
                  Govern Before Data Leaves.
                </span>
              </h1>
              <p className="max-w-xl text-foreground-muted text-xl mb-12 leading-relaxed">
                One Platform. Every Actor. Total Data Sovereignty. The industry's first autonomous, AI-driven data governance platform for enterprise data protection.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link to="/contact?source=datrax" className="relative group px-8 py-4 rounded-lg bg-accent text-white font-semibold text-sm transition-all hover:bg-accent-bright shadow-[0_0_0_1px_rgba(16,185,129,0.5),0_4px_12px_rgba(16,185,129,0.3)]">
                  Request a Demo
                </Link>
                <a href="#datrax-architecture" className="group flex items-center gap-3 text-foreground font-semibold text-sm hover:text-accent transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.06] flex items-center justify-center group-hover:border-accent/30 transition-colors">
                    <Search className="w-5 h-5" />
                  </div>
                  View Architecture
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <AssetGraph />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capability Radar */}
      <section className="py-20 relative md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-14">
            <div className="mb-4 text-[10px] font-mono uppercase tracking-[0.24em] text-accent">
              DatraX Capability Radar
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold text-foreground tracking-tight mb-6 text-gradient">
              Interactive Data Flow Signal View
            </h2>
            <p className="text-foreground-muted max-w-3xl mx-auto text-lg leading-relaxed">
              A radar-style capability map that highlights the connected functions DatraX can orchestrate across data discovery, actor intelligence, classification, and compliance workflows.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <DatraXRadarEffectDemo />
          </motion.div>
        </div>
      </section>

      {/* Technical Infographic */}
      <section id="datrax-architecture" className="scroll-mt-32 py-20 relative overflow-hidden md:scroll-mt-36 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-14">
            <h2 className="text-4xl md:text-6xl font-semibold text-foreground tracking-tight mb-6 text-gradient">
              DatraX Architecture Mesh
            </h2>
            <p className="text-foreground-muted max-w-3xl mx-auto text-lg leading-relaxed">
              A simplified client-facing architecture view showing how DatraX intercepts data in motion, classifies it in real time, maps actor identity, and delivers clear governance outcomes to security, compliance, and executive teams.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <DatraXHydraInfographic />
          </motion.div>
        </div>
      </section>

      {/* The Four Pillars */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-semibold text-foreground tracking-tight mb-6 text-gradient">
              The Four Pillars of Modern Data Protection
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto text-lg">
              Consolidating fragmented data loss prevention into a single, proactive governance control plane.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group p-10 rounded-2xl glass border border-white/[0.06] hover:border-accent/30 transition-all"
              >
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent/20 transition-colors">
                  <pillar.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 tracking-tight">{pillar.title}</h3>
                <p className="text-foreground-muted mb-8 leading-relaxed">
                  {pillar.desc}
                </p>
                <ul className="space-y-4">
                  {pillar.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-foreground-muted">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Command Layer */}
      <section className="py-20 relative md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-18 md:mb-24">
            <h2 className="text-4xl md:text-6xl font-semibold text-foreground tracking-tight mb-6">
              Live Command Layer
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto text-lg">
              DatraX should behave like an operating system for data governance — not a static dashboard of policy alerts, but a live intelligence surface that intercepts, classifies, and controls data movement in real time.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-7">
            {commandWidgets.map((widget, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  'h-full p-7 rounded-[28px] glass border border-white/[0.06] hover:border-accent/30 transition-all md:p-8',
                  i === commandWidgets.length - 1 && 'xl:col-span-2',
                  widget.border,
                )}
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-foreground-muted mb-2">
                      {widget.eyebrow}
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground tracking-tight">{widget.title}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                    <widget.icon className={cn('w-6 h-6', widget.accent)} />
                  </div>
                </div>

                {widget.visual}

                <p className="mt-6 text-sm text-foreground-muted leading-relaxed">
                  {widget.summary}
                </p>

                <div className="mt-6 space-y-3">
                  {widget.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-start gap-3 text-sm text-foreground-muted">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 rounded-[28px] glass border border-white/[0.06] p-8 md:p-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-foreground-muted mb-3">
                  Actor Threat Intelligence Hub
                </div>
                <h3 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4">
                  Map internal and external data actor signals directly into governance and response priorities.
                </h3>
                <p className="text-foreground-muted text-base leading-relaxed max-w-2xl">
                  DatraX connects malware process tracking, GenAI payload monitoring, cloud exfiltration detection, and insider behaviour analysis into one intelligence stream that helps teams decide what to govern right now.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: 'Non-Human Actor Events', value: '14', tone: 'text-red-400', icon: Search },
                  { label: 'Unauthorised GenAI Uploads Blocked', value: '9', tone: 'text-amber-300', icon: Lock },
                  { label: 'Active Exfiltration Channels Detected', value: '6', tone: 'text-blue-400', icon: Mail },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3.2 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <item.icon className={cn('w-5 h-5', item.tone)} />
                      <span className={cn('text-lg font-semibold', item.tone)}>{item.value}</span>
                    </div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-foreground-muted">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why DatraX? */}
      <section className="py-20 relative md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-accent mb-4">
              Why DatraX
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold text-foreground tracking-tight mb-6 text-gradient">
              Why DatraX?
            </h2>
            <p className="text-lg leading-relaxed text-foreground-muted">
              DatraX should be positioned as a unified enterprise data governance platform — not another point-in-time DLP tool. It replaces reactive content inspection with continuous, autonomous data flow governance backed by forensic evidence.
            </p>
          </div>

          <div className="rounded-[30px] glass border border-white/[0.06] p-6 md:p-8">
            <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
              <div className="rounded-[24px] border border-white/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5 md:p-6">
                <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-foreground-muted">Client Summary</div>
                <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                  Choosing DatraX means moving from data exposure to data sovereignty.
                </h3>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground-muted">
                  Clients get an autonomous governance engine that shows what data is moving, who or what is moving it, and whether that movement is authorised — across one unified platform instead of a fragmented stack of legacy DLP tools.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {[
                  ['Unified platform', 'Replaces legacy, rules-based DLP with autonomous real-time governance'],
                  ['Validated actor intelligence', 'Identifies humans, malware, bots, and AI agents — not just file types'],
                  ['Evidence-driven compliance', 'Produces immutable forensic proof instead of manual attestations'],
                  ['Sovereign deployment', 'Operates fully on-premise with no external cloud dependency'],
                ].map(([label, detail]) => (
                  <div key={label} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
                    <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-accent">{label}</div>
                    <div className="mt-2 text-sm leading-relaxed text-foreground-muted">{detail}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {[
                ['90%+', 'Reduction in policy administration overhead via zero-touch AD-driven rule generation'],
                ['< 1 second', 'Pre-transmission block latency across all monitored channels'],
                ['12+ Channels', 'Monitored simultaneously including HTTP/HTTPS, FTP, Office 365, SaaS, and GenAI'],
                ['6–24 Months', 'Manual classification cycles eliminated by in-flight auto classification'],
              ].map(([value, detail]) => (
                <div key={value} className="rounded-2xl border border-white/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] px-4 py-4">
                  <div className="text-2xl font-semibold tracking-tight text-foreground">{value}</div>
                  <div className="mt-1 text-sm leading-relaxed text-foreground-muted">{detail}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
              {whyDatraXReasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-[24px] border border-white/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5 md:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className={cn('rounded-2xl border border-white/[0.08] bg-white/[0.03] p-3', reason.accent)}>
                      <reason.icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-lg font-semibold leading-tight text-foreground">{reason.title}</div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm font-medium leading-relaxed text-foreground">
                    {reason.proof}
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
                      <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-foreground-muted">DatraX Advantage</div>
                      <div className="mt-2 text-sm leading-relaxed text-foreground-muted">{reason.advantage}</div>
                    </div>
                    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
                      <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-foreground-muted">Customer Value</div>
                      <div className="mt-2 text-sm leading-relaxed text-foreground-muted">{reason.value}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 relative overflow-hidden md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-[32px] border border-white/[0.06] relative overflow-hidden p-8 md:p-12 lg:p-14">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-emerald-500/5" />

            <div className="relative z-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6 leading-tight">
                  Seamless Integration with <br />
                  <span className="bg-gradient-to-r from-accent via-emerald-400 to-accent bg-clip-text text-transparent">Your Data Ecosystem.</span>
                </h2>
                <p className="text-foreground-muted text-lg mb-8 max-w-xl leading-relaxed">
                  DatraX integrates with the infrastructure and security solutions your teams already use, connecting identity systems, SaaS platforms, SIEM, and endpoint tooling into one coordinated data governance operating model.
                </p>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7">
                  {integrationCategories.map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.06] flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-foreground uppercase tracking-widest">{item.label}</div>
                        <div className="text-sm text-foreground-muted">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="rounded-[28px] glass border border-white/[0.06] p-5 md:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-foreground-muted mb-2">
                        Selected Integrations
                      </div>
                      <div className="text-2xl font-semibold tracking-tight text-foreground">
                        Common tools already in the stack
                      </div>
                    </div>
                    <div className="rounded-full border border-accent/20 bg-accent/8 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.18em] text-accent">
                      50+ connectors
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-2.5">
                    {integrationBrands.map((brand, i) => (
                      <motion.div
                        key={brand.name}
                        animate={{
                          opacity: [0.82, 1, 0.88],
                          y: [0, -2, 0]
                        }}
                        transition={{
                          duration: 3.2 + i * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.08
                        }}
                        className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-3.5 py-3"
                      >
                        <div>
                          <div className="text-sm font-semibold text-foreground leading-none">{brand.name}</div>
                          <div className="mt-1 text-[10px] font-mono uppercase tracking-[0.16em] text-foreground-muted">{brand.detail}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-3.5 md:p-4">
                    <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-foreground-muted mb-3">
                      Integration Flow
                    </div>
                    <div className="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2.5 text-center">
                      {[
                        'Data channels & identity',
                        'DatraX',
                        'Governed outcomes',
                      ].map((label, index) => (
                        <React.Fragment key={label}>
                          <div className="w-full md:w-auto rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 text-sm text-foreground">
                            {label}
                          </div>
                          {index < 2 ? <ArrowRight className="w-4 h-4 text-accent justify-self-center rotate-90 md:rotate-0" /> : null}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-20 relative md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 text-[10px] font-mono uppercase tracking-[0.24em] text-accent">
              DatraX Differentiators
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground text-gradient">
              Easier to govern. Harder to bypass.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-foreground-muted">
              DatraX unifies actor intelligence, autonomous classification, pre-transmission control, and compliance evidence into one forensic-grade governance platform so teams can stop data loss before it happens — with less manual effort and less tooling overhead.
            </p>
          </div>

          <div className="mt-10 rounded-[30px] glass border border-white/[0.06] p-6 md:p-8">
            <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr] md:gap-6">
              <div className="rounded-[24px] border border-white/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5 md:p-6">
                <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-foreground-muted">Core Value Proposition</div>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                  Continuous, autonomous data data governance in one platform.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground-muted md:text-base">
                  Replace reactive, rules-heavy DLP with a single operating layer that ties actor identity, in-flight data classification, channel coverage, and compliance readiness into one validated view of data risk.
                </p>
              </div>

              <div className="rounded-[24px] border border-white/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-5 md:p-6">
                <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-foreground-muted">Product Modules</div>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {modernDifferentiatorNames.map((name) => (
                    <div key={name} className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.16em] text-foreground-muted">
                      {name}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-2">
              {uspRows.map((row, index) => (
                <motion.div
                  key={row.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(
                    'rounded-[24px] border border-white/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5 md:p-6',
                    index === uspRows.length - 1 && 'xl:col-span-2',
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div className={cn('rounded-2xl border border-white/[0.08] bg-white/[0.03] p-3', row.accent)}>
                      <row.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-lg font-semibold leading-tight text-foreground">{row.title}</div>
                      <div className="mt-1 text-[10px] font-mono uppercase tracking-[0.18em] text-accent">{row.modernName}</div>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-foreground-muted md:text-[15px]">
                    {row.difference}
                  </p>

                  <div className="mt-5 grid gap-3 md:grid-cols-[0.95fr_1.05fr]">
                    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
                      <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-foreground-muted">Proof</div>
                      <div className="mt-2 text-sm font-medium leading-relaxed text-foreground">{row.proof}</div>
                    </div>
                    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
                      <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-foreground-muted">Strategic Value</div>
                      <div className="mt-2 text-sm leading-relaxed text-foreground-muted">{row.impact}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Use Cases Section */}
      <section className="py-20 relative md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-accent mb-4">
              Use Cases
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground text-gradient">
              Industry-Specific & Cross-Industry Solutions
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-foreground-muted">
              See how DatraX delivers autonomous data protection, intent mapping, and sovereign compliance auditing across key sectors and complex operational scenarios.
            </p>
          </div>

          <div className="space-y-12">
            {/* Table 1: Industry-Specific Use Cases */}
            <div className="rounded-[30px] glass border border-white/[0.06] p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6 tracking-tight">
                Industry-Specific Use Cases
              </h3>
              <div className="overflow-x-auto w-full">
                <table className="w-full min-w-[800px] border-collapse text-left">
                  <thead>
                    <tr className="bg-white/[0.02] border-b border-white/[0.08]">
                      <th className="px-6 py-4 text-xs font-mono uppercase tracking-[0.16em] text-accent font-semibold">Industry</th>
                      <th className="px-6 py-4 text-xs font-mono uppercase tracking-[0.16em] text-accent font-semibold">Challenge</th>
                      <th className="px-6 py-4 text-xs font-mono uppercase tracking-[0.16em] text-accent font-semibold">DatraX Outcome</th>
                      <th className="px-6 py-4 text-xs font-mono uppercase tracking-[0.16em] text-accent font-semibold">Compliance Intelligence</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        industry: 'Banking & Financial Services',
                        challenge: 'Insider data theft, malware-led exfiltration, and rogue API data movement',
                        outcome: 'Tracks every actor across all channels, blocks unauthorised transfers, and maps events to regulatory mandates',
                        compliance: 'RBI, CERT-In, ISO 27001, DPDP Act'
                      },
                      {
                        industry: 'Government & PSU',
                        challenge: 'Classified data exfiltration, legacy channel exposure, and citizen data protection',
                        outcome: 'Governs all data movement across on-premise and sovereign infrastructure with immutable audit trails',
                        compliance: 'CERT-In, MeitY, ISO 27001'
                      },
                      {
                        industry: 'Healthcare',
                        challenge: 'Patient data exposure, ransomware-assisted exfiltration, and GenAI upload risk',
                        outcome: 'Classifies and governs patient records in motion, blocks unauthorised AI uploads, and enforces DPDP compliance',
                        compliance: 'DPDP Act, ISO 27001, NIST'
                      },
                      {
                        industry: 'Retail & E-Commerce',
                        challenge: 'Customer PII exposure, insecure SaaS data flows, and third-party API risk',
                        outcome: 'Discovers exposed data across SaaS and cloud channels, governs transfers affecting customer trust and revenue',
                        compliance: 'DPDP Act, PCIDSS, ISO 27001'
                      }
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-white/[0.04] hover:bg-white/[0.01] transition-colors">
                        <td className="px-6 py-5 text-sm font-semibold text-foreground">{row.industry}</td>
                        <td className="px-6 py-5 text-sm text-foreground-muted leading-relaxed">{row.challenge}</td>
                        <td className="px-6 py-5 text-sm text-foreground-muted leading-relaxed">{row.outcome}</td>
                        <td className="px-6 py-5 text-sm font-mono text-accent">{row.compliance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 2: Cross-Industry Use Cases */}
            <div className="rounded-[30px] glass border border-white/[0.06] p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6 tracking-tight">
                Cross-Industry Use Cases
              </h3>
              <div className="overflow-x-auto w-full">
                <table className="w-full min-w-[800px] border-collapse text-left">
                  <thead>
                    <tr className="bg-white/[0.02] border-b border-b border-white/[0.08]">
                      <th className="px-6 py-4 text-xs font-mono uppercase tracking-[0.16em] text-accent font-semibold w-1/4">Use Case</th>
                      <th className="px-6 py-4 text-xs font-mono uppercase tracking-[0.16em] text-accent font-semibold w-5/12">DatraX Action</th>
                      <th className="px-6 py-4 text-xs font-mono uppercase tracking-[0.16em] text-accent font-semibold w-1/3">Executive Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        useCase: 'Malware-Led Exfiltration',
                        action: 'Tracks non-human process IDs attempting to exfiltrate camouflaged PII and blocks in-flight',
                        outcome: 'Exposes stealth breaches instantly; confirms no data left authorised infrastructure'
                      },
                      {
                        useCase: 'GenAI Disclosure Prevention',
                        action: 'Inspects payload uploads to public LLMs, blocks unauthorised transmission, enables safe AI adoption',
                        outcome: 'Enables CIOs to permit AI tool usage without blanket bans or unmanaged risk'
                      },
                      {
                        useCase: 'Insider Threat Governance',
                        action: 'Evaluates actor intent and recipient against business logic, suspends unauthorised transmissions before execution',
                        outcome: 'Reduces insider risk incidents and produces forensic evidence for investigation'
                      },
                      {
                        useCase: 'DPDP Compliance Readiness',
                        action: 'Classifies Aadhaar, PAN, and personal data in motion, generates immutable audit trails across all channels',
                        outcome: 'Converts DPDP compliance from a policy statement into a continuously operating, evidence-backed discipline'
                      },
                      {
                        useCase: 'Stealth Cloud Exfiltration',
                        action: 'Intercepts files staged in personal webmail drafts and covert cloud upload paths before boundary crossing',
                        outcome: 'Closes bypass techniques that legacy DLP has no visibility into'
                      }
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-white/[0.04] hover:bg-white/[0.01] transition-colors">
                        <td className="px-6 py-5 text-sm font-semibold text-foreground">{row.useCase}</td>
                        <td className="px-6 py-5 text-sm text-foreground-muted leading-relaxed">{row.action}</td>
                        <td className="px-6 py-5 text-sm text-foreground-muted leading-relaxed">{row.outcome}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-semibold text-foreground tracking-tight mb-8 leading-[0.9] text-gradient">
              Ready to govern data <br />
              <span className="bg-gradient-to-r from-accent via-emerald-400 to-accent bg-clip-text text-transparent">before it leaves?</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <Link to="/contact?source=datrax" className="px-10 py-5 rounded-xl bg-accent text-white font-semibold text-sm transition-all hover:bg-accent-bright shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                Request a Demo
              </Link>
              <Link to="/contact?source=datrax" className="px-10 py-5 rounded-xl glass border border-white/[0.06] text-foreground font-semibold text-sm hover:bg-white/[0.05] transition-all">
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DatraX;
