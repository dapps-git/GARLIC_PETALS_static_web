import React, { createContext, useContext, useState, useEffect } from 'react';

export const PRODUCTS = [
  {
    id: 'garlic-1kg',
    weight: '1 kg',
    name: 'Petals Peeled Garlic - 1 kg',
    price: 200,
    originalPrice: 200,
    discountAmount: 0,
    unitPrice: 200,
    kgValue: 1,
    image: '/images/peeled-garlic-vacuum-pouch.jpg',
    alt: 'Petals Peeled Garlic 1 kg Vacuum Pouch'
  },
  {
    id: 'garlic-5kg',
    weight: '5 kg',
    name: 'Petals Peeled Garlic - 5 kg',
    price: 900,
    originalPrice: 1000,
    discountAmount: 100,
    unitPrice: 180,
    kgValue: 5,
    image: '/images/peeled-garlic-vacuum-pouch.jpg',
    alt: 'Petals Peeled Garlic 5 kg Vacuum Pouch'
  },
  {
    id: 'garlic-10kg',
    weight: '10 kg',
    name: 'Petals Peeled Garlic - 10 kg',
    price: 1900,
    originalPrice: 2000,
    discountAmount: 100,
    unitPrice: 190,
    kgValue: 10,
    image: '/images/peeled-garlic-vacuum-pouch.jpg',
    alt: 'Petals Peeled Garlic 10 kg Vacuum Pouch'
  }
];

const defaultCartState = {
  products: PRODUCTS,
  cartItems: [],
  addToCart: () => {},
  updateQuantity: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  totalItems: 0,
  totalAmount: 0,
  isCartOpen: false,
  openCart: () => {},
  closeCart: () => {}
};

const CartContext = createContext(defaultCartState);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Load from localStorage safely on client mount
  useEffect(() => {
    setIsMounted(true);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const saved = localStorage.getItem('petals_cart_items');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setCartItems(parsed);
          }
        }
      }
    } catch (e) {
      // storage unavailable or restricted
    }
  }, []);

  // Save to localStorage safely
  useEffect(() => {
    if (!isMounted) return;
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('petals_cart_items', JSON.stringify(cartItems));
      }
    } catch (e) {
      // storage unavailable
    }
  }, [cartItems, isMounted]);

  const addToCart = (product, quantity = 1, shouldOpenCart = true) => {
    if (!product) return;
    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      }
      return [...prev, { ...product, quantity }];
    });

    if (shouldOpenCart) {
      setIsCartOpen(true);
    }
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prev =>
      prev.map(item => item.id === id ? { ...item, quantity: newQuantity } : item)
    );
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const totalAmount = cartItems.reduce((sum, item) => sum + ((item.price || 0) * (item.quantity || 1)), 0);

  return (
    <CartContext.Provider
      value={{
        products: PRODUCTS,
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalItems,
        totalAmount,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false)
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context || defaultCartState;
}
