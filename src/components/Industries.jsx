import React from 'react';

const Industries = () => {
  const industries = [
    {
      title: 'Adult',
      icon: '💻',
      description: 'Adult entertainment and related services'
    },
    {
      title: 'Alcohol',
      icon: '🍷',
      description: 'Alcoholic beverages and spirits'
    },
    {
      title: 'CBD',
      icon: '🌿',
      description: 'CBD and hemp-derived products'
    },
    {
      title: 'Continuity/Subscription',
      icon: '📊',
      description: 'Subscription and recurring billing services'
    },
    {
      title: 'Debt Consolidation',
      icon: '💳',
      description: 'Financial debt management services'
    },
    {
      title: 'Dropshipping',
      icon: '🏢',
      description: 'E-commerce dropshipping businesses'
    },
    {
      title: 'Guns & Firearms',
      icon: '🔒',
      description: 'Firearms and related accessories'
    },
    {
      title: 'Nutraceuticals & Supplements',
      icon: '💊',
      description: 'Health supplements and nutraceuticals'
    },
    {
      title: 'Online Pharmacy',
      icon: '⚕️',
      description: 'Online pharmaceutical services'
    },
    {
      title: 'Travel & Timeshare',
      icon: '✈️',
      description: 'Travel services and timeshare properties'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            High-Risk Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized payment solutions for challenging industries with higher risk profiles
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 group cursor-pointer"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {industry.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;