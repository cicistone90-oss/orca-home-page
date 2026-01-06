import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = 2;

  // Auto-slide functionality
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Slide 1: Chargeback Volume Specialists
  const ChargebackSlide = () => (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white text-center lg:text-left order-2 lg:order-1">
            <div className="mb-4 md:mb-6">
              <span className="inline-block px-3 md:px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-xs md:text-sm font-medium backdrop-blur-sm">
                Chargeback Protection
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
              Chargeback
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Volume Specialists
              </span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed px-2 lg:px-0">
              Secure payment processing solutions that reduce chargebacks, increase revenue, and protect your business from fraud with{' '}
              <span className="text-cyan-400 font-semibold">AI-powered technology</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start px-4 lg:px-0">
              {/* <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center text-sm md:text-base"
              >
                Get Started
              </Link> */}
              <Link 
                to="/contact" 
                className="border-2 border-white/30 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm text-center text-sm md:text-base"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Visual - Logo */}
          <div className="relative flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative">
              {/* Logo container with glow effect */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 relative">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                
                {/* Logo image */}
                <div className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden rounded-full border-2 border-cyan-500/30">
                  <div className="w-full h-full relative">
                    <img 
                      src={logo} 
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
                <div className="absolute top-1/4 -left-4 w-2 h-2 md:w-3 md:h-3 bg-cyan-400 rounded-full animate-bounce opacity-60"></div>
                <div className="absolute bottom-1/3 -left-6 md:-left-8 w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-400 rounded-full animate-bounce opacity-40" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-1/2 -right-4 md:-right-6 w-3 h-3 md:w-4 md:h-4 bg-blue-400 rounded-full animate-bounce opacity-50" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-1/4 -right-1 md:-right-2 w-1.5 h-1.5 md:w-2 md:h-2 bg-cyan-300 rounded-full animate-bounce opacity-70" style={{animationDelay: '1.5s'}}></div>
              </div>
            </div>

            {/* Additional floating elements */}
            <div className="absolute -top-6 md:-top-8 -right-6 md:-right-8 w-12 h-12 md:w-16 md:h-16 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-6 md:-bottom-8 -left-6 md:-left-8 w-16 h-16 md:w-20 md:h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );

  // Slide 2: Payment Acquiring
  const AcquiringSlide = () => (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-400 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-blue-400 rounded-full blur-2xl"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white text-center lg:text-left">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-cyan-300 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10z"/>
                <path d="M6 10h2v2H6zm0 4h8v2H6zm10-4h2v6h-2z"/>
              </svg>
              <span className="text-cyan-300 font-medium text-sm md:text-base">Payment Acquiring</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Professional Payment
              <span className="block text-cyan-300">Processing</span>
            </h2>
            
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Comprehensive payment acquiring solutions supporting multiple payment methods, providing secure, stable, and efficient payment processing services for your business.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-blue-100">Multi-channel Payment Integration</span>
              </div>
              
              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-blue-100">Real-time Transaction Processing</span>
              </div>
              
              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-blue-100">Risk Management System</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
              >
                Get Started
              </Link> */}
              <Link 
                to="/contact" 
                className="border-2 border-white/30 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm text-center"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10">
              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10z"/>
                      <path d="M6 10h2v2H6zm0 4h8v2H6zm10-4h2v6h-2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Payment Acquiring Excellence</h3>
                  <p className="text-blue-100 text-sm md:text-base">Secure, reliable, and efficient payment solutions</p>
                </div>

                {/* Features Grid */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-blue-100 text-sm">Global Payment Network</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-blue-100 text-sm">Advanced Security</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-blue-100 text-sm">Seamless Integration</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slider Container */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <div className="w-full flex-shrink-0">
            <ChargebackSlide />
          </div>
          <div className="w-full flex-shrink-0">
            <AcquiringSlide />
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-cyan-400 scale-125' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => goToSlide((currentSlide - 1 + totalSlides) % totalSlides)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 z-30"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={() => goToSlide((currentSlide + 1) % totalSlides)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 z-30"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default HeroSlider;