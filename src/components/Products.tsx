import React from 'react';
import { ShoppingCart, Heart, Eye, Star } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Products: React.FC = () => {
  const { addItem } = useCart();

  const products = [
    {
      id: 1,
      name: 'Premium Coffee Beans',
      price: 24.99,
      originalPrice: 29.99,
      rating: 4.5,
      image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      name: 'Artisan Roast',
      price: 27.99,
      originalPrice: 32.99,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 3,
      name: 'Signature Blend',
      price: 22.99,
      originalPrice: 27.99,
      rating: 4.6,
      image: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-5 h-5 fill-amber-500/50 text-amber-500" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-5 h-5 text-gray-400" />);
    }

    return stars;
  };

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id + 100, // Offset to avoid conflicts with menu items
      name: product.name,
      price: product.price,
      image: product.image,
      category: 'product'
    });
  };

  return (
    <section id="products" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        <h1 className="text-4xl lg:text-6xl font-bold text-center text-white uppercase mb-16">
          Our <span className="text-amber-500">Products</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex justify-center space-x-4 mb-6">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center text-white hover:bg-amber-500 hover:border-amber-500 transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center text-white hover:bg-amber-500 hover:border-amber-500 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center text-white hover:bg-amber-500 hover:border-amber-500 transition-colors">
                  <Eye className="w-5 h-5" />
                </button>
              </div>

              <div className="mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-48 h-48 mx-auto object-cover rounded-2xl shadow-lg"
                />
              </div>

              <div>
                <h3 className="text-white text-2xl font-bold mb-4">{product.name}</h3>
                <div className="flex justify-center mb-4">
                  {renderStars(product.rating)}
                </div>
                <div className="text-white text-2xl font-bold">
                  ${product.price}{' '}
                  <span className="text-lg line-through font-normal text-gray-500">
                    ${product.originalPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;