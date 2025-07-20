import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Coffee, Search, Heart, User, ShoppingCart, Menu, X, Phone, MapPin, Clock, Star } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface HeaderProps {
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  isSearchOpen,
  setIsSearchOpen,
  isCartOpen,
  setIsCartOpen,
  isMobileMenuOpen,
  setIsMobileMenuOpen
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { state, removeFromCart, updateQuantity, clearCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Booking', href: '/booking' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Information Bar */}
      <div className="bg-gradient-to-r from-amber-900 to-amber-800 text-white py-3 px-4 mb-1">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-6 mb-2 sm:mb-0">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>123 Coffee Street, City</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Mon-Sun: 6AM-10PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="font-medium">Special: 20% off all premium blends today!</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
          : 'bg-transparent'
      } ${isScrolled ? '' : 'mt-12'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 py-2">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Coffee className={`w-10 h-10 transition-all duration-300 ${
                  isScrolled ? 'text-amber-600' : 'text-white'
                } group-hover:scale-110 group-hover:rotate-12`} />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full opacity-20 animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <h1 className={`text-2xl font-bold transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent' 
                    : 'text-white'
                }`}>
                  Brew Haven
                </h1>
                <p className={`text-sm transition-all duration-300 ${
                  isScrolled ? 'text-gray-600' : 'text-amber-100'
                }`}>
                  Premium Coffee Experience
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative px-4 py-2 text-lg font-medium transition-all duration-300 group ${
                    isActive(link.href)
                      ? isScrolled
                        ? 'text-amber-600'
                        : 'text-amber-200'
                      : isScrolled
                        ? 'text-gray-700 hover:text-amber-600'
                        : 'text-white hover:text-amber-200'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transform transition-all duration-300 ${
                    isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-amber-600 hover:bg-amber-50' 
                    : 'text-white hover:text-amber-200 hover:bg-white/10'
                }`}
              >
                <Search className="w-6 h-6" />
              </button>

              {/* Wishlist */}
              <button className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-amber-600 hover:bg-amber-50' 
                  : 'text-white hover:text-amber-200 hover:bg-white/10'
              }`}>
                <Heart className="w-6 h-6" />
              </button>

              {/* Account */}
              <button className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-amber-600 hover:bg-amber-50' 
                  : 'text-white hover:text-amber-200 hover:bg-white/10'
              }`}>
                <User className="w-6 h-6" />
              </button>

              {/* Cart */}
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className={`relative p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-amber-600 hover:bg-amber-50' 
                    : 'text-white hover:text-amber-200 hover:bg-white/10'
                }`}
              >
                <ShoppingCart className="w-6 h-6" />
                {state.itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-pulse">
                    {state.itemCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-amber-600 hover:bg-amber-50' 
                    : 'text-white hover:text-amber-200 hover:bg-white/10'
                }`}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-200/20 px-4 py-4">
            <div className="max-w-7xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for coffee, pastries, or anything..."
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                  autoFocus
                />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <Coffee className="w-8 h-8 text-amber-600" />
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Brew Haven</h2>
                    <p className="text-sm text-gray-600">Premium Coffee</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="space-y-4">
                {navigation.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 text-lg font-medium rounded-lg transition-all duration-300 ${
                      isActive(link.href)
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white'
                        : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Special Offer!</h3>
                  <p className="text-sm">Get 20% off your first order with code WELCOME20</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}></div>
          <div className="fixed top-0 right-0 h-full w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-2 rounded-lg">
                    <ShoppingCart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>
                    <p className="text-sm text-gray-600">{state.itemCount} items</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {state.items.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
                  <p className="text-gray-600 mb-6">Add some delicious items to get started!</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:from-amber-600 hover:to-amber-700 transition-all duration-300"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {state.items.map((item) => (
                      <div key={item.id} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200">
                        <div className="flex items-center space-x-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900">{item.name}</h3>
                            <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
                            <div className="flex items-center space-x-3 mt-2">
                              <button
                                onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors duration-200"
                              >
                                -
                              </button>
                              <span className="font-medium">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center hover:bg-amber-600 transition-colors duration-200"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-700 text-sm mt-1"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-bold text-gray-900">Total:</span>
                      <span className="text-2xl font-bold text-amber-600">${state.total.toFixed(2)}</span>
                    </div>
                    <div className="space-y-3">
                      <Link
                        to="/checkout"
                        className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 rounded-lg font-medium hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 block text-center"
                      >
                        Proceed to Checkout
                      </Link>
                      <button
                        onClick={clearCart}
                        className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-300"
                      >
                        Clear Cart
                      </button>
                      <Link
                        to="/cart"
                        className="w-full bg-gray-600 text-white py-3 rounded-lg font-medium hover:bg-gray-500 transition-colors duration-300 block text-center"
                      >
                        View Full Cart
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;