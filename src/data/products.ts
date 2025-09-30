import { Product } from '@/components/ui/product-card';
import circuitBreakerImg from '@/assets/product-circuit-breaker.jpg';
import controlPanelImg from '@/assets/product-control-panel.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Power Transformer 500KVA',
    category: 'Transformers',
    images: [
    '/Transformer/Power-transformer/1.jpg',
    '/Transformer/Power-transformer/2.jpg',
    '/Transformer/Power-transformer/3.jpg'
  ],
    rating: 4.9,
    reviewCount: 42,
    description: 'Our 500 kVA Power Transformer ensures high efficiency, superior voltage regulation, and long-term reliability for industrial, commercial, and utility use, with robust construction and low-maintenance performance.',
    features: [
      '500KVA capacity rating',
      'High-efficiency core design',
      'Temperature monitoring system',
      'Surge protection capabilities',
      'Three-phase configuration'
    ],
    badge: 'Best Seller'
  },
  {
    id: '2',
    name: 'Distribution Transformer 100 kVA',
    category: 'Transformers',
    images: [
      '/Transformer/distribution-transformer/1.jpg',
      '/Transformer/distribution-transformer/2.jpg',
      '/Transformer/distribution-transformer/3.jpg'
    ],
    rating: 4.7,
    reviewCount: 38,
    description: 'Our 100 kVA Distribution Transformer delivers reliable power for residential, commercial, and small industrial use, ensuring durability and low maintenance.',
    features: [
      '100 kVA capacity with robust performance',
      'Low-loss, energy-efficient design compliant with IS 1180',
      'Silent operation with minimal noise levels',
      'Weatherproof and hermetically sealed enclosure for durability',
      'Copper or Aluminum wound options',
      'Corrugated cooling fins for effective heat dissipation',
      'Easy installation and low maintenance requirements'
    ],
    badge: 'Popular'
  },
  {
    id: '3',
    name: 'Furnace Transformer 750KVA',
    category: 'Transformers',
    images: [
      '/Transformer/Furnance-Transformer/1.jpg',
      '/Transformer/Furnance-Transformer/2.jpg',
      '/Transformer/Furnance-Transformer/3.jpg'
    ],
    rating: 4.8,
    reviewCount: 29,
    description: 'Our 750 kVA Furnace Transformer provides reliable, stable power for industrial heating and melting, offering high current capacity, durable construction, and minimal maintenance needs.',
    features: [
      '750 kVA power rating with high thermal stability',
      'Wide voltage regulation for furnace operations',
      'Rugged design for heavy industrial use',
      'Overload and short-circuit protection',
      'LV terminals with or without water cooling options'
    ]
  },
  {
    id: '4',
    name: 'Rectifier Transformer 300KVA',
    category: 'Transformers',
    images: [ '/Transformer/Rectifier-transformer/1.jpg', 
            '/Transformer/Rectifier-transformer/2.jpg', 
            '/Transformer/Rectifier-transformer/3.jpg' 
    ],
    rating: 4.6,
    reviewCount: 24,
    description: 'Our 300 kVA Rectifier Transformer ensures reliable AC-DC conversion with high current capacity, harmonic control, and efficient performance for applications like electrolysis, aluminium smelting, and graphitizing.',
    features: [
      '300 kVA Power Rating',
      '230V - 440V Voltage Class',
      '50 / 60 Hz Frequency',
      '50A / 100A Current Rating (customizable)',
      'ONAN / ONAF Cooling Method',
      'IP65 Rated Protection'
    ]
  },
  {
    id: '5',
    name: 'Speciality Transformer',
    category: 'Transformers',
    images: [
      '/Transformer/Speciality Transformer/1.jpg',
      '/Transformer/Speciality Transformer/2.jpg',
      '/Transformer/Speciality Transformer/3.jpg'
    ],
    rating: 4.9,
    reviewCount: 18,
    description: 'Specialty Transformers are designed for unique applications with tailored electrical characteristics and precision engineering. Built to client specifications, they deliver reliable performance, safety, and efficiency where standard transformers aren\'t enough.',
    features: [
      '500 kVA Power Rating',
      '230V - 440V Voltage Class',
      '50 / 60 Hz Frequency',
      '50A / 100A Current Rating',
      'Copper or Aluminum Winding Material',
      'ONAN / ONAF Cooling Method'
    ]
  },
  {
    id: '6',
    name: 'Reactors 150KVAR',
    category: 'Transformers',
    images: [
      '/Transformer/Reactor/1.jpg',
      '/Transformer/Reactor/2.jpg'
    ],
    rating: 4.5,
    reviewCount: 33,
    description: 'Our 150 kVAR Reactors enhance power factor correction and harmonic filtering, improving efficiency and stability in industrial and commercial networks with compact, robust, and customizable designs.',
    features: [
      '150 kVAR Power Rating',
      '230V – 440V Voltage Class',
      '50 / 60 Hz Frequency',
      '50A / 100A Current Rating (customizable)',
      'ONAN / ONAF Cooling Method',
      'IP65 Rated Protection'
    ]
  },
  {
    id: '7', 
    name: 'Instrument Transformer',
    category: 'Switch Gears',
    images: ['/Transformer/Instrument Transformer/1.jpg', '/Transformer/Instrument Transformer/2.jpg', '/Transformer/Instrument Transformer/3.jpg'],
    rating: 4.7,
    reviewCount: 32,
    description: 'High-precision transformers for accurate measurement and protection in medium to high voltage systems. Oil-immersed and IEC/IS compliant for reliable, long-term performance.',
    features: [
      'High accuracy classes: Metering, Protection, Special Protection',
      'Hermetically sealed oil-filled design for durability',
      'Low phase angle error & thermal stability',
      'Burden capacity up to 50 VA',
      'Outdoor oil-cooled, dead tank type construction',
      'Available in Single, Dual, or Multi-ratio winding arrangements'
    ]
  },
  {
    id: '8',
    name: 'Condenser Bushing',
    category: 'Switch Gears',
    images: ['/Transformer/Condenser Bushing/1.jpg', '/Transformer/Condenser Bushing/2.jpg'],
    rating: 4.6,
    reviewCount: 28,
    description: 'Reliable condenser bushings for transformers and switchgear. Built with oil-impregnated paper insulation and corona-free design for superior dielectric strength, durability, and long service life.',
    features: [
      'Oil-impregnated paper insulation',
      'Corona-free design',
      'Low dielectric loss',
      'High mechanical strength',
      'Temperature class B insulation'
    ]
  }
];

export const categories = [
  'All Products',
  'Transformers',
  'Switch Gears'
];

export const sortOptions = [
  { value: 'name', label: 'Name A-Z' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest First' }
];