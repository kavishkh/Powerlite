import React, { useState } from 'react';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calculator, FileText, Clock, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const GetQuote = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    projectType: '',
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    projectDetails: '',
    budget: '',
    timeline: '',
    requirements: []
  });

  const projectTypes = [
    'Industrial Automation',
    'Commercial Electrical',
    'Residential Systems',
    'Control Panel Design',
    'Safety Systems',
    'Smart Building Solutions',
    'Custom Engineering'
  ];

  const requirements = [
    'Design & Engineering',
    'Installation Services',
    'Maintenance Contract',
    'Training & Support',
    'Documentation',
    'Certification Assistance'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted",
      description: "Our team will contact you within 24 hours with a detailed quote.",
    });
  };

  const handleRequirementChange = (requirement: string) => {
    setFormData(prev => ({
      ...prev,
      requirements: prev.requirements.includes(requirement)
        ? prev.requirements.filter(r => r !== requirement)
        : [...prev.requirements, requirement]
    }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-full mb-6">
                <Calculator className="h-8 w-8 text-accent-foreground" />
              </div>
              <h1 className="font-display text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Get Your Quote
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Tell us about your project requirements and receive a detailed, competitive quote from our engineering experts.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full mb-4">
                  <FileText className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">1. Submit Details</h3>
                <p className="text-muted-foreground">Provide your project requirements and specifications</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full mb-4">
                  <Calculator className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">2. Expert Review</h3>
                <p className="text-muted-foreground">Our engineers analyze and prepare a detailed quote</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full mb-4">
                  <CheckCircle className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">3. Receive Quote</h3>
                <p className="text-muted-foreground">Get your comprehensive quote within 24 hours</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-12 bg-subtle">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-card border border-border rounded-luxury p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Project Type */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-4">
                    Project Type *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({...formData, projectType: type})}
                        className={`p-3 text-sm border border-border rounded-luxury transition-all ${
                          formData.projectType === type
                            ? 'bg-accent text-accent-foreground border-accent'
                            : 'bg-background hover:bg-muted'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Company Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                      className="w-full px-4 py-3 border border-border bg-background rounded-luxury focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contactName}
                      onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                      className="w-full px-4 py-3 border border-border bg-background rounded-luxury focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                {/* Contact Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-border bg-background rounded-luxury focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-border bg-background rounded-luxury focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Details *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({...formData, projectDetails: e.target.value})}
                    className="w-full px-4 py-3 border border-border bg-background rounded-luxury focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Please describe your project requirements, specifications, and any specific needs..."
                  />
                </div>

                {/* Budget & Timeline */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      className="w-full px-4 py-3 border border-border bg-background rounded-luxury focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-500k">$100,000 - $500,000</option>
                      <option value="500k-plus">$500,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                      className="w-full px-4 py-3 border border-border bg-background rounded-luxury focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Select timeline</option>
                      <option value="urgent">Urgent (1-2 weeks)</option>
                      <option value="standard">Standard (1-2 months)</option>
                      <option value="flexible">Flexible (3+ months)</option>
                    </select>
                  </div>
                </div>

                {/* Additional Requirements */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-4">
                    Additional Services Required
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {requirements.map((requirement) => (
                      <label key={requirement} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.requirements.includes(requirement)}
                          onChange={() => handleRequirementChange(requirement)}
                          className="w-4 h-4 text-accent border-border rounded focus:ring-accent"
                        />
                        <span className="text-sm text-foreground">{requirement}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-6">
                  <Button type="submit" size="lg" className="bg-gradient-accent min-w-48">
                    <Clock className="h-5 w-5 mr-2" />
                    Get Quote in 24 Hours
                  </Button>
                </div>

              </form>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Why Choose Powerlite Electricals?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">15+</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Years Experience</h3>
                <p className="text-muted-foreground">Trusted by industry leaders worldwide</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">500+</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Projects Completed</h3>
                <p className="text-muted-foreground">Successful installations globally</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">24h</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Quick Response</h3>
                <p className="text-muted-foreground">Fast quotes and support</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default GetQuote;