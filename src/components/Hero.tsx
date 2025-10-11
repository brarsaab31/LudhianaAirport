import React from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" role="banner">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
        role="img"
        aria-label="Modern airport terminal with aircraft on tarmac"
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in mt-16 sm:mt-20 lg:mt-24">
          Welcome to 
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white" aria-label="Halwara International Airport">
             Halwara International Airport
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
          Punjab's newest international gateway, connecting Ludhiana to the world with modern facilities and exceptional service.<p>
          "A helpful guide sharing info and updates about Halwara International Airport for everyone’s ease."
          </p>
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <MapPin className="h-8 w-8 text-blue-200 mx-auto mb-3" aria-hidden="true" />
            <h3 className="text-lg font-semibold mb-2">Strategic Location</h3>
            <p className="text-blue-100">Prime location in the heart of Punjab</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Calendar className="h-8 w-8 text-blue-200 mx-auto mb-3" aria-hidden="true" />
            <h3 className="text-lg font-semibold mb-2">Opening Soon</h3>
            <p className="text-blue-100">Expected launch in 2025</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Users className="h-8 w-8 text-blue-200 mx-auto mb-3" aria-hidden="true" />
            <h3 className="text-lg font-semibold mb-2">World-Class Service</h3>
            <p className="text-blue-100">Modern amenities and facilities</p>
          </div>
        </div>
        
        <button 
          onClick={() => document.getElementById('flights')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          aria-label="Explore airport services and facilities"
        >
          Explore Services
        </button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;