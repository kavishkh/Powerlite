import { useState } from 'react';
import { Search, Plus, Minus, Phone, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'all',
    'products',
    'ordering',
    'technical',
    'shipping',
    'support',
    'warranty',
  ];

  const faqs = [
    {
      id: 1,
      category: 'products',
      question: 'What types of electrical products do you manufacture?',
      answer: 'We manufacture a comprehensive range of electrical products including circuit breakers, switchgear, control panels, transformers, power distribution units, and smart electrical systems. Our products are designed for industrial, commercial, and infrastructure applications with various current and voltage ratings to meet diverse requirements.'
    },
    {
      id: 2,
      category: 'products',
      question: 'Are your products certified for international use?',
      answer: 'Yes, all our products meet international standards including IEC, UL, CE, and other regional certifications. We maintain comprehensive testing facilities and quality management systems certified to ISO 9001:2015. Each product comes with appropriate certification documentation for your region.'
    },
    {
      id: 3,
      category: 'technical',
      question: 'How do I select the right circuit breaker for my application?',
      answer: 'Circuit breaker selection depends on several factors: current rating, voltage rating, fault current levels, environmental conditions, and application type. Our technical team can assist you with proper sizing and selection. We recommend consulting our product datasheets and technical specifications, or contacting our support team for personalized recommendations.'
    },
    {
      id: 4,
      category: 'ordering',
      question: 'What is your minimum order quantity?',
      answer: 'Minimum order quantities vary by product type and customization requirements. Standard products typically have lower MOQs, while custom solutions may require higher quantities. Please contact our sales team for specific MOQ information based on your requirements.'
    },
    {
      id: 5,
      category: 'shipping',
      question: 'What are your shipping and delivery options?',
      answer: 'We offer multiple shipping options including standard freight, expedited delivery, and white-glove service for sensitive equipment. Delivery times range from 2-8 weeks depending on product availability and customization requirements. We ship globally and work with trusted logistics partners to ensure safe delivery.'
    },
    {
      id: 6,
      category: 'technical',
      question: 'Do you provide technical support and installation guidance?',
      answer: 'Yes, we provide comprehensive technical support including installation guidance, commissioning assistance, and troubleshooting support. Our technical team includes certified engineers who can provide remote support, on-site assistance, and training programs for your team.'
    },
    {
      id: 7,
      category: 'warranty',
      question: 'What warranty do you provide on your products?',
      answer: 'We provide comprehensive warranties ranging from 2-10 years depending on the product category. Our warranty covers manufacturing defects and ensures product performance according to specifications. Extended warranty options and service agreements are available for mission-critical applications.'
    },
    {
      id: 8,
      category: 'ordering',
      question: 'Can you provide custom solutions for specific requirements?',
      answer: 'Absolutely! We specialize in custom electrical solutions tailored to specific applications. Our engineering team works closely with customers to design and manufacture products that meet unique requirements including special ratings, environmental conditions, and integration needs.'
    },
    {
      id: 9,
      category: 'support',
      question: 'How can I get technical documentation and drawings?',
      answer: 'Technical documentation including datasheets, installation manuals, CAD drawings, and certificates are available through our website download section or by contacting our technical support team. Registered customers have access to our technical portal with comprehensive documentation libraries.'
    },
    {
      id: 10,
      category: 'products',
      question: 'Do you offer smart/IoT-enabled electrical products?',
      answer: 'Yes, we offer a complete range of smart electrical products with IoT connectivity, remote monitoring capabilities, predictive maintenance features, and integration with building management systems. Our smart products help optimize energy efficiency and provide real-time operational insights.'
    },
    {
      id: 11,
      category: 'shipping',
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to over 100 countries worldwide. We have established distribution networks and partnerships globally to ensure efficient delivery and local support. Import duties, taxes, and local compliance requirements are handled through our logistics partners.'
    },
    {
      id: 12,
      category: 'support',
      question: 'What training programs do you offer?',
      answer: 'We offer comprehensive training programs including product training, installation workshops, safety seminars, and certification courses. Training can be conducted at our facilities, at customer sites, or through virtual sessions. We also provide ongoing education on new products and technologies.'
    },
    {
      id: 13,
      category: 'technical',
      question: 'How do I troubleshoot issues with my electrical equipment?',
      answer: 'Start by consulting the troubleshooting section in your product manual. For complex issues, contact our 24/7 technical support hotline. Our support team can provide remote diagnostics, step-by-step guidance, and arrange for on-site support if needed. We also offer predictive maintenance services to prevent issues.'
    },
    {
      id: 14,
      category: 'warranty',
      question: 'How do I claim warranty service?',
      answer: 'To claim warranty service, contact our customer service team with your product serial number, purchase documentation, and description of the issue. Our team will guide you through the warranty claim process, which may include remote diagnostics, repair, replacement, or on-site service depending on the issue.'
    },
    {
      id: 15,
      category: 'ordering',
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including bank transfers, letters of credit, credit cards for smaller orders, and financing options for large projects. Payment terms are typically net 30-60 days for established customers, with other arrangements available based on project requirements.'
    },
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-hero mb-6">Frequently Asked Questions</h1>
            <p className="body-large text-muted-foreground mb-8">
              Find answers to common questions about our products, services, and support. 
              Can't find what you're looking for? Our team is here to help.
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">
              {filteredFAQs.length} Questions Found
            </h2>
          </div>

          {filteredFAQs.length > 0 ? (
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFAQs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id.toString()} className="surface-card px-6 border-0">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 text-primary rounded-lg px-2 py-1 text-xs font-medium capitalize flex-shrink-0 mt-1">
                        {faq.category}
                      </div>
                      <span className="font-medium text-base">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-2 pl-20">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No questions found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or browse all categories
              </p>
              <Button onClick={() => {setSearchTerm(''); setSelectedCategory('all');}}>
                Show All FAQs
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Still Need Help Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-section mb-4">Still Need Help?</h2>
          <p className="body-large text-muted-foreground mb-8">
            Our expert support team is available 24/7 to assist you with any questions 
            or technical challenges you may have.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="surface-card p-6 text-center hover-lift">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Call Support</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Speak directly with our technical experts
              </p>
              <Button variant="outline" size="sm">
                +1 (555) 123-4567
              </Button>
            </div>
            
            <div className="surface-card p-6 text-center hover-lift">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Get instant help from our support team
              </p>
              <Button variant="outline" size="sm">
                Start Chat
              </Button>
            </div>
            
            <div className="surface-card p-6 text-center hover-lift">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Email Support</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Send us detailed questions anytime
              </p>
              <Button variant="outline" size="sm">
                support@powerlite.com
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;