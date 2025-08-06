import React from 'react';
import { Target, Briefcase } from 'lucide-react';

const About = () => {
  const founders = [
    {
      name: "Pawan kumar",
      title: " Co-Founder & Chief Technology Officer",
      description: "Builds backend systems and integrates AI-driven cheque verification.",
      image: "/assest/pawan.jpg"
    },
    {
      name: "vishal kumar",
      title: "Co-Founder & Chief Strategy Officer",
      description: "Leads product vision, strategy, and market positioning.",
      image: "/assest/vishal.jpg"
    },
    {
      name: "yaswant kumar",
      title: "Co-Founder & Chief Design Officer (UI/UX)",
      description: "Designs user interfaces and ensures a smooth digital experience.",
      image: "/assest/yaswant.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Our Team</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-8">
              We're on a mission to digitize India's payment ecosystem by making cheque transactions as fast and secure as digital payments. Our team combines deep fintech expertise with cutting-edge technology to build trust in every transaction.
            </p>
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-8 border border-purple-200">
              <div className="flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-700">
                To eliminate the friction in traditional cheque payments while maintaining the trust and security that businesses depend on.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {founders.map((founder, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-all">
              <img 
                src={founder.image} 
                alt={founder.name}
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{founder.name}</h3>
              <p className="text-purple-600 font-semibold mb-3">{founder.title}</p>
              <p className="text-gray-600">{founder.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-8">
            <div className="flex items-center justify-center mb-4">
              <Briefcase className="h-8 w-8 mr-3" />
              <h3 className="text-2xl font-bold">Join Our Team</h3>
            </div>
            <p className="text-xl mb-6">
              We're looking for passionate individuals to help shape the future of digital payments in India.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
              View Careers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;