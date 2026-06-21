import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Globe, Shield, Zap } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      title: 'Global Financial Institution Secures 50,000 Assets',
      excerpt: 'How a top-tier bank used SecureXLabs to unify their security operations and reduce response time by 80%.',
      author: 'Financial Services',
      date: 'Mar 2024',
      category: 'Enterprise',
      image: 'https://picsum.photos/seed/finance-case/800/600'
    },
    {
      title: 'Automating Compliance for a Rapidly Growing Tech Startup',
      excerpt: 'A high-growth SaaS company achieved SOC 2 and ISO 27001 compliance in record time with SecureXLabs.',
      author: 'Technology',
      date: 'Feb 2024',
      category: 'Compliance',
      image: 'https://picsum.photos/seed/tech-case/800/600'
    },
    {
      title: 'Securing Critical Infrastructure with AI-Driven Risk Intelligence',
      excerpt: 'A major energy provider used SecureXLabs to identify and mitigate zero-day threats in their OT environment.',
      author: 'Energy & Utilities',
      date: 'Jan 2024',
      category: 'Intelligence',
      image: 'https://picsum.photos/seed/energy-case/800/600'
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
              Proven <br />
              <span className="accent-gradient">
                Security Success.
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-foreground-muted text-xl leading-relaxed">
              Discover how organizations around the world are using SecureXLabs to transform their security operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-12">
            {cases.map((caseItem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-2xl glass border border-white/[0.06] hover:border-accent/30 transition-all hover:bg-white/[0.05] flex flex-col lg:flex-row gap-12 p-12 cursor-pointer"
              >
                <div className="lg:w-1/2 aspect-[16/9] rounded-xl overflow-hidden border border-white/[0.06]">
                  <img
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="bg-accent/10 text-accent px-4 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase border border-accent/20">
                      {caseItem.category}
                    </span>
                    <span className="text-foreground-muted text-[10px] font-mono tracking-widest uppercase">
                      {caseItem.author}
                    </span>
                  </div>
                  <h3 className="text-3xl font-semibold text-foreground mb-6 tracking-tight group-hover:text-accent transition-colors leading-tight">
                    {caseItem.title}
                  </h3>
                  <p className="text-foreground-muted text-lg leading-relaxed mb-8 font-medium">
                    {caseItem.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-foreground text-xs font-semibold tracking-widest uppercase group-hover:gap-6 transition-all">
                    Read Case Study <ArrowRight className="w-5 h-5 text-accent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
