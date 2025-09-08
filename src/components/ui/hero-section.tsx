import React from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';
import heroImage from '@/assets/hero-electrical.jpg';
import { ArrowRight, Zap, Shield, Award } from 'lucide-react';

interface HeroSectionProps {
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  const stats = [
    { number: "25+", label: "Years Experience", icon: Award },
    { number: "500+", label: "Projects Completed", icon: Zap },
    { number: "99%", label: "Client Satisfaction", icon: Shield }
  ];

  return (
    <section className={cn(
      "relative min-h-screen flex items-center justify-center overflow-hidden",
      "bg-gradient-subtle",
      className
    )}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Professional electrical installation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className=" font-display text-5xl lg:text-7xl font-bold leading-tight pt-20 ">
                Powering the
                <span className="block text-accent">Future</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 font-light leading-relaxed max-w-2xl">
                Premium electrical solutions for industrial, commercial, and residential projects. 
                Experience excellence in every connection.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group bg-gradient-accent hover:shadow-luxury transition-all duration-300 "
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-black hover:bg-black/10 backdrop-blur-sm"
              >
                Get Consultation
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center space-y-2 animate-fade-up" style={{
                    animationDelay: `${index * 0.2}s`
                  }}>
                    <Icon className="h-6 w-6 text-accent mx-auto" />
                    <div className="font-display text-2xl font-bold">{stat.number}</div>
                    <div className="text-sm text-white/80 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6 animate-slide-left pt-20" >
            <div className="bg-white/10 backdrop-blur-md rounded-luxury p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="font-display text-xl font-semibold text-white mb-3">Industrial Solutions</h3>
              <p className="text-white/80 mb-4">High-voltage systems and automation for manufacturing facilities.</p>
              <Button variant="ghost" size="sm" className="text-accent hover:text-accent-foreground">
                Learn More →
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-luxury p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="font-display text-xl font-semibold text-white mb-3">Smart Buildings</h3>
              <p className="text-white/80 mb-4">Intelligent electrical systems for modern commercial spaces.</p>
              <Button variant="ghost" size="sm" className="text-accent hover:text-accent-foreground">
                Learn More →
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-luxury p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="font-display text-xl font-semibold text-white mb-3">Renewable Energy</h3>
              <p className="text-white/80 mb-4">Solar and wind integration with cutting-edge technology.</p>
              <Button variant="ghost" size="sm" className="text-accent hover:text-accent-foreground">
                Learn More →
              </Button>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};