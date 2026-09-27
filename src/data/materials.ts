import { MaterialSpecificationCategory } from '../types';

export const materialSpecifications: MaterialSpecificationCategory[] = [
  {
    id: "structure",
    title: "Structure & Foundation",
    description: "The core load-bearing framework that dictates the seismic safety, longevity, and structural stability of your home.",
    items: [
      {
        component: "Foundation Type",
        essential: "Isolated RCC column footings (5 to 6 ft depth) based on soil bearing capacity",
        signature: "Deep isolated / combined RCC footings with raft tie-beams for enhanced structural stability",
        premium: "Engineered pile / strap beam foundation designed with STAAD.Pro seismic analysis",
        luxury: "Heavy-duty Raft or Pile foundation with micro-piling for cantilevered & water-body engineering",
        technicalNotes: "Soil bearing capacity (SBC) test performed prior to excavation for every individual plot."
      },
      {
        component: "RCC Framework & Mix",
        essential: "M20 grade concrete (1:1.5:3) with mechanized site mixer and needle vibrator compaction",
        signature: "M25 design-mix concrete with automated batching and continuous 21-day pond curing",
        premium: "M25 / M30 ready-mix concrete with slump testing, cube compression testing and plasticizers",
        luxury: "M30+ high-performance concrete with silica fume micro-reinforcement for seamless long spans",
        technicalNotes: "Concrete cube compressive strength tested at 7 and 28 days with certified laboratory reports."
      },
      {
        component: "Waterproofing & Anti-Termite",
        essential: "Dr. Fixit integral waterproofing compound in foundation and plinth beam damp-proof course",
        signature: "2-coat bituminous damp-proofing on foundation walls + chemical anti-termite soil piping",
        premium: "Elastomeric polymer membrane waterproofing for basement/plinth + 10-year anti-termite reticulation system",
        luxury: "Full crystalline waterproofing (Penetron/Fosroc) across substructure + automated termite re-injection ports",
        technicalNotes: "Includes 10-year non-leakage guarantee for all below-ground structural elements."
      }
    ]
  },
  {
    id: "cement",
    title: "Cement & Binding",
    description: "High-grade structural Portland cements selected for low heat of hydration and maximum compressive strength.",
    items: [
      {
        component: "Structural Elements (RCC)",
        essential: "53-Grade OPC / PPC (Dalmia Bharat / Chettinad Cement / Priya)",
        signature: "Ultratech Super / Ramco Supergrade / Coromandel King 53-Grade",
        premium: "Ultratech Weather Plus / Ramco Supercrete high-durability cement",
        luxury: "Ultratech Premium WeatherShield / Lafarge Concreto with high slag durability",
        technicalNotes: "Fresh batch cement procured directly from authorized regional distributors."
      },
      {
        component: "Masonry & Plastering",
        essential: "43-Grade PPC Cement for brickwork and double-coat plastering",
        signature: "PPC Super Cement with polymer fiber crack-resistant additives",
        premium: "Ultratech Super Stucco / Ready-mix pre-graded mortar for uniform joints",
        luxury: "Specialized crack-free polymer modified mortar with water-repellent silane additives",
        technicalNotes: "Strict sand screening and washing protocol to remove silt and organic impurities."
      }
    ]
  },
  {
    id: "steel",
    title: "Steel Reinforcement",
    description: "Thermo-Mechanically Treated (TMT) rebars for superior ductility, corrosion resistance, and earthquake resilience.",
    items: [
      {
        component: "TMT Rebar Brand",
        essential: "Fe-500D TMT Bars (Kamachi / ARS / GBR / Pulkit)",
        signature: "Fe-550D TMT Bars (Tata Tiscon / JSW Neosteel / Jindal Panther)",
        premium: "Tata Tiscon Super Ductile (SD) 550D / JSW Neosteel CRS (Corrosion Resistant)",
        luxury: "Tata Tiscon 550D CRS with epoxy-bonded coating in sensitive soil zones",
        technicalNotes: "All steel supplied with mill test certificates certifying carbon equivalent and yield stress."
      },
      {
        component: "Stirrup & Binding Wire",
        essential: "8mm stirrup spacing as per standard civil structural schedule with 18-gauge binding wire",
        signature: "Engineered stirrup confinement at column joints with 18-gauge GI binding wire",
        premium: "Seismic cross-ties and CNC bent stirrups for pinpoint reinforcement geometry",
        luxury: "Precision robotic stirrup bending with double corrosion-protected galvanized ties",
        technicalNotes: "Strict compliance with IS 13920 ductile detailing for earthquake resistant buildings."
      }
    ]
  },
  {
    id: "walls",
    title: "Walls & Masonry",
    description: "Thermal mass, acoustic separation, and structural partition engineering.",
    items: [
      {
        component: "External Walls (9-inch)",
        essential: "First-quality table-molded red clay bricks with 1:6 cement mortar",
        signature: "Machine-cut red clay chamber bricks / High-density fly ash solid blocks",
        premium: "Wire-cut red clay bricks / High-grade Autoclaved Aerated Concrete (AAC) 200mm blocks",
        luxury: "Engineered insulated cavity wall system (Red brick + air cavity + insulation / Porotherm thermo-blocks)",
        technicalNotes: "Ensures superior thermal insulation to keep internal rooms 4-6°C cooler during summer."
      },
      {
        component: "Internal Partitions (4.5-inch)",
        essential: "Solid clay bricks with RCC patla band reinforcement at lintel level",
        signature: "Precision wire-cut bricks / 100mm AAC blocks with polymer joint mortar",
        premium: "Wienerberger Porotherm clay hollow blocks for high acoustic isolation between bedrooms",
        luxury: "Acoustic decoupled masonry partitions with perimeter dampening strips",
        technicalNotes: "Lintel bands and sill bands cast monolithically to prevent plaster shear cracks."
      }
    ]
  },
  {
    id: "flooring",
    title: "Flooring & Tiling",
    description: "Exquisite surface treatments ranging from heavy vitrified slabs to imported natural Italian marble.",
    items: [
      {
        component: "Living & Dining Spaces",
        essential: "Double-charged Vitrified Tiles (600 × 600mm) – Kajaria / Somany (Allowance: ₹55/sq.ft)",
        signature: "Large-format Glazed Vitrified Tiles (800 × 1600mm / 600 × 1200mm) – Simpolo / Kajaria (Allowance: ₹90/sq.ft)",
        premium: "Italian Marble (Botticino / Perlato) or Mega GVT Slabs (800 × 2400mm) (Allowance: ₹180/sq.ft)",
        luxury: "Hand-selected Imported Italian Marble (Statuario / Michelangelo / Dyna) diamond polished (Allowance: ₹350+/sq.ft)",
        technicalNotes: "Laid over 50mm compacted cement screed with Laticrete / Roff epoxy joint grout."
      },
      {
        component: "Bedrooms & Family Lounge",
        essential: "Matte or Gloss vitrified tiles (600 × 600mm) (Allowance: ₹50/sq.ft)",
        signature: "Designer vitrified wooden-plank tiles (200 × 1200mm) in master suite (Allowance: ₹85/sq.ft)",
        premium: "Engineered hardwood flooring or imported porcelain slabs (Allowance: ₹160/sq.ft)",
        luxury: "Solid Teakwood herringbone parquet / Imported seamless marble slabs (Allowance: ₹280+/sq.ft)",
        technicalNotes: "Acoustic underlayment used for upper-floor bedrooms to dampen footfall noise."
      },
      {
        component: "Balconies & Outdoor Portico",
        essential: "Rustic anti-skid ceramic/vitrified tiles (300 × 300mm) (Allowance: ₹45/sq.ft)",
        signature: "Heavy-duty flamed granite / Full-body exterior vitrified pavers (Allowance: ₹75/sq.ft)",
        premium: "Flamed & bush-hammered natural Sadarahalli or Black granite slabs (Allowance: ₹120/sq.ft)",
        luxury: "Natural Basalt stone slabs, textured deck wood & outdoor porcelain pavers (Allowance: ₹220/sq.ft)",
        technicalNotes: "Full waterproofing slope gradient of 1:60 directed into concealed stainless steel trench drains."
      }
    ]
  },
  {
    id: "kitchen",
    title: "Kitchen & Utility",
    description: "Culinary workspaces engineered for heavy cooking, easy maintenance, and ergonomic convenience.",
    items: [
      {
        component: "Countertop Slab",
        essential: "18mm Polished Jet Black Granite with half-bullnose edge profile",
        signature: "20mm Premium Black Galaxy Granite / Engineered Quartz slab with full-bullnose chamfer",
        premium: "Custom Silestone / Caesarstone Quartz (20mm) or Nano-White crystallization slab",
        luxury: "Seamless imported sintered porcelain stone (Neolith / Dekton) heat-resistant island countertop",
        technicalNotes: "Non-porous, stain-resistant, and high temperature resistant for authentic Indian cooking."
      },
      {
        component: "Kitchen Sink & Fittings",
        essential: "Single bowl 304-grade Stainless Steel Sink (Franke / Nirali) with long-body pillar tap",
        signature: "Single / Double bowl SS sink with drainboard & Jaquar / Kohler pull-out swivel faucet",
        premium: "Carysil Granite Composite double sink with Franke high-arc chef faucet and waste disposer provision",
        luxury: "Franke / Blanco undermount workstation sink with integrated cutting board, RO tap & glass rinser",
        technicalNotes: "Includes dedicated plumbing lines for dishwasher, RO water purifier, and separate utility area."
      },
      {
        component: "Backsplash Tiling",
        essential: "Ceramic glazed wall tiles up to 2 feet above countertop (Allowance: ₹40/sq.ft)",
        signature: "Designer subway / mosaic vitrified backsplash up to 3 feet height (Allowance: ₹70/sq.ft)",
        premium: "Full height slab backsplash or lacquered back-painted glass (Allowance: ₹140/sq.ft)",
        luxury: "Bookmatched continuous marble or slab sintered stone running to the upper ceiling",
        technicalNotes: "Seamless silicon sealing along perimeter to prevent moisture seepage behind base cabinets."
      }
    ]
  },
  {
    id: "bathroom",
    title: "Bathrooms & Sanitaryware",
    description: "Personal wellness retreats with premium ceramic sanitaryware, concealed plumbing, and thermostatic controls.",
    items: [
      {
        component: "Sanitaryware (Water Closets)",
        essential: "Parryware / Hindware floor-mounted or standard wall-mounted EWC with dual-flush tank",
        signature: "Jaquar / Kohler wall-hung rimless toilet with concealed slim cistern (Geberit / Grohe)",
        premium: "Kohler / Duravit wall-hung rimless WC with soft-close UF seat cover & pneumatic flush plate",
        luxury: "TOTO Neorest automated smart bidet toilet with heated seat, auto-open & air deodorizer",
        technicalNotes: "All waste pipes sound-insulated inside service shafts with clean-out access points."
      },
      {
        component: "CP Faucets & Showering",
        essential: "Jaquar Continental / Essco brass chrome-plated single lever mixer with overhead shower",
        signature: "Jaquar Florentine / Kohler Aleo single-lever diverter with 8-inch rain shower head",
        premium: "Grohe Eurosmart / Hansgrohe thermostatic concealed shower system with 10-inch shower and hand spray",
        luxury: "Axor Hansgrohe / Grohe SmartControl thermostatic rain shower with ceiling-flush multi-jet body sprays",
        technicalNotes: "Tested under 8-bar hydraulic pressure for 24 hours prior to wall plastering."
      },
      {
        component: "Wall Tiles & Glass Partition",
        essential: "Ceramic digital wall tiles up to 7ft height (Allowance: ₹45/sq.ft)",
        signature: "Full-height anti-bacterial vitrified wall tiles up to ceiling (Allowance: ₹75/sq.ft)",
        premium: "Large slab tiles + 10mm toughened glass shower partition with stainless steel hardware",
        luxury: "Bookmatched imported marble or full porcelain slabs with frameless Doma shower cubicles",
        technicalNotes: "Includes 2 coats of elastomeric waterproofing with geotextile corner reinforcement."
      }
    ]
  },
  {
    id: "doors",
    title: "Doors & Joinery",
    description: "Solid hardwoods, precision engineered frames, and heavy-duty brass/SS mortise architectural hardware.",
    items: [
      {
        component: "Main Entrance Door",
        essential: "First-quality Padauk / Country Teak frame (5 × 3 in) with 35mm laminated teak shutter",
        signature: "First-quality Teakwood frame (5 × 3.5 in) with solid teak designer carved shutter & brass fittings",
        premium: "Burma Teakwood frame (6 × 4 in) with 45mm solid teak shutter, brass inlays & Godrej digital lock",
        luxury: "Grand 8 to 9ft pivot door in solid Burma Teak with Yale / Samsung biometric smart lock",
        technicalNotes: "Treated with anti-borer and seasoned in dehumidified kilns to 12% moisture equilibrium."
      },
      {
        component: "Internal Room Doors",
        essential: "Padauk / Kongu wood frames with 32mm water-resistant flush doors with laminate skin",
        signature: "Red Maranti / Hardwood frames with factory-molded veneer doors & Europa mortise locks",
        premium: "Solid Teakwood frames with 38mm natural teak veneer flush doors & Hafele hardware",
        luxury: "Full-height solid teakwood flush doors with concealed German magnetic hinges & Italian handles",
        technicalNotes: "Equipped with rubber buffer gaskets for silent acoustic latching."
      }
    ]
  },
  {
    id: "windows",
    title: "Windows & Glazing",
    description: "Acoustic insulation, thermal performance, and unobstructed views with weather-sealed window systems.",
    items: [
      {
        component: "Window Framing & Glass",
        essential: "UPVC 2-track sliding windows (Kommerling / Prominance) with 5mm clear Saint-Gobain glass",
        signature: "Heavy UPVC 2.5-track sliding windows with integrated stainless steel mosquito mesh & 6mm toughened glass",
        premium: "Fenesta / Schüco soundproof UPVC / thermal-break aluminum windows with 6mm + 12mm air + 6mm DGU glass",
        luxury: "Reynaers / Schüco ultra-slim motorized architectural sliding systems with Low-E double glazing",
        technicalNotes: "Wind-load engineered with EPDM weather-stripping to eliminate wind whistling and rainwater ingress."
      },
      {
        component: "Window Sills & Grills",
        essential: "12mm MS safety square-rod grills with anti-rust primer and enamel paint",
        signature: "Laser-cut MS designer safety grills embedded in polished black granite sill frames",
        premium: "16mm bright-drawn solid steel architectural grills with full perimeter granite molding",
        luxury: "Hidden structural safety glass (laminated 12.5mm PVB) / Stainless steel 316 invisible safety grille",
        technicalNotes: "All window sills provided with continuous drip mold grooves beneath external lintels."
      }
    ]
  },
  {
    id: "electrical",
    title: "Electrical & Data Infrastructure",
    description: "Concealed heavy copper conduits, fire-retardant wiring, separate MCB sub-circuits, and smart automation provisions.",
    items: [
      {
        component: "Wiring & Cables",
        essential: "Finolex / RR Kabel Flame Retardant (FR) multi-strand copper cables",
        signature: "Polycab / Finolex Flame Retardant Low Smoke (FRLS) high-grade copper cables",
        premium: "Polycab Zero Halogen (LSZH) fire-survival wiring with heavy 25mm Virgin PVC conduits",
        luxury: "Shielded Cat-7 data cabling, audio distribution lines & fire-rated Polycab Maxima cables",
        technicalNotes: "Separate neutral and earthing circuits for every individual room to eliminate electrical interference."
      },
      {
        component: "Switches & Switchgear",
        essential: "Anchor Roma / GM Modular switches with Schneider / Havells MCB distribution box",
        signature: "Legrand Lyncus / Schneider Opale modular switches with dedicated RCBO shock protection",
        premium: "Legrand Arteor / Schneider Zencelo feather-touch switches with surge protection devices (SPD)",
        luxury: "Lutron / Schneider KNX glass touch panels with integrated ambient LED status indicators",
        technicalNotes: "Copper plate chemical earthing with dual earth pits for complete residential safety."
      },
      {
        component: "Provisions & Outlets",
        essential: "Adequate power points for AC (bedrooms), Geyser (bathrooms), TV, and refrigerator",
        signature: "AC points in all bedrooms & living, inverter pre-wiring, EV charger conduit in portico",
        premium: "Concealed AC copper piping for all rooms, centralized inverter / UPS room, CCTV conduits",
        luxury: "VRV / VRF HVAC conduit integration, 11kW Level-2 fast EV charger, high-speed fiber backbone",
        technicalNotes: "Full circuit schematic diagrams provided to homeowner at the time of key handover."
      }
    ]
  },
  {
    id: "plumbing",
    title: "Plumbing & Water Management",
    description: "Pressure-tested water delivery, silent drainage pipes, solar water heating, and rainwater harvesting.",
    items: [
      {
        component: "Water Supply Pipes",
        essential: "CPVC pipes (Ashirvad / Supreme / Astral) Class 1 for hot & cold internal supply",
        signature: "Ashirvad FlowGuard Plus CPVC SDR-11 pipes with brass threaded transition fittings",
        premium: "Astral / Ashirvad multi-layer composite pipes or copper distribution manifolds",
        luxury: "PEX / Viega German press-fit plumbing with centralized pressure booster pump system",
        technicalNotes: "Insulated hot water pipes with zero-head loss fittings."
      },
      {
        component: "Drainage & Soil Pipes",
        essential: "PVC SWR pipes (Supreme / Finolex) with solvent-welded leakproof joints",
        signature: "Supreme / Ashirvad ring-fit SWR drainage pipes with anti-odor floor traps",
        premium: "Acoustic triple-layer silent drainage pipes (Ashirvad Silent or Geberit Silent-PP)",
        luxury: "Geberit Silent-db20 acoustic pipe network with cast iron rainwater down-spouts",
        technicalNotes: "All vertical drainage stacks vented through roof terrace with balloon bird cowls."
      },
      {
        component: "Storage & Harvesting",
        essential: "1,000L Sintex / Supreme overhead tank + 4,000L RCC underground water sump",
        signature: "2,000L 4-layer antimicrobial overhead tank + 6,000L waterproofed RCC underground sump",
        premium: "Stainless steel 304 food-grade overhead tank + 8,000L dual-compartment treated water sump",
        luxury: "Custom insulated SS overhead system + 12,000L rainwater harvesting filtration aquifer pit",
        technicalNotes: "Integrated overflow automatic sensor shut-off valves to prevent water wastage."
      }
    ]
  },
  {
    id: "painting",
    title: "Painting & Surface Treatments",
    description: "Multi-coat surface preparation with skim-coat putty, primers, and durable architectural emulsions.",
    items: [
      {
        component: "Interior Walls & Ceilings",
        essential: "2 coats of Birla / JK Wall Putty + 1 coat primer + 2 coats Asian Paints Tractor Emulsion",
        signature: "2 coats acrylic putty + 1 coat primer + 2 coats Asian Paints Royale Luxury Emulsion",
        premium: "3 coats fine putty + 2 coats Asian Paints Royale Aspira / Berger Silk Luxury finish",
        luxury: "Venetian Stucco / Italian Lime plaster / Metallic specialty accent finishes with PU ceiling coat",
        technicalNotes: "Moisture meter reading below 12% verified prior to applying final color coats."
      },
      {
        component: "Exterior Facade Coating",
        essential: "1 coat exterior primer + 2 coats Asian Paints Apex Weatherproof Emulsion",
        signature: "1 coat exterior sealer primer + 2 coats Asian Paints Apex Ultima with 7-year performance warranty",
        premium: "Asian Paints Apex Ultima Protek with fiberglass reinforcing mesh & 10-year warranty",
        luxury: "Jotun Jotashield Extreme heat-reflective exterior coating / silicone water-repellent sealer",
        technicalNotes: "Fungus-resistant, anti-algal, and dirt-pickup resistant chemistry for tropical rainfall."
      }
    ]
  },
  {
    id: "ceiling",
    title: "False Ceiling & Lighting Integration",
    description: "Acoustic gypsum suspension, indirect cove illumination, and recessed fixture integration.",
    items: [
      {
        component: "False Ceiling Coverage",
        essential: "Standard POP perimeter border molding in living room with fan hooks",
        signature: "Saint-Gobain Gyproc false ceiling with perimeter cove lighting in Living and Dining halls",
        premium: "Gyproc false ceiling in Living, Dining, and all Bedrooms with magnetic track lighting slots",
        luxury: "Acoustic perforated gypsum + warm timber veneer baffle ceiling with Lutron motorized curtain pockets",
        technicalNotes: "Reinforced GI suspension grid anchored directly into concrete slab with expansion fasteners."
      }
    ]
  },
  {
    id: "staircase",
    title: "Staircase & Railings",
    description: "Architectural vertical circulation featuring cantilevered flights, natural stone treads, and safety glass.",
    items: [
      {
        component: "Staircase Finishes",
        essential: "Granite / Vitrified step tile treads with half bullnose edges and SS 202 railings",
        signature: "Single-piece Black Granite / Tan Brown treads with SS 304 glass balustrade railing",
        premium: "Cantilevered RCC spine staircase with imported marble treads & 12mm toughened glass railing",
        luxury: "Floating timber / structural steel cantilevered treads with curved seamless glass balustrade & LED under-glow",
        technicalNotes: "Riser height standardized at 6 inches with 11-inch tread width for optimal ergonomic ascent."
      }
    ]
  },
  {
    id: "exterior",
    title: "Exterior Elevation & Compound",
    description: "First impressions, privacy barriers, architectural gate automation, and landscape integration.",
    items: [
      {
        component: "Compound Wall & Gate",
        essential: "5ft brick compound wall with plaster finish + MS swing gate with zinc primer",
        signature: "6ft compound wall with CNC laser-cut MS inserts + designer gate with weather-coat enamel",
        premium: "Architectural compound wall with textured stone cladding + heavy steel gate with intercom provision",
        luxury: "Solid basalt stone compound wall + automated remote motorized sliding gate + video entry station",
        technicalNotes: "Includes exterior spike lighting, number plate illumination, and concealed mail box."
      }
    ]
  },
  {
    id: "smart-home",
    title: "Smart Home & Automation",
    description: "Intelligent security, remote lighting scenes, motorized window blinds, and voice-assisted living.",
    items: [
      {
        component: "Automation Level",
        essential: "Pre-wired for inverter, video doorbell provision & Wi-Fi router central shelf",
        signature: "Smart Wi-Fi switch modules for living room & master bedroom, smart video doorbell with smartphone chime",
        premium: "Schneider / Legrand wireless smart lighting, motorized curtain conduits & 4-camera IP CCTV system",
        luxury: "Full wired KNX / Control4 automation: lighting, multi-room audio, climate, motorized shades & biometric security",
        technicalNotes: "Future-proof CAT6A data conduits routed to all televisions and ceiling access points."
      }
    ]
  }
];
