import React from 'react';
import { Plane, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Flight Status', path: '/flight-status', external: false },
    { name: 'Baggage Claims', path: '/baggage-claims', external: false },
    { name: 'Terminal Map', path: '/terminal-map', external: false },
    { name: 'Parking', path: '/#parking', external: false },
    { name: 'Hotels', path: '/#hotels', external: false },
    { name: 'Services', path: '/#services', external: false }
  ];

  const services = [
    { name: 'Airport Taxi', path: '/#taxi-services' },
    { name: 'Hotel Bookings', path: '/#hotels' },
    { name: 'Car Rental', path: '/#pickup' },
    { name: 'Lost & Found', path: '/lost-and-found' },
    { name: 'Special Assistance', path: '/special-assistance' },
    { name: 'Business Lounge', path: '/business-lounge' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy', external: false },
    { name: 'Terms of Use', path: '/terms-of-use', external: false },
    { name: 'Contact', path: '/contact', external: false },
    { name: 'Disclaimer', path: '/disclaimer', external: false }
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
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {link.name}
                  </Link>
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
          </div>
        </div>
               <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Halwara International Airport. All rights reserved.
            </p>
            <div className="flex space-x-8 text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Privacy Policy</Link>
              <Link to="/terms-of-use" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Terms of Service</Link>
              <Link to="/disclaimer" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;