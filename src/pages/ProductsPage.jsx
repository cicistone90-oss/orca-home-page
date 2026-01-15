import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProductsPage = () => {
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const products = [
    {
      id: 'chargeback-alerts',
      title: 'Chargeback Alerts',
      icon: '🔔',
      description: 'Real-time chargeback notification system to help merchants respond quickly and reduce losses.',
      features: [
        'Instant notifications',
        'Automated dispute management',
        'Detailed analytics and reporting',
        'Integration with major payment processors'
      ]
    },
    {
      id: 'vamp-monitor',
      title: 'VAMP Monitor',
      icon: '📊',
      description: 'Visa Acquirer Monitoring Program (VAMP) monitoring tool to track and manage your merchant account health.',
      features: [
        'Real-time VAMP status tracking',
        'Risk threshold alerts',
        'Compliance monitoring',
        'Performance optimization recommendations'
      ]
    },
    {
      id: 'transaction-risk-tool',
      title: 'Transaction Risk Tool API',
      icon: '🛡️',
      description: 'Advanced fraud detection and risk assessment API to protect your business from fraudulent transactions.',
      features: [
        'Machine learning-based fraud detection',
        'Real-time risk scoring',
        'Customizable risk rules',
        'Comprehensive transaction analysis'
      ]
    },
    {
      id: 'payment-gateway',
      title: 'Payment Gateway',
      icon: '💳',
      description: 'Robust payment gateway solution supporting multiple payment methods and currencies.',
      features: [
        'Multi-currency support',
        'Multiple payment methods',
        'PCI DSS compliant',
        'Easy integration with APIs'
      ]
    },
    {
      id: 'white-label-solutions',
      title: 'White Label Solutions',
      icon: '🏷️',
      description: 'Customizable white-label payment solutions that you can brand as your own.',
      features: [
        'Fully customizable branding',
        'Complete payment infrastructure',
        'Dedicated support',
        'Flexible deployment options'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-6">
            Our Products
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive payment solutions designed to meet your business needs
          </p>
        </div>

        <div className="space-y-12">
          {products.map((product) => (
            <div
              key={product.id}
              id={product.id}
              className="bg-gray-800/50 backdrop-blur-md rounded-xl p-8 border border-cyan-500/30 scroll-mt-24"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-3xl">{product.icon}</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-cyan-400 mb-4">{product.title}</h2>
                  <p className="text-gray-300 text-lg mb-6">{product.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-cyan-400">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
