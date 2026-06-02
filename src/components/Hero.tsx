import React from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';

const Hero = () => {
  return (
    // Apply the background image to the full section container
    <section 
      id="home" 
      className="relative flex flex-col items-center justify-center min-h-screen py-20 text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/ChatGPT_Image_May_30,_2026,_08_25_44_AM.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
          Welcome to <span className="block text-amber-300">Halwara International Airport</span>
        </h1>

        <p className="text-xl mb-8 text-gray-200">
          Punjab’s newest international gateway, connecting Ludhiana to the world.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {[
            { icon: MapPin, title: "Strategic Location", desc: "Heart of Punjab" },
            { icon: Calendar, title: "Inaugurated Feb 2026", desc: "Flights March 2026" },
            { icon: Users, title: "World-Class Service", desc: "Modern amenities" }
          ].map((item, i) => (
            <div key={i} className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <item.icon className="h-8 w-8 text-amber-400 mx-auto mb-3" />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold transition">
          Explore Services
        </button>
      </div>
    </section>
  );
};

export default Hero;