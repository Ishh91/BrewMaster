import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Plus, Minus, Trash2, ArrowLeft, ArrowRight } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartPage: React.FC = () => {
  const { state, updateQuantity, removeItem, clearCart } = useCart();

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 pt-32">
        <div className="max-w-4xl mx-auto px-4 lg:px-16 py-16">
          <div className="text-center">
            <ShoppingCart className="w-24 h-24 text-gray-600 mx-auto mb-8" />
            <h1 className="text-4xl font-bold text-white mb-4">Your Cart is Empty</h1>
            <p className="text-xl text-gray-400 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link
              to="/"
              className="inline-flex items-center bg-amber-500 text-white px-8 py-4 text-lg font-semibold hover:bg-amber-600 transition-all duration-300 rounded-lg shadow-lg"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Continue Shopping
            </Link>
          </div>
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
              Shopping <span className="text-amber-500">Cart</span>
            </h1>
            <p className="text-xl text-gray-400">
              {state.itemCount} {state.itemCount === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center text-amber-500 hover:text-amber-400 transition-colors font-semibold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Continue Shopping
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">Cart Items</h2>
                <button
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-400 transition-colors font-semibold"
                >
                  Clear All
                </button>
              </div>

              <div className="space-y-6">
                {state.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-900 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-6">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                        <p className="text-gray-400 mb-4">
                          Category: <span className="capitalize">{item.category}</span>
                        </p>
                        <p className="text-2xl font-bold text-amber-500">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-3 bg-gray-800 rounded-lg p-2">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors text-white"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-white font-bold text-lg w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center hover:bg-amber-600 transition-colors text-white"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="text-xl font-bold text-white mb-2">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-400 transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-2xl p-8 sticky top-32">
              <h2 className="text-2xl font-bold text-white mb-8">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal ({state.itemCount} items)</span>
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

              <Link
                to="/checkout"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 flex items-center justify-center group"
              >
                Proceed to Checkout
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">
                  Secure checkout powered by SSL encryption
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;