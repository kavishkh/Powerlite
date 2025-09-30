import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';
import { ArrowLeft, Star, Shield, Truck, Award, Download, Phone, X } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === id);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20 flex items-center justify-center min-h-[80vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/products')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  // Product range options for Distribution Transformer
  const productRangeOptions = [
    'Energy-efficient transformers (BEE star-rated)',
    'Compact / packaged substation compatibility',
    'Oil-filled or ester-filled eco-friendly options',
    'Customizable voltage class (11 kV – 33 kV)',
    'Indoor and outdoor application-ready'
  ];

  // Function to open modal with selected image
  const openImageModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to navigate to next image in modal
  const nextImage = () => {
    if (product.images) {
      setSelectedImageIndex((prevIndex) => 
        prevIndex === product.images!.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // Function to navigate to previous image in modal
  const prevImage = () => {
    if (product.images) {
      setSelectedImageIndex((prevIndex) => 
        prevIndex === 0 ? product.images!.length - 1 : prevIndex - 1
      );
    }
  };

  // Handle keyboard navigation in modal
  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isModalOpen) return;
    
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    }
  };

  // Add event listener for keyboard navigation
  React.useEffect(() => {
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown as any);
      // Prevent background scrolling when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown as any);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        
        {/* Breadcrumb */}
        <section className="py-6 bg-subtle">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <button onClick={() => navigate('/')} className="hover:text-accent">Home</button>
              <span>/</span>
              <button onClick={() => navigate('/products')} className="hover:text-accent">Products</button>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Product Image */}
              <div className="space-y-4">
                <div className="aspect-square rounded-luxury overflow-hidden bg-subtle">
                  <img 
                    src={product.images ? product.images[selectedImageIndex] : (product.image || '')}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Image Gallery (placeholder for multiple images) */}
                <div className="grid grid-cols-4 gap-4">
                  {product.images ? (
                    product.images.map((image, index) => (
                      <div 
                        key={index} 
                        className={`aspect-square rounded-lg overflow-hidden bg-subtle border-2 cursor-pointer transition-colors ${
                          selectedImageIndex === index 
                            ? 'border-accent' 
                            : 'border-transparent hover:border-accent'
                        }`}
                        onClick={() => setSelectedImageIndex(index)}
                      >
                        <img 
                          src={image}
                          alt={`${product.name} view ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))
                  ) : (
                    [1,2,3,4].map((i) => (
                      <div 
                        key={i} 
                        className="aspect-square rounded-lg overflow-hidden bg-subtle border-2 border-transparent hover:border-accent cursor-pointer transition-colors"
                        onClick={() => product.image && openImageModal(0)}
                      >
                        <img 
                          src={product.image || ''}
                          alt={`${product.name} view ${i}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                
                {/* Category & Badges */}
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">{product.category}</Badge>
                  {product.badge && (
                    <Badge className="bg-gradient-accent">{product.badge}</Badge>
                  )}
                </div>

                {/* Product Name */}
                <h1 className="font-display text-4xl font-bold text-foreground">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) 
                            ? "text-yellow-400 fill-current" 
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-medium">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
                </div>
                {/* Description */}
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  <h3 className="font-display text-xl font-semibold">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Product Range Options (specifically for Distribution Transformer) */}
                {product.id === '2' && (
                  <div className="space-y-3">
                    <h3 className="font-display text-xl font-semibold">Product Range Options</h3>
                    <ul className="space-y-2">
                      {productRangeOptions.map((option, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full" />
                          <span className="text-muted-foreground">{option}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Product Range Options (specifically for Furnace Transformer) */}
                {product.id === '3' && (
                  <div className="space-y-3">
                    <h3 className="font-display text-xl font-semibold">Product Range Options</h3>
                    <ul className="space-y-2">
                      {[
                        'Electric Arc Furnace (EAF) Transformers',
                        'Submerged Arc Furnace (SAF) Transformers',
                        'Ladle Refining Furnace (LRF) Transformers',
                        'DC Arc Furnace Transformers',
                        'Induction Furnace Transformers'
                      ].map((option, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full" />
                          <span className="text-muted-foreground">{option}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Button variant="outline" size="lg" className="flex-1">
                      <Phone className="h-5 w-5 mr-2" />
                      Contact Sales
                    </Button>
                  </div>
                </div>

                {/* Trust Signals */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                  <div className="text-center">
                    <Shield className="h-8 w-8 mx-auto mb-2 text-accent" />
                    <div className="text-sm font-medium">2 Year Warranty</div>
                  </div>
                  <div className="text-center">
                    <Truck className="h-8 w-8 mx-auto mb-2 text-accent" />
                    <div className="text-sm font-medium">Free Shipping</div>
                  </div>
                  <div className="text-center">
                    <Award className="h-8 w-8 mx-auto mb-2 text-accent" />
                    <div className="text-sm font-medium">Certified Quality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-12 bg-subtle">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
              Technical Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.id === '1' ? (
                // Specific specifications for Power Transformer (500 kVA)
                [
                  { label: 'Power Rating', value: '500 kVA' },
                  { label: 'Voltage Class', value: '11 kV / 33 kV / 66 kV' },
                  { label: 'Frequency', value: '50 / 60 Hz' },
                  { label: 'Phase', value: 'Three Phase' },
                  { label: 'Cooling Method', value: 'ONAN (Oil Natural Air Natural)' },
                  { label: 'Insulation Class', value: 'Class A (105°C)' }
                ].map((spec, index) => (
                  <div key={index} className="bg-background p-4 rounded-luxury border border-border">
                    <div className="text-sm text-muted-foreground">{spec.label}</div>
                    <div className="font-semibold text-foreground">{spec.value}</div>
                  </div>
                ))
              ) : product.id === '2' ? (
                // Specific specifications for Distribution Transformer (100 kVA)
                [
                  { label: 'Power Rating', value: '100 kVA' },
                  { label: 'Voltage Class', value: '11 kV – 33 kV' },
                  { label: 'Frequency', value: '50 / 60 Hz' },
                  { label: 'Insulation', value: 'Mineral oil or ester-filled (eco-friendly option)' },
                  { label: 'Cooling Method', value: 'Corrugated cooling fins, ONAN type (Oil Natural Air Natural)' },
                  { label: 'Efficiency Standard', value: 'BEE Star Rated, as per IS 1180' }
                ].map((spec, index) => (
                  <div key={index} className="bg-background p-4 rounded-luxury border border-border">
                    <div className="text-sm text-muted-foreground">{spec.label}</div>
                    <div className="font-semibold text-foreground">{spec.value}</div>
                  </div>
                ))
              ) : product.id === '3' ? (
                // Specific specifications for Furnace Transformer (750 kVA)
                [
                  { label: 'Power Rating', value: '750 kVA' },
                  { label: 'Voltage Range', value: '230V – 440V' },
                  { label: 'Frequency', value: '50 / 60 Hz' },
                  { label: 'Current Capacity', value: '50A / 100A (customizable)' },
                  { label: 'Cooling', value: 'Oil-to-air / oil-to-water heat exchanger (customizable)' },
                  { label: 'Temperature Range', value: '–20°C to +85°C' }
                ].map((spec, index) => (
                  <div key={index} className="bg-background p-4 rounded-luxury border border-border">
                    <div className="text-sm text-muted-foreground">{spec.label}</div>
                    <div className="font-semibold text-foreground">{spec.value}</div>
                  </div>
                ))
              ) : product.id === '4' ? (
                // Specific specifications for Rectifier Transformer (300 kVA)
                [
                  { label: 'Power Rating', value: '300 kVA' },
                  { label: 'Voltage Class', value: '230V – 440V' },
                  { label: 'Frequency', value: '50 / 60 Hz' },
                  { label: 'Current Rating', value: '50A / 100A (customizable)' },
                  { label: 'Cooling Method', value: 'ONAN / ONAF (Oil Natural, Air Natural / Oil Natural, Air Forced)' },
                  { label: 'Protection', value: 'IP65 Rated, surge & overload protected' }
                ].map((spec, index) => (
                  <div key={index} className="bg-background p-4 rounded-luxury border border-border">
                    <div className="text-sm text-muted-foreground">{spec.label}</div>
                    <div className="font-semibold text-foreground">{spec.value}</div>
                  </div>
                ))
              ) : product.id === '5' ? (
                // Specific specifications for Specialty Transformer
                [
                  { label: 'Power Rating', value: '500 kVA (example, customizable)' },
                  { label: 'Voltage Class', value: '230V – 440V' },
                  { label: 'Frequency', value: '50 / 60 Hz' },
                  { label: 'Current Rating', value: '50A / 100A (customizable)' },
                  { label: 'Winding Material', value: 'Copper or Aluminum' },
                  { label: 'Cooling Method', value: 'ONAN / ONAF (Oil Natural, Air Natural / Oil Natural, Air Forced)' }
                ].map((spec, index) => (
                  <div key={index} className="bg-background p-4 rounded-luxury border border-border">
                    <div className="text-sm text-muted-foreground">{spec.label}</div>
                    <div className="font-semibold text-foreground">{spec.value}</div>
                  </div>
                ))
              ) : product.id === '6' ? (
                // Specific specifications for Reactors (150 kVAR)
                [
                  { label: 'Power Rating', value: '150 kVAR' },
                  { label: 'Voltage Class', value: '230V – 440V' },
                  { label: 'Frequency', value: '50 / 60 Hz' },
                  { label: 'Current Rating', value: '50A / 100A (customizable)' },
                  { label: 'Cooling Method', value: 'ONAN / ONAF (Oil Natural, Air Natural / Oil Natural, Air Forced)' },
                  { label: 'Protection', value: 'IP65 Rated, surge & overload protected' }
                ].map((spec, index) => (
                  <div key={index} className="bg-background p-4 rounded-luxury border border-border">
                    <div className="text-sm text-muted-foreground">{spec.label}</div>
                    <div className="font-semibold text-foreground">{spec.value}</div>
                  </div>
                ))
              ) : product.id === '7' ? (
                // Specific specifications for Instrument Transformer
                [
                  { label: 'Core', value: 'Toroidal cold-rolled grain oriented silicon steel core with stress-relief annealing' },
                  { label: 'Insulation Process', value: 'Vacuum drying process (48–96 hrs) and oil filling under pressure for enhanced insulation' },
                  { label: 'Testing', value: 'Routine tested with HV AC Resonant System for Partial Discharge, Capacitance & Tanδ' },
                  { label: 'Materials Rating', value: 'Materials rated for up to 105°C, with optional 155°C class rating' },
                  { label: 'Customization', value: 'Custom size selection based on ID, OD, stack height, and bushing specifications' }
                ].map((spec, index) => (
                  <div key={index} className="bg-background p-4 rounded-luxury border border-border">
                    <div className="text-sm text-muted-foreground">{spec.label}</div>
                    <div className="font-semibold text-foreground">{spec.value}</div>
                  </div>
                ))
              ) : product.id === '8' ? (
                // Specific specifications for Condenser Bushing
                [
                  { label: 'Voltage Ratings', value: '72.5 kV, 145 kV, 245 kV' },
                  { label: 'BIL (r.m.s./peak)', value: '155 kV / 350 kVp, 305 kV / 650 kVp, 460 kV / 1050 kVp' },
                  { label: 'Insulation Type', value: 'Oil-impregnated paper (OIP)' },
                  { label: 'Design', value: 'Corona-free with uniform condenser grading' },
                  { label: 'Temperature Class', value: 'Class B (130°C)' },
                  { label: 'Standards', value: 'IS 2099 / IEC 60137 compliant' }
                ].map((spec, index) => (
                  <div key={index} className="bg-background p-4 rounded-luxury border border-border">
                    <div className="text-sm text-muted-foreground">{spec.label}</div>
                    <div className="font-semibold text-foreground">{spec.value}</div>
                  </div>
                ))
              ) : (
                // Default specifications for any new products
                [
                  { label: 'Power Rating', value: '500 kVA' },
                  { label: 'Voltage Class', value: '230V – 440V' },
                  { label: 'Frequency', value: '50 / 60 Hz' },
                  { label: 'Current Rating', value: '50A / 100A (customizable)' },
                  { label: 'Cooling Method', value: 'ONAN / ONAF (Oil Natural, Air Natural / Oil Natural, Air Forced)' },
                  { label: 'Protection', value: 'IP65 Rated, surge & overload protected' }
                ].map((spec, index) => (
                  <div key={index} className="bg-background p-4 rounded-luxury border border-border">
                    <div className="text-sm text-muted-foreground">{spec.label}</div>
                    <div className="font-semibold text-foreground">{spec.value}</div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products
                .filter(p => p.category === product.category && p.id !== product.id)
                .slice(0, 4)
                .map((relatedProduct) => (
                  <div key={relatedProduct.id} className="bg-card border border-border rounded-luxury p-4 hover:shadow-premium transition-shadow">
                    <img 
                      src={relatedProduct.images ? relatedProduct.images[0] : (relatedProduct.image || '')}
                      alt={relatedProduct.name}
                      className="w-full aspect-square object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-semibold text-foreground mb-2">{relatedProduct.name}</h3>
                    <Button 
                      onClick={() => navigate(`/products/${relatedProduct.id}`)}
                      variant="outline" 
                      size="sm" 
                      className="w-full mt-3"
                    >
                      View Details
                    </Button>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Image Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 z-10 hover:bg-opacity-75 transition-all"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="relative">
              <img
                src={product.images ? product.images[selectedImageIndex] : (product.image || '')}
                alt={`${product.name} enlarged view`}
                className="w-full h-full object-contain max-h-[80vh]"
              />
              
              {product.images && product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>
            
            {product.images && (
              <div className="text-center text-white mt-4">
                <p className="text-lg">
                  {selectedImageIndex + 1} of {product.images.length}
                </p>
                <p className="text-sm text-gray-300 mt-1">
                  {product.name} - Image {selectedImageIndex + 1}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;