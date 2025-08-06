import React from 'react';
import { Building2 } from 'lucide-react';

const BankIntegrations = () => {
  const banks = [
    { name: "State Bank of India", abbr: "SBI" },
    { name: "HDFC Bank", abbr: "HDFC" },
    { name: "Axis Bank", abbr: "AXIS" },
    { name: "ICICI Bank", abbr: "ICICI" },
    { name: "Yes Bank", abbr: "YES" },
    { name: "Kotak Bank", abbr: "KOTAK" },
    { name: "Bank of Baroda", abbr: "BOB" },
    { name: "Punjab National Bank", abbr: "PNB" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Integrated with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Major Banks</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Seamlessly connected with India's leading banks through secure API integrations and verified UPI partnerships.
          </p>
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full">
            <Building2 className="h-5 w-5 mr-2" />
            <span className="font-medium">API & UPI Integration Verified</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {banks.map((bank, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center border border-gray-100">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-gray-800 text-sm">{bank.abbr}</h3>
              <p className="text-gray-600 text-xs mt-1">{bank.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Want to see your bank integrated?</p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
            Request Integration
          </button>
        </div>
      </div>
    </section>
  );
};

export default BankIntegrations;