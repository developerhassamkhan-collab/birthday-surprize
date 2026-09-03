import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import MusicPlayer from './components/MusicPlayer';
import HeroSection from './components/HeroSection';
import MarqueeLights from './components/MarqueeLights';
import WebGLTextSection from './components/WebGLTextSection';
import CosmicOrbitSection from './components/CosmicOrbitSection';
import PolaroidGallery from './components/PolaroidGallery';
import WhyYouSection from './components/WhyYouSection';
import EnvelopeLetter from './components/EnvelopeLetter';
import BirthdayCakeSection from './components/BirthdayCakeSection';
import CountdownTimer from './components/CountdownTimer';
import Footer from './components/Footer';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [autoPlayMusic, setAutoPlayMusic] = useState(false);

  const handlePreloaderComplete = () => {
    setLoaded(true);
    setAutoPlayMusic(true);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-petal bg-romantic-grid text-ink font-body selection:bg-rose selection:text-white">
      
      {/* 1. Preloader Screen */}
      {!loaded && <Preloader onComplete={handlePreloaderComplete} />}

      {/* 2. Top Navigation Bar */}
      <Navbar onNavigate={scrollTo} />

      {/* 3. Floating Music Player Widget */}
      <MusicPlayer autoStart={autoPlayMusic} />

      {/* 4. Hero Section */}
      <HeroSection onExplore={() => scrollTo('letter')} />

      {/* 5. Animated Marquee Lights */}
      <MarqueeLights />

      {/* 6. Letter Section */}
      <EnvelopeLetter />

      {/* 7. Moments Polaroid Gallery */}
      <PolaroidGallery />

      {/* 8. WebGL Poetic Section */}
      <WebGLTextSection />

      {/* 9. Cosmic Orbit */}
      <CosmicOrbitSection />

      {/* 10. Why You Cards */}
      <WhyYouSection />

      {/* 11. Celebrate Section (Cake & Candles) */}
      <BirthdayCakeSection />

      {/* 12. Countdown Timer */}
      <CountdownTimer />

      {/* 13. Footer */}
      <Footer />

    </div>
  );
}
