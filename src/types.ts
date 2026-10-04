export interface PastryCreation {
  id: string;
  title: string;
  subtitle: string;
  category: 'entremets' | 'drip-cake' | 'evenements';
  categoryLabel: string;
  description: string;
  portionRange: string;
  basePrice: number;
  highlightBadge?: string;
  mainImage: string;
  mainImageWebp: string;
  galleryImages: {
    src: string;
    webp: string;
    caption: string;
    angle: string;
  }[];
  composition: {
    biscuit: string;
    creme: string;
    insert: string;
    glacage: string;
    decorations: string[];
  };
  allergens: string[];
  leadTimeHours: number;
}

export interface Review {
  id: string;
  author: string;
  event: string;
  rating: number;
  comment: string;
  cakeName: string;
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
