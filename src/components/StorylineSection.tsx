import { useState } from "react";
import { heartBurst } from "@/lib/hearts";
import { BookOpen, Sparkles, Heart, Quote, Compass, Coffee, Clock } from "lucide-react";

interface StoryChapter {
  id: number;
  phase: string;
  season: string;
  title: string;
  subtitle: string;
  narrative: string;
  liamNote: string;
  icon: typeof BookOpen;
  accentColor: string;
}

const CHAPTERS: StoryChapter[] = [
  {
    id: 1,
    phase: "Chapter 01",
    season: "The First Spark",
    title: "The Conversation That Never Ended",
    subtitle: "Where four hours felt like four minutes",
    narrative:
      "It started with what was supposed to be a simple, casual chat. But before either of us realized it, hours had drifted past like seconds. We talked about everything and nothing at all — our families, funny childhood memories, favorite books, and quiet dreams. For the first time in a very long time, the whole noisy world went quiet.",
    liamNote:
      "I still remember the sound of your laugh through the phone that night. I hung up with a grin and thought: 'I hope this is just the beginning.'",
    icon: Compass,
    accentColor: "#f472b6",
  },
  {
    id: 2,
    phase: "Chapter 02",
    season: "Everyday Magic",
    title: "The Ordinary Days Made Extraordinary",
    subtitle: "Late-night drives & passenger seat concerts",
    narrative:
      "Looking back, my favorite memories aren't just the fancy dinners — they’re the quiet, unscripted Tuesdays. Getting completely lost on a rainy evening with no GPS, stopping at random gas stations for warm coffee, and you treating the passenger seat like a stadium concert with your coffee cup as a microphone.",
    liamNote:
      "When you fell asleep against the window with your hand resting near mine, I drove ten miles under the speed limit just to let you rest peacefully.",
    icon: Coffee,
    accentColor: "#fb923c",
  },
  {
    id: 3,
    phase: "Chapter 03",
    season: "The Turning Point",
    title: "When Home Became a Person",
    subtitle: "A thousand quiet, tender realisations",
    narrative:
      "There was never one single dramatic movie scene. It was the million gentle moments: the way you immediately notice when I'm exhausted and bring quiet comfort, how fiercely you cheer for my smallest wins, and the deep, effortless kindness you show to everyone around you. Slowly, gently, you became the anchor of my life.",
    liamNote:
      "That was the week I realized 'home' wasn't a physical place with four walls anymore. It was wherever you were standing.",
    icon: Heart,
    accentColor: "#ec4899",
  },
  {
    id: 4,
    phase: "Chapter 04",
    season: "The Promise",
    title: "Choosing Each Other Every Single Day",
    subtitle: "Growing, learning & walking side-by-side",
    narrative:
      "Love isn't just a sweet feeling on sunny afternoons — it's standing firm through every unpredictable season. Supporting each other through stressful weeks, learning each other's quiet rhythms, and knowing with complete certainty that no matter what comes next, we have each other's back forever.",
    liamNote:
      "Taking this step and building our future together was the easiest, most confident decision my heart has ever made.",
    icon: Clock,
    accentColor: "#a855f7",
  },
  {
    id: 5,
    phase: "Chapter 05",
    season: "Today & Forever",
    title: "Celebrating Your Light, Sophia",
    subtitle: "Another year of grace, joy & boundless love",
    narrative:
      "Today we pause the universe just to celebrate you. The girl whose kindness brightens every room she steps into, whose smile can turn around the heaviest day, and whose heart is my greatest treasure. Watching you grow and flourish into the woman you are is the greatest privilege of my life.",
    liamNote:
      "Happy Birthday, my forever person. Every page written so far has been magical, but the best chapters are still unwritten. ❤️",
    icon: Sparkles,
    accentColor: "#e11d48",
  },
];

