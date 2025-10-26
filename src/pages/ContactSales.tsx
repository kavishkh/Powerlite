import React, { useState } from 'react';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MessageSquare, Calendar, Users, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSales = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    inquiryType: '',
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    message: '',
    preferredContact: 'email'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inquiryTypes = [
    'Product Information',
    'Technical Consultation',
    'Volume Pricing',
    'Partnership Opportunity',
    'Custom Solution',
    'Support & Service'
  ];

  const salesTeam = [
    {
      name: 'Sarah Johnson',
      role: 'Regional Sales Director',
      region: 'North America',
      email: 'sarah.johnson@powerlite.com',
      phone: '+1 (555) 123-4567',
      image: '@/assets/hero-electrical.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Technical Sales Engineer',
      region: 'Asia Pacific',
      email: 'michael.chen@powerlite.com',
      phone: '+65 8234-5678',
      image: '@/assets/hero-electrical.jpg'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Enterprise Sales Manager',
      region: 'Europe & MENA',
      email: 'emma.rodriguez@powerlite.com',
      phone: '+44 20 7123-4567',
      image: '@/assets/hero-electrical.jpg'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact/sales', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      // Check if response is JSON before parsing
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const textResponse = await response.text();
        console.error('Non-JSON response received:', textResponse);
        throw new Error(`Server returned non-JSON response. Status: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (response.ok) {
        toast({
          title: "Sales Inquiry Sent Successfully",
          description: "Our sales team will contact you within 4 hours during business hours.",
        });
        // Reset form
        setFormData({
          inquiryType: '',
          companyName: '',
          contactName: '',
          email: '',
          phone: '',
          country: '',
          message: '',
          preferredContact: 'email'
        });
      } else {
        toast({
          title: "Error Sending Inquiry",
          description: result.message || "Failed to send sales inquiry. Please try again.",
          variant: "destructive"
        });
        console.error('Server error:', result);
      }
    } catch (error: any) {
      let errorMessage = "Failed to send sales inquiry. Please check your connection and try again.";
      
      if (error instanceof SyntaxError && error.message.includes('Unexpected end of JSON input')) {
        errorMessage = "Network error: Unexpected end of JSON input. The server may be down or returning an error page.";
      } else if (error instanceof TypeError) {
        if (error.message.includes('fetch')) {
          errorMessage = "Network error: Unable to connect to the server. Please ensure the backend is running.";
        } else if (error.message.includes('Failed to fetch')) {
          errorMessage = "Connection failed: Please check your internet connection and try again.";
        }
      } else if (error instanceof Error) {
        errorMessage = `Error: ${error.message}`;
      }
      
      toast({
        title: "Network Error",
        description: errorMessage,
        variant: "destructive"
      });
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
    }
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
                <Users className="h-8 w-8 text-accent-foreground" />
              </div>
              <h1 className="font-display text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Contact Sales
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Connect with our expert sales team to discuss your electrical solutions, get personalized recommendations, and unlock enterprise benefits.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Contact Options */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card border border-border rounded-luxury p-6 text-center hover:shadow-premium transition-shadow">
                <Phone className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="font-display text-xl font-semibold mb-2">Call Direct</h3>
                <p className="text-muted-foreground mb-4">Speak with a sales expert immediately</p>
                <Button variant="outline" className="w-full">
                  +1 (800) POWERLITE
                </Button>
              </div>
              <div className="bg-card border border-border rounded-luxury p-6 text-center hover:shadow-premium transition-shadow">
                <MessageSquare className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="font-display text-xl font-semibold mb-2">Live Chat</h3>
                <p className="text-muted-foreground mb-4">Get instant answers to your questions</p>
                <Button variant="outline" className="w-full">
                  Start Chat
                </Button>
              </div>
              <div className="bg-card border border-border rounded-luxury p-6 text-center hover:shadow-premium transition-shadow">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="font-display text-xl font-semibold mb-2">Schedule Demo</h3>
                <p className="text-muted-foreground mb-4">Book a personalized product demonstration</p>
                <Button variant="outline" className="w-full">
                  Book Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12 bg-subtle">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-card border border-border rounded-luxury p-8">
              <div className="text-center mb-8">
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and our sales team will respond within 4 hours during business hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Inquiry Type */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    What can we help you with? *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {inquiryTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({...formData, inquiryType: type})}
                        className={`p-3 text-sm border border-border rounded-luxury transition-all ${
                          formData.inquiryType === type
                            ? 'bg-accent text-accent-foreground border-accent'
                            : 'bg-background hover:bg-muted'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Company & Contact Info */}
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
                      Your Name *
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
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-border bg-background rounded-luxury focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Country & Preferred Contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Country/Region
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
                      className="w-full px-4 py-3 border border-border bg-background rounded-luxury focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="United States"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Preferred Contact Method
                    </label>
                    <select
                      value={formData.preferredContact}
                      onChange={(e) => setFormData({...formData, preferredContact: e.target.value})}
                      className="w-full px-4 py-3 border border-border bg-background rounded-luxury focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="both">Both Email & Phone</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border border-border bg-background rounded-luxury focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Tell us about your requirements, questions, or how we can help..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="bg-gradient-accent min-w-48"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Mail className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>

              </form>
            </div>
          </div>
        </section>

        {/* Sales Team */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Meet Our Sales Team
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our experienced sales professionals are ready to help you find the perfect electrical solutions for your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {salesTeam.map((member, index) => (
                <div key={index} className="bg-card border border-border rounded-luxury p-6 text-center hover:shadow-premium transition-shadow">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-primary">
                    <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-primary-foreground">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-accent font-medium mb-1">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    <Globe className="h-4 w-4 inline mr-1" />
                    {member.region}
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full">
                      <Mail className="h-4 w-4 mr-2" />
                      {member.email}
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      <Phone className="h-4 w-4 mr-2" />
                      {member.phone}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Response Time Guarantee */}
        <section className="py-12 bg-gradient-primary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl font-bold text-primary-foreground mb-6">
              Our Response Time Guarantee
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary-foreground mb-2">4 Hours</div>
                <div className="text-primary-foreground/80">Initial Response</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-foreground mb-2">24 Hours</div>
                <div className="text-primary-foreground/80">Detailed Quote</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-foreground mb-2">48 Hours</div>
                <div className="text-primary-foreground/80">Technical Consultation</div>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default ContactSales;