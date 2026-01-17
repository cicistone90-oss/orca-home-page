import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ReferralServicesPage = () => {
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
              Referral Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We provide bidirectional referral services. Recommending suitable merchants to acquiring 
              institutions, or recommending suitable acquiring institutions to merchants.
            </p>

          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Bidirectional Referral Services
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
                  <span className="text-4xl">🏢</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Merchant Referrals</h3>
                <p className="text-gray-600">
                  Recommend quality merchants to acquiring institutions based on their specific requirements
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
                  <span className="text-4xl">🏦</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Acquirer Referrals</h3>
                <p className="text-gray-600">
                  Recommend the most suitable acquiring institutions to merchants for their business needs
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
                  <span className="text-4xl">🤝</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Professional Support</h3>
                <p className="text-gray-600">
                  Provide professional matching advice and ongoing support throughout the process
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
            Connect with the Right Partners
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let us facilitate the perfect connection between merchants and acquiring institutions
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

export default ReferralServicesPage;
