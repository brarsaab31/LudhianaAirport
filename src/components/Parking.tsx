import React, { useState } from 'react';
import { Car, Clock, Shield, CreditCard, MapPin, Check } from 'lucide-react';

const Parking = () => {
  const [selectedPlan, setSelectedPlan] = useState('short-term');

  const parkingPlans = {
    'short-term': {
      title: 'Short-term Parking',
      description: 'Perfect for pick-ups and drop-offs',
      rates: [
        { duration: 'First 30 minutes', price: 'FREE' },
        { duration: 'Up to 2 hours', price: '₹50' },
        { duration: 'Up to 4 hours', price: '₹100' },
        { duration: 'Up to 8 hours', price: '₹200' },
        { duration: 'Daily maximum', price: '₹400' }
      ],
      features: ['Closest to terminal', 'Covered parking', '24/7 security', 'CCTV monitoring']
    },
    'long-term': {
      title: 'Long-term Parking',
      description: 'Ideal for extended trips',
      rates: [
        { duration: '1-3 days', price: '₹300/day' },
        { duration: '4-7 days', price: '₹250/day' },
        { duration: '8-15 days', price: '₹200/day' },
        { duration: '15+ days', price: '₹150/day' },
        { duration: 'Monthly', price: '₹4,000' }
      ],
      features: ['Shuttle service', 'Car wash available', 'Vehicle maintenance', 'Valet parking']
    },
    'premium': {
      title: 'Premium Parking',
      description: 'Luxury parking experience',
      rates: [
        { duration: 'Hourly', price: '₹100' },
        { duration: 'Daily', price: '₹800' },
        { duration: 'Weekly', price: '₹5,000' },
        { duration: 'Monthly', price: '₹18,000' },
        { duration: 'Valet service', price: '+₹200' }
      ],
      features: ['Reserved spots', 'Covered & heated', 'Valet service', 'Car detailing']
    }
  };

  const facilities = [
    {
      icon: Shield,
      title: '24/7 Security',
      description: 'Round-the-clock security with CCTV surveillance'
    },
    {
      icon: Car,
      title: 'Shuttle Service',
      description: 'Free shuttle service to and from the terminal'
    },
    {
      icon: CreditCard,
      title: 'Multiple Payments',
      description: 'Cash, cards, and digital payments accepted'
    },
    {
      icon: MapPin,
      title: 'GPS Tracking',
      description: 'Easy vehicle location with our mobile app'
    }
  ];

  return (
    <section id="parking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Parking Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Secure, convenient parking solutions for all your travel needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {facilities.map((facility, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <facility.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{facility.title}</h3>
              <p className="text-gray-600">{facility.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(parkingPlans).map(([key, plan]) => (
              <button
                key={key}
                onClick={() => setSelectedPlan(key)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedPlan === key
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                {plan.title}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">
                {parkingPlans[selectedPlan as keyof typeof parkingPlans].title}
              </h3>
              <p className="text-blue-100">
                {parkingPlans[selectedPlan as keyof typeof parkingPlans].description}
              </p>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">Rates</h4>
                  <div className="space-y-4">
                    {parkingPlans[selectedPlan as keyof typeof parkingPlans].rates.map((rate, index) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <span className="text-gray-700 font-medium">{rate.duration}</span>
                        <span className="text-lg font-bold text-blue-600">{rate.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">Features</h4>
                  <div className="space-y-4">
                    {parkingPlans[selectedPlan as keyof typeof parkingPlans].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="bg-green-100 rounded-full p-1">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Reserve Parking Spot
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parking;