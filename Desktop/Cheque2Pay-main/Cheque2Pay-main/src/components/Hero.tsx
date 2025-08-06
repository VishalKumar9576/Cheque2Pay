import React from 'react';
import { Play, Download, Shield, Zap, Award, Lock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Pay with <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Prove</span> —
                <br />No Paper, Just Power.
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 leading-relaxed">
                Cheque2Pay digitizes paper cheques into secure, verified real-time payments.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2">
                Get Started
                <Zap className="h-5 w-5" />
              </button>
              <button className="border-2 border-white/30 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <Download className="h-5 w-5" />
                Download App
              </button>
              <button className="text-white hover:text-yellow-400 transition-colors flex items-center gap-2 text-lg">
                <Play className="h-6 w-6" />
                Watch Demo
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Shield className="h-8 w-8 mx-auto mb-2 text-green-400" />
                <div className="text-sm font-medium">RBI Compliant</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Zap className="h-8 w-8 mx-auto mb-2 text-yellow-400" />
                <div className="text-sm font-medium">Instant Transfer</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Award className="h-8 w-8 mx-auto mb-2 text-blue-400" />
                <div className="text-sm font-medium">ISO Certified</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Lock className="h-8 w-8 mx-auto mb-2 text-purple-400" />
                <div className="text-sm font-medium">Secure Encryption</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-20 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg flex items-center justify-center">
                    <div className="text-gray-600 font-medium">Cheque Scanning Interface</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="h-3 bg-gray-200 rounded w-1/3 animate-pulse"></div>
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">✓ Verified</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black p-3 rounded-full animate-bounce">
              <Zap className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-400 text-white p-3 rounded-full animate-pulse">
              <Shield className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;