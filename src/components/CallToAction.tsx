import React from 'react';
import { MessageCircle, Sparkles, ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <div className="text-center relative">
      <h2 className="text-4xl font-bold mb-6 text-gradient">
        Ready to Transform Your Trading?
      </h2>
      <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
        Join our elite community of successful traders and start receiving premium signals today
      </p>
      <div className="relative inline-block">
        <a
          href="https://t.me/nonmtgbotxt"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center gap-3 px-12 py-6 glass-card hover:bg-white/60 rounded-2xl text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] text-gray-700"
        >
          <MessageCircle className="w-6 h-6" />
          Join Now - It's Free!
          <ArrowRight className="w-6 h-6" />
          <Sparkles className="w-5 h-5 absolute -top-1 -right-1 text-blue-400 animate-pulse" />
        </a>
      </div>
      <p className="text-gray-500 mt-6 text-sm">
        Experience the power of professional crypto trading signals
      </p>
    </div>
  );
}