export function StorylineSection() {
  const [activeId, setActiveId] = useState(1);
  const currentChapter = CHAPTERS.find((c) => c.id === activeId) || CHAPTERS[0];

  const handleSelectChapter = (id: number, e: React.MouseEvent) => {
    heartBurst(e.clientX, e.clientY, 20);
    setActiveId(id);
  };

  return (
    <section id="story" className="relative mx-auto max-w-6xl px-6 py-24">
      {/* SECTION HEADER */}
      <div className="mb-14 text-center reveal" data-reveal>
        <span className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          A Handcrafted Storyline
        </span>
        <h2 className="font-playfair font-semibold tracking-wide glow-soft text-gradient-romance text-3xl leading-tight sm:text-5xl mt-3">
          Chapters of Us
        </h2>
        <p className="font-lora italic mx-auto mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground">
          Every love story is special, but ours is my absolute favorite book. Tap through our journey from the very first spark to celebrating you today. ✨
        </p>
      </div>

      {/* INTERACTIVE TIMELINE PROGRESSION BAR */}
      <div className="mb-12 flex justify-center overflow-x-auto pb-4" data-reveal>
        <div className="glass-card inline-flex items-center gap-1.5 sm:gap-2 rounded-full p-2 shadow-[var(--shadow-soft)]">
          {CHAPTERS.map((c) => {
            const isActive = c.id === activeId;
            const Icon = c.icon;
            return (
              <button
                key={c.id}
                onClick={(e) => handleSelectChapter(c.id, e)}
                className={`relative flex items-center gap-2 rounded-full px-3.5 py-2 sm:px-5 sm:py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-romance text-primary-foreground shadow-md scale-105"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden md:inline">{c.phase}</span>
                <span className="md:hidden">0{c.id}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* MAIN CHAPTER SHOWCASE CARD */}
      <div className="mx-auto max-w-4xl" data-reveal>
        <div className="glass-card relative overflow-hidden rounded-[2.5rem] border border-primary/30 p-8 sm:p-12 shadow-[var(--shadow-soft)] backdrop-blur-2xl transition-all duration-500">
          {/* Decorative Corner Washi Tape Accent */}
          <div className="pointer-events-none absolute -top-3 left-10 h-7 w-24 -rotate-3 bg-amber-200/60 shadow-sm backdrop-blur-md rounded-sm border border-amber-300/40 opacity-75" />
          <div className="pointer-events-none absolute -top-3 right-10 h-7 w-24 rotate-3 bg-rose-200/60 shadow-sm backdrop-blur-md rounded-sm border border-rose-300/40 opacity-75" />

          {/* Chapter Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-primary/15 pb-6">
            <div className="flex items-center gap-3">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-2xl shadow-sm text-white"
                style={{ backgroundColor: currentChapter.accentColor }}
              >
                <currentChapter.icon className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  {currentChapter.phase}
                </p>
                <p className="font-lora italic text-xs text-muted-foreground">
                  {currentChapter.season}
                </p>
              </div>
            </div>

            <span className="rounded-full border border-primary/20 bg-card/60 px-4 py-1 font-mono text-xs font-semibold text-primary">
              Moment {currentChapter.id} of 5
            </span>
          </div>

          {/* Title & Subtitle */}
          <div className="mt-8">
            <h3 className="font-playfair font-bold text-2xl sm:text-4xl text-primary leading-snug">
              {currentChapter.title}
            </h3>
            <p className="font-lora italic text-muted-foreground text-sm sm:text-base mt-2">
              "{currentChapter.subtitle}"
            </p>
          </div>

          {/* Narrative Body */}
          <div className="mt-6 text-foreground/90 font-lora text-base sm:text-lg leading-[2.1] font-normal">
            <p>{currentChapter.narrative}</p>
          </div>

          {/* Handcrafted Sticky Annotation Note (The Human Touch) */}
          <div className="relative mt-8 rounded-2xl border border-dashed border-primary/35 bg-cream/80 p-5 sm:p-7 shadow-inner">
            <div className="flex items-start gap-3">
              <Quote className="w-5 h-5 text-primary/60 shrink-0 mt-1" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary/80 mb-1">
                  Liam's Memory Note ✍️
                </p>
                <p className="font-lora italic text-sm sm:text-base leading-relaxed text-foreground/85">
                  "{currentChapter.liamNote}"
                </p>
              </div>
            </div>
          </div>

          {/* Next / Previous Quick Jump Buttons */}
          <div className="mt-8 flex items-center justify-between pt-4 border-t border-primary/10">
            <button
              disabled={activeId === 1}
              onClick={(e) => handleSelectChapter(Math.max(1, activeId - 1), e)}
              className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeId === 1
                  ? "opacity-30 cursor-not-allowed text-muted-foreground"
                  : "text-primary hover:underline cursor-pointer"
              }`}
            >
              ← Previous Chapter
            </button>

            <div className="flex gap-1.5">
              {CHAPTERS.map((c) => (
                <span
                  key={c.id}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    c.id === activeId ? "w-6 bg-primary" : "w-1.5 bg-primary/25"
                  }`}
                />
              ))}
            </div>

            <button
              disabled={activeId === CHAPTERS.length}
              onClick={(e) => handleSelectChapter(Math.min(CHAPTERS.length, activeId + 1), e)}
              className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeId === CHAPTERS.length
                  ? "opacity-30 cursor-not-allowed text-muted-foreground"
                  : "text-primary hover:underline cursor-pointer"
              }`}
            >
              Next Chapter →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
