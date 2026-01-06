import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
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
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using OrcaPay's services, you accept and agree to be bound by the 
              terms and provision of this agreement. If you do not agree to abide by the above, 
              please do not use this service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
            <p className="text-gray-600 mb-6">
              OrcaPay provides payment processing services, chargeback protection, and related 
              financial technology solutions. Our services include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Payment gateway and processing services</li>
              <li>Fraud detection and prevention tools</li>
              <li>Chargeback management and dispute resolution</li>
              <li>Risk assessment and monitoring</li>
              <li>API integration and developer tools</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Account Registration</h2>
            <p className="text-gray-600 mb-6">
              To use our services, you must:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Promptly update any changes to your information</li>
              <li>Be responsible for all activities under your account</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Acceptable Use</h2>
            <p className="text-gray-600 mb-6">
              You agree not to use our services for:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Illegal activities or transactions</li>
              <li>Processing payments for prohibited businesses</li>
              <li>Money laundering or terrorist financing</li>
              <li>Fraudulent or deceptive practices</li>
              <li>Violating intellectual property rights</li>
              <li>Circumventing our security measures</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Fees and Payment</h2>
            <p className="text-gray-600 mb-6">
              Our fees are clearly outlined in your service agreement. You agree to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Pay all applicable fees as specified</li>
              <li>Authorize us to deduct fees from your account</li>
              <li>Accept responsibility for chargeback fees</li>
              <li>Provide accurate billing information</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data and Privacy</h2>
            <p className="text-gray-600 mb-6">
              We are committed to protecting your data. Our data practices are governed by our 
              Privacy Policy, which is incorporated into these terms by reference. You consent to 
              our collection and use of data as described in the Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Service Availability</h2>
            <p className="text-gray-600 mb-6">
              While we strive for 99.9% uptime, we do not guarantee uninterrupted service. 
              We may temporarily suspend services for maintenance, security updates, or other 
              operational requirements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              OrcaPay's liability is limited to the maximum extent permitted by law. We are not 
              liable for indirect, incidental, special, or consequential damages arising from 
              your use of our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Indemnification</h2>
            <p className="text-gray-600 mb-6">
              You agree to indemnify and hold OrcaPay harmless from any claims, damages, or 
              expenses arising from your use of our services, violation of these terms, or 
              infringement of any rights of another party.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
            <p className="text-gray-600 mb-6">
              Either party may terminate this agreement with appropriate notice. Upon termination:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Your access to services will be discontinued</li>
              <li>Outstanding obligations remain in effect</li>
              <li>Data retention policies will apply</li>
              <li>Certain provisions will survive termination</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These terms are governed by the laws of the State of California, United States. 
              Any disputes will be resolved through binding arbitration in San Francisco, CA.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to modify these terms at any time. Material changes will be 
              communicated with at least 30 days' notice. Continued use of our services 
              constitutes acceptance of the updated terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
            <p className="text-gray-600 mb-6">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@orcapay.com</p>
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

export default TermsOfService;