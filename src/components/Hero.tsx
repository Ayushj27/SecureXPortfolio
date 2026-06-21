import React from 'react';
import { ChevronRight, Radar, Target } from 'lucide-react';
import { motion } from 'motion/react';
import StarField from './StarField';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2 mb-8">
              <div className="h-px w-8 bg-accent" />
              <span className="text-accent text-[10px] font-mono tracking-widest uppercase">
                Cyber Risk Intelligence Platform
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-semibold text-foreground tracking-[-0.03em] mb-8 leading-[0.9] text-gradient">
              SecureXLabs: <br />
              <span className="accent-gradient">
                ThreatForge.
              </span>
            </h1>
            <p className="max-w-xl text-foreground-muted text-lg mb-12 leading-relaxed">
              The industry’s first unified, AI-driven control plane for enterprise security. Consolidate EASM, BAS, and GRC into a single, proactive solution.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/threatforge" className="relative group px-8 py-4 rounded-lg bg-accent text-white font-semibold text-sm transition-all hover:bg-accent-bright shadow-[0_0_0_1px_rgba(0,48,255,0.5),0_4px_12px_rgba(0,48,255,0.3),inset_0_1px_0_0_rgba(255,255,255,0.2)] active:scale-[0.98]">
                Explore ThreatForge
              </Link>
              <Link to="/solutions" className="group flex items-center gap-3 text-foreground font-semibold text-sm hover:text-accent transition-colors">
                <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.06] flex items-center justify-center group-hover:border-accent/30 transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </div>
                See How it Works
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Risk Quantification Widget */}
            <div className="relative z-10 glass rounded-3xl p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_2px_20px_rgba(0,0,0,0.4),0_0_40px_rgba(0,0,0,0.2)] overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-[#0030FF]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex justify-between items-start mb-12">
                <div>
                  <div className="text-[10px] font-mono text-foreground-muted uppercase tracking-widest mb-1">Cyber Value at Risk</div>
                  <div className="text-4xl font-bold text-foreground">$4.2M</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-bold">
                  HIGH RISK
                </div>
              </div>

              <div className="space-y-8">
                {[
                  { label: 'Asset Criticality', value: 84, color: 'bg-accent' },
                  { label: 'Threat Exposure', value: 62, color: 'bg-[#0030FF]' },
                  { label: 'Compliance Posture', value: 91, color: 'bg-emerald-500' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-[10px] font-mono text-foreground-muted uppercase tracking-widest mb-3">
                      <span>{item.label}</span>
                      <span>{item.value}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${item.value}%` }}
                        transition={{ duration: 1.5, delay: 0.5 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className={`h-full ${item.color} shadow-[0_0_10px_rgba(0,48,255,0.5)]`} 
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-background-base bg-background-elevated flex items-center justify-center text-[10px] font-bold text-foreground-muted">
                      U{i}
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-background-base bg-accent flex items-center justify-center text-[10px] font-bold text-white">
                    +12
                  </div>
                </div>
                <div className="text-[10px] font-mono text-foreground-muted uppercase tracking-widest">
                  Live Monitoring Active
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 glass p-5 rounded-2xl shadow-xl z-20"
            >
              <Radar className="w-6 h-6 text-accent" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 glass p-5 rounded-2xl shadow-xl z-20"
            >
              <Target className="w-6 h-6 text-[#0030FF]" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
