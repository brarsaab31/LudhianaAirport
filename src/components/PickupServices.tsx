import React, { useState } from 'react';
import { Users, Car, Clock, Phone, MapPin, Calendar, User } from 'lucide-react';

const PickupServices = () => {
  const [selectedService, setSelectedService] = useState('private');

  const services = {
    private: {
      title: 'Private Car Service',
      description: 'Luxury private vehicles for comfortable travel',
      vehicles: [
        { type: 'Sedan', capacity: '3 passengers', price: '₹15/km', image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { type: 'SUV', capacity: '6 passengers', price: '₹20/km', image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { type: 'Luxury', capacity: '4 passengers', price: '₹30/km', image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=400' }
      ],
      features: ['Professional chauffeur', 'Air conditioning', 'WiFi available', 'Meet & greet service']
    },
    shared: {
      title: 'Shared Ride Service',
      description: 'Cost-effective shared transportation',
      vehicles: [
        { type: 'Shared Car', capacity: '4-6 passengers', price: '₹8/km', image: 'https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { type: 'Mini Bus', capacity: '8-12 passengers', price: '₹6/km', image: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=400' }
      ],
      features: ['Shared with other passengers', 'Fixed routes', 'Scheduled departures', 'Budget-friendly']
    },
    group: {
      title: 'Group Transport',
      description: 'Perfect for large groups and families',
      vehicles: [
        { type: 'Minivan', capacity: '8-10 passengers', price: '₹18/km', image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { type: 'Bus', capacity: '20-30 passengers', price: '₹25/km', image: 'https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=400' }
      ],
      features: ['Large luggage capacity', 'Group discounts', 'Event transportation', 'Custom routes']
    }
  };

  const bookingSteps = [
    { icon: Calendar, title: 'Select Date & Time', description: 'Choose your pickup date and preferred time' },
    { icon: MapPin, title: 'Enter Destination', description: 'Provide your destination address' },
    { icon: Car, title: 'Choose Vehicle', description: 'Select from our fleet of vehicles' },
    { icon: Phone, title: 'Confirm Booking', description: 'Complete booking with contact details' }
  ];

  return (
    <section id="pickup" className="py-20 bg-gray-50" aria-labelledby="pickup-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="pickup-heading" className="text-4xl font-bold text-gray-900 mb-4">Pick-up Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Reliable transportation solutions to get you to and from the airport
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">How to Book</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {bookingSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <step.icon className="h-8 w-8 text-white" />
                  <div className="absolute -top-2 -right-2 bg-white text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
            <div className="flex flex-wrap justify-center gap-4">
              {Object.entries(services).map(([key, service]) => (
                <button
                  key={key}
                  onClick={() => setSelectedService(key)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedService === key
                      ? 'bg-white text-blue-600 shadow-lg transform scale-105'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>

          <div className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {services[selectedService as keyof typeof services].title}
              </h3>
              <p className="text-xl text-gray-600">
                {services[selectedService as keyof typeof services].description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {services[selectedService as keyof typeof services].vehicles.map((vehicle, index) => (
                <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                  <img
                    src={vehicle.image}
                    alt={vehicle.type}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{vehicle.type}</h4>
                    <div className="flex items-center space-x-2 mb-3">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">{vehicle.capacity}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">{vehicle.price}</span>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                        Select
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Service Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services[selectedService as keyof typeof services].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Book Pick-up Service
              </button>
              <p className="text-gray-600 mt-4">
                Need help? Call us at <a href="tel:+911234567890" className="text-blue-600 font-semibold">+91 123 456 7890</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickupServices;