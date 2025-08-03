import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdBanner from '../components/AdBanner';
import { Wheelchair, Heart, Eye, Ear, Baby, Phone } from 'lucide-react';

const SpecialAssistance = () => {
  const ads = [
    {
      id: 1,
      title: 'Healthcare Services',
      description: 'Medical assistance and support',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.apollo247.com',
      color: 'bg-green-600'
    },
    {
      id: 2,
      title: 'Accessibility Solutions',
      description: 'Making travel accessible for everyone',
      image: 'https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.accessibilityservices.com',
      color: 'bg-blue-600'
    },
    {
      id: 3,
      title: 'Family Support',
      description: 'Assistance for families with children',
      image: 'https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.familytravel.com',
      color: 'bg-purple-600'
    }
  ];

  const services = [
    {
      icon: Wheelchair,
      title: 'Mobility Assistance',
      description: 'Wheelchair services and mobility support throughout the airport',
      features: ['Wheelchair rental', 'Personal assistance', 'Priority boarding', 'Accessible facilities']
    },
    {
      icon: Eye,
      title: 'Visual Impairment Support',
      description: 'Specialized assistance for passengers with visual impairments',
      features: ['Guide assistance', 'Audio announcements', 'Braille signage', 'Service animal accommodation']
    },
    {
      icon: Ear,
      title: 'Hearing Impairment Support',
      description: 'Services for passengers with hearing difficulties',
      features: ['Sign language interpreters', 'Visual alerts', 'Written communication', 'Hearing loop systems']
    },
    {
      icon: Heart,
      title: 'Medical Assistance',
      description: 'Support for passengers with medical conditions',
      features: ['Medical equipment handling', 'Medication storage', 'First aid services', 'Emergency response']
    },
    {
      icon: Baby,
      title: 'Family Services',
      description: 'Special assistance for families traveling with children',
      features: ['Baby changing facilities', 'Stroller assistance', 'Family boarding', 'Child care support']
    }
  ];

  const bookingSteps = [
    'Contact us at least 48 hours before travel',
    'Provide details about required assistance',
    'Confirm your flight and contact information',
    'Receive confirmation and instructions',
    'Arrive at airport with extra time',
    'Check in at special assistance counter'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        <div className="bg-gradient-to-r from-green-600 to-blue-600 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Special Assistance</h1>
            <p className="text-xl text-green-100">
              We're committed to making air travel accessible and comfortable for everyone.
            </p>
          </div>
        </div>

        <AdBanner ads={ads} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Services Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Special Assistance Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-center">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Process */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Request Special Assistance</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {bookingSteps.map((step, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Special Assistance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone Support</h3>
                <p className="text-2xl font-bold text-green-600 mb-2">+91 161 234 5682</p>
                <p className="text-gray-600">Available 24/7</p>
                <p className="text-sm text-gray-500 mt-2">Dedicated special assistance helpline</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Email Support</h3>
                <p className="text-gray-600">specialassistance@halwaraairport.com</p>
                <h3 className="text-xl font-bold text-gray-900">Counter Location</h3>
                <p className="text-gray-600">Special Assistance Counter, Terminal Building Ground Floor</p>
                <h3 className="text-xl font-bold text-gray-900">Operating Hours</h3>
                <p className="text-gray-600">24/7 service available</p>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Important Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">Advance Booking</h3>
                <p className="text-green-100">Request assistance at least 48 hours before travel for best service</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">No Extra Charges</h3>
                <p className="text-green-100">All special assistance services are provided free of charge</p>
              </div>
            </div>
          </div>
        </div>

        <AdBanner ads={ads} />
      </div>

      <Footer />
    </div>
  );
};

export default SpecialAssistance;