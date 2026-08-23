import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdBanner from '../components/AdBanner';
import { Helmet } from 'react-helmet-async';
import { Plane, Search, Calendar, Clock, MapPin, AlertCircle } from 'lucide-react';

const FlightStatus = () => {
  const [searchType, setSearchType] = useState('flight');
  const [searchQuery, setSearchQuery] = useState('');

  const ads = [
    {
      id: 1,
      title: 'Flight Tracking',
      description: 'Real-time flight information',
      image: 'https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.flightradar24.com',
      color: 'bg-blue-600'
    },
    {
      id: 2,
      title: 'Travel Updates',
      description: 'Stay informed about your journey',
      image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.makemytrip.com',
      color: 'bg-green-600'
    },
    {
      id: 3,
      title: 'Airport Services',
      description: 'Complete airport assistance',
      image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.cleartrip.com',
      color: 'bg-purple-600'
    }
  ];

  const sampleFlights = [
    {
      flight: 'AI 463',
      airline: 'Air India',
      route: 'Halwara → Delhi',
      scheduled: '08:30',
      estimated: '08:30',
      status: 'On Time',
      gate: 'A1',
      statusColor: 'text-green-600 bg-green-50'
    },
    {
      flight: '6E 2341',
      airline: 'IndiGo',
      route: 'Halwara → Mumbai',
      scheduled: '14:20',
      estimated: '14:45',
      status: 'Delayed',
      gate: 'B2',
      statusColor: 'text-red-600 bg-red-50'
    },
    {
      flight: 'SG 8721',
      airline: 'SpiceJet',
      route: 'Delhi → Halwara',
      scheduled: '16:45',
      estimated: '16:45',
      status: 'Boarding',
      gate: 'A3',
      statusColor: 'text-blue-600 bg-blue-50'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Flight Status - Halwara International Airport Live Updates</title>
        <meta name="description" content="Check real-time flight status, arrivals, and departures at Halwara International Airport. Get live updates on flight schedules and gate information." />
        <link rel="canonical" href="https://chic-tulumba-6b08d3.netlify.app/flight-status" />
        <meta property="og:title" content="Flight Status - Halwara International Airport Live Updates" />
        <meta property="og:description" content="Check real-time flight status, arrivals, and departures at Halwara International Airport." />
        <meta property="og:url" content="https://chic-tulumba-6b08d3.netlify.app/flight-status" />
      </Helmet>
      <Header />
      
      <div className="pt-20">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Flight Status</h1>
            <p className="text-xl text-blue-100">
              Check real-time flight information and updates.
            </p>
          </div>
        </div>

        <AdBanner ads={ads} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Search Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Search Flight Status</h2>
            
            <div className="flex justify-center mb-6">
              <div className="bg-gray-100 rounded-lg p-1 flex">
                <button
                  onClick={() => setSearchType('flight')}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${
                    searchType === 'flight'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Flight Number
                </button>
                <button
                  onClick={() => setSearchType('route')}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${
                    searchType === 'route'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Route
                </button>
              </div>
            </div>

            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={searchType === 'flight' ? 'Enter flight number (e.g., AI 463)' : 'Enter route (e.g., Delhi to Mumbai)'}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-semibold transition-colors">
                Search Flights
              </button>
            </div>
          </div>

          {/* Demo Notice */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
            <div className="flex items-center space-x-3">
              <AlertCircle className="h-6 w-6 text-yellow-600" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800">Demo Data</h3>
                <p className="text-yellow-700">
                  The flight information shown below is sample data. Real-time flight tracking will be available when the airport becomes operational.
                </p>
              </div>
            </div>
          </div>

          {/* Sample Flight Results */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Current Flight Status</h3>
              <div className="flex items-center space-x-2 text-blue-100">
                <Calendar className="h-4 w-4" />
                <span>Today, {new Date().toLocaleDateString()}</span>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-6">
                {sampleFlights.map((flight, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <Plane className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900">{flight.flight}</h4>
                          <p className="text-gray-600">{flight.airline}</p>
                          <p className="text-sm text-gray-500">{flight.route}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                          <p className="text-sm text-gray-500">Scheduled</p>
                          <p className="font-semibold text-gray-900">{flight.scheduled}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Estimated</p>
                          <p className="font-semibold text-gray-900">{flight.estimated}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Gate</p>
                          <p className="font-semibold text-gray-900">{flight.gate}</p>
                        </div>
                        <div>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${flight.statusColor}`}>
                            {flight.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Flight Alerts</h3>
              <p className="text-gray-600 mb-4">Get notified about flight status changes</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                Set Alert
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Terminal Map</h3>
              <p className="text-gray-600 mb-4">Find gates, facilities, and services</p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                View Map
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Plane className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Check-in</h3>
              <p className="text-gray-600 mb-4">Online check-in and boarding passes</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
                Check-in
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

export default FlightStatus;