import { useState } from 'react';
import { ArrowLeft, CreditCard, Lock, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';

const Checkout = () => {
  const { state } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('card');
  
  const shippingCost = state.total > 1000 ? 0 : 50;
  const taxRate = 0.08;
  const taxAmount = state.total * taxRate;
  const finalTotal = state.total + shippingCost + taxAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Processing order...');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link to="/cart">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Cart
              </Button>
            </Link>
            <Separator orientation="vertical" className="h-6" />
            <h1 className="heading-section">Checkout</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Checkout Form */}
            <div className="space-y-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <div className="surface-card p-6">
                  <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" required />
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="surface-card p-6">
                  <h2 className="text-xl font-semibold mb-6">Shipping Address</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="address">Street Address</Label>
                      <Input id="address" required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" required />
                      </div>
                      <div>
                        <Label htmlFor="state">State/Province</Label>
                        <Input id="state" required />
                      </div>
                      <div>
                        <Label htmlFor="zip">ZIP/Postal Code</Label>
                        <Input id="zip" required />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Input id="country" defaultValue="United States" required />
                    </div>
                  </div>
                </div>

                {/* Shipping Method */}
                <div className="surface-card p-6">
                  <h2 className="text-xl font-semibold mb-6">Shipping Method</h2>
                  <RadioGroup defaultValue="standard" className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="standard" id="standard" />
                        <div>
                          <Label htmlFor="standard" className="font-medium">Standard Shipping</Label>
                          <p className="text-sm text-muted-foreground">5-7 business days</p>
                        </div>
                      </div>
                      <span className="font-medium">{shippingCost === 0 ? 'Free' : `$${shippingCost}`}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="express" id="express" />
                        <div>
                          <Label htmlFor="express" className="font-medium">Express Shipping</Label>
                          <p className="text-sm text-muted-foreground">2-3 business days</p>
                        </div>
                      </div>
                      <span className="font-medium">$25.00</span>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="overnight" id="overnight" />
                        <div>
                          <Label htmlFor="overnight" className="font-medium">Overnight Shipping</Label>
                          <p className="text-sm text-muted-foreground">Next business day</p>
                        </div>
                      </div>
                      <span className="font-medium">$50.00</span>
                    </div>
                  </RadioGroup>
                </div>

                {/* Payment Method */}
                <div className="surface-card p-6">
                  <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4" />
                        Credit/Debit Card
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal">PayPal</Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="bank" id="bank" />
                      <Label htmlFor="bank">Bank Transfer</Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === 'card' && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" required />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" required />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input id="cardName" required />
                      </div>
                    </div>
                  )}
                </div>

                {/* Place Order Button */}
                <Button type="submit" size="lg" className="w-full">
                  <Lock className="h-4 w-4 mr-2" />
                  Place Order - ${finalTotal.toFixed(2)}
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="surface-premium p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                
                {/* Order Items */}
                <div className="space-y-4 mb-6">
                  {state.items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm truncate">{item.name}</h4>
                        <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <div className="text-sm font-medium">
                        ${(item.price * item.quantity).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
                
                <Separator className="mb-6" />
                
                {/* Price Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${state.total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>{shippingCost === 0 ? 'Free' : `$${shippingCost}`}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>${taxAmount.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>${finalTotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Security Info */}
                <div className="bg-accent/50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-sm">
                    <Lock className="h-4 w-4 text-success" />
                    <span className="font-medium">Secure Checkout</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Your payment information is encrypted and secure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;