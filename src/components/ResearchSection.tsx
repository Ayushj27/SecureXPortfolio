import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

const ResearchSection = () => {
  const reports = [
    { title: '2024 Threat Landscape', category: 'Annual Report', date: 'Jan 2024' },
    { title: 'AI in Cybersecurity', category: 'Whitepaper', date: 'Feb 2024' },
    { title: 'Zero Trust Architecture', category: 'Guide', date: 'Mar 2024' },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-mono tracking-widest uppercase mb-8"
            >
              SecureXLabs Research
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-semibold text-foreground tracking-tight leading-[0.9] text-gradient">
              Intelligence for the <br />
              <span className="text-foreground-muted">Security Community.</span>
            </h2>
          </div>
          <button className="relative group px-8 py-4 rounded-lg bg-white text-black font-semibold text-xs tracking-widest uppercase transition-all hover:bg-gray-100 shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_4px_12px_rgba(0,0,0,0.3)] active:scale-[0.98]">
            View All Research
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reports.map((report, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-[400px] rounded-2xl overflow-hidden glass glass-hover border border-white/[0.06]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-base/20 to-background-base/90 z-10" />
              <img 
                src={`https://picsum.photos/seed/research${i}/800/1200`} 
                alt={report.title}
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 p-10 flex flex-col justify-end z-20">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-accent text-[10px] font-mono tracking-widest uppercase">{report.category}</span>
                  <span className="text-foreground-muted text-[10px] font-mono tracking-widest uppercase">{report.date}</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-6 tracking-tight leading-tight">{report.title}</h3>
                <button className="flex items-center gap-2 text-foreground font-semibold text-xs tracking-widest uppercase hover:text-accent transition-colors">
                  Read Report <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
