import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FlightInfo from './components/FlightInfo';
import Services from './components/Services';
import Hotels from './components/Hotels';
import Parking from './components/Parking';
import PickupServices from './components/PickupServices';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FlightInfo />
      <Services />
      <Hotels />
      <Parking />
      <PickupServices />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;