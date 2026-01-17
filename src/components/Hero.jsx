import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Chargeback",
      subtitle: "Volume Specialists",
      description: "Secure payment processing solutions that reduce chargebacks, increase revenue, and protect your business from fraud with AI-powered technology",
      badge: "Chargeback Protection",
      gradient: "from-cyan-400 via-blue-400 to-purple-400",
      bgGradient: "from-gray-900 via-blue-900 to-purple-900",
      type: "text"
    },
    {
      title: "Professional Payment",
      subtitle: "Processing",
      description: "Comprehensive payment acquiring solutions supporting multiple payment methods, providing secure, stable, and efficient payment processing services for your business",
      badge: "Payment Acquiring",
      gradient: "from-green-400 via-cyan-400 to-blue-400",
      bgGradient: "from-gray-900 via-green-900 to-blue-900",
      type: "text"
    },
    {
      title: "Professional Payment",
      subtitle: "Processing",
      description: "Comprehensive payment acquiring solutions supporting multiple payment methods, providing secure, stable, and efficient payment processing services for your business",
      badge: "Payment Acquiring",
      gradient: "from-blue-400 via-purple-400 to-cyan-400",
      bgGradient: "from-blue-900 via-purple-900 to-indigo-900",
      type: "features",
      features: [
        "Multi-channel Payment Integration",
        "Real-time Transaction Processing", 
        "Risk Management System"
      ]
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section id="home" className={`min-h-screen bg-gradient-to-br ${currentSlideData.bgGradient} flex items-center relative overflow-hidden transition-all duration-1000`}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm transition-all duration-500">
                {currentSlideData.badge}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-all duration-500">
              {currentSlideData.title}
              <br />
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentSlideData.gradient} transition-all duration-500`}>
                {currentSlideData.subtitle}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed transition-all duration-500">
              {currentSlideData.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
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
                Contact Us
              </Link>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center lg:justify-start space-x-3">
              {slides.map((_, index) => (
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
          </div>

          {/* Right Visual - Logo */}
          <div className="relative flex justify-center items-center mt-8 lg:mt-0">
            <div className="relative">
              {/* Logo container with glow effect */}
              <div className="w-80 h-80 md:w-96 md:h-96 relative">
                {/* Animated background glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${currentSlideData.gradient.replace('from-', 'from-').replace('via-', 'via-').replace('to-', 'to-')}/20 rounded-full blur-3xl animate-pulse transition-all duration-1000`}></div>
                
                {/* Logo image */}
                <div className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden rounded-full border-2 border-cyan-500/30">
                  <div className="w-full h-full relative">
                    <img 
                      src={logo} 
                      alt="OrcaPay Logo" 
                      className="w-full h-full object-contain transform scale-150 translate-x-[38%] transition-all duration-1000"
                      style={{
                        clipPath: 'polygon(0px 0px, 60% 30px, 0 100%, 40px 80%)'
                      }}
                    />
                    {/* Gradient overlay for smooth edge */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-transparent ${currentSlideData.bgGradient.includes('green') ? 'to-green-900' : 'to-gray-900'} opacity-80 transition-all duration-1000`}></div>
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

      {/* Slide Navigation Arrows */}
      <button
        onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 z-20"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 z-20"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
};

export default Hero;