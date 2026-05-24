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
    '8': {
      title: 'First Flight Lands at Ludhiana Halwara Airport',
      content: `
        <p>Punjab reached an important milestone in aviation and infrastructure development as the first flight successfully landed at the newly built Halwara Airport near Ludhiana. The long-awaited airport is expected to improve air connectivity in the region and give a major boost to Punjab's industrial and economic growth.</p>

        <p>The first landing marked a historic moment for Ludhiana, one of Punjab's biggest industrial cities. Ravneet Singh Bittu, Union Minister of State for Railways and Food Processing Industries, called it a landmark achievement for Ludhiana and Punjab's economy.</p>

        <h2>Historic Achievement</h2>
        <p>Sharing the news on social media platform X, Bittu said he travelled on the inaugural flight along with Members of Parliament Vikramjit Sahni and Rajinder Gupta. He described the airport as a dream come true after nearly 30 years of public demand.</p>

        <p>According to Bittu, the airport will strongly support Punjab's industries and create new opportunities for trade, investment, and exports. He also thanked Narendra Modi for supporting the project and called the airport a "visionary gift" for Punjab.</p>

        <h2>Economic Impact for Ludhiana</h2>
        <p>Ludhiana is known as one of India's major industrial hubs, famous for textiles, hosiery, bicycle manufacturing, machine tools, and engineering products. For many years, industrial groups and business leaders had demanded a modern airport to improve travel and strengthen export activities.</p>

        <p>Until now, many people from Ludhiana had to rely on airports in nearby cities for domestic and international travel. The opening of Halwara Airport is expected to reduce travel time, improve business connectivity, and attract more investment to the state.</p>

        <h2>Opportunities for Industry and Trade</h2>
        <p>Industry experts believe the airport will help local manufacturers connect more easily with national and international markets. Better air connectivity could also encourage more companies to invest in Punjab, creating jobs and supporting economic growth.</p>

        <p>The airport will also benefit people living in nearby districts by offering faster and easier travel options. Improved connectivity can help tourism, education, healthcare, and business travel across the region.</p>

        <h2>Community Response</h2>
        <p>The successful landing of the first flight has created excitement among local residents and the business community, many of whom see the airport as a major step toward modernizing Punjab's infrastructure.</p>

        <h2>Broader Transportation Development</h2>
        <p>The development comes as the government continues to focus on improving transportation networks across India. Along with airport expansion, railway connectivity is also being strengthened.</p>

        <p>Just a day before the Halwara Airport milestone, Ravneet Singh Bittu flagged off the Amrit Bharat Express from Amritsar Junction to New Jalpaiguri. The Amrit Bharat Express is a modern non-air-conditioned train designed to provide affordable and comfortable long-distance travel for ordinary passengers.</p>

        <p>The service is expected to improve rail connectivity between Punjab, Uttar Pradesh, Bihar, and West Bengal, supporting tourism, trade, and regional development while making travel easier for thousands of passengers.</p>

        <h2>Vision for Regional Growth</h2>
        <p>Together, the launch of Halwara Airport and the new Amrit Bharat Express reflects the government's broader vision of improving transportation and connectivity across northern India. Experts believe these projects could play an important role in strengthening Punjab's economy and supporting long-term growth.</p>
      `,
      date: '2026-05-15',
      author: 'Airport Development Team',
      category: 'announcements',
      image: 'https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=1200',
      readTime: '6 min read'
    },
    '7': {
      title: 'PM Modi Inaugurates Halwara Airport Terminal Today',
      content: `
        <p>Prime Minister Narendra Modi today inaugurated the new terminal building at Halwara Airport in Punjab, marking a historic moment for the state's aviation sector. The ceremony was attended by Punjab Chief Minister Bhagwant Mann, Union Civil Aviation Minister, and other dignitaries.</p>
        
        <p>The inauguration represents a major step forward in enhancing air connectivity in Punjab and the broader northern region of India. The new terminal is equipped with modern facilities and is designed to handle both domestic and international flights.</p>
        
        <h2>Key Features of the New Terminal</h2>
        <p>The newly inaugurated terminal boasts several state-of-the-art features:</p>
        <ul>
          <li>Modern passenger processing systems</li>
          <li>Advanced security screening equipment</li>
          <li>Spacious waiting areas with comfortable seating</li>
          <li>Retail outlets featuring local and international brands</li>
          <li>Accessibility features for passengers with special needs</li>
        </ul>
        
        <h2>Economic Impact</h2>
        <p>The Prime Minister highlighted the economic benefits that the airport will bring to Punjab. The facility is expected to boost tourism, facilitate business travel, and create numerous employment opportunities in the region.</p>
        
        <p>"This airport will serve as a gateway for Punjab to connect with the world," said PM Modi during the inauguration ceremony. "It will not only improve connectivity but also contribute significantly to the economic development of the state."</p>
        
        <h2>Future Plans</h2>
        <p>The airport is planned to be developed in phases, with the current terminal capable of handling domestic operations. Plans are underway to expand facilities for international flights and cargo operations in subsequent phases.</p>
        
        <p>The inauguration marks the beginning of commercial operations at Halwara Airport, with the first scheduled flights expected to commence operations soon. Airlines are already showing interest in operating from this new facility.</p>
        
        <h2>Strategic Importance</h2>
        <p>Located strategically in Punjab, Halwara Airport is expected to serve not just the state but also neighboring regions. The airport's location makes it accessible to major cities in Punjab and provides an alternative to existing airports in the region.</p>
        
        <p>The successful inauguration of Halwara Airport represents the government's commitment to improving aviation infrastructure across India and ensuring better connectivity for all regions.</p>
      `,
      date: '2026-02-01',
      author: 'Airport Development Team',
      category: 'announcements',
      image: 'https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=1200',
      readTime: '4 min read'
    },
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