import React from 'react';

const StartupVideo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Watch Our Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our innovative banking solutions are transforming the financial landscape and empowering businesses worldwide.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <video
              className="w-full h-auto max-h-96"
              controls
              poster="/logo.png"
              preload="metadata"
            >
              <source 
                src="/src/startup video/WhatsApp Video 2025-07-31 at 18.22.01_fcad2364.mp4" 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-lg">
              Experience the future of banking technology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupVideo; 