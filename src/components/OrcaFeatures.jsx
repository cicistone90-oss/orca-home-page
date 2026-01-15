import React from 'react';
import { Link } from 'react-router-dom';

const OrcaFeatures = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      title: "Digital Receipts",
      description: "Enhance user trust and reduce chargeback risk with OrcaPay.",
      bgGradient: "from-blue-600 to-blue-800"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
        </svg>
      ),
      title: "3D Secure",
      description: "Secure your payment pages with OrcaPay and 3D Secure.",
      bgGradient: "from-purple-600 to-purple-800"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h9V9zm0 6h-9v3h9v-3z"/>
        </svg>
      ),
      title: "Compelling Evidence 3.0",
      description: "Unlock strong evidence and documentation to challenge chargebacks effectively with OrcaPay.",
      bgGradient: "from-cyan-600 to-cyan-800"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            OrcaPay Advanced Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive payment protection solutions designed to minimize chargebacks and maximize security
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${feature.bgGradient} p-6 md:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white"></div>
                <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4 md:mb-6 inline-flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-white/90 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Protect Your Business?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of businesses that trust OrcaPay to reduce chargebacks and secure their payments.
            </p>
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrcaFeatures;