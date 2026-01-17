import React from 'react';

const Products = () => {
  const products = [
    {
      title: 'OrcaPay Gateway',
      description: 'Complete payment gateway solution with advanced fraud protection',
      features: ['Real-time processing', 'Multi-currency support', 'Advanced analytics'],
      image: '🌐'
    },
    {
      title: 'OrcaPay Shield',
      description: 'AI-powered chargeback prevention and dispute management platform',
      features: ['Chargeback alerts', 'Dispute automation', 'Risk scoring'],
      image: '🛡️'
    },
    {
      title: 'OrcaPay Connect',
      description: 'Seamless API integration for developers and businesses',
      features: ['RESTful APIs', 'SDKs available', 'Webhook support'],
      image: '🔗'
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Our Products
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Powerful payment solutions built for modern businesses
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-6xl mb-6 text-center">{product.image}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                {product.title}
              </h3>
              <p className="text-base md:text-lg text-gray-600 mb-6 text-center leading-relaxed font-light">
                {product.description}
              </p>
              <ul className="space-y-3 mb-8">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;