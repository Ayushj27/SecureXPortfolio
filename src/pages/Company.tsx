import React from 'react';
import { motion } from 'motion/react';

const Company = () => {
  const leadershipProfiles = [
    {
      name: 'Manoj Dwivedi',
      role: 'CEO & Founder',
      image: '/images/leadership/manoj-dwivedi.png',
      experience: 'Enterprise security strategy, market growth, and executive cyber risk leadership.',
    },
    {
      name: 'Gaurav Yadav',
      role: 'CO-Founder & Head Security Strategy',
      image: '/images/leadership/gauravYadav.png',
      experience: 'Security operations, resilience assurance, governance, and board-level reporting.',
    },
    // {
    //   name: 'Rahul Roy',
    //   role: 'Head R&D, Engineering',
    //   image: '/images/leadership/rahul-roy.jpg',
    //   experience: 'Platform architecture, security engineering, attack simulation, and product delivery.',
    // },
  ];

  const advisoryProfiles = [
    {
      name: 'Rahul Dwivedi',
      role: 'Strategic Advisor',
      image: '/images/leadership/Rahul Dwivedi.jpeg',
      experience: 'Decades of enterprise technology leadership — driving digital transformation and go-to-market strategy for global technology organizations.',
    },
    {
      name: 'Kaushal Bheda',
      role: 'Strategic Advisor',
      image: '/images/leadership/Kaushal Bheda.jpeg',
      experience: 'Deep expertise in cybersecurity governance, risk frameworks, and building security programs that align with board-level business priorities.',
    },
    {
      name: 'Ankush Tiwari',
      role: 'Strategic Advisor',
      image: '/images/leadership/Ankush Tiwari.jpeg',
      experience: 'Proven track record scaling AI-driven security products across regulated industries — bridging advanced research and real-world enterprise deployment.',
    },
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,48,255,0.08),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-2 mb-8">
                <div className="h-px w-8 bg-accent" />
                <span className="text-accent text-[10px] font-mono tracking-widest uppercase">
                  Make-in-India Cybersecurity
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-semibold text-foreground tracking-[-0.03em] mb-8 leading-[0.9] text-gradient">
                SecureX Labs: <br />
                <span className="accent-gradient">
                  Continuous Control.
                </span>
              </h1>
              <p className="max-w-xl text-foreground-muted text-xl mb-6 leading-relaxed">
                SecureX Labs is a Make-in-India cybersecurity company built to help organisations protect what matters most: their systems, data, identities, and digital operations.
              </p>
              {/* <p className="max-w-xl text-foreground-muted text-base leading-relaxed">
                With 50+ years of collective experience, we help enterprises and institutions move from reactive security to continuous cyber control. Our products identify exposure, govern sensitive data movement, validate defences, and convert complex telemetry into clear, actionable insights.
              </p> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Collective Experience Callout Widget */}
              <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 md:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_24px_80px_rgba(0,0,0,0.22)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,48,255,0.16),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(0,48,255,0.08),transparent_34%)]" />
                <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/14 to-transparent" />
                <div className="relative col-span-1">
                  <div className="mb-8 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.22em] text-foreground-muted">
                    <span>Corporate Intelligence</span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[9px] tracking-[0.18em] text-foreground">Established</span>
                  </div>

                  <div className="mb-4">
                    <span className="text-8xl md:text-9xl font-semibold tracking-tighter bg-gradient-to-b from-white via-white/95 to-white/30 bg-clip-text text-transparent">
                      50+
                    </span>
                  </div>
                  <div className="text-accent text-[11px] font-mono tracking-[0.22em] uppercase mb-4 font-semibold">
                    Years of Collective Experience
                  </div>
                  <p className="text-sm leading-relaxed text-foreground-muted font-medium">
                    Helping enterprises and institutions transition from legacy reactive security postures to continuous, evidence-backed cyber control.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Editorial Statements Section */}
      <section className="py-32 relative border-t border-white/[0.06] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,48,255,0.05),transparent_40%)] pointer-events-none" />

        {/* Decorative X logo — bottom-left, partially cropped */}
        <div
          className="absolute z-[0] pointer-events-none hidden sm:block"
          style={{
            bottom: '-120%',
            left: '-2%',
            width: 'clamp(520px, 52vw, 860px)',
            height: 'clamp(520px, 52vw, 860px)',
            transform: 'rotate(15deg)',
            opacity: 0.12,
          }}
        >
          <img
            src="/images/logo/Securexlogo.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-contain"
            draggable={false}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Two-column layout on desktop, single column on mobile */}
          <div className="flex flex-col md:flex-row md:items-stretch gap-12 md:gap-0">

            {/* Vision Statement — Left Column, right-aligned */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 flex items-center md:pr-12 lg:pr-16"
            >
              <p className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-[1.35] text-right w-full">
                A safer digital world, from
                <br />
                bits and bytes to qubits and
                <br />
                beyond.
              </p>
            </motion.div>

            {/* Separator — Horizontal on mobile, vertical on desktop */}
            <div className="block md:hidden w-full h-px bg-accent" />
            <div className="hidden md:block w-px bg-accent shrink-0" />

            {/* Mission Statement — Right Column, left-aligned */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 flex items-center md:pl-12 lg:pl-16"
            >
              <p className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-[1.35]">
                We exist to be the trusted
                <br />
                cyber ally that stands
                <br />
                between our customers and
                <br />
                the threats of the digital
                world.
              </p>
            </motion.div>

          </div>

        </div>
      </section>


      {/* Leadership & Advisory Section */}
      <section className="py-24 relative overflow-hidden border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-foreground tracking-tight mb-4 text-gradient">Leadership Team</h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">Our leadership team brings deep expertise across enterprise security, cyber risk, and platform engineering.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {leadershipProfiles.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-center group"
              >
                <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border border-white/[0.06] group-hover:border-accent/50 transition-colors glass">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-1 tracking-tight">{leader.name}</h4>
                <p className="text-accent text-[10px] font-mono tracking-widest uppercase">{leader.role}</p>
                <p className="mt-4 max-w-sm mx-auto text-sm leading-relaxed text-foreground-muted">{leader.experience}</p>
              </motion.div>
            ))}
          </div>

          {/* Advisory Board */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16 mt-32"
          >
            <h2 className="text-4xl font-semibold text-foreground tracking-tight mb-4 text-gradient">Advisory Board</h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">Senior advisors who bring strategic depth, industry credibility, and domain expertise to SecureX Labs.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 pb-24">
            {advisoryProfiles.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-center group"
              >
                <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border border-white/[0.06] group-hover:border-accent/50 transition-colors glass">
                  <img src={advisor.image} alt={advisor.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-1 tracking-tight">{advisor.name}</h4>
                <p className="text-accent text-[10px] font-mono tracking-widest uppercase">{advisor.role}</p>
                <p className="mt-4 max-w-sm mx-auto text-sm leading-relaxed text-foreground-muted">{advisor.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;
