import React from 'react';
import { cn } from '@/lib/utils';
import companyImage from '@/assets/company-building.jpg';
import { 
  Award, 
  Shield, 
  Lightbulb, 
  Users, 
  Globe, 
  Zap,
  CheckCircle
} from 'lucide-react';

interface BrandValuesProps {
  className?: string;
}

export const BrandValues: React.FC<BrandValuesProps> = ({ className }) => {
  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every product undergoes rigorous testing and meets international standards for safety and reliability.",
      color: "text-blue-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Pioneering smart electrical solutions that shape the future of energy management and automation.",
      color: "text-yellow-500"
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "Dedicated support and customized solutions tailored to meet unique project requirements.",
      color: "text-green-500"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients worldwide with consistent quality and localized expertise in every market.",
      color: "text-purple-500"
    }
  ];

  const achievements = [
    { number: "25+", label: "Years of Excellence" },
    { number: "500+", label: "Projects Delivered" },
    { number: "50+", label: "Countries Served" },
    { number: "99%", label: "Customer Satisfaction" }
  ];

  const certifications = [
    "ISO 9001:2015",
    "IEC Standards",
    "CE Certification",
    "RoHS Compliance",
    "UL Listed",
    "Energy Star"
  ];

  return (
    <section className={cn("elegant-section bg-background", className)}>
      <div className="responsive-container">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Built on Excellence
          </h2>
          <p className="responsive-text sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Our commitment to quality, innovation, and customer satisfaction drives everything we do. 
            Discover what makes Powerlite the trusted choice for electrical solutions worldwide.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-16 sm:mb-20">
          
          {/* Left Column - Image */}
          <div className="lg:col-span-5 animate-scale-in">
            <div className="relative overflow-hidden rounded-luxury">
              <img 
                src={companyImage}
                alt="Powerlite headquarters building"
                className="w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              
              {/* Floating Achievement Cards */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <div className="bg-white/95 backdrop-blur-md rounded-luxury p-3 sm:p-4 shadow-luxury">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                    {achievements.slice(0, 2).map((achievement, index) => (
                      <div key={index}>
                        <div className="font-display text-lg sm:text-2xl font-bold text-primary">{achievement.number}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground font-medium">{achievement.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Values */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 animate-fade-up text-center sm:text-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 self-center sm:self-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-accent rounded-luxury flex items-center justify-center">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-accent-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-subtle rounded-luxury p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 animate-fade-in">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {achievements.map((achievement, index) => (
              <div key={index} className="space-y-1 sm:space-y-2">
                <div className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-accent">
                  {achievement.number}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-muted-foreground font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Standards */}
        <div className="bg-card rounded-luxury p-6 sm:p-8 border border-border animate-fade-in">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
              Certifications & Standards
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground px-4">
              Our commitment to quality is validated by international certifications and standards compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-3 sm:p-4 bg-subtle rounded-premium border border-border hover:shadow-elegant transition-all duration-300 group"
              >
                <div className="text-center">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-accent mx-auto mb-1 sm:mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-xs sm:text-sm font-medium text-foreground">{cert}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};