import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, Wifi, Coffee, ShoppingBag, CreditCard, Phone } from 'lucide-react';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Car,
      title: 'Taxi Services',
      description: 'Reliable taxi services available 24/7 with pre-booking options',
      features: ['24/7 Availability', 'Online Booking', 'Fixed Rates', 'Professional Drivers'],
      color: 'bg-blue-500'
    },
    {
      icon: Wifi,
      title: 'Free WiFi',
      description: 'High-speed internet connectivity throughout the airport',
      features: ['Unlimited Access', 'High Speed', 'Secure Connection', 'Multiple Zones'],
      color: 'bg-green-500'
    },
    {
      icon: Coffee,
      title: 'Dining & Retail',
      description: 'Variety of restaurants, cafes, and retail outlets',
      features: ['Local Cuisine', 'International Brands', 'Duty-Free Shopping', '24/7 Options'],
      color: 'bg-orange-500'
    },
    {
      icon: CreditCard,
      title: 'Currency Exchange',
      description: 'Foreign exchange services with competitive rates',
      features: ['Multiple Currencies', 'Competitive Rates', 'Quick Service', 'Secure Transactions'],
      color: 'bg-purple-500'
    },
    {
      icon: Phone,
      title: 'Customer Support',
      description: 'Dedicated support team to assist with all your needs',
      features: ['24/7 Helpdesk', 'Multilingual Staff', 'Lost & Found', 'Travel Assistance'],
      color: 'bg-red-500'
    },
    {
      icon: ShoppingBag,
      title: 'Baggage Services',
      description: 'Comprehensive baggage handling and storage solutions',
      features: ['Left Luggage', 'Porter Service', 'Wrapping Service', 'Priority Handling'],
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="services-heading" className="text-4xl font-bold text-gray-900 mb-4">Airport Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive services designed to make your travel experience seamless and comfortable. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="p-8">
                <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="px-8 pb-8">
                <button 
                  onClick={() => {
                    if (service.title === 'Taxi Services') {
                      document.getElementById('taxi-services')?.scrollIntoView({ behavior: 'smooth' });
                    } else if (service.title === 'Dining & Retail') {
                      navigate('/dining-retail');
                    } else if (service.title === 'Currency Exchange') {
                      window.open('https://www.xe.com', '_blank');
                    } else if (service.title === 'Customer Support') {
                      navigate('/contact');
                    } else if (service.title === 'Baggage Services') {
                      navigate('/baggage-claims');
                    }
                  }}
                  className="w-full bg-gray-900 hover:bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;