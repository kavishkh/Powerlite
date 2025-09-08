import React from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';
import { ShoppingCart, Star, Eye, Heart } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  description: string;
  features: string[];
  inStock: boolean;
  badge?: string;
}

interface ProductCardProps {
  product: Product;
  className?: string;
  onAddToCart: (product: Product) => void;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  className, 
  onAddToCart,
  onQuickView 
}) => {
  const [isWishlisted, setIsWishlisted] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div 
      className={cn(
        "group relative bg-card border border-border rounded-luxury overflow-hidden hover:shadow-premium transition-all duration-500",
        "hover:-translate-y-2",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-subtle">
        <img 
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.badge && (
            <span className="bg-gradient-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
              {product.badge}
            </span>
          )}
          {discountPercentage && (
            <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs font-semibold">
              -{discountPercentage}%
            </span>
          )}
          {!product.inStock && (
            <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-semibold">
              Out of Stock
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className={cn(
          "absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300",
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        )}>
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={cn(
              "w-10 h-10 rounded-full border border-border bg-background/90 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:scale-110",
              isWishlisted ? "text-destructive" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Heart className={cn("h-4 w-4", isWishlisted && "fill-current")} />
          </button>
          
          {onQuickView && (
            <button
              onClick={() => onQuickView(product)}
              className="w-10 h-10 rounded-full border border-border bg-background/90 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:scale-110 text-muted-foreground hover:text-foreground"
            >
              <Eye className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Quick Add to Cart */}
        <div className={cn(
          "absolute bottom-4 left-4 right-4 transition-all duration-300",
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <Button
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
            className="w-full bg-primary/90 backdrop-blur-sm hover:bg-primary"
            size="sm"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        
        {/* Category */}
        <div className="text-xs font-medium text-accent uppercase tracking-wide mb-2">
          {product.category}
        </div>

        {/* Product Name */}
        <h3 className="font-display text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-4 w-4",
                  i < Math.floor(product.rating) 
                    ? "text-yellow-400 fill-current" 
                    : "text-muted-foreground"
                )}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl font-bold text-foreground">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {product.description}
        </p>

        {/* Features */}
        <div className="space-y-1 mb-4">
          {product.features.slice(0, 2).map((feature, index) => (
            <div key={index} className="flex items-center text-xs text-muted-foreground">
              <div className="w-1 h-1 bg-accent rounded-full mr-2" />
              {feature}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => onQuickView?.(product)}
          >
            View Details
          </Button>
          <Button
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
            size="sm"
            className="flex-1"
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add to Cart
          </Button>
        </div>

      </div>

    </div>
  );
};