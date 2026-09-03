import React, { useState } from 'react';
import { Camera, Sparkles, X, Heart, Eye } from 'lucide-react';
import { birthdayData } from '../data/birthdayData';

export default function PolaroidGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section id="memories" className="relative w-full py-28 px-6 z-10">
      
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-rose-950/70 border border-rose-400/30 text-gold text-xs sm:text-sm font-semibold uppercase tracking-widest mb-4">
            <Camera className="w-4 h-4 text-gold" />
            <span>✦ Our Love Story in Pictures ✦</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-rose-gradient mb-4">
            Cherished Memories
          </h2>
          <p className="text-rose-200/80 text-base sm:text-lg font-light">
            Every picture holds a thousand sweet whispers of our beautiful journey together...
          </p>
        </div>

        {/* Polaroid Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {birthdayData.memories.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              style={{ transform: `rotate(${photo.rotation})` }}
              className="polaroid-frame relative bg-[#fff9fa] text-neutral-900 p-4 pb-6 rounded-sm cursor-pointer group flex flex-col"
            >
              {/* Tape Effect at Top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/40 backdrop-blur-sm border border-white/60 -rotate-2 rounded-xs shadow-sm z-20" />

              {/* Photo Image Container */}
              <div className="relative aspect-[4/5] w-full bg-neutral-100 overflow-hidden rounded-xs mb-4">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Hover Overlay with Eye Icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 rounded-full bg-white/90 text-rose-600 shadow-xl">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                {/* Sticker */}
                <span className="absolute top-2 right-2 text-xl drop-shadow-md">
                  {photo.sticker}
                </span>
              </div>

              {/* Polaroid Caption */}
              <div className="flex flex-col text-center">
                <span className="font-script text-2xl font-bold text-rose-900 leading-none mb-1">
                  {photo.title}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 mb-2">
                  {photo.date}
                </span>
                <p className="text-xs text-neutral-600 font-sans italic line-clamp-2 px-1">
                  "{photo.caption}"
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-[#fff9fa] text-neutral-900 p-6 pb-8 rounded-lg shadow-2xl flex flex-col"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-lg hover:bg-rose-700 transition-colors z-30"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[4/5] sm:aspect-video w-full rounded-sm overflow-hidden mb-5 bg-neutral-900">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-center">
              <h3 className="font-script text-3xl sm:text-4xl text-rose-900 font-bold mb-1">
                {selectedPhoto.title}
              </h3>
              <span className="text-xs uppercase font-bold tracking-widest text-neutral-500 block mb-3">
                {selectedPhoto.date}
              </span>
              <p className="text-base text-neutral-700 font-serif italic max-w-lg mx-auto">
                "{selectedPhoto.caption}"
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
