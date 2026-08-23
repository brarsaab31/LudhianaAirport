import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdBanner from '../components/AdBanner';
import { Car, Users, Fuel, Settings, Calendar, MapPin, Phone, Shield } from 'lucide-react';

const CarRental = () => {
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('economy');

  const ads = [
    {
      id: 1,
      title: 'Car Rental Services',
      description: 'Rent a car for your journey',
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.zoomcar.com',
      color: 'bg-orange-600'
    },
    {
      id: 2,
      title: 'Self Drive Cars',
      description: 'Freedom to explore at your pace',
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.revv.co.in',
      color: 'bg-green-600'
    },
    {
      id: 3,
      title: 'Luxury Car Hire',
      description: 'Premium vehicles for special occasions',
      image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.avis.com',
      color: 'bg-purple-600'
    }
  ];

  const carCategories = {
    economy: {
      title: 'Economy Cars',
      description: 'Budget-friendly options for city driving',
      cars: [
        {
          name: 'Maruti Swift',
          image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
          seats: 5,
          transmission: 'Manual',
          fuel: 'Petrol',
          price: '₹1,200',
          features: ['AC', 'Power Steering', 'Central Locking']
        },
        {
          name: 'Hyundai i10',
          image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
          seats: 5,
          transmission: 'Manual',
          fuel: 'Petrol',
          price: '₹1,000',
          features: ['AC', 'Music System', 'Power Windows']
        }
      ]
    },
    compact: {
      title: 'Compact Cars',
      description: 'Perfect balance of comfort and efficiency',
      cars: [
        {
          name: 'Honda City',
          image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
          seats: 5,
          transmission: 'Automatic',
          fuel: 'Petrol',
          price: '₹2,000',
          features: ['AC', 'Automatic', 'Bluetooth', 'Airbags']
        },
        {
          name: 'Hyundai Verna',
          image: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=800',
          seats: 5,
          transmission: 'Automatic',
          fuel: 'Diesel',
          price: '₹2,200',
          features: ['AC', 'Sunroof', 'Leather Seats', 'GPS']
        }
      ]
    },
    suv: {
      title: 'SUVs & Large Cars',
      description: 'Spacious vehicles for families and groups',
      cars: [
        {
          name: 'Mahindra XUV500',
          image: 'https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=800',
          seats: 7,
          transmission: 'Automatic',
          fuel: 'Diesel',
          price: '₹3,500',
          features: ['7 Seater', 'AWD', 'Touchscreen', 'Cruise Control']
        },
        {
          name: 'Toyota Innova',
          image: 'https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=800',
          seats: 8,
          transmission: 'Manual',
          fuel: 'Diesel',
          price: '₹3,000',
          features: ['8 Seater', 'Large Boot', 'Comfortable', 'Reliable']
        }
      ]
    },
    luxury: {
      title: 'Luxury Cars',
      description: 'Premium vehicles for special occasions',
      cars: [
        {
          name: 'BMW 3 Series',
          image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800',
          seats: 5,
          transmission: 'Automatic',
          fuel: 'Petrol',
          price: '₹8,000',
          features: ['Luxury Interior', 'Premium Sound', 'Navigation', 'Sunroof']
        },
        {
          name: 'Audi A4',
          image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
          seats: 5,
          transmission: 'Automatic',
          fuel: 'Petrol',
          price: '₹9,000',
          features: ['Premium Leather', 'Advanced Safety', 'Quattro AWD', 'Virtual Cockpit']
        }
      ]
    }
  };

  const services = [
    {
      icon: Shield,
      title: 'Comprehensive Insurance',
      description: 'Full coverage for peace of mind'
    },
    {
      icon: Phone,
      title: '24/7 Roadside Assistance',
      description: 'Help available whenever you need it'
    },
    {
      icon: MapPin,
      title: 'Multiple Pickup Locations',
      description: 'Convenient pickup and drop-off points'
    },
    {
      icon: Settings,
      title: 'Well-Maintained Fleet',
      description: 'Regular servicing and quality checks'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Car Rental</h1>
            <p className="text-xl text-orange-100">
              Rent a car and explore Ludhiana and Punjab at your own pace.
            </p>
          </div>
        </div>

        <AdBanner ads={ads} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Booking Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Book Your Car</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Date</label>
                <input
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Return Date</label>
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                  <option>Halwara Airport</option>
                  <option>Ludhiana City Center</option>
                  <option>Railway Station</option>
                  <option>Bus Stand</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                  Search Cars
                </button>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Car Categories */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Car</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {Object.entries(carCategories).map(([key, category]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      selectedCategory === key
                        ? 'bg-orange-600 text-white shadow-lg transform scale-105'
                        : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 text-white">
                <h4 className="text-2xl font-bold mb-2">
                  {carCategories[selectedCategory as keyof typeof carCategories].title}
                </h4>
                <p className="text-orange-100">
                  {carCategories[selectedCategory as keyof typeof carCategories].description}
                </p>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {carCategories[selectedCategory as keyof typeof carCategories].cars.map((car, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h5 className="text-xl font-bold text-gray-900 mb-3">{car.name}</h5>
                        
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="text-center">
                            <Users className="h-5 w-5 text-gray-500 mx-auto mb-1" />
                            <span className="text-sm text-gray-600">{car.seats} Seats</span>
                          </div>
                          <div className="text-center">
                            <Settings className="h-5 w-5 text-gray-500 mx-auto mb-1" />
                            <span className="text-sm text-gray-600">{car.transmission}</span>
                          </div>
                          <div className="text-center">
                            <Fuel className="h-5 w-5 text-gray-500 mx-auto mb-1" />
                            <span className="text-sm text-gray-600">{car.fuel}</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {car.features.map((feature, featureIndex) => (
                              <span key={featureIndex} className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-2xl font-bold text-orange-600">{car.price}</span>
                            <span className="text-gray-600 ml-1">/day</span>
                          </div>
                          <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors">
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

          {/* Contact Information */}
          <div className="mt-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Need Assistance?</h2>
            <p className="text-orange-100 mb-6">
              Our car rental experts are here to help you choose the perfect vehicle for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+911612345685"
                className="bg-white text-orange-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call: +91 161 234 5685</span>
              </a>
              <button className="bg-orange-800 hover:bg-orange-900 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
                Live Chat
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

export default CarRental;