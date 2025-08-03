import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdBanner from '../components/AdBanner';
import { Crown, Wifi, Coffee, Utensils, Tv, Phone, CreditCard } from 'lucide-react';

const BusinessLounge = () => {
  const ads = [
    {
      id: 1,
      title: 'Premium Travel',
      description: 'Upgrade your travel experience',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.dreamfolks.in',
      color: 'bg-gold-600'
    },
    {
      id: 2,
      title: 'Business Services',
      description: 'Professional business solutions',
      image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.regus.com',
      color: 'bg-blue-600'
    },
    {
      id: 3,
      title: 'Luxury Amenities',
      description: 'Premium comfort and service',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.luxurytravel.com',
      color: 'bg-purple-600'
    }
  ];

  const amenities = [
    {
      icon: Wifi,
      title: 'High-Speed WiFi',
      description: 'Complimentary high-speed internet access throughout the lounge'
    },
    {
      icon: Utensils,
      title: 'Premium Dining',
      description: 'Gourmet meals, snacks, and beverages available all day'
    },
    {
      icon: Coffee,
      title: 'Barista Coffee',
      description: 'Freshly brewed coffee and premium tea selection'
    },
    {
      icon: Tv,
      title: 'Entertainment',
      description: 'Large screen TVs, magazines, and newspapers'
    },
    {
      icon: Phone,
      title: 'Business Center',
      description: 'Workstations, printing, and meeting facilities'
    },
    {
      icon: Crown,
      title: 'Concierge Service',
      description: 'Personal assistance and travel arrangements'
    }
  ];

  const membershipPlans = [
    {
      name: 'Day Pass',
      price: '₹2,500',
      duration: 'Single Visit',
      features: [
        'Access to premium lounge',
        'Complimentary food & beverages',
        'High-speed WiFi',
        'Comfortable seating',
        'Shower facilities',
        'Business center access'
      ],
      popular: false
    },
    {
      name: 'Monthly Pass',
      price: '₹15,000',
      duration: 'Per Month',
      features: [
        'Unlimited lounge access',
        'Premium dining options',
        'Priority WiFi',
        'Private meeting rooms',
        'Concierge services',
        'Guest privileges (2 guests)',
        'Spa services discount'
      ],
      popular: true
    },
    {
      name: 'Annual Pass',
      price: '₹1,50,000',
      duration: 'Per Year',
      features: [
        'Unlimited access all year',
        'VIP dining experience',
        'Dedicated workspace',
        'Personal concierge',
        'Unlimited guest access',
        'Complimentary spa services',
        'Airport transfer service'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Business Lounge</h1>
            <p className="text-xl text-purple-100">
              Experience luxury and comfort in our premium business lounge.
            </p>
          </div>
        </div>

        <AdBanner ads={ads} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Lounge Overview */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Lounge Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escape the hustle and bustle of the terminal in our exclusive business lounge. 
              Enjoy premium amenities, gourmet dining, and personalized service.
            </p>
          </div>

          {/* Amenities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Lounge Amenities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {amenities.map((amenity, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <amenity.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{amenity.title}</h3>
                  <p className="text-gray-600">{amenity.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Membership Plans */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Membership Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {membershipPlans.map((plan, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-lg overflow-hidden ${plan.popular ? 'ring-4 ring-purple-500 transform scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="bg-purple-600 text-white text-center py-2 font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-purple-600">{plan.price}</span>
                      <span className="text-gray-600 ml-2">{plan.duration}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-colors ${
                      plan.popular 
                        ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                        : 'bg-gray-900 hover:bg-purple-600 text-white'
                    }`}>
                      Choose Plan
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lounge Hours & Location */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Lounge Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">First Floor, Terminal Building</p>
                <p className="text-sm text-gray-500">Near Gate A1-A5</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Operating Hours</h3>
                <p className="text-gray-600">5:00 AM - 11:00 PM</p>
                <p className="text-sm text-gray-500">Daily</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Payment</h3>
                <p className="text-gray-600">All major cards accepted</p>
                <p className="text-sm text-gray-500">Digital payments available</p>
              </div>
            </div>
          </div>

          {/* Contact & Booking */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Book Your Lounge Access</h2>
            <p className="text-purple-100 mb-6">
              Reserve your spot in our premium business lounge and enjoy a luxurious travel experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Book Online
              </button>
              <a
                href="tel:+911612345683"
                className="bg-purple-800 hover:bg-purple-900 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
              >
                Call: +91 161 234 5683
              </a>
            </div>
          </div>
        </div>

        <AdBanner ads={ads} />
      </div>

      <Footer />
    </div>
  );
};

export default BusinessLounge;