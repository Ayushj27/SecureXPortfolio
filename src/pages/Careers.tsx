import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

const Careers = () => {
  const jobs = [
    {
      title: 'Senior Security Researcher',
      location: 'San Francisco, CA',
      type: 'Full-time',
      category: 'Research'
    },
    {
      title: 'AI Platform Engineer',
      location: 'Remote',
      type: 'Full-time',
      category: 'Engineering'
    },
    {
      title: 'Product Designer',
      location: 'New York, NY',
      type: 'Full-time',
      category: 'Design'
    },
    {
      title: 'Security Solutions Architect',
      location: 'London, UK',
      type: 'Full-time',
      category: 'Sales'
    }
  ];

  return (
    <div className="pt-32 min-h-screen">
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-24"
          >
            <h1 className="text-6xl md:text-8xl font-semibold text-foreground tracking-tighter mb-8 leading-[0.9] text-gradient">
              Join the <br />
              <span className="accent-gradient">
                SecureXLabs.
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-foreground-muted text-xl leading-relaxed">
              We are looking for the best minds in security, AI, and engineering to build the future of cyber risk management.
            </p>
          </motion.div>

          <div className="space-y-6">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group p-10 rounded-2xl glass border border-white/[0.06] hover:border-accent/30 transition-all hover:bg-white/[0.05] flex flex-col md:flex-row md:items-center justify-between gap-8 cursor-pointer"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-accent/10 text-accent px-4 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase border border-accent/20">
                      {job.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4 tracking-tight group-hover:text-accent transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-8 text-foreground-muted text-[10px] font-mono tracking-widest uppercase">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      {job.type}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-foreground text-xs font-semibold tracking-widest uppercase group-hover:gap-6 transition-all">
                  Apply Now <ArrowRight className="w-5 h-5 text-accent" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
