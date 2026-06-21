import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const platformLinks = [
    { name: 'ThreatForge', href: '/threatforge' },
    { name: 'DatraX', href: '/datrax' },
    // { name: 'SecureStack AI', href: '/securestack' },
    // { name: 'BlueShield', href: '/blueshield' },
  ];

  const navLinks = [
    { name: 'Platform', href: '#', dropdown: true },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Research', href: '/resources' },
    { name: 'About', href: '/company' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 border-b transition-all duration-500 ${scrolled ? 'bg-background-base/80 backdrop-blur-xl border-white/[0.23]' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-1 flex justify-start">
            <Link to="/" className="flex items-center group cursor-pointer">
              <img
                src="/images/logo/SecureX_logo_white.png"
                alt="SecureXLabs"
                className="h-8 w-auto object-contain transition-opacity group-hover:opacity-80"
              />
            </Link>
          </div>

          <div className="hidden md:flex justify-center flex-shrink-0">
            <div className="flex items-center ml-10 space-x-16">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group/item">
                  {link.dropdown ? (
                    <div
                      className="flex items-center gap-1 text-sm font-medium text-foreground-muted hover:text-foreground transition-colors cursor-pointer py-2"
                      onMouseEnter={() => setPlatformOpen(true)}
                      onMouseLeave={() => setPlatformOpen(false)}
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${platformOpen ? 'rotate-180' : ''}`} />

                      <AnimatePresence>
                        {platformOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute top-full left-0 w-48 bg-background-base/95 backdrop-blur-xl border border-white/[0.06] rounded-xl shadow-2xl py-2 mt-1"
                          >
                            {platformLinks.map((subLink) => (
                              <Link
                                key={subLink.name}
                                to={subLink.href}
                                className={`block px-4 py-2 text-sm transition-colors ${location.pathname === subLink.href
                                  ? 'text-accent bg-white/[0.03]'
                                  : 'text-foreground-muted hover:text-foreground hover:bg-white/[0.03]'
                                  }`}
                              >
                                {subLink.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className={`text-sm font-medium transition-colors ${location.pathname === link.href ? 'text-accent' : 'text-foreground-muted hover:text-foreground'}`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex justify-end items-center">
            <Link to="/contact" className="hidden md:inline-block relative group px-5 py-2 rounded-lg bg-accent text-white text-sm font-medium transition-all hover:bg-accent-bright shadow-[0_0_0_1px_rgba(0,48,255,0.5),0_4px_12px_rgba(0,48,255,0.3),inset_0_1px_0_0_rgba(255,255,255,0.2)] active:scale-[0.98]">
              Get a Demo
            </Link>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-foreground-muted hover:text-foreground transition-colors">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-x-0 top-20 bg-background-base/95 backdrop-blur-xl border-b border-white/[0.06] overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-4 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div className="space-y-2">
                      <button
                        onClick={() => setPlatformOpen(!platformOpen)}
                        className="flex items-center justify-between w-full text-lg font-medium py-2 text-foreground-muted"
                      >
                        {link.name}
                        <ChevronDown className={`w-5 h-5 transition-transform ${platformOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {platformOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-4 space-y-2 overflow-hidden"
                          >
                            {platformLinks.map((subLink) => (
                              <Link
                                key={subLink.name}
                                to={subLink.href}
                                className={`block text-base py-2 transition-colors ${location.pathname === subLink.href ? 'text-accent' : 'text-foreground-muted hover:text-foreground'
                                  }`}
                                onClick={() => setIsOpen(false)}
                              >
                                {subLink.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className={`block text-lg font-medium py-2 ${location.pathname === link.href ? 'text-accent' : 'text-foreground-muted hover:text-foreground'}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)} className="block w-full bg-accent text-white py-4 rounded-xl font-bold text-center shadow-[0_0_0_1px_rgba(0,48,255,0.5),0_4px_12px_rgba(0,48,255,0.3)]">
                Get a Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
