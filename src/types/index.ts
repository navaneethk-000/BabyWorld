export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  sizes: string[];
  category: string;
  featured?: boolean;
}

export type Size = 'Newborn' | '0-3m' | '3-6m' | '6-12m' | '12-18m' | '18-24m' | '2T' | '3T';