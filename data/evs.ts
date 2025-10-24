import { EVModel, FilterOptions, SortOption } from '@/types/ev';

export const evDatabase: EVModel[] = [
  {
    id: '1',
    brand: 'Tesla',
    model: 'Model 3',
    year: 2024,
    slug: 'tesla-model-3',
    images: {
      main: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80',
      ],
    },
    pricing: {
      basePrice: 40240,
      currency: 'USD',
      maxPrice: 50240,
    },
    specifications: {
      battery: {
        capacity: 75,
        type: 'Lithium-ion NCA',
      },
      range: {
        epa: 333,
        wltp: 536,
      },
      performance: {
        topSpeed: 140,
        acceleration: 4.2,
        horsepower: 283,
        torque: 307,
      },
      charging: {
        dcFastCharging: true,
        maxChargingSpeed: 250,
        time0to80: 27,
      },
      drivetrain: 'RWD',
      seats: 5,
      cargo: 23,
      weight: 4048,
    },
    features: [
      'Autopilot',
      '15-inch touchscreen',
      'Premium audio',
      'Glass roof',
      'Heated seats',
      'Smart summon',
    ],
    safety: {
      rating: 5,
      features: [
        'Forward collision warning',
        'Automatic emergency braking',
        'Blind spot monitoring',
        'Lane departure warning',
      ],
    },
    availability: {
      markets: ['US', 'Europe', 'China', 'Canada'],
      status: 'available',
    },
    description: {
      short: 'The most affordable Tesla with impressive range and performance',
      full: 'The Tesla Model 3 is a compact executive sedan that combines performance, safety, and efficiency. With its minimalist interior and advanced autopilot features, it has become one of the best-selling electric vehicles globally.',
    },
    averageRating: 4.7,
  },
  {
    id: '2',
    brand: 'Tesla',
    model: 'Model Y',
    year: 2024,
    slug: 'tesla-model-y',
    images: {
      main: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      ],
    },
    pricing: {
      basePrice: 47740,
      currency: 'USD',
      maxPrice: 54490,
    },
    specifications: {
      battery: {
        capacity: 75,
        type: 'Lithium-ion NCA',
      },
      range: {
        epa: 330,
        wltp: 533,
      },
      performance: {
        topSpeed: 135,
        acceleration: 4.8,
        horsepower: 384,
        torque: 376,
      },
      charging: {
        dcFastCharging: true,
        maxChargingSpeed: 250,
        time0to80: 27,
      },
      drivetrain: 'AWD',
      seats: 7,
      cargo: 76,
      weight: 4416,
    },
    features: [
      'Autopilot',
      '15-inch touchscreen',
      'Premium audio',
      'Panoramic glass roof',
      'Heated seats (all rows)',
      'Power liftgate',
    ],
    safety: {
      rating: 5,
      features: [
        'Forward collision warning',
        'Automatic emergency braking',
        'Blind spot monitoring',
        'Lane departure warning',
        '360-degree camera',
      ],
    },
    availability: {
      markets: ['US', 'Europe', 'China', 'Canada', 'Australia'],
      status: 'available',
    },
    description: {
      short: 'Versatile electric SUV with optional third row seating',
      full: 'The Tesla Model Y is a compact SUV that offers exceptional versatility with optional third-row seating. It combines the benefits of an SUV with the performance and technology of Tesla.',
    },
    averageRating: 4.8,
  },
  {
    id: '3',
    brand: 'Tesla',
    model: 'Model S',
    year: 2024,
    slug: 'tesla-model-s',
    images: {
      main: 'https://images.unsplash.com/photo-1617704548623-340376564e68?w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1617704548623-340376564e68?w=800&q=80',
      ],
    },
    pricing: {
      basePrice: 74990,
      currency: 'USD',
      maxPrice: 89990,
    },
    specifications: {
      battery: {
        capacity: 100,
        type: 'Lithium-ion NCA',
      },
      range: {
        epa: 405,
        wltp: 652,
      },
      performance: {
        topSpeed: 155,
        acceleration: 3.1,
        horsepower: 670,
        torque: 700,
      },
      charging: {
        dcFastCharging: true,
        maxChargingSpeed: 250,
        time0to80: 30,
      },
      drivetrain: 'AWD',
      seats: 5,
      cargo: 28,
      weight: 4561,
    },
    features: [
      'Full Self-Driving capability',
      '17-inch cinematic display',
      'Premium audio (22 speakers)',
      'Glass roof',
      'Heated and ventilated seats',
      'Yoke steering wheel',
      'Tri-motor AWD',
    ],
    safety: {
      rating: 5,
      features: [
        'Advanced autopilot',
        'Automatic emergency braking',
        'Blind spot monitoring',
        'Lane departure warning',
        '360-degree camera',
        'Parking sensors',
      ],
    },
    availability: {
      markets: ['US', 'Europe', 'China', 'Canada'],
      status: 'available',
    },
    description: {
      short: 'Luxury electric sedan with incredible performance',
      full: 'The Tesla Model S is a full-size luxury sedan that offers incredible performance with tri-motor all-wheel drive. With the longest range and fastest acceleration, it\'s the flagship of Tesla\'s lineup.',
    },
    averageRating: 4.9,
  },
  {
    id: '4',
    brand: 'Tesla',
    model: 'Model X',
    year: 2024,
    slug: 'tesla-model-x',
    images: {
      main: 'https://images.unsplash.com/photo-1571683145470-e4e4b0b6b976?w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1571683145470-e4e4b0b6b976?w=800&q=80',
      ],
    },
    pricing: {
      basePrice: 79990,
      currency: 'USD',
      maxPrice: 94990,
    },
    specifications: {
      battery: {
        capacity: 100,
        type: 'Lithium-ion NCA',
      },
      range: {
        epa: 348,
        wltp: 560,
      },
      performance: {
        topSpeed: 155,
        acceleration: 3.8,
        horsepower: 670,
        torque: 700,
      },
      charging: {
        dcFastCharging: true,
        maxChargingSpeed: 250,
        time0to80: 30,
      },
      drivetrain: 'AWD',
      seats: 7,
      cargo: 88,
      weight: 5390,
    },
    features: [
      'Falcon Wing doors',
      'Full Self-Driving capability',
      '17-inch touchscreen',
      'Premium audio (22 speakers)',
      'Panoramic windshield',
      'HEPA air filtration',
      'Heated seats (all rows)',
    ],
    safety: {
      rating: 5,
      features: [
        'Advanced autopilot',
        'Automatic emergency braking',
        'Blind spot monitoring',
        'Lane departure warning',
        '360-degree camera',
        'Parking sensors',
      ],
    },
    availability: {
      markets: ['US', 'Europe', 'Canada'],
      status: 'available',
    },
    description: {
      short: 'Luxury electric SUV with iconic Falcon Wing doors',
      full: 'The Tesla Model X is a full-size luxury SUV featuring the distinctive Falcon Wing doors. With seating for up to seven adults and impressive performance, it\'s the ultimate family electric vehicle.',
    },
    averageRating: 4.7,
  },
  {
    id: '5',
    brand: 'Ford',
    model: 'Mustang Mach-E',
    year: 2024,
    slug: 'ford-mustang-mach-e',
    images: {
      main: 'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=1200&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=1200&q=85',
      ],
    },
    pricing: {
      basePrice: 42995,
      currency: 'USD',
      maxPrice: 63995,
    },
    specifications: {
      battery: {
        capacity: 91,
        type: 'Lithium-ion NCM',
      },
      range: {
        epa: 312,
        wltp: 502,
      },
      performance: {
        topSpeed: 124,
        acceleration: 5.8,
        horsepower: 290,
        torque: 317,
      },
      charging: {
        dcFastCharging: true,
        maxChargingSpeed: 150,
        time0to80: 38,
      },
      drivetrain: 'RWD',
      seats: 5,
      cargo: 59,
      weight: 4394,
    },
    features: [
      'SYNC 4A infotainment',
      '15.5-inch touchscreen',
      'Ford Co-Pilot360',
      'Hands-free driving (BlueCruise)',
      'Panoramic glass roof',
      'B&O premium audio',
    ],
    safety: {
      rating: 5,
      features: [
        'Adaptive cruise control',
        'Lane-keeping assist',
        'Blind spot monitoring',
        'Pre-collision assist',
        'Evasive steering assist',
      ],
    },
    availability: {
      markets: ['US', 'Europe', 'Canada', 'Mexico'],
      status: 'available',
    },
    description: {
      short: 'Electric SUV with Mustang-inspired performance',
      full: 'The Ford Mustang Mach-E brings the iconic Mustang nameplate to the electric SUV segment. With impressive performance, modern technology, and distinctive styling, it offers a compelling alternative to traditional electric vehicles.',
    },
    averageRating: 4.5,
  },
  {
    id: '6',
    brand: 'Ford',
    model: 'F-150 Lightning',
    year: 2024,
    slug: 'ford-f150-lightning',
    images: {
      main: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      ],
    },
    pricing: {
      basePrice: 59974,
      currency: 'USD',
      maxPrice: 92974,
    },
    specifications: {
      battery: {
        capacity: 131,
        type: 'Lithium-ion NCM',
      },
      range: {
        epa: 320,
        wltp: 515,
      },
      performance: {
        topSpeed: 110,
        acceleration: 4.5,
        horsepower: 580,
        torque: 775,
      },
      charging: {
        dcFastCharging: true,
        maxChargingSpeed: 150,
        time0to80: 44,
      },
      drivetrain: 'AWD',
      seats: 5,
      cargo: 52,
      weight: 6500,
    },
    features: [
      'Pro Power Onboard (9.6kW)',
      'Intelligent Range',
      'SYNC 4A with 15.5-inch screen',
      'Ford Co-Pilot360',
      'Hands-free driving (BlueCruise)',
      'Front trunk (frunk)',
      '10,000 lbs towing capacity',
    ],
    safety: {
      rating: 5,
      features: [
        'Adaptive cruise control',
        'Lane-keeping assist',
        'Blind spot monitoring',
        'Pre-collision assist',
        'Pro Trailer Backup Assist',
      ],
    },
    availability: {
      markets: ['US', 'Canada'],
      status: 'available',
    },
    description: {
      short: 'America\'s best-selling truck goes electric',
      full: 'The Ford F-150 Lightning is the electric version of America\'s best-selling vehicle. With impressive towing capacity, Pro Power Onboard capability, and all the features truck owners expect, it\'s revolutionizing the pickup truck segment.',
    },
    averageRating: 4.6,
  },
  {
    id: '7',
    brand: 'Chevrolet',
    model: 'Bolt EV',
    year: 2024,
    slug: 'chevrolet-bolt-ev',
    images: {
      main: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      ],
    },
    pricing: {
      basePrice: 26500,
      currency: 'USD',
      maxPrice: 29000,
    },
    specifications: {
      battery: {
        capacity: 65,
        type: 'Lithium-ion NCM',
      },
      range: {
        epa: 259,
        wltp: 417,
      },
      performance: {
        topSpeed: 93,
        acceleration: 6.5,
        horsepower: 200,
        torque: 266,
      },
      charging: {
        dcFastCharging: true,
        maxChargingSpeed: 55,
        time0to80: 60,
      },
      drivetrain: 'FWD',
      seats: 5,
      cargo: 16,
      weight: 3589,
    },
    features: [
      '10.2-inch touchscreen',
      'Apple CarPlay/Android Auto',
      'Wireless phone charging',
      'Rearview camera',
      'Heated front seats',
      'One-pedal driving',
    ],
    safety: {
      rating: 5,
      features: [
        'Automatic emergency braking',
        'Lane keep assist',
        'Forward collision alert',
        'Following distance indicator',
      ],
    },
    availability: {
      markets: ['US', 'Canada'],
      status: 'available',
    },
    description: {
      short: 'Affordable electric hatchback with practical range',
      full: 'The Chevrolet Bolt EV is one of the most affordable electric vehicles on the market, offering a practical range and spacious interior. It\'s an excellent choice for budget-conscious buyers looking to go electric.',
    },
    averageRating: 4.3,
  },
  {
    id: '8',
    brand: 'Chevrolet',
    model: 'Bolt EUV',
    year: 2024,
    slug: 'chevrolet-bolt-euv',
    images: {
      main: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      ],
    },
    pricing: {
      basePrice: 28800,
      currency: 'USD',
      maxPrice: 32800,
    },
    specifications: {
      battery: {
        capacity: 65,
        type: 'Lithium-ion NCM',
      },
      range: {
        epa: 247,
        wltp: 397,
      },
      performance: {
        topSpeed: 93,
        acceleration: 6.8,
        horsepower: 200,
        torque: 266,
      },
      charging: {
        dcFastCharging: true,
        maxChargingSpeed: 55,
        time0to80: 60,
      },
      drivetrain: 'FWD',
      seats: 5,
      cargo: 56,
      weight: 3651,
    },
    features: [
      '10.2-inch touchscreen',
      'Super Cruise (hands-free driving)',
      'Apple CarPlay/Android Auto',
      'Wireless phone charging',
      'Panoramic sunroof',
      'Heated front seats',
    ],
    safety: {
      rating: 5,
      features: [
        'Automatic emergency braking',
        'Lane keep assist',
        'Forward collision alert',
        'HD surround vision',
        'Rear cross traffic alert',
      ],
    },
    availability: {
      markets: ['US', 'Canada'],
      status: 'available',
    },
    description: {
      short: 'Larger Bolt with SUV styling and Super Cruise',
      full: 'The Chevrolet Bolt EUV is the larger, more spacious version of the Bolt EV with SUV-inspired styling. It\'s the first vehicle in its price range to offer Super Cruise hands-free driving technology.',
    },
    averageRating: 4.4,
  },
  {
    id: '9',
    brand: 'Hyundai',
    model: 'IONIQ 5',
    year: 2024,
    slug: 'hyundai-ioniq-5',
    images: {
      main: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      ],
    },
    pricing: {
      basePrice: 43975,
      currency: 'USD',
      maxPrice: 56500,
    },
    specifications: {
      battery: {
        capacity: 77.4,
        type: 'Lithium-ion NCM',
      },
      range: {
        epa: 303,
        wltp: 488,
      },
      performance: {
        topSpeed: 115,
        acceleration: 4.5,
        horsepower: 320,
        torque: 446,
      },
      charging: {
        dcFastCharging: true,
        maxChargingSpeed: 350,
        time0to80: 18,
      },
      drivetrain: 'AWD',
      seats: 5,
      cargo: 59,
      weight: 4595,
    },
    features: [
      '12.3-inch dual displays',
      'Augmented reality head-up display',
      'Vehicle-to-load (V2L)',
      'Relaxation seats',
      'Solar roof',
      'Remote parking',
    ],
    safety: {
      rating: 5,
      features: [
        'Highway driving assist',
        'Blind spot monitor',
        'Lane keeping assist',
        'Forward collision avoidance',
        'Surround view monitor',
      ],
    },
    availability: {
      markets: ['US', 'Europe', 'South Korea', 'Canada'],
      status: 'available',
    },
    description: {
      short: 'Futuristic electric crossover with ultra-fast charging',
      full: 'The Hyundai IONIQ 5 features a retro-futuristic design and groundbreaking 800V charging technology. With its spacious interior, innovative features, and ultra-fast charging, it\'s redefining the electric crossover segment.',
    },
    averageRating: 4.8,
  },
  {
    id: '10',
    brand: 'Hyundai',
    model: 'IONIQ 6',
    year: 2024,
    slug: 'hyundai-ioniq-6',
    images: {
      main: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      ],
    },
    pricing: {
      basePrice: 45500,
      currency: 'USD',
      maxPrice: 61000,
    },
    specifications: {
      battery: {
        capacity: 77.4,
        type: 'Lithium-ion NCM',
      },
      range: {
        epa: 361,
        wltp: 581,
      },
      performance: {
        topSpeed: 115,
        acceleration: 4.5,
        horsepower: 320,
        torque: 446,
      },
      charging: {
        dcFastCharging: true,
        maxChargingSpeed: 350,
        time0to80: 18,
      },
      drivetrain: 'AWD',
      seats: 5,
      cargo: 11,
      weight: 4270,
    },
    features: [
      'Dual 12.3-inch displays',
      'Augmented reality HUD',
      'Relaxation comfort seats',
      'Vehicle-to-load (V2L)',
      'Digital side mirrors',
      'Premium audio system',
    ],
    safety: {
      rating: 5,
      features: [
        'Highway driving assist 2',
        'Blind spot monitor',
        'Lane keeping assist',
        'Forward collision avoidance',
        'Remote smart parking assist',
      ],
    },
    availability: {
      markets: ['US', 'Europe', 'South Korea', 'Canada'],
      status: 'available',
    },
    description: {
      short: 'Aerodynamic electric sedan with record-breaking range',
      full: 'The Hyundai IONIQ 6 is an aerodynamically-optimized electric sedan with an impressive range. Its streamliner-inspired design delivers exceptional efficiency, while the spacious interior offers premium comfort.',
    },
    averageRating: 4.7,
  },
  {
    id: '11',
    brand: 'Kia',
    model: 'EV6',
    year: 2024,
    slug: 'kia-ev6',
    images: {
      main: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      ],
    },
    pricing: {
      basePrice: 44995,
      currency: 'USD',
      maxPrice: 61995,
    },
    specifications: {
      battery: {
        capacity: 77.4,
        type: 'Lithium-ion NCM',
      },
      range: {
        epa: 310,
        wltp: 499,
      },
      performance: {
        topSpeed: 115,
        acceleration: 3.4,
        horsepower: 576,
        torque: 546,
      },
      charging: {
        dcFastCharging: true,
        maxChargingSpeed: 350,
        time0to80: 18,
      },
      drivetrain: 'AWD',
      seats: 5,
      cargo: 54,
      weight: 4993,
    },
    features: [
      'Dual 12.3-inch curved display',
      'Augmented reality HUD',
      'Vehicle-to-load (V2L)',
      'GT-line sporty styling',
      'Meridian premium audio',
      'Remote smart parking',
    ],
    safety: {
      rating: 5,
      features: [
        'Highway driving assist 2',
        'Blind spot collision avoidance',
        'Lane keeping assist',
        'Forward collision avoidance',
        'Safe exit warning',
      ],
    },
    availability: {
      markets: ['US', 'Europe', 'South Korea', 'Canada', 'Australia'],
      status: 'available',
    },
    description: {
      short: 'Sporty electric crossover with GT performance variant',
      full: 'The Kia EV6 is a sporty electric crossover built on the E-GMP platform. The GT variant offers supercar-level acceleration with 576 horsepower, while maintaining practical everyday usability.',
    },
    averageRating: 4.8,
  },
  {
    id: '12',
    brand: 'Kia',
    model: 'EV9',
    year: 2024,
    slug: 'kia-ev9',
    images: {
      main: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&q=85',
      ],
    },
    pricing: {
      basePrice: 56395,
      currency: 'USD',
      maxPrice: 76395,
    },
    specifications: {
      battery: {
        capacity: 99.8,
        type: 'Lithium-ion NCM',
      },
      range: {
        epa: 304,
        wltp: 489,
      },
      performance: {
        topSpeed: 124,
        acceleration: 4.6,
        horsepower: 379,
        torque: 516,
      },
      charging: {
        dcFastCharging: true,
        maxChargingSpeed: 350,
        time0to80: 24,
      },
      drivetrain: 'AWD',
      seats: 7,
      cargo: 81,
      weight: 5863,
    },
    features: [
      'Three-row seating',
      'Dual 12.3-inch displays',
      'Relaxation seats',
      'Vehicle-to-load (V2L)',
      '5,000 lbs towing capacity',
      'Meridian premium audio',
      'Panoramic curved display',
    ],
    safety: {
      rating: 5,
      features: [
        'Highway driving assist 2',
        'Blind spot collision avoidance',
        'Lane keeping assist',
        'Forward collision avoidance',
        'Remote smart parking',
        'Surround view monitor',
      ],
    },
    availability: {
      markets: ['US', 'Europe', 'South Korea', 'Canada'],
      status: 'available',
    },
    description: {
      short: 'Three-row electric SUV with premium features',
      full: 'The Kia EV9 is a large three-row electric SUV that combines space, luxury, and technology. With seating for up to seven passengers and impressive towing capacity, it\'s perfect for families.',
    },
    averageRating: 4.6,
  },
  {
    id: '13',
    brand: 'Rivian',
    model: 'R1T',
    year: 2024,
    slug: 'rivian-r1t',
    images: {
      main: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      ],
    },
    pricing: {
      basePrice: 73000,
      currency: 'USD',
      maxPrice: 93000,
    },
    specifications: {
      battery: {
        capacity: 135,
        type: 'Lithium-ion NCM',
      },
      range: {
        epa: 352,
        wltp: 566,
      },
      performance: {
        topSpeed: 125,
        acceleration: 3.0,
        horsepower: 835,
        torque: 908,
      },
      charging: {
        dcFastCharging: true,
        maxChargingSpeed: 220,
        time0to80: 40,
      },
      drivetrain: 'AWD',
      seats: 5,
      cargo: 54,
      weight: 7148,
    },
    features: [
      'Quad-motor AWD',
      'Gear tunnel storage',
      'Camp kitchen',
      'Air compressor',
      '11,000 lbs towing capacity',
      'Tank turn capability',
      'Underbody storage',
    ],
    safety: {
      rating: 5,
      features: [
        'Driver+ hands-free driving',
        'Automatic emergency braking',
        'Blind spot monitoring',
        'Lane departure warning',
        '360-degree camera system',
      ],
    },
    availability: {
      markets: ['US', 'Canada'],
      status: 'available',
    },
    description: {
      short: 'Adventure-ready electric pickup with quad-motor power',
      full: 'The Rivian R1T is an electric adventure vehicle designed for both on-road comfort and off-road capability. With its innovative gear tunnel, camp kitchen, and impressive performance, it\'s redefining what a pickup truck can be.',
    },
    averageRating: 4.7,
  },
  {
    id: '14',
    brand: 'Rivian',
    model: 'R1S',
    year: 2024,
    slug: 'rivian-r1s',
    images: {
      main: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      ],
    },
    pricing: {
      basePrice: 78000,
      currency: 'USD',
      maxPrice: 98000,
    },
    specifications: {
      battery: {
        capacity: 135,
        type: 'Lithium-ion NCM',
      },
      range: {
        epa: 330,
        wltp: 531,
      },
      performance: {
        topSpeed: 125,
        acceleration: 3.0,
        horsepower: 835,
        torque: 908,
      },
      charging: {
        dcFastCharging: true,
        maxChargingSpeed: 220,
        time0to80: 40,
      },
      drivetrain: 'AWD',
      seats: 7,
      cargo: 88,
      weight: 7215,
    },
    features: [
      'Quad-motor AWD',
      'Three-row seating',
      'Gear tunnel',
      'Air compressor',
      '7,700 lbs towing capacity',
      'Adaptive air suspension',
      'Camp mode',
    ],
    safety: {
      rating: 5,
      features: [
        'Driver+ hands-free driving',
        'Automatic emergency braking',
        'Blind spot monitoring',
        'Lane departure warning',
        '360-degree camera system',
        'Parking sensors',
      ],
    },
    availability: {
      markets: ['US', 'Canada'],
      status: 'available',
    },
    description: {
      short: 'Three-row electric SUV built for adventure',
      full: 'The Rivian R1S is a three-row electric SUV that combines luxury, performance, and off-road capability. With seating for up to seven and innovative storage solutions, it\'s the ultimate family adventure vehicle.',
    },
    averageRating: 4.8,
  },
  {
    id: '15',
    brand: 'BMW',
    model: 'i4',
    year: 2024,
    slug: 'bmw-i4',
    images: {
      main: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      ],
    },
    pricing: {
      basePrice: 56395,
      currency: 'USD',
      maxPrice: 69395,
    },
    specifications: {
      battery: {
        capacity: 83.9,
        type: 'Lithium-ion NCM',
      },
      range: {
        epa: 301,
        wltp: 485,
      },
      performance: {
        topSpeed: 140,
        acceleration: 3.9,
        horsepower: 536,
        torque: 586,
      },
      charging: {
        dcFastCharging: true,
        maxChargingSpeed: 200,
        time0to80: 31,
      },
      drivetrain: 'AWD',
      seats: 5,
      cargo: 17,
      weight: 5115,
    },
    features: [
      'BMW iDrive 8',
      'Curved display',
      'Harman Kardon audio',
      'Adaptive M suspension',
      'Heated seats',
      'Wireless charging',
      'Head-up display',
    ],
    safety: {
      rating: 5,
      features: [
        'Active driving assistant',
        'Lane departure warning',
        'Blind spot detection',
        'Forward collision warning',
        'Parking assistant',
      ],
    },
    availability: {
      markets: ['US', 'Europe', 'Canada', 'China'],
      status: 'available',
    },
    description: {
      short: 'Electric gran coupe with BMW performance',
      full: 'The BMW i4 is an electric gran coupe that delivers the ultimate driving experience with zero emissions. The M50 variant offers sports car performance with luxury and practicality.',
    },
    averageRating: 4.6,
  },
  {
    id: '16',
    brand: 'BMW',
    model: 'iX',
    year: 2024,
    slug: 'bmw-ix',
    images: {
      main: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=85',
      ],
    },
    pricing: {
      basePrice: 87250,
      currency: 'USD',
      maxPrice: 111500,
    },
    specifications: {
      battery: {
        capacity: 111.5,
        type: 'Lithium-ion NCM',
      },
      range: {
        epa: 380,
        wltp: 612,
      },
      performance: {
        topSpeed: 124,
        acceleration: 3.8,
        horsepower: 516,
        torque: 564,
      },
      charging: {
        dcFastCharging: true,
        maxChargingSpeed: 195,
        time0to80: 35,
      },
      drivetrain: 'AWD',
      seats: 5,
      cargo: 77,
      weight: 5659,
    },
    features: [
      'BMW iDrive 8',
      'Curved panoramic display',
      'Bowers & Wilkins audio',
      'Sky Lounge panoramic roof',
      'Heated and cooled seats',
      'Massage function',
      '5G connectivity',
    ],
    safety: {
      rating: 5,
      features: [
        'Active driving assistant Pro',
        'Lane departure warning',
        'Blind spot detection',
        'Forward collision warning',
        'Parking assistant Plus',
        '360-degree camera',
      ],
    },
    availability: {
      markets: ['US', 'Europe', 'Canada', 'China'],
      status: 'available',
    },
    description: {
      short: 'Luxury electric SUV with cutting-edge technology',
      full: 'The BMW iX is a luxury electric SUV that showcases BMW\'s vision for the future of mobility. With advanced technology, premium materials, and impressive performance, it redefines luxury in the electric age.',
    },
    averageRating: 4.7,
  },
  {
    id: '17',
    brand: 'Mercedes-Benz',
    model: 'EQS',
    year: 2024,
    slug: 'mercedes-benz-eqs',
    images: {
      main: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      ],
    },
    pricing: {
      basePrice: 104400,
      currency: 'USD',
      maxPrice: 147500,
    },
    specifications: {
      battery: {
        capacity: 107.8,
        type: 'Lithium-ion NCM',
      },
      range: {
        epa: 453,
        wltp: 729,
      },
      performance: {
        topSpeed: 130,
        acceleration: 3.4,
        horsepower: 649,
        torque: 701,
      },
      charging: {
        dcFastCharging: true,
        maxChargingSpeed: 200,
        time0to80: 31,
      },
      drivetrain: 'AWD',
      seats: 5,
      cargo: 22,
      weight: 5890,
    },
    features: [
      'MBUX Hyperscreen',
      'Burmester 3D audio',
      'AIRMATIC suspension',
      'DIGITAL LIGHT headlights',
      'Executive rear seating',
      'Heated and ventilated seats',
      'Massage function',
    ],
    safety: {
      rating: 5,
      features: [
        'Drive Pilot (Level 3 autonomous)',
        'Active brake assist',
        'Active lane keeping assist',
        'Blind spot assist',
        '360-degree camera',
        'PRE-SAFE system',
      ],
    },
    availability: {
      markets: ['US', 'Europe', 'China', 'Canada'],
      status: 'available',
    },
    description: {
      short: 'Flagship electric sedan with record-breaking range',
      full: 'The Mercedes-Benz EQS is the electric flagship sedan that combines luxury, technology, and efficiency. With the stunning MBUX Hyperscreen and class-leading range, it represents the pinnacle of electric luxury.',
    },
    averageRating: 4.9,
  },
  {
    id: '18',
    brand: 'Mercedes-Benz',
    model: 'EQE',
    year: 2024,
    slug: 'mercedes-benz-eqe',
    images: {
      main: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=85',
      ],
    },
    pricing: {
      basePrice: 74900,
      currency: 'USD',
      maxPrice: 104900,
    },
    specifications: {
      battery: {
        capacity: 90.6,
        type: 'Lithium-ion NCM',
      },
      range: {
        epa: 305,
        wltp: 491,
      },
      performance: {
        topSpeed: 130,
        acceleration: 3.5,
        horsepower: 617,
        torque: 701,
      },
      charging: {
        dcFastCharging: true,
        maxChargingSpeed: 170,
        time0to80: 32,
      },
      drivetrain: 'AWD',
      seats: 5,
      cargo: 18,
      weight: 5380,
    },
    features: [
      'MBUX infotainment',
      'Burmester audio',
      'AIRMATIC suspension',
      'DIGITAL LIGHT headlights',
      'Heated seats',
      'Augmented reality navigation',
      'Wireless charging',
    ],
    safety: {
      rating: 5,
      features: [
        'Active brake assist',
        'Active lane keeping assist',
        'Blind spot assist',
        '360-degree camera',
        'PRE-SAFE system',
        'Active parking assist',
      ],
    },
    availability: {
      markets: ['US', 'Europe', 'China', 'Canada'],
      status: 'available',
    },
    description: {
      short: 'Compact executive electric sedan',
      full: 'The Mercedes-Benz EQE is a compact executive electric sedan that brings luxury and technology to a more accessible package. It offers impressive performance and range in an elegant design.',
    },
    averageRating: 4.6,
  },
  {
    id: '19',
    brand: 'Audi',
    model: 'e-tron GT',
    year: 2024,
    slug: 'audi-e-tron-gt',
    images: {
      main: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      ],
    },
    pricing: {
      basePrice: 106500,
      currency: 'USD',
      maxPrice: 148500,
    },
    specifications: {
      battery: {
        capacity: 93.4,
        type: 'Lithium-ion NCM',
      },
      range: {
        epa: 249,
        wltp: 401,
      },
      performance: {
        topSpeed: 152,
        acceleration: 3.1,
        horsepower: 637,
        torque: 612,
      },
      charging: {
        dcFastCharging: true,
        maxChargingSpeed: 270,
        time0to80: 22,
      },
      drivetrain: 'AWD',
      seats: 4,
      cargo: 13,
      weight: 5060,
    },
    features: [
      'MMI touch response',
      'Bang & Olufsen 3D audio',
      'Adaptive air suspension',
      'Matrix LED headlights',
      'Sport seats Plus',
      'Head-up display',
      'Virtual cockpit',
    ],
    safety: {
      rating: 5,
      features: [
        'Adaptive cruise assist',
        'Lane departure warning',
        'Blind spot monitoring',
        'Pre sense front',
        '360-degree cameras',
        'Park assist',
      ],
    },
    availability: {
      markets: ['US', 'Europe', 'Canada', 'China'],
      status: 'available',
    },
    description: {
      short: 'Electric gran turismo with sports car performance',
      full: 'The Audi e-tron GT is a high-performance electric gran turismo that combines stunning design with blistering performance. The RS variant offers supercar-level acceleration with everyday usability.',
    },
    averageRating: 4.8,
  },
  {
    id: '20',
    brand: 'Audi',
    model: 'Q4 e-tron',
    year: 2024,
    slug: 'audi-q4-e-tron',
    images: {
      main: 'https://images.unsplash.com/photo-1609003435032-dae41a93e2e2?w=1200&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1609003435032-dae41a93e2e2?w=1200&q=85',
      ],
    },
    pricing: {
      basePrice: 49800,
      currency: 'USD',
      maxPrice: 56800,
    },
    specifications: {
      battery: {
        capacity: 82,
        type: 'Lithium-ion NCM',
      },
      range: {
        epa: 265,
        wltp: 427,
      },
      performance: {
        topSpeed: 112,
        acceleration: 5.8,
        horsepower: 295,
        torque: 339,
      },
      charging: {
        dcFastCharging: true,
        maxChargingSpeed: 135,
        time0to80: 38,
      },
      drivetrain: 'AWD',
      seats: 5,
      cargo: 52,
      weight: 4784,
    },
    features: [
      'MMI touch response',
      'Virtual cockpit Plus',
      'Sonos premium audio',
      'Augmented reality HUD',
      'Heated seats',
      'Panoramic sunroof',
      'Wireless charging',
    ],
    safety: {
      rating: 5,
      features: [
        'Adaptive cruise control',
        'Lane departure warning',
        'Blind spot monitoring',
        'Pre sense front',
        'Rear cross traffic alert',
        'Park assist',
      ],
    },
    availability: {
      markets: ['US', 'Europe', 'Canada', 'China'],
      status: 'available',
    },
    description: {
      short: 'Compact electric SUV with premium features',
      full: 'The Audi Q4 e-tron is a compact electric SUV that brings Audi\'s premium quality and technology to a more accessible package. With its sporty design and practical interior, it\'s perfect for urban adventures.',
    },
    averageRating: 4.5,
  },
  {
    id: '21',
    brand: 'Porsche',
    model: 'Taycan',
    year: 2024,
    slug: 'porsche-taycan',
    images: {
      main: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      ],
    },
    pricing: {
      basePrice: 90900,
      currency: 'USD',
      maxPrice: 191800,
    },
    specifications: {
      battery: {
        capacity: 105,
        type: 'Lithium-ion NCM',
      },
      range: {
        epa: 318,
        wltp: 512,
      },
      performance: {
        topSpeed: 161,
        acceleration: 2.6,
        horsepower: 938,
        torque: 774,
      },
      charging: {
        dcFastCharging: true,
        maxChargingSpeed: 270,
        time0to80: 22,
      },
      drivetrain: 'AWD',
      seats: 4,
      cargo: 14,
      weight: 5132,
    },
    features: [
      'Porsche Communication Management',
      'Burmester 3D audio',
      'Adaptive air suspension',
      'Matrix LED headlights',
      'Sport Chrono package',
      'Heated and ventilated seats',
      'Head-up display',
    ],
    safety: {
      rating: 5,
      features: [
        'Porsche InnoDrive',
        'Lane keeping assist',
        'Night vision assist',
        'Surround view',
        'Park assist',
        'Adaptive cruise control',
      ],
    },
    availability: {
      markets: ['US', 'Europe', 'Canada', 'China'],
      status: 'available',
    },
    description: {
      short: 'Pure electric sports car with Porsche DNA',
      full: 'The Porsche Taycan is a pure electric sports car that delivers authentic Porsche performance. With its 800V architecture, lightning-fast charging, and exceptional handling, it\'s the ultimate electric sports sedan.',
    },
    averageRating: 4.9,
  },
  {
    id: '22',
    brand: 'Volkswagen',
    model: 'ID.4',
    year: 2024,
    slug: 'volkswagen-id4',
    images: {
      main: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      ],
    },
    pricing: {
      basePrice: 40000,
      currency: 'USD',
      maxPrice: 51000,
    },
    specifications: {
      battery: {
        capacity: 82,
        type: 'Lithium-ion NCM',
      },
      range: {
        epa: 275,
        wltp: 443,
      },
      performance: {
        topSpeed: 99,
        acceleration: 7.5,
        horsepower: 201,
        torque: 229,
      },
      charging: {
        dcFastCharging: true,
        maxChargingSpeed: 135,
        time0to80: 38,
      },
      drivetrain: 'RWD',
      seats: 5,
      cargo: 64,
      weight: 4665,
    },
    features: [
      'ID.Light light strip',
      'Discover Pro infotainment',
      'IQ.Drive assist systems',
      'Heated seats',
      'Panoramic sunroof',
      'Wireless charging',
      'Digital cockpit',
    ],
    safety: {
      rating: 5,
      features: [
        'Front assist',
        'Lane assist',
        'Blind spot monitor',
        'Rear traffic alert',
        'Park distance control',
        'Adaptive cruise control',
      ],
    },
    availability: {
      markets: ['US', 'Europe', 'Canada', 'China'],
      status: 'available',
    },
    description: {
      short: 'Practical electric SUV for everyday driving',
      full: 'The Volkswagen ID.4 is a practical electric SUV that offers excellent value, spacious interior, and VW build quality. It\'s designed for everyday use with a focus on comfort and practicality.',
    },
    averageRating: 4.4,
  },
  {
    id: '23',
    brand: 'Nissan',
    model: 'Ariya',
    year: 2024,
    slug: 'nissan-ariya',
    images: {
      main: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      ],
    },
    pricing: {
      basePrice: 43190,
      currency: 'USD',
      maxPrice: 60190,
    },
    specifications: {
      battery: {
        capacity: 91,
        type: 'Lithium-ion NCM',
      },
      range: {
        epa: 304,
        wltp: 489,
      },
      performance: {
        topSpeed: 99,
        acceleration: 5.1,
        horsepower: 389,
        torque: 443,
      },
      charging: {
        dcFastCharging: true,
        maxChargingSpeed: 130,
        time0to80: 35,
      },
      drivetrain: 'AWD',
      seats: 5,
      cargo: 59,
      weight: 5170,
    },
    features: [
      'ProPILOT Assist 2.0',
      '12.3-inch dual displays',
      'Bose premium audio',
      'Zero Gravity seats',
      'Panoramic glass roof',
      'Wireless charging',
      'e-4ORCE all-wheel drive',
    ],
    safety: {
      rating: 5,
      features: [
        'ProPILOT Assist 2.0',
        'Intelligent emergency braking',
        'Blind spot warning',
        'Lane departure warning',
        'ProPILOT Park',
        'Rear cross traffic alert',
      ],
    },
    availability: {
      markets: ['US', 'Europe', 'Japan', 'Canada'],
      status: 'available',
    },
    description: {
      short: 'Modern electric crossover with Japanese craftsmanship',
      full: 'The Nissan Ariya is a sleek electric crossover that showcases Nissan\'s electric vehicle expertise. With its refined interior, advanced ProPILOT technology, and e-4ORCE all-wheel drive, it offers a premium experience.',
    },
    averageRating: 4.5,
  },
  {
    id: '24',
    brand: 'Polestar',
    model: 'Polestar 2',
    year: 2024,
    slug: 'polestar-2',
    images: {
      main: 'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      ],
    },
    pricing: {
      basePrice: 48400,
      currency: 'USD',
      maxPrice: 63400,
    },
    specifications: {
      battery: {
        capacity: 82,
        type: 'Lithium-ion NCM',
      },
      range: {
        epa: 320,
        wltp: 515,
      },
      performance: {
        topSpeed: 127,
        acceleration: 4.5,
        horsepower: 455,
        torque: 502,
      },
      charging: {
        dcFastCharging: true,
        maxChargingSpeed: 155,
        time0to80: 32,
      },
      drivetrain: 'AWD',
      seats: 5,
      cargo: 16,
      weight: 4749,
    },
    features: [
      'Google built-in',
      '12.3-inch digital driver display',
      'Harman Kardon audio',
      'Pixel LED headlights',
      'Heat pump',
      'Panoramic glass roof',
      'Vegan interior option',
    ],
    safety: {
      rating: 5,
      features: [
        'Pilot Assist',
        'Blind spot information',
        'Cross traffic alert',
        'Lane keeping aid',
        '360-degree camera',
        'Driver alert control',
      ],
    },
    availability: {
      markets: ['US', 'Europe', 'Canada', 'China'],
      status: 'available',
    },
    description: {
      short: 'Scandinavian electric performance fastback',
      full: 'The Polestar 2 is a premium electric fastback that combines Scandinavian design with performance. With Google built-in and sustainable materials, it offers a modern take on electric mobility.',
    },
    averageRating: 4.6,
  },
  {
    id: '25',
    brand: 'Lucid',
    model: 'Air',
    year: 2024,
    slug: 'lucid-air',
    images: {
      main: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
      ],
    },
    pricing: {
      basePrice: 82400,
      currency: 'USD',
      maxPrice: 179000,
    },
    specifications: {
      battery: {
        capacity: 112,
        type: 'Lithium-ion NCM',
      },
      range: {
        epa: 516,
        wltp: 830,
      },
      performance: {
        topSpeed: 168,
        acceleration: 2.5,
        horsepower: 1234,
        torque: 1000,
      },
      charging: {
        dcFastCharging: true,
        maxChargingSpeed: 300,
        time0to80: 20,
      },
      drivetrain: 'AWD',
      seats: 5,
      cargo: 32,
      weight: 5236,
    },
    features: [
      'Lucid UX interface',
      '34-inch curved Glass Cockpit',
      'Surreal Sound audio (21 speakers)',
      'DreamDrive Pro',
      'Executive rear seats',
      'Heated and ventilated seats',
      'Massage function',
    ],
    safety: {
      rating: 5,
      features: [
        'DreamDrive Pro (ADAS)',
        'Highway Assist',
        'Surround view cameras',
        'Blind spot monitoring',
        'Lane departure warning',
        'Automated emergency braking',
      ],
    },
    availability: {
      markets: ['US', 'Canada', 'Europe'],
      status: 'available',
    },
    description: {
      short: 'Luxury electric sedan with record-breaking range',
      full: 'The Lucid Air is a luxury electric sedan that holds the record for longest EPA-rated range. With its stunning design, spacious interior, and groundbreaking technology, it represents the future of luxury mobility.',
    },
    averageRating: 4.9,
  },
];

