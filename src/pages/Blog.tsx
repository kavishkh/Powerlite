import React from 'react';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    title: 'The Future of Smart Electrical Systems in Industrial Applications',
    excerpt: 'Discover how IoT-enabled electrical systems are revolutionizing industrial automation and energy management.',
    author: 'Engineering Team',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Technology',
    image: '@/assets/hero-electrical.jpg',
    featured: true
  },
  {
    id: '2',
    title: 'Understanding Circuit Breaker Safety Standards and Compliance',
    excerpt: 'A comprehensive guide to international safety standards for circuit breakers and electrical protection systems.',
    author: 'Safety Expert',
    date: '2024-01-10',
    readTime: '12 min read',
    category: 'Safety',
    image: '@/assets/product-circuit-breaker.jpg'
  },
  {
    id: '3',
    title: 'Energy Efficiency in Modern Control Panel Design',
    excerpt: 'Learn how advanced control panels can reduce energy consumption while improving operational efficiency.',
    author: 'Design Team',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Design',
    image: '@/assets/product-control-panel.jpg'
  },
  {
    id: '4',
    title: 'Maintenance Best Practices for Industrial Electrical Systems',
    excerpt: 'Essential maintenance protocols to ensure optimal performance and longevity of electrical installations.',
    author: 'Maintenance Team',
    date: '2024-01-01',
    readTime: '10 min read',
    category: 'Maintenance',
    image: '@/assets/product-safety-switch.jpg'
  },
  {
    id: '5',
    title: 'Smart Home Integration: Choosing the Right Electrical Components',
    excerpt: 'Navigate the world of smart home technology with our guide to selecting compatible electrical components.',
    author: 'Smart Home Expert',
    date: '2023-12-28',
    readTime: '7 min read',
    category: 'Smart Home',
    image: '@/assets/product-smart-switch.jpg'
  },
  {
    id: '6',
    title: 'Sustainable Electrical Solutions for Green Buildings',
    excerpt: 'Explore eco-friendly electrical solutions that contribute to sustainable building certifications.',
    author: 'Sustainability Team',
    date: '2023-12-20',
    readTime: '9 min read',
    category: 'Sustainability',
    image: '@/assets/company-building.jpg'
  }
];

const categories = ['All', 'Technology', 'Safety', 'Design', 'Maintenance', 'Smart Home', 'Sustainability'];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <h1 className="font-display text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Industry Insights
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Stay ahead with the latest trends, technologies, and best practices in electrical engineering and industrial automation.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredPost && (
          <section className="py-12 bg-background">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="bg-card border border-border rounded-luxury overflow-hidden hover:shadow-premium transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-video lg:aspect-auto">
                    <img 
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-gradient-accent">Featured</Badge>
                      <Badge variant="secondary">{featuredPost.category}</Badge>
                    </div>
                    <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(featuredPost.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                      <Button>
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="py-8 bg-subtle border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.filter(post => !post.featured).map((post, index) => (
                <article 
                  key={post.id}
                  className="bg-card border border-border rounded-luxury overflow-hidden hover:shadow-premium transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3 line-clamp-2 hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Read More
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-primary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl font-bold text-primary-foreground mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Subscribe to our newsletter for the latest industry insights, product updates, and technical resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-luxury border border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
              />
              <Button variant="hero" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;