import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FlightInfo from './components/FlightInfo';
import Services from './components/Services';
import TaxiServices from './components/TaxiServices';
import Hotels from './components/Hotels';
import Parking from './components/Parking';
import PickupServices from './components/PickupServices';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AdBanner from './components/AdBanner';
import ScrollingPlane from './components/ScrollingPlane';

function App() {
  // Advertisement data for different sections
  const flightAds = [
    {
      id: 1,
      title: 'IndiGo Airlines',
      description: 'Book flights with India\'s favorite airline',
      image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.goindigo.in',
      color: 'bg-blue-600'
    },
    {
      id: 2,
      title: 'Air India',
      description: 'Fly with the national carrier of India',
      image: 'https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.airindia.in',
      color: 'bg-red-600'
    },
    {
      id: 3,
      title: 'SpiceJet',
      description: 'Low-cost flights across India',
      image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.spicejet.com',
      color: 'bg-orange-600'
    }
  ];

  const serviceAds = [
    {
      id: 1,
      title: 'Punjab Tourism',
      description: 'Explore the beauty of Punjab',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.punjabtourism.gov.in',
      color: 'bg-green-600'
    },
    {
      id: 2,
      title: 'Ludhiana Hotels',
      description: 'Best accommodation in Ludhiana',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.booking.com',
      color: 'bg-purple-600'
    },
    {
      id: 3,
      title: 'Car Rentals',
      description: 'Rent a car for your journey',
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.zoomcar.com',
      color: 'bg-indigo-600'
    }
  ];

  const travelAds = [
    {
      id: 1,
      title: 'Travel Insurance',
      description: 'Secure your journey with insurance',
      image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.policybazaar.com',
      color: 'bg-teal-600'
    },
    {
      id: 2,
      title: 'Currency Exchange',
      description: 'Best forex rates in Punjab',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.thomascook.in',
      color: 'bg-yellow-600'
    },
    {
      id: 3,
      title: 'Airport Lounge',
      description: 'Premium lounge experience',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.dreamfolks.in',
      color: 'bg-gray-600'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <ScrollingPlane />
      <Hero />
      <FlightInfo />
      <AdBanner ads={flightAds} />
      <Services />
      <AdBanner ads={serviceAds} />
      <TaxiServices />
      <AdBanner ads={travelAds} />
      <Hotels />
      <AdBanner ads={flightAds} />
      <Parking />
      <AdBanner ads={serviceAds} />
      <PickupServices />
      <AdBanner ads={travelAds} />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;