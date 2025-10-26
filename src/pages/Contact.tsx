import React, { useState } from 'react';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageSquare,
  Users,
  Building2
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact/general', {
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
          title: "Message Sent Successfully",
          description: "Thank you for contacting us. We'll get back to you soon.",
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: '',
          inquiryType: 'general'
        });
      } else {
        toast({
          title: "Error Sending Message",
          description: result.message || "Failed to send message. Please try again.",
          variant: "destructive"
        });
        console.error('Server error:', result);
      }
    } catch (error: any) {
      let errorMessage = "Failed to send message. Please check your connection and try again.";
      
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

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: [
        '123 Industrial Avenue',
        'Tech City, TC 12345',
        'United States'
      ],
      action: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        'Sales: +1 (555) 123-4567',
        'Support: +1 (555) 123-4568',
        'Emergency: +1 (555) 123-4569'
      ],
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'sales@powerlite.com',
        'support@powerlite.com',
        'info@powerlite.com'
      ],
      action: 'Send Email'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 8:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 4:00 PM', 
        'Sunday: Closed'
      ],
      action: 'View Calendar'
    }
  ];

  const departments = [
    {
      icon: Users,
      name: 'Sales Team',
      description: 'Product inquiries and quotations',
      email: 'sales@powerlite.com'
    },
    {
      icon: MessageSquare,
      name: 'Technical Support',
      description: 'Installation and troubleshooting help',
      email: 'support@powerlite.com'
    },
    {
      icon: Building2,
      name: 'Engineering',
      description: 'Custom solutions and project planning',
      email: 'engineering@powerlite.com'
    }
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
                Get In Touch
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Ready to discuss your electrical project? Our expert team is here to provide 
                personalized solutions and support for all your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Contact Form */}
              <div className="animate-fade-up">
                <div className="bg-card border border-border rounded-luxury p-8">
                  <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                    Send us a Message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Inquiry Type */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Inquiry Type
                      </label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="sales">Sales & Quotation</option>
                        <option value="technical">Technical Support</option>
                        <option value="partnership">Partnership</option>
                      </select>
                    </div>

                    {/* Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="Full Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>

                    {/* Company & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="Company Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="How can we help you?"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                        placeholder="Please describe your project or inquiry in detail..."
                      />
                    </div>

                    {/* Submit Button */}
                    <Button 
                      type="submit" 
                      variant="luxury" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>

                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-8 animate-fade-up" style={{animationDelay: '0.2s'}}>
                
                {/* Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div 
                        key={index}
                        className="bg-card border border-border rounded-luxury p-6 hover:shadow-elegant transition-all duration-300"
                      >
                        <Icon className="h-8 w-8 text-accent mb-4" />
                        <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                          {info.title}
                        </h3>
                        <div className="space-y-1 mb-4">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-sm text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                        <Button variant="ghost" size="sm" className="text-accent p-0 h-auto">
                          {info.action} →
                        </Button>
                      </div>
                    );
                  })}
                </div>

                {/* Department Cards */}
                <div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                    Contact by Department
                  </h3>
                  <div className="space-y-4">
                    {departments.map((dept, index) => {
                      const Icon = dept.icon;
                      return (
                        <div 
                          key={index}
                          className="bg-card border border-border rounded-lg p-4 hover:shadow-subtle transition-all duration-300"
                        >
                          <div className="flex items-start gap-4">
                            <Icon className="h-6 w-6 text-accent mt-1" />
                            <div>
                              <h4 className="font-semibold text-foreground mb-1">
                                {dept.name}
                              </h4>
                              <p className="text-sm text-muted-foreground mb-2">
                                {dept.description}
                              </p>
                              <a 
                                href={`mailto:${dept.email}`}
                                className="text-sm text-accent hover:underline"
                              >
                                {dept.email}
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-muted rounded-luxury h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">123 Industrial Avenue, Tech City</p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-subtle">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Find quick answers to common questions about our products and services.
            </p>
            <Button variant="outline" size="lg" asChild>
              <a href="/faq">View All FAQ</a>
            </Button>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;