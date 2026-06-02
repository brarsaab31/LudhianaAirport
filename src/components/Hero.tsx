const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative flex flex-col items-center justify-center min-h-screen py-20 text-white"
      style={{
        // This linear gradient adds a dark overlay so text is readable
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/ChatGPT_Image_May_30,_2026,_08_25_44_AM.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* All content goes here - this will now sit on top of the image */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
          Welcome to <span className="block text-amber-300">Halwara International Airport</span>
        </h1>

        <p className="text-xl mb-12 text-gray-200">
          Punjab’s newest international gateway, connecting Ludhiana to the world.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {/* Use bg-black/40 (semi-transparent) instead of a solid color to let the image show through */}
          <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <MapPin className="h-8 w-8 text-amber-400 mx-auto mb-3" />
            <h3 className="font-semibold">Strategic Location</h3>
          </div>
          {/* ... repeat for other cards */}
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold">
          Explore Services
        </button>
      </div>
    </section>
  );
};