import React, { useState } from 'react';
import { User, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        <h1 className="text-4xl lg:text-6xl font-bold text-center text-white uppercase mb-16">
          <span className="text-amber-500">Contact</span> Us
        </h1>

        <div className="flex flex-col lg:flex-row bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="lg:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1629452077891!5m2!1sen!2sin"
              className="w-full h-64 lg:h-full"
              allowFullScreen
              loading="lazy"
              title="Coffee Shop Location"
            ></iframe>
          </div>

          <div className="lg:w-1/2 p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="text-center">
              <h3 className="text-3xl font-bold text-white uppercase mb-8">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-center bg-gray-900 border border-gray-700 rounded-lg">
                  <span className="p-4 text-white">
                    <User className="w-6 h-6" />
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="flex-1 p-4 bg-transparent text-white text-lg outline-none placeholder-gray-400"
                    required
                  />
                </div>

                <div className="flex items-center bg-gray-900 border border-gray-700 rounded-lg">
                  <span className="p-4 text-white">
                    <Mail className="w-6 h-6" />
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="flex-1 p-4 bg-transparent text-white text-lg outline-none placeholder-gray-400"
                    required
                  />
                </div>

                <div className="flex items-center bg-gray-900 border border-gray-700 rounded-lg">
                  <span className="p-4 text-white">
                    <Phone className="w-6 h-6" />
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="flex-1 p-4 bg-transparent text-white text-lg outline-none placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-8 bg-amber-500 text-white py-4 px-8 text-lg font-semibold hover:bg-amber-600 transition-all duration-300 hover:tracking-wider rounded-lg shadow-lg"
              >
                Contact Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;