import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative w-full py-16 px-4 z-10 border-t border-rose-500/20 bg-black/40 backdrop-blur-md text-center">
      <div className="container mx-auto max-w-4xl flex flex-col items-center gap-4">
        
        <div className="flex items-center gap-2 text-rose-300 font-serif text-lg">
          <span>Crafted with endless love</span>
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
          <span>just for you</span>
        </div>

        <p className="text-xs font-mono uppercase tracking-[0.3em] text-gold/80">
          ✦ Forever & Always ✦
        </p>

        <span className="text-[11px] text-rose-200/50 font-light mt-2">
          © {new Date().getFullYear()} My Beautiful Love · Birthday Celebration Web Experience
        </span>

      </div>
    </footer>
  );
}
