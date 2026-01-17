import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WhiteLabelSolutionsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-sm font-medium text-blue-600 mb-4 uppercase tracking-wide">
              PRODUCTS
            </div>
            <h1 className="text-5xl font-display font-bold text-gray-900 mb-6">
              White Label Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Orca's White Label Solutions allow you to offer comprehensive payment processing 
              services under your own brand. Build your payment business with our proven 
              infrastructure, advanced features, and dedicated support.
            </p>

          </div>
        </div>
      </section>

      {/* What is Orca's White Label Service */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">
                What is Orca's White Label Service?
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Orca's White Label Service provides a complete payment processing platform 
                that you can brand as your own. From merchant onboarding to transaction processing, 
                risk management, and customer support - everything is customized with your branding 
                while powered by our robust infrastructure.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">⚙️</span>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Fully Customizable</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Complete customization of the platform interface, branding, and user experience 
                    to match your company's identity and requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Full Control</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Maintain complete control over your merchant relationships, pricing, 
                    and business operations while leveraging our technology infrastructure.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">👥</span>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Leverage Our Expertise</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Benefit from our years of experience in payment processing, compliance, 
                    and risk management without building everything from scratch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How the White Label Service Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm font-medium text-blue-600 mb-4 uppercase tracking-wide">
              PROCESS
            </div>
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              How the White Label Service Works
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full">
                  <span className="text-4xl font-black text-gray-700 tracking-tight">1</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                  Reach Out to Us
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  Get in touch with our team to discuss your white label requirements. 
                  We'll work with you to understand your business needs and goals.
                </p>
              </div>
            </div>

            <div className="bg-white p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full">
                  <span className="text-4xl font-black text-gray-700 tracking-tight">2</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                  Consultation
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  Our experts discuss your specific needs and 
                  create a customized solution that fits your business model and requirements.
                </p>
              </div>
            </div>

            <div className="bg-blue-600 p-10 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full">
                  <span className="text-4xl font-black text-white tracking-tight">3</span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-6 tracking-tight leading-tight">
                  Delivery
                </h3>
                <p className="text-blue-100 text-lg leading-relaxed font-medium">
                  We deliver your fully customized white label solution 
                  with your branding, ready to launch and start serving your merchants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White Label Solutions Details */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-blue-600 pl-6 mb-8">
            <div className="text-sm font-medium text-blue-600 mb-2 uppercase tracking-wide">
              ORCA SOLUTIONS
            </div>
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-2">
              White Label Solutions
            </h2>
            <div className="w-12 h-1 bg-blue-600"></div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Orca's White Label Solutions are designed to help you build and scale your payment 
              processing business quickly and efficiently. Whether you're a financial institution, 
              technology company, or payment service provider, our white label platform gives you 
              everything you need to offer comprehensive payment services under your own brand.
            </p>

            <div className="bg-gray-50 p-6 mb-8">
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">Key Components:</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">Fully customizable merchant portal and dashboard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">Complete payment processing infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">Advanced fraud detection and risk management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">Comprehensive reporting and analytics</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">Multi-currency and multi-payment method support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">PCI DSS compliant security infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">24/7 technical support and maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span className="text-gray-700">Flexible deployment options (cloud or on-premise)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration CTA */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Want a White Label Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start building your payment processing business with our comprehensive 
            white label platform. Get everything you need to launch and scale.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-4 font-bold hover:bg-blue-700 transition-all duration-300 shadow-xl text-lg"
          >
            CONTACT US
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 mb-12">
            Why Choose Orca's White Label Solutions?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Fast Time to Market</h3>
                <p className="text-gray-600">
                  Launch your payment processing business quickly with our proven platform and infrastructure
                </p>
              </div>
            </div>

            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Cost Effective</h3>
                <p className="text-gray-600">
                  Reduce development costs and time by leveraging our existing technology and expertise
                </p>
              </div>
            </div>

            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
                  <span className="text-3xl">🔧</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Full Customization</h3>
                <p className="text-gray-600">
                  Complete control over branding, features, and user experience to match your business needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Ready to Launch Your Payment Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Partner with Orca and build your white label payment processing solution today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-block bg-white text-blue-600 px-8 py-4 font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl text-lg"
            >
              Request Demo
            </Link>
            <Link 
              to="/contact" 
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 font-bold hover:bg-white/10 transition-all duration-300 text-lg"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhiteLabelSolutionsPage;