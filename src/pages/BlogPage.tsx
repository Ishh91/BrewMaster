import React, { useState } from 'react';
import { Calendar, User, Search, Tag, ArrowRight, Clock } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Art of Perfect Coffee Brewing',
      author: 'Coffee Master',
      date: 'December 15, 2024',
      category: 'brewing',
      readTime: '5 min read',
      excerpt: 'Discover the secrets behind brewing the perfect cup of coffee. From bean selection to brewing techniques, learn how to elevate your coffee experience.',
      content: 'Coffee brewing is both an art and a science. The perfect cup requires attention to detail, quality ingredients, and proper technique. Start with freshly roasted beans, grind them just before brewing, and maintain the right water temperature between 195-205°F.',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['brewing', 'tips', 'coffee'],
    },
    {
      id: 2,
      title: 'Coffee Origins: A Journey Around the World',
      author: 'Travel Blogger',
      date: 'December 12, 2024',
      category: 'origins',
      readTime: '8 min read',
      excerpt: 'Explore the rich history and diverse flavors of coffee from different regions around the globe. Each origin tells a unique story.',
      content: 'From the highlands of Ethiopia to the mountains of Colombia, coffee grows in diverse climates and terrains. Each region imparts unique characteristics to the beans, creating distinct flavor profiles that coffee enthusiasts cherish.',
      image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['origins', 'travel', 'culture'],
    },
    {
      id: 3,
      title: 'Health Benefits of Your Daily Coffee',
      author: 'Nutrition Expert',
      date: 'December 10, 2024',
      category: 'health',
      readTime: '6 min read',
      excerpt: 'Learn about the surprising health benefits of coffee and how it can boost your daily wellness routine when consumed mindfully.',
      content: 'Recent studies show that moderate coffee consumption can provide numerous health benefits, including improved cognitive function, enhanced metabolism, and reduced risk of certain diseases.',
      image: 'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['health', 'wellness', 'science'],
    },
    {
      id: 4,
      title: 'Latte Art: Creating Beautiful Coffee Designs',
      author: 'Barista Champion',
      date: 'December 8, 2024',
      category: 'brewing',
      readTime: '7 min read',
      excerpt: 'Master the techniques of latte art and learn how to create stunning designs that will impress your guests and elevate your coffee presentation.',
      content: 'Latte art is the practice of creating designs in the foam of espresso-based drinks. It requires skill, practice, and the right milk texture to create beautiful patterns like hearts, leaves, and rosettas.',
      image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['latte art', 'barista', 'techniques'],
    },
    {
      id: 5,
      title: 'Sustainable Coffee: Supporting Farmers',
      author: 'Sustainability Expert',
      date: 'December 5, 2024',
      category: 'sustainability',
      readTime: '9 min read',
      excerpt: 'Understand the importance of sustainable coffee practices and how choosing the right coffee can make a positive impact on farming communities.',
      content: 'Sustainable coffee farming practices not only protect the environment but also ensure fair wages for farmers. Learn how to identify and support ethical coffee brands.',
      image: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['sustainability', 'ethics', 'farming'],
    },
    {
      id: 6,
      title: 'Cold Brew vs Iced Coffee: The Ultimate Guide',
      author: 'Coffee Enthusiast',
      date: 'December 3, 2024',
      category: 'brewing',
      readTime: '4 min read',
      excerpt: 'Discover the differences between cold brew and iced coffee, and learn which method suits your taste preferences and lifestyle.',
      content: 'While both are refreshing coffee drinks, cold brew and iced coffee are prepared differently and offer distinct flavor profiles. Cold brew is steeped for hours, while iced coffee is brewed hot and cooled.',
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['cold brew', 'iced coffee', 'summer'],
    },
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'brewing', name: 'Brewing', count: blogPosts.filter(post => post.category === 'brewing').length },
    { id: 'origins', name: 'Origins', count: blogPosts.filter(post => post.category === 'origins').length },
    { id: 'health', name: 'Health', count: blogPosts.filter(post => post.category === 'health').length },
    { id: 'sustainability', name: 'Sustainability', count: blogPosts.filter(post => post.category === 'sustainability').length },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-16 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-white uppercase mb-6">
            Coffee <span className="text-amber-500">Blog</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the world of coffee through our expert insights, brewing guides, and stories from around the globe.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 lg:px-16 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            {/* Search */}
            <div className="bg-gray-800 rounded-2xl p-6 mb-8">
              <h3 className="text-white text-xl font-bold mb-4">Search Posts</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-gray-800 rounded-2xl p-6 mb-8">
              <h3 className="text-white text-xl font-bold mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex justify-between items-center ${
                      selectedCategory === category.id
                        ? 'bg-amber-500 text-white'
                        : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="text-sm">{category.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <h3 className="text-white text-xl font-bold mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['brewing', 'coffee', 'tips', 'health', 'latte art', 'origins', 'sustainability'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-amber-500 hover:text-white transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-amber-500 text-sm mb-3 space-x-4">
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-white text-xl font-bold leading-tight hover:text-amber-500 transition-colors duration-300 mb-3">
                      {post.title}
                    </h2>

                    <p className="text-gray-300 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                        >
                          <Tag className="w-3 h-3 inline mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="inline-flex items-center bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors font-semibold group">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-gray-400 text-6xl mb-4">☕</div>
                <h3 className="text-white text-2xl font-bold mb-2">No posts found</h3>
                <p className="text-gray-400">Try adjusting your search or category filter.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;