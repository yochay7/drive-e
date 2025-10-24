export interface EVModel {
  id: string;
  brand: string;
  model: string;
  year: number;
  slug: string;
  images: {
    main: string;
    gallery: string[];
  };
  pricing: {
    basePrice: number;
    currency: string;
    maxPrice?: number;
  };
  specifications: {
    battery: {
      capacity: number; // kWh
      type: string;
    };
    range: {
      epa: number; // miles
      wltp: number; // km
    };
    performance: {
      topSpeed: number; // mph
      acceleration: number; // 0-60 mph in seconds
      horsepower: number;
      torque: number; // lb-ft
    };
    charging: {
      dcFastCharging: boolean;
      maxChargingSpeed: number; // kW
      time0to80: number; // minutes
    };
    drivetrain: 'RWD' | 'FWD' | 'AWD';
    seats: number;
    cargo: number; // cubic feet
    weight: number; // lbs
  };
  features: string[];
  safety: {
    rating: number;
    features: string[];
  };
  availability: {
    markets: string[];
    status: 'available' | 'coming-soon' | 'pre-order';
  };
  description: {
    short: string;
    full: string;
  };
  reviews?: Review[];
  averageRating?: number;
}

export interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  title: string;
  content: string;
  pros?: string[];
  cons?: string[];
  verified: boolean;
}

export interface FilterOptions {
  brands: string[];
  priceRange: [number, number];
  rangeMin: number;
  seats: number[];
  drivetrain: string[];
}

export interface ComparisonItem {
  evId: string;
  ev: EVModel;
}

export type SortOption = 'price-asc' | 'price-desc' | 'range-desc' | 'rating-desc' | 'newest';

