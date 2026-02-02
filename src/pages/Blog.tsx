import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdBanner from '../components/AdBanner';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  const ads = [
    {
      id: 1,
      title: 'Travel Blog',
      description: 'Share your travel stories',
      image: 'https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.travelblog.org',
      color: 'bg-blue-600'
    },
    {
      id: 2,
      title: 'Travel Tips',
      description: 'Expert advice for travelers',
      image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.lonelyplanet.com',
      color: 'bg-green-600'
    },
    {
      id: 3,
      title: 'Aviation Insights',
      description: 'Latest in aviation industry',
      image: 'https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.aviationweek.com',
      color: 'bg-orange-600'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'travel-tips', name: 'Travel Tips' },
    { id: 'airport-guide', name: 'Airport Guide' },
    { id: 'local-culture', name: 'Local Culture' },
    { id: 'aviation', name: 'Aviation' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Essential Travel Tips for First-Time Flyers',
      excerpt: 'Flying for the first time? Here are essential tips to make your airport experience smooth and stress-free, from check-in to boarding.',
      date: '2025-01-25',
      author: 'Priya Sharma',
      category: 'travel-tips',
      image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 2,
      title: 'Exploring Punjab: A Cultural Journey',
      excerpt: 'Discover the rich cultural heritage of Punjab through its vibrant festivals, traditional cuisine, and historical landmarks.',
      date: '2025-01-22',
      author: 'Rajveer Singh',
      category: 'local-culture',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '7 min read',
      featured: false
    },
    {
      id: 3,
      title: 'How to Navigate International Airports Like a Pro',
      excerpt: 'Master the art of navigating busy international airports with these expert tips on check-in, security, and finding your gate.',
      date: '2025-01-20',
      author: 'Amit Patel',
      category: 'airport-guide',
      image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 4,
      title: 'The Evolution of Modern Aviation',
      excerpt: 'From the Wright brothers to supersonic jets, explore the fascinating journey of aviation technology and innovation.',
      date: '2025-01-18',
      author: 'Kavya Reddy',
      category: 'aviation',
      image: 'https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '8 min read',
      featured: false
    },
    {
      id: 5,
      title: 'Best Foods to Try in Ludhiana',
      excerpt: 'A food lover\'s guide to Ludhiana\'s culinary scene, featuring traditional Punjabi dishes and modern fusion cuisine.',
      date: '2025-01-15',
      author: 'Simran Kaur',
      category: 'local-culture',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '5 min read',
      featured: false
    },
    {
      id: 6,
      title: 'Packing Smart: Airport Security Tips',
      excerpt: 'Learn what to pack, what to avoid, and how to breeze through airport security without any hassles.',
      date: '2025-01-12',
      author: 'Vikram Mehta',
      category: 'travel-tips',
      image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '4 min read',
      featured: false
    }
  ];

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Travel Blog - Halwara International Airport</title>
        <meta name="description" content="Read travel tips, airport guides, and local culture insights from Halwara International Airport. Get expert advice for your journey." />
        <link rel="canonical" href="https://chic-tulumba-6b08d3.netlify.app/blog" />
        <meta property="og:title" content="Travel Blog - Halwara International Airport" />
        <meta property="og:description" content="Read travel tips, airport guides, and local culture insights from Halwara International Airport." />
        <meta property="og:url" content="https://chic-tulumba-6b08d3.netlify.app/blog" />
      </Helmet>
      <Header />

      <div className="pt-20">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Travel Blog</h1>
            <p className="text-xl text-orange-100">
              Discover travel tips, airport guides, and local insights from our expert writers.
            </p>
          </div>
        </div>

        <AdBanner ads={ads} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-orange-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          {featuredPost && selectedCategory === 'all' && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Post</h2>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-600 text-sm">{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-600 text-sm">{new Date(featuredPost.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => navigate(`/blog/${featuredPost.id}`)}
                        className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                      >
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Regular Posts Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Tag className="h-4 w-4 text-orange-500" />
                      <span className="text-orange-600 text-sm font-medium capitalize">
                        {post.category.replace('-', ' ')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => navigate(`/blog/${post.id}`)}
                      className="w-full bg-gray-900 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors"
                    >
                      Read Full Post
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Blog</h2>
            <p className="text-xl text-orange-100 mb-6">
              Get the latest travel tips, airport guides, and local insights delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-orange-600 px-6 py-3 rounded-r-xl font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <AdBanner ads={ads} />
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
