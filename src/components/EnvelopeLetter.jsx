import React, { useState } from 'react';
import { Mail, Sparkles, Heart, Check, Feather } from 'lucide-react';
import { birthdayData } from '../data/birthdayData';

export default function EnvelopeLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const letter = birthdayData.letter;

  return (
    <section id="letter" className="relative w-full py-28 px-4 z-10 flex flex-col items-center justify-center">
      
      <div className="container mx-auto max-w-4xl text-center">
        
        {/* Section Heading */}
        <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-rose-950/70 border border-rose-400/30 text-gold text-xs sm:text-sm font-semibold uppercase tracking-widest mb-4">
          <Feather className="w-4 h-4 text-gold" />
          <span>{letter.badge}</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-rose-gradient mb-6">
          {letter.title}
        </h2>
        
        <p className="text-rose-200/80 text-base sm:text-lg font-light mb-14 max-w-xl mx-auto">
          {isOpen ? "A handwritten message straight from the depths of my heart..." : "Click on the golden wax seal to open your special birthday letter..."}
        </p>

        {/* Envelope Container */}
        <div className="relative mx-auto w-full max-w-2xl flex flex-col items-center">
          
          {!isOpen ? (
            /* Closed Vintage Envelope */
            <div 
              onClick={() => setIsOpen(true)}
              className="relative w-full aspect-[16/10] sm:h-[360px] bg-gradient-to-br from-[#4a0a1f] to-[#1f040d] rounded-2xl border-2 border-rose-400/40 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(244,63,110,0.3)] p-6 flex flex-col items-center justify-center cursor-pointer hover:scale-[1.02] transition-all duration-500 group overflow-hidden"
            >
              {/* Envelope Flap Lines */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(253,205,249,0.15)_0%,_transparent_70%)] pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-1/2 border-b border-rose-400/20 [clip-path:polygon(0_0,50%_100%,100%_0)] bg-rose-950/40" />

              {/* Decorative Stamps / Postmark */}
              <div className="absolute top-6 right-6 flex flex-col items-center p-2 rounded border border-rose-400/30 text-rose-300 text-[10px] font-mono rotate-6 select-none opacity-80">
                <span>LOVE POST</span>
                <span>✦ 100% ✦</span>
              </div>

              {/* Golden Wax Seal */}
              <div className="relative z-30 flex flex-col items-center">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#946e1c] via-[#e5b842] to-[#ffea9f] p-1 shadow-[0_0_30px_rgba(229,184,66,0.6)] group-hover:scale-110 group-active:scale-95 transition-transform duration-300 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-gradient-to-b from-[#b8860b] to-[#805c06] flex items-center justify-center border border-[#ffeaa7]">
                    <Heart className="w-9 h-9 text-rose-100 fill-rose-100 group-hover:scale-125 transition-transform" />
                  </div>
                </div>
                <span className="mt-4 text-xs font-serif italic text-gold-shimmer font-semibold uppercase tracking-widest animate-pulse">
                  Click Seal to Open
                </span>
              </div>
            </div>
          ) : (
            /* Opened Letter Presentation */
            <div className="w-full bg-[#fffbf2] text-neutral-900 rounded-3xl p-8 sm:p-14 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(253,205,249,0.2)] border border-[#e8d7be] text-left relative animate-shimmer">
              
              {/* Corner Floral Stamp */}
              <div className="absolute top-6 right-6 text-3xl select-none opacity-80">🌸</div>

              {/* Salutation */}
              <h3 className="font-script text-3xl sm:text-4xl text-rose-900 font-bold mb-6">
                {letter.salutation}
              </h3>

              {/* Letter Paragraphs */}
              <div className="space-y-6 font-serif text-lg sm:text-xl text-neutral-800 leading-relaxed">
                {letter.paragraphs.map((p, idx) => (
                  <p key={idx} className="indent-4">
                    {p}
                  </p>
                ))}
              </div>

              {/* Signature */}
              <div className="mt-10 pt-6 border-t border-neutral-300 flex flex-col items-end">
                <span className="font-script text-3xl sm:text-4xl text-rose-800 font-bold">
                  {letter.signature}
                </span>
                <span className="text-xs text-neutral-500 font-serif italic mt-2">
                  {letter.postscript}
                </span>
              </div>

              {/* Close / Fold Back Button */}
              <div className="mt-8 text-center">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2 rounded-full bg-neutral-900 text-rose-200 text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                >
                  Fold Letter Back
                </button>
              </div>

            </div>
          )}

        </div>

      </div>

    </section>
  );
}
