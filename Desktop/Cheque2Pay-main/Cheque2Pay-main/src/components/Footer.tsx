import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="mb-4">
              <img 
                src="/logo.png" 
                alt="Cheque2Pay Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6">
              Digitizing India's payment ecosystem with secure, instant cheque processing technology.
            </p>
            <div className="space-y-2">
              <a href="#blog" className="block text-gray-300 hover:text-white transition-colors">Our Blog</a>
              <a href="#about" className="block text-gray-300 hover:text-white transition-colors">Mission & Vision</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Press Kit</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#pricing" className="block text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Careers</a>
              <a href="#faq" className="block text-gray-300 hover:text-white transition-colors">FAQ</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">API Documentation</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">System Status</a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">RBI Compliance</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Security</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-purple-400" />
                <span className="text-gray-300">+91-80-4567-8900</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-purple-400" />
                <span className="text-gray-300">support@cheque2pay.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-purple-400 mt-1" />
                <span className="text-gray-300">
                  WeWork Galaxy, 43, Residency Road,<br />
                  Bengaluru, Karnataka 560025
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Cheque2Pay. All rights reserved. | FINTECH-2024-001234
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;