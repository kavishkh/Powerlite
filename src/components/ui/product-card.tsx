import React from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';
import { Eye, Heart } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  category: string;
  image?: string;
  images?: string[];
  rating: number;
  reviewCount: number;
  description: string;
  features: string[];
  badge?: string;
}

interface ProductCardProps {
  product: Product;
  className?: string;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  className, 
  onQuickView 
}) => {
  const [isWishlisted, setIsWishlisted] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className={cn(
        "group relative bg-card border border-border rounded-luxury overflow-hidden hover:shadow-premium transition-all duration-500 flex flex-col h-full transform-gpu",
        "hover:-translate-y-2 sm:hover:-translate-y-3",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-subtle">
        <img 
          src={product.images ? product.images[0] : (product.image || '')}
          alt={product.name}
          className="w-full h-full object-contain transition-all duration-700 group-hover:scale-110 transform-gpu"
        />
        
        {/* Badges */}
        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex flex-col gap-1 sm:gap-2">
          {product.badge && (
            <span className="bg-gradient-accent text-accent-foreground px-2 sm:px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
              {product.badge}
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className={cn(
          "absolute top-2 sm:top-4 right-2 sm:right-4 flex flex-col gap-1 sm:gap-2 transition-all duration-300",
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        )}>
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={cn(
              "w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-border bg-background/90 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:scale-110",
              isWishlisted ? "text-destructive" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Heart className={cn("h-3 w-3 sm:h-4 sm:w-4", isWishlisted && "fill-current")} />
          </button>
          
          {onQuickView && (
            <button
              onClick={() => onQuickView(product)}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-border bg-background/90 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:scale-110 text-muted-foreground hover:text-foreground"
            >
              <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-3 sm:p-4 lg:p-6 flex flex-col flex-grow">
        
        {/* Category */}
        <div className="text-xs font-medium text-accent uppercase tracking-wide mb-1 sm:mb-2">
          {product.category}
        </div>

        {/* Product Name */}
        <h3 className="font-display text-sm sm:text-base lg:text-lg font-semibold text-foreground mb-1 sm:mb-2 line-clamp-2 group-hover:text-accent transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <React.Fragment key={i}>
                {i < Math.floor(product.rating) ? (
                  <span className="text-yellow-400">★</span>
                ) : (
                  <span className="text-muted-foreground">☆</span>
                )}
              </React.Fragment>
            ))}
          </div>
          <span className="text-xs sm:text-sm text-muted-foreground">
            ({product.reviewCount})
          </span>
        </div>

        {/* Description - Hidden on mobile */}
        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 mb-3 sm:mb-4 hidden sm:block">
          {product.description}
        </p>

        {/* Features - Show fewer on mobile */}
        <div className="space-y-1 mb-3 sm:mb-4 flex-grow">
          {product.features.slice(0, window.innerWidth < 640 ? 1 : 2).map((feature, index) => (
            <div key={index} className="flex items-center text-xs text-muted-foreground">
              <div className="w-1 h-1 bg-accent rounded-full mr-2 flex-shrink-0" />
              <span className="line-clamp-1">{feature}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-auto">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 text-xs sm:text-sm group-hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            onClick={() => onQuickView?.(product)}
          >
            <span className="hidden sm:inline">View Details</span>
            <span className="sm:hidden">Details</span>
          </Button>
        </div>

      </div>

    </div>
  );
};