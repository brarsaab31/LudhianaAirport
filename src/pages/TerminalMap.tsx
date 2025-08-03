import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdBanner from '../components/AdBanner';
import { MapPin, Coffee, ShoppingBag, Wifi, Car, Plane, Users, Info } from 'lucide-react';

const TerminalMap = () => {
  const [selectedFloor, setSelectedFloor] = useState('ground');

  const ads = [
    {
      id: 1,
      title: 'Navigation Apps',
      description: 'Find your way with ease',
      image: 'https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://maps.google.com',
      color: 'bg-blue-600'
    },
    {
      id: 2,
      title: 'Airport Services',
      description: 'Complete terminal assistance',
      image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.airport-services.com',
      color: 'bg-green-600'
    },
    {
      id: 3,
      title: 'Travel Guide',
      description: 'Your complete travel companion',
      image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.lonelyplanet.com',
      color: 'bg-purple-600'
    }
  ];

  const facilities = {
    ground: [
      { icon: Plane, name: 'Gates A1-A5', position: { x: 20, y: 30 }, color: 'text-blue-600' },
      { icon: Plane, name: 'Gates B1-B5', position: { x: 80, y: 30 }, color: 'text-blue-600' },
      { icon: Coffee, name: 'Food Court', position: { x: 50, y: 50 }, color: 'text-orange-600' },
      { icon: ShoppingBag, name: 'Duty Free', position: { x: 30, y: 60 }, color: 'text-purple-600' },
      { icon: Car, name: 'Baggage Claim', position: { x: 50, y: 80 }, color: 'text-green-600' },
      { icon: Info, name: 'Information', position: { x: 50, y: 20 }, color: 'text-gray-600' },
    ],
    first: [
      { icon: Coffee, name: 'Premium Lounge', position: { x: 40, y: 40 }, color: 'text-gold-600' },
      { icon: Wifi, name: 'Business Center', position: { x: 60, y: 40 }, color: 'text-blue-600' },
      { icon: Users, name: 'VIP Services', position: { x: 50, y: 60 }, color: 'text-purple-600' },
      { icon: Coffee, name: 'Executive Dining', position: { x: 30, y: 30 }, color: 'text-orange-600' },
    ]
  };

  const floorInfo = {
    ground: {
      title: 'Ground Floor',
      description: 'Main terminal area with gates, baggage claim, and essential services'
    },
    first: {
      title: 'First Floor',
      description: 'Premium services, lounges, and business facilities'
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        <div className="bg-gradient-to-r from-green-600 to-green-700 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Terminal Map</h1>
            <p className="text-xl text-green-100">
              Navigate the airport with ease using our interactive terminal map.
            </p>
          </div>
        </div>

        <AdBanner ads={ads} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Floor Selection */}
          <div className="text-center mb-8">
            <div className="inline-flex bg-white rounded-lg p-1 shadow-lg">
              <button
                onClick={() => setSelectedFloor('ground')}
                className={`px-6 py-3 rounded-md font-semibold transition-all ${
                  selectedFloor === 'ground'
                    ? 'bg-green-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Ground Floor
              </button>
              <button
                onClick={() => setSelectedFloor('first')}
                className={`px-6 py-3 rounded-md font-semibold transition-all ${
                  selectedFloor === 'first'
                    ? 'bg-green-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                First Floor
              </button>
            </div>
          </div>

          {/* Floor Information */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {floorInfo[selectedFloor as keyof typeof floorInfo].title}
            </h2>
            <p className="text-gray-600">
              {floorInfo[selectedFloor as keyof typeof floorInfo].description}
            </p>
          </div>

          {/* Interactive Map */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
              <h3 className="text-xl font-bold">Interactive Terminal Map</h3>
              <p className="text-green-100">Click on any facility for more information</p>
            </div>

            <div className="p-8">
              <div className="relative bg-gray-100 rounded-xl h-96 overflow-hidden">
                {/* Terminal Layout Background */}
                <div className="absolute inset-4 bg-white rounded-lg border-2 border-gray-300">
                  {/* Terminal Shape */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gray-200 rounded-lg flex items-center justify-center text-xs font-semibold text-gray-600">
                    Main Entrance
                  </div>
                  
                  {/* Facility Markers */}
                  {facilities[selectedFloor as keyof typeof facilities].map((facility, index) => (
                    <div
                      key={index}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                      style={{
                        left: `${facility.position.x}%`,
                        top: `${facility.position.y}%`
                      }}
                    >
                      <div className={`${facility.color} bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110`}>
                        <facility.icon className="h-6 w-6" />
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        {facility.name}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Coming Soon Overlay */}
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center">
                    <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Map Coming Soon</h3>
                    <p className="text-gray-600">Detailed terminal map will be available when the airport opens</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Facility Legend */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {facilities[selectedFloor as keyof typeof facilities].map((facility, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className={`${facility.color} bg-gray-50 p-3 rounded-lg`}>
                    <facility.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{facility.name}</h3>
                    <p className="text-gray-600 text-sm">
                      {selectedFloor === 'ground' ? 'Ground Floor' : 'First Floor'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Navigation */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Need Directions?</h2>
            <p className="text-green-100 mb-6">
              Our staff is available 24/7 to help you navigate the terminal
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Download Map PDF
              </button>
              <button className="bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                Contact Information Desk
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

export default TerminalMap;