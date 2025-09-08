import React from 'react';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Award,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Metro Hospital Electrical Infrastructure',
      category: 'Healthcare',
      location: 'New York, NY',
      year: '2024',
      value: '$2.8M',
      duration: '8 months',
      team: '15 engineers',
      description: 'Complete electrical system overhaul for a 500-bed hospital including emergency power systems, smart lighting, and medical equipment integration.',
      highlights: [
        'Zero downtime during installation',
        '99.9% system reliability achieved',
        '30% energy efficiency improvement',
        'Full compliance with healthcare standards'
      ],
      image: '/api/placeholder/600/400',
      status: 'Completed',
      client: 'Metro Healthcare System'
    },
    {
      id: 2,
      title: 'Smart Manufacturing Plant Automation',
      category: 'Industrial',
      location: 'Detroit, MI',
      year: '2024',
      value: '$5.2M',
      duration: '12 months',
      team: '22 engineers',
      description: 'State-of-the-art industrial automation system for automotive parts manufacturing with IoT integration and predictive maintenance.',
      highlights: [
        'Full factory automation implementation',
        'Real-time monitoring dashboard',
        '40% increase in production efficiency',
        'Predictive maintenance system'
      ],
      image: '/api/placeholder/600/400',
      status: 'In Progress',
      client: 'AutoTech Industries'
    },
    {
      id: 3,
      title: 'Corporate Campus Smart Grid',
      category: 'Commercial',
      location: 'Seattle, WA',
      year: '2023',
      value: '$3.1M',
      duration: '10 months',
      team: '18 engineers',
      description: 'Smart grid implementation for a tech company campus including solar integration, electric vehicle charging, and energy management systems.',
      highlights: [
        'Renewable energy integration',
        '100 EV charging stations installed',
        '50% reduction in energy costs',
        'LEED Platinum certification achieved'
      ],
      image: '/api/placeholder/600/400',
      status: 'Completed',
      client: 'TechCorp Headquarters'
    },
    {
      id: 4,
      title: 'Residential Complex Infrastructure',
      category: 'Residential',
      location: 'Miami, FL',
      year: '2023',
      value: '$1.9M',
      duration: '6 months',
      team: '12 engineers',
      description: 'Premium residential complex with smart home integration, security systems, and energy-efficient lighting throughout 200 luxury units.',
      highlights: [
        '200 smart home units equipped',
        'Integrated security systems',
        'Energy-efficient LED lighting',
        'Future-ready infrastructure'
      ],
      image: '/api/placeholder/600/400',
      status: 'Completed',
      client: 'Luxury Living Developments'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '50+', label: 'Countries Served', icon: MapPin },
    { number: '25', label: 'Years Experience', icon: Calendar },
    { number: '200+', label: 'Expert Engineers', icon: Users }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        
        {/* Hero Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <h1 className="font-display text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Our Projects
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover how we've transformed electrical infrastructure across industries, 
                delivering innovative solutions that power success for our clients worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index}
                    className="animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className="h-8 w-8 text-accent mx-auto mb-3" />
                    <div className="font-display text-4xl font-bold text-foreground mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 bg-subtle">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                Featured Case Studies
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our most impactful projects and see how we deliver exceptional results 
                across diverse industries and applications.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.id}
                  className="bg-card border border-border rounded-luxury overflow-hidden hover:shadow-premium transition-all duration-500 hover:-translate-y-2 animate-fade-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  
                  {/* Project Image */}
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="h-8 w-8 text-accent-foreground" />
                      </div>
                      <p className="text-muted-foreground font-medium">{project.category} Project</p>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className={cn(
                          "inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3",
                          project.status === 'Completed' 
                            ? "bg-success/20 text-success" 
                            : "bg-warning/20 text-warning"
                        )}>
                          {project.status}
                        </span>
                        <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2 text-accent" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2 text-accent" />
                        {project.year}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <span className="w-4 h-4 mr-2 text-accent">$</span>
                        {project.value}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="h-4 w-4 mr-2 text-accent" />
                        {project.team}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {project.highlights.slice(0, 2).map((highlight, idx) => (
                          <div key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Client */}
                    <div className="mb-6 p-4 bg-subtle rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">Client:</div>
                      <div className="font-semibold text-foreground">{project.client}</div>
                    </div>

                    {/* Action Button */}
                    <Button variant="outline" className="w-full group">
                      View Case Study
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>

                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-primary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl font-bold text-primary-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Let's discuss how we can bring the same level of excellence and innovation 
              to your electrical infrastructure project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="/contact">Start a Project</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="/contact">Request Consultation</a>
              </Button>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;