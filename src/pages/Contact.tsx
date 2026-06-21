import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const DatraxLiveSimulation = () => {
  const [events, setEvents] = useState<Array<{
    id: number;
    actor: string;
    payload: string;
    channel: string;
    status: 'BLOCKED' | 'ALLOWED';
    time: string;
  }>>([
    { id: 1, actor: 'Malware Process (PID 4082)', payload: 'Customer DB (Structured PII)', channel: 'FTP Exfiltration', status: 'BLOCKED', time: '14:23:01' },
    { id: 2, actor: 'AI Writing Assistant', payload: 'API Keys (Unstructured Secrets)', channel: 'ChatGPT Payload Upload', status: 'BLOCKED', time: '14:23:18' },
    { id: 3, actor: 'HR Administrator', payload: 'Employee Directory (CSV)', channel: 'Office 365 Email', status: 'ALLOWED', time: '14:24:02' },
  ]);

  useEffect(() => {
    const actors = ['Rogue Copilot Agent', 'Unknown Service Bot', 'Personal Gmail Draft', 'Suspicious Wget Process', 'Sales Export Script'];
    const payloads = ['Aadhaar & PAN Numbers', 'Internal Source Code', 'Financial Q3 Projections', 'Customer Credit Cards', 'HR Records'];
    const channels = ['GenAI payload', 'Personal Webmail', 'FTP Upload', 'HTTP POST request', 'SaaS Sync'];
    const statuses: Array<'BLOCKED' | 'ALLOWED'> = ['BLOCKED', 'BLOCKED', 'ALLOWED', 'BLOCKED'];

    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      const newEvent = {
        id: Date.now(),
        actor: actors[Math.floor(Math.random() * actors.length)],
        payload: payloads[Math.floor(Math.random() * payloads.length)],
        channel: channels[Math.floor(Math.random() * channels.length)],
        status: statuses[Math.floor(Math.random() * statuses.length)],
        time: timeStr,
      };
      setEvents(prev => [newEvent, ...prev.slice(0, 3)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 font-mono text-xs text-foreground bg-black/40 border border-white/5 rounded-2xl relative overflow-hidden h-[400px] flex flex-col justify-between">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.06),transparent_50%)] pointer-events-none" />
      <div>
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-emerald-400 tracking-wider">DATRAX REAL-TIME INTERCEPT ENGINE</span>
          </div>
          <span className="text-[10px] text-foreground-muted uppercase tracking-widest hidden sm:inline">Sovereign Mode Active</span>
        </div>
        <div className="space-y-3 overflow-y-auto h-[300px] pr-2 scrollbar-thin">
          {events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -10, y: -5 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              className={`p-4 rounded-xl border transition-all ${event.status === 'BLOCKED'
                ? 'bg-red-500/5 border-red-500/10 hover:border-red-500/25'
                : 'bg-emerald-500/5 border-emerald-500/10 hover:border-emerald-500/25'
                }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-foreground-muted">{event.time}</span>
                <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider ${event.status === 'BLOCKED'
                  ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                  : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  }`}>
                  {event.status}
                </span>
              </div>
              <div className="grid grid-cols-[80px_1fr] gap-x-2 gap-y-1">
                <span className="text-foreground-muted">Channel:</span>
                <span className="text-foreground font-semibold">{event.channel}</span>
                <span className="text-foreground-muted">Actor:</span>
                <span className="text-foreground">{event.actor}</span>
                <span className="text-foreground-muted">Payload:</span>
                <span className="text-foreground font-semibold">{event.payload}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ThreatForgeLiveSimulation = () => {
  const [events, setEvents] = useState<Array<{
    id: number;
    phase: string;
    target: string;
    finding: string;
    mitreTactic: string;
    status: 'BLOCKED' | 'VALIDATED' | 'DISCOVERED';
    time: string;
  }>>([
    { id: 1, phase: 'DISCOVERY', target: 'Staging API Cluster', finding: 'Shadow API Endpoint w/o Auth', mitreTactic: 'T1190 - Exploit Public-Facing App', status: 'DISCOVERED', time: '14:23:01' },
    { id: 2, phase: 'SIMULATION', target: 'K8s Workload → Payment DB', finding: 'IAM Role Over-Privilege Pivot', mitreTactic: 'T1068 - Exploitation for Privilege Escalation', status: 'VALIDATED', time: '14:23:18' },
    { id: 3, phase: 'REMEDIATION', target: 'Prod Active Directory', finding: 'Kerberoasting Vulnerability', mitreTactic: 'T1558.003 - Kerberoasting', status: 'BLOCKED', time: '14:24:02' },
  ]);

  useEffect(() => {
    const phases = ['DISCOVERY', 'SIMULATION', 'REMEDIATION', 'DISCOVERY', 'SIMULATION'];
    const targets = ['Production AWS S3 Bucket', 'External VPN Gateway', 'Customer Portal Frontend', 'Internal DB subnet', 'Staging Auth Microservice'];
    const findings = ['Exposed Database Backups', 'Outdated OpenSSL Version', 'CORS Misconfiguration', 'Privilege Escalation vector', 'Hardcoded SSH Keys'];
    const tactics = ['T1530 - Data from Cloud Storage', 'T1190 - Exploit Public App', 'T1592 - Gather Host Info', 'T1068 - Exploitation for Priv Escalation', 'T1552 - Unsecured Credentials'];
    const statuses: Array<'BLOCKED' | 'VALIDATED' | 'DISCOVERED'> = ['BLOCKED', 'VALIDATED', 'DISCOVERED', 'VALIDATED'];

    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      const newEvent = {
        id: Date.now(),
        phase: phases[Math.floor(Math.random() * phases.length)],
        target: targets[Math.floor(Math.random() * targets.length)],
        finding: findings[Math.floor(Math.random() * findings.length)],
        mitreTactic: tactics[Math.floor(Math.random() * tactics.length)],
        status: statuses[Math.floor(Math.random() * statuses.length)],
        time: timeStr,
      };
      setEvents(prev => [newEvent, ...prev.slice(0, 3)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 font-mono text-xs text-foreground bg-black/40 border border-white/5 rounded-2xl relative overflow-hidden h-[400px] flex flex-col justify-between">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,48,255,0.06),transparent_50%)] pointer-events-none" />
      <div>
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-semibold text-blue-400 tracking-wider">THREATFORGE REAL-TIME VALIDATION ENGINE</span>
          </div>
          <span className="text-[10px] text-foreground-muted uppercase tracking-widest hidden sm:inline">CTEM Mode Active</span>
        </div>
        <div className="space-y-3 overflow-y-auto h-[300px] pr-2 scrollbar-thin">
          {events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -10, y: -5 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              className={`p-4 rounded-xl border transition-all ${event.status === 'BLOCKED'
                ? 'bg-emerald-500/5 border-emerald-500/10 hover:border-emerald-500/25'
                : event.status === 'VALIDATED'
                  ? 'bg-red-500/5 border-red-500/10 hover:border-red-500/25'
                  : 'bg-blue-500/5 border-blue-500/10 hover:border-blue-500/25'
                }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-foreground-muted">{event.time}</span>
                <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider ${event.status === 'BLOCKED'
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  : event.status === 'VALIDATED'
                    ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                    : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                  }`}>
                  {event.status}
                </span>
              </div>
              <div className="grid grid-cols-[80px_1fr] gap-x-2 gap-y-1">
                <span className="text-foreground-muted">Phase:</span>
                <span className="text-foreground font-semibold">{event.phase}</span>
                <span className="text-foreground-muted">Target:</span>
                <span className="text-foreground">{event.target}</span>
                <span className="text-foreground-muted">Finding:</span>
                <span className="text-foreground font-semibold text-white">{event.finding}</span>
                <span className="text-foreground-muted">MITRE Tactic:</span>
                <span className="text-foreground-muted">{event.mitreTactic}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const INITIAL_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
  website: '',
};

const Contact = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const source = searchParams.get('source');

  const content = {
    threatforge: {
      eyebrow: 'Platform Overview',
      headline: 'See ThreatForge in Action',
      description: 'This short walkthrough highlights how SecureXLabs unifies external attack-surface visibility, control validation, and AI-guided remediation into one operational security workflow.',
      galaxyText: 'Ready to validate your security controls and manage your exposure? Contact our ThreatForge experts to schedule a custom simulation.',
    },
    datrax: {
      eyebrow: 'Data Protection Overview',
      headline: 'See DatraX in Action',
      description: 'This short overview highlights how DatraX intercepts data in motion, classifies it in real time, maps actor identity, and enforces autonomous data protection workflows.',
      galaxyText: 'Ready to govern your data and secure your boundaries? Contact our DatraX experts to learn how to enforce absolute data sovereignty.',
    },
    default: {
      eyebrow: 'Platform Overview',
      headline: 'See ThreatForge in Action',
      description: 'This short walkthrough highlights how SecureXLabs unifies external attack-surface visibility, control validation, and AI-guided remediation into one operational security workflow.',
      galaxyText: 'Ready to secure your digital galaxy? Contact our team of security experts to learn more about the SecureXLabs platform.',
    }
  };

  const activeSource = (source === 'threatforge' || source === 'datrax') ? source : 'default';
  const activeContent = content[activeSource];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submitState === 'submitting') {
      return;
    }

    setSubmitState('submitting');
    setSubmitMessage('Sending your message...');

    try {
      const response = await fetch(import.meta.env.VITE_CONTACT_API_URL || '/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || 'Unable to send your message right now.');
      }

      setFormData(INITIAL_FORM);
      setSubmitState('success');
      setSubmitMessage('Your message has been sent. We will get back to you soon.');
    } catch (error) {
      setSubmitState('error');
      setSubmitMessage(error instanceof Error ? error.message : 'Unable to send your message right now.');
    }
  };

  return (
    <div
      className="pt-32"
      style={{
        '--color-accent': source === 'datrax' ? '#10B981' : '#0030FF',
        '--color-accent-bright': source === 'datrax' ? '#34D399' : '#0030FF',
      } as React.CSSProperties}
    >
      {/* <section className="pb-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-8"
          >
            <div className="text-[10px] font-mono font-semibold text-accent uppercase tracking-[0.22em] mb-3">
              {activeContent.eyebrow}
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground tracking-tight mb-4">
              {activeContent.headline}
            </h2>
            <p className="max-w-3xl mx-auto text-foreground-muted text-base md:text-lg leading-relaxed">
              {activeContent.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl overflow-hidden border border-white/[0.08] glass"
          >
            {source === 'datrax' ? (
              <DatraxLiveSimulation />
            ) : (
              <ThreatForgeLiveSimulation />
            )}
          </motion.div>
        </div>
      </section> */}

      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-6xl md:text-8xl font-semibold text-foreground tracking-tighter mb-8 leading-[0.9] text-gradient">
                Get in <br />
                <span className="accent-gradient">
                  Touch.
                </span>
              </h1>
              <p className="max-w-xl text-foreground-muted text-lg mb-12 leading-relaxed">
                {activeContent.galaxyText}
              </p>

              <div className="space-y-8">
                {[
                  { icon: Mail, label: 'Email', value: 'sales@securexlabs.ai' },
                  { icon: Phone, label: 'Phone', value: '+91-22-6689 4444' },
                  { icon: MapPin, label: 'Location', value: 'Sterling, Senior Estate, 7C, Parsi Panchayat Rd, Sahyadri Colony, Natwar Nagar, Andheri East, Mumbai' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono font-semibold text-foreground-muted uppercase tracking-widest mb-1">{item.label}</div>
                      <div className="text-foreground font-semibold text-lg">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="glass border border-white/[0.06] rounded-2xl p-12 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />
              <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-[10px] font-mono font-semibold text-foreground-muted uppercase tracking-widest">First Name</label>
                    <input name="firstName" value={formData.firstName} onChange={handleChange} type="text" className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl py-4 px-6 text-foreground text-sm focus:outline-none focus:border-accent/50 transition-colors placeholder:text-foreground-muted/30" placeholder="John" required />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-mono font-semibold text-foreground-muted uppercase tracking-widest">Last Name</label>
                    <input name="lastName" value={formData.lastName} onChange={handleChange} type="text" className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl py-4 px-6 text-foreground text-sm focus:outline-none focus:border-accent/50 transition-colors placeholder:text-foreground-muted/30" placeholder="Doe" required />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-mono font-semibold text-foreground-muted uppercase tracking-widest">Email Address</label>
                  <input name="email" value={formData.email} onChange={handleChange} type="email" className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl py-4 px-6 text-foreground text-sm focus:outline-none focus:border-accent/50 transition-colors placeholder:text-foreground-muted/30" placeholder="john@example.com" required />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-mono font-semibold text-foreground-muted uppercase tracking-widest">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl py-4 px-6 text-foreground text-sm focus:outline-none focus:border-accent/50 transition-colors h-32 resize-none placeholder:text-foreground-muted/30" placeholder="How can we help you?" required></textarea>
                </div>
                <div aria-live="polite" className={`text-sm ${submitState === 'error' ? 'text-red-300' : 'text-foreground-muted'}`}>
                  {submitMessage}
                </div>
                <button type="submit" disabled={submitState === 'submitting'} className="w-full bg-foreground text-background-base py-5 rounded-xl font-semibold text-xs tracking-widest uppercase hover:scale-[1.02] transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.1)] disabled:opacity-60 disabled:cursor-not-allowed">
                  {submitState === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'} <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
