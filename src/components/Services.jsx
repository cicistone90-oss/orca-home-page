import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Payment Processing',
      description: 'Secure and fast payment processing with advanced fraud detection and prevention',
      icon: '💳'
    },
    {
      title: 'Chargeback Protection',
      description: 'Comprehensive chargeback management and dispute resolution services',
      icon: '🛡️'
    },
    {
      title: 'Risk Management',
      description: 'Advanced risk assessment and real-time transaction monitoring',
      icon: '📊'
    },
    {
      title: 'Multi-Currency Support',
      description: 'Global payment solutions supporting 150+ currencies and local payment methods',
      icon: '🌍'
    },
    {
      title: 'API Integration',
      description: 'Developer-friendly APIs for seamless integration with your existing systems',
      icon: '⚡'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock customer support and technical assistance',
      icon: '📞'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm mb-6">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Products & Services We Offer
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Comprehensive payment solutions designed to grow your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="tech-card group hover:transform hover:scale-105 transition-all duration-300"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;