import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { state } = useCart();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
            <span className="text-xl md:text-2xl font-bold">Powerlite</span>
            <span className="text-sm text-muted-foreground">Electricals</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-primary rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="p-2">
              <Search className="h-4 w-4" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="sm" className="relative p-2">
                <ShoppingCart className="h-4 w-4" />
                {state.itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-electric text-electric-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {state.itemCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-primary bg-accent'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;