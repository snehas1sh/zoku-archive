export type CultureStatus = 'available' | 'coming_soon';

export interface Source {
  id: string;
  title: string;
  author?: string;
  year?: string;
  publication?: string;
  type: 'book' | 'academic' | 'periodical' | 'archive' | 'documentary';
  notes?: string;
  url?: string;
}

export interface Culture {
  id: string;
  name: string;
  japanese: string;
  romaji?: string;
  status: CultureStatus;
  shortDescription: string;
  heroImage: string;
  thumbnailImage: string;
  origins?: {
    era: string;
    summary: string;
    points: { year: string; event: string }[];
  };
  visualCulture?: {
    summary: string;
    elements: { name: string; description: string }[];
  };
  ridingCulture?: {
    summary: string;
    elements: { name: string; description: string }[];
  };
  declineLegacy?: {
    summary: string;
    points: string[];
  };
  sources?: Source[];
}

export interface MotorcycleSpecs {
  manufacturer: string;
  production: string;
  engine: string;
  displacement: string;
  cooling: string;
  cylinders: string;
  power: string;
  weight: string;
  transmission?: string;
  topSpeed?: string;
}

export interface Motorcycle {
  id: string;
  name: string;
  manufacturer: 'Kawasaki' | 'Honda' | 'Yamaha' | 'Suzuki' | string;
  productionYears: string;
  era: '1960s' | '1970s' | '1980s' | '1990s';
  cultureIds: string[];
  image: string;
  shortDescription: string;
  about: string;
  specs: MotorcycleSpecs;
  bosozokuConnection: string;
  commonModifications: string[];
  sources: Source[];
}

export interface ModificationCategory {
  id: string;
  name: string;
  japanese: string;
  romaji?: string;
  tagline: string;
  description: string;
  mechanicalFunction: string;
  culturalSignificance: string;
  image: string;
  historicalEra: string;
  relatedMotorcycleIds: string[];
  subtypes: { name: string; description: string }[];
}
