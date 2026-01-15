import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    revenue: '',
    products: [],
    message: '',
    hearAbout: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrebwdag";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        products: [...formData.products, value]
      });
    } else {
      setFormData({
        ...formData,
        products: formData.products.filter(item => item !== value)
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Custom validation messages in English
    const form = e.target;
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    
    for (let input of inputs) {
      if (!input.validity.valid) {
        if (input.validity.valueMissing) {
          input.setCustomValidity('Please fill out this field');
        } else if (input.validity.typeMismatch) {
          if (input.type === 'email') {
            input.setCustomValidity('Please enter a valid email address');
          } else if (input.type === 'url') {
            input.setCustomValidity('Please enter a valid URL');
          }
        }
        input.reportValidity();
        return;
      }
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          website: formData.website,
          revenue: formData.revenue,
          products: formData.products.join(', '),
          message: formData.message,
          hearAbout: formData.hearAbout,
          _replyto: formData.email,
          _subject: `New contact form submission from ${formData.firstName} ${formData.lastName}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          website: '',
          revenue: '',
          products: [],
          message: '',
          hearAbout: ''
        });
      } else {
        throw new Error('Failed to submit form');
      }
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const products = [
    'Chargeback Alerts (Ethoca and CDRN)',
    'Auto Resolution (Dispute Intelligence / Verifi RDR)',
    '3D Secure',
    'Transaction Risk API Tool',
    'Digital Receipts',
    'Compelling Evidence',
    'General Inquiry'
  ];

  return (
    <div className="min-h-screen bg-[#0f1c2e]">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <div className="w-20 h-0.5 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Get in touch with our team. We're here to help you with your payment processing needs.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Contact Form */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="flex">
                  <svg className="w-5 h-5 text-green-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">
                      Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <div className="flex">
                  <svg className="w-5 h-5 text-red-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-red-800">
                      Failed to send message. Please try again or contact us directly.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  onInput={(e) => e.target.setCustomValidity('')}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400"
                  placeholder="First Name"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  onInput={(e) => e.target.setCustomValidity('')}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400"
                  placeholder="Last name"
                />
              </div>
            </div>
            
            {/* Email */}
            <div>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                onInput={(e) => e.target.setCustomValidity('')}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400"
                placeholder="Email Address*"
              />
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onInput={(e) => e.target.setCustomValidity('')}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400"
                placeholder="Phone Number"
              />
            </div>

            {/* Company Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  onInput={(e) => e.target.setCustomValidity('')}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400"
                  placeholder="Company Name"
                />
              </div>
              <div>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  onInput={(e) => e.target.setCustomValidity('')}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400"
                  placeholder="Company Website"
                />
              </div>
            </div>

            {/* Revenue */}
            <div>
              <input
                type="text"
                id="revenue"
                name="revenue"
                value={formData.revenue}
                onChange={handleChange}
                onInput={(e) => e.target.setCustomValidity('')}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400"
                placeholder="Annual Company Revenue"
              />
            </div>

            {/* Products Checkboxes */}
            <div>
              <label className="block text-lg font-semibold text-[#1e3a5f] mb-4">
                Which products are you considering?
              </label>
              <div className="space-y-3">
                {products.map((product) => (
                  <div key={product} className="flex items-center">
                    <input
                      type="checkbox"
                      id={product}
                      name="products"
                      value={product}
                      checked={formData.products.includes(product)}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor={product} className="ml-3 text-[#1e3a5f] font-medium">
                      {product}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                onInput={(e) => e.target.setCustomValidity('')}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none placeholder-gray-400"
                placeholder="Message"
              />
            </div>

            {/* How did you hear about us */}
            <div>
              <select
                id="hearAbout"
                name="hearAbout"
                value={formData.hearAbout}
                onChange={handleChange}
                onInput={(e) => e.target.setCustomValidity('')}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-500"
              >
                <option value="">How did you hear about OrcaPay?</option>
                <option value="search">Search Engine</option>
                <option value="social">Social Media</option>
                <option value="referral">Referral</option>
                <option value="event">Event/Conference</option>
                <option value="advertisement">Advertisement</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#1e3a5f] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#2d4a6f] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Submit'
              )}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-300">support@orcapay.com</p>
              <p className="text-gray-300">sales@orcapay.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
              <p className="text-sm text-gray-400">Mon-Fri 9AM-6PM PST</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Office</h3>
              <p className="text-gray-300">123 Payment Street, Suite 100</p>
              <p className="text-gray-300">San Francisco, CA 94105</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
