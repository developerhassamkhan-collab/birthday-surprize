import React, { useState } from 'react';
import { Cake, Sparkles, Flame, Volume2, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { birthdayData } from '../data/birthdayData';

export default function BirthdayCakeSection() {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [wishMade, setWishMade] = useState(false);
  const cakeInfo = birthdayData.cake;

  const triggerConfetti = () => {
    // Left burst
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 70,
      origin: { x: 0, y: 0.7 },
      colors: ['#f43f6e', '#d4af37', '#fdcdf9', '#ffffff']
    });
    // Right burst
    confetti({
      particleCount: 80,
      angle: 120,
      spread: 70,
      origin: { x: 1, y: 0.7 },
      colors: ['#f43f6e', '#d4af37', '#fdcdf9', '#ffffff']
    });
    // Center big starburst
    setTimeout(() => {
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { x: 0.5, y: 0.5 },
        shapes: ['star', 'circle'],
        colors: ['#e11d59', '#ffd700', '#ff8da9', '#ffffff']
      });
    }, 250);
  };

  const handleBlowCandles = () => {
    if (!candlesBlown) {
      setCandlesBlown(true);
      setWishMade(true);
      triggerConfetti();
    } else {
      setCandlesBlown(false);
      setWishMade(false);
    }
  };

  return (
    <section id="cake" className="relative w-full py-28 px-4 z-10 flex flex-col items-center justify-center">
      
      <div className="container mx-auto max-w-4xl text-center">
        
        {/* Section Heading */}
        <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-rose-950/70 border border-rose-400/30 text-gold text-xs sm:text-sm font-semibold uppercase tracking-widest mb-4">
          <Cake className="w-4 h-4 text-gold" />
          <span>{cakeInfo.badge}</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-rose-gradient mb-4">
          {cakeInfo.title}
        </h2>

        <p className="text-rose-200/80 text-base sm:text-lg font-light max-w-xl mx-auto mb-14">
          {cakeInfo.subtitle}
        </p>

        {/* Realistic Interactive 3D Cake Graphic */}
        <div className="relative mx-auto w-[280px] sm:w-[360px] flex flex-col items-center select-none">
          
          {/* Candles & Flames */}
          <div className="flex justify-center gap-6 sm:gap-8 mb-[-12px] z-30">
            {[1, 2, 3].map((candleIndex) => (
              <div key={candleIndex} className="relative flex flex-col items-center">
                {/* Flame */}
                {!candlesBlown ? (
                  <div className="relative mb-1">
                    <div className="w-3.5 h-6 rounded-full bg-gradient-to-t from-orange-500 via-yellow-300 to-white shadow-[0_0_15px_rgba(255,165,0,0.9)] animate-pulse" />
                    <div className="absolute inset-0 bg-yellow-400 blur-sm opacity-80 animate-ping" />
                  </div>
                ) : (
                  /* Smoke puff when blown */
                  <div className="w-1.5 h-5 flex flex-col items-center opacity-60 animate-float-slow">
                    <span className="text-xs text-gray-400 select-none">💨</span>
                  </div>
                )}
                {/* Candle Stick */}
                <div className="w-3 h-12 bg-gradient-to-r from-rose-200 via-rose-100 to-rose-300 rounded-t-sm shadow-md border-t border-white/50" />
              </div>
            ))}
          </div>

          {/* Tier 1 (Top Tier) */}
          <div className="relative w-44 sm:w-56 h-16 rounded-t-2xl bg-gradient-to-b from-[#ffd3e2] via-[#f799b6] to-[#e8668d] shadow-lg border-t-2 border-white/40 flex items-center justify-center z-20">
            <div className="absolute top-2 w-full flex justify-around px-4">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="text-xs text-rose-800">🍓</span>
              ))}
            </div>
            <span className="font-script text-xl text-rose-950 font-bold mt-3">Love</span>
          </div>

          {/* Tier 2 (Middle Tier) */}
          <div className="relative w-56 sm:w-72 h-18 rounded-t-2xl bg-gradient-to-b from-[#ffb8d1] via-[#eb5e88] to-[#c72656] shadow-xl border-t-2 border-white/30 flex items-center justify-center z-10 -mt-2">
            <div className="absolute top-2 w-full flex justify-around px-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-white/70 shadow-sm" />
              ))}
            </div>
            <span className="font-serif italic text-2xl text-white font-bold tracking-wider mt-4">
              Happy Birthday
            </span>
          </div>

          {/* Tier 3 (Bottom Tier) */}
          <div className="relative w-68 sm:w-88 h-22 rounded-t-2xl bg-gradient-to-b from-[#db3062] via-[#9e103b] to-[#59041d] shadow-2xl border-t-2 border-white/20 flex items-center justify-center -mt-2">
            <div className="absolute bottom-2 flex gap-3 text-sm">
              <span>🌸</span>
              <span>✨</span>
              <span>💖</span>
              <span>✨</span>
              <span>🌸</span>
            </div>
          </div>

          {/* Cake Stand Plate */}
          <div className="w-80 sm:w-96 h-6 rounded-full bg-gradient-to-r from-gold/30 via-gold to-gold/30 shadow-[0_15px_30px_rgba(0,0,0,0.8)] border border-gold/50 -mt-2 z-0" />
        </div>

        {/* Blow Candles Action Button */}
        <div className="mt-12">
          <button
            onClick={handleBlowCandles}
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 via-rose-600 to-rose-700 text-white font-serif font-bold text-lg sm:text-xl shadow-[0_0_30px_rgba(244,63,110,0.6)] hover:shadow-[0_0_45px_rgba(244,63,110,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 border border-rose-300/40"
          >
            <span className="flex items-center gap-3">
              {candlesBlown ? (
                <>
                  <Sparkles className="w-5 h-5 text-gold animate-spin-slow" />
                  <span>Wish Made! Relight Candles?</span>
                </>
              ) : (
                <>
                  <Flame className="w-5 h-5 text-yellow-300 animate-pulse" />
                  <span>Blow Candles & Make A Wish 🎂</span>
                </>
              )}
            </span>
          </button>
        </div>

        {/* Celebratory Wish Card when Blown */}
        {wishMade && (
          <div className="mt-8 p-6 sm:p-8 rounded-3xl glass-card max-w-lg mx-auto animate-shimmer">
            <div className="text-3xl mb-2">🎉✨🥂</div>
            <h3 className="font-serif text-2xl sm:text-3xl text-gold font-bold mb-2">
              May Every Wish Come True!
            </h3>
            <p className="font-serif italic text-rose-100 text-base sm:text-lg">
              "Your happiness is the greatest gift this universe could ever give. Happy Birthday!"
            </p>
          </div>
        )}

      </div>

    </section>
  );
}
