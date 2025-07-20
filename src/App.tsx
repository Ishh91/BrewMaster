import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import BookingPage from './pages/BookingPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import Footer from './components/Footer';
import CartNotification from './components/CartNotification';
import { useCart } from './contexts/CartContext';

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  
  const { state: cartState } = useCart();
  const [prevItemCount, setPrevItemCount] = useState(0);

  // Show notification when item is added to cart
  useEffect(() => {
    if (cartState.itemCount > prevItemCount) {
      setNotificationMessage('Item added to cart!');
      setShowNotification(true);
    }
    setPrevItemCount(cartState.itemCount);
  }, [cartState.itemCount, prevItemCount]);

  // Close all menus when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsSearchOpen(false);
      setIsCartOpen(false);
      setIsMobileMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <Header
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      
      <Footer />
      
      <CartNotification
        show={showNotification}
        message={notificationMessage}
        onClose={() => setShowNotification(false)}
      />
    </div>
  );
}

export default App;