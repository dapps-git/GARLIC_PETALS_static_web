import React, { createContext, useContext, useState, useEffect } from 'react';

export const PRODUCTS = [
  {
    id: 'fermented-garlic',
    title: 'Fermented Garlic',
    name: 'Petals Fermented Garlic - 1 kg',
    weight: '1 kg',
    price: 300,
    originalPrice: 300,
    discountAmount: 0,
    unitPrice: 300,
    kgValue: 1,
    rating: 4.9,
    reviewCount: 128,
    image: '/images/product-fermented-garlic.jpg',
    alt: 'Petals Fermented Garlic 1 kg Jar'
  },
  {
    id: 'half-bottle-garlic',
    title: 'Half Bottle Garlic',
    name: 'Petals Half Bottle Garlic - 1 kg',
    weight: '1 kg',
    price: 250,
    originalPrice: 250,
    discountAmount: 0,
    unitPrice: 250,
    kgValue: 1,
    rating: 4.8,
    reviewCount: 142,
    image: '/images/product-half-bottle.jpg',
    alt: 'Petals Half Bottle Peeled Garlic 1 kg'
  },
  {
    id: 'half-packet-garlic',
    title: 'Half Packet Garlic',
    name: 'Petals Half Packet Garlic - 1 kg',
    weight: '1 kg',
    price: 200,
    originalPrice: 200,
    discountAmount: 0,
    unitPrice: 200,
    kgValue: 1,
    rating: 4.8,
    reviewCount: 96,
    image: '/images/product-half-packet.jpg',
    alt: 'Petals Half Packet Peeled Garlic 1 kg'
  },
  {
    id: 'honey-garlic',
    title: 'Honey Garlic',
    name: 'Petals Honey Garlic - 1 kg',
    weight: '1 kg',
    price: 400,
    originalPrice: 400,
    discountAmount: 0,
    unitPrice: 400,
    kgValue: 1,
    rating: 4.9,
    reviewCount: 114,
    image: '/images/product-honey-garlic.jpg',
    alt: 'Petals Honey Garlic 1 kg Jar'
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
