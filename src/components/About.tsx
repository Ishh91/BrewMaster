import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        <h1 className="text-4xl lg:text-6xl font-bold text-center text-white uppercase mb-16">
          <span className="text-amber-500">About</span> Us
        </h1>

        <div className="flex flex-col lg:flex-row items-center bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="lg:w-1/2">
            <img
              src="https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="About our coffee"
              className="w-full h-64 lg:h-full object-cover"
            />
          </div>
          <div className="lg:w-1/2 p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              What Makes Our Coffee Special?
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Our passion for coffee drives us to source only the finest beans from sustainable farms around the world. 
              Each cup is crafted with precision, using traditional brewing methods combined with modern techniques to 
              deliver an exceptional coffee experience.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              From our signature roasting process to our skilled baristas, every step is designed to bring out the 
              unique flavors and aromas that make our coffee truly special.
            </p>
            <a
              href="#menu"
              className="inline-block bg-amber-500 text-white px-8 py-4 text-lg font-semibold hover:bg-amber-600 transition-all duration-300 hover:tracking-wider rounded-lg shadow-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;