import React from 'react';
import { Shield, Award, FileText, Phone } from 'lucide-react';

const Compliance = () => {
  const certifications = [
    {
      icon: Shield,
      title: "PCI-DSS Certified",
      description: "Level 1 compliance for secure payment processing"
    },
    {
      icon: Award,
      title: "ISO 27001",
      description: "Information security management certified"
    },
    {
      icon: FileText,
      title: "RBI Registered",
      description: "Licensed digital payment service provider"
    },
    {
      icon: Shield,
      title: "SOC 2 Type II",
      description: "Audited security and availability controls"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            RBI Compliance & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Legal Assurance</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our platform meets the highest standards of regulatory compliance and security certifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <cert.icon className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
              <p className="text-gray-300 text-sm">{cert.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">Legal Information</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors border-b border-gray-700 pb-2">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors border-b border-gray-700 pb-2">
                Terms & Conditions
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors border-b border-gray-700 pb-2">
                Cookie Policy
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors border-b border-gray-700 pb-2">
                Data Protection Policy
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <p className="text-sm">
                <strong>Fintech Registration ID:</strong> FINTECH-2024-001234
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">Grievance Redressal</h3>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-yellow-400 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Grievance Officer</h4>
                  <p className="text-gray-300 mb-1">Mr. Vikash Kumar</p>
                  <p className="text-gray-300 mb-1">Email: grievance@cheque2pay.com</p>
                  <p className="text-gray-300 mb-1">Phone: +91-80-4567-8900</p>
                  <p className="text-gray-300 text-sm">Available: Mon-Fri, 9 AM - 6 PM</p>
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Response within 24 hours for urgent matters, 72 hours for regular queries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compliance;