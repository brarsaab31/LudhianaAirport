import React, { useState } from 'react';
import { Plane, Clock, ArrowRight, Search, Calendar } from 'lucide-react';

const FlightInfo = () => {
  const [activeTab, setActiveTab] = useState('departures');

  const flights = {
    departures: [
      { id: 1, flight: 'AI 463', destination: 'Delhi', time: '08:30', status: 'On Time', gate: 'A1' },
      { id: 2, flight: 'SG 8721', destination: 'Mumbai', time: '10:15', status: 'Delayed', gate: 'B2' },
      { id: 3, flight: '6E 2341', destination: 'Bangalore', time: '14:20', status: 'On Time', gate: 'A3' },
      { id: 4, flight: 'UK 955', destination: 'Kolkata', time: '16:45', status: 'Boarding', gate: 'B1' },
    ],
    arrivals: [
      { id: 1, flight: 'AI 464', origin: 'Delhi', time: '09:45', status: 'Landed', gate: 'A1' },
      { id: 2, flight: 'SG 8722', origin: 'Mumbai', time: '11:30', status: 'On Time', gate: 'B2' },
      { id: 3, flight: '6E 2342', origin: 'Bangalore', time: '15:15', status: 'Delayed', gate: 'A3' },
      { id: 4, flight: 'UK 956', origin: 'Kolkata', time: '17:20', status: 'On Time', gate: 'B1' },
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'On Time': return 'text-green-600 bg-green-50';
      case 'Delayed': return 'text-red-600 bg-red-50';
      case 'Boarding': return 'text-blue-600 bg-blue-50';
      case 'Landed': return 'text-gray-600 bg-gray-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <section id="flights" className="py-20 bg-gray-50" aria-labelledby="flight-info-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="flight-info-heading" className="text-4xl font-bold text-gray-900 mb-4">Flight Information</h2>
          <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Coming Soon - Not Live Status
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with real-time flight schedules and gate information
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative">
          {/* Diagonal strike-through overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-0 w-full h-full">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line 
                    x1="0" 
                    y1="0" 
                    x2="100" 
                    y2="100" 
                    stroke="#dc2626" 
                    strokeWidth="0.5" 
                    opacity="0.8"
                  />
                  <line 
                    x1="0" 
                    y1="100" 
                    x2="100" 
                    y2="0" 
                    stroke="#dc2626" 
                    strokeWidth="0.5" 
                    opacity="0.8"
                  />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex space-x-1 bg-white/10 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('departures')}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                    activeTab === 'departures' 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  Departures
                </button>
                <button
                  onClick={() => setActiveTab('arrivals')}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                    activeTab === 'arrivals' 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  Arrivals
                </button>
              </div>

              <div className="flex items-center space-x-3 text-white">
                <Calendar className="h-5 w-5" />
                <span className="text-sm">Today, {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
            </div>
          </div>

          <div className="p-6 relative">
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold opacity-90 z-20">
              DEMO DATA
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Flight</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">
                      {activeTab === 'departures' ? 'Destination' : 'Origin'}
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Time</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Status</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Gate</th>
                  </tr>
                </thead>
                <tbody>
                  {flights[activeTab as keyof typeof flights].map((flight) => (
                    <tr key={flight.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors opacity-75">
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-3">
                          <div className="bg-blue-100 p-2 rounded-lg">
                            <Plane className={`h-4 w-4 text-blue-600 ${
                              activeTab === 'departures' ? 'rotate-45' : '-rotate-45'
                            }`} />
                          </div>
                          <span className="font-semibold text-gray-900">{flight.flight}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-gray-900 font-medium">
                          {activeTab === 'departures' ? flight.destination : (flight as any).origin}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-900 font-medium">{flight.time}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(flight.status)}`}>
                          {flight.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-gray-900 font-medium">{flight.gate}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlightInfo;