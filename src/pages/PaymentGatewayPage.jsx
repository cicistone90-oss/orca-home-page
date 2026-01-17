import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PaymentGatewayPage = () => {
  const features = [
    {
      title: 'Unified Integration, Global Reach',
      description: 'Consolidate your entire payment ecosystem through a single, robust API. Our gateway seamlessly integrates with 100+ payment processors and local payment methods worldwide, enabling you to expand into new markets instantly without the burden of complex multi-party technical maintenance.',
      benefits: [
        'Single API for 100+ payment processors',
        'Global payment method coverage',
        'Instant market expansion',
        'Simplified technical maintenance'
      ]
    },
    {
      title: 'Intelligent Smart Routing',
      description: 'Maximize your transaction success rates with our dynamic routing engine. By analyzing real-time data, the system automatically directs each payment to the optimal processor based on cost, geographic performance, and historical authorization rates, ensuring 99.9% reliability even during peak traffic.',
      benefits: [
        'Dynamic routing optimization',
        'Real-time data analysis',
        'Cost and performance optimization',
        '99.9% reliability guarantee'
      ]
    },
    {
      title: 'Frictionless Checkout Experience',
      description: 'Boost conversion rates with a fully customizable, native checkout interface. Our system supports one-click "Express Checkout" and intelligently remembers user preferences, providing a consistent and localized payment journey across web and mobile platforms.',
      benefits: [
        'Fully customizable checkout',
        'One-click Express Checkout',
        'User preference memory',
        'Cross-platform consistency'
      ]
    },
    {
      title: 'Advanced Risk and Fraud Mitigation',
      description: 'Protect your revenue with enterprise-grade security. Our platform features built-in 3DS authentication, automated fraud detection, and a PCI-compliant vault, effectively reducing chargebacks and securing sensitive customer data without compromising the user experience.',
      benefits: [
        'Built-in 3DS authentication',
        'Automated fraud detection',
        'PCI-compliant data vault',
        'Chargeback reduction'
      ]
    },
    {
      title: 'Data-Driven Insights and Observability',
      description: 'Take full control of your financial operations with unified analytics. Access real-time dashboards for transaction health, cost observability, and automated reconciliation, turning your payment data into actionable business intelligence.',
      benefits: [
        'Real-time analytics dashboards',
        'Transaction health monitoring',
        'Cost observability tools',
        'Automated reconciliation'
      ]
    }
  ];

  const stats = [
    { number: '100+', label: 'Payment Processors' },
    { number: '99.9%', label: 'Uptime Reliability' },
    { number: '150+', label: 'Countries Supported' },
    { number: '<100ms', label: 'Response Time' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm mb-8">
              Payment Gateway
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
              Payment Orchestration for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Global Commerce
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-4xl mx-auto">
              Unify your payment infrastructure with our enterprise-grade gateway. 
              Process payments globally with intelligent routing, advanced security, and seamless integration.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
                  {stat.number}
                </div>
                <div className="text-base text-gray-600 font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Enterprise-Grade Payment Infrastructure
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Built for scale, designed for performance, optimized for conversion
            </p>
          </div>

          <div className="space-y-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                  {feature.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700 text-base font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Seamless Integration
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get up and running in minutes with our developer-friendly APIs and comprehensive documentation
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 tracking-tight">
                  Simple API Integration
                </h3>
                <p className="text-base text-gray-300 mb-8 leading-relaxed">
                  Our RESTful API is designed for developers, by developers. 
                  With comprehensive documentation, SDKs, and sandbox environment, 
                  you can integrate our payment gateway in just a few lines of code.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    <span className="text-sm font-medium">RESTful API with JSON responses</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    <span className="text-sm font-medium">SDKs for popular programming languages</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    <span className="text-sm font-medium">Comprehensive documentation and guides</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    <span className="text-sm font-medium">Sandbox environment for testing</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="text-sm text-gray-400 mb-4">Sample API Request</div>
                <pre className="text-cyan-400 text-sm overflow-x-auto">
{`curl -X POST https://api.orcapay.com/v1/payments \\
  -H "Authorization: Bearer sk_test_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 2000,
    "currency": "usd",
    "payment_method": "card",
    "customer": {
      "email": "customer@example.com"
    }
  }'`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">
            Ready to Transform Your Payment Processing?
          </h2>
          <p className="text-lg text-blue-100 mb-10 leading-relaxed max-w-4xl mx-auto">
            Join thousands of businesses that trust OrcaPay Gateway for their payment infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PaymentGatewayPage;