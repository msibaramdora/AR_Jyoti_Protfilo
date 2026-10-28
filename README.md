# Jyoti Sahu — Architecture & 3D Visualization Portfolio

An award-winning editorial digital portfolio website for **Jyoti Sahu**, an architect, interior designer, and 3D visualizer based in Mumbai / Dombivli, India.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Motion / Framer Motion**.

---

## 🌟 Live Features & Highlights

- **Editorial Studio Aesthetic**: Quiet luxury aesthetic using warm ivory (`#F7F5F0`), soft beige (`#E9E2D8`), sand (`#D4C5B2`), and deep charcoal (`#252522`).
- **Refined Typography**: Pairings of **Cormorant Garamond** (for architectural serif headings) and **Manrope** (for technical specifications, labels, and body text).
- **Authentic Portfolio Projects & Renders**:
  1. **Infinix (Transparence 19.0)** — Mixed-Use Retail, Office & Multiplex in Khordha (Top 10 National Finalist).
  2. **Nesavu (TASA Nano Home)** — Traditional Vastu-Compliant Eco-Residence in Chennai (Top 10 Finalist).
  3. **Botanica (Kama Ayurveda)** — Flagship Luxury Retail Interior in Bhubaneswar.
  4. **Central Business Hub, Daman** — Waterfront Convention Center designed during 6-month internship at **Architect Hafeez Contractor**.
  5. **Aquora (Thesis)** — Oceanography Research & Edutainment Centre in Alibag.
  6. **Abandoned School Renovation, Chimilin (France)** — Saint-Gobain Student Contest National Finalist.
  7. **Luminark** — Circular Economy Sustainable Lamp from Textile Waste.
  8. **Dusk Illumination Study** — Photorealistic 3D Raytraced Exterior Lighting.
- **Dynamic Case Studies (`/projects/[slug]`)**: Detailed project overviews with design concepts, zoning diagrams, working drawings, technical specifications, materials, and lighting direction.
- **Interactive Lightbox Modal**: Click any drawing, section, or render in a case study to inspect it up close in high resolution.
- **Filterable Gallery (`/projects`)**: Instant interactive filtering across Architecture, Interior Design, and 3D Visualization with project counters and empty states.
- **About & Verified Credentials (`/about`)**: Full biography, academic timeline (Piloo Mody College of Architecture), professional practice at Hafeez Contractor, competition honors, and digital software toolkit (AutoCAD, SketchUp, D5 Render, Lumion, Photoshop).
- **Contact & Project Inquiries (`/contact`)**: Validated contact form using **React Hook Form** + **Zod**, direct WhatsApp quick links, verified email, and social profiles.
- **SEO & Performance**: Dynamic metadata, OpenGraph cards, Twitter cards, `sitemap.xml`, and `robots.txt`.

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v20+` or `v25+`
- npm, pnpm, or yarn

### Installation

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the website.

### Production Build

```bash
# Build the optimized static application
npm run build

# Preview the production build locally
npm run start
```

---

## 📁 Project Architecture

```text
src/
├── app/
│   ├── layout.tsx                # Root layout with fonts, metadata, Header & Footer
│   ├── page.tsx                  # Architectural Homepage
│   ├── globals.css               # Design system tokens, serif styles, arch grid
│   ├── not-found.tsx             # Editorial 404 boundary
│   ├── sitemap.ts                # Dynamic XML sitemap generator
│   ├── robots.ts                 # Robots.txt configuration
│   ├── projects/
│   │   ├── page.tsx              # Portfolio index with category filters
│   │   └── [slug]/
│   │       └── page.tsx          # Dynamic project case study route
│   ├── about/
│   │   └── page.tsx              # Comprehensive biography, credentials & CV
│   └── contact/
│       └── page.tsx              # Inquiries, consultations & contact details
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Sticky wordmark header & responsive mobile drawer
│   │   └── Footer.tsx            # Studio footer with direct links & copyright
│   ├── home/
│   │   ├── Hero.tsx              # Editorial hero with visual showcase & CTAs
│   │   ├── FeaturedProjects.tsx  # Asymmetric editorial grid of top projects
│   │   ├── Philosophy.tsx        # Design statement with physical model study
│   │   ├── Capabilities.tsx      # Core disciplines (Arch, Interiors, 3D Viz)
│   │   ├── Process.tsx           # 4-stage architectural methodology
│   │   ├── AboutPreview.tsx      # Portrait & credential highlights
│   │   └── ContactCTA.tsx        # Closing collaboration invitation
│   ├── projects/
│   │   ├── ProjectCard.tsx       # Reusable project card with hover zoom
│   │   ├── ProjectFilters.tsx    # Category pills with project counters
│   │   ├── ProjectGrid.tsx       # Responsive client-side filterable grid
│   │   └── ProjectGallery.tsx    # Lightbox modal viewer for high-res plates
│   ├── contact/
│   │   └── ContactForm.tsx       # Form with Zod validation & integration points
│   └── ui/
│       ├── Button.tsx            # Minimalist architectural button
│       ├── SectionHeading.tsx    # Editorial serif section titles with eyebrow
│       └── Icons.tsx             # Clean SVG social marks (Instagram, LinkedIn)
├── data/
│   ├── projects.ts               # Typed project database (all project copy & images)
│   └── site-config.ts            # Personal information, education, experience, skills
├── lib/
│   └── utils.ts                  # Classname merging utilities (twMerge, clsx)
└── types/
    └── project.ts                # TypeScript interfaces for projects and site data
