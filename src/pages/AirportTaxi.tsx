import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdBanner from '../components/AdBanner';
import { Helmet } from 'react-helmet-async';
import { Car, Clock, MapPin, Phone, Star, Users, Shield, CreditCard, Calculator } from 'lucide-react';

const AirportTaxi = () => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('economy');

  const ads = [
    {
      id: 1,
      title: 'Taxi Services',
      description: 'Reliable airport transfers',
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.uber.com',
      color: 'bg-yellow-600'
    },
    {
      id: 2,
      title: 'Cab Booking',
      description: 'Book your ride in advance',
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.ola.com',
      color: 'bg-green-600'
    },
    {
      id: 3,
      title: 'Airport Transfers',
      description: 'Professional chauffeur service',
      image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.meru.com',
      color: 'bg-blue-600'
    }
  ];

  const vehicleTypes = {
    economy: {
      title: 'Economy Taxis',
      description: 'Budget-friendly rides for everyday travel',
      rate: '₹12/km',
      basefare: '₹50',
      vehicles: [
        {
          name: 'Swift Dzire',
          image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
          capacity: '4 passengers',
          luggage: '2 bags',
          features: ['AC', 'GPS Tracking', 'Clean Vehicle', 'Music System']
        },
        {
          name: 'Hyundai i20',
          image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
          capacity: '4 passengers',
          luggage: '2 bags',
          features: ['AC', 'Phone Charger', 'Comfortable Seats', 'Safety Features']
        }
      ]
    },
    premium: {
      title: 'Premium Taxis',
      description: 'Comfortable rides with extra amenities',
      rate: '₹18/km',
      basefare: '₹100',
      vehicles: [
        {
          name: 'Honda City',
          image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
          capacity: '4 passengers',
          luggage: '3 bags',
          features: ['Leather Seats', 'WiFi', 'Bottled Water', 'Premium Interior']
        },
        {
          name: 'Toyota Camry',
          image: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=800',
          capacity: '4 passengers',
          luggage: '4 bags',
          features: ['Luxury Comfort', 'Professional Driver', 'Refreshments', 'Business Class']
        }
      ]
    },
    suv: {
      title: 'SUV & Large Vehicles',
      description: 'Perfect for groups and families',
      rate: '₹22/km',
      basefare: '₹150',
      vehicles: [
        {
          name: 'Mahindra XUV500',
          image: 'https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=800',
          capacity: '7 passengers',
          luggage: '5 bags',
          features: ['Spacious Interior', '7 Seater', 'Large Boot Space', 'Family Friendly']
        },
        {
          name: 'Toyota Innova',
          image: 'https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=800',
          capacity: '8 passengers',
          luggage: '6 bags',
          features: ['Group Travel', 'Comfortable Seating', 'Reliable', 'Extra Luggage Space']
        }
      ]
    }
  };

  const popularRoutes = [
    { from: 'Halwara Airport', to: 'Ludhiana City Center', distance: '15 km', time: '25 min', price: '₹180-300' },
    { from: 'Halwara Airport', to: 'Railway Station', distance: '12 km', time: '20 min', price: '₹150-250' },
    { from: 'Halwara Airport', to: 'Bus Stand', distance: '18 km', time: '30 min', price: '₹220-350' },
    { from: 'Halwara Airport', to: 'Industrial Area', distance: '8 km', time: '15 min', price: '₹100-180' },
    { from: 'Halwara Airport', to: 'Mall Road', distance: '16 km', time: '28 min', price: '₹200-320' },
    { from: 'Halwara Airport', to: 'Civil Hospital', distance: '14 km', time: '22 min', price: '₹170-280' }
  ];

  const services = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock taxi services for all your travel needs'
    },
    {
      icon: Phone,
      title: 'Easy Booking',
      description: 'Book via phone, app, or at our airport counter'
    },
    {
      icon: Shield,
      title: 'Licensed Drivers',
      description: 'All drivers are licensed, trained, and background verified'
    },
    {
      icon: CreditCard,
      title: 'Multiple Payment Options',
      description: 'Cash, cards, UPI, and digital wallets accepted'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Airport Taxi Service - Halwara to Ludhiana | 24/7 Available</title>
        <meta name="description" content="Book reliable airport taxi service from Halwara International Airport to Ludhiana. 24/7 availability, licensed drivers, multiple payment options." />
        <link rel="canonical" href="https://chic-tulumba-6b08d3.netlify.app/airport-taxi" />
        <meta property="og:title" content="Airport Taxi Service - Halwara to Ludhiana | 24/7 Available" />
        <meta property="og:description" content="Book reliable airport taxi service from Halwara International Airport to Ludhiana. 24/7 availability, licensed drivers." />
        <meta property="og:url" content="https://chic-tulumba-6b08d3.netlify.app/airport-taxi" />
      </Helmet>
      <Header />
      
      <div className="pt-20">
        <div className="bg-gradient-to-r from-yellow-600 to-orange-600 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Airport Taxi</h1>
            <p className="text-xl text-yellow-100">
              Reliable, safe, and comfortable taxi services to and from Halwara International Airport.
            </p>
          </div>
        </div>

        <AdBanner ads={ads} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Booking Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Book Your Taxi</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                <select
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="">Select pickup location</option>
                  <option value="airport">Halwara Airport</option>
                  <option value="city">Ludhiana City Center</option>
                  <option value="railway">Railway Station</option>
                  <option value="bus">Bus Stand</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                <select
                  value={toLocation}
                  onChange={(e) => setToLocation(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="">Select destination</option>
                  <option value="airport">Halwara Airport</option>
                  <option value="city">Ludhiana City Center</option>
                  <option value="railway">Railway Station</option>
                  <option value="bus">Bus Stand</option>
                  <option value="hotel">Hotel</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date & Time</label>
                <input
                  type="datetime-local"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-end">
                <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                  Get Quote
                </button>
              </div>
            </div>
          </div>

          {/* Service Features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Vehicle Categories */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Vehicle</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {Object.entries(vehicleTypes).map(([key, category]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedVehicle(key)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      selectedVehicle === key
                        ? 'bg-yellow-600 text-white shadow-lg transform scale-105'
                        : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-6 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-2xl font-bold mb-2">
                      {vehicleTypes[selectedVehicle as keyof typeof vehicleTypes].title}
                    </h4>
                    <p className="text-yellow-100">
                      {vehicleTypes[selectedVehicle as keyof typeof vehicleTypes].description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">
                      {vehicleTypes[selectedVehicle as keyof typeof vehicleTypes].rate}
                    </div>
                    <div className="text-yellow-100">
                      Base: {vehicleTypes[selectedVehicle as keyof typeof vehicleTypes].basefare}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {vehicleTypes[selectedVehicle as keyof typeof vehicleTypes].vehicles.map((vehicle, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h5 className="text-xl font-bold text-gray-900 mb-3">{vehicle.name}</h5>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-gray-500" />
                            <span className="text-gray-600">{vehicle.capacity}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-gray-500" />
                            <span className="text-gray-600">{vehicle.luggage}</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {vehicle.features.map((feature, featureIndex) => (
                              <span key={featureIndex} className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-sm">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg transition-colors">
                          Book This Vehicle
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Popular Routes */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Routes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularRoutes.map((route, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-2 mb-3">
                    <MapPin className="h-5 w-5 text-yellow-600" />
                    <h4 className="text-lg font-semibold text-gray-900">{route.from} → {route.to}</h4>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-between">
                      <span>Distance:</span>
                      <span className="font-medium">{route.distance}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Travel Time:</span>
                      <span className="font-medium">{route.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Fare Range:</span>
                      <span className="font-bold text-yellow-600">{route.price}</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-gray-100 hover:bg-yellow-50 text-gray-800 py-2 px-4 rounded-lg transition-colors">
                    Book This Route
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Booking */}
          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Book Your Taxi?</h2>
            <p className="text-yellow-100 mb-6">
              Call us now for instant booking or use our online booking system
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+911612345678"
                className="bg-white text-yellow-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call: +91 161 234 5678</span>
              </a>
              <button className="bg-yellow-800 hover:bg-yellow-900 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
                Book Online
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

export default AirportTaxi;