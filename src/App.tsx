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

function App() {
      id: 3,
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FlightInfo />
      <AdBanner />
      <Services />
      <AdBanner />
      <TaxiServices />
      <AdBanner />
      <Hotels />
      <AdBanner />
      <Parking />
      <AdBanner />
      <PickupServices />
      <AdBanner />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;