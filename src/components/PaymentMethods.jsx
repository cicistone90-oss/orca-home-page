import React from 'react';
import { Link } from 'react-router-dom';

const PaymentMethods = () => {
  const paymentTypes = [
    {
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
        </svg>
      ),
      title: "In-Person Payments",
      features: [
        {
          name: "Credit Cards",
          description: "A quick and flexible checkout process for all major credit cards in person or online."
        },
        {
          name: "Retail POS",
          description: "Fast, hassle-free in-store checkout experience with reliable POS systems."
        },
        {
          name: "Mobile",
          description: "Enable on-the-go transactions with advanced mobile payment tools designed for speed and flexibility."
        }
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10z"/>
          <path d="M6 10h2v2H6zm0 4h8v2H6zm10-4h2v6h-2z"/>
        </svg>
      ),
      title: "Online & Remote Payments",
      features: [
        {
          name: "Online Checkout",
          description: "Power your online store with flexible, secure payment gateways and shopping cart integrations."
        },
        {
          name: "MOTO",
          description: "Accept card-not-present payments confidently with encrypted virtual terminals."
        }
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 6h14l-1-1H6l-1 1zm0 2v9c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8H5zm8 7c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm-4 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm8 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1z"/>
        </svg>
      ),
      title: "Direct Bank Payments",
      features: [
        {
          name: "ACH Transfers",
          description: "Lower fees with fully-integrated ACH transfers, including access to the Same-Day ACH network."
        },
        {
          name: "eCheck",
          description: "Streamline bank-to-bank payments with eChecks, eliminating the need for paper checks and their administrative burden."
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Payment Methods Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {paymentTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
              {/* Icon and Title */}
              <div className="flex items-center mb-8">
                <div className="mr-4">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {type.title}
                </h3>
              </div>

              {/* Features */}
              <div className="space-y-6">
                {type.features.map((feature, featureIndex) => (
                  <div key={featureIndex}>
                    <h4 className="text-lg font-semibold text-blue-600 mb-2">
                      {feature.name}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Learn More Button */}
              {/* <div className="mt-8 pt-6 border-t border-gray-100">
                <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center transition-colors duration-200">
                  Learn More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div> */}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Accept Payments Your Way?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Choose from our comprehensive suite of payment solutions designed for businesses of all sizes and industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-all duration-300 text-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;