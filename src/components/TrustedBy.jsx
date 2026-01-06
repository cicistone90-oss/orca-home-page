import React from 'react';

const TrustedBy = () => {
  const companies = [
    'Shopify',
    'Stripe', 
    'PayPal',
    'Square',
    'Adyen'
  ];

  return (
    <section className="py-16 bg-gray-900 border-y border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 text-lg mb-8">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {companies.map((company, index) => (
              <div
                key={index}
                className="text-gray-500 text-xl font-semibold hover:text-cyan-400 transition-all duration-300 cursor-pointer transform hover:scale-110"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;