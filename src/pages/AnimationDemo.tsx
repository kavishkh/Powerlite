import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AnimationDemo = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <ScrollAnimation animationClass="animate-fade-in">
                <h1 className="font-display text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Scroll Animations Demo
                </h1>
              </ScrollAnimation>
              
              <ScrollAnimation animationClass="animate-fade-in-up" delay={200}>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Scroll down to see various animation effects in action
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Animation Examples */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Fade In */}
              <ScrollAnimation animationClass="animate-fade-in">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Fade In</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Simple fade in animation when element enters viewport
                    </p>
                    <div className="h-32 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">Fade In</span>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              {/* Fade In Up */}
              <ScrollAnimation animationClass="animate-fade-in-up" delay={100}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Fade In Up</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Fade in with upward movement for a subtle entrance
                    </p>
                    <div className="h-32 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">Fade In Up</span>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              {/* Slide Up */}
              <ScrollAnimation animationClass="animate-slide-up" delay={200}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Slide Up</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Smooth slide up animation with custom easing
                    </p>
                    <div className="h-32 bg-gradient-luxury rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">Slide Up</span>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              {/* Pop In */}
              <ScrollAnimation animationClass="animate-pop-in" delay={300}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Pop In</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Bouncy entrance animation with scale transform
                    </p>
                    <div className="h-32 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">Pop In</span>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              {/* Fade In Left */}
              <ScrollAnimation animationClass="animate-fade-in-left" delay={400}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Fade In Left</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Fade in from the left side of the screen
                    </p>
                    <div className="h-32 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">Fade In Left</span>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              {/* Fade In Right */}
              <ScrollAnimation animationClass="animate-fade-in-right" delay={500}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Fade In Right</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Fade in from the right side of the screen
                    </p>
                    <div className="h-32 bg-gradient-luxury rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">Fade In Right</span>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Staggered Animation Example */}
        <section className="py-20 bg-subtle">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ScrollAnimation animationClass="animate-fade-in" className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-foreground mb-4">
                Staggered Animations
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Elements animating in sequence with delays
              </p>
            </ScrollAnimation>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <ScrollAnimation 
                  key={item}
                  animationClass="animate-pop-in"
                  delay={item * 150}
                >
                  <div className="bg-card border border-border rounded-luxury p-6 text-center h-full">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">{item}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-2">Item {item}</h3>
                    <p className="text-muted-foreground">
                      This item animates with a {item * 150}ms delay
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Hook Example */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ScrollAnimation animationClass="animate-fade-in" className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-foreground mb-4">
                Custom Hook Implementation
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Using the useScrollAnimation hook for granular control
              </p>
            </ScrollAnimation>

            <div className="flex justify-center">
              <ScrollAnimation animationClass="animate-slide-up">
                <Card className="max-w-2xl">
                  <CardHeader>
                    <CardTitle>How It Works</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      The useScrollAnimation hook provides fine-grained control over scroll-triggered animations:
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Uses Intersection Observer API for performance</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Provides visibility state for custom animations</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Supports all HTML element types with TypeScript generics</span>
                      </li>
                    </ul>
                    <Button asChild>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        View Documentation
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AnimationDemo;