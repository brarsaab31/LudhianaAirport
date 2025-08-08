import React, { useState } from 'react';
import { Car, Clock, MapPin, Phone, Star, Users, Shield, CreditCard } from 'lucide-react';

const TaxiServices = () => {
  const [selectedCategory, setSelectedCategory] = useState('economy');

  const taxiCategories = {
    economy: {
      title: 'Economy Taxis',
      description: 'Affordable and reliable transportation',
      vehicles: [
        {
          name: 'Swift Dzire',
          image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
          capacity: '4 passengers',
          luggage: '2 bags',
          rate: '₹12/km',
          features: ['AC', 'GPS Tracking', 'Clean Vehicle']
        },
        {
          name: 'Hyundai i20',
          image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
          capacity: '4 passengers',
          luggage: '2 bags',
          rate: '₹14/km',
          features: ['AC', 'Music System', 'Phone Charger']
        }
      ]
    },
    premium: {
      title: 'Premium Taxis',
      description: 'Comfortable rides with extra amenities',
      vehicles: [
        {
          name: 'Honda City',
          image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
          capacity: '4 passengers',
          luggage: '3 bags',
          rate: '₹18/km',
          features: ['Leather Seats', 'WiFi', 'Bottled Water']
        },
        {
          name: 'Audi A4',
          image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800',
          capacity: '4 passengers',
          luggage: '4 bags',
          rate: '₹25/km',
          features: ['Luxury Interior', 'Professional Driver', 'Refreshments']
        }
      ]
    },
    suv: {
      title: 'SUV & Large Vehicles',
      description: 'Perfect for groups and families',
      vehicles: [
        {
          name: 'Mahindra XUV500',
          image: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=800',
          capacity: '7 passengers',
          luggage: '5 bags',
          rate: '₹22/km',
          features: ['Spacious', '7 Seater', 'Large Boot']
        },
        {
          name: 'Toyota Innova',
          image: 'https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=800',
          capacity: '8 passengers',
          luggage: '6 bags',
          rate: '₹20/km',
          features: ['Family Friendly', 'Comfortable', 'Reliable']
        }
      ]
    }
  };

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

  const popularDestinations = [
    { name: 'Ludhiana City Center', distance: '15 km', time: '25 min', price: '₹180-300' },
    { name: 'Railway Station', distance: '12 km', time: '20 min', price: '₹150-250' },
    { name: 'Bus Stand', distance: '18 km', time: '30 min', price: '₹220-350' },
    { name: 'Industrial Area', distance: '8 km', time: '15 min', price: '₹100-180' },
    { name: 'Mall Road', distance: '16 km', time: '28 min', price: '₹200-320' },
    { name: 'Civil Hospital', distance: '14 km', time: '22 min', price: '₹170-280' }
  ];

  return (
    <section id="taxi-services" className="py-20 bg-white" aria-labelledby="taxi-services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="taxi-services-heading" className="text-4xl font-bold text-gray-900 mb-4">Taxi Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Reliable, safe, and comfortable taxi services to get you anywhere in Ludhiana and beyond
          </p>
        </div>

        {/* Service Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Vehicle Categories */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Ride</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {Object.entries(taxiCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === key
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
              <h4 className="text-2xl font-bold mb-2">
                {taxiCategories[selectedCategory as keyof typeof taxiCategories].title}
              </h4>
              <p className="text-blue-100">
                {taxiCategories[selectedCategory as keyof typeof taxiCategories].description}
              </p>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {taxiCategories[selectedCategory as keyof typeof taxiCategories].vehicles.map((vehicle, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                    <img
                      src={vehicle.image}
                      alt={`${vehicle.name} - Airport taxi service vehicle available for booking from Halwara International Airport`}
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
                            <span key={featureIndex} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-blue-600">{vehicle.rate}</span>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Popular Destinations */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Destinations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDestinations.map((destination, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{destination.name}</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-between">
                    <span>Distance:</span>
                    <span className="font-medium">{destination.distance}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Travel Time:</span>
                    <span className="font-medium">{destination.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Fare Range:</span>
                    <span className="font-bold text-blue-600">{destination.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Book Your Ride?</h3>
          <p className="text-blue-100 mb-6">Call us now or book online for instant confirmation</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+911612345678"
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call: +91 161 234 5678</span>
            </a>
            <button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
              Book Online
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxiServices;