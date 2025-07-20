import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1920)',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-16">
        <div className="text-white">
          <h3 className="text-4xl lg:text-6xl font-bold uppercase mb-6 leading-tight">
            Fresh Coffee in the Morning
          </h3>
          <p className="text-xl lg:text-2xl font-light leading-relaxed mb-8 text-gray-200">
            Start your day with our premium, freshly roasted coffee beans. 
            Experience the perfect blend of flavor and aroma that awakens your senses.
          </p>
          <a
            href="#menu"
            className="inline-block bg-amber-500 text-white px-8 py-4 text-lg font-semibold hover:bg-amber-600 transition-all duration-300 hover:tracking-wider rounded-lg shadow-lg"
          >
            Get Yours Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;