import React, { useState, useEffect } from 'react';
import { Menu, X, Plane, Facebook, Twitter, Instagram } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const navItem = navItems.find(item => item.id === sectionId);
    if (navItem?.isPage) {
      if (sectionId === 'home') {
        navigate('/');
      } else {
        navigate(`/${sectionId}`);
      }
    } else {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About', isPage: true },
    { id: 'news', label: 'News', isPage: true },
    { id: 'flights', label: 'Flights' },
    { id: 'services', label: 'Services' },
    { id: 'airport-taxi', label: 'Taxi Services', isPage: true },
    { id: 'hotel-booking', label: 'Hotels', isPage: true },
    { id: 'parking', label: 'Parking' },
    { id: 'pickup', label: 'Pick-up' },
    { id: 'advertise', label: 'Advertise', isPage: true },
    { id: 'contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/halwaraairport', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/halwaraairport', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/ludhianaairport', label: 'Instagram' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Plane className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Halwara International Airport
              </h1>
              <div className="flex items-center space-x-3">
                <p className="text-sm text-gray-600">
                  Coming Soon
                </p>
                <div className="flex space-x-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors hover:scale-110 transform duration-200"
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              >
                {item.label}
              </button>
            ))}
            
            <div className="px-4 py-2 border-t border-gray-200 mt-2">
              <p className="text-sm text-gray-600 mb-2">Follow us:</p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;