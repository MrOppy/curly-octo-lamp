import React from 'react';
import { CheckCircle, Star } from 'lucide-react';

const benefits = [
  "Premium signals with 98% accuracy rate",
  "Detailed technical and fundamental analysis",
  "Advanced risk management strategies",
  "Real-time market updates and news",
  "VIP access to expert trading insights",
  "Comprehensive educational resources",
  "Priority support from professional traders",
  "24/7 Support for VIP Members"
];

export default function WhyChooseUs() {
  return (
    <div className="max-w-4xl mx-auto text-center mb-24 relative">
      <div className="flex items-center justify-center gap-2 mb-12">
        <Star className="w-8 h-8 text-yellow-400 animate-pulse" />
        <h2 className="text-4xl font-bold text-gradient">
          Why Choose Our Signals?
        </h2>
        <Star className="w-8 h-8 text-yellow-400 animate-pulse" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {benefits.map((point, index) => (
          <div key={index} className="relative group">
            <div className="glass-card flex items-center gap-3 rounded-xl p-4 relative transform hover:scale-105 transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
              <span className="text-lg text-gray-700">{point}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}