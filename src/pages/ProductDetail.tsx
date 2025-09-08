import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/use-cart';
import { products } from '@/data/products';
import { ArrowLeft, ShoppingCart, Star, Shield, Truck, Award, Download, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20 flex items-center justify-center min-h-[80vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/products')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        
        {/* Breadcrumb */}
        <section className="py-6 bg-subtle">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <button onClick={() => navigate('/')} className="hover:text-accent">Home</button>
              <span>/</span>
              <button onClick={() => navigate('/products')} className="hover:text-accent">Products</button>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Product Image */}
              <div className="space-y-4">
                <div className="aspect-square rounded-luxury overflow-hidden bg-subtle">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Image Gallery (placeholder for multiple images) */}
                <div className="grid grid-cols-4 gap-4">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="aspect-square rounded-lg overflow-hidden bg-subtle border-2 border-transparent hover:border-accent cursor-pointer transition-colors">
                      <img 
                        src={product.image}
                        alt={`${product.name} view ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                
                {/* Category & Badges */}
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">{product.category}</Badge>
                  {product.badge && (
                    <Badge className="bg-gradient-accent">{product.badge}</Badge>
                  )}
                  {discountPercentage && (
                    <Badge variant="destructive">-{discountPercentage}%</Badge>
                  )}
                </div>

                {/* Product Name */}
                <h1 className="font-display text-4xl font-bold text-foreground">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) 
                            ? "text-yellow-400 fill-current" 
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-medium">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-foreground">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Stock Status */}
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span className={`font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>

                {/* Description */}
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  <h3 className="font-display text-xl font-semibold">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Button 
                      onClick={handleAddToCart}
                      disabled={!product.inStock}
                      size="lg"
                      className="flex-1"
                    >
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" size="lg">
                      <Phone className="h-5 w-5 mr-2" />
                      Contact Sales
                    </Button>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Download Brochure
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Get Quote
                    </Button>
                  </div>
                </div>

                {/* Trust Signals */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                  <div className="text-center">
                    <Shield className="h-8 w-8 mx-auto mb-2 text-accent" />
                    <div className="text-sm font-medium">2 Year Warranty</div>
                  </div>
                  <div className="text-center">
                    <Truck className="h-8 w-8 mx-auto mb-2 text-accent" />
                    <div className="text-sm font-medium">Free Shipping</div>
                  </div>
                  <div className="text-center">
                    <Award className="h-8 w-8 mx-auto mb-2 text-accent" />
                    <div className="text-sm font-medium">Certified Quality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-12 bg-subtle">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
              Technical Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: 'Power Rating', value: '50A / 100A' },
                { label: 'Voltage', value: '230V - 440V' },
                { label: 'Frequency', value: '50/60 Hz' },
                { label: 'Protection', value: 'IP65 Rated' },
                { label: 'Temperature Range', value: '-20°C to +85°C' },
                { label: 'Certifications', value: 'CE, UL, ISO 9001' }
              ].map((spec, index) => (
                <div key={index} className="bg-background p-4 rounded-luxury border border-border">
                  <div className="text-sm text-muted-foreground">{spec.label}</div>
                  <div className="font-semibold text-foreground">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products
                .filter(p => p.category === product.category && p.id !== product.id)
                .slice(0, 4)
                .map((relatedProduct) => (
                  <div key={relatedProduct.id} className="bg-card border border-border rounded-luxury p-4 hover:shadow-premium transition-shadow">
                    <img 
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full aspect-square object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-semibold text-foreground mb-2">{relatedProduct.name}</h3>
                    <p className="text-accent font-bold">${relatedProduct.price.toFixed(2)}</p>
                    <Button 
                      onClick={() => navigate(`/products/${relatedProduct.id}`)}
                      variant="outline" 
                      size="sm" 
                      className="w-full mt-3"
                    >
                      View Details
                    </Button>
                  </div>
                ))}
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;