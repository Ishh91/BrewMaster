import React, { useState } from 'react';
import { Calendar, Clock, Users, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

const BookingPage: React.FC = () => {
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    specialRequests: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
    '20:00', '20:30', '21:00'
  ];

  const occasions = [
    'Casual Meeting',
    'Business Meeting',
    'Date',
    'Birthday Celebration',
    'Anniversary',
    'Study Session',
    'Catch up with Friends',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', bookingData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setBookingData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        occasion: '',
        specialRequests: '',
      });
    }, 3000);
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Booking Confirmed!</h2>
          <p className="text-xl text-gray-300 mb-8">
            Thank you for your reservation. We'll send you a confirmation email shortly.
          </p>
          <div className="bg-gray-800 rounded-2xl p-6 max-w-md mx-auto">
            <h3 className="text-white text-lg font-semibold mb-4">Booking Details</h3>
            <div className="space-y-2 text-gray-300">
              <p><strong>Name:</strong> {bookingData.name}</p>
              <p><strong>Date:</strong> {bookingData.date}</p>
              <p><strong>Time:</strong> {bookingData.time}</p>
              <p><strong>Guests:</strong> {bookingData.guests}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-16 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-white uppercase mb-6">
            Book Your <span className="text-amber-500">Table</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Reserve your perfect spot at BrewMaster and enjoy an exceptional coffee experience with us.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <div className="bg-gray-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8">Make a Reservation</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={bookingData.name}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={bookingData.email}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-semibold mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={bookingData.phone}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              {/* Reservation Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={bookingData.date}
                    onChange={handleInputChange}
                    min={today}
                    className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-amber-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Time *
                  </label>
                  <select
                    name="time"
                    value={bookingData.time}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-amber-500"
                    required
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">
                    <Users className="w-4 h-4 inline mr-1" />
                    Guests *
                  </label>
                  <select
                    name="guests"
                    value={bookingData.guests}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-amber-500"
                    required
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num.toString()}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-semibold mb-2">Occasion</label>
                <select
                  name="occasion"
                  value={bookingData.occasion}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-amber-500"
                >
                  <option value="">Select occasion (optional)</option>
                  {occasions.map((occasion) => (
                    <option key={occasion} value={occasion}>{occasion}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white text-sm font-semibold mb-2">Special Requests</label>
                <textarea
                  name="specialRequests"
                  value={bookingData.specialRequests}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 resize-none"
                  placeholder="Any special requests or dietary requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 text-white py-4 px-8 text-lg font-semibold hover:bg-amber-600 transition-all duration-300 hover:tracking-wider rounded-lg shadow-lg"
              >
                Reserve Table
              </button>
            </form>
          </div>

          {/* Information Panel */}
          <div className="space-y-8">
            {/* Opening Hours */}
            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Opening Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-gray-300">
                  <span>Monday - Friday</span>
                  <span className="text-amber-500 font-semibold">8:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-gray-300">
                  <span>Saturday</span>
                  <span className="text-amber-500 font-semibold">8:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-gray-300">
                  <span>Sunday</span>
                  <span className="text-amber-500 font-semibold">9:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 text-amber-500 mr-3" />
                  <span>123 Coffee Street, Brew City, BC 12345</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 text-amber-500 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 text-amber-500 mr-3" />
                  <span>reservations@brewmaster.com</span>
                </div>
              </div>
            </div>

            {/* Booking Policy */}
            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Booking Policy</h3>
              <div className="space-y-3 text-gray-300">
                <p>• Reservations can be made up to 30 days in advance</p>
                <p>• Tables are held for 15 minutes past reservation time</p>
                <p>• Cancellations must be made at least 2 hours in advance</p>
                <p>• Large groups (8+) may require a deposit</p>
                <p>• We accommodate dietary restrictions with advance notice</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;