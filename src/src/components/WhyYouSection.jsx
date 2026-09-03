import React from 'react';
import { Sparkles, Heart, Sun, Smile, Gift, Star } from 'lucide-react';

export default function WhyYouSection() {
  const reasons = [
    {
      icon: "✨",
      title: "Your Sweet Smile",
      desc: "When you smile, every room lights up with warmth. It makes the world feel safe and truly at peace."
    },
    {
      icon: "🌸",
      title: "Your Gentle Kindness",
      desc: "The way you care for everyone around you with pure grace is the most precious gift."
    },
    {
      icon: "💫",
      title: "Your Magical Laughter",
      desc: "Your laughter is my absolute favorite sound in this entire universe, turning every day into magic."
    },
    {
      icon: "💖",
      title: "Your Loving Heart",
      desc: "Deep, thoughtful, and unconditional — having your love is the greatest blessing of my life."
    }
  ];

  return (
    <section id="why-you" className="relative w-full py-28 px-6 z-10">
      <div className="container mx-auto max-w-5xl">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-blush border border-rose/20 text-rose-dark text-xs font-montserrat font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>✦ Why You Are So Special ✦</span>
          </div>
          <h2 className="font-serif font-black text-4xl sm:text-5xl md:text-6xl text-[#8b294c] mb-4">
            Reasons I Adore You
          </h2>
          <p className="font-serif italic text-rose-dark/80 text-base sm:text-lg">
            Just a few of the million reasons why you mean everything to me...
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="glass-panel-light p-8 rounded-3xl flex flex-col gap-3 hover:-translate-y-2 hover:border-rose/40 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-blush2/70 flex items-center justify-center text-3xl shadow-sm mb-2">
                {r.icon}
              </div>
              <h3 className="font-serif font-bold text-2xl text-ink">
                {r.title}
              </h3>
              <p className="font-montserrat text-sm text-lavender leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
