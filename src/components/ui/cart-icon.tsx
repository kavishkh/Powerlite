import React from 'react';
import { Button } from './button';
import { useCart } from '@/hooks/use-cart';
import { cn } from '@/lib/utils';
import { ShoppingCart } from 'lucide-react';

interface CartIconProps {
  className?: string;
}

export const CartIcon: React.FC<CartIconProps> = ({ className }) => {
  const { cart } = useCart();

  return (
    <Button
      variant="ghost"
      size="sm"
      className={cn("relative", className)}
      asChild
    >
      <a href="/cart">
        <ShoppingCart className="h-5 w-5" />
        {cart.totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center font-semibold animate-pulse">
            {cart.totalItems > 9 ? '9+' : cart.totalItems}
          </span>
        )}
      </a>
    </Button>
  );
};