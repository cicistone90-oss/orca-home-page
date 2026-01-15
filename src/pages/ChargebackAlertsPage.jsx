import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ChargebackAlertsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Chargeback Alerts
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Receive real-time notifications about potential chargebacks before they happen. 
              Our advanced alert system helps you prevent disputes, reduce chargeback ratios, 
              and protect your merchant account from penalties.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-blue-600 text-white px-8 py-3 font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* What is the Dispute Alerts Suite */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            What is the Dispute Alerts Suite?
          </h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12 text-lg">
            Our comprehensive dispute alerts suite provides early warning notifications from major card networks, 
            giving you the opportunity to resolve issues before they become chargebacks.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-600 rounded-lg p-3">
                  <span className="text-2xl">💳</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">CDRN (Visa/CB)</h3>
                  <p className="text-gray-400">
                    Visa's Chargeback Dispute Resolution Network provides early alerts for Visa and Cartes Bancaires transactions, 
                    allowing you to issue refunds before chargebacks are filed.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-purple-600 rounded-lg p-3">
                  <span className="text-2xl">🔔</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Ethoca Alerts</h3>
                  <p className="text-gray-400">
                    Mastercard's alert system notifies you of potential disputes in real-time, 
                    enabling immediate action to prevent chargebacks and maintain healthy processing ratios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Decisioned Alerts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Self-Decisioned Alerts
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Take full control of your dispute management with our self-decisioned alert system. 
              Automatically process refunds based on your custom rules and criteria, or manually review 
              each case to make informed decisions.
            </p>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700">Set custom rules for automatic refund processing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700">Manual review option for complex cases</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700">Real-time decision tracking and reporting</span>
              </li>
            </ul>
            <div className="mt-8">
              <Link 
                to="/contact" 
                className="inline-block bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ethoca Alerts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ethoca Alerts
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Powered by Mastercard, Ethoca Alerts provide real-time notifications when cardholders 
              dispute transactions with their issuing banks. Receive alerts instantly and take action 
              before disputes escalate into costly chargebacks.
            </p>
            <ul className="grid md:grid-cols-2 gap-3 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                <span className="text-gray-700">Instant notifications for Mastercard disputes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                <span className="text-gray-700">Prevent chargebacks before they're filed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                <span className="text-gray-700">Reduce chargeback fees and penalties</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                <span className="text-gray-700">Improve customer satisfaction</span>
              </li>
            </ul>
            <Link 
              to="/contact" 
              className="inline-block bg-purple-600 text-white px-6 py-3 font-medium hover:bg-purple-700 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Verifi CDRN Alerts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Verifi CDRN Alerts
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Visa's Chargeback Dispute Resolution Network (CDRN) alerts help you stop chargebacks 
              before they happen. When a cardholder contacts their bank about a transaction, you receive 
              an immediate alert, giving you the chance to resolve the issue directly.
            </p>
            <ul className="grid md:grid-cols-2 gap-3 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700">Early warning for Visa and Cartes Bancaires transactions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700">Issue refunds before chargebacks are filed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700">Protect your chargeback ratio</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700">Maintain good standing with payment processors</span>
              </li>
            </ul>
            <Link 
              to="/contact" 
              className="inline-block bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Automated Alerts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Automated Alerts
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Streamline your dispute management with fully automated alert processing. Set up custom 
              rules and let our system automatically issue refunds for qualifying disputes, saving you 
              time and reducing manual workload.
            </p>
            <ul className="grid md:grid-cols-2 gap-3 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">Automatic refund processing based on your criteria</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">24/7 monitoring and response</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">Reduce operational costs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">Faster resolution times</span>
              </li>
            </ul>
            <Link 
              to="/contact" 
              className="inline-block bg-green-600 text-white px-6 py-3 font-medium hover:bg-green-700 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Verifi RDR */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Verifi RDR
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Rapid Dispute Resolution (RDR) by Verifi enables automatic resolution of disputes before 
              they become chargebacks. When a dispute matches your predefined rules, the system automatically 
              issues a refund, stopping the chargeback process entirely.
            </p>
            <ul className="grid md:grid-cols-2 gap-3 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700">Instant automatic dispute resolution</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700">Stop chargebacks before they're filed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700">Eliminate chargeback fees</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700">Improve merchant account health</span>
              </li>
            </ul>
            <Link 
              to="/contact" 
              className="inline-block bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Integrate with OrcaPay?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start protecting your business from chargebacks today with our comprehensive alert system.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-blue-600 px-8 py-4 font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl text-lg"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChargebackAlertsPage;
