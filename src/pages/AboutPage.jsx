import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-slate-200 to-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-slate-100/50 to-gray-100/50"></div> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-28">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              About OrcaPay
            </h1>
            <div className="w-20 h-0.5 bg-gray-900 mx-auto mb-6"></div>
            <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed font-light">
              Pioneering the future of payment technology with innovative solutions that empower businesses worldwide
            </p>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-slate-100/50 to-white/80 blur-3xl"></div>
          <div className="relative bg-white backdrop-blur-xl p-12 border border-gray-300 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Company Overview
              </h2>
              <div className="w-16 h-1 bg-gray-900 mx-auto mb-8"></div>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <p className="text-xl text-gray-800 leading-relaxed mb-12 text-center font-light">
                OrcaPay stands at the forefront of payment technology innovation, delivering comprehensive solutions 
                that transform how businesses handle transactions, manage risks, and scale globally.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="group hover:translate-y-[-4px] transition-all duration-300">
                  <div className="bg-gradient-to-br from-gray-50 to-slate-100 p-8 border border-gray-300 h-full shadow-lg hover:shadow-xl hover:border-gray-400 transition-all duration-300">
                    <div className="mb-6">
                      <div className="w-12 h-1 bg-gray-900"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Risk Management</h3>
                    <p className="text-gray-700 leading-relaxed font-light">
                      Advanced AI-powered fraud detection, real-time transaction monitoring, and comprehensive 
                      chargeback prevention systems that safeguard your business from financial threats.
                    </p>
                  </div>
                </div>
                
                <div className="group hover:translate-y-[-4px] transition-all duration-300">
                  <div className="bg-gradient-to-br from-gray-50 to-slate-100 p-8 border border-gray-300 h-full shadow-lg hover:shadow-xl hover:border-gray-400 transition-all duration-300">
                    <div className="mb-6">
                      <div className="w-12 h-1 bg-gray-900"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Merchant Services</h3>
                    <p className="text-gray-700 leading-relaxed font-light">
                      End-to-end payment processing solutions, strategic acquirer partnerships, and expert 
                      consulting services that connect merchants with optimal payment ecosystems.
                    </p>
                  </div>
                </div>
                
                <div className="group hover:translate-y-[-4px] transition-all duration-300">
                  <div className="bg-gradient-to-br from-gray-50 to-slate-100 p-8 border border-gray-300 h-full shadow-lg hover:shadow-xl hover:border-gray-400 transition-all duration-300">
                    <div className="mb-6">
                      <div className="w-12 h-1 bg-gray-900"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology Solutions</h3>
                    <p className="text-gray-700 leading-relaxed font-light">
                      Cutting-edge white-label platforms, robust APIs, and custom integrations designed 
                      to meet the unique demands of diverse industries and business models.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-xl text-gray-800 leading-relaxed max-w-4xl mx-auto font-light">
                  From emerging startups to enterprise corporations, across all risk categories and global markets, 
                  OrcaPay delivers tailored solutions that ensure compliance, optimize costs, and maximize payment success rates. 
                  Our expertise empowers businesses to expand internationally while maintaining the highest standards of 
                  security and efficiency in payment processing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Leadership Team
          </h2>
          <div className="w-16 h-1 bg-gray-900 mx-auto mb-8"></div>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto font-light">
            Meet the visionary leaders driving OrcaPay's mission to revolutionize the payment industry
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Henry Xu */}
          <div className="group flex">
            <div className="relative flex-1">
              <div className="absolute -inset-1 bg-gradient-to-br from-gray-300 via-slate-300 to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white p-12 border-2 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 h-full flex flex-col">
                <div className="flex-1 flex flex-col">
                  <div className="mb-8">
                    <h3 className="text-5xl font-bold text-gray-900 mb-2 tracking-tight">Henry Xu</h3>
                    <p className="text-xl text-gray-600 font-medium mb-3">Founder</p>
                    <div className="w-24 h-1 bg-gray-900"></div>
                  </div>
                  <div className="text-gray-800 leading-relaxed text-base space-y-5 flex-1 text-left font-serif">
                    <p className="indent-8">
                      Visionary entrepreneur and technology leader with over a decade of experience in fintech innovation.
                    </p>
                    <p className="indent-8">
                      Henry founded OrcaPay with the mission to democratize payment processing and make advanced financial 
                      technology accessible to businesses of all sizes.
                    </p>
                    <p className="indent-8">
                      His strategic vision and deep industry expertise continue to drive OrcaPay's growth and technological advancement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bruce Parker */}
          <div className="group flex">
            <div className="relative flex-1">
              <div className="absolute -inset-1 bg-gradient-to-br from-gray-300 via-slate-300 to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white p-12 border-2 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 h-full flex flex-col">
                <div className="flex-1 flex flex-col">
                  <div className="mb-8">
                    <h3 className="text-5xl font-bold text-gray-900 mb-2 tracking-tight">Bruce Parker</h3>
                    <p className="text-xl text-gray-600 font-medium mb-3">Lifetime Advisor</p>
                    <div className="w-24 h-1 bg-gray-900"></div>
                  </div>
                  <div className="text-gray-800 leading-relaxed text-base space-y-5 flex-1 text-left font-serif">
                    <p className="indent-8">
                      Distinguished industry veteran and strategic advisor with extensive experience in global payment 
                      ecosystems and risk management.
                    </p>
                    <p className="indent-8">
                      Bruce brings invaluable insights from decades of leadership in financial services, helping shape 
                      OrcaPay's long-term strategy.
                    </p>
                    <p className="indent-8">
                      His guidance ensures the company remains at the cutting edge of payment technology innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
