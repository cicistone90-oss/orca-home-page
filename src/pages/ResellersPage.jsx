import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ResellersPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-sm font-medium text-blue-600 mb-4 uppercase tracking-wide">
              RESELLERS
            </div>
            <h1 className="text-5xl font-display font-bold text-gray-900 mb-6">
              Become an Orca Reseller!
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We work with distributors, OEMs, ISVs, and developers to meet our client needs and 
              to serve customers. If you have a customer base that needs comprehensive fraud 
              and chargeback solutions, we'd love to speak with you about our partnership 
              opportunities.
            </p>

          </div>
        </div>
      </section>

      {/* Why Partner with Orca */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              WHY PARTNER WITH ORCA?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">Opportunity for resellers to earn generous margins and earn commissions for successful referrals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">Enhance your offering and deliver greater value to your customers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">Access to fast-moving solutions and competitive industry leading data and technology partners</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">Flexible partnership options to suit the needs of each individual business</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">Support for Success</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">Dedicated account manager to ensure your support needs are met and exceeded</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">Comprehensive training and ongoing technical support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">High-end integration with third-party providers and systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-gray-700">Access to specialized knowledge experts and managed support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Partners */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">
              Types of Partners
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We work with partners providing flexible, supportive and targeted partnerships that deliver enhanced 
              business value and profitable growth for our partners.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">VALUE ADDED RESELLERS</h3>
              <p className="text-gray-400 text-sm">
                Partner with us as a Value Added Reseller and help your clients reduce chargebacks and increase 
                revenues.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">REFERRAL PARTNERS</h3>
              <p className="text-gray-400 text-sm">
                Join Orca as a referral partner and earn commissions for successful client referrals.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">ENTERPRISE PARTNERS</h3>
              <p className="text-gray-400 text-sm">
                Partners can leverage our expertise and expand their service offerings to enterprise merchants.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
                <span className="text-3xl">🔧</span>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">TECHNOLOGY PARTNERS</h3>
              <p className="text-gray-400 text-sm">
                We work with complementary third party technology and data solution companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why do we partner */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
            Why do we partner?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Our expertise in payment markets is extensive. Orca provides resellers to customers 
            through trusted channels. Each of our partners bring their own specialized and 
            combined with our market-leading capabilities, we can better serve existing customer 
            bases and reach new markets. It's a partnership model that works.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-4 font-bold hover:bg-blue-700 transition-all duration-300 shadow-xl text-lg"
          >
            CONTACT US
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Ready to Partner with Orca?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our growing network of successful partners and start earning today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-block bg-white text-blue-600 px-8 py-4 font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl text-lg"
            >
              Become a Partner
            </Link>
            <Link 
              to="/contact" 
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 font-bold hover:bg-white/10 transition-all duration-300 text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResellersPage;
