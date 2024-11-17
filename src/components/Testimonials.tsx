import React from 'react';

const testimonials = [
  { name: "Alex K.", text: "The signals are incredibly accurate. I've seen consistent profits since joining.", profit: "+425% in 3 months" },
  { name: "Sarah M.", text: "Best crypto signals group I've ever joined. The analysis is top-notch!", profit: "+280% in 2 months" }
];

export default function Testimonials() {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Members Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 relative">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{testimonial.name}</span>
                  <span className="text-green-400 font-bold">{testimonial.profit}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}