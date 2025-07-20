import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Lock, CheckCircle, MapPin, User, Mail, Phone } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CheckoutPage: React.FC = () => {
  const { state, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const [formData, setFormData] = useState({
    // Shipping Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    
    // Payment Information
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    
    // Order Notes
    orderNotes: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsProcessing(false);
    setOrderComplete(true);
    clearCart();
  };

  const steps = [
    { id: 1, name: 'Shipping', icon: MapPin },
    { id: 2, name: 'Payment', icon: CreditCard },
    { id: 3, name: 'Review', icon: CheckCircle },
  ];

  if (state.items.length === 0 && !orderComplete) {
    return (
      <div className="min-h-screen bg-gray-900 pt-32">
        <div className="max-w-4xl mx-auto px-4 lg:px-16 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Your Cart is Empty</h1>
          <p className="text-xl text-gray-400 mb-8">
            Add some items to your cart before proceeding to checkout.
          </p>
          <Link
            to="/"
            className="inline-flex items-center bg-amber-500 text-white px-8 py-4 text-lg font-semibold hover:bg-amber-600 transition-all duration-300 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gray-900 pt-32">
        <div className="max-w-4xl mx-auto px-4 lg:px-16 py-16 text-center">
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-8" />
          <h1 className="text-4xl font-bold text-white mb-4">Order Confirmed!</h1>
          <p className="text-xl text-gray-400 mb-8">
            Thank you for your purchase. We'll send you a confirmation email shortly.
          </p>
          <div className="bg-gray-800 rounded-2xl p-8 max-w-md mx-auto mb-8">
            <h3 className="text-white text-xl font-semibold mb-4">Order Summary</h3>
            <div className="space-y-2 text-gray-300">
              <p><strong>Order Total:</strong> ${(state.total * 1.08).toFixed(2)}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Delivery Address:</strong> {formData.address}, {formData.city}</p>
            </div>
          </div>
          <Link
            to="/"
            className="inline-flex items-center bg-amber-500 text-white px-8 py-4 text-lg font-semibold hover:bg-amber-600 transition-all duration-300 rounded-lg"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-32">
      <div className="max-w-7xl mx-auto px-4 lg:px-16 py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white uppercase mb-4">
              <span className="text-amber-500">Checkout</span>
            </h1>
            <p className="text-xl text-gray-400">
              Complete your order securely
            </p>
          </div>
          <Link
            to="/cart"
            className="inline-flex items-center text-amber-500 hover:text-amber-400 transition-colors font-semibold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Cart
          </Link>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                  currentStep >= step.id
                    ? 'bg-amber-500 border-amber-500 text-white'
                    : 'border-gray-600 text-gray-400'
                }`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <span className={`ml-3 font-semibold ${
                  currentStep >= step.id ? 'text-amber-500' : 'text-gray-400'
                }`}>
                  {step.name}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 ml-8 ${
                    currentStep > step.id ? 'bg-amber-500' : 'bg-gray-600'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-gray-800 rounded-2xl p-8">
              {/* Step 1: Shipping Information */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                    <MapPin className="w-6 h-6 mr-3 text-amber-500" />
                    Shipping Information
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-white text-sm font-semibold mb-2">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-semibold mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-white text-sm font-semibold mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-semibold mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-white text-sm font-semibold mb-2">Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                      placeholder="Enter your street address"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div>
                      <label className="block text-white text-sm font-semibold mb-2">City *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                        placeholder="City"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-semibold mb-2">State *</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                        placeholder="State"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-semibold mb-2">ZIP Code *</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                        placeholder="ZIP Code"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="w-full bg-amber-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-amber-600 transition-all duration-300"
                  >
                    Continue to Payment
                  </button>
                </div>
              )}

              {/* Step 2: Payment Information */}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                    <CreditCard className="w-6 h-6 mr-3 text-amber-500" />
                    Payment Information
                  </h2>

                  <div className="mb-6">
                    <label className="block text-white text-sm font-semibold mb-2">Cardholder Name *</label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                      placeholder="Name on card"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-white text-sm font-semibold mb-2">Card Number *</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-white text-sm font-semibold mb-2">Expiry Date *</label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-semibold mb-2">CVV *</label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="flex-1 bg-gray-700 text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300"
                    >
                      Back to Shipping
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="flex-1 bg-amber-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-amber-600 transition-all duration-300"
                    >
                      Review Order
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Review Order */}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                    <CheckCircle className="w-6 h-6 mr-3 text-amber-500" />
                    Review Your Order
                  </h2>

                  <div className="space-y-6 mb-8">
                    <div className="bg-gray-900 rounded-lg p-6">
                      <h3 className="text-white font-semibold mb-4">Shipping Address</h3>
                      <p className="text-gray-300">
                        {formData.firstName} {formData.lastName}<br />
                        {formData.address}<br />
                        {formData.city}, {formData.state} {formData.zipCode}<br />
                        {formData.email} | {formData.phone}
                      </p>
                    </div>

                    <div className="bg-gray-900 rounded-lg p-6">
                      <h3 className="text-white font-semibold mb-4">Payment Method</h3>
                      <p className="text-gray-300">
                        **** **** **** {formData.cardNumber.slice(-4)}<br />
                        {formData.cardName}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-white text-sm font-semibold mb-2">Order Notes (Optional)</label>
                    <textarea
                      name="orderNotes"
                      value={formData.orderNotes}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 resize-none"
                      placeholder="Any special instructions for your order..."
                    />
                  </div>

                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="flex-1 bg-gray-700 text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300"
                    >
                      Back to Payment
                    </button>
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center disabled:opacity-50"
                    >
                      {isProcessing ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          <Lock className="w-5 h-5 mr-2" />
                          Place Order
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-2xl p-8 sticky top-32">
              <h2 className="text-2xl font-bold text-white mb-8">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-white font-medium">{item.name}</h3>
                      <p className="text-gray-400 text-sm">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-white font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-700 pt-6 space-y-4">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>${state.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Tax</span>
                  <span>${(state.total * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex justify-between text-xl font-bold text-white">
                    <span>Total</span>
                    <span className="text-amber-500">
                      ${(state.total * 1.08).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="flex items-center justify-center text-gray-400 text-sm mb-4">
                  <Lock className="w-4 h-4 mr-2" />
                  Secure SSL Encrypted Checkout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;