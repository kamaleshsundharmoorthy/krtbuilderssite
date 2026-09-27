import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Packages } from './components/Packages';
import { ConstructionProcess } from './components/ConstructionProcess';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FeaturedStory } from './components/FeaturedStory';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { ProjectEnquiry } from './components/ProjectEnquiry';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { projectsData } from './data/projects';
import { companyInfo } from './data/company';
import { Project, ServiceItem } from './types';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [enquiryInitialData, setEnquiryInitialData] = useState<{
    preferredPackage?: string;
    builtUpArea?: number | string;
    floors?: number;
    projectType?: string;
    notes?: string;
  }>({});

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleStartProjectClick = (notes?: string, preferredPackage?: string) => {
    if (notes || preferredPackage) {
      setEnquiryInitialData((prev) => ({
        ...prev,
        notes: notes || prev.notes,
        preferredPackage: preferredPackage || prev.preferredPackage,
      }));
    }
    scrollToSection('contact');
  };

  const handleServiceConsultation = (serviceTitle: string) => {
    setEnquiryInitialData({
      projectType: serviceTitle,
      notes: `Interested in ${serviceTitle}. Please send full service specifications and workflow details.`,
    });
    scrollToSection('contact');
  };

  const handleCustomQuoteCalculated = (config: any) => {
    setEnquiryInitialData({
      preferredPackage: `${config.packageTier} Package`,
      builtUpArea: config.area,
      floors: config.floors,
      notes: `Configured in Customizer:\n• Estimated Cost: ${config.estimatedCost}\n• Flooring: ${config.flooringChoice}\n• Kitchen: ${config.kitchenChoice}\n• Bathrooms: ${config.bathroomChoice}\n• Joinery: ${config.joineryChoice}\n• Automation: ${config.smartChoice}`,
    });
    scrollToSection('contact');
  };

  const handleSelectPackage = (packageName: string) => {
    setEnquiryInitialData((prev) => ({
      ...prev,
      preferredPackage: packageName,
      notes: `Interested in ${packageName} specifications.`,
    }));
    scrollToSection('contact');
  };

  const handleBuildLikeThis = (projectTitle: string) => {
    setEnquiryInitialData({
      notes: `Inspired by the design of "${projectTitle}". Would like to discuss adapting this concept to my plot.`,
    });
    scrollToSection('contact');
  };

  // Section observer to update active nav link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'packages', 'process', 'why-us', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900 flex flex-col font-sans">
      {/* Sticky Architectural Top Navigation */}
      <Navbar
        onStartProjectClick={() => handleStartProjectClick()}
        onNavigate={scrollToSection}
        activeSection={activeSection}
      />

      <main className="flex-grow">
        {/* 1. Full-Screen Cinematic Hero */}
        <div id="home">
          <Hero
            onStartProject={() => handleStartProjectClick()}
            onViewProjects={() => scrollToSection('projects')}
            onExplorePackages={() => scrollToSection('packages')}
          />
        </div>

        {/* 2. Editorial About Section with Er. Ashok Thangavel Spotlight */}
        <About
          onLearnProcess={() => scrollToSection('process')}
          onExploreMaterials={() => scrollToSection('packages')}
        />

        {/* 3. Comprehensive What We Build Section */}
        <Services
          onSelectService={(svc) => handleServiceConsultation(svc.title)}
          onConsultationRequest={handleServiceConsultation}
        />

        {/* 4. Architectural Selected Homes Showcase */}
        <Projects
          onStartProjectForDesign={handleBuildLikeThis}
        />

        {/* 5. Materials & Packages + 16-Category Comparison + Interactive Customizer */}
        <Packages
          onSelectPackage={handleSelectPackage}
          onCustomQuoteCalculated={handleCustomQuoteCalculated}
        />

        {/* 6. From Plot to Home: 13-Stage Construction Process */}
        <ConstructionProcess />

        {/* 7. Why People Build With Us & "Built To Last" Quality Philosophy */}
        <WhyChooseUs
          onStartConsultation={() => handleStartProjectClick()}
        />

        {/* 8. Full-Width Featured Project Story */}
        <FeaturedStory
          onViewFeaturedProject={() => {
            const feat = projectsData.find((p) => p.id === 'the-horizon-villa') || projectsData[0];
            setSelectedCaseStudy(feat);
          }}
          onStartCustomProject={() => handleBuildLikeThis('The Horizon Villa')}
        />

        {/* 9. Verified Homeowner Testimonials */}
        <Testimonials />

        {/* 10. Frequently Asked Questions */}
        <FAQSection />

        {/* 11. High-Conversion Project Consultation & Lead Capture */}
        <ProjectEnquiry initialData={enquiryInitialData} />

        {/* 12. Full-Width Final Call To Action */}
        <CTASection
          onStartProject={() => handleStartProjectClick()}
          onContactClick={() => scrollToSection('contact')}
        />
      </main>

      {/* Case Study Modal if opened from FeaturedStory */}
      <ProjectModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onBuildLikeThis={handleBuildLikeThis}
      />

      {/* Floating Quick WhatsApp Action */}
      <aside aria-label="Quick Communication" className="fixed bottom-6 right-6 z-40 flex flex-col gap-2">
        <a
          href={`https://wa.me/${companyInfo.contact.whatsapp}?text=${encodeURIComponent(
            'Hello Er. Ashok Thangavel, I am interested in building a home with KRT Builders.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl flex items-center justify-center transition-transform hover:scale-105"
          title="Chat with Er. Ashok Thangavel on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </aside>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
