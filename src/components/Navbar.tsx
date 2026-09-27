import React, { useState, useEffect } from 'react';
import { KRTLogo } from './KRTLogo';
import { companyInfo } from '../data/company';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onStartProjectClick: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onStartProjectClick,
  onNavigate,
  activeSection = 'home',
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'packages', label: 'Packages' },
    { id: 'process', label: 'Process' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-xl py-2.5'
          : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP BAR CONTRACT: Zone 1 (Brand) - Zone 2 (4-6 links) - Zone 3 (1-2 actions) */}
        <div className="flex items-center justify-between">
          {/* Zone 1: Single element wordmark / brand mark */}
          <button
            onClick={() => handleLinkClick('home')}
            className="group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded cursor-pointer"
            aria-label="KRT Builders Homepage"
          >
            <KRTLogo variant="dark" size={isScrolled ? 'sm' : 'md'} showTagline={!isScrolled} />
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`transition-colors whitespace-nowrap cursor-pointer relative py-1 ${
                  activeSection === link.id
                    ? 'text-white font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D32F2F] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Phone */}
          <div className="flex items-center gap-3">
            {/* Quick Call Link for Tamil Nadu Clients */}
            <a
              href={`tel:${companyInfo.contact.phone}`}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-slate-200 hover:text-white px-3 py-2 rounded border border-slate-700/80 bg-slate-900/60 transition-colors whitespace-nowrap"
              title="Call Er. Ashok Thangavel"
            >
              <Phone className="w-3.5 h-3.5 text-[#D32F2F]" />
              <span>{companyInfo.contact.phoneDisplay}</span>
            </a>

            {/* Primary Action Button */}
            <button
              onClick={onStartProjectClick}
              className="px-4 py-2 text-xs uppercase tracking-wider font-bold text-white bg-[#D32F2F] hover:bg-[#B71C1C] rounded transition-all duration-200 shadow-md shadow-rose-950/40 hover:shadow-rose-900/60 active:scale-95 whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
            >
              <span>Start A Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-200 hover:text-white rounded focus:outline-none focus:ring-2 focus:ring-rose-500 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-slate-950/98 backdrop-blur-xl border-b border-slate-800 p-6 shadow-2xl transition-all">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left text-base font-medium py-2 px-3 rounded transition-colors ${
                  activeSection === link.id
                    ? 'text-white bg-rose-950/40 border-l-4 border-[#D32F2F]'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
              <a
                href={`tel:${companyInfo.contact.phone}`}
                className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-100 py-3 rounded bg-slate-900 border border-slate-800"
              >
                <Phone className="w-4 h-4 text-[#D32F2F]" />
                <span>Call: {companyInfo.contact.phoneDisplay}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onStartProjectClick();
                }}
                className="w-full py-3 text-center text-sm font-bold uppercase tracking-wider text-white bg-[#D32F2F] hover:bg-[#B71C1C] rounded transition-colors"
              >
                Start A Project Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
