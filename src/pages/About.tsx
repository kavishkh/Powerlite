import React from 'react';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import companyImage from '@/assets/company-building.jpg';
import { 
  Award, 
  Users, 
  Globe, 
  Calendar,
  Target,
  Heart,
  Lightbulb,
  Shield
} from 'lucide-react';

const About = () => {
  const milestones = [
    { year: "1999", title: "Company Founded", description: "Started as a small electrical contracting business" },
    { year: "2005", title: "International Expansion", description: "First international project in Southeast Asia" },
    { year: "2012", title: "Smart Technology Integration", description: "Pioneered IoT-enabled electrical systems" },
    { year: "2018", title: "Sustainability Focus", description: "Launched green energy solutions division" },
    { year: "2024", title: "Global Leader", description: "Serving 50+ countries with premium solutions" }
  ];

  const leadership = [
    {
      name: "John Mitchell",
      role: "Chief Executive Officer",
      description: "25+ years in electrical engineering and business leadership"
    },
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer", 
      description: "Expert in smart grid technology and industrial automation"
    },
    {
      name: "David Rodriguez",
      role: "VP Global Operations",
      description: "Oversees manufacturing and quality assurance worldwide"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-section bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <div className="animate-fade-in">
                <h1 className="font-display text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Powering Innovation
                  <span className="block text-accent">Since 1999</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  For over 25 years, Powerlite Electricals has been at the forefront of electrical innovation, 
                  delivering premium solutions that power the world's most ambitious projects.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="luxury" size="lg">Our Story</Button>
                  <Button variant="outline" size="lg">Leadership Team</Button>
                </div>
              </div>

              <div className="animate-scale-in">
                <img 
                  src={companyImage}
                  alt="Powerlite headquarters"
                  className="w-full h-96 object-cover rounded-luxury shadow-premium"
                />
              </div>

            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-section bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="text-center bg-card p-8 rounded-luxury border border-border animate-fade-up">
                <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-display text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver innovative electrical solutions that enhance safety, efficiency, 
                  and sustainability in every project we touch.
                </p>
              </div>

              <div className="text-center bg-card p-8 rounded-luxury border border-border animate-fade-up" style={{animationDelay: '0.1s'}}>
                <Lightbulb className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-display text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the global leader in smart electrical systems, 
                  shaping the future of energy management and automation.
                </p>
              </div>

              <div className="text-center bg-card p-8 rounded-luxury border border-border animate-fade-up" style={{animationDelay: '0.2s'}}>
                <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-display text-2xl font-semibold mb-4">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Quality, innovation, and customer success drive everything we do, 
                  building lasting partnerships worldwide.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-section bg-subtle">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Our Journey
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From humble beginnings to global leadership, discover the key milestones that shaped our company.
              </p>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className="flex flex-col md:flex-row items-center gap-8 animate-fade-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex-shrink-0 w-32 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-full text-accent-foreground font-bold text-lg mb-2">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 bg-card p-6 rounded-luxury border border-border text-center md:text-left">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-section bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Leadership Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Meet the visionary leaders driving Powerlite's continued growth and innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <div 
                  key={index}
                  className="text-center bg-card p-8 rounded-luxury border border-border hover:shadow-premium transition-all duration-300 animate-fade-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="w-24 h-24 bg-gradient-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="h-12 w-12 text-accent-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-accent font-medium mb-4">{leader.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {leader.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-section bg-gradient-primary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl font-bold text-primary-foreground mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Join the hundreds of companies who trust Powerlite for their electrical solutions. 
              Let's discuss your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">Get In Touch</Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default About;