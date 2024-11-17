import React, { useState } from 'react';
import { TrendingUp, MessageCircle, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center text-center mb-24 relative">
      {/* Floating elements */}
      <div className="absolute top-0 left-1/4 w-24 h-24 glass-effect rounded-2xl rotate-12 opacity-60 floating"></div>
      <div className="absolute top-20 right-1/4 w-16 h-16 glass-effect rounded-xl -rotate-12 opacity-60 floating animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/3 w-20 h-20 glass-effect rounded-full opacity-60 floating animation-delay-4000"></div>

      <div className="relative z-10">
        <div className="glass-effect rounded-full px-6 py-2 mb-8 inline-block">
          <span className="text-gray-600 font-medium">Premium Quotex Signals</span>
        </div>

        <div className="flex items-center justify-center gap-3 mb-6">
          <TrendingUp className="w-12 h-12 text-gray-700" />
          <div className="flex flex-col">
            <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-2">
              SETU OFC - OFFICIAL
            </h1>
            <span className="text-xl md:text-2xl font-semibold text-gray-600">Quotex Trading Signals</span>
          </div>
        </div>

        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-12 leading-relaxed">
          Join the elite community of quotex traders receiving high-accuracy signals
          <span className="block text-gray-500 mt-2 text-lg">Your gateway to professional quotex trading success</span>
        </p>
        
        <div className="space-y-8">
          <a
            href="https://t.me/nonmtgbotxt"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-12 py-6 glass-card hover:bg-white/60 rounded-2xl text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] text-gray-700"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <MessageCircle className={`w-6 h-6 transition-transform duration-300 ${isHovered ? 'rotate-12' : ''}`} />
            Join Our Telegram Channel
            <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
            <Sparkles className="w-5 h-5 absolute -top-1 -right-1 text-blue-400 animate-pulse" />
          </a>

          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 mx-auto text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}