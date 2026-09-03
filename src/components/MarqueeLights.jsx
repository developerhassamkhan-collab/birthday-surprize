import React from 'react';

export default function MarqueeLights() {
  const phrases = [
    "Happy Birthday", "✦", "You Are Loved", "✦", "Forever Yours", "✦",
    "My Sunshine", "✦", "Dreams Come True", "✦", "You Are Everything", "✦",
    "Beautiful Soul", "✦", "Light Of My Life", "✦", "Born To Shine", "✦",
    "Simply Perfect", "✦", "You Are My World", "✦", "My Heart Is Yours", "✦", "Now & Forever"
  ];

  return (
    <div id="lights-row" className="w-full py-4 bg-blush2/50 border-y border-rose/15 overflow-hidden select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex items-center gap-6 text-rose font-serif italic text-sm sm:text-base font-bold tracking-widest uppercase">
          {phrases.concat(phrases).map((phrase, idx) => (
            <span key={idx} className={phrase === "✦" ? "text-gold text-xs" : ""}>
              {phrase}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
