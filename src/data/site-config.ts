import { SiteConfig } from "@/types/project";

export const siteConfig: SiteConfig = {
  name: "Jyoti Sahu",
  title: "Architect · Interior Designer · 3D Visualizer",
  descriptor: "ARCHITECTURE / INTERIORS / VISUALIZATION",
  email: "jyotisep2709@gmail.com",
  phone: "+91 9326547127",
  location: "Dombivli, Maharashtra · Mumbai, India",
  instagram: "jyoti_sahu__27",
  instagramUrl: "https://www.instagram.com/jyoti_sahu__27/",
  linkedinUrl: "https://www.linkedin.com/in/jyoti-sahu-architect",
  availableForWork: true,
  bioSummary:
    "I am Jyoti Sahu, a B.Arch graduate from Piloo Mody College of Architecture. Passionate about creating meaningful and context-responsive spaces, I approach architecture as a blend of creativity, functionality, and problem-solving.",
  fullBio: [
    "I am Jyoti Sahu, an architect, interior designer, and 3D visualizer graduated with a Bachelor of Architecture (B.Arch) from Piloo Mody College of Architecture, Cuttack. Passionate about creating meaningful and context-responsive spaces, I approach architecture as a blend of creativity, functionality, and rigorous spatial problem-solving.",
    "Through academic studios, national competition finals, and a 6-month architectural internship at the renowned firm Architect Hafeez Contractor in Mumbai, I have honed expertise in architectural design, 3D visualization, technical documentation, and digital modeling.",
    "My focus centers on the interplay of natural light, tactile materiality, passive climate strategies, and human movement—translating complex design intent into visceral, photorealistic spatial narratives.",
  ],
  philosophyQuote:
    "Good design is not just what a space looks like. It is how it feels, functions, and connects with the people who experience it.",
};

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
}

export const educationList: EducationItem[] = [
  {
    period: "2021 — 2026",
    degree: "Bachelor of Architecture (B.Arch)",
    institution: "Piloo Mody College of Architecture",
    location: "Cuttack, Odisha",
  },
  {
    period: "2018 — 2020",
    degree: "Higher Secondary Certificate (Science)",
    institution: "K V Pendharkar College",
    location: "Dombivli, Maharashtra",
  },
  {
    period: "2006 — 2018",
    degree: "Primary & Secondary Education",
    institution: "Oxford School",
    location: "Dombivli, Maharashtra",
  },
];

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  keyContributions: string[];
}

export const experienceList: ExperienceItem[] = [
  {
    period: "2025 (9th Sem)",
    role: "Architectural Intern (6 Months)",
    company: "Architect Hafeez Contractor",
    location: "CSTM, Fort, Mumbai",
    type: "Internship",
    description:
      "Contributed to high-scale commercial, institutional, and convention center projects under leading senior architects. Gained extensive hands-on experience in municipal drawing standards, spatial planning, and presentation renders.",
    keyContributions: [
      "Developed comprehensive false ceiling layouts, unfolded external elevations, and area calculation drawings for the Central Business Hub, Daman.",
      "Produced detailed 3D digital models and realistic presentation renders using SketchUp, AutoCAD, and D5 Render.",
      "Collaborated with multidisciplinary engineering and design teams on complex public circulation and facade systems.",
    ],
  },
  {
    period: "2024 — Present",
    role: "Freelance Designer & Visualizer",
    company: "Independent Practice",
    location: "Remote / Mumbai",
    type: "Freelance",
    description:
      "Delivered tailored brand identities, presentation graphics, and 3D architectural visualizations for private clients, commercial ventures, and design competitions.",
    keyContributions: [
      "Created minimalist logo marks and cohesive presentation identity guidelines.",
      "Developed high-fidelity 3D exterior and interior visualizations emphasizing material realism and daylight quality.",
    ],
  },
];

export interface AchievementItem {
  year: string;
  title: string;
  competition: string;
  organizer: string;
  highlight?: string;
}

