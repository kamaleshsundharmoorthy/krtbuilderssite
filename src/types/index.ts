export type ProjectType = 'Luxury Villa' | 'Independent House' | 'Contemporary Residence' | 'Turnkey Home' | 'Renovation';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  type: ProjectType;
  builtUpArea: string; // e.g. "3,850 sq.ft"
  plotArea: string; // e.g. "2,400 sq.ft (40 × 60 ft)"
  bedrooms: number;
  floors: number;
  yearCompleted: string;
  duration: string;
  featured?: boolean;
  image: string;
  gallery: string[];
  designConcept: string;
  clientRequirements: string[];
  keyFeatures: string[];
  constructionStages: {
    stage: string;
    description: string;
  }[];
  specifications: {
    structure: string;
    flooring: string;
    joinery: string;
    sanitary: string;
    electrical: string;
  };
}

export type PackageTier = 'essential' | 'signature' | 'premium' | 'luxury';

export interface ConstructionPackage {
  id: PackageTier;
  name: string;
  tagline: string;
  targetAudience: string;
  approxRatePerSqFt: string; // e.g. "₹2,150 – ₹2,350 / sq.ft" (clearly noted as editable baseline)
  isPopular?: boolean;
  summaryHighlights: string[];
  structureHighlight: string;
  flooringHighlight: string;
  kitchenHighlight: string;
  bathroomHighlight: string;
  doorsWindowsHighlight: string;
  electricalHighlight: string;
  paintingHighlight: string;
  elevationHighlight: string;
}

export interface MaterialSpecificationCategory {
  id: string;
  title: string;
  description: string;
  items: {
    component: string;
    essential: string;
    signature: string;
    premium: string;
    luxury: string;
    technicalNotes?: string;
  }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  image: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  category: 'Planning & Design' | 'Sub-Structure' | 'Superstructure' | 'Finishes & Handover';
  duration: string;
  description: string;
  deliverables: string[];
  qualityChecks: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  profession: string;
  projectTitle: string;
  location: string;
  quote: string;
  builtArea: string;
  completionYear: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Process' | 'Packages & Pricing' | 'Materials' | 'Approvals & Warranty';
}
