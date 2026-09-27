import React from 'react';
import { KRTLogo } from './KRTLogo';
import { companyInfo } from '../data/company';
import { Phone, Mail, MapPin, ExternalLink, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141B24] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Leadership Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="cursor-pointer" onClick={() => onNavigate('home')}>
              <KRTLogo variant="dark" size="md" showTagline={true} />
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm pt-2 font-light">
              Premier residential house construction company specializing in custom independent residences, luxury villas, and turnkey building. Founded and led with civil engineering rigor by <strong className="text-white">Er. Ashok Thangavel, B.E. (Civil)</strong>.
            </p>

            <div className="pt-2 text-xs text-slate-400 font-light">
              <span className="block text-slate-300 font-semibold mb-1">Civil Engineering Regd:</span>
              <span>1278/A, AKR Nagar, Vanthavasi Road, Sivagangai.</span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8A59C] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('projects')} className="hover:text-white transition-colors cursor-pointer">
                  Selected Projects
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('packages')} className="hover:text-white transition-colors cursor-pointer">
                  Construction Packages
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('process')} className="hover:text-white transition-colors cursor-pointer">
                  13-Stage Process
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('why-us')} className="hover:text-white transition-colors cursor-pointer">
                  Why Choose Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-white transition-colors cursor-pointer">
                  FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8A59C] mb-4">
              Construction Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Independent House Construction
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Luxury Villa Construction
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Turnkey Residential Projects
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Architectural & Structural Design
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Home Renovation & Extensions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Interior Fit-Out & Joinery
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Office & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E8A59C] mb-4">
              Direct Contact
            </h4>

            <div className="text-xs text-slate-300 space-y-2.5">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C86C60] shrink-0 mt-0.5" />
                <a href={`tel:${companyInfo.contact.phone}`} className="hover:text-white font-mono">
                  {companyInfo.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#C86C60] shrink-0 mt-0.5" />
                <a href={`mailto:${companyInfo.contact.email}`} className="hover:text-white break-all">
                  {companyInfo.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C86C60] shrink-0 mt-0.5" />
                <span>{companyInfo.contact.address}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={companyInfo.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#E8A59C] hover:text-white font-semibold"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} KRT BUILDERS. All rights reserved. Registered under Er. Ashok Thangavel, Sivagangai, Tamil Nadu.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
