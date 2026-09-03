import React from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function HeroSection({ onExplore }) {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-28 pb-20 z-10 overflow-hidden">
      
      {/* Background radial blush glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[850px] h-[500px] sm:h-[850px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(253,229,240,0.85)_0%,_transparent_70%)] pointer-events-none -z-10" />

      {/* 🌸 FLOATING STICKERS (Matching Original Screenshots) 🌸 */}
      
      {/* Cherry Blossom 1 (Top Right) */}
      <div className="absolute top-28 sm:top-36 right-8 sm:right-28 text-3xl sm:text-5xl animate-float-slow sticker-shadow select-none">
        🌸
      </div>
      <div className="absolute top-28 sm:top-36 right-20 sm:right-44 text-3xl sm:text-5xl animate-float-reverse sticker-shadow select-none">
        🌸
      </div>

      {/* Pulsing Red Heart With Sparkles (Top Center/Left) */}
      <div className="absolute top-20 sm:top-24 left-1/2 -translate-x-28 sm:-translate-x-44 text-4xl sm:text-6xl animate-pulse-glow sticker-shadow select-none">
        💖
      </div>

      {/* Golden 4-Point Sparkle Star (Mid Right) */}
      <div className="absolute top-44 sm:top-56 right-12 sm:right-36 text-3xl sm:text-4xl animate-float-wiggle select-none">
        ✨
      </div>

      {/* Tulip Flower (Mid Left) */}
      <div className="absolute top-1/2 -translate-y-12 left-6 sm:left-24 text-4xl sm:text-5xl animate-float-slow sticker-shadow select-none">
        🌷
      </div>

      {/* Tulip Flower (Lower Right) */}
      <div className="absolute bottom-36 sm:bottom-48 right-10 sm:right-32 text-4xl sm:text-5xl animate-float-reverse sticker-shadow select-none">
        🌷
      </div>
      <div className="absolute bottom-28 sm:bottom-40 right-20 sm:right-48 text-2xl sm:text-3xl animate-float-wiggle select-none">
        ✨
      </div>

      {/* Cherry Blossom (Bottom Left) */}
      <div className="absolute bottom-24 sm:bottom-32 left-8 sm:left-28 text-3xl sm:text-5xl animate-float-wiggle sticker-shadow select-none">
        🌸
      </div>

      {/* Red Heart (Bottom Right) */}
      <div className="absolute bottom-10 sm:bottom-16 right-16 sm:right-40 text-3xl sm:text-4xl animate-float-slow sticker-shadow select-none">
        ❤️
      </div>

      {/* Small Cherry Blossom Near Center Title */}
      <div className="absolute top-[46%] left-1/2 -translate-x-32 sm:-translate-x-52 text-2xl sm:text-4xl animate-float-slow select-none">
        🌸
      </div>
      <div className="absolute top-[58%] left-1/2 translate-x-24 sm:translate-x-48 text-2xl sm:text-4xl animate-float-reverse select-none">
        🌸
      </div>

      {/* Top Special Day Tagline */}
      <div className="flex items-center gap-2 text-rose-dark/75 font-montserrat text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase mb-4 sm:mb-6">
        <span>✦ TODAY IS A VERY SPECIAL DAY ✦</span>
      </div>

      {/* Giant Editorial Serif Headline (Happy Birthday) */}
      <div className="flex flex-col items-center justify-center leading-[0.88] select-none my-2">
        <h1 className="font-serif font-black text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] text-[#c4396b] tracking-tight drop-shadow-[0_12px_24px_rgba(232,84,122,0.22)]">
          Happy
        </h1>
        <h1 className="font-serif font-black text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] text-[#8b294c] tracking-tight drop-shadow-[0_12px_24px_rgba(232,84,122,0.22)] -mt-2 sm:-mt-6">
          Birthday
        </h1>
      </div>

      {/* Script Subtitle: My Beautiful Love 🌸 */}
      <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2">
        <h2 className="font-greatvibes text-4xl sm:text-6xl md:text-7xl text-ink font-normal tracking-wide drop-shadow-sm">
          My Beautiful Love 🌸
        </h2>
      </div>

      {/* Poetic Sub-caption */}
      <p className="font-serif italic text-base sm:text-xl text-rose-dark/80 max-w-lg mt-3 font-normal">
        "The most beautiful soul I know…"
      </p>

      {/* Scroll Down Cue */}
      <div 
        onClick={onExplore}
        className="mt-14 sm:mt-20 flex flex-col items-center gap-2 cursor-pointer group select-none opacity-80 hover:opacity-100 transition-opacity"
      >
        <span className="font-montserrat text-[10px] font-bold uppercase tracking-[0.3em] text-lavender">
          Scroll to explore
        </span>
        <div className="w-5 h-9 rounded-full border-2 border-rose/30 flex items-start justify-center p-1 group-hover:border-rose transition-colors">
          <div className="w-1.5 h-2 rounded-full bg-rose animate-bounce" />
        </div>
      </div>

    </section>
  );
}
