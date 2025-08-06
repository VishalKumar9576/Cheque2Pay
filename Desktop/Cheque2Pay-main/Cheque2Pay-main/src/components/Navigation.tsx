import React, { useState } from 'react';
import { Menu, X, LogOut, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import LoginModal from './auth/LoginModal';
import RegisterModal from './auth/RegisterModal';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 py-2 min-h-[5rem]">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-2">
              <div className="relative">
                {/* Logo */}
                <img 
                  src="/logo.png" 
                  alt="Cheque2Pay Logo" 
                  className="h-20 w-auto"
                />
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors text-sm xl:text-base">Home</a>
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors text-sm xl:text-base">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-purple-600 transition-colors text-sm xl:text-base">How It Works</a>
            <a href="#stats" className="text-gray-700 hover:text-purple-600 transition-colors text-sm xl:text-base">Stats</a>
            <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition-colors text-sm xl:text-base">Pricing</a>
            <a href="#blog" className="text-gray-700 hover:text-purple-600 transition-colors text-sm xl:text-base">Blog</a>
            <a href="#faq" className="text-gray-700 hover:text-purple-600 transition-colors text-sm xl:text-base">FAQ</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors text-sm xl:text-base">Contact</a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2.5 rounded-lg border border-gray-200">
                  <User className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700 font-medium">{user.name}</span>
                </div>
                <button
                  onClick={() => window.location.href = '/dashboard'}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all font-medium"
                >
                  Dashboard
                </button>
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-red-600 transition-colors flex items-center px-4 py-2.5 rounded-lg hover:bg-red-50 border border-transparent hover:border-red-200"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium px-4 py-2.5 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200"
                >
                  Login
                </button>
                <button
                  onClick={() => setShowRegisterModal(true)}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all font-medium"
                >
                  Get Started
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Home</a>
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Features</a>
              <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-purple-600">How It Works</a>
              <a href="#stats" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Transaction Stats</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Pricing</a>
              <a href="#blog" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Blog</a>
              <a href="#faq" className="block px-3 py-2 text-gray-700 hover:text-purple-600">FAQ</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Contact</a>
              <div className="flex flex-col space-y-3 px-3 pt-3">
                {user ? (
                  <>
                    <div className="flex items-center space-x-2 py-2.5 bg-gray-50 px-4 rounded-lg border border-gray-200">
                      <User className="h-5 w-5 text-purple-600" />
                      <span className="text-gray-700 font-medium">{user.name}</span>
                    </div>
                    <button
                      onClick={() => window.location.href = '/dashboard'}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2.5 rounded-lg font-medium"
                    >
                      Dashboard
                    </button>
                    <button
                      onClick={logout}
                      className="text-left text-gray-600 hover:text-red-600 flex items-center px-4 py-2.5 rounded-lg hover:bg-red-50 border border-transparent hover:border-red-200"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => setShowLoginModal(true)}
                      className="text-left text-gray-700 hover:text-purple-600 px-4 py-2.5 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => setShowRegisterModal(true)}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2.5 rounded-lg font-medium"
                    >
                      Get Started
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToRegister={() => {
          setShowLoginModal(false);
          setShowRegisterModal(true);
        }}
      />
      <RegisterModal
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        onSwitchToLogin={() => {
          setShowRegisterModal(false);
          setShowLoginModal(true);
        }}
      />
    </nav>
  );
};

export default Navigation;