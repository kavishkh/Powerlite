import React from 'react';
import { Button } from './button';
import { CartIcon } from './cart-icon';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigationItems = [
    { name: 'Products', href: '/products' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-30 bg-background/95 backdrop-blur-md border-b border-border",
      "transition-all duration-300",
      className
    )}>
      <div className="max-w-7xl mx-auto px-6 lg:px-7">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">P</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-semibold text-xl text-foreground">Powerlite</span>
              <span className="text-xs text-muted-foreground font-medium tracking-wide">ELECTRICALS</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-accent transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <CartIcon />
            <Button variant="ghost" size="sm" asChild>
              <a href="/get-quote">Get Quote</a>
            </Button>
            <Button variant="default" size="sm" className="bg-gradient-accent" asChild>
              <a href="/contact-sales">Contact Sales</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={cn(
                "block w-full h-0.5 bg-foreground transition-transform",
                isMenuOpen && "rotate-45 translate-y-1.5"
              )} />
              <span className={cn(
                "block w-full h-0.5 bg-foreground transition-opacity",
                isMenuOpen && "opacity-0"
              )} />
              <span className={cn(
                "block w-full h-0.5 bg-foreground transition-transform",
                isMenuOpen && "-rotate-45 -translate-y-1.5"
              )} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-accent transition-colors duration-200 font-medium py-2"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <CartIcon className="self-start" />
                <Button variant="ghost" size="sm" asChild>
                  <a href="/get-quote">Get Quote</a>
                </Button>
                <Button variant="default" size="sm" className="bg-gradient-accent" asChild>
                  <a href="/contact-sales">Contact Sales</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};