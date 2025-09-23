"use client";

import { useEffect, useState, useRef } from "react";

export default function Carousel({ images = [], interval = 4000, className = "" }) {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    if (images.length <= 1 || !isPlaying) return;
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timerRef.current);
  }, [images.length, interval, isPlaying]);

  const goTo = (i) => {
    setIndex(i % images.length);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const prev = () => goTo((index - 1 + images.length) % images.length);
  const next = () => goTo((index + 1) % images.length);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (!images || images.length === 0) return null;

  return (
    <div 
      className={`relative w-full overflow-hidden group ${className}`}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="min-w-full h-full relative">
            <img
              src={src}
              alt={`Brand experience showcase ${i + 1}`}
              className="w-full h-full object-center object-cover scale-100"
              loading={i === 0 ? "eager" : "lazy"}
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
          </div>
        ))}
      </div>

      {/* Enhanced Controls */}
      {images.length > 1 && (
        <>
          <button
            aria-label="Previous slide"
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            aria-label="Next slide"
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Play/Pause Button */}
          <button
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            onClick={togglePlayPause}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
          >
            {isPlaying ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
            )}
          </button>

          {/* Enhanced Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full border border-white/30">
            {images.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`relative transition-all duration-300 ${
                  i === index 
                    ? "w-8 h-3 bg-white rounded-full" 
                    : "w-3 h-3 bg-white/60 hover:bg-white/80 rounded-full hover:scale-110"
                }`}
              >
                {i === index && (
                  <div className="absolute inset-0 bg-white rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
