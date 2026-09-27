import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "the-courtyard-house",
    title: "The Courtyard House",
    subtitle: "A modern tropical family residence with central open-to-sky courtyard",
    location: "Vanthavasi Road, Sivagangai, Tamil Nadu",
    type: "Independent House",
    builtUpArea: "2,850 sq.ft",
    plotArea: "3,200 sq.ft (40 × 80 ft)",
    bedrooms: 4,
    floors: 2,
    yearCompleted: "2025",
    duration: "10 Months",
    featured: true,
    image: "/src/assets/images/project_courtyard_house_1790486499772.jpg",
    gallery: [
      "/src/assets/images/project_courtyard_house_1790486499772.jpg",
      "/src/assets/images/hero_luxury_villa_1790486487640.jpg",
      "/src/assets/images/construction_craftsmanship_1790486522293.jpg",
      "/src/assets/images/project_horizon_residence_1790486511207.jpg"
    ],
    designConcept: "Designed to merge traditional Chettinad courtyard ethos with contemporary minimalist lines. The home revolves around a central skylit atrium that cools the internal microclimate naturally through stack ventilation while maintaining absolute family privacy.",
    clientRequirements: [
      "Naturally lit central courtyard visible from the living and dining hall",
      "Elder-friendly ground floor master bedroom with wheelchair access",
      "Traditional pooja room oriented toward northeast quadrant",
      "Low maintenance exterior facade resistant to tropical monsoon heat"
    ],
    keyFeatures: [
      "Internal rainwater harvesting connection to landscaped pebble pit",
      "Exposed concrete cantilever porch with timber-look underside",
      "Custom Burma teak main door with geometric brass inlay",
      "Full solar panel conduit infrastructure on the terrace"
    ],
    constructionStages: [
      { stage: "Sub-structure", description: "Isolated RCC footings dug to 6.5ft depth into hard gravel strata with 2 coats of Dr. Fixit damp-proof membrane." },
      { stage: "Framed Structure", description: "Fe-550D TMT steel framework with M25 design mix concrete cured continuously for 21 days." },
      { stage: "Finishing", description: "800x1600mm glazed vitrified tiles, custom BWP teak joinery, and Grohe concealed diverters." }
    ],
    specifications: {
      structure: "RCC framed structure with Fe-550D TMT & Ultratech Super Cement",
      flooring: "800 × 1600mm Somany glazed vitrified tiles in living & dining",
      joinery: "1st quality Teakwood frame with 38mm flush doors",
      sanitary: "Kohler & Jaquar wall-hung closets with concealed cisterns",
      electrical: "Finolex FRLS copper wiring with Legrand Arteor modular switches"
    }
  },
  {
    id: "the-horizon-villa",
    title: "The Horizon Villa",
    subtitle: "Cantilevered contemporary luxury villa with expansive glass facades",
    location: "K.K. Nagar Extension, Madurai, Tamil Nadu",
    type: "Luxury Villa",
    builtUpArea: "3,850 sq.ft",
    plotArea: "4,000 sq.ft (50 × 80 ft)",
    bedrooms: 5,
    floors: 2,
    yearCompleted: "2024",
    duration: "12 Months",
    featured: true,
    image: "/src/assets/images/project_horizon_residence_1790486511207.jpg",
    gallery: [
      "/src/assets/images/project_horizon_residence_1790486511207.jpg",
      "/src/assets/images/hero_luxury_villa_1790486487640.jpg",
      "/src/assets/images/construction_craftsmanship_1790486522293.jpg",
      "/src/assets/images/project_courtyard_house_1790486499772.jpg"
    ],
    designConcept: "An unapologetic study in horizontal geometry. Striking concrete eaves provide deep solar shading against harsh noon sun, while double-height living areas create an expansive sense of luxury, light, and architectural stillness.",
    clientRequirements: [
      "Distinct modern aesthetic that stands out with clean cubic geometry",
      "Home theatre room on the upper level with acoustic dampening",
      "Open-concept Italian modular kitchen with breakfast island",
      "Two-car covered parking with EV charging station provision"
    ],
    keyFeatures: [
      "Double-height 22ft ceiling living lounge with floor-to-ceiling toughened glass",
      "Custom floating timber staircase with seamless glass balustrade",
      "Integrated smart lighting scenes and automated curtain tracks",
      "Landscaped compound with natural black granite waterfall feature"
    ],
    constructionStages: [
      { stage: "Excavation & Raft", description: "Combined footing and grade beam grid to handle cantilevered overhang loads." },
      { stage: "Precision Shuttering", description: "Phenolic film-faced shuttering plywood for clean architectural concrete surfaces." },
      { stage: "Luxury Fit-Out", description: "Imported Italian Botticino marble diamond polishing and recessed magnetic track lights." }
    ],
    specifications: {
      structure: "Seismic Zone III compliant RCC framework with Tata Tiscon 550D steel",
      flooring: "Italian Marble in living spaces & engineered wooden flooring in master suites",
      joinery: "Toughened thermal-break aluminum sliding systems (Schüco profile)",
      sanitary: "Grohe thermostatic rain shower systems & Geberit concealed elements",
      electrical: "Schneider Electric Zencelo smart switches with KNX home automation"
    }
  },
  {
    id: "the-serene-retreat",
    title: "The Serene Retreat",
    subtitle: "Turnkey luxury estate combining granite stonework with modern openness",
    location: "AKR Nagar, Sivagangai, Tamil Nadu",
    type: "Luxury Villa",
    builtUpArea: "4,200 sq.ft",
    plotArea: "4,800 sq.ft (60 × 80 ft)",
    bedrooms: 5,
    floors: 3,
    yearCompleted: "2025",
    duration: "13 Months",
    featured: true,
    image: "/src/assets/images/hero_luxury_villa_1790486487640.jpg",
    gallery: [
      "/src/assets/images/hero_luxury_villa_1790486487640.jpg",
      "/src/assets/images/project_courtyard_house_1790486499772.jpg",
      "/src/assets/images/project_horizon_residence_1790486511207.jpg",
      "/src/assets/images/construction_craftsmanship_1790486522293.jpg"
    ],
    designConcept: "Commissioned as a multi-generational legacy home, this estate harmoniously balances communal gathering areas with private family sanctuaries. Architectural water bodies at the foyer naturally cool dry inland breezes.",
    clientRequirements: [
      "Separate wings for elders and visiting grandchildren",
      "Terrace entertainment pavilion with barbecue and panoramic town views",
      "High thermal mass construction using wire-cut red bricks for cooler interiors",
      "Heavy-duty borewell water filtration room and solar water heaters"
    ],
    keyFeatures: [
      "Thermal clay terracotta jali screens filtering western sunlight",
      "Private swimming plunge pool overlooking secluded internal garden",
      "Custom solid padauk wood doors with 8-lever mortise brass locks",
      "Heavy load-bearing terrace floor designed for rooftop hydroponic garden"
    ],
    constructionStages: [
      { stage: "Foundation", description: "Deep pile foundations bored to hard rock stratum with corrosion-inhibiting cement." },
      { stage: "Masonry", description: "Wire-cut red clay bricks bonded with 1:5 cement mortar and polymer additives." },
      { stage: "Handover", description: "Complete zero-defect formal handover with all architectural drawings and warranty cards." }
    ],
    specifications: {
      structure: "Heavy-duty RCC frame with Ramco Supergrade OPC 53 and JSW Neosteel",
      flooring: "Leather-finish Sadarahalli granite outdoor & statuario vitrified slabs indoor",
      joinery: "Country Teak internal frames with brass antique hardware",
      sanitary: "TOTO automated smart washlet toilets and Hansgrohe faucets",
      electrical: "Polycab zero-halogen fire retardant cables with Havells Crabtree controls"
    }
  },
  {
    id: "the-urban-residence",
    title: "The Urban Residence",
    subtitle: "Compact plot optimization with multi-level functional luxury",
    location: "Race Course Area, Coimbatore, Tamil Nadu",
    type: "Turnkey Home",
    builtUpArea: "2,350 sq.ft",
    plotArea: "1,800 sq.ft (30 × 60 ft)",
    bedrooms: 3,
    floors: 2,
    yearCompleted: "2024",
    duration: "9 Months",
    featured: false,
    image: "/src/assets/images/construction_craftsmanship_1790486522293.jpg",
    gallery: [
      "/src/assets/images/construction_craftsmanship_1790486522293.jpg",
      "/src/assets/images/project_courtyard_house_1790486499772.jpg",
      "/src/assets/images/hero_luxury_villa_1790486487640.jpg"
    ],
    designConcept: "Demonstrates that limited plot sizes need not compromise architectural grandeur. Using split-level floor plans and lightwells, every square foot was engineered for high utility, natural ventilation, and zero wasted corridors.",
    clientRequirements: [
      "Maximize usable floor plate while strictly complying with municipal setbacks",
      "Dedicated work-from-home acoustic office nook",
      "Integrated covered storage for bicycles and sports equipment",
      "Low maintenance finish for working professional couple"
    ],
    keyFeatures: [
      "Mezzanine library nook overlooking the central double-height dining room",
      "Motorized ventilation louvers on the roof terrace skylight",
      "Concealed air conditioner outdoor units hidden behind architectural aluminum fins",
      "Compact utility balcony with washing machine and drying rack provisions"
    ],
    constructionStages: [
      { stage: "Piling & Plinth", description: "Under-reamed piles due to urban proximity, followed by RCC plinth tie beams." },
      { stage: "Brickwork", description: "Autoclaved Aerated Concrete (AAC) blocks for superior thermal insulation and light structural dead-load." },
      { stage: "Turnkey Handover", description: "Complete painting with Asian Paints Royale, lighting fixtures, and deep cleaning." }
    ],
    specifications: {
      structure: "RCC columns with Jindal Panther TMT and Dalmia Bharat DSP cement",
      flooring: "Kajaria 600 × 1200mm vitrified tiles with epoxy grouting",
      joinery: "Kommerling UPVC sliding windows with Saint-Gobain DGU glass",
      sanitary: "Jaquar Kubix series CP fittings and wall-hung sanitaryware",
      electrical: "Anchor Roma Plus modular switches with RR Kabel insulated wiring"
    }
  }
];
