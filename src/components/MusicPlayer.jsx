import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Download } from 'lucide-react';
import { birthdayData } from '../data/birthdayData';

export default function MusicPlayer({ autoStart = false }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const audioRef = useRef(null);
  const synthIntervalRef = useRef(null);
  const audioContextRef = useRef(null);

  const startRomanticSynth = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContext();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Gentle romantic melody notes (Acoustic Music Box chords)
      const notes = [261.63, 329.63, 392.00, 493.88, 523.25, 587.33, 659.25, 783.99];
      const melodyPattern = [0, 2, 4, 6, 5, 4, 2, 1, 0, 3, 5, 7, 6, 4, 2, 0];
      let step = 0;

      if (synthIntervalRef.current) clearInterval(synthIntervalRef.current);

      synthIntervalRef.current = setInterval(() => {
        if (!isPlaying || isMuted) return;
        const freq = notes[melodyPattern[step % melodyPattern.length]];
        step++;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.07, ctx.currentTime + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 1.3);
      }, 550);
    } catch (e) {
      console.warn("Synth audio:", e);
    }
  };

  const stopRomanticSynth = () => {
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
  };

  const togglePlay = () => {
    setShowTooltip(false);
    if (isPlaying) {
      if (audioRef.current) audioRef.current.pause();
      stopRomanticSynth();
      setIsPlaying(false);
    } else {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
          startRomanticSynth();
        });
      }
      startRomanticSynth();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (autoStart) {
      togglePlay();
    }
    return () => stopRomanticSynth();
  }, [autoStart]);

  return (
    <div id="music-player-container" className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[1000] flex items-center">
      <audio
        ref={audioRef}
        src={birthdayData.music.src}
        loop
        preload="auto"
      />

      {/* Floating "CLICK TO PLAY 🎵" Tooltip Badge */}
      {showTooltip && !isPlaying && (
        <div 
          onClick={togglePlay}
          className="absolute -top-12 right-0 bg-[#e8547a] text-white text-[10px] font-montserrat font-bold px-3 py-1.5 rounded-full shadow-lg animate-bounce flex items-center gap-1 whitespace-nowrap cursor-pointer z-50 border border-white/20"
        >
          <span>CLICK TO PLAY 🎵</span>
          <div className="absolute -bottom-1 right-6 w-2 h-2 bg-[#e8547a] rotate-45" />
        </div>
      )}

      {/* Glassmorphic Player Pill */}
      <div 
        onClick={togglePlay}
        className="flex items-center gap-3.5 bg-white/70 hover:bg-white/90 backdrop-blur-2xl px-4 py-2.5 rounded-full border border-rose/30 shadow-[0_15px_35px_rgba(232,84,122,0.2)] hover:scale-105 transition-all duration-300 cursor-pointer group"
      >
        {/* Spinning Vinyl Record Disc */}
        <div className="relative w-9 h-9 flex items-center justify-center">
          <div className={`w-full h-full rounded-full bg-gradient-to-tr from-[#1a1a1a] via-[#333333] to-[#1a1a1a] shadow-md border border-neutral-700 flex items-center justify-center ${isPlaying ? 'animate-spin-slow' : ''}`}>
            {/* Center Red Hub */}
            <div className="w-3.5 h-3.5 rounded-full bg-rose flex items-center justify-center border border-[#1a1a1a]">
              <div className="w-1 h-1 bg-[#1a1a1a] rounded-full" />
            </div>
          </div>
          {isPlaying && (
            <div className="absolute -inset-1 rounded-full border border-rose animate-ping opacity-30 pointer-events-none" />
          )}
        </div>

        {/* Track Title & Animated Equalizer Bars */}
        <div className="flex flex-col pr-1 min-w-[75px]">
          <span className="text-ink font-serif italic text-xs font-semibold tracking-wide truncate max-w-[120px]">
            {birthdayData.music.title}
          </span>
          <div className="flex items-end h-2.5 gap-[2px] mt-0.5">
            {[1, 2, 3, 4, 5].map((bar) => (
              <div
                key={bar}
                className={`w-[2px] bg-rose rounded-full transition-all duration-300 ${
                  isPlaying ? 'animate-pulse' : 'h-1'
                }`}
                style={{
                  height: isPlaying ? `${(bar * 3) % 10 + 3}px` : '2px',
                  animationDelay: `${bar * 0.15}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Play / Pause Toggle Button */}
        <div className="text-ink group-hover:text-rose transition-colors p-1">
          {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
        </div>
      </div>

    </div>
  );
}
