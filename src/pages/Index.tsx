import { Header } from '@/components/ui/header';
import { HeroSection } from '@/components/ui/hero-section';
import { ProductHighlights } from '@/components/ui/product-highlights';
import { BrandValues } from '@/components/ui/brand-values';
import { Footer } from '@/components/ui/footer';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        
        <ScrollAnimation 
          animationClass="animate-fade-in-up"
          delay={200}
        >
          <ProductHighlights />
        </ScrollAnimation>
        
        <ScrollAnimation 
          animationClass="animate-slide-up"
          delay={300}
        >
          <BrandValues />
        </ScrollAnimation>
      </main>
      <Footer />
    </div>
  );
};

export default Index;