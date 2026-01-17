import React from 'react';

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* OrcaPay PREVENT Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm mb-6">
            SEAMLESS INTEGRATION
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16">
            Products & Services We Offer
          </h2>
          
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium backdrop-blur-sm mb-6">
            OrcaPay PREVENT
          </div>
          <p className="text-lg md:text-xl text-gray-400 mb-12 font-light">Prevent disputes from ever occurring</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Digital Receipts */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 text-center">
                <div className="mb-6 flex justify-center">
                  <svg className="w-12 h-12 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-300">Digital Receipts</h3>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  Enhance user trust and reduce chargeback risk with OrcaPay.
                </p>
              </div>
            </div>

            {/* 3D Secure */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-2xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 group hover:transform hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 text-center">
                <div className="mb-6 flex justify-center">
                  <svg className="w-12 h-12 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 1.61-.36 3.11-1.05 4.34-.67 1.21-1.14 1.77-2.01 2.64-.18.18-.47.18-.65 0-.87-.87-1.33-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-1.9 1.37-3.39 2.96-3.39s2.96 1.49 2.96 3.39c0 1.61-.36 3.11-1.05 4.34-.67 1.21-1.14 1.77-2.01 2.64-.09.1-.22.15-.35.15z"/>
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors duration-300">3D Secure</h3>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  Secure your payment pages with OrcaPay and 3D Secure.
                </p>
              </div>
            </div>

            {/* Compelling Evidence 3.0 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-2xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 group hover:transform hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 text-center">
                <div className="mb-6 flex justify-center">
                  <svg className="w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h9V9zm0 5h-9v3h9v-3z"/>
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">Compelling Evidence 3.0</h3>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  Unlock strong evidence and documentation to challenge chargebacks effectively with OrcaPay.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex justify-center mb-16">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        </div>

        {/* OrcaPay RESOLVE Section */}
        <div className="text-center">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm mb-6">
            OrcaPay RESOLVE
          </div>
          <p className="text-lg md:text-xl text-gray-400 mb-12 font-light">Resolve disputes before they become chargebacks</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Chargeback Alerts */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 text-center">
                <div className="mb-6 flex justify-center">
                  <svg className="w-12 h-12 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-300">Chargeback Alerts</h3>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  Stop chargebacks with OrcaPay's proactive alerts suite, offering both 
                  Ethoca and Verifi CDRN alerts.
                </p>
              </div>
            </div>

            {/* Auto Resolution */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-2xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 group hover:transform hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 text-center">
                <div className="mb-6 flex justify-center">
                  <svg className="w-12 h-12 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/>
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors duration-300">Auto Resolution</h3>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  With Verifi RDR and Dispute Intelligence, set customized rules to auto-refund 
                  dispute/chargeback alerts in real-time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;