import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdBanner from '../components/AdBanner';
import { Search, Phone, MapPin, Clock, Package, AlertCircle, CheckCircle } from 'lucide-react';

const LostAndFound = () => {
  const ads = [
    {
      id: 1,
      title: 'Travel Insurance',
      description: 'Protect your belongings while traveling',
      image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.policybazaar.com',
      color: 'bg-blue-600'
    },
    {
      id: 2,
      title: 'Security Services',
      description: 'Keep your items safe and secure',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.securitas.com',
      color: 'bg-green-600'
    },
    {
      id: 3,
      title: 'Customer Support',
      description: '24/7 assistance for travelers',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.zendesk.com',
      color: 'bg-purple-600'
    }
  ];

  const reportSteps = [
    {
      icon: AlertCircle,
      title: 'Report Immediately',
      description: 'Report lost items as soon as you notice them missing',
      details: ['Visit Lost & Found counter', 'Provide detailed description', 'Fill out report form']
    },
    {
      icon: Package,
      title: 'Item Description',
      description: 'Provide detailed information about your lost item',
      details: ['Brand and model', 'Color and size', 'Unique identifiers']
    },
    {
      icon: Search,
      title: 'Search Process',
      description: 'Our team will search for your item systematically',
      details: ['Terminal search', 'Aircraft inspection', 'Storage area check']
    },
    {
      icon: CheckCircle,
      title: 'Item Recovery',
      description: 'We\'ll contact you when your item is found',
      details: ['Phone notification', 'Email confirmation', 'Pickup arrangement']
    }
  ];

  const commonItems = [
    'Mobile phones and chargers',
    'Laptops and tablets',
    'Jewelry and watches',
    'Wallets and purses',
    'Keys and keychains',
    'Clothing and accessories',
    'Books and documents',
    'Headphones and electronics'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Lost & Found</h1>
            <p className="text-xl text-orange-100">
              We're here to help you recover your lost items quickly and efficiently.
            </p>
          </div>
        </div>

        <AdBanner ads={ads} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Lost & Found Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+91 161 234 5681</p>
                <p className="text-sm text-gray-500">24/7 Available</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">Terminal Building</p>
                <p className="text-sm text-gray-500">Ground Floor</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Hours</h3>
                <p className="text-gray-600">24/7 Service</p>
                <p className="text-sm text-gray-500">Always Available</p>
              </div>
            </div>
          </div>

          {/* Report Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Report Lost Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {reportSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <step.icon className="h-8 w-8 text-orange-600" />
                    <div className="absolute -top-2 -right-2 bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Common Lost Items */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Commonly Lost Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commonItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Important Information */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Important Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Clock className="h-8 w-8 mx-auto mb-3" />
                <h3 className="text-lg font-bold mb-2">Storage Period</h3>
                <p className="text-orange-100">Items are stored for 90 days before disposal</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Package className="h-8 w-8 mx-auto mb-3" />
                <h3 className="text-lg font-bold mb-2">Item Pickup</h3>
                <p className="text-orange-100">Valid ID required for item collection</p>
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

export default LostAndFound;