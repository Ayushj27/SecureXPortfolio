import React from 'react';
import ResearchSection from '../components/ResearchSection';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Resources = () => {
  return (
    <div className="pt-32">
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-24"
          >
            <h1 className="text-6xl md:text-8xl font-semibold text-foreground tracking-tighter mb-8 leading-[0.9] text-gradient">
              Intelligence for the <br />
              <span className="accent-gradient">
                Security Community.
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-foreground-muted text-xl leading-relaxed">
              Explore our research, whitepapers, and guides to stay ahead of the evolving threat landscape.
            </p>
          </motion.div>
        </div>
      </section>
      <ResearchSection />
      
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-semibold text-foreground tracking-tight mb-4 text-gradient">Latest Perspectives</h2>
              <p className="text-foreground-muted">Insights from our security experts.</p>
            </div>
            <Link to="/blog" className="text-accent text-xs font-semibold tracking-widest uppercase flex items-center gap-2 hover:gap-4 transition-all">
              View All Posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'The Future of AI in Cyber Risk', category: 'Intelligence', image: 'https://picsum.photos/seed/ai-res/600/400' },
              { title: 'Navigating Compliance in 2024', category: 'Compliance', image: 'https://picsum.photos/seed/comp-res/600/400' },
              { title: 'Zero-Day Vulnerability Analysis', category: 'Research', image: 'https://picsum.photos/seed/zero-res/600/400' },
            ].map((post, i) => (
              <Link key={i} to="/blog" className="group">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-white/[0.06] glass">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" referrerPolicy="no-referrer" />
                </div>
                <span className="text-accent text-[10px] font-mono tracking-widest uppercase mb-2 block">{post.category}</span>
                <h4 className="text-xl font-semibold text-foreground tracking-tight group-hover:text-accent transition-colors">{post.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
