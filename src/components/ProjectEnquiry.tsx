import React, { useState, useEffect } from 'react';
import { companyInfo } from '../data/company';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, Clock, Sparkles } from 'lucide-react';

interface ProjectEnquiryProps {
  initialData?: {
    preferredPackage?: string;
    builtUpArea?: number | string;
    floors?: number;
    projectType?: string;
    notes?: string;
  };
}

export const ProjectEnquiry: React.FC<ProjectEnquiryProps> = ({ initialData }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    projectType: 'Independent House',
    plotSize: '',
    builtUpArea: '',
    floors: '2 Floors (G+1)',
    bedrooms: '3 BHK',
    preferredPackage: 'Signature Package',
    estimatedBudget: '₹60 – ₹90 Lakhs',
    expectedStartDate: 'Within 1 to 2 Months',
    requirements: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Sync initialData if provided from customizer or project modal
  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        preferredPackage: initialData.preferredPackage || prev.preferredPackage,
        builtUpArea: initialData.builtUpArea ? `${initialData.builtUpArea} sq.ft` : prev.builtUpArea,
        floors: initialData.floors ? `${initialData.floors} Floors` : prev.floors,
        projectType: initialData.projectType || prev.projectType,
        requirements: initialData.notes ? `${prev.requirements}\n[Custom Config]: ${initialData.notes}`.trim() : prev.requirements,
      }));
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const text = encodeURIComponent(
      `Hello Er. Ashok Thangavel, I am interested in building a home with KRT Builders.\n\n` +
      `Name: ${formData.name || 'Prospective Homeowner'}\n` +
      `Location: ${formData.location || 'Tamil Nadu'}\n` +
      `Type: ${formData.projectType}\n` +
      `Area: ${formData.builtUpArea || 'TBD'}\n` +
      `Preferred Package: ${formData.preferredPackage}\n` +
      `Please contact me for an initial consultation.`
    );
    return `https://wa.me/${companyInfo.contact.whatsapp}?text=${text}`;
  };

  return (
    <section id="contact" className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D32F2F] mb-3">
            <span>Direct Engineering Consultation</span>
            <span aria-hidden="true">·</span>
            <span>Er. Ashok Thangavel, B.E.</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            START YOUR PROJECT.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Share your plot details, architectural ideas, or floor plan requirements. Our principal engineer will prepare a preliminary feasibility assessment and itemized estimate schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact & Office Information (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-lg bg-stone-50 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                Official Head Office
              </h3>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D32F2F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Address</strong>
                    <span>{companyInfo.contact.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#D32F2F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Direct Phone</strong>
                    <a href={`tel:${companyInfo.contact.phone}`} className="hover:text-[#D32F2F] font-mono font-medium">
                      {companyInfo.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#D32F2F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Email Enquiries</strong>
                    <a href={`mailto:${companyInfo.contact.email}`} className="hover:text-[#D32F2F]">
                      {companyInfo.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#D32F2F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Office Hours</strong>
                    <span>{companyInfo.contact.workingHours}</span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Action */}
              <div className="mt-6 pt-4 border-t border-slate-200">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 rounded transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            {/* Service Districts Covered */}
            <div className="p-6 rounded-lg bg-stone-50 border border-slate-200 text-xs">
              <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                Primary Construction Regions:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {companyInfo.serviceAreas.map((area, i) => (
                  <span key={i} className="text-slate-700 bg-white border border-slate-200 px-2.5 py-1 rounded text-[11px]">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: High-Conversion Detailed Lead Form (8 cols) */}
          <div className="lg:col-span-8 bg-stone-50 rounded-lg border border-slate-200 p-6 sm:p-8">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Enquiry Received Successfully!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. Er. Ashok Thangavel or our engineering office will review your requirements and call you at <strong className="text-slate-900">{formData.phone}</strong> within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 bg-white border border-slate-300 rounded hover:bg-slate-100 cursor-pointer"
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h3 className="text-lg font-bold text-slate-900">
                    Project Consultation Form
                  </h3>
                  <p className="text-xs text-slate-500">
                    All specifications are kept strictly confidential.
                  </p>
                </div>

                {/* 1. Personal Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Senthil Nathan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded text-slate-900 focus:outline-none focus:ring-1 focus:ring-rose-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98400 12345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded text-slate-900 focus:outline-none focus:ring-1 focus:ring-rose-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. senthil@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded text-slate-900 focus:outline-none focus:ring-1 focus:ring-rose-500"
                    />
                  </div>
                </div>

                {/* 2. Site Location & Project Type */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Plot Location / Town *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sivagangai / Madurai"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded text-slate-900 focus:outline-none focus:ring-1 focus:ring-rose-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded text-slate-900 focus:outline-none focus:ring-1 focus:ring-rose-500"
                    >
                      <option value="Independent House">Independent House</option>
                      <option value="Luxury Villa">Luxury Villa</option>
                      <option value="Turnkey Residence">Turnkey Residence</option>
                      <option value="Architectural Design Only">Architectural Design Only</option>
                      <option value="Home Renovation">Home Renovation</option>
                      <option value="Interior Fit-Out">Interior Fit-Out</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Plot Dimension (ft)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 40 × 60 ft (2,400 sq.ft)"
                      value={formData.plotSize}
                      onChange={(e) => setFormData({ ...formData, plotSize: e.target.value })}
                      className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded text-slate-900 focus:outline-none focus:ring-1 focus:ring-rose-500"
                    />
                  </div>
                </div>

                {/* 3. Built-Up Area, Floors & Package */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Expected Built-up Area
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 2,800 sq.ft"
                      value={formData.builtUpArea}
                      onChange={(e) => setFormData({ ...formData, builtUpArea: e.target.value })}
                      className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded text-slate-900 focus:outline-none focus:ring-1 focus:ring-rose-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Preferred Package
                    </label>
                    <select
                      value={formData.preferredPackage}
                      onChange={(e) => setFormData({ ...formData, preferredPackage: e.target.value })}
                      className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded text-slate-900 focus:outline-none focus:ring-1 focus:ring-rose-500"
                    >
                      <option value="Essential Package">Essential Package</option>
                      <option value="Signature Package">Signature Package (Most Popular)</option>
                      <option value="Premium Package">Premium Package</option>
                      <option value="Luxury Estate Package">Luxury Estate Package</option>
                      <option value="Custom Specification">Custom Specification</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Target Start Date
                    </label>
                    <select
                      value={formData.expectedStartDate}
                      onChange={(e) => setFormData({ ...formData, expectedStartDate: e.target.value })}
                      className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded text-slate-900 focus:outline-none focus:ring-1 focus:ring-rose-500"
                    >
                      <option value="Immediate (Plot Ready)">Immediate (Plot Ready)</option>
                      <option value="Within 1 to 2 Months">Within 1 to 2 Months</option>
                      <option value="Within 3 to 6 Months">Within 3 to 6 Months</option>
                      <option value="Planning / Exploring">Planning / Exploring</option>
                    </select>
                  </div>
                </div>

                {/* 4. Requirements & Specific Wishes */}
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Specific Requirements or Design Wishes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your family needs: e.g. courtyard, double-height ceiling, Vastu directions, solar provision, car parking..."
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded text-slate-900 focus:outline-none focus:ring-1 focus:ring-rose-500"
                  />
                </div>

                {/* Submit Action */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="text-[11px] text-slate-500">
                    ✓ Free initial site consultation & contour survey review.
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-wider font-bold text-white bg-[#D32F2F] hover:bg-[#B71C1C] rounded shadow transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <span>Request A Consultation</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
