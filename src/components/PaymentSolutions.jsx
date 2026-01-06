import React from 'react';

const PaymentSolutions = () => {
  const solutions = [
    {
      title: "Secure by Design",
      color: "blue",
      description: "Our security-first payment tools ensure your business is protected from scammers, chargebacks, and other threats.",
      details: "OrcaPay merchants benefit from machine learning, 2FA, and industry-leading security measures. We never compromise to safeguard your bottom line."
    },
    {
      title: "Made to Scale",
      color: "green",
      description: "Whether you're a startup or an established enterprise, our tools adapt to your evolving needs.",
      details: "Focus on what drives your business forward while we ensure payments never become a bottleneck."
    },
    {
      title: "Tailored for High-Risk",
      color: "orange",
      description: "As high-risk specialists, we understand the regulatory hurdles, compliance demands, and payment challenges you face.",
      details: "Our features and support are tailored to help high-risk businesses thrive."
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        accent: "border-blue-500",
        text: "text-blue-600"
      },
      green: {
        accent: "border-green-500",
        text: "text-green-600"
      },
      orange: {
        accent: "border-orange-500",
        text: "text-orange-600"
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Secure, Scalable Payment Solutions for High-Risk Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Whether you're launching or expanding, we offer the necessary tools, support, and expertise to help you accept payments quickly and confidently, without delays or sudden shutdowns.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const colors = getColorClasses(solution.color);
            return (
              <div key={index} className="group">
                {/* Title with colored underline */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {solution.title}
                  </h3>
                  <div className={`w-16 h-1 ${colors.accent.replace('border-', 'bg-')} rounded-full`}></div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {solution.description}
                </p>

                {/* Details */}
                <p className="text-gray-600 leading-relaxed">
                  {solution.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PaymentSolutions;