import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdBanner from '../components/AdBanner';
import { Luggage, Clock, Phone, MapPin, AlertCircle, CheckCircle, FileText } from 'lucide-react';

const BaggageClaims = () => {
  const ads = [
    {
      id: 1,
      title: 'Travel Insurance',
      description: 'Protect your luggage and belongings',
      image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.policybazaar.com',
      color: 'bg-blue-600'
    },
    {
      id: 2,
      title: 'Luggage Services',
      description: 'Professional baggage handling',
      image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.samsonite.com',
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

  const claimSteps = [
    {
      icon: FileText,
      title: 'Report Missing Baggage',
      description: 'Report your missing baggage immediately at the baggage service counter',
      details: ['Fill out Property Irregularity Report (PIR)', 'Keep your baggage claim tickets', 'Get reference number']
    },
    {
      icon: Phone,
      title: 'Contact Airline',
      description: 'Contact your airline\'s baggage service department',
      details: ['Call airline customer service', 'Provide PIR reference number', 'Follow up regularly']
    },
    {
      icon: Clock,
      title: 'Track Your Claim',
      description: 'Monitor the status of your baggage claim',
      details: ['Use airline tracking system', 'Check for updates regularly', 'Maintain communication']
    },
    {
      icon: CheckCircle,
      title: 'Receive Compensation',
      description: 'Get your baggage back or receive compensation',
      details: ['Baggage delivery to address', 'Compensation for delays', 'Reimbursement for essentials']
    }
  ];

  const importantInfo = [
    {
      icon: AlertCircle,
      title: 'Report Immediately',
      description: 'Report missing or damaged baggage before leaving the airport',
      color: 'text-red-600 bg-red-50'
    },
    {
      icon: FileText,
      title: 'Keep Documents',
      description: 'Retain all baggage claim tickets, boarding passes, and receipts',
      color: 'text-blue-600 bg-blue-50'
    },
    {
      icon: Clock,
      title: 'Time Limits',
      description: 'File claims within 7 days for damaged baggage, 21 days for delayed baggage',
      color: 'text-orange-600 bg-orange-50'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Baggage Claims</h1>
            <p className="text-xl text-blue-100">
              Get help with lost, delayed, or damaged baggage claims.
            </p>
          </div>
        </div>

        <AdBanner ads={ads} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Important Information */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Important Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {importantInfo.map((info, index) => (
                <div key={index} className={`${info.color} rounded-xl p-6 text-center`}>
                  <div className="flex justify-center mb-4">
                    <info.icon className="h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                  <p className="text-sm">{info.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Claim Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Baggage Claim Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {claimSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <step.icon className="h-8 w-8 text-blue-600" />
                    <div className="absolute -top-2 -right-2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Baggage Service Contacts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Airport Baggage Service</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">+91 161 234 5681</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Baggage Service Counter, Terminal Building</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">24/7 Service Available</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Online Services</h3>
                <div className="space-y-4">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                    Track Your Baggage
                  </button>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                    File a Claim Online
                  </button>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                    Check Claim Status
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Compensation Information */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Compensation Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Luggage className="h-8 w-8 mx-auto mb-3" />
                <h3 className="text-lg font-bold mb-2">Delayed Baggage</h3>
                <p className="text-green-100">Compensation for essential items during delay</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <AlertCircle className="h-8 w-8 mx-auto mb-3" />
                <h3 className="text-lg font-bold mb-2">Lost Baggage</h3>
                <p className="text-green-100">Full compensation up to liability limits</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <FileText className="h-8 w-8 mx-auto mb-3" />
                <h3 className="text-lg font-bold mb-2">Damaged Baggage</h3>
                <p className="text-green-100">Repair or replacement compensation</p>
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

export default BaggageClaims;