public/
└── images/
    ├── profile/                  # Portrait photo & model studies
    └── projects/                 # Extracted high-res renders, plans & elevations
```

---

## ✏️ How to Add or Edit Projects

All project information is centralized in [`src/data/projects.ts`](file:///Users/apple/Developer/Workpase/Jyoti_Protfilo/src/data/projects.ts).

To add a new project, insert a new object into the `projects` array:

```typescript
{
  slug: "new-residence",
  title: "Hillside Sanctuary",
  subtitle: "Passive Solar Mountain Retreat",
  category: "Architecture", // 'Architecture' | 'Interior Design' | '3D Visualization'
  shortDescription: "A cantilevered timber and stone residence integrated into the Western Ghats.",
  concept: "Detailed concept statement explaining spatial orientation, daylight, and massing...",
  coverImage: "/images/projects/new-residence/hero.jpg",
  altText: "Exterior perspective of Hillside Sanctuary at sunset",
  featured: true,
  order: 9,
  year: "2026",
  location: "Lonavala, Maharashtra",
  area: "4,500 sq.ft",
  status: "Under Construction",
  context: "Private Residential Commission",
  softwares: ["Autodesk AutoCAD", "Trimble SketchUp", "D5 Render"],
  designApproach: [
    "Cantilevered steel frame reducing ground disturbance.",
    "Operable timber louvers shielding western solar radiation.",
  ],
  materialsAndLighting: "Locally quarried basalt, reclaimed teak, low-iron glazing.",
  gallery: [
    {
      url: "/images/projects/new-residence/hero.jpg",
      alt: "Hero exterior perspective",
      caption: "Main approach facing the valley.",
      type: "render",
      aspect: "landscape",
    },
    {
      url: "/images/projects/new-residence/floor-plan.jpg",
      alt: "Upper level floor plan",
      caption: "Upper living level layout showing cross ventilation.",
      type: "plan",
      aspect: "landscape",
    },
  ],
}
```

Save the file and place your images in `public/images/projects/[slug]/`. The new project will automatically appear on `/projects`, be included in `/sitemap.xml`, and have its dynamic route `/projects/[slug]` generated.

---

## 📬 Contact Form Backend Integration

The contact form in [`src/components/contact/ContactForm.tsx`](file:///Users/apple/Developer/Workpase/Jyoti_Protfilo/src/components/contact/ContactForm.tsx) performs robust client-side validation using Zod.

To connect it to live email delivery:

### Option A: Formspree / Web3Forms (Easiest, No Server Code)
1. Sign up at [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com).
2. In `ContactForm.tsx`, replace the `new Promise` simulation with:
   ```typescript
   const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(data),
   });
   ```

### Option B: Next.js Server Action with Resend
1. Run `npm install resend`.
2. Add your `RESEND_API_KEY` to `.env.local`.
3. Create `src/app/actions/send-email.ts` and call `resend.emails.send({ to: siteConfig.email, ... })`.

---

## 🌐 Production Deployment

This project is fully optimized for static deployment on **Vercel**, **Cloudflare Pages**, or **Netlify**:

1. Push your repository to GitHub.
2. Import the project into **Vercel** (`https://vercel.com/new`).
3. Set the optional environment variable `NEXT_PUBLIC_SITE_URL` to your production domain (e.g. `https://jyotisahu.com`).
4. Click **Deploy**. Vercel will automatically run `npm run build` and distribute your portfolio across global edge locations.
