import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Target, Users, TrendingUp, Globe, Star, CheckCircle } from 'lucide-react';

const Advertise = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Targeted Audience',
      description: 'Reach thousands of travelers and airport visitors daily'
    },
    {
      icon: TrendingUp,
      title: 'High Visibility',
      description: 'Prime placement across our website and terminal displays'
    },
    {
      icon: Globe,
      title: 'Wide Reach',
      description: 'Connect with local, national, and international travelers'
    },
    {
      icon: Star,
      title: 'Premium Placement',
      description: 'Strategic positioning for maximum impact and engagement'
    }
  ];

  const packages = [
    {
      name: 'Basic Package',
      price: '₹25,000',
      duration: 'Per Month',
      features: [
        'Website banner placement',
        'Basic analytics reporting',
        'Standard support',
        'Mobile responsive ads'
      ],
      popular: false
    },
    {
      name: 'Premium Package',
      price: '₹50,000',
      duration: 'Per Month',
      features: [
        'Website banner placement',
        'Terminal display advertising',
        'Detailed analytics reporting',
        'Priority support',
        'Social media promotion',
        'Custom ad design'
      ],
      popular: true
    },
    {
      name: 'Enterprise Package',
      price: '₹1,00,000',
      duration: 'Per Month',
      features: [
        'Premium website placement',
        'Multiple terminal displays',
        'Comprehensive analytics',
        'Dedicated account manager',
        'Social media campaigns',
        'Custom marketing materials',
        'Event sponsorship opportunities'
      ],
      popular: false
    }
  ];

  const adFormats = [
    'Website Banner Ads',
    'Terminal Display Screens',
    'Mobile App Advertisements',
    'Email Newsletter Placement',
    'Social Media Promotion',
    'Event Sponsorships'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Advertise With Us</h1>
            <p className="text-xl text-purple-100">
              Reach thousands of travelers and boost your business visibility at Halwara International Airport.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Why Advertise Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Advertise With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Halwara International Airport offers unique advertising opportunities to connect your brand 
              with a diverse audience of travelers, business professionals, and local community members.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Advertising Formats */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Advertising Formats</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {adFormats.map((format, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700 font-medium">{format}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Packages */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Advertising Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-lg overflow-hidden ${pkg.popular ? 'ring-4 ring-purple-500 transform scale-105' : ''}`}>
                  {pkg.popular && (
                    <div className="bg-purple-600 text-white text-center py-2 font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-purple-600">{pkg.price}</span>
                      <span className="text-gray-600 ml-2">{pkg.duration}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-colors ${
                      pkg.popular 
                        ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                        : 'bg-gray-900 hover:bg-purple-600 text-white'
                    }`}>
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Advertise?</h2>
            <p className="text-purple-100 mb-8 text-lg">
              Contact our advertising team to discuss your marketing needs and create a custom advertising solution for your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Mail className="h-8 w-8 mx-auto mb-3" />
                <h3 className="text-lg font-bold mb-2">Email Us</h3>
                <a 
                  href="mailto:info@ludhianaairport.com" 
                  className="text-purple-100 hover:text-white transition-colors"
                >
                  info@ludhianaairport.com
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Phone className="h-8 w-8 mx-auto mb-3" />
                <h3 className="text-lg font-bold mb-2">Call Us</h3>
                <a 
                  href="tel:+911612345678" 
                  className="text-purple-100 hover:text-white transition-colors"
                >
                  +91 161 234 5678
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <MapPin className="h-8 w-8 mx-auto mb-3" />
                <h3 className="text-lg font-bold mb-2">Visit Us</h3>
                <p className="text-purple-100">
                  Halwara International Airport<br />
                  Ludhiana, Punjab
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@ludhianaairport.com?subject=Advertising Inquiry&body=Hello, I am interested in advertising opportunities at Halwara International Airport. Please provide more information about your advertising packages and rates."
                className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Send Email Inquiry
              </a>
              <a
                href="tel:+911612345678"
                className="bg-purple-800 hover:bg-purple-900 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Advertise;