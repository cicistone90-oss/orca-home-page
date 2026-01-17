import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HighRiskMerchantPage = () => {
  const businessTypes = [
    'Adult', 'Digital Downloads', 'Law Firms', 'Self Defense, Tasers & Stun Guns',
    'Alcohol', 'Document Preparation', 'MLM', 'SEO & SEM Services',
    'Bail Bonds', 'Drop Shipping', 'Moving Companies', 'Smoking Accessories',
    'Bar & Restaurant', 'Educational Seminars', 'Nutraceuticals & Supplements', 'Sports Betting Advice',
    'CBD', 'Escort', 'Online Dating', 'Tech Support',
    'Cigars & Tobacco', 'Guns & Firearms', 'Online Gaming', 'Telemedicine',
    'Coaching', 'Healthcare', 'Online Pharmacy', 'Travel Agency',
    'Continuity-Subscription', 'High Volume', 'Pawn Shop', 'Vape & eCig',
    'Collectibles', 'Hunting & Outdoor Equipment', 'Real Estate', 'Web Design Services',
    'Debt Collection', 'Insurance', 'SaaS Companies', 'And many more!',
    'Debt Consolidation', 'Jet Charter'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-sm font-medium text-blue-600 mb-4 uppercase tracking-wide">
              SPECIALIZED SERVICES
            </div>
            <h1 className="text-5xl font-display font-bold text-gray-900 mb-6">
              High-Risk Merchant Specialist
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              As one of the most experienced intermediary institutions in global acquiring, we specialize 
              in providing comprehensive services for high-risk category merchants. Including compliance 
              guidance, application material preparation, and efficient merchant account (Merchant Account/MID) 
              application process.
            </p>

          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Our Expertise in High-Risk Processing
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              With years of experience in global acquiring, we understand the unique challenges 
              faced by high-risk merchants and provide tailored solutions for success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
                  <span className="text-4xl">📋</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Compliance Guidance</h3>
                <p className="text-gray-600">
                  Professional compliance consulting services to ensure your business meets regulatory 
                  requirements in different regions and reduces compliance risks
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
                  <span className="text-4xl">📄</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Application Material Preparation</h3>
                <p className="text-gray-600">
                  Assist in preparing complete and accurate application materials to improve approval 
                  rates and shorten application cycles
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
                  <span className="text-4xl">⚡</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Efficient Application Process</h3>
                <p className="text-gray-600">
                  Leverage our industry relationships and professional experience to quickly and 
                  efficiently apply for suitable merchant accounts (MID) for you
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Businesses We Support */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Types of Businesses We Support
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
              In this day and age, customers are demanding a more convenient and contactless payment experience. 
              From NFC payments to QR codes and everything in between, you can keep and earn loyal customers by 
              expanding the options you offer. Here is a list of the many different types of businesses we can 
              support with our superior merchant services:
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {businessTypes.map((business, index) => (
              <div key={index} className="bg-white p-4 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 text-sm">▶</span>
                  <span className="text-gray-700 text-sm font-medium">{business}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Why Choose Orca for High-Risk Processing?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">Industry Experience</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">Years of global acquiring experience with deep understanding of regulatory environments in various regions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">Established solid partnerships with major global acquiring institutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">Successfully provided payment solutions for thousands of high-risk merchants</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">Professional team with extensive risk assessment and management experience</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">Comprehensive Support</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">Dedicated account manager providing personalized service</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">24/7 technical support ensuring business continuity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">Continuous compliance monitoring and risk management services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">Regular business reviews and optimization recommendations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our professional process ensures the highest quality service experience for high-risk merchants
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white font-bold text-xl mb-6">
                1
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Business Assessment</h3>
              <p className="text-gray-600">
                In-depth understanding of your business model, risk level, and special requirements
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white font-bold text-xl mb-6">
                2
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Solution Customization</h3>
              <p className="text-gray-600">
                Based on assessment results, customize the most suitable payment solution for you
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 text-white font-bold text-xl mb-6">
                3
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Material Preparation</h3>
              <p className="text-gray-600">
                Assist in preparing complete application materials to ensure compliance with acquiring institution requirements
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-600 text-white font-bold text-xl mb-6">
                4
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Quick Launch</h3>
              <p className="text-gray-600">
                Efficiently handle the application process to help you quickly obtain merchant accounts and start accepting payments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Ready to Get Your High-Risk Business Approved?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our professional team help you obtain stable and reliable payment processing services
          </p>
          <div className="flex justify-center">
            <Link 
              to="/contact" 
              className="inline-block bg-white text-blue-600 px-8 py-4 font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl text-lg"
            >
              Get Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HighRiskMerchantPage;