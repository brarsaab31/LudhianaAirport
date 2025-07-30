import React from 'react';
import { Plane, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    'Flight Status',
    'Check-in',
    'Baggage Info',
    'Terminal Map',
    'Parking',
    'Shopping & Dining'
  ];

  const services = [
    'Airport Taxi',
    'Hotel Bookings',
    'Car Rental',
    'Lost & Found',
    'Special Assistance',
    'Business Lounge'
  ];

  const contact = [
    { icon: Phone, text: '+91 161 234 5678', href: 'tel:+91161234567' },
    { icon: Mail, text: 'info@ludhianaairport.com', href: 'mailto:info@ludhianaairport.com' },
    { icon: MapPin, text: 'Halwara, Ludhiana, Punjab, India', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/HalwaraAirport', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/halwaraairport', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/ludhianaairport/', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 p-3 rounded-xl">
                <Plane className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Halwara International Airport</h3>
                <p className="text-gray-400">Coming Soon</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Punjab's newest international gateway, connecting Ludhiana to the world with modern facilities and exceptional service.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              {contact.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <item.icon className="h-5 w-5 text-blue-400" />
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-semibold mb-2">Newsletter</h5>
              <p className="text-sm text-gray-400 mb-3">Stay updated with airport news</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-gray-700 text-white px-3 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Halwara International Airport. All rights reserved.
            </p>
            <div className="flex space-x-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;