import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { label: 'Circuit Breakers', href: '/products?category=circuit-breakers' },
      { label: 'Switchgear', href: '/products?category=switchgear' },
      { label: 'Control Panels', href: '/products?category=control-panels' },
      { label: 'Transformers', href: '/products?category=transformers' },
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Projects', href: '/projects' },
      { label: 'Certifications', href: '/about#certifications' },
      { label: 'Careers', href: '/careers' },
    ],
    support: [
      { label: 'Contact', href: '/contact' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Technical Support', href: '/support' },
      { label: 'Downloads', href: '/downloads' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Compliance', href: '/compliance' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-charcoal/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="heading-card mb-4">Stay Updated with Powerlite</h3>
            <p className="body-premium text-muted-foreground mb-6">
              Get the latest industry insights, product updates, and technical resources delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-foreground placeholder:text-muted-foreground"
              />
              <Button variant="default" className="bg-electric hover:bg-electric/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <span className="text-xl font-bold">Powerlite</span>
              <span className="text-sm text-muted-foreground">Electricals</span>
            </div>
            <p className="body-premium text-muted-foreground mb-6 max-w-sm">
              Leading provider of premium electrical solutions, trusted by industries worldwide for over 25 years.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-electric" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-electric" />
                <span className="text-sm">info@powerlite.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-electric" />
                <span className="text-sm">123 Industrial Ave, Tech City</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-electric transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-electric transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-electric transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-electric transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-charcoal/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  to={social.href}
                  className="p-2 bg-background/10 rounded-lg hover:bg-electric/20 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Powerlite Electricals. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;