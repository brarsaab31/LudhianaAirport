import React from 'react';
import { Star, MapPin, Wifi, Car, Utensils, Dumbbell } from 'lucide-react';

const Hotels = () => {
  const hotels = [
    {
      id: 1,
      name: 'Airport Grand Hotel',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      distance: '0.5 km from airport',
      price: '₹8,500',
      amenities: [
        { icon: Wifi, text: 'Free WiFi' },
        { icon: Car, text: 'Airport Shuttle' },
        { icon: Utensils, text: 'Restaurant' },
        { icon: Dumbbell, text: 'Fitness Center' }
      ],
      features: ['24/7 Front Desk', 'Business Center', 'Room Service', 'Laundry']
    },
    {
      id: 2,
      name: 'Ludhiana Business Inn',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.5,
      distance: '2.1 km from airport',
      price: '₹6,200',
      amenities: [
        { icon: Wifi, text: 'Free WiFi' },
        { icon: Car, text: 'Parking' },
        { icon: Utensils, text: 'Breakfast' },
        { icon: Dumbbell, text: 'Gym' }
      ],
      features: ['Conference Room', 'Airport Transfer', 'Concierge', 'Mini Bar']
    },
    {
      id: 3,
      name: 'Heritage Palace Hotel',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.6,
      distance: '3.5 km from airport',
      price: '₹7,800',
      amenities: [
        { icon: Wifi, text: 'Free WiFi' },
        { icon: Car, text: 'Valet Parking' },
        { icon: Utensils, text: 'Fine Dining' },
        { icon: Dumbbell, text: 'Spa & Pool' }
      ],
      features: ['Luxury Suites', 'Event Halls', 'Garden View', 'Butler Service']
    }
  ];

  return (
    <section id="hotels" className="py-20 bg-gray-50" aria-labelledby="hotels-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="hotels-heading" className="text-4xl font-bold text-gray-900 mb-4">Best Hotels In Ludhiana</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comfortable accommodations within easy reach of the airport
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-gray-900">{hotel.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                
                <div className="flex items-center space-x-2 mb-4">
                  <MapPin className="h-4 w-4 text-blue-500" />
                  <span className="text-gray-600">{hotel.distance}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {hotel.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <amenity.icon className="h-4 w-4 text-blue-500" />
                      <span className="text-sm text-gray-600">{amenity.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {hotel.features.map((feature, index) => (
                      <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-gray-900">{hotel.price}</span>
                    <span className="text-gray-600 ml-1">/night</span>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-900 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
            View All Hotels
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hotels;