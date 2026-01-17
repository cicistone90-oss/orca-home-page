import React from 'react';

const Industries = () => {
  const industries = [
    {
      title: 'Adult',
      icon: '💻',
      description: 'Adult entertainment and related services',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Alcohol',
      icon: '🍷',
      description: 'Alcoholic beverages and spirits',
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Continuity/Subscription',
      icon: '📊',
      description: 'Subscription and recurring billing services',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Debt Consolidation',
      icon: '💳',
      description: 'Financial debt management services',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Dropshipping',
      icon: '🏢',
      description: 'E-commerce dropshipping businesses',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Nutraceuticals & Supplements',
      icon: '💊',
      description: 'Health supplements and nutraceuticals',
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Online Pharmacy',
      icon: '⚕️',
      description: 'Online pharmaceutical services',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Travel & Timeshare',
      icon: '✈️',
      description: 'Travel services and timeshare properties',
      color: 'from-orange-500 to-amber-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-600 text-sm font-medium mb-6">
            Industry Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            High-Risk Industries We Serve
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Specialized payment solutions for challenging industries with higher risk profiles
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-transparent overflow-hidden transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Icon background circle */}
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-500`}></div>
                <div className="relative w-20 h-20 mx-auto rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <span className="text-4xl flex items-center justify-center w-full h-full">{industry.icon}</span>
                </div>
              </div>
              
              <div className="text-center relative">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${industry.color} transition-all duration-500">
                  {industry.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light group-hover:text-gray-700 transition-colors duration-500">
                  {industry.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </div>
          ))}
        </div>

        {/* Additional info section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto border border-gray-200">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Don't See Your Industry?
            </h3>
            <p className="text-lg md:text-xl text-gray-600 mb-6 font-light leading-relaxed">
              We work with a wide range of high-risk industries. Contact us to discuss your specific business needs and payment processing requirements.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;