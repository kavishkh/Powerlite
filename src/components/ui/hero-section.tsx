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
      <div className="relative z-10 responsive-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-screen py-20 sm:py-24">
          
          {/* Left Column - Text Content */}
          <div className="lg:col-span-7 text-white space-y-6 sm:space-y-8 animate-fade-in text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight">
                Powering the
                <span className="block text-accent">Future</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                Premium electrical solutions for industrial, commercial, and residential projects. 
                Experience excellence in every connection.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="group bg-gradient-accent hover:shadow-luxury transition-all duration-300 w-full sm:w-auto"
                asChild
              >
                <a href="/products">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-black hover:bg-white/10 backdrop-blur-sm w-full sm:w-auto"
                asChild
              >
                <a href="/get-quote">Get Consultation</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/20">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center space-y-1 sm:space-y-2 animate-fade-up" style={{
                    animationDelay: `${index * 0.2}s`
                  }}>
                    <Icon className="h-4 w-4 sm:h-6 sm:w-6 text-accent mx-auto" />
                    <div className="font-display text-lg sm:text-2xl font-bold">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-white/80 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 animate-slide-left">
            <div className="bg-white/10 backdrop-blur-md rounded-luxury p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="font-display text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Industrial Solutions</h3>
              <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-4">High-voltage systems and automation for manufacturing facilities.</p>
              <Button variant="ghost" size="sm" className="text-accent hover:text-white text-sm" asChild>
                <a href="/products">Learn More →</a>
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-luxury p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="font-display text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Smart Buildings</h3>
              <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-4">Intelligent electrical systems for modern commercial spaces.</p>
              <Button variant="ghost" size="sm" className="text-accent hover:text-white text-sm" asChild>
                <a href="/products">Learn More →</a>
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-luxury p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="font-display text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Renewable Energy</h3>
              <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-4">Solar and wind integration with cutting-edge technology.</p>
              <Button variant="ghost" size="sm" className="text-accent hover:text-white text-sm" asChild>
                <a href="/products">Learn More →</a>
              </Button>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-1 sm:mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};