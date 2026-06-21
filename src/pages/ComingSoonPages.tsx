import React from 'react';
import { motion } from 'motion/react';
import { Code2 } from 'lucide-react';

const ComingSoon = ({ title }: { title: string }) => {
  return (
    <div className="pt-32 min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-[#0030FF]/5" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/10 border border-accent/20"
        >
          <Code2 className="w-10 h-10 text-accent" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-semibold text-foreground tracking-tight mb-8 text-gradient"
        >
          {title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl md:text-4xl font-medium text-foreground-muted tracking-tight leading-tight"
        >
          "We are transforming the <span className="accent-gradient">knowledge and invention</span> <br />
          in to Platform, it's just matter of time"
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 flex justify-center gap-2"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.4 
              }}
              className="w-2 h-2 rounded-full bg-accent"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export const DatraX = () => <ComingSoon title="DatraX" />;
export const SecureStackAI = () => <ComingSoon title="SecureStack AI" />;
export const BlueShield = () => <ComingSoon title="BlueShield" />;
