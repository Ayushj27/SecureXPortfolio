import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Globe, Lock, ChevronRight } from 'lucide-react';

const NavigatorSection = () => {
  const tools = [
    { title: 'CyberNavigator Core', desc: 'The central hub for all your security operations and risk intelligence.', icon: Shield },
    { title: 'Risk Quantifier', desc: 'Advanced financial modeling for cyber threats and exposure.', icon: Zap },
    { title: 'Compliance Automator', desc: 'Continuous monitoring and reporting for global standards.', icon: Globe },
    { title: 'Threat Intelligence', desc: 'Real-time feed of emerging threats and adversarial tactics.', icon: Lock },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-mono tracking-widest uppercase mb-8"
          >
            CyberNavigator Suite
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-semibold text-foreground tracking-tight mb-8 text-gradient">
            The Ultimate Toolkit for <br />
            <span className="text-foreground-muted">Security Professionals.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group p-10 rounded-2xl glass glass-hover hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent/20 transition-colors">
                <tool.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 tracking-tight">{tool.title}</h3>
              <p className="text-foreground-muted text-sm leading-relaxed font-medium mb-8">
                {tool.desc}
              </p>
              <button className="flex items-center gap-2 text-foreground font-semibold text-xs tracking-widest uppercase hover:text-accent transition-colors">
                Explore Tool <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavigatorSection;
