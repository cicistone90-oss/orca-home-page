import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">
            Innovation & Brilliance
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed font-light">
            At OrcaPay, we're revolutionizing the payment industry with cutting-edge technology 
            and innovative solutions. Our mission is to make payments seamless, secure, and 
            accessible for businesses of all sizes.
          </p>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
            Founded by industry experts with decades of experience in fintech and payments, 
            we understand the challenges businesses face with chargebacks, fraud, and 
            payment processing complexities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;