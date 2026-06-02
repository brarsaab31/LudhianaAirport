import React from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative py-32 flex items-center justify-center overflow-hidden min-h-[120vh]" 
      role="banner"
      style={{
        backgroundImage: `url('/ChatGPT_Image_May_30,_2026,_08_25_44_AM.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* This overlay ensures the text remains readable over the image */}
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in mt-16 sm:mt-20 lg:mt-24 drop-shadow-lg">
          Welcome to
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-yellow-100" aria-label="Halwara International Airport">
             Halwara International Airport
          </span>
        </h1>

        <p className="text-xl sm:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto leading-relaxed drop-shadow">
          Punjab’s newest international gateway, connecting Ludhiana to the world with modern facilities and exceptional service.
          <p className="mt-4 text-lg italic">
          "A helpful guide sharing info and updates about Halwara International Airport for everyone’s ease."
          </p>
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          {/* Card backgrounds are now transparent to show the hero image underneath */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all">
            <MapPin className="h-8 w-8 text-amber-300 mx-auto mb-3" aria-hidden="true" />
            <h3 className="text-lg font-semibold mb-2">Strategic Location</h3>
            <p className="text-gray-100">Prime location in the heart of Punjab</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all">
            <Calendar className="h-8 w-8 text-amber-300 mx-auto mb-3" aria-hidden="true" />
            <h3 className="text-lg font-semibold mb-2">Inaugurated on 1st Feb 2026</h3>
            <p className="text-gray-100">Expected Flights in March 2026</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all">
            <Users className="h-8 w-8 text-amber-300 mx-auto mb-3" aria-hidden="true" />
            <h3 className="text-lg font-semibold mb-2">World-Class Service</h3>
            <p className="text-gray-100">Modern amenities and facilities</p>
          </div>
        </div>
        
        <button
          onClick={() => document.getElementById('flights')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
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