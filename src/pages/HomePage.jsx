import React from 'react';
import Navbar from '../components/Navbar.jsx';
import HeroSlider from '../components/HeroSlider.jsx';
import TrustedBy from '../components/TrustedBy.jsx';
import Footer from '../components/Footer.jsx';
import { Link } from 'react-router-dom';

const HomePage = () => {
  // Products section data
  const products = [
    {
      title: 'Chargeback Alerts',
      description: 'Real-time alerts to prevent chargebacks before they occur with Ethoca and Verifi CDRN integration.',
      path: '/products/chargeback-alerts',
      features: ['Real-time notifications', 'Ethoca & Verifi integration', 'Automated responses']
    },
    {
      title: 'VAMP Monitor',
      description: 'Advanced monitoring system for transaction risk assessment and fraud prevention.',
      path: '/products/vamp-monitor',
      features: ['Risk scoring', 'Fraud detection', 'Real-time monitoring']
    },
    {
      title: 'Transaction Risk Tool API',
      description: 'Comprehensive API for transaction risk analysis and decision making.',
      path: '/products/transaction-risk-tool',
      features: ['API integration', 'Risk analysis', 'Decision engine']
    },
    {
      title: 'Payment Gateway',
      description: 'Unified payment infrastructure with intelligent routing, global reach, and enterprise-grade security for seamless payment processing.',
      path: '/products/payment-gateway',
      features: ['100+ payment processors', 'Intelligent smart routing', 'Global payment methods']
    },
    {
      title: 'White Label Solutions',
      description: 'Customizable payment processing solutions branded for your business.',
      path: '/products/white-label-solutions',
      features: ['Custom branding', 'Full integration', 'Scalable platform']
    }
  ];

  // Payment Solutions section data
  const paymentSolutions = [
    {
      title: 'Acquirers Matching',
      description: 'Connect with the right acquiring institutions based on your business category and risk level.',
      path: '/payment-solution/acquirers-matching',
      features: ['Institution matching', 'Risk assessment', 'Application support']
    },
    {
      title: 'Referral Services',
      description: 'Bidirectional referral services connecting merchants with suitable acquiring institutions.',
      path: '/payment-solution/referral-services',
      features: ['Merchant referrals', 'Institution recommendations', 'Professional matching']
    },
    {
      title: 'Application Consulting',
      description: 'Expert guidance through merchant application processes across different jurisdictions.',
      path: '/payment-solution/application-consulting',
      features: ['Compliance guidance', 'Application preparation', 'Regional expertise']
    },
    {
      title: 'High-Risk Merchant Specialist',
      description: 'Specialized services for high-risk category merchants with comprehensive support.',
      path: '/payment-solution/high-risk-merchant',
      features: ['High-risk expertise', 'Compliance advisory', 'Efficient processing']
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <TrustedBy />
      
      {/* Products Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm mb-8">
              Our Products
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8">
              Advanced Payment
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Protection Products
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              Cutting-edge solutions designed to protect your business from chargebacks, fraud, and payment risks
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                      {product.description}
                    </p>
                  </div>
                  <div>
                    <ul className="space-y-3 mb-8">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-400">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-4 flex-shrink-0"></div>
                          <span className="text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>

      {/* Payment Solutions Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-600 text-sm font-medium mb-8">
              Payment Solutions
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
              Professional Payment
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
                Processing Services
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              Comprehensive payment acquiring solutions and expert consulting services for businesses of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {paymentSolutions.map((solution, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-200 hover:border-blue-300 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                      {solution.description}
                    </p>
                  </div>
                  <div>
                    <ul className="space-y-3 mb-8">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-500">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-4 flex-shrink-0"></div>
                          <span className="text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
            Ready to Transform Your Payment Processing?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 font-light leading-relaxed">
            Join thousands of businesses that trust OrcaPay for secure, reliable, and efficient payment solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/about" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;