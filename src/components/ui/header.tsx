import React from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigationItems = [
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border",
      "transition-all duration-300",
      className
    )}>
      <div className="responsive-container">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 sm:space-x-3 hover:opacity-90 transition-opacity">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm sm:text-lg">P</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-semibold text-lg sm:text-xl text-foreground">Powerlite</span>
              <span className="text-xs text-muted-foreground font-medium tracking-wide hidden sm:block">ELECTRICALS</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-accent transition-colors duration-200 font-medium text-sm xl:text-base"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <Button variant="ghost" size="sm" className="hidden xl:flex" asChild>
              <a href="/get-quote">Get Quote</a>
            </Button>
            <Button variant="default" size="sm" className="bg-gradient-accent text-xs sm:text-sm" asChild>
              <a href="/contact-sales">Contact Sales</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center space-y-1">
                <span className={cn(
                  "block w-full h-0.5 bg-foreground transition-all duration-300",
                  isMenuOpen && "rotate-45 translate-y-1.5"
                )} />
                <span className={cn(
                  "block w-full h-0.5 bg-foreground transition-all duration-300",
                  isMenuOpen && "opacity-0"
                )} />
                <span className={cn(
                  "block w-full h-0.5 bg-foreground transition-all duration-300",
                  isMenuOpen && "-rotate-45 -translate-y-1.5"
                )} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="py-4 sm:py-6 border-t border-border bg-background/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-3 sm:space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-accent transition-colors duration-200 font-medium py-2 text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-border/50">
                <Button variant="ghost" size="sm" className="self-start" asChild>
                  <a href="/get-quote">Get Quote</a>
                </Button>
                <Button variant="default" size="sm" className="bg-gradient-accent self-start" asChild>
                  <a href="/contact-sales">Contact Sales</a>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};