import React, { useEffect, useState } from 'react';

export default function Preloader({ onComplete }) {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(() => {
        onComplete();
      }, 700);
    }, 2400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      onClick={() => {
        setFade(true);
        setTimeout(onComplete, 300);
      }}
      className={`fixed inset-0 z-[100000] bg-petal bg-romantic-grid flex flex-col items-center justify-center gap-8 cursor-pointer select-none transition-opacity duration-700 ${
        fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Central Circular Flower Spinner */}
      <div className="relative w-[95px] h-[95px] flex items-center justify-center">
        <div className="w-full h-full border-2 border-rose-lt border-t-rose border-r-gold rounded-full animate-spin shadow-[0_0_20px_rgba(232,84,122,0.25)]" />
        <div className="absolute inset-0 flex items-center justify-center text-[2.4rem] animate-pulse">
          🌸
        </div>
      </div>

      {/* Script Title */}
      <div className="flex flex-col items-center gap-2">
        <h2 className="font-greatvibes text-4xl sm:text-5xl text-rose tracking-wider drop-shadow-sm">
          A Magical Surprise…
        </h2>
        <span className="font-montserrat text-[0.7rem] font-medium tracking-[0.45em] text-lavender uppercase">
          Crafted with love · just for you
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-[220px] h-[2.5px] bg-blush2 rounded-full overflow-hidden shadow-inner">
        <div className="h-full bg-gradient-to-r from-rose via-rose-lt to-gold rounded-full w-0 animate-preLoad" />
      </div>

      <span className="text-[11px] font-montserrat text-rose-dark/60 tracking-widest uppercase mt-2">
        Tap anywhere to open with music ✨
      </span>
    </div>
  );
}
