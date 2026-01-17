import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ApplicationConsultingPage = () => {
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
              Application Consulting
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Different jurisdictions have varying requirements for merchant applications, and different 
              risk-level categories have different application requirements. This is often the most 
              challenging aspect for merchants to navigate.
            </p>

          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Expert Consulting Services
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 mb-6">
                  <span className="text-3xl">🌍</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Multi-Region Support</h3>
                <p className="text-gray-600">
                  We help different merchants with applications across different regions and banks from a compliance perspective
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 mb-6">
                  <span className="text-3xl">💼</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Professional Guidance</h3>
                <p className="text-gray-600">
                  Provide comprehensive consulting and guidance services throughout the application process
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 mb-6">
                  <span className="text-3xl">📋</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Complete Documentation</h3>
                <p className="text-gray-600">
                  Ensure application materials are complete, accurate, and meet all regulatory requirements
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
            Navigate Application Requirements with Confidence
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our experts guide you through the complex application process
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

export default ApplicationConsultingPage;
