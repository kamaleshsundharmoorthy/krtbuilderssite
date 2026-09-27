import { ProcessStep } from '../types';

export const processData: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Initial Consultation",
    category: "Planning & Design",
    duration: "Day 1 – 3",
    description: "An open, in-depth discussion with Er. Ashok Thangavel to understand your family's lifestyle, architectural aspirations, room requirements, and budget framework.",
    deliverables: ["Project brief document", "Preliminary budget range", "Scope overview"],
    qualityChecks: ["Client expectations alignment", "Feasibility review"]
  },
  {
    stepNumber: "02",
    title: "Site Visit & Soil Investigation",
    category: "Planning & Design",
    duration: "Day 4 – 7",
    description: "Our engineering team visits your plot to survey topography, boundaries, road width, groundwater depth, prevailing wind directions, and conduct soil bearing capacity (SBC) core tests.",
    deliverables: ["Plot contour survey", "Geotechnical soil test lab report", "Vastu orientation notes"],
    qualityChecks: ["Boundary cross-verification against revenue FMB sketch", "Soil classification"]
  },
  {
    stepNumber: "03",
    title: "Requirement & Functional Analysis",
    category: "Planning & Design",
    duration: "Week 2",
    description: "Translating your family routines into spatial adjacencies—zoning private vs public spaces, elder accessibility, natural cross-ventilation, and parking geometry.",
    deliverables: ["Bubble diagram", "Room dimension schedule", "Preliminary zoning map"],
    qualityChecks: ["Circulation efficiency audit", "Vastu compliance check"]
  },
  {
    stepNumber: "04",
    title: "Architectural 2D & 3D Design",
    category: "Planning & Design",
    duration: "Week 3 – 4",
    description: "Developing detailed architectural floor plans, furniture layouts, and photorealistic 3D exterior elevations capturing day and night lighting scenes.",
    deliverables: ["Dimensioned floor plans", "3D architectural elevation renders", "Sectional elevation drawings"],
    qualityChecks: ["Client design sign-off", "Sun path and shadow analysis"]
  },
  {
    stepNumber: "05",
    title: "Detailed Estimation & Itemized BOQ",
    category: "Planning & Design",
    duration: "Week 5",
    description: "A transparent, line-by-line Bill of Quantities (BOQ) detailing exact quantities of steel, cement, sand, granite, tiles, and fittings—zero hidden costs or surprise additions.",
    deliverables: ["Comprehensive itemized BOQ", "Material specification book", "Project timeline schedule"],
    qualityChecks: ["Structural quantity take-off cross-check", "Material grade confirmations"]
  },
  {
    stepNumber: "06",
    title: "Legal Agreement & Municipal Approval",
    category: "Planning & Design",
    duration: "Week 6",
    description: "Formal construction contract detailing payment milestones linked to physical site progress, warranty guarantees, and submission for municipal building approval.",
    deliverables: ["Notarized construction agreement", "Sanctioned municipal building plan", "Milestone payment chart"],
    qualityChecks: ["Legal compliance review", "Local town planning authority clearance"]
  },
  {
    stepNumber: "07",
    title: "Excavation & Foundation",
    category: "Sub-Structure",
    duration: "Month 2",
    description: "Marking column centerlines with precision total stations, mechanized earth excavation, anti-termite chemical barrier, and casting RCC column footings with plinth beams.",
    deliverables: ["Total station survey report", "Footing concrete cube test reports", "Anti-termite certification"],
    qualityChecks: ["Plinth level relative to road crest height", "Rebar cover block positioning"]
  },
  {
    stepNumber: "08",
    title: "RCC Superstructure & Masonry",
    category: "Superstructure",
    duration: "Month 3 – 5",
    description: "Casting reinforced concrete columns, beams, and roof slabs with automated mix batching, followed by precision chamber brick masonry for internal and external walls.",
    deliverables: ["Slab structural test certificates", "De-shuttering inspection reports", "Curing logbook"],
    qualityChecks: ["21-day continuous pond curing inspection", "Wall verticality plumb-bob checks"]
  },
  {
    stepNumber: "09",
    title: "MEP / Electrical & Plumbing Infrastructure",
    category: "Superstructure",
    duration: "Month 6",
    description: "Chiseling wall conduits for heavy-gauge electrical wiring, running hot and cold water supply lines, installing drainage stacks, and concealed AC piping.",
    deliverables: ["Electrical conduit routing map", "Plumbing riser diagram", "Underground sump commissioning"],
    qualityChecks: ["24-hour hydraulic pressure test on plumbing pipes", "Electrical circuit megger insulation test"]
  },
  {
    stepNumber: "10",
    title: "Flooring, Plastering & Wall Finishes",
    category: "Finishes & Handover",
    duration: "Month 7 – 8",
    description: "Double-coat sponge finish plastering, applying waterproof polymer membranes in wet areas, precision laying of large-format vitrified tiles or Italian marble with epoxy grouting.",
    deliverables: ["Tile batch verification certificates", "Bathroom 72-hour pond test sign-off"],
    qualityChecks: ["Tile hollow-sound percussion tapping test", "Floor water slope gradient checks"]
  },
  {
    stepNumber: "11",
    title: "Joinery, Painting & Interior Works",
    category: "Finishes & Handover",
    duration: "Month 9",
    description: "Fitting custom teak wood doors, acoustic UPVC window profiles, false ceiling suspension with cove lighting, modular kitchen installation, and multi-coat Asian Paints emulsion.",
    deliverables: ["Plywood emission warranty cards", "Paint shade approvals and records"],
    qualityChecks: ["Door alignment and lock test", "Surface gloss uniformity under halogen floodlights"]
  },
  {
    stepNumber: "12",
    title: "Engineering Audit & Snag Rectification",
    category: "Finishes & Handover",
    duration: "Month 10 (Early)",
    description: "A rigorous 180-point quality audit executed personally by Er. Ashok Thangavel. Every faucet, switch, lock, window slide, and grout line is inspected and rectified.",
    deliverables: ["Comprehensive snag list", "Snag rectification sign-off sheet", "Deep cleaning certificate"],
    qualityChecks: ["180-point civil inspection checklist", "Earthing resistance ohm-meter testing"]
  },
  {
    stepNumber: "13",
    title: "Final Key Handover & Documentation",
    category: "Finishes & Handover",
    duration: "Month 10 (Completion)",
    description: "The celebratory housewarming moment! We hand over the keys to your dream home alongside an As-Built blueprint dossier, warranty certificates, and emergency contacts.",
    deliverables: ["Handover gift & ceremonial keys", "As-Built architectural & MEP blueprints", "Manufacturer warranty dossier", "1-Year free maintenance support card"],
    qualityChecks: ["Client final walkthrough approval", "Formal handover certificate signed"]
  }
];
