import React from 'react';
import { Scan, PenTool, Shield, Zap, Building, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Scan,
      title: "Smart Cheque Scanning",
      description: "AI-powered OCR technology instantly reads and digitizes cheque information with 99.9% accuracy."
    },
    {
      icon: PenTool,
      title: "Real-Time Signature Match",
      description: "Advanced biometric verification ensures signature authenticity before processing payments."
    },
    {
      icon: Shield,
      title: "Encrypted Transactions",
      description: "Bank-grade encryption and multi-layer security protocols protect every transaction."
    },
    {
      icon: Zap,
      title: "Instant UPI/Bank Transfer",
      description: "Convert cheques to instant digital payments through UPI and direct bank transfers."
    },
    {
      icon: Building,
      title: "Multi-Bank Integration",
      description: "Seamlessly works with 25+ major Indian banks through secure API connections."
    },
    {
      icon: Globe,
      title: "Hindi + English Support",
      description: "Complete interface available in Hindi and English for broader accessibility."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Modern Banking</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of cheque payments with cutting-edge technology and uncompromising security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-lg w-fit mb-6">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;