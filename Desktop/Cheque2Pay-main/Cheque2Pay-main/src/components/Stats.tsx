import React from 'react';
import { TrendingUp, Users, Target, Building } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "₹500 Crore+",
      label: "Processed",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Users,
      value: "1M+",
      label: "Cheques Scanned",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Target,
      value: "98%",
      label: "Success Rate",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Building,
      value: "25+",
      label: "Bank Integrations",
      color: "from-orange-400 to-red-500"
    }
  ];

  return (
    <section id="stats" className="py-20 bg-gradient-to-r from-purple-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Thousands</span>
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Our platform has processed millions of transactions with industry-leading security and reliability.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`bg-gradient-to-r ${stat.color} p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <stat.icon className="h-10 w-10 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-purple-200 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-full">
            <div className="w-3 h-3 bg-green-300 rounded-full mr-3 animate-pulse"></div>
            <span className="font-semibold">System Status: Operational</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;