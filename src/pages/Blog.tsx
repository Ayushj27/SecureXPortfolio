import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'The Future of AI in Cyber Risk Management',
      excerpt: 'How generative AI is transforming the way organizations identify and respond to security threats.',
      author: 'Dr. Sarah Chen',
      date: 'Mar 15, 2024',
      category: 'Intelligence',
      image: 'https://picsum.photos/seed/ai-risk/800/600'
    },
    {
      title: 'Navigating the New Compliance Landscape',
      excerpt: 'A comprehensive guide to the latest regulatory changes and how to automate your compliance workflow.',
      author: 'James Wilson',
      date: 'Mar 12, 2024',
      category: 'Compliance',
      image: 'https://picsum.photos/seed/compliance/800/600'
    },
    {
      title: 'SecureXLabs Research: Zero-Day Vulnerability Analysis',
      excerpt: 'Our research team uncovers a new class of vulnerabilities in cloud-native infrastructure.',
      author: 'Security Lab',
      date: 'Mar 10, 2024',
      category: 'Research',
      image: 'https://picsum.photos/seed/research/800/600'
    },
    {
      title: 'Building a Resilient Security Culture',
      excerpt: 'Why human-centric security is just as important as technical controls in the modern enterprise.',
      author: 'Elena Rodriguez',
      date: 'Mar 08, 2024',
      category: 'Strategy',
      image: 'https://picsum.photos/seed/strategy/800/600'
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
              SecureXLabs <br />
              <span className="accent-gradient">
                Perspectives.
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-foreground-muted text-xl leading-relaxed">
              Insights, research, and strategies from the front lines of cyber security.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {posts.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-8 border border-white/[0.06] glass">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="glass border border-white/[0.1] px-4 py-1.5 rounded-full text-[10px] font-mono tracking-widest uppercase text-foreground">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 mb-4 text-foreground-muted text-[10px] font-mono tracking-widest uppercase">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                </div>
                
                <h3 className="text-3xl font-semibold text-foreground mb-4 tracking-tight group-hover:text-accent transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-foreground-muted text-base leading-relaxed mb-6 line-clamp-2 font-medium">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-2 text-accent text-xs font-semibold tracking-widest uppercase group-hover:gap-4 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
