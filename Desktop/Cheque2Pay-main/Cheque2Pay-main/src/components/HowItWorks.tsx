import React from 'react';
import { Upload, CheckCircle, Send } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload or Scan Cheque",
      description: "Simply take a photo of your cheque or upload an image through our secure platform.",
      step: "01"
    },
    {
      icon: CheckCircle,
      title: "Backend Validation",
      description: "Our AI validates signature authenticity and verifies bank details in real-time.",
      step: "02"
    },
    {
      icon: Send,
      title: "Instant Funds Transfer",
      description: "Approved payments are instantly transferred to the recipient's account via UPI or NEFT.",
      step: "03"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your cheque payments in three simple steps with our intelligent processing system.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10">
                  <step.icon className="h-10 w-10" />
                </div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded-full">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all">
            Try It Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;