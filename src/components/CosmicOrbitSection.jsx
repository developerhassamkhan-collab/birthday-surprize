import React, { useState } from 'react';
import { Sparkles, Orbit, Heart, Star, Compass } from 'lucide-react';
import { birthdayData } from '../data/birthdayData';

export default function CosmicOrbitSection() {
  const [activeMilestone, setActiveMilestone] = useState(birthdayData.orbitMilestones[0]);

  return (
    <section className="relative w-full min-h-screen py-28 px-4 z-10 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/60 border border-rose-400/30 text-gold text-xs font-semibold uppercase tracking-widest mb-4">
          <Orbit className="w-3.5 h-3.5 text-gold animate-spin-slow" />
          <span>✦ Cosmic Orbit of Our Love ✦</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-rose-gradient mb-4">
          Written in the Stars
        </h2>
        <p className="text-rose-200/70 text-sm sm:text-base font-light">
          Hover or tap on the floating milestones to pause their orbits and read our sweetest memories...
        </p>
      </div>

      {/* Orbiting Celestial Interactive System */}
      <div className="relative w-[340px] h-[340px] sm:w-[540px] sm:h-[540px] md:w-[640px] md:h-[640px] flex items-center justify-center">
        
        {/* Orbital Rings */}
        <div className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full border border-rose-500/20 border-dashed animate-spin-slow pointer-events-none" />
        <div className="absolute w-[330px] h-[330px] sm:w-[440px] sm:h-[440px] rounded-full border border-gold/20 pointer-events-none" />
        <div className="absolute w-[400px] h-[400px] sm:w-[560px] sm:h-[560px] rounded-full border border-rose-400/15 border-dashed pointer-events-none" />

        {/* Glowing Sun / Center Heart */}
        <div className="relative z-20 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-rose-700 via-rose-500 to-gold p-1 shadow-[0_0_50px_rgba(244,63,110,0.6)] flex items-center justify-center animate-pulse-glow">
          <div className="w-full h-full rounded-full bg-[#1e0813] flex flex-col items-center justify-center text-center p-2">
            <Heart className="w-7 h-7 sm:w-9 sm:h-9 text-rose-400 fill-rose-500 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-serif font-bold text-rose-200 mt-1 uppercase tracking-wider">
              Forever
            </span>
          </div>
        </div>

        {/* Milestone Orbiting Nodes */}
        {birthdayData.orbitMilestones.map((milestone, index) => {
          const orbitClass = index === 0 ? 'animate-orbit-1' : index === 1 ? 'animate-orbit-2' : index === 2 ? 'animate-orbit-3' : 'animate-orbit-1';
          const isSelected = activeMilestone?.id === milestone.id;

          return (
            <div
              key={milestone.id}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${orbitClass} hover:[animation-play-state:paused] z-30`}
            >
              <button
                onClick={() => setActiveMilestone(milestone)}
                onMouseEnter={() => setActiveMilestone(milestone)}
                className={`relative group p-3 sm:p-4 rounded-full transition-all duration-300 ${
                  isSelected 
                    ? 'bg-rose-600 scale-125 shadow-[0_0_30px_rgba(244,63,110,0.8)]' 
                    : 'bg-neutral-900/90 hover:bg-rose-900/90 border border-rose-400/40 hover:scale-110'
                }`}
              >
                <span className="text-xl sm:text-2xl select-none">{milestone.icon}</span>
                
                {/* Node Tooltip / Label */}
                <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] text-white whitespace-nowrap pointer-events-none border border-white/10">
                  {milestone.title}
                </div>
              </button>
            </div>
          );
        })}

      </div>

      {/* Active Milestone Card Detail */}
      {activeMilestone && (
        <div className="mt-8 max-w-lg w-full p-6 sm:p-8 rounded-3xl glass-card text-center z-30 transition-all duration-500 animate-shimmer">
          <div className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>{activeMilestone.title}</span>
          </div>
          <p className="text-lg sm:text-xl font-serif italic text-rose-100 font-medium leading-relaxed">
            "{activeMilestone.message}"
          </p>
        </div>
      )}

    </section>
  );
}
