import React from 'react';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { cn } from '@/lib/utils';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Lock } from 'lucide-react';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const shippingCost = cart.totalPrice > 500 ? 0 : 25;
  const tax = cart.totalPrice * 0.08; // 8% tax
  const finalTotal = cart.totalPrice + shippingCost + tax;

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
            <div className="text-center animate-fade-in">
              <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
              <h1 className="font-display text-4xl font-bold text-foreground mb-4">
                Your Cart is Empty
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Looks like you haven't added any products to your cart yet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="luxury" size="lg" asChild>
                  <a href="/products">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Continue Shopping
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/">Go to Homepage</a>
                </Button>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        
        {/* Page Header */}
        <section className="py-12 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <h1 className="font-display text-5xl font-bold text-foreground mb-4">
                Shopping Cart
              </h1>
              <p className="text-lg text-muted-foreground">
                {cart.totalItems} {cart.totalItems === 1 ? 'item' : 'items'} in your cart
              </p>
            </div>
          </div>
        </section>

        {/* Cart Content */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Cart Header */}
                <div className="flex items-center justify-between pb-6 border-b border-border">
                  <h2 className="font-display text-2xl font-semibold">Cart Items</h2>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearCart}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Clear Cart
                  </Button>
                </div>

                {/* Cart Items List */}
                <div className="space-y-4">
                  {cart.items.map((item, index) => (
                    <div 
                      key={item.id}
                      className="bg-card border border-border rounded-luxury p-6 animate-fade-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center gap-6">
                        
                        {/* Product Image */}
                        <div className="flex-shrink-0">
                          <img 
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded-lg bg-subtle"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-grow">
                          <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                            {item.name}
                          </h3>
                          <p className="text-sm text-accent font-medium mb-2">
                            {item.category}
                          </p>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {item.description}
                          </p>
                          
                          {/* Stock Status */}
                          <div className="mt-2">
                            {item.inStock ? (
                              <span className="text-xs text-success font-medium">In Stock</span>
                            ) : (
                              <span className="text-xs text-destructive font-medium">Out of Stock</span>
                            )}
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          
                          <span className="w-12 text-center font-semibold">
                            {item.quantity}
                          </span>
                          
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        {/* Price & Remove */}
                        <div className="text-right">
                          <div className="font-bold text-lg text-foreground mb-2">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-destructive hover:text-destructive/80 transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>

                {/* Continue Shopping */}
                <div className="pt-6 border-t border-border">
                  <Button variant="outline" asChild>
                    <a href="/products">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Continue Shopping
                    </a>
                  </Button>
                </div>

              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-border rounded-luxury p-6 sticky top-24">
                  
                  <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                    Order Summary
                  </h3>

                  {/* Summary Details */}
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-semibold">${cart.totalPrice.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Shipping
                        {cart.totalPrice > 500 && (
                          <span className="text-success text-xs ml-1">(Free)</span>
                        )}
                      </span>
                      <span className="font-semibold">
                        ${shippingCost.toFixed(2)}
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax</span>
                      <span className="font-semibold">${tax.toFixed(2)}</span>
                    </div>
                    
                    <hr className="border-border" />
                    
                    <div className="flex justify-between text-lg">
                      <span className="font-semibold">Total</span>
                      <span className="font-bold text-accent">${finalTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Free Shipping Notice */}
                  {cart.totalPrice < 500 && (
                    <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-6">
                      <p className="text-sm text-accent-foreground">
                        Add <strong>${(500 - cart.totalPrice).toFixed(2)}</strong> more for free shipping!
                      </p>
                    </div>
                  )}

                  {/* Checkout Button */}
                  <Button 
                    variant="luxury" 
                    size="lg" 
                    className="w-full mb-4"
                    disabled={cart.items.some(item => !item.inStock)}
                  >
                    <Lock className="mr-2 h-4 w-4" />
                    Proceed to Checkout
                  </Button>

                  {/* Payment Methods */}
                  <div className="text-center text-xs text-muted-foreground">
                    <p className="mb-2">We accept:</p>
                    <div className="flex justify-center gap-2">
                      <span className="px-2 py-1 bg-muted rounded text-xs font-medium">Visa</span>
                      <span className="px-2 py-1 bg-muted rounded text-xs font-medium">MC</span>
                      <span className="px-2 py-1 bg-muted rounded text-xs font-medium">Amex</span>
                      <span className="px-2 py-1 bg-muted rounded text-xs font-medium">PayPal</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;