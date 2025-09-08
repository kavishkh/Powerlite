import React from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Twitter, 
  Facebook,
  Instagram,
  ArrowRight
} from 'lucide-react';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const quickLinks = [
    { name: 'Products', href: '/products' },
    { name: 'Projects', href: '/projects' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const productCategories = [
    { name: 'Circuit Breakers', href: '/products/circuit-breakers' },
    { name: 'Control Panels', href: '/products/control-panels' },
    { name: 'Safety Systems', href: '/products/safety-systems' },
    { name: 'Smart Switches', href: '/products/switches' },
    { name: 'LED Solutions', href: '/products/led' }
  ];

  const support = [
    { name: 'Technical Support', href: '/support' },
    { name: 'Downloads', href: '/downloads' },
    { name: 'Warranty', href: '/warranty' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Training', href: '/training' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Compliance', href: '/compliance' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' }
  ];

  return (
    <footer className={cn("bg-primary text-primary-foreground", className)}>
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-accent rounded-luxury flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">P</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl">Powerlite</span>
                <span className="text-sm text-primary-foreground/70 font-medium tracking-wide">ELECTRICALS</span>
              </div>
            </div>
            
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Leading the future of electrical solutions with innovative products, 
              exceptional quality, and unwavering commitment to excellence.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <MapPin className="h-4 w-4 text-accent" />
                <span>123 Industrial Avenue, Tech City, TC 12345</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Phone className="h-4 w-4 text-accent" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Mail className="h-4 w-4 text-accent" />
                <span>info@powerlite.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary-foreground/10 hover:bg-gradient-accent rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <a 
                    href={category.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Support</h4>
            <ul className="space-y-3 mb-8">
              {support.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <h4 className="font-display font-semibold text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              {legal.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-12 border-t border-primary-foreground/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="font-display font-semibold text-2xl mb-3">Stay Updated</h4>
              <p className="text-primary-foreground/70">
                Get the latest product updates, industry insights, and technical resources.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button variant="hero" className="sm:flex-shrink-0">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Powerlite Electricals. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-primary-foreground/60">
              <span>ISO 9001:2015 Certified</span>
              <span>•</span>
              <span>CE Compliant</span>
              <span>•</span>
              <span>RoHS Certified</span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};