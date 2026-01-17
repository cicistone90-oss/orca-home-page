import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TransactionRiskToolPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-sm font-medium text-blue-600 mb-4 uppercase tracking-wide">
              ORCA PRODUCT
            </div>
            <h1 className="text-5xl font-display font-bold text-gray-900 mb-6">
              Orca's Transaction Risk Tool
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Orca's Transaction Risk Tool provides real-time fraud detection and risk assessment 
              for every transaction. Our cloud-based scoring solution helps you make intelligent, 
              real-time decisions about transaction risk levels as they are submitted for authorization.
            </p>
          </div>
        </div>
      </section>

      {/* What is the Transaction Risk Tool */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">
                What is the Transaction Risk Tool?
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                The Transaction Risk Tool allows merchants to proactively assess and manage 
                transaction risk in real-time. Using advanced machine learning and behavioral 
                analysis, it provides instant risk scoring and automated decision-making to 
                protect your business from fraud while maximizing legitimate transaction approval rates.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">📈</span>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Accurate Predictability Rate</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Advanced algorithms provide highly accurate fraud prediction with minimal false positives, 
                    ensuring legitimate transactions are approved while blocking fraudulent ones.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">✅</span>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Increase Approval Rates</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Intelligent risk assessment reduces false declines, allowing more legitimate 
                    transactions to be approved while maintaining security standards.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">🛡️</span>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Stop Fraud Before Processing</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Real-time analysis identifies and blocks fraudulent transactions before they're 
                    processed, preventing chargebacks and financial losses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Orca's Transaction Risk Tool Details */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-blue-600 pl-6 mb-8">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-2">
              Orca's Transaction Risk Tool
            </h2>
            <div className="w-12 h-1 bg-blue-600"></div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Orca's Transaction Risk Tool brings a powerful, cloud-based scoring solution designed to 
              assist you in your efforts to make intelligent, real-time decisions about the risk level 
              of individual transactions as they are submitted for authorization.
            </p>

            <p className="text-gray-600 mb-6">
              Orca's risk tool utilizes sophisticated machine learning algorithms and behavioral analysis 
              to provide real-time risk scoring for every transaction.
            </p>

            <p className="text-gray-600 mb-8">
              The service is integrated with the Orca payment processing platform, allowing merchants to 
              set up custom rules and thresholds for automatic transaction handling. This includes the 
              ability to automatically approve low-risk transactions, flag medium-risk transactions for 
              manual review, or decline high-risk transactions before processing.
            </p>

            <div className="bg-gray-50 p-6 mb-8">
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">Key Features:</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">Real-time risk scoring with customizable thresholds for automatic decision-making and fraud prevention</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">Advanced machine learning algorithms that continuously learn and adapt to new fraud patterns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">Comprehensive transaction analysis including device fingerprinting, IP geolocation, and behavioral patterns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">Velocity checks and transaction limits to detect suspicious activity patterns</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">Detailed analytics and reporting dashboard for monitoring performance and trends</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">Easy integration with existing payment systems through comprehensive APIs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">Whitelist and blacklist management for trusted and blocked entities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">Manual review queue for transactions that require human oversight</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration CTA */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Ready to integrate the Transaction Risk Tool?
          </h2>
          <p className="text-gray-300 mb-6">
            Start protecting your business from fraud while improving approval rates with our advanced risk assessment platform.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 font-medium hover:bg-blue-700 transition-all duration-300"
          >
            CONTACT US
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-12">
            Why Choose Orca's Transaction Risk Tool?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Precision Targeting</h3>
                <p className="text-gray-600">
                  Advanced algorithms precisely identify fraudulent transactions while minimizing false positives
                </p>
              </div>
            </div>

            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Real-Time Processing</h3>
                <p className="text-gray-600">
                  Instant risk assessment and decision-making for every transaction as it happens
                </p>
              </div>
            </div>

            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
                  <span className="text-3xl">🔧</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Customizable Rules</h3>
                <p className="text-gray-600">
                  Flexible rule engine allows you to customize risk thresholds and actions based on your business needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Start Protecting Your Business Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Implement Orca's Transaction Risk Tool and reduce fraud while increasing approval rates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-block bg-white text-blue-600 px-8 py-4 font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl text-lg"
            >
              Request Demo
            </Link>
            <Link 
              to="/contact" 
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 font-bold hover:bg-white/10 transition-all duration-300 text-lg"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TransactionRiskToolPage;