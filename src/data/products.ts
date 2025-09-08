import { Product } from '@/components/ui/product-card';
import circuitBreakerImg from '@/assets/product-circuit-breaker.jpg';
import controlPanelImg from '@/assets/product-control-panel.jpg';
import safetyImg from '@/assets/product-safety-switch.jpg';
import smartSwitchImg from '@/assets/product-smart-switch.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'PowerMax Circuit Breaker 50A',
    category: 'Circuit Breakers',
    price: 299.99,
    originalPrice: 349.99,
    image: circuitBreakerImg,
    rating: 4.8,
    reviewCount: 127,
    description: 'Advanced circuit protection with smart monitoring capabilities and remote diagnostics.',
    features: [
      'Smart diagnostics with IoT connectivity',
      'Remote monitoring and alerts',
      'Energy-efficient design',
      'Arc fault protection',
      '50A capacity with overload protection'
    ],
    inStock: true,
    badge: 'Best Seller'
  },
  {
    id: '2', 
    name: 'Industrial Control Panel Pro',
    category: 'Control Panels',
    price: 1299.99,
    image: controlPanelImg,
    rating: 4.9,
    reviewCount: 89,
    description: 'Comprehensive automation solution for industrial applications with touchscreen interface.',
    features: [
      'High-resolution touchscreen display',
      'Real-time data monitoring',
      'Scalable modular design',
      'Industrial-grade components',
      'Ethernet and wireless connectivity'
    ],
    inStock: true,
    badge: 'Professional'
  },
  {
    id: '3',
    name: 'SafeGuard Emergency Switch',
    category: 'Safety Systems', 
    price: 199.99,
    originalPrice: 249.99,
    image: safetyImg,
    rating: 4.7,
    reviewCount: 203,
    description: 'Emergency safety switch with instant shutdown capabilities for industrial environments.',
    features: [
      'Emergency shutdown system',
      'IP67 weatherproof rating',
      'Tamper-resistant design',
      'LED status indicators',
      'Compliance ready certification'
    ],
    inStock: true
  },
  {
    id: '4',
    name: 'SmartHome Touch Panel',
    category: 'Smart Switches',
    price: 149.99,
    image: smartSwitchImg,
    rating: 4.6,
    reviewCount: 156,
    description: 'Premium smart switch panel with voice control and mobile app integration.',
    features: [
      'Touch-sensitive interface',
      'Voice control compatibility',
      'Mobile app integration',
      'Premium glass finish',
      'Dimmer functionality'
    ],
    inStock: false
  },
  {
    id: '5',
    name: 'PowerMax Circuit Breaker 100A',
    category: 'Circuit Breakers',
    price: 449.99,
    originalPrice: 499.99,
    image: circuitBreakerImg,
    rating: 4.9,
    reviewCount: 78,
    description: 'Heavy-duty circuit breaker for high-capacity industrial applications.',
    features: [
      '100A capacity rating',
      'Enhanced arc fault protection',
      'Digital monitoring display',
      'Remote control capability',
      'Extended warranty coverage'
    ],
    inStock: true,
    badge: 'Heavy Duty'
  },
  {
    id: '6',
    name: 'Compact Control Panel',
    category: 'Control Panels',
    price: 699.99,
    image: controlPanelImg,
    rating: 4.5,
    reviewCount: 134,
    description: 'Space-efficient control panel perfect for smaller commercial installations.',
    features: [
      'Compact design footprint',
      'Multi-zone control',
      'LED status indicators',
      'Easy installation system',
      'Cost-effective solution'
    ],
    inStock: true
  },
  {
    id: '7',
    name: 'Industrial Safety Hub',
    category: 'Safety Systems',
    price: 899.99,
    image: safetyImg,
    rating: 4.8,
    reviewCount: 67,
    description: 'Comprehensive safety management system for large industrial facilities.',
    features: [
      'Multi-zone safety monitoring',
      'Centralized alarm system',
      'Redundant safety protocols',
      'Integration with existing systems',
      'Professional installation included'
    ],
    inStock: true,
    badge: 'Enterprise'
  },
  {
    id: '8',
    name: 'Luxury Switch Collection',
    category: 'Smart Switches',
    price: 89.99,
    originalPrice: 119.99,
    image: smartSwitchImg,
    rating: 4.4,
    reviewCount: 289,
    description: 'Designer electrical switches with premium materials and elegant finish.',
    features: [
      'Premium metal construction',
      'Soft-touch operation',
      'Multiple finish options',
      'Designer aesthetic',
      'Easy retrofit installation'
    ],
    inStock: true
  }
];

export const categories = [
  'All Products',
  'Circuit Breakers',
  'Control Panels',
  'Safety Systems',
  'Smart Switches'
];

export const sortOptions = [
  { value: 'name', label: 'Name A-Z' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest First' }
];