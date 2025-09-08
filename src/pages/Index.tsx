import { Header } from '@/components/ui/header';
import { HeroSection } from '@/components/ui/hero-section';
import { ProductHighlights } from '@/components/ui/product-highlights';
import { BrandValues } from '@/components/ui/brand-values';
import { Footer } from '@/components/ui/footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProductHighlights />
        <BrandValues />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
