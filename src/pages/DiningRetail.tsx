import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdBanner from '../components/AdBanner';
import { Helmet } from 'react-helmet-async';
import { Coffee, Utensils, ShoppingBag, Clock, MapPin, Star, CreditCard, Wifi } from 'lucide-react';

const DiningRetail = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const ads = [
    {
      id: 1,
      title: 'Food Delivery',
      description: 'Order food to your location',
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.zomato.com',
      color: 'bg-red-600'
    },
    {
      id: 2,
      title: 'Shopping Online',
      description: 'Shop from anywhere, anytime',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.amazon.in',
      color: 'bg-orange-600'
    },
    {
      id: 3,
      title: 'Gift Cards',
      description: 'Perfect gifts for travelers',
      image: 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.giftcards.com',
      color: 'bg-purple-600'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Options' },
    { id: 'dining', name: 'Dining' },
    { id: 'retail', name: 'Shopping' },
    { id: 'services', name: 'Services' }
  ];

  const establishments = [
    {
      id: 1,
      name: 'Punjab Kitchen',
      category: 'dining',
      type: 'Restaurant',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Authentic Punjabi cuisine featuring traditional dishes like butter chicken, dal makhani, and fresh naan bread. Experience the rich flavors of Punjab in a modern setting.',
      cuisine: 'Punjabi, North Indian',
      priceRange: '₹₹',
      rating: 4.6,
      hours: '6:00 AM - 11:00 PM',
      location: 'Terminal - Ground Floor',
      features: ['Vegetarian Options', 'Halal Certified', 'Takeaway Available', 'Family Seating'],
      specialties: ['Butter Chicken', 'Dal Makhani', 'Tandoori Roti', 'Lassi']
    },
    {
      id: 2,
      name: 'Coffee Central',
      category: 'dining',
      type: 'Café',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Premium coffee shop serving freshly brewed coffee, artisanal pastries, and light snacks. Perfect for a quick caffeine fix before your flight.',
      cuisine: 'Coffee, Pastries, Snacks',
      priceRange: '₹',
      rating: 4.4,
      hours: '5:00 AM - 12:00 AM',
      location: 'Terminal - All Floors',
      features: ['Free WiFi', 'Quick Service', 'Grab & Go', 'Loyalty Program'],
      specialties: ['Cappuccino', 'Croissants', 'Sandwiches', 'Fresh Juices']
    },
    {
      id: 3,
      name: 'Global Bites',
      category: 'dining',
      type: 'Food Court',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'International food court offering diverse cuisines from around the world including Chinese, Italian, Mexican, and Continental dishes.',
      cuisine: 'International, Multi-cuisine',
      priceRange: '₹₹',
      rating: 4.3,
      hours: '24/7',
      location: 'Terminal - First Floor',
      features: ['Multiple Cuisines', '24/7 Service', 'Family Area', 'Quick Service'],
      specialties: ['Pizza', 'Noodles', 'Burgers', 'Salads']
    },
    {
      id: 4,
      name: 'Duty Free Emporium',
      category: 'retail',
      type: 'Duty Free Shop',
      image: 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Extensive duty-free shopping with international brands, perfumes, chocolates, alcohol, and souvenirs. Tax-free shopping for international travelers.',
      priceRange: '₹₹₹',
      rating: 4.5,
      hours: '6:00 AM - 10:00 PM',
      location: 'International Departure Area',
      features: ['Tax-Free Shopping', 'International Brands', 'Gift Wrapping', 'Currency Exchange'],
      categories: ['Perfumes & Cosmetics', 'Alcohol & Tobacco', 'Chocolates & Confectionery', 'Electronics']
    },
    {
      id: 5,
      name: 'Punjab Handicrafts',
      category: 'retail',
      type: 'Souvenir Shop',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Authentic Punjabi handicrafts, traditional clothing, jewelry, and local souvenirs. Take home a piece of Punjab\'s rich cultural heritage.',
      priceRange: '₹₹',
      rating: 4.7,
      hours: '7:00 AM - 9:00 PM',
      location: 'Terminal - Ground Floor',
      features: ['Local Crafts', 'Traditional Items', 'Gift Packaging', 'Cultural Souvenirs'],
      categories: ['Handicrafts', 'Traditional Clothing', 'Jewelry', 'Home Decor']
    },
    {
      id: 6,
      name: 'Tech Zone',
      category: 'retail',
      type: 'Electronics Store',
      image: 'https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Latest electronics, mobile accessories, travel gadgets, and tech essentials. Find everything you need for your digital travel needs.',
      priceRange: '₹₹₹',
      rating: 4.2,
      hours: '6:00 AM - 11:00 PM',
      location: 'Terminal - First Floor',
      features: ['Latest Gadgets', 'Mobile Accessories', 'Travel Tech', 'Warranty Service'],
      categories: ['Mobile Phones', 'Headphones', 'Chargers & Cables', 'Travel Adapters']
    },
    {
      id: 7,
      name: 'Airport Pharmacy',
      category: 'services',
      type: 'Pharmacy',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Full-service pharmacy providing prescription medications, over-the-counter drugs, health products, and travel health essentials.',
      priceRange: '₹₹',
      rating: 4.8,
      hours: '24/7',
      location: 'Terminal - Ground Floor',
      features: ['Prescription Service', '24/7 Availability', 'Travel Health', 'Emergency Medications'],
      categories: ['Prescription Drugs', 'OTC Medications', 'Travel Health', 'First Aid']
    },
    {
      id: 8,
      name: 'Book Haven',
      category: 'retail',
      type: 'Bookstore',
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Extensive collection of books, magazines, newspapers, and travel guides. Perfect for finding reading material for your journey.',
      priceRange: '₹₹',
      rating: 4.4,
      hours: '6:00 AM - 10:00 PM',
      location: 'Terminal - Ground Floor',
      features: ['Wide Selection', 'Travel Guides', 'Magazines', 'Local Authors'],
      categories: ['Fiction & Non-fiction', 'Travel Guides', 'Magazines', 'Children\'s Books']
    }
  ];

  const filteredEstablishments = selectedCategory === 'all' 
    ? establishments 
    : establishments.filter(item => item.category === selectedCategory);

  const diningStats = [
    { label: 'Restaurants & Cafés', value: '12+' },
    { label: 'Cuisines Available', value: '8+' },
    { label: 'Operating Hours', value: '24/7' },
    { label: 'Seating Capacity', value: '500+' }
  ];

  const retailStats = [
    { label: 'Retail Outlets', value: '15+' },
    { label: 'Duty-Free Shops', value: '3' },
    { label: 'Local Brands', value: '25+' },
    { label: 'Shopping Area', value: '2000 sq ft' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Dining & Retail at Halwara Airport - Restaurants & Shopping</title>
        <meta name="description" content="Discover dining and retail options at Halwara International Airport. From authentic Punjabi cuisine to duty-free shopping, find everything you need for your journey." />
        <link rel="canonical" href="https://chic-tulumba-6b08d3.netlify.app/dining-retail" />
        <meta property="og:title" content="Dining & Retail at Halwara Airport - Restaurants & Shopping" />
        <meta property="og:description" content="Discover dining and retail options at Halwara International Airport. From authentic Punjabi cuisine to duty-free shopping." />
        <meta property="og:url" content="https://chic-tulumba-6b08d3.netlify.app/dining-retail" />
      </Helmet>
      <Header />
      
      <div className="pt-20">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Dining & Retail</h1>
            <p className="text-xl text-orange-100">
              Discover a world of flavors and shopping experiences at Halwara International Airport.
            </p>
          </div>
        </div>

        <AdBanner ads={ads} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Overview Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[...diningStats, ...retailStats].map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

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

          {/* Establishments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredEstablishments.map((establishment) => (
              <div key={establishment.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <img
                  src={establishment.image}
                  alt={`${establishment.name} - ${establishment.type} at Halwara International Airport`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{establishment.name}</h3>
                    {establishment.rating && (
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold">{establishment.rating}</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-orange-600 font-medium mb-2">{establishment.type}</p>
                  <p className="text-gray-600 mb-4 line-clamp-3">{establishment.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{establishment.hours}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{establishment.location}</span>
                    </div>
                    {establishment.cuisine && (
                      <div className="flex items-center space-x-2">
                        <Utensils className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{establishment.cuisine}</span>
                      </div>
                    )}
                    {establishment.priceRange && (
                      <div className="flex items-center space-x-2">
                        <CreditCard className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Price Range: {establishment.priceRange}</span>
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {establishment.category === 'dining' ? 'Specialties' : 'Categories'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(establishment.specialties || establishment.categories || []).map((item, index) => (
                        <span key={index} className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {establishment.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors">
                    {establishment.category === 'dining' ? 'View Menu' : 'Visit Store'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Special Features */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Special Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Free WiFi</h3>
                <p className="text-gray-600">High-speed internet available in all dining and retail areas</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Multiple Payments</h3>
                <p className="text-gray-600">Cash, cards, UPI, and digital wallets accepted everywhere</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Extended Hours</h3>
                <p className="text-gray-600">Many outlets open 24/7 to serve all flight schedules</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Explore More</h2>
            <p className="text-orange-100 mb-6">
              Discover all the dining and shopping options available at Halwara International Airport.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Download Directory
              </button>
              <button className="bg-orange-800 hover:bg-orange-900 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
                Contact Concierge
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

export default DiningRetail;