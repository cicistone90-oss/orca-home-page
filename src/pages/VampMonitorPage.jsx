import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const VampMonitorPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-display font-bold text-white mb-6 tracking-tight">
              VAMP Monitor
            </h1>
            <p className="text-xl font-body text-blue-100 mb-8 leading-relaxed font-light">
              Real-time transaction monitoring and fraud prevention system. 
              Protect your business with advanced analytics, risk scoring, 
              and automated decision-making powered by machine learning.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-white text-blue-900 px-8 py-3 font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-4 tracking-tight">
            Comprehensive Monitoring Solution
          </h2>
          <p className="text-gray-600 font-body text-center max-w-3xl mx-auto mb-12 text-lg font-light">
            Monitor every transaction in real-time with advanced fraud detection and risk management tools
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-blue-100 rounded-lg p-2 flex-shrink-0">
                  <span className="text-lg">🎯</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Real-Time Monitoring</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Monitor all transactions as they happen with instant alerts and notifications for suspicious activities
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-purple-100 rounded-lg p-2 flex-shrink-0">
                  <span className="text-lg">🤖</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">AI-Powered Detection</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Machine learning algorithms analyze patterns and detect fraud with high accuracy and low false positives
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-green-100 rounded-lg p-2 flex-shrink-0">
                  <span className="text-lg">📈</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Advanced Analytics</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Comprehensive dashboards and reports provide deep insights into transaction patterns and trends
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-red-100 rounded-lg p-2 flex-shrink-0">
                  <span className="text-lg">🛡️</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Risk Scoring</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Automated risk assessment for every transaction with customizable scoring rules and thresholds
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-yellow-100 rounded-lg p-2 flex-shrink-0">
                  <span className="text-lg">⚙️</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Custom Rules Engine</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Create and manage custom rules to automatically approve, decline, or flag transactions for review
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-indigo-100 rounded-lg p-2 flex-shrink-0">
                  <span className="text-lg">🔔</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Instant Alerts</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Receive immediate notifications via email, SMS, or webhook when suspicious activity is detected
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transaction Monitoring */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Real-Time Transaction Monitoring
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Monitor every transaction as it flows through your payment system. VAMP Monitor 
              analyzes transaction data in real-time, applying sophisticated fraud detection 
              algorithms to identify and prevent fraudulent activities before they impact your business.
            </p>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700">Live transaction dashboard with filtering and search</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700">Detailed transaction history and audit trails</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700">Multi-currency and multi-merchant support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700">Customizable monitoring rules and thresholds</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Fraud Detection */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Advanced Fraud Detection
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Leverage machine learning and behavioral analysis to detect fraudulent patterns 
              and anomalies. Our system continuously learns from transaction data to improve 
              detection accuracy and reduce false positives.
            </p>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✓</span>
                <span className="text-gray-700">Machine learning-based fraud detection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✓</span>
                <span className="text-gray-700">Behavioral analysis and pattern recognition</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✓</span>
                <span className="text-gray-700">Device fingerprinting and IP geolocation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✓</span>
                <span className="text-gray-700">Velocity checks and transaction limits</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Risk Management */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Intelligent Risk Management
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Automatically assess and score the risk level of every transaction. Set up custom 
              rules to automatically approve low-risk transactions, flag medium-risk ones for review, 
              and block high-risk transactions before they're processed.
            </p>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">✓</span>
                <span className="text-gray-700">Dynamic risk scoring for every transaction</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">✓</span>
                <span className="text-gray-700">Customizable risk thresholds and actions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">✓</span>
                <span className="text-gray-700">Whitelist and blacklist management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">✓</span>
                <span className="text-gray-700">Manual review queue for flagged transactions</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Analytics & Reporting */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Comprehensive Analytics & Reporting
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Gain deep insights into your transaction data with powerful analytics and reporting tools. 
              Track key metrics, identify trends, and make data-driven decisions to optimize your 
              fraud prevention strategy.
            </p>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">Real-time dashboards with key performance indicators</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">Customizable reports and data exports</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">Trend analysis and predictive insights</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">Scheduled reports via email</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Integration & API */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Easy Integration
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Seamlessly integrate VAMP Monitor with your existing payment infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 rounded-lg p-3 flex-shrink-0">
                  <span className="text-xl">🔌</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">RESTful API</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive API documentation with code examples in multiple programming languages. 
                    Easy to integrate with any payment system or e-commerce platform.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="text-blue-600">•</span>
                      <span>Complete API documentation</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="text-blue-600">•</span>
                      <span>SDKs for popular languages</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="text-blue-600">•</span>
                      <span>Webhook support for real-time events</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 rounded-lg p-3 flex-shrink-0">
                  <span className="text-xl">🔗</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pre-Built Integrations</h3>
                  <p className="text-gray-600 mb-4">
                    Connect with popular payment gateways and e-commerce platforms with just a few clicks. 
                    No coding required for standard integrations.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="text-purple-600">•</span>
                      <span>Major payment gateway support</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="text-purple-600">•</span>
                      <span>E-commerce platform plugins</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="text-purple-600">•</span>
                      <span>Quick setup and configuration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose VAMP Monitor?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Reduce Fraud Losses</h3>
              <p className="text-gray-300">
                Prevent fraudulent transactions before they're processed, saving your business from chargebacks and losses
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Increase Approval Rates</h3>
              <p className="text-gray-300">
                Reduce false positives and approve more legitimate transactions with intelligent risk scoring
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Improve Efficiency</h3>
              <p className="text-gray-300">
                Automate fraud detection and risk management, freeing up your team to focus on growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Protect Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start monitoring transactions and preventing fraud with VAMP Monitor today
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

export default VampMonitorPage;
