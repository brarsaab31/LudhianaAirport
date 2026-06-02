import React from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.35)), url('/ChatGPT_Image_May_30,_2026,_08_25_44_AM.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center text-white">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 drop-shadow-lg">
            Welcome to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-50">
              Halwara International Airport
            </span>
          </h1>

          <p className="text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Punjab's newest international gateway, connecting Ludhiana to the
            world with modern facilities and exceptional service.
          </p>

          <p className="mt-6 text-lg italic text-white/90">
            "A helpful guide sharing info and updates about Halwara
            International Airport for everyone's ease."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
            <div className="bg-black/35 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <MapPin className="h-10 w-10 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3">
                Strategic Location
              </h3>
              <p className="text-gray-100">
                Prime location in the heart of Punjab
              </p>
            </div>

            <div className="bg-black/35 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <Calendar className="h-10 w-10 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3">
                Inaugurated on 1st Feb 2026
              </h3>
              <p className="text-gray-100">
                Expected Flights in March 2026
              </p>
            </div>

            <div className="bg-black/35 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <Users className="h-10 w-10 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3">
                World-Class Service
              </h3>
              <p className="text-gray-100">
                Modern amenities and facilities
              </p>
            </div>
          </div>

          <div className="mt-16">
            <button
              onClick={() =>
                document
                  .getElementById('flights')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-4 rounded-lg text-xl font-semibold transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;