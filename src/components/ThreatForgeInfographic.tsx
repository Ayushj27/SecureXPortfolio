import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  Target, 
  Cpu, 
  ShieldCheck, 
  Database, 
  Activity, 
  Zap, 
  Search,
  Lock,
  Network,
  FileCheck,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface DataPacket {
  id: string;
  from: 'easm' | 'bas' | 'ai' | 'grc' | 'hub';
  to: 'easm' | 'bas' | 'ai' | 'grc' | 'hub';
  label: string;
  color: string;
}

type NodeId = 'easm' | 'bas' | 'ai' | 'grc' | 'hub';

type NodeGeometry = {
  x: string;
  y: string;
  xNum: number;
  yNum: number;
  anchorX: number;
  anchorY: number;
  controlX: number;
  controlY: number;
};

const ThreatForgeInfographic = () => {
  const [activePackets, setActivePackets] = useState<DataPacket[]>([]);
  const [activeStep, setActiveStep] = useState(0);

  const nodeGeometry: Record<NodeId, NodeGeometry> = {
    easm: { x: '28%', y: '24%', xNum: 28, yNum: 24, anchorX: 32.4, anchorY: 19.2, controlX: 39.5, controlY: 27.5 },
    bas: { x: '72%', y: '24%', xNum: 72, yNum: 24, anchorX: 67.6, anchorY: 19.2, controlX: 60.5, controlY: 27.5 },
    ai: { x: '30%', y: '53%', xNum: 30, yNum: 53, anchorX: 34.6, anchorY: 48.2, controlX: 41.5, controlY: 50.5 },
    grc: { x: '70%', y: '53%', xNum: 70, yNum: 53, anchorX: 65.4, anchorY: 48.2, controlX: 58.5, controlY: 50.5 },
    hub: { x: '50%', y: '50%', xNum: 50, yNum: 50, anchorX: 50, anchorY: 50, controlX: 50, controlY: 50 },
  };

  const steps = [
    { id: 'easm', title: 'Discovery (EASM)', icon: Globe, color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/30' },
    { id: 'bas', title: 'Validation (BAS)', icon: Target, color: 'text-red-400', bg: 'bg-red-400/10', border: 'border-red-400/30' },
    { id: 'ai', title: 'Intelligence (AI)', icon: Cpu, color: 'text-accent', bg: 'bg-accent/10', border: 'border-accent/30' },
    { id: 'grc', title: 'Compliance (GRC)', icon: ShieldCheck, color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/30' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
      
      // Generate random packets
      const froms: ('easm' | 'bas' | 'ai' | 'grc' | 'hub')[] = ['easm', 'bas', 'ai', 'grc', 'hub'];
      const from = froms[Math.floor(Math.random() * froms.length)];
      let to: 'easm' | 'bas' | 'ai' | 'grc' | 'hub' = 'hub';
      if (from === 'hub') {
        const tos: ('easm' | 'bas' | 'ai' | 'grc')[] = ['easm', 'bas', 'ai', 'grc'];
        to = tos[Math.floor(Math.random() * tos.length)];
      }

      const labels = {
        easm: ['IPv4 Scan', 'New Domain', 'Shadow IT'],
        bas: ['MITRE T1059', 'Lateral Move', 'Control Check'],
        ai: ['Blast Radius', 'Attack Path', 'What-If'],
        grc: ['ISO 27001', 'NIST CSF', 'SOC 2 Evidence'],
        hub: ['Graph Update', 'Relationship', 'Asset Sync']
      };

      const newPacket: DataPacket = {
        id: Math.random().toString(36).substr(2, 9),
        from,
        to,
        label: labels[from][Math.floor(Math.random() * labels[from].length)],
        color: from === 'hub' ? 'bg-accent' : 
               from === 'easm' ? 'bg-blue-400' : 
               from === 'bas' ? 'bg-red-400' : 
               from === 'ai' ? 'bg-accent' : 'bg-emerald-400'
      };

      setActivePackets(prev => [...prev.slice(-10), newPacket]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getNodePos = (id: NodeId) => nodeGeometry[id];

  const getConnectorPath = (id: Exclude<NodeId, 'hub'>) => {
    const node = nodeGeometry[id];
    return `M ${node.anchorX} ${node.anchorY} Q ${node.controlX} ${node.controlY} 50 50`;
  };

  return (
    <div className="w-full max-w-5xl mx-auto aspect-[16/9] relative glass rounded-[40px] border border-white/[0.08] overflow-hidden px-6 py-6 md:px-10 md:py-8 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-[#0030FF]/5" />
      
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,48,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute inset-x-12 bottom-0 h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />

      {/* Connection Lines */}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none">
        {steps.map((step) => {
          return (
            <motion.path
              key={step.id}
              d={getConnectorPath(step.id as Exclude<NodeId, 'hub'>)}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.95"
              strokeLinecap="round"
              className={cn('opacity-18', step.color)}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.18 }}
              transition={{ duration: 1.6 }}
            />
          );
        })}
      </svg>

      {/* Data Packets */}
      <AnimatePresence>
        {activePackets.map((packet) => {
          const from = getNodePos(packet.from);
          const to = getNodePos(packet.to);
          return (
            <motion.div
              key={packet.id}
              initial={{ left: from.x, top: from.y, opacity: 0, scale: 0 }}
              animate={{ left: to.x, top: to.y, opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className={cn("absolute -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center")}
            >
              <div className={cn("w-2 h-2 rounded-full shadow-[0_0_10px_currentColor]", packet.color.replace('bg-', 'text-'))} />
              <div className="mt-2 px-2 py-0.5 rounded bg-black/40 backdrop-blur-sm border border-white/10 text-[8px] font-mono whitespace-nowrap text-white/75 hidden 3xl:block">
                {packet.label}
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Central Hub: Unified Control Plane */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative">
          <div className="absolute -inset-8 bg-accent/20 blur-3xl opacity-30 rounded-full animate-pulse" />
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full glass border-2 border-accent/40 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(0,48,255,0.3)]">
            <Database className="w-8 h-8 md:w-10 md:h-10 text-accent mb-2" />
            <div className="text-[10px] font-mono text-accent font-bold uppercase tracking-tighter">Relational</div>
            <div className="text-[8px] font-mono text-foreground-muted uppercase">Control Plane</div>
          </div>
        </div>
      </motion.div>

      {/* Pillar Nodes */}
      {steps.map((step, i) => {
        const pos = getNodePos(step.id as Exclude<NodeId, 'hub'>);
        const isActive = activeStep === i;

        return (
          <motion.div
            key={step.id}
            className="absolute z-20"
            style={{ left: pos.x, top: pos.y, transform: 'translate(-50%, -50%)' }}
            animate={{ 
              scale: isActive ? 1.1 : 1,
              boxShadow: isActive ? `0 0 30px ${step.color.replace('text-', 'rgba(')}` : 'none'
            }}
          >
            <div className={cn(
              "w-20 h-20 md:w-24 md:h-24 rounded-2xl glass border flex flex-col items-center justify-center p-3 md:p-4 transition-all duration-500",
              step.bg,
              isActive ? step.border.replace('/30', '/60') : step.border
            )}>
              <step.icon className={cn("w-6 h-6 md:w-8 md:h-8 mb-1.5 md:mb-2", step.color)} />
              <div className="text-[9px] md:text-[10px] font-bold text-center leading-tight text-foreground">
                {step.title.split(' ')[0]}
              </div>
              <div className="text-[7px] md:text-[8px] font-mono text-foreground-muted">
                {step.title.split(' ')[1]}
              </div>
            </div>

            <div className="mt-2 hidden 2xl:flex items-center justify-center">
              <div className="px-2 py-1 rounded-full bg-black/25 border border-white/8 text-[8px] font-mono text-foreground-muted uppercase tracking-wide">
                {step.id === 'easm' && 'Recon'}
                {step.id === 'bas' && 'Simulate'}
                {step.id === 'ai' && 'Reason'}
                {step.id === 'grc' && 'Evidence'}
              </div>
            </div>
            
            {/* Status Indicator */}
            <div className="absolute -top-1 -right-1 flex gap-1">
              <motion.div 
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity }}
                className={cn("w-2 h-2 rounded-full", step.color.replace('text-', 'bg-'))} 
              />
            </div>
          </motion.div>
        );
      })}

      {/* Technical Labels & Overlays */}
      <div className="absolute bottom-2 left-1/2 z-10 w-[min(72%,520px)] -translate-x-1/2 pointer-events-none">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.08fr)_minmax(180px,0.82fr)] gap-3">
          <div className="rounded-2xl bg-black/24 px-4 py-2 backdrop-blur-md border border-white/8">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-4 h-4 text-accent" />
              <span className="text-[10px] font-mono text-accent uppercase tracking-[0.22em] font-bold">System Status: Active</span>
            </div>
            <div className="text-[10px] font-mono text-foreground-muted leading-relaxed">
              {activeStep === 0 && "Continuous external reconnaissance across IPv4, IPv6, and shadow infrastructure with rapid change detection."}
              {activeStep === 1 && "Safe control validation across high-value attack paths, mapped to MITRE techniques and control outcomes."}
              {activeStep === 2 && "AI-assisted attack path reasoning highlighting blast radius, containment boundaries, and priority response paths."}
              {activeStep === 3 && "Evidence-driven compliance mapping for ISO 27001, NIST, and audit-ready control verification artifacts."}
            </div>
          </div>

          <div className="rounded-2xl bg-black/24 px-4 py-2 backdrop-blur-md border border-white/8">
            <div className="text-[10px] font-mono text-foreground-muted uppercase tracking-[0.22em] mb-1">Architecture Overview</div>
            <div className="text-base font-bold text-foreground">Unified Control Plane v3.1</div>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <div className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[8px] font-mono text-foreground-muted">Relational Core</div>
              <div className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[8px] font-mono text-foreground-muted">MITRE Atlas</div>
              <div className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[8px] font-mono text-foreground-muted">Control Telemetry</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Tech Specs */}
      <div className="absolute top-1/2 left-8 md:left-10 -translate-y-1/2 space-y-3 hidden xl:block z-10">
        <div className="w-36 p-3 rounded-xl glass border border-white/5 space-y-1">
          <div className="text-[8px] font-mono text-accent uppercase">Scan Frequency</div>
          <div className="text-xs font-bold text-foreground">Hourly / Continuous</div>
        </div>
        <div className="w-36 p-3 rounded-xl glass border border-white/5 space-y-1">
          <div className="text-[8px] font-mono text-blue-400 uppercase">Discovery Speed</div>
          <div className="text-xs font-bold text-foreground">&lt; 24 Hours</div>
        </div>
      </div>

      <div className="absolute top-1/2 right-8 md:right-10 -translate-y-1/2 space-y-3 hidden xl:block z-10">
        <div className="w-36 p-3 rounded-xl glass border border-white/5 space-y-1">
          <div className="text-[8px] font-mono text-emerald-400 uppercase">Compliance</div>
          <div className="text-xs font-bold text-foreground">ISO 27001 / NIST</div>
        </div>
        <div className="w-36 p-3 rounded-xl glass border border-white/5 space-y-1">
          <div className="text-[8px] font-mono text-red-400 uppercase">Simulations</div>
          <div className="text-xs font-bold text-foreground">200+ Techniques</div>
        </div>
      </div>
    </div>
  );
};

export default ThreatForgeInfographic;
