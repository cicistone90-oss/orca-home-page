import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PaymentSolutionPage = () => {
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

  const solutions = [
    {
      id: 'acquirers-matching',
      title: 'Acquirers Matching',
      icon: '🤝',
      description: 'We provide comprehensive information about acquiring institutions (Acquirers). Based on their requirements for product category risk levels, we inform merchants which acquirers are suitable for their business categories. Different acquirers accept different MCC risk levels.',
      details: [
        'Assist merchants in matching with appropriate acquiring institutions and preparing necessary application materials',
        'Enable scoring and evaluation of different acquirers',
        'Comprehensive assessment including technical capabilities and service quality'
      ]
    },
    {
      id: 'referral-services',
      title: 'Referral Services',
      icon: '🔄',
      description: 'We provide bidirectional referral services. Recommending suitable merchants to acquiring institutions, or recommending suitable acquiring institutions to merchants.',
      details: [
        'Recommend quality merchants to acquiring institutions',
        'Recommend the most suitable acquiring institutions to merchants',
        'Provide professional matching advice and support'
      ]
    },
    {
      id: 'application-consulting',
      title: 'Application Consulting',
      icon: '📋',
      description: 'Different jurisdictions have varying requirements for merchant applications, and different risk-level categories have different application requirements. This is often the most challenging aspect for merchants to navigate.',
      details: [
        'We help different merchants with applications across different regions and banks from a compliance perspective',
        'Provide consulting and guidance services',
        'Ensure application materials are complete and accurate'
      ]
    },
    {
      id: 'high-risk-merchant',
      title: 'High-Risk Merchant Specialist',
      icon: '⚠️',
      description: 'As one of the most experienced intermediary institutions in global acquiring, we specialize in providing comprehensive services for high-risk category merchants.',
      details: [
        'Compliance guidance and advisory',
        'Application material preparation',
        'Efficient merchant account (Merchant Account/MID) application process'
      ],
      hasPage: true,
      pageLink: '/payment-solution/high-risk-merchant'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-sm font-medium text-blue-600 mb-4 uppercase tracking-wide">
              SOLUTIONS
            </div>
            <h1 className="text-5xl font-display font-bold text-gray-900 mb-6">
              Payment Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Professional payment solutions to empower your business growth. We provide comprehensive 
              services from merchant matching to application consulting, helping you navigate the 
              complex world of payment processing.
            </p>

          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Our Payment Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Comprehensive payment processing solutions designed to meet the diverse needs 
              of merchants across different industries and risk categories.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                id={solution.id}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 scroll-mt-24 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                    <span className="text-4xl">{solution.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-2xl font-bold text-blue-600">{index + 1}.</span>
                      <h3 className="text-2xl font-heading font-bold text-gray-900">{solution.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">{solution.description}</p>
                    <div className="space-y-4 mb-8">
                      {solution.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="text-blue-600 mt-1 text-lg">•</span>
                          <span className="text-gray-700 leading-relaxed">{detail}</span>
                        </div>
                      ))}
                    </div>
                    {solution.hasPage ? (
                      <Link 
                        to={solution.pageLink}
                        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        Learn More
                      </Link>
                    ) : (
                      <Link 
                        to="/contact"
                        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        Contact Us
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Why Choose Our Payment Solutions?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
                  <span className="text-4xl">🌍</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">Global Expertise</h3>
                <p className="text-gray-600 leading-relaxed">
                  Extensive experience in global payment markets with deep understanding of regional requirements
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
                  <span className="text-4xl">🎯</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">Tailored Solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Customized payment solutions designed to meet your specific business needs and risk profile
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
                  <span className="text-4xl">🤝</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">Dedicated Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional guidance and ongoing support throughout your payment processing journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our streamlined process ensures efficient and effective payment solution implementation
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold text-2xl mb-6 rounded-full shadow-lg">
                1
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">Assessment</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive evaluation of your business needs and requirements
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 text-white font-bold text-2xl mb-6 rounded-full shadow-lg">
                2
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">Matching</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect you with the most suitable acquiring institutions and partners
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 text-white font-bold text-2xl mb-6 rounded-full shadow-lg">
                3
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">Application</h3>
              <p className="text-gray-600 leading-relaxed">
                Guide you through the application process with expert consulting
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white font-bold text-2xl mb-6 rounded-full shadow-lg">
                4
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">Launch</h3>
              <p className="text-gray-600 leading-relaxed">
                Support you through implementation and ongoing optimization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Ready to Optimize Your Payment Processing?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our experts help you find the perfect payment solution for your business
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-blue-600 px-8 py-4 font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl text-lg"
          >
            Get Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PaymentSolutionPage;