export const achievementsList: AchievementItem[] = [
  {
    year: "2024 — 2025",
    title: "Top 10 National Finalist & Eastern Interface Recognition",
    competition: "Transparence 19.0 — Urban Development CBD's",
    organizer: "Ethos & Saint-Gobain",
    highlight: "Awarded Top 10 National Finalist and Special Recognition in Eastern Interface for project 'Infinix' Khordha.",
  },
  {
    year: "2024 — 2025",
    title: "Top 10 National Finalist",
    competition: "Saint-Gobain Architectural Student Contest (France)",
    organizer: "Saint-Gobain Global / Transparence",
    highlight: "Honored for the sustainable adaptive reuse of an abandoned school in Chimilin, France.",
  },
  {
    year: "2024 — 2025",
    title: "Top 10 National Finalist",
    competition: "TASA Nano Home Residence",
    organizer: "RVS Chennai & TASA",
    highlight: "Recognized for 'Nesavu', a traditional Vastu-compliant eco-residence built using site-sourced earth and terracotta.",
  },
  {
    year: "2023",
    title: "National Competition Participant",
    competition: "Solar Decathlon India (SDI)",
    organizer: "Solar Decathlon",
    highlight: "Net-zero energy commercial office building proposal integrating passive cooling and solar generation.",
  },
];

export interface SoftwareCategory {
  category: string;
  skills: { name: string; level: string; note?: string }[];
}

export const softwareSkills: SoftwareCategory[] = [
  {
    category: "BIM & 2D Drafting",
    skills: [
      { name: "Autodesk AutoCAD", level: "Advanced", note: "Working drawings, floor plans, sections, detailing" },
      { name: "Trimble SketchUp", level: "Advanced", note: "Precise massing, spatial composition, 3D building models" },
    ],
  },
  {
    category: "3D Rendering & Visualization",
    skills: [
      { name: "D5 Render", level: "Advanced", note: "Real-time raytracing, photorealistic architectural scenes, daylighting" },
      { name: "Lumion", level: "Advanced", note: "Atmospheric landscapes, contextual vegetation, animation" },
      { name: "Twinmotion", level: "Proficient", note: "Interactive spatial presentation & environment rendering" },
      { name: "Enscape", level: "Proficient", note: "Instant architectural walkthroughs & material exploration" },
    ],
  },
  {
    category: "Post-Production & Design",
    skills: [
      { name: "Adobe Photoshop", level: "Advanced", note: "Architectural render post-processing, collage, texturing" },
      { name: "Canva & Presentations", level: "Advanced", note: "Editorial portfolio layouts & presentation boards" },
      { name: "Microsoft Office Suite", level: "Advanced", note: "Project documentation, specifications, reports" },
    ],
  },
];

export const architecturalCompetencies = [
  {
    title: "Spatial Planning & Concept Massing",
    description: "Developing responsive zoning, human circulation flows, and sculptural architectural massing rooted in contextual analysis.",
  },
  {
    title: "Photorealistic 3D Visualization",
    description: "Creating cinematic renders that capture authentic daylight, dusk illumination, tactile material textures, and spatial mood.",
  },
  {
    title: "Technical Detailing & Working Drawings",
    description: "Producing precise municipal drawings, ceiling layouts, sections, unfolded elevations, and joinery schedules.",
  },
  {
    title: "Sustainable & Passive Architecture",
    description: "Integrating terracotta jali screens, low-E glazing, courtyards for stack ventilation, and site-excavated adobe materials.",
  },
  {
    title: "Interior Spatial Composition",
    description: "Balancing bespoke cabinetry, curated lighting temperatures, organic cane/timber finishes, and tactile sensory experiences.",
  },
  {
    title: "Physical Model Crafting",
    description: "Transforming abstract geometric concepts into tactile physical scale models to study light penetration and shadow play.",
  },
];
