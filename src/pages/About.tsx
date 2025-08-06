import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdBanner from '../components/AdBanner';
import { MapPin, Users, Calendar, Award, Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2023', event: 'Project Announcement', description: 'Halwara International Airport project officially announced' },
    { year: '2024', event: 'Construction Begins', description: 'Ground breaking ceremony and construction commencement' },
    { year: '2025', event: 'Expected Opening', description: 'Airport expected to begin operations' },
    { year: '2026', event: 'Full Operations', description: 'Complete international and domestic flight operations' }
  ];

  const features = [
    {
      icon: MapPin,
      title: 'Strategic Location',
      description: 'Located in Halwara, providing easy access to Ludhiana and surrounding regions'
    },
    {
      icon: Users,
      title: 'Passenger Capacity',
      description: 'Designed to handle millions of passengers annually with room for expansion'
    },
    {
      icon: Award,
      title: 'Modern Facilities',
      description: 'State-of-the-art terminal with world-class amenities and services'
    },
    {
      icon: Calendar,
      title: '24/7 Operations',
      description: 'Round-the-clock operations to serve domestic and international flights'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide world-class aviation services and connect Punjab to global destinations while promoting economic growth and tourism in the region.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To become the premier aviation hub in North India, setting new standards for passenger experience, operational efficiency, and sustainable development.'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Safety, excellence, innovation, sustainability, and customer satisfaction are at the core of everything we do.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">About Halwara International Airport</h1>
            <p className="text-xl text-blue-100">
              Punjab's gateway to the world - connecting dreams to destinations.
            </p>
          </div>
        </div>

        <AdBanner />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Halwara International Airport represents a significant milestone in Punjab's aviation 
                  infrastructure development. Located in the historic town of Halwara, this modern 
                  airport is designed to serve as a major aviation hub for North India.
                </p>
                <p>
                  The airport project was conceived to meet the growing demand for air connectivity 
                  in Punjab and to boost the region's economic development through improved 
                  transportation infrastructure.
                </p>
                <p>
                  With its strategic location and modern facilities, Halwara International Airport 
                  will connect Punjab to major domestic and international destinations, facilitating 
                  business, tourism, and cultural exchange.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Airport Terminal"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Terminal Design</h3>
                <p className="text-gray-600">
                  Our terminal features contemporary architecture with passenger comfort and 
                  operational efficiency at its core.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Mission, Vision & Values</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <value.icon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Development Timeline</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <div className="bg-white rounded-xl shadow-lg p-6">
                        <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.event}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="relative z-10 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
            <p className="text-xl text-blue-100 mb-6">
              Be part of Punjab's aviation revolution. Stay updated with our progress and be among 
              the first to experience world-class aviation services.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Subscribe for Updates
            </button>
          </div>
        </div>

        <AdBanner />
      </div>

      <Footer />
    </div>
  );
};

export default About;