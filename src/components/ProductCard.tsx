import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Eye, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
}

const ProductCard = ({ product, viewMode = 'grid' }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
  };

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case 'Best Seller':
        return 'default';
      case 'New':
        return 'secondary';
      case 'Premium':
        return 'outline';
      case 'Eco-Friendly':
        return 'secondary';
      default:
        return 'default';
    }
  };

  if (viewMode === 'list') {
    return (
      <div className="surface-card p-6 hover-lift">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image */}
          <div className="relative w-full md:w-48 h-48 bg-muted rounded-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <Badge 
                variant={getBadgeVariant(product.badge)}
                className="absolute top-2 left-2"
              >
                {product.badge}
              </Badge>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="heading-card mb-1">
                    <Link 
                      to={`/products/${product.id}`}
                      className="hover:text-primary transition-colors"
                    >
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground capitalize text-sm">
                    {product.category.replace('-', ' ')}
                  </p>
                </div>
                <Button variant="ghost" size="sm">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <p className="text-muted-foreground mb-4">
                {product.description}
              </p>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">
                ${product.price.toLocaleString()}
              </div>
              <div className="flex gap-2">
                <Link to={`/products/${product.id}`}>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </Link>
                <Button onClick={handleAddToCart} size="sm">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="surface-card overflow-hidden hover-lift group">
      {/* Image */}
      <div className="relative h-64 bg-muted overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <Badge 
            variant={getBadgeVariant(product.badge)}
            className="absolute top-3 left-3"
          >
            {product.badge}
          </Badge>
        )}
        <Button 
          variant="ghost" 
          size="sm"
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="h-4 w-4" />
        </Button>
        
        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <Link to={`/products/${product.id}`}>
            <Button variant="secondary" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              Quick View
            </Button>
          </Link>
          <Button onClick={handleAddToCart} size="sm">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-2">
          <p className="text-muted-foreground capitalize text-sm mb-1">
            {product.category.replace('-', ' ')}
          </p>
          <h3 className="heading-card">
            <Link 
              to={`/products/${product.id}`}
              className="hover:text-primary transition-colors"
            >
              {product.name}
            </Link>
          </h3>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-sm text-muted-foreground">
              ({product.reviews})
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">
            ${product.price.toLocaleString()}
          </div>
          <Button onClick={handleAddToCart} size="sm">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;