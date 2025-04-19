import React from 'react';

const HeroBanner: React.FC = () => {
  return (
    <div className="pt-16">
      <div className="relative h-[80vh] bg-gradient-to-r from-pink-100 to-blue-100 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20"></div>
        
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="max-w-2xl text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Adorable Styles for Your Little One
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-xl mx-auto">
              Discover our collection of beautiful baby dresses and accessories made with love and care.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#products" 
                className="px-10 py-4 bg-pink-500 text-white rounded-full font-medium hover:bg-pink-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-lg"
              >
                Shop Now
              </a>
              <a 
                href="#" 
                className="px-10 py-4 bg-white text-pink-500 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-lg"
              >
                Size Guide
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-blue-200 rounded-full opacity-60 blur-2xl"></div>
        <div className="absolute -top-8 -left-8 w-64 h-64 bg-pink-200 rounded-full opacity-60 blur-xl"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-pink-300 rounded-full opacity-40 blur-lg"></div>
      </div>
    </div>
  );
};

export default HeroBanner;