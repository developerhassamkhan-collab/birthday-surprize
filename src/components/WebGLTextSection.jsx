import React, { useEffect, useRef } from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { birthdayData } from '../data/birthdayData';

export default function WebGLTextSection() {
  const quote = birthdayData.quotes[0];

  return (
    <section className="relative w-full min-h-screen py-24 sm:py-32 z-10 flex flex-col items-center justify-center px-6">
      
      {/* Ambient background aura */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-950/20 to-transparent pointer-events-none -z-10" />

      <div className="container mx-auto max-w-5xl flex flex-col items-center gap-16 sm:gap-24 text-center">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 text-gold text-xs sm:text-sm font-sans font-black tracking-[0.4em] uppercase mb-4">
            <Sparkles className="w-4 h-4 text-gold" />
            <span>{quote.heading}</span>
            <Sparkles className="w-4 h-4 text-gold" />
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif italic font-black text-rose-gradient leading-[1.05] tracking-tight drop-shadow-[0_8px_30px_rgba(232,84,122,0.35)]">
            {quote.subheading}
          </h2>
        </div>

        {/* Poetic Editorial Paragraphs */}
        <div className="flex flex-col gap-12 sm:gap-16 w-full max-w-4xl text-center md:text-left px-4">
          {quote.paragraphs.map((p, idx) => (
            <div 
              key={idx}
              className="relative p-6 sm:p-10 rounded-3xl glass-panel hover:border-rose-400/30 transition-all duration-500 group"
            >
              <span className="absolute -top-4 -left-3 text-4xl text-rose-500/30 font-serif font-black select-none">“</span>
              <p className="text-rose-100/90 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-[1.35] tracking-[-0.01em] group-hover:text-white transition-colors">
                {p}
              </p>
              <div className="mt-4 flex items-center justify-end">
                <Heart className="w-5 h-5 text-rose-400/40 group-hover:text-rose-400 group-hover:fill-rose-400 transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Closing Signature */}
        <div className="flex flex-col items-center mt-6">
          <p className="text-rose-200 text-4xl sm:text-6xl md:text-7xl font-serif italic font-black tracking-tight leading-tight drop-shadow-[0_8px_30px_rgba(232,84,122,0.3)]">
            {quote.closing}
          </p>
        </div>

      </div>
    </section>
  );
}
