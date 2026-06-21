import React from 'react';
import { Shield, Zap, Globe, Lock, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const TrustSection = () => {
  const certifications = [
    { name: 'SOC 2 Type II', desc: 'Enterprise-grade security standards and controls.' },
    { name: 'ISO 27001', desc: 'Global information security management system.' },
    { name: 'GDPR Compliant', desc: 'Strict data privacy and protection measures.' },
    { name: 'HIPAA Ready', desc: 'Healthcare-grade security and compliance.' },
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
            className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono tracking-widest uppercase mb-8"
          >
            Trust & Compliance
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-semibold text-foreground tracking-tight mb-8 text-gradient">
            Enterprise-Grade <br />
            <span className="text-foreground-muted">Security Standards.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group p-10 rounded-2xl glass glass-hover hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-xl bg-emerald-600/10 flex items-center justify-center mb-8 group-hover:bg-emerald-600/20 transition-colors">
                <Shield className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 tracking-tight">{cert.name}</h3>
              <p className="text-foreground-muted text-sm leading-relaxed font-medium">
                {cert.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
