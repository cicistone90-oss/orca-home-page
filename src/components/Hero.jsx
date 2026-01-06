import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm">
                Next-Gen Payment Solutions
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Chargeback
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Volume Specialists
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Secure payment processing solutions that reduce chargebacks,
              increase revenue, and protect your business from fraud with 
              <span className="text-cyan-400 font-semibold"> AI-powered technology</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-primary text-lg px-8 py-4">
                Get Started
              </button>
              <button className="btn btn-secondary text-lg px-8 py-4">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Visual - Logo Left Half */}
          <div className="relative flex justify-center items-center">
            <div className="relative">
              {/* Logo container with glow effect */}
              <div className="w-96 h-96 relative">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                
                {/* Logo image - left half visible */}
                <div className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden rounded-full border-2 border-cyan-500/30">
                  <div className="w-full h-full relative">
                    <img 
                      src="/logo.png" 
                      alt="OrcaPay Logo" 
                      className="w-full h-full object-contain transform scale-150 translate-x-[38%]"
                      style={{
                        clipPath: 'polygon(0px 0px, 60% 30px, 0 100%, 40px 80%)'
                      }}
                    />
                    {/* Gradient overlay for smooth edge */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-gray-900 opacity-80"></div>
                  </div>
                </div>
                
                {/* Floating particles */}
                <div className="absolute top-1/4 -left-4 w-3 h-3 bg-cyan-400 rounded-full animate-bounce opacity-60"></div>
                <div className="absolute bottom-1/3 -left-8 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-40" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-1/2 -right-6 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-50" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-1/4 -right-2 w-2 h-2 bg-cyan-300 rounded-full animate-bounce opacity-70" style={{animationDelay: '1.5s'}}></div>
              </div>
            </div>

            {/* Additional floating elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;