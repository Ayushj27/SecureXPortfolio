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
import ThreatForgeHydraInfographic from '@/components/ThreatForgeHydraInfographic';
import RadarEffectDemo from '@/components/ui/radar-effect-demo';

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
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,48,255,0.16),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(58,209,173,0.08),transparent_34%)]" />
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
  <WidgetFrame label="Surface Pulse" status="Live Discovery">
    <div className="grid grid-cols-[1.2fr_0.8fr] gap-4">
      <div>
        <div className="mb-3 flex h-20 items-end gap-2 rounded-2xl border border-white/8 bg-black/18 px-3 pb-3 pt-4">
          {[28, 42, 36, 58, 46, 70, 52, 64, 44, 74].map((height, index) => (
            <motion.div
              key={index}
              className="flex-1 rounded-full bg-gradient-to-t from-blue-500/20 via-cyan-300/55 to-white/90 shadow-[0_0_16px_rgba(96,165,250,0.22)]"
              animate={{ height: [`${Math.max(18, height - 12)}%`, `${height}%`, `${Math.max(24, height - 6)}%`] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.06 }}
            />
          ))}
        </div>
        <div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-[0.18em] text-foreground-muted">
          <span>Shadow IT attribution</span>
          <span className="text-blue-300">+4 anomalies</span>
        </div>
      </div>
      <div className="rounded-2xl border border-white/8 bg-black/18 p-3">
        <div className="text-[9px] font-mono uppercase tracking-[0.18em] text-foreground-muted">Asset DNA</div>
        <div className="mt-3 space-y-2">
          {[
            { label: 'First-party', width: '72%', tone: 'from-blue-400/85 to-blue-300/20' },
            { label: 'Third-party', width: '46%', tone: 'from-[#0030FF]/75 to-[#0030FF]/15' },
            { label: 'Shadow IT', width: '28%', tone: 'from-cyan-300/85 to-cyan-200/15' },
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
  <WidgetFrame label="Live Breach Simulation" status="3 Steps to Crown Jewel">
    <div className="rounded-2xl border border-white/8 bg-black/18 p-4">
      <div className="relative h-24 overflow-hidden rounded-xl border border-white/6 bg-[radial-gradient(circle_at_center,rgba(0,48,255,0.08),transparent_58%)]">
        <div className="absolute left-5 right-5 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-blue-400/35 via-red-400/35 to-emerald-400/35" />
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className="absolute top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border border-white/15 bg-background-elevated shadow-[0_0_18px_rgba(0,48,255,0.18)]"
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
          className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-red-400 shadow-[0_0_18px_rgba(248,113,113,0.9)]"
          animate={{ left: ['12%', '36%', '60%', '84%'], opacity: [0.45, 1, 1, 0.7] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 h-10 w-10 -translate-y-1/2 rounded-full border border-red-400/30"
          animate={{ left: ['8%', '32%', '56%', '80%'], opacity: [0, 0.5, 0.22, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-[9px] font-mono uppercase tracking-[0.16em] text-foreground-muted">
        <div className="rounded-xl border border-white/8 bg-white/[0.03] px-2.5 py-2 text-center">Ingress</div>
        <div className="rounded-xl border border-white/8 bg-white/[0.03] px-2.5 py-2 text-center">Pivot</div>
        <div className="rounded-xl border border-white/8 bg-white/[0.03] px-2.5 py-2 text-center">Crown Jewel</div>
      </div>
    </div>
  </WidgetFrame>
);

const MitreHeatmapVisual = () => (
  <WidgetFrame label="MITRE Heatmap" status="Blocked vs. Executed">
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
                  level > 0.5 ? 'linear-gradient(180deg, rgba(99,102,241,0.82), rgba(49,46,129,0.38))' :
                    'linear-gradient(180deg, rgba(74,222,128,0.4), rgba(20,83,45,0.25))',
            }}
          />
        ))}
      </div>
      <div className="rounded-2xl border border-white/8 bg-black/18 p-3 text-[9px] font-mono uppercase tracking-[0.14em] text-foreground-muted">
        <div className="mb-3 text-white/80">Signal</div>
        <div className="space-y-3">
          <div>
            <div className="mb-1 h-2 rounded-full bg-gradient-to-r from-red-500/90 to-red-300/40" />
            <span>Execute</span>
          </div>
          <div>
            <div className="mb-1 h-2 rounded-full bg-gradient-to-r from-[#0030FF]/90 to-[#0030FF]/40" />
            <span>Detect</span>
          </div>
          <div>
            <div className="mb-1 h-2 rounded-full bg-gradient-to-r from-emerald-500/70 to-emerald-300/30" />
            <span>Block</span>
          </div>
        </div>
      </div>
    </div>
  </WidgetFrame>
);

const RiskBoardVisual = () => (
  <WidgetFrame label="AI Security Assistant" status="Top 3 Risks">
    <div className="rounded-2xl border border-white/8 bg-black/18 p-3.5">
      <div className="rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2.5 text-sm text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
        What should the CISO fix before the next validation cycle?
      </div>
      <motion.div
        className="mt-3 rounded-xl border border-accent/20 bg-[linear-gradient(180deg,rgba(0,48,255,0.18),rgba(0,48,255,0.08))] px-3 py-3 text-sm text-foreground"
        animate={{ opacity: [0.76, 1, 0.84], y: [0, -1, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        Exposed API cluster, 2-step breach path to privileged workload, and drifting ISO evidence coverage.
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
    { label: 'ISO control mapped', time: '09:14', tone: 'bg-emerald-400' },
    { label: 'SOC evidence signed', time: '10:32', tone: 'bg-cyan-300' },
    { label: 'Risk exception closed', time: '12:08', tone: 'bg-[#0030FF]' },
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
            <div className="relative h-[154px] overflow-hidden rounded-[18px] border border-white/6 bg-[radial-gradient(circle_at_top,rgba(0,48,255,0.10),transparent_58%)] px-3 py-2.5">
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
                    <stop offset="0%" stopColor="rgba(52,211,153,0.38)" />
                    <stop offset="60%" stopColor="rgba(45,212,191,0.16)" />
                    <stop offset="100%" stopColor="rgba(45,212,191,0.02)" />
                  </linearGradient>
                  <linearGradient id="compliance-line" x1="0" x2="1">
                    <stop offset="0%" stopColor="rgba(103,232,249,0.86)" />
                    <stop offset="100%" stopColor="rgba(52,211,153,0.96)" />
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
              <div className="text-[8px]">Protect</div>
              <div className="mt-1 h-1.5 rounded-full bg-white/6"><div className="h-full w-[88%] rounded-full bg-emerald-400/80" /></div>
            </div>
            <div>
              <div className="text-[8px]">Detect</div>
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
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-[#0030FF]/10 opacity-50" />

      {/* Central Node */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center z-20 shadow-[0_0_30px_rgba(0,48,255,0.4)]"
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
                i % 3 === 1 ? <Globe className="w-4 h-4 text-[#0030FF]" /> :
                  <Cpu className="w-4 h-4 text-emerald-400" />}
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
          <div className="text-[10px] font-mono text-foreground-muted uppercase tracking-widest mb-1">Asset Graph</div>
          <div className="text-xl font-bold text-foreground">Relation Engine</div>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400">
          <Activity className="w-3 h-3" />
          LIVE MAPPING
        </div>
      </div>
    </div>
  );
};

const ThreatForge = () => {
  const pillars = [
    {
      title: 'External Attack Surface Management (EASM)',
      icon: Globe,
      desc: 'See what attackers see, before they do. Proprietary global scanning engine providing independent, internet-wide reconnaissance.',
      features: [
        'Continuous Discovery: IPv4, IPv6, and dual-stack assets with hourly scan frequencies.',
        'Shadow IT Detection: Uncover unknown assets and ephemeral cloud resources within 24 hours.',
        'Deep Fingerprinting: Enumerate services across 2,500+ ports using headless browser crawling.',
        'Leaked Data Monitoring: Detect exposed source code and credentials on the dark web.'
      ]
    },
    {
      title: 'Breach & Attack Simulation (BAS)',
      icon: Target,
      desc: 'Safe simulations. Real-world results. Validate your security controls by safely simulating the full cyber kill-chain.',
      features: [
        'Safe Execution: Behavioral simulations that never deploy real malware or connect to actual C2.',
        'Advanced Scenarios: Test against Ransomware behavior, Lateral Movement, and complex AD paths.',
        'Measurable Metrics: Automatically calculate MTTA and MTTR to identify specific control gaps.'
      ]
    },
    {
      title: 'AI-Native Security Orchestration',
      icon: Cpu,
      desc: 'The AI Assistant for CISOs and Analysts. Transform complex security data into natural language insights.',
      features: [
        'Conversational Interface: Ask "What is our biggest risk today?" and receive real-time summaries.',
        'Attack Path Reasoning: Use LLMs to perform "What-If" analysis specific to your environment.',
        'Strict Safety: Built-in guardrails ensure customer data is never shared with external LLM providers.'
      ]
    },
    {
      title: 'Evidence-Based GRC',
      icon: CheckCircle2,
      desc: 'Automated compliance. Audit-ready evidence. Map every discovery directly to major regulatory frameworks.',
      features: [
        'Framework Mapping: Automatically map findings to ISO 27001, NIST CSF, SOC 2, and CIS Controls.',
        'Objective Scoring: Calculate compliance readiness based on real-world evidence.',
        'Cryptographic Proof: Generate audit-ready evidence bundles featuring signed artifacts.'
      ]
    }
  ];

  const commandWidgets = [
    {
      title: 'Surface Intelligence Hub',
      eyebrow: 'Attack Surface Atlas',
      icon: Globe,
      accent: 'text-blue-400',
      border: 'border-blue-400/20',
      summary: 'Convert discovery into action with live visibility into unknown critical assets, shadow IT, and exposed APIs.',
      metrics: [
        'Unknown critical assets: 12',
        'Exposed APIs under review: 38',
        'New domains attributed in < 24 hours',
      ],
      visual: <SurfacePulseVisual />,
    },
    {
      title: 'Risk Navigator',
      eyebrow: 'Breach Path Engine',
      icon: Radar,
      accent: 'text-red-400',
      border: 'border-red-400/20',
      summary: 'Prioritize the shortest path to impact with blast-radius mapping, crown-jewel reachability, and node-break analysis.',
      metrics: [
        'Active attack paths: 7',
        'Crown jewel reachability: 3 steps',
        'Node-break candidate removes 4 paths',
      ],
      visual: <BreachPathVisual />,
    },
    {
      title: 'Attack Validation Lab',
      eyebrow: 'Control Reality Check',
      icon: Target,
      accent: 'text-emerald-400',
      border: 'border-emerald-400/20',
      summary: 'Prove whether controls detect and block real-world behavior with simulation-backed MITRE coverage and response metrics.',
      metrics: [
        'Success vs. blocked ratio: 21 / 79',
        'MTTA: 11 minutes',
        'MTTR: 46 minutes',
      ],
      visual: <MitreHeatmapVisual />,
    },
    {
      title: 'Cyber Risk Board',
      eyebrow: 'Risk Command Center',
      icon: Cpu,
      accent: 'text-accent',
      border: 'border-accent/20',
      summary: 'Give leaders a validated risk view based on exploitability, live exposure, and measurable risk reduction over time.',
      metrics: [
        'Validated risk score: 67 / 100',
        'Exploitable exposure: 31%',
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
      summary: 'Turn validated fixes into auditor-ready evidence with live readiness scoring across protect, detect, and respond controls.',
      metrics: [
        'ISO 27001 readiness: 88%',
        'NIST Detect category: 81%',
        'Signed evidence bundles generated daily',
      ],
      visual: <ComplianceDriftVisual />,
    },
  ];

  const integrationCategories = [
    { label: 'ITSM & Workflow', desc: 'Jira, ServiceNow, Freshservice' },
    { label: 'SIEM / SOAR', desc: 'Splunk, Microsoft Sentinel, Cortex XSOAR' },
    { label: 'Vulnerability Management', desc: 'Tenable, Qualys, Rapid7' },
    { label: 'Endpoint & Detection', desc: 'CrowdStrike, Microsoft Defender, SentinelOne' },
  ];

  const uspRows = [
    {
      title: 'The Unified Control Plane',
      modernName: 'Risk Command Center',
      icon: Zap,
      accent: 'text-accent',
      proof: 'EASM + BAS + LLM orchestration + GRC in one operating surface',
      difference: 'ThreatForge links external exposure directly to attack paths and compliance gaps instead of splitting them across isolated products.',
      impact: 'Closes the visibility gap between what attackers see and how internal controls actually perform.',
    },
    {
      title: 'Proprietary Global Intelligence',
      modernName: 'Attack Surface Atlas',
      icon: Globe,
      accent: 'text-cyan-300',
      proof: 'Independent internet-wide scanning across 2,500+ ports',
      difference: 'ThreatForge runs its own reconnaissance engine rather than depending on third-party aggregators like Shodan or Censys.',
      impact: 'Finds newly registered domains, subdomains, and shadow IT within 24 hours that other platforms often miss.',
    },
    {
      title: 'AI-Native Security Assistant',
      modernName: 'Cyber Risk Board',
      icon: Cpu,
      accent: 'text-[#0030FF]',
      proof: 'Conversational CISO interface with blast-radius reasoning',
      difference: 'The assistant performs what-if analysis and attack-path reasoning instead of just summarizing alerts.',
      impact: 'Gives leaders and analysts a fast explanation of probable business impact before remediation starts.',
    },
    {
      title: 'Evidence-Based Compliance',
      modernName: 'Attack Validation Lab',
      icon: CheckCircle2,
      accent: 'text-emerald-300',
      proof: 'Readiness scores backed by scan and simulation evidence',
      difference: 'ISO 27001, NIST CSF, and SOC 2 posture is calculated from real telemetry rather than manual self-attestation.',
      impact: 'Produces cryptographically signed evidence bundles and turns compliance into a continuous, non-repudiable process.',
    },
    {
      title: 'Total Deployment Versatility',
      modernName: 'Deployment Fabric',
      icon: Shield,
      accent: 'text-amber-300',
      proof: 'SaaS, hybrid, and on-premise support',
      difference: 'ThreatForge supports on-prem attacker infrastructure and on-prem AI so sensitive data never has to leave the customer network.',
      impact: 'Meets data residency and privacy mandates that block enterprise adoption of cloud-only security tools.',
    },
  ];

  const modernDifferentiatorNames = [
    'Attack Surface Atlas',
    'Breach Path Engine',
    'Attack Validation Lab',
    'Cyber Risk Board',
    'Risk Command Center',
  ];

  const whyThreatForgeReasons = [
    {
      title: 'The Power of a Unified Control Plane',
      icon: Zap,
      accent: 'text-accent',
      proof: 'EASM, BAS, AI orchestration, and GRC consolidated into one Risk Command Center.',
      advantage: 'ThreatForge replaces fragmented security tooling with one platform that links external visibility, internal validation, and compliance context.',
      value: 'You get one clear security posture view instead of visibility gaps between what attackers see and how defenses actually perform.',
    },
    {
      title: 'Proprietary, Independent Intelligence',
      icon: Globe,
      accent: 'text-cyan-300',
      proof: 'Continuous internet-wide reconnaissance with discovery of new domains and services across 2,500+ ports.',
      advantage: 'ThreatForge runs its own scanning engine instead of depending on third-party aggregators like Shodan or Censys.',
      value: 'That means faster discovery of shadow IT, newly registered domains, and exposed services that other tools often miss.',
    },
    {
      title: 'Safe, Real-World Validation',
      icon: Target,
      accent: 'text-emerald-300',
      proof: 'BAS safely executes 200+ MITRE ATT&CK techniques across Windows and Linux environments.',
      advantage: 'ThreatForge proves what is actually exploitable by stress-testing your EDR, SIEM, and firewall controls against real adversary behavior.',
      value: 'You move from theoretical findings to validated risk, including measurable MTTA and MTTR for live defensive performance.',
    },
    {
      title: 'An AI-Native CISO Assistant',
      icon: Cpu,
      accent: 'text-[#0030FF]',
      proof: 'LLM-driven reasoning with graphdb-backed attack path analysis and blast-radius simulation.',
      advantage: 'The AI assistant turns technical telemetry into natural-language decisions and supports what-if analysis on crown-jewel reachability.',
      value: 'Executives and analysts can ask what the biggest risk is today and receive a prioritized action plan instead of another alert queue.',
    },
    {
      title: 'Evidence-Based Compliance',
      icon: CheckCircle2,
      accent: 'text-emerald-300',
      proof: 'Technical findings mapped directly to ISO 27001, NIST CSF, and SOC 2 with signed evidence bundles.',
      advantage: 'ThreatForge replaces manual self-attestation with objective readiness scoring based on scans and simulations.',
      value: 'Auditors receive non-repudiable proof that controls are not only present, but effective in practice.',
    },
    {
      title: 'Deployment Flexibility for Regulated Environments',
      icon: Shield,
      accent: 'text-amber-300',
      proof: 'SaaS, on-premise, and hybrid deployment options with on-prem attacker infrastructure and on-prem AI support.',
      advantage: 'ThreatForge can operate in privacy-sensitive and highly regulated environments without forcing a cloud-only model.',
      value: 'You keep control of data residency and isolation requirements while receiving the same level of protection and validation.',
    },
  ];

  const integrationBrands = [
    { name: 'ServiceNow', detail: 'Incidents, assignment groups, remediation ticket state' },
    { name: 'Jira', detail: 'Findings, owner workflows, fix tracking and SLA status' },
    { name: 'Splunk', detail: 'Detection alerts, correlation searches, response telemetry' },
    { name: 'Microsoft Sentinel', detail: 'Incidents, analytics rules, investigation context' },
    { name: 'CrowdStrike', detail: 'Endpoint detections, host context, prevention events' },
    { name: 'Tenable', detail: 'Asset exposure, vulnerability severity, plugin evidence' },
    { name: 'Qualys', detail: 'VM findings, asset tags, compliance scan results' },
    { name: 'Rapid7', detail: 'Exposure data, remediation projects, validation status' },
  ];

  return (
    <div className="pt-32 min-h-screen relative">
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
                  Continuous Threat Exposure Management
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-semibold text-foreground tracking-[-0.03em] mb-8 leading-[0.9] text-gradient">
                ThreatForge: <br />
                <span className="accent-gradient">
                  Unified Security.
                </span>
              </h1>
              <p className="max-w-xl text-foreground-muted text-xl mb-12 leading-relaxed">
                One Platform. Total Visibility. Proven Defense. The industry's first unified, AI-driven control plane for enterprise security.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link to="/contact?source=threatforge" className="relative group px-8 py-4 rounded-lg bg-accent text-white font-semibold text-sm transition-all hover:bg-accent-bright shadow-[0_0_0_1px_rgba(0,48,255,0.5),0_4px_12px_rgba(0,48,255,0.3)]">
                  Request a Demo
                </Link>
                <a href="#threatforge-architecture" className="group flex items-center gap-3 text-foreground font-semibold text-sm hover:text-accent transition-colors">
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

      <section className="py-20 relative md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-14">
            <div className="mb-4 text-[10px] font-mono uppercase tracking-[0.24em] text-accent">
              ThreatForge Capability Radar
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold text-foreground tracking-tight mb-6 text-gradient">
              Interactive Service Signal View
            </h2>
            <p className="text-foreground-muted max-w-3xl mx-auto text-lg leading-relaxed">
              A radar-style capability map that highlights the connected functions ThreatForge can orchestrate across
              engineering, operations, and platform workflows.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <RadarEffectDemo />
          </motion.div>
        </div>
      </section>

      {/* Technical Infographic */}
      <section id="threatforge-architecture" className="scroll-mt-32 py-20 relative overflow-hidden md:scroll-mt-36 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-14">
            <h2 className="text-4xl md:text-6xl font-semibold text-foreground tracking-tight mb-6 text-gradient">
              ThreatForge Architecture Mesh
            </h2>
            <p className="text-foreground-muted max-w-3xl mx-auto text-lg leading-relaxed">
              A simplified client-facing architecture view showing how ThreatForge collects security signals, correlates them in one platform, and delivers clear outcomes to security, risk, and compliance teams.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <ThreatForgeHydraInfographic />
          </motion.div>
        </div>
      </section>

      {/* The Four Pillars */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-semibold text-foreground tracking-tight mb-6 text-gradient">
              The Four Pillars of Modern Security
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto text-lg">
              Consolidating fragmented security functions into a single, proactive control plane.
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
              ThreatForge should behave like an operating system for exposure, validation, risk, and compliance, not a static dashboard of totals.
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
                  Adversary Intelligence Hub
                </div>
                <h3 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4">
                  Map external adversary signals directly into exposure and response priorities.
                </h3>
                <p className="text-foreground-muted text-base leading-relaxed max-w-2xl">
                  ThreatForge should connect dark web monitoring, secret leakage, ransomware observations, and phishing simulation into one intelligence stream that helps teams decide what matters now.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: 'Dark Web Mentions', value: '14', tone: 'text-red-400', icon: Search },
                  { label: 'Leaked Secrets', value: '9', tone: 'text-amber-300', icon: Lock },
                  { label: 'Active Phishing Themes', value: '6', tone: 'text-blue-400', icon: Mail },
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

      {/* Why ThreatForge? */}
      <section className="py-20 relative md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-accent mb-4">
              Why ThreatForge
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold text-foreground tracking-tight mb-6 text-gradient">
              Why ThreatForge?
            </h2>
            <p className="text-lg leading-relaxed text-foreground-muted">
              ThreatForge should be positioned as a unified enterprise security platform, not another point solution. It replaces point-in-time assessments with continuous, AI-driven validation backed by operational evidence.
            </p>
          </div>

          <div className="rounded-[30px] glass border border-white/[0.06] p-6 md:p-8">
            <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
              <div className="rounded-[24px] border border-white/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5 md:p-6">
                <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-foreground-muted">Client Summary</div>
                <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                  Choosing ThreatForge means moving from uncertainty to evidence.
                </h3>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground-muted">
                  Clients get a continuous validation engine that shows what is exposed, what is exploitable, and what is proven effective across one unified platform instead of a stack of disconnected point solutions.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {[
                  ['Unified platform', 'Replaces fragmented point-in-time tooling'],
                  ['Validated risk', 'Shows actual control performance, not theoretical findings'],
                  ['Evidence-driven compliance', 'Produces signed proof instead of manual attestations'],
                  ['Operational fit', 'Supports SaaS, hybrid, and on-premise environments'],
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
                ['5%+', 'Month-over-month risk reduction target'],
                ['30%+', 'Improvement in control effectiveness'],
                ['200+', 'MITRE ATT&CK techniques validated'],
                ['2,500+', 'Ports enumerated by independent scanning'],
              ].map(([value, detail]) => (
                <div key={value} className="rounded-2xl border border-white/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] px-4 py-4">
                  <div className="text-2xl font-semibold tracking-tight text-foreground">{value}</div>
                  <div className="mt-1 text-sm leading-relaxed text-foreground-muted">{detail}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
              {whyThreatForgeReasons.map((reason, index) => (
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
                      <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-foreground-muted">ThreatForge Advantage</div>
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
      <section className="py-20 relative overflow-hidden md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-[32px] border border-white/[0.06] relative overflow-hidden p-8 md:p-12 lg:p-14">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-[#0030FF]/5" />

            <div className="relative z-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6 leading-tight">
                  Seamless Integration with <br />
                  <span className="accent-gradient">Your Ecosystem.</span>
                </h2>
                <p className="text-foreground-muted text-lg mb-8 max-w-xl leading-relaxed">
                  ThreatForge integrates with the security solutions your teams already use, connecting ticketing, SIEM, vulnerability management, and endpoint tooling into one coordinated operating model.
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
                        'Security tools',
                        'ThreatForge',
                        'Actionable workflows',
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

      <section className="py-20 relative md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 text-[10px] font-mono uppercase tracking-[0.24em] text-accent">
              ThreatForge Differentiators
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground text-gradient">
              Easier to operate, harder to replace.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-foreground-muted">
              ThreatForge unifies exposure management, validation, AI reasoning, and compliance proof into one evidence-based control plane so teams can make faster decisions with less tooling overhead.
            </p>
          </div>

          <div className="mt-10 rounded-[30px] glass border border-white/[0.06] p-6 md:p-8">
            <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr] md:gap-6">
              <div className="rounded-[24px] border border-white/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5 md:p-6">
                <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-foreground-muted">Core Value Proposition</div>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                  Continuous, evidence-based security validation in one platform.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground-muted md:text-base">
                  Replace fragmented point solutions with a single operating layer that ties external reconnaissance, attack-path reasoning, AI orchestration, and compliance readiness into one validated view of risk.
                </p>
              </div>

              <div className="rounded-[24px] border border-white/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-5 md:p-6">
                <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-foreground-muted">Modern Product Names</div>
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
              Ready to turn risk <br />
              <span className="accent-gradient">into readiness?</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <Link to="/contact?source=threatforge" className="px-10 py-5 rounded-xl bg-accent text-white font-semibold text-sm transition-all hover:bg-accent-bright shadow-[0_0_30px_rgba(0,48,255,0.3)]">
                Request a Demo
              </Link>
              <Link to="/contact?source=threatforge" className="px-10 py-5 rounded-xl glass border border-white/[0.06] text-foreground font-semibold text-sm hover:bg-white/[0.05] transition-all">
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ThreatForge;
