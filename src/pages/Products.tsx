import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';
import { ProductCard } from '@/components/ui/product-card';
import { Button } from '@/components/ui/button';
import { products, categories, sortOptions } from '@/data/products';
import { cn } from '@/lib/utils';
import { Filter, Grid, List, Search } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [sortBy, setSortBy] = useState('name');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [visibleProducts, setVisibleProducts] = useState<Set<string>>(new Set());

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'All Products') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort products
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return b.id.localeCompare(a.id);
        default:
          return a.name.localeCompare(b.name);
      }
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const handleViewDetails = (product: any) => {
    window.location.href = `/products/${product.id}`;
  };

  // Intersection Observer for scroll animations
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create observer if it doesn't exist
    if (!observer.current) {
      observer.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const productId = entry.target.getAttribute('data-product-id');
            if (productId) {
              setVisibleProducts(prev => new Set(prev).add(productId));
            }
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });
    }

    // Observe all product cards
    const productCards = document.querySelectorAll('.product-card-animate');
    productCards.forEach(card => {
      observer.current?.observe(card);
    });

    // Cleanup
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [filteredProducts]);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-subtle animate-fade-in">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center animate-fade-in-up">
              <h1 className="font-display text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
                Premium Products
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delayed">
                Discover our comprehensive range of electrical solutions designed for excellence, 
                reliability, and innovation in every application.
              </p>
            </div>
          </div>
        </section>

        {/* Filters & Search */}
        <section className="py-8 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-luxury border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="whitespace-nowrap"
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Sort & View Controls */}
              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 rounded-luxury border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                <div className="flex border border-border rounded-luxury overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={cn(
                      "p-2 transition-colors",
                      viewMode === 'grid' 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-background hover:bg-muted"
                    )}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={cn(
                      "p-2 transition-colors",
                      viewMode === 'list' 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-background hover:bg-muted"
                    )}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Results Info */}
            <div className="mt-6 text-muted-foreground">
              Showing {filteredProducts.length} products
              {selectedCategory !== 'All Products' && ` in ${selectedCategory}`}
              {searchQuery && ` for "${searchQuery}"`}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                  No Products Found
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <Button onClick={() => { setSearchQuery(''); setSelectedCategory('All Products'); }}>
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className={cn(
                viewMode === 'grid' 
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                  : "space-y-6"
              )}>
                {filteredProducts.map((product, index) => (
                  <div 
                    key={product.id}
                    data-product-id={product.id}
                    className={`product-card-animate flex transition-all duration-700 ease-out ${
                      visibleProducts.has(product.id) 
                        ? 'opacity-100 translate-y-0 scale-100' 
                        : 'opacity-0 translate-y-8 scale-95'
                    }`}
                    style={{ 
                      transitionDelay: `${index * 0.1}s`,
                      willChange: 'transform, opacity'
                    }}
                  >
                    <ProductCard
                      product={product}
                      onQuickView={handleViewDetails}
                      className={viewMode === 'list' ? 'flex flex-row flex-grow' : 'flex-grow'}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Load More Button (for future pagination)
            {filteredProducts.length >= 8 && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Products
                </Button>
              </div>
            )} */}

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-primary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl font-bold text-primary-foreground mb-6">
              Need Custom Solutions?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Our engineering team can design bespoke electrical systems tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">Contact Engineering</Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary-foreground/30 text-black hover:bg-primary-foreground/10"
              >
                Request Quote
              </Button>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default Products;