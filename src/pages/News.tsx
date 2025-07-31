import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdBanner from '../components/AdBanner';
import { Calendar, User, ArrowRight, Tag, Search } from 'lucide-react';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const ads = [
    {
      id: 1,
      title: 'News & Media',
      description: 'Stay informed with latest updates',
      image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.thehindu.com',
      color: 'bg-blue-600'
    },
    {
      id: 2,
      title: 'Aviation News',
      description: 'Latest in aviation industry',
      image: 'https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.aviationweek.com',
      color: 'bg-indigo-600'
    },
    {
      id: 3,
      title: 'Punjab Updates',
      description: 'Regional news and developments',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.tribuneindia.com',
      color: 'bg-green-600'
    }
  ];

  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'construction', name: 'Construction Updates' },
    { id: 'announcements', name: 'Announcements' },
    { id: 'partnerships', name: 'Partnerships' },
    { id: 'community', name: 'Community' }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Halwara International Airport Construction Reaches Major Milestone',
      excerpt: 'The construction of the main terminal building has reached 60% completion, marking a significant milestone in the project timeline.',
      date: '2025-01-25',
      author: 'Airport Development Team',
      category: 'construction',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      id: 2,
      title: 'Partnership Announced with Major Airlines for Route Development',
      excerpt: 'Several leading airlines have expressed interest in operating from Halwara International Airport, with route planning underway.',
      date: '2025-01-20',
      author: 'Business Development',
      category: 'partnerships',
      image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 3,
      title: 'Environmental Sustainability Measures Implemented',
      excerpt: 'The airport project incorporates green building practices and renewable energy solutions to minimize environmental impact.',
      date: '2025-01-18',
      author: 'Sustainability Team',
      category: 'announcements',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 4,
      title: 'Local Community Employment Opportunities Created',
      excerpt: 'The airport project has created over 2,000 jobs for local residents during the construction phase, with more opportunities ahead.',
      date: '2025-01-15',
      author: 'HR Department',
      category: 'community',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 5,
      title: 'Advanced Security Systems Installation Begins',
      excerpt: 'State-of-the-art security and screening equipment installation has commenced, ensuring world-class safety standards.',
      date: '2025-01-12',
      author: 'Security Operations',
      category: 'construction',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 6,
      title: 'International Standards Certification Process Initiated',
      excerpt: 'The airport has begun the certification process with international aviation authorities to ensure compliance with global standards.',
      date: '2025-01-10',
      author: 'Quality Assurance',
      category: 'announcements',
      image: 'https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    }
  ];

  const filteredNews = selectedCategory === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const featuredNews = newsArticles.find(article => article.featured);
  const regularNews = filteredNews.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">News & Updates</h1>
            <p className="text-xl text-indigo-100">
              Stay informed about the latest developments at Halwara International Airport.
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
                      ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Featured News */}
          {featuredNews && selectedCategory === 'all' && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured News</h2>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <img
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredNews.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredNews.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{featuredNews.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600 text-sm">{featuredNews.author}</span>
                      </div>
                      <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2">
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Regular News Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularNews.map((article) => (
                <div key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Tag className="h-4 w-4 text-indigo-500" />
                      <span className="text-indigo-600 text-sm font-medium capitalize">
                        {article.category.replace('-', ' ')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                    <button className="mt-4 w-full bg-gray-900 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                      Read Full Article
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-indigo-100 mb-6">
              Subscribe to our newsletter for the latest news and updates about Halwara International Airport.
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-r-xl font-semibold hover:bg-gray-100 transition-colors">
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

export default News;