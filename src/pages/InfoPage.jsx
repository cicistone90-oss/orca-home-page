import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const InfoPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">About Orca</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn more about our mission, values, and the technology that powers 
              the future of payment processing.
            </p>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Orca, we believe that payment processing should be simple, secure, and accessible 
                to businesses of all sizes. Our mission is to eliminate the complexity and risk 
                associated with online payments while maximizing revenue for our merchants.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're committed to providing cutting-edge technology solutions that not only process 
                payments efficiently but also protect businesses from fraud and chargebacks.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Security First</h3>
                    <p className="text-gray-600">Every transaction is protected by enterprise-grade security measures.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Innovation</h3>
                    <p className="text-gray-600">We continuously evolve our technology to stay ahead of industry trends.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Customer Success</h3>
                    <p className="text-gray-600">Your success is our success. We're committed to your growth.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powered by Advanced Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is built on cutting-edge technology stack designed for scale, 
              security, and performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Machine Learning',
                description: 'AI-powered fraud detection and risk assessment algorithms',
                icon: '🤖'
              },
              {
                title: 'Real-time Processing',
                description: 'Lightning-fast transaction processing with 99.9% uptime',
                icon: '⚡'
              },
              {
                title: 'Global Infrastructure',
                description: 'Distributed systems across multiple regions for reliability',
                icon: '🌐'
              },
              {
                title: 'Advanced Analytics',
                description: 'Comprehensive reporting and business intelligence tools',
                icon: '📊'
              },
              {
                title: 'API-First Design',
                description: 'Developer-friendly APIs with comprehensive documentation',
                icon: '🔧'
              },
              {
                title: 'Compliance Ready',
                description: 'PCI DSS Level 1 certified with SOC 2 Type II compliance',
                icon: '🛡️'
              }
            ].map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {tech.title}
                </h3>
                <p className="text-gray-600">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust Orca for their payment processing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Start Free Trial
            </button>
            <button className="btn btn-secondary px-8 py-4 text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InfoPage;
