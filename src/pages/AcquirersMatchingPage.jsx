import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AcquirersMatchingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-sm font-medium text-blue-600 mb-4 uppercase tracking-wide">
              PAYMENT SOLUTIONS
            </div>
            <h1 className="text-5xl font-display font-bold text-gray-900 mb-6">
              Acquirers Matching
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We provide comprehensive information about acquiring institutions (Acquirers). Based on their 
              requirements for product category risk levels, we inform merchants which acquirers are suitable 
              for their business categories. Different acquirers accept different MCC risk levels.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-blue-600 text-white px-8 py-3 font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              GET STARTED
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Our Matching Services
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Perfect Match</h3>
                <p className="text-gray-600">
                  Assist merchants in matching with appropriate acquiring institutions and preparing necessary application materials
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 mb-6">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Evaluation</h3>
                <p className="text-gray-600">
                  Enable scoring and evaluation of different acquirers based on your specific business needs
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 mb-6">
                  <span className="text-3xl">✅</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Assessment</h3>
                <p className="text-gray-600">
                  Comprehensive assessment including technical capabilities and service quality
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Find Your Perfect Acquirer Match
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let us help you connect with the right acquiring institution for your business
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-blue-600 px-8 py-4 font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl text-lg"
          >
            Get Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AcquirersMatchingPage;
