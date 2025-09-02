import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdBanner from '../components/AdBanner';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowLeft, Share2, Tag } from 'lucide-react';

const NewsArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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

  // Sample article data - in a real app, this would come from an API
  const articles = {
    '1': {
      title: 'Halwara International Airport Construction Reaches Major Milestone',
      content: `
        <p>The construction of Halwara International Airport has achieved a significant milestone with the completion of 60% of the main terminal building. This marks a crucial step forward in Punjab's aviation infrastructure development.</p>
        
        <p>The project, which began in early 2024, has been progressing steadily despite various challenges including weather conditions and supply chain logistics. The construction team has worked tirelessly to maintain the timeline while ensuring the highest quality standards.</p>
        
        <h2>Key Achievements</h2>
        <p>The major accomplishments in the construction phase include:</p>
        <ul>
          <li>Completion of the terminal building's structural framework</li>
          <li>Installation of advanced HVAC systems</li>
          <li>Implementation of state-of-the-art security infrastructure</li>
          <li>Progress on runway construction and lighting systems</li>
        </ul>
        
        <h2>Future Timeline</h2>
        <p>With 60% completion achieved, the project is on track for its planned opening in 2025. The remaining work includes interior finishing, installation of passenger amenities, and comprehensive testing of all systems.</p>
        
        <p>The airport is expected to handle over 2 million passengers annually in its initial phase, with provisions for future expansion to accommodate growing demand.</p>
        
        <h2>Economic Impact</h2>
        <p>The airport project has already created over 2,000 jobs during the construction phase, with many more employment opportunities expected once operations begin. Local businesses have also benefited from increased economic activity in the region.</p>
        
        <p>Upon completion, Halwara International Airport will serve as a major economic catalyst for Punjab, facilitating business growth, tourism development, and improved connectivity to domestic and international destinations.</p>
      `,
      date: '2025-01-25',
      author: 'Airport Development Team',
      category: 'construction',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200',
      readTime: '5 min read'
    }
  };

  const article = articles[id as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <button
              onClick={() => navigate('/news')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              Back to News
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{article.title} - Halwara International Airport News</title>
        <meta name="description" content={`Read the latest update: ${article.title}. Stay informed about Halwara International Airport developments and construction progress.`} />
        <link rel="canonical" href={`https://chic-tulumba-6b08d3.netlify.app/news/${id}`} />
        <meta property="og:title" content={`${article.title} - Halwara International Airport News`} />
        <meta property="og:description" content={`Read the latest update: ${article.title}. Stay informed about Halwara International Airport developments.`} />
        <meta property="og:url" content={`https://chic-tulumba-6b08d3.netlify.app/news/${id}`} />
        <meta property="og:image" content={article.image} />
      </Helmet>
      <Header />
      
      <div className="pt-20">
        <AdBanner ads={ads} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Back Button */}
          <button
            onClick={() => navigate('/news')}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to News</span>
          </button>

          {/* Article Header */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold capitalize">
                  {article.category}
                </span>
                <span className="text-gray-500 text-sm">{article.readTime}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{article.title}</h1>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0 mb-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <button className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors">
                  <Share2 className="h-4 w-4" />
                  <span>Share Article</span>
                </button>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>

        <AdBanner ads={ads} />
      </div>

      <Footer />
    </div>
  );
};

export default NewsArticle;