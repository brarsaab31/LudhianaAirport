import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdBanner from '../components/AdBanner';
import { Helmet } from 'react-helmet-async';
import { Star, MapPin, Wifi, Car, Utensils, Dumbbell, Calendar, Users, Phone } from 'lucide-react';

const HotelBooking = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');

  const ads = [
    {
      id: 1,
      title: 'Hotel Booking',
      description: 'Best rates guaranteed',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.booking.com',
      color: 'bg-blue-600'
    },
    {
      id: 2,
      title: 'Travel Deals',
      description: 'Exclusive hotel packages',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.makemytrip.com',
      color: 'bg-green-600'
    },
    {
      id: 3,
      title: 'Luxury Stays',
      description: 'Premium accommodation',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.agoda.com',
      color: 'bg-purple-600'
    }
  ];

  const hotels = [
    {
      id: 1,
      name: 'Airport Grand Hotel',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      distance: '0.5 km from airport',
      price: '₹8,500',
      originalPrice: '₹10,000',
      amenities: [
        { icon: Wifi, text: 'Free WiFi' },
        { icon: Car, text: 'Airport Shuttle' },
        { icon: Utensils, text: 'Restaurant' },
        { icon: Dumbbell, text: 'Fitness Center' }
      ],
      features: ['24/7 Front Desk', 'Business Center', 'Room Service', 'Laundry'],
      description: 'Luxury hotel with modern amenities, perfect for business and leisure travelers.'
    },
    {
      id: 2,
      name: 'Ludhiana Business Inn',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.5,
      distance: '2.1 km from airport',
      price: '₹6,200',
      originalPrice: '₹7,500',
      amenities: [
        { icon: Wifi, text: 'Free WiFi' },
        { icon: Car, text: 'Parking' },
        { icon: Utensils, text: 'Breakfast' },
        { icon: Dumbbell, text: 'Gym' }
      ],
      features: ['Conference Room', 'Airport Transfer', 'Concierge', 'Mini Bar'],
      description: 'Modern business hotel with excellent facilities for corporate travelers.'
    },
    {
      id: 3,
      name: 'Heritage Palace Hotel',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.6,
      distance: '3.5 km from airport',
      price: '₹7,800',
      originalPrice: '₹9,200',
      amenities: [
        { icon: Wifi, text: 'Free WiFi' },
        { icon: Car, text: 'Valet Parking' },
        { icon: Utensils, text: 'Fine Dining' },
        { icon: Dumbbell, text: 'Spa & Pool' }
      ],
      features: ['Luxury Suites', 'Event Halls', 'Garden View', 'Butler Service'],
      description: 'Heritage property offering traditional hospitality with modern comforts.'
    },
    {
      id: 4,
      name: 'City Center Plaza',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.3,
      distance: '5.2 km from airport',
      price: '₹5,500',
      originalPrice: '₹6,800',
      amenities: [
        { icon: Wifi, text: 'Free WiFi' },
        { icon: Car, text: 'Free Parking' },
        { icon: Utensils, text: 'Multi-cuisine' },
        { icon: Dumbbell, text: 'Swimming Pool' }
      ],
      features: ['Shopping Mall Access', 'City Views', 'Event Spaces', 'Travel Desk'],
      description: 'Centrally located hotel with easy access to shopping and business districts.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Hotel Booking Near Halwara Airport - Best Rates Guaranteed</title>
        <meta name="description" content="Book hotels near Halwara International Airport at best rates. Find luxury and budget accommodations with airport shuttle, WiFi, and premium amenities." />
        <link rel="canonical" href="https://chic-tulumba-6b08d3.netlify.app/hotel-booking" />
        <meta property="og:title" content="Hotel Booking Near Halwara Airport - Best Rates Guaranteed" />
        <meta property="og:description" content="Book hotels near Halwara International Airport at best rates. Find luxury and budget accommodations." />
        <meta property="og:url" content="https://chic-tulumba-6b08d3.netlify.app/hotel-booking" />
      </Helmet>
      <Header />
      
      <div className="pt-20">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Hotel Booking</h1>
            <p className="text-xl text-blue-100">
              Find and book the perfect accommodation for your stay in Ludhiana.
            </p>
          </div>
        </div>

        <AdBanner ads={ads} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Search Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Search Hotels</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Date</label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5+">5+ Guests</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                  Search Hotels
                </button>
              </div>
            </div>
          </div>

          {/* Hotels List */}
          <div className="space-y-8">
            {hotels.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="relative">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold text-gray-900">{hotel.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2 p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                        <div className="flex items-center space-x-2 mb-2">
                          <MapPin className="h-4 w-4 text-blue-500" />
                          <span className="text-gray-600">{hotel.distance}</span>
                        </div>
                        <p className="text-gray-600">{hotel.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500 line-through">{hotel.originalPrice}</div>
                        <div className="text-3xl font-bold text-blue-600">{hotel.price}</div>
                        <div className="text-sm text-gray-600">per night</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                      {hotel.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <amenity.icon className="h-4 w-4 text-blue-500" />
                          <span className="text-sm text-gray-600">{amenity.text}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {hotel.features.map((feature, index) => (
                          <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                        Book Now
                      </button>
                      <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help with Booking?</h2>
            <p className="text-blue-100 mb-6">
              Our travel experts are available 24/7 to help you find the perfect accommodation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+911612345684"
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call: +91 161 234 5684</span>
              </a>
              <button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
                Chat with Expert
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

export default HotelBooking;