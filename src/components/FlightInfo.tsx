import React, { useState, useEffect } from 'react';
import { Plane, Clock, Calendar, AlertCircle, RefreshCw } from 'lucide-react';

interface Flight {
  id?: string | number;
  flight: string;
  destination?: string;
  origin?: string;
  time: string;
  status: string;
  gate?: string;
}

const FlightInfo = () => {
  const [activeTab, setActiveTab] = useState('departures');
  const [flights, setFlights] = useState<{ departures: Flight[]; arrivals: Flight[] }>({
    departures: [],
    arrivals: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFlights();
  }, []);

  const fetchFlights = async () => {
    setLoading(true);
    setError(null);
    try {
      const apiKey = import.meta.env.VITE_AVIATIONSTACK_API_KEY;

      if (!apiKey) {
        setError('Get free API key at aviationstack.com');
        setFlights({
          departures: getDemoFlights('departures'),
          arrivals: getDemoFlights('arrivals')
        });
        setLoading(false);
        return;
      }

      const response = await fetch(
        `http://api.aviationstack.com/v1/flights?access_key=ea3a35ef1e722c5709921699b40ef831}&limit=8`
      );

      if (!response.ok) {
        throw new Error('API error');
      }

      const data = await response.json();
      const allFlights = data.data || [];

      const departuresData = allFlights.filter((f: any) => f.type === 'departure').slice(0, 4);
      const arrivalsData = allFlights.filter((f: any) => f.type === 'arrival').slice(0, 4);

      const formattedDepartures = departuresData.map((flight: any) => formatFlight(flight));
      const formattedArrivals = arrivalsData.map((flight: any) => formatFlight(flight));

      setFlights({
        departures: formattedDepartures.length > 0 ? formattedDepartures : getDemoFlights('departures'),
        arrivals: formattedArrivals.length > 0 ? formattedArrivals : getDemoFlights('arrivals')
      });
    } catch (err) {
      console.error('Error fetching flights:', err);
      setError('Using demo data');
      setFlights({
        departures: getDemoFlights('departures'),
        arrivals: getDemoFlights('arrivals')
      });
    } finally {
      setLoading(false);
    }
  };

  const formatFlight = (flight: any) => {
    const time = flight.departure?.estimated?.slice(11, 16) || flight.departure?.scheduled?.slice(11, 16) || 'TBD';
    const location = flight.type === 'departure'
      ? flight.arrival?.iata || 'Unknown'
      : flight.departure?.iata || 'Unknown';

    return {
      id: flight.flight?.iata || Math.random(),
      flight: `${flight.airline?.iata || 'XX'} ${flight.flight?.number || 'XXX'}`,
      [flight.type === 'departure' ? 'destination' : 'origin']: location,
      time,
      status: getFlightStatus(flight.flight_status),
      gate: flight.departure?.gate || flight.arrival?.gate || 'TBD'
    };
  };

  const getFlightStatus = (status: string) => {
    const statusMap: { [key: string]: string } = {
      'scheduled': 'On Time',
      'active': 'In Flight',
      'landed': 'Landed',
      'cancelled': 'Cancelled',
      'incident': 'Delayed',
      'diverted': 'Diverted'
    };
    return statusMap[status?.toLowerCase()] || 'On Time';
  };

  const getDemoFlights = (type: 'departures' | 'arrivals'): Flight[] => {
    if (type === 'departures') {
      return [
        { id: 1, flight: 'AI 463', destination: 'Delhi', time: '08:30', status: 'On Time', gate: 'A1' },
        { id: 2, flight: 'SG 8721', destination: 'Mumbai', time: '10:15', status: 'Delayed', gate: 'B2' },
        { id: 3, flight: '6E 2341', destination: 'Bangalore', time: '14:20', status: 'On Time', gate: 'A3' },
        { id: 4, flight: 'UK 955', destination: 'Kolkata', time: '16:45', status: 'In Flight', gate: 'B1' },
      ];
    }
    return [
      { id: 1, flight: 'AI 464', origin: 'Delhi', time: '09:45', status: 'Landed', gate: 'A1' },
      { id: 2, flight: 'SG 8722', origin: 'Mumbai', time: '11:30', status: 'On Time', gate: 'B2' },
      { id: 3, flight: '6E 2342', origin: 'Bangalore', time: '15:15', status: 'Delayed', gate: 'A3' },
      { id: 4, flight: 'UK 956', origin: 'Kolkata', time: '17:20', status: 'On Time', gate: 'B1' },
    ];
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'On Time': return 'text-green-600 bg-green-50';
      case 'Delayed': return 'text-red-600 bg-red-50';
      case 'In Flight': return 'text-blue-600 bg-blue-50';
      case 'Landed': return 'text-gray-600 bg-gray-50';
      case 'Cancelled': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <section id="flights" className="py-20 bg-gray-50" aria-labelledby="flight-info-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="flight-info-heading" className="text-4xl font-bold text-gray-900 mb-4">Flight Information</h2>
          {error && (
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <AlertCircle className="h-4 w-4" />
              {error}
            </div>
          )}
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {loading ? 'Loading flight schedules...' : 'Stay updated with real-time flight schedules and gate information.'}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
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

              <div className="flex items-center space-x-6 text-white">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5" />
                  <span className="text-sm">Today, {new Date().toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                <button
                  onClick={fetchFlights}
                  disabled={loading}
                  className="bg-white/20 hover:bg-white/30 disabled:opacity-50 text-white px-3 py-1 rounded-lg transition-all flex items-center space-x-2"
                  title="Refresh flight data"
                >
                  <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                  <span className="text-xs">Refresh</span>
                </button>
              </div>
            </div>
          </div>

          <div className="p-6">
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
                    <tr key={flight.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
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
                          {activeTab === 'departures' ? flight.destination : flight.origin}
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