// Helper functions
export function getEVById(id: string): EVModel | undefined {
  return evDatabase.find((ev) => ev.id === id);
}

export function getEVBySlug(slug: string): EVModel | undefined {
  return evDatabase.find((ev) => ev.slug === slug);
}

export function getAllBrands(): string[] {
  const brands = evDatabase.map((ev) => ev.brand);
  return Array.from(new Set(brands)).sort();
}

export function getEVsByBrand(brand: string): EVModel[] {
  return evDatabase.filter((ev) => ev.brand === brand);
}

export function searchEVs(query: string): EVModel[] {
  const lowerQuery = query.toLowerCase();
  return evDatabase.filter(
    (ev) =>
      ev.brand.toLowerCase().includes(lowerQuery) ||
      ev.model.toLowerCase().includes(lowerQuery) ||
      ev.description.short.toLowerCase().includes(lowerQuery)
  );
}

export function filterEVs(filters: Partial<FilterOptions>, evs: EVModel[] = evDatabase): EVModel[] {
  return evs.filter((ev) => {
    if (filters.brands && filters.brands.length > 0) {
      if (!filters.brands.includes(ev.brand)) return false;
    }
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      if (ev.pricing.basePrice < min || ev.pricing.basePrice > max) return false;
    }
    if (filters.rangeMin && ev.specifications.range.epa < filters.rangeMin) {
      return false;
    }
    if (filters.seats && filters.seats.length > 0) {
      if (!filters.seats.includes(ev.specifications.seats)) return false;
    }
    if (filters.drivetrain && filters.drivetrain.length > 0) {
      if (!filters.drivetrain.includes(ev.specifications.drivetrain)) return false;
    }
    return true;
  });
}

export function sortEVs(evs: EVModel[], sortBy: SortOption): EVModel[] {
  const sorted = [...evs];
  switch (sortBy) {
    case 'price-asc':
      return sorted.sort((a, b) => a.pricing.basePrice - b.pricing.basePrice);
    case 'price-desc':
      return sorted.sort((a, b) => b.pricing.basePrice - a.pricing.basePrice);
    case 'range-desc':
      return sorted.sort((a, b) => b.specifications.range.epa - a.specifications.range.epa);
    case 'rating-desc':
      return sorted.sort((a, b) => (b.averageRating || 0) - (a.averageRating || 0));
    case 'newest':
      return sorted.sort((a, b) => b.year - a.year);
    default:
      return sorted;
  }
}

