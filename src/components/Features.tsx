import React from 'react';
import { LineChart, Trophy, Rocket, Zap, Shield, Clock } from 'lucide-react';

const features = [
  { 
    icon: <LineChart className="w-8 h-8" />, 
    title: "Real-Time Signals", 
    description: "Instant notifications for market opportunities with precise entry and exit points"
  },
  { 
    icon: <Trophy className="w-8 h-8" />, 
    title: "Proven Track Record", 
    description: "Consistent profit-generating signals backed by expert analysis"
  },
  { 
    icon: <Rocket className="w-8 h-8" />, 
    title: "Expert Analysis", 
    description: "Deep market insights and predictions from seasoned traders"
  },
  { 
    icon: <Zap className="w-8 h-8" />, 
    title: "Lightning Fast Alerts", 
    description: "Be the first to know about profitable trading opportunities"
  },
  { 
    icon: <Shield className="w-8 h-8" />, 
    title: "Risk Management", 
    description: "Comprehensive stop-loss and take-profit guidance"
  },
  { 
    icon: <Clock className="w-8 h-8" />, 
    title: "24/7 Support", 
    description: "Round-the-clock assistance from our expert team"
  }
];

export default function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
      {features.map((feature, index) => (
        <div key={index} className="relative group">
          <div className="glass-card rounded-2xl p-8 relative transform hover:scale-105 transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]">
            <div className="inline-flex p-3 rounded-xl bg-gray-50/50 mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}