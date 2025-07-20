import React from 'react';
import { useCart } from '../contexts/CartContext';

const Menu: React.FC = () => {
  const { addItem } = useCart();

  const menuItems = [
    {
      id: 1,
      name: 'Classic Espresso',
      description: 'Rich and bold espresso shot',
      price: 15.99,
      originalPrice: 20.99,
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      name: 'Cappuccino Supreme',
      description: 'Creamy cappuccino with perfect foam',
      price: 18.99,
      originalPrice: 23.99,
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 3,
      name: 'Mocha Delight',
      description: 'Chocolate and coffee perfection',
      price: 21.99,
      originalPrice: 26.99,
      image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 4,
      name: 'Vanilla Latte',
      description: 'Smooth latte with vanilla essence',
      price: 19.99,
      originalPrice: 24.99,
      image: 'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 5,
      name: 'Caramel Macchiato',
      description: 'Sweet caramel with espresso',
      price: 22.99,
      originalPrice: 27.99,
      image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 6,
      name: 'Americano Gold',
      description: 'Premium americano blend',
      price: 16.99,
      originalPrice: 21.99,
      image: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const handleAddToCart = (item: typeof menuItems[0]) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: 'menu'
    });
  };

  return (
    <section id="menu" className="py-16 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        <h1 className="text-4xl lg:text-6xl font-bold text-center text-white uppercase mb-16">
          Our <span className="text-amber-500">Menu</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-8 text-center hover:bg-white hover:text-gray-800 transition-all duration-300 group shadow-xl"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 mx-auto mb-6 rounded-full object-cover shadow-lg"
              />
              <h3 className="text-white group-hover:text-gray-800 text-2xl font-bold mb-2">
                {item.name}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-600 mb-4">
                {item.description}
              </p>
              <div className="text-white group-hover:text-gray-800 text-2xl font-bold mb-6">
                ${item.price}{' '}
                <span className="text-lg line-through font-normal text-gray-500">
                  ${item.originalPrice}
                </span>
              </div>
              <button
                onClick={() => handleAddToCart(item)}
                className="bg-amber-500 text-white px-8 py-3 rounded-lg hover:bg-amber-600 transition-colors font-semibold"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;