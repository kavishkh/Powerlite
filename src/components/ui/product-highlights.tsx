import React from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';
import productsImage from '@/assets/products-showcase.jpg';
import { Zap, Shield, Settings, Award, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface ProductHighlightsProps {
  className?: string;
}

export const ProductHighlights: React.FC<ProductHighlightsProps> = ({ className }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  
  const products = [
    {
      icon: Zap,
      title: "Transformers",
      description: "Advanced power distribution with intelligent monitoring and superior voltage regulation",
      features: ["High-efficiency core design", "Temperature monitoring system", "Surge protection capabilities"],
      image: productsImage
    },
    {
      icon: Settings,
      title: "Switch gears",
      description: "Advanced protection and control for modern power systems", 
      features: ["High fault tolerance", "Compact design", "Enhanced safety interlocks"],
      image: productsImage
    }
  ];

  return (
    <section 
      ref={ref}
      className={cn(
        "elegant-section bg-subtle transition-all duration-700",
        className,
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      )}
    >
      <div className="responsive-container">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Premium Solutions
          </h2>
          <p className="responsive-text sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Discover our comprehensive range of electrical products designed for excellence, 
            reliability, and innovation in every application.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-luxury p-4 sm:p-6 lg:p-8 border border-border hover:shadow-premium transition-all duration-500 hover:-translate-y-2"
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  transitionProperty: 'opacity, transform',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="flex-shrink-0 self-center sm:self-start">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-accent rounded-luxury flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-accent-foreground" />
                    </div>
                  </div>
                  
                  <div className="flex-grow text-center sm:text-left">
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-accent transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center justify-center sm:justify-start text-xs sm:text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="group/btn text-accent hover:text-white text-sm p-0 h-auto font-semibold"
                      asChild
                    >
                      <a href="/products">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-luxury p-6 sm:p-8 lg:p-12">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground mb-3 sm:mb-4">
            Ready to Power Your Project?
          </h3>
          <p className="text-primary-foreground/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Get personalized recommendations and expert consultation for your electrical needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
              <a href="/products">View All Products</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground/30 text-black hover:bg-primary-foreground/10 w-full sm:w-auto"
              asChild
            >
              <a href="/get-quote">Request Catalog</a>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductHighlights;