import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import TrustedBy from '../components/TrustedBy.jsx';
import Services from '../components/Services.jsx';
import Features from '../components/Features.jsx';
import Products from '../components/Products.jsx';
import Industries from '../components/Industries.jsx';
import KeyFeatures from '../components/KeyFeatures.jsx';
import About from '../components/About.jsx';
import Footer from '../components/Footer.jsx';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <Features />
      <Products />
      <Industries />
      <KeyFeatures />
      <About />
      <Footer />
    </div>
  );
};

export default HomePage;