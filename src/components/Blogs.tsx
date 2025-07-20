import React from 'react';
import { Calendar, User } from 'lucide-react';

const Blogs: React.FC = () => {
  const blogs = [
    {
      id: 1,
      title: 'The Art of Perfect Coffee Brewing',
      author: 'Coffee Master',
      date: 'December 15, 2024',
      excerpt: 'Discover the secrets behind brewing the perfect cup of coffee. From bean selection to brewing techniques.',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      title: 'Coffee Origins: A Journey Around the World',
      author: 'Travel Blogger',
      date: 'December 12, 2024',
      excerpt: 'Explore the rich history and diverse flavors of coffee from different regions around the globe.',
      image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      title: 'Health Benefits of Your Daily Coffee',
      author: 'Nutrition Expert',
      date: 'December 10, 2024',
      excerpt: 'Learn about the surprising health benefits of coffee and how it can boost your daily wellness routine.',
      image: 'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <section id="blogs" className="py-16 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        <h1 className="text-4xl lg:text-6xl font-bold text-center text-white uppercase mb-16">
          Our <span className="text-amber-500">Blogs</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <a
                  href="#"
                  className="text-white text-xl font-bold leading-tight hover:text-amber-500 transition-colors duration-300 block mb-4"
                >
                  {blog.title}
                </a>

                <div className="flex items-center text-amber-500 text-sm mb-4 space-x-4">
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    by {blog.author}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {blog.date}
                  </span>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {blog.excerpt}
                </p>

                <a
                  href="#"
                  className="inline-block bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors font-semibold"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;