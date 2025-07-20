import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      text: 'Absolutely amazing coffee! The quality is exceptional and the service is outstanding. I visit here every morning and it never disappoints. The baristas are skilled and friendly.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      text: 'Best coffee shop in town! The atmosphere is perfect for work or relaxation. Their signature blend is incredible and the pastries are fresh daily. Highly recommended!',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5.0,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      text: 'I love coming here for my daily coffee fix. The staff remembers my order and the quality is consistently excellent. The cozy environment makes it my favorite spot.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.8,
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

  return (
    <section id="review" className="py-16 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        <h1 className="text-4xl lg:text-6xl font-bold text-center text-white uppercase mb-16">
          Customer's <span className="text-amber-500">Reviews</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300"
            >
              <Quote className="w-12 h-12 text-amber-500 mx-auto mb-6" />
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {review.text}
              </p>
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full object-cover mx-auto mb-4 shadow-lg"
              />
              <h3 className="text-white text-xl font-bold mb-4">{review.name}</h3>
              <div className="flex justify-center">
                {renderStars(review.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;