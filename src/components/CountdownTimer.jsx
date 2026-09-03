import React, { useState, useEffect } from 'react';
import { Clock, Sparkles, Heart } from 'lucide-react';
import { birthdayData } from '../data/birthdayData';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date(birthdayData.birthdayDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        // Birthday is here or ongoing celebration
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeCards = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="relative w-full py-20 px-4 z-10 flex flex-col items-center justify-center">
      
      <div className="container mx-auto max-w-4xl text-center">
        
        <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-rose-950/70 border border-rose-400/30 text-gold text-xs font-semibold uppercase tracking-widest mb-4">
          <Clock className="w-4 h-4 text-gold" />
          <span>✦ Countdown To Celebration ✦</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-rose-gradient mb-10">
          Every Second Brings Us Closer
        </h2>

        {/* Timer Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
          {timeCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-card flex flex-col items-center justify-center hover:border-rose-400/50 transition-all hover:scale-105"
            >
              <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-gold-shimmer mb-1">
                {String(card.value).padStart(2, '0')}
              </span>
              <span className="text-xs uppercase font-bold tracking-widest text-rose-200/70">
                {card.label}
              </span>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
