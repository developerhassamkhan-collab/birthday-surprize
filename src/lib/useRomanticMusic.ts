import { useCallback, useEffect, useState } from "react";
import songUrl from "@/assets/song.mp3";

/**
 * Plays the background song imported from assets so Vite resolves and bundles it properly.
 * Attempts to play immediately when web opens; starts on the first touch/click/scroll anywhere.
 */

let sharedAudio: HTMLAudioElement | null = null;
const listeners = new Set<(playing: boolean) => void>();

export function getRomanticAudio(): HTMLAudioElement {
  if (typeof window === "undefined") {
    return {} as HTMLAudioElement;
  }
  if (!sharedAudio) {
    sharedAudio = new Audio(songUrl);
    sharedAudio.loop = true;
    sharedAudio.volume = 0.6;
    sharedAudio.preload = "auto";

    sharedAudio.addEventListener("play", () => {
      listeners.forEach((cb) => cb(true));
    });
    sharedAudio.addEventListener("pause", () => {
      listeners.forEach((cb) => cb(false));
    });
  }
  return sharedAudio;
}

export function playRomanticMusic(): Promise<void> {
  const audio = getRomanticAudio();
  if (!audio || typeof audio.play !== "function") return Promise.resolve();
  return audio.play().catch(() => {
    // Autoplay blocked by browser policy until user interacts
  });
}

export function pauseRomanticMusic(): void {
  const audio = getRomanticAudio();
  if (audio && typeof audio.pause === "function") {
    audio.pause();
  }
}

export function toggleRomanticMusic(): void {
  const audio = getRomanticAudio();
  if (audio) {
    if (audio.paused) {
      void audio.play();
    } else {
      audio.pause();
    }
  }
}

export function useRomanticMusic() {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = getRomanticAudio();
    if (audio && !audio.paused) {
      setPlaying(true);
    }

    const handler = (isPlaying: boolean) => setPlaying(isPlaying);
    listeners.add(handler);

    return () => {
      listeners.delete(handler);
    };
  }, []);

  const toggle = useCallback(() => {
    toggleRomanticMusic();
  }, []);

  return { playing, toggle };
}
