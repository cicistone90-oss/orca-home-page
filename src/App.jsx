import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import InfoPage from './pages/InfoPage.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsOfService from './pages/TermsOfService.jsx';
import ContactUs from './pages/ContactUs.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import PaymentSolutionPage from './pages/PaymentSolutionPage.jsx';
import ResellersPage from './pages/ResellersPage.jsx';
import ChargebackAlertsPage from './pages/ChargebackAlertsPage.jsx';
import VampMonitorPage from './pages/VampMonitorPage.jsx';
import TransactionRiskToolPage from './pages/TransactionRiskToolPage.jsx';
import WhiteLabelSolutionsPage from './pages/WhiteLabelSolutionsPage.jsx';
import HighRiskMerchantPage from './pages/HighRiskMerchantPage.jsx';
import AcquirersMatchingPage from './pages/AcquirersMatchingPage.jsx';
import ReferralServicesPage from './pages/ReferralServicesPage.jsx';
import ApplicationConsultingPage from './pages/ApplicationConsultingPage.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/chargeback-alerts" element={<ChargebackAlertsPage />} />
          <Route path="/products/vamp-monitor" element={<VampMonitorPage />} />
          <Route path="/products/transaction-risk-tool" element={<TransactionRiskToolPage />} />
          <Route path="/products/white-label-solutions" element={<WhiteLabelSolutionsPage />} />
          <Route path="/products/:section" element={<ProductsPage />} />
          <Route path="/payment-solution" element={<PaymentSolutionPage />} />
          <Route path="/payment-solution/acquirers-matching" element={<AcquirersMatchingPage />} />
          <Route path="/payment-solution/referral-services" element={<ReferralServicesPage />} />
          <Route path="/payment-solution/application-consulting" element={<ApplicationConsultingPage />} />
          <Route path="/payment-solution/high-risk-merchant" element={<HighRiskMerchantPage />} />
          <Route path="/payment-solution/:section" element={<PaymentSolutionPage />} />
          <Route path="/resellers" element={<ResellersPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;