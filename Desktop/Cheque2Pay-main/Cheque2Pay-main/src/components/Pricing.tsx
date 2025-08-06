import React from 'react';
import { Check, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Free Tier",
      price: "₹0",
      period: "forever",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 50 cheque scans per month",
        "UPI integration only",
        "Basic signature verification",
        "Email support",
        "Mobile app access"
      ],
      buttonText: "Get Started Free",
      popular: false
    },
    {
      name: "Pro Tier",
      price: "₹199",
      period: "per month",
      description: "Ideal for growing businesses with higher volume",
      features: [
        "Unlimited cheque scans",
        "Full dashboard analytics",
        "Bulk upload capability",
        "Advanced fraud detection",
        "Priority support",
        "API access",
        "Multi-bank integration",
        "Custom workflows"
      ],
      buttonText: "Start Pro Trial",
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your business needs. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative rounded-2xl p-8 ${plan.popular ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-2xl scale-105' : 'bg-gray-50 border border-gray-200'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.popular ? 'text-purple-100' : 'text-gray-600'}`}>
                    /{plan.period}
                  </span>
                </div>
                <p className={`${plan.popular ? 'text-purple-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className={`h-5 w-5 mr-3 ${plan.popular ? 'text-green-300' : 'text-green-500'}`} />
                    <span className={`${plan.popular ? 'text-white' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-semibold text-lg transition-all ${
                plan.popular 
                  ? 'bg-white text-purple-600 hover:shadow-lg hover:bg-gray-50' 
                  : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg'
              }`}>
                {plan.buttonText}
                {plan.popular && <Zap className="inline h-5 w-5 ml-2" />}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need a custom solution for your enterprise?</p>
          <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;