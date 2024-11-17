import React from 'react';
import { Signal, Target, Users, Award } from 'lucide-react';

const stats = [
  { 
    icon: <Users className="w-8 h-8" />, 
    value: "12,000+", 
    label: "Active Members"
  },
  { 
    icon: <Signal className="w-8 h-8" />, 
    value: "98%", 
    label: "Accuracy Rate"
  },
  { 
    icon: <Target className="w-8 h-8" />, 
    value: "∞", 
    label: "Successful Signals"
  },
  { 
    icon: <Award className="w-8 h-8" />, 
    value: "24/7", 
    label: "Expert Support"
  }
];

export default function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
      {stats.map((stat, index) => (
        <div key={index} className="relative group">
          <div className="glass-card rounded-2xl p-8 text-center relative transform hover:scale-105 transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gray-50/50 rounded-xl">{stat.icon}</div>
            </div>
            <h3 className="text-4xl font-bold mb-2 text-gray-800">
              {stat.value}
            </h3>
            <p className="text-gray-600 font-medium">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}