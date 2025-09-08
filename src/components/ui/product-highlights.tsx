import React from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';
import productsImage from '@/assets/products-showcase.jpg';
import { Zap, Shield, Settings, Award, ArrowRight } from 'lucide-react';

interface ProductHighlightsProps {
  className?: string;
}

export const ProductHighlights: React.FC<ProductHighlightsProps> = ({ className }) => {
  const products = [
    {
      icon: Zap,
      title: "Circuit Breakers",
      description: "Advanced protection systems with smart monitoring capabilities",
      features: ["Smart diagnostics", "Remote monitoring", "Energy efficient"],
      image: productsImage
    },
    {
      icon: Settings,
      title: "Control Panels",
      description: "Custom automation solutions for industrial applications", 
      features: ["IoT integration", "Real-time data", "Scalable design"],
      image: productsImage
    },
    {
      icon: Shield,
      title: "Safety Systems",
      description: "Comprehensive electrical safety and protection equipment",
      features: ["Emergency shutdown", "Arc fault protection", "Compliance ready"],
      image: productsImage
    },
    {
      icon: Award,
      title: "Premium Switches",
      description: "Designer electrical switches for modern buildings",
      features: ["Touch interface", "Voice control", "Premium materials"],
      image: productsImage
    }
  ];

  return (
    <section className={cn(
      "py-section bg-subtle",
      className
    )}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Premium Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of electrical products designed for excellence, 
            reliability, and innovation in every application.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-luxury p-8 border border-border hover:shadow-premium transition-all duration-500 hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-accent rounded-luxury flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-accent-foreground" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="group/btn text-accent hover:text-accent p-0 h-auto font-semibold"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-luxury p-12 animate-fade-in">
          <h3 className="font-display text-3xl font-bold text-primary-foreground mb-4">
            Ready to Power Your Project?
          </h3>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Get personalized recommendations and expert consultation for your electrical needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              View All Products
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground/30 text-black hover:bg-primary-foreground/10"
            >
              Request Catalog
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};