export type ProjectCategory = 'Architecture' | 'Interior Design' | '3D Visualization';

export interface GalleryItem {
  url: string;
  alt: string;
  caption?: string;
  type?: 'render' | 'plan' | 'diagram' | 'detail' | 'elevation' | 'section';
  aspect?: 'landscape' | 'portrait' | 'square' | 'ultrawide';
}

export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  category: ProjectCategory;
  shortDescription: string;
  concept: string;
  coverImage: string;
  altText: string;
  featured: boolean;
  order: number;
  year?: string;
  location?: string;
  area?: string;
  status?: string;
  context?: string;
  clientOrStudio?: string;
  awards?: string[];
  softwares: string[];
  designApproach?: string[];
  materialsAndLighting?: string;
  gallery: GalleryItem[];
}

export interface SiteConfig {
  name: string;
  title: string;
  descriptor: string;
  email: string;
  phone: string;
  location: string;
  instagram: string;
  instagramUrl: string;
  linkedinUrl: string;
  availableForWork: boolean;
  bioSummary: string;
  fullBio: string[];
  philosophyQuote: string;
}
