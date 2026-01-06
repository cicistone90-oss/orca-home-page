import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            <p className="text-lg text-gray-600">
              Last updated: January 6, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-6">
              We collect information you provide directly to us, such as when you create an account, 
              make a payment, or contact us for support. This may include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Personal information (name, email address, phone number)</li>
              <li>Payment information (credit card details, billing address)</li>
              <li>Business information (company name, tax ID, business address)</li>
              <li>Transaction data and payment history</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-6">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Process payments and transactions</li>
              <li>Prevent fraud and enhance security</li>
              <li>Provide customer support</li>
              <li>Improve our services and develop new features</li>
              <li>Comply with legal obligations</li>
              <li>Send important updates about our services</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
            <p className="text-gray-600 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>With your explicit consent</li>
              <li>To comply with legal requirements</li>
              <li>To protect our rights and prevent fraud</li>
              <li>With trusted service providers who assist in our operations</li>
              <li>In connection with a business transfer or acquisition</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement industry-standard security measures to protect your information, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>SSL encryption for data transmission</li>
              <li>PCI DSS Level 1 compliance</li>
              <li>Regular security audits and monitoring</li>
              <li>Access controls and employee training</li>
              <li>Secure data storage and backup systems</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Retention</h2>
            <p className="text-gray-600 mb-6">
              We retain your information for as long as necessary to provide our services and comply 
              with legal obligations. Transaction data may be retained for up to 7 years for 
              regulatory compliance purposes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
            <p className="text-gray-600 mb-6">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Access and review your personal information</li>
              <li>Request corrections to inaccurate data</li>
              <li>Request deletion of your data (subject to legal requirements)</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability where applicable</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking</h2>
            <p className="text-gray-600 mb-6">
              We use cookies and similar technologies to improve your experience, analyze usage, 
              and provide personalized content. You can control cookie settings through your 
              browser preferences.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Transfers</h2>
            <p className="text-gray-600 mb-6">
              Your information may be transferred to and processed in countries other than your own. 
              We ensure appropriate safeguards are in place to protect your data during such transfers.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any 
              material changes by posting the new policy on our website and updating the 
              "Last updated" date.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this Privacy Policy or our data practices, 
              please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@orcapay.com</p>
              <p className="text-gray-700 mb-2"><strong>Address:</strong> OrcaPay Technologies, Inc.</p>
              <p className="text-gray-700 mb-2">123 Payment Street, Suite 100</p>
              <p className="text-gray-700">San Francisco, CA 94105</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;