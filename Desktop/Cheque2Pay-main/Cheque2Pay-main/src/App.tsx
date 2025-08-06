import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navigation from './components/Navigation';
import Dashboard from './components/dashboard/Dashboard';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Stats from './components/Stats';
import BankIntegrations from './components/BankIntegrations';
import About from './components/About';
import Founders from './components/Founders';
import StartupVideo from './components/StartupVideo';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Compliance from './components/Compliance';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import FirebaseTest from './components/FirebaseTest';

const HomePage = () => (
  <>
    <Hero />
    <Features />
    <HowItWorks />
    <Stats />
    <BankIntegrations />
    <About />
    <Founders />
    <StartupVideo />
    <Testimonials />
    <Pricing />
    <Blog />
    <FAQ />
    <Compliance />
    <Contact />
    <Newsletter />
    <Footer />
  </>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <Chatbot />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;