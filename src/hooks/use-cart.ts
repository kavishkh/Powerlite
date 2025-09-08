import { useState, useEffect } from 'react';
import { Product } from '@/components/ui/product-card';

export interface CartItem extends Product {
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

const CART_STORAGE_KEY = 'powerlite-cart';

export const useCart = () => {
  const [cart, setCart] = useState<Cart>({
    items: [],
    totalItems: 0,
    totalPrice: 0
  });

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCart(parsedCart);
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const calculateTotals = (items: CartItem[]) => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    return { totalItems, totalPrice };
  };

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart(currentCart => {
      const existingItemIndex = currentCart.items.findIndex(item => item.id === product.id);
      
      let newItems: CartItem[];
      
      if (existingItemIndex >= 0) {
        // Update existing item
        newItems = currentCart.items.map((item, index) => 
          index === existingItemIndex 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Add new item
        newItems = [...currentCart.items, { ...product, quantity }];
      }

      const totals = calculateTotals(newItems);
      
      return {
        items: newItems,
        ...totals
      };
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(currentCart => {
      const newItems = currentCart.items.filter(item => item.id !== productId);
      const totals = calculateTotals(newItems);
      
      return {
        items: newItems,
        ...totals
      };
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart(currentCart => {
      const newItems = currentCart.items.map(item =>
        item.id === productId ? { ...item, quantity } : item
      );
      const totals = calculateTotals(newItems);
      
      return {
        items: newItems,
        ...totals
      };
    });
  };

  const clearCart = () => {
    setCart({
      items: [],
      totalItems: 0,
      totalPrice: 0
    });
  };

  const getCartItem = (productId: string) => {
    return cart.items.find(item => item.id === productId);
  };

  const isInCart = (productId: string) => {
    return cart.items.some(item => item.id === productId);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartItem,
    isInCart
  };
};