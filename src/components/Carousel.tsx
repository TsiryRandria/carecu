import React, { useState, useEffect } from 'react';
import { Language, PageId } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import ecuProgrammingImage from '../assets/images/ecu_programming_ktag_1794198522987.jpg';
import winolsImage from '../assets/images/winols_file_modification_1794198522724.jpg';

interface CarouselProps {
  currentLang: Language;
  onNavigate: (page: PageId) => void;
}

export const Carousel: React.FC<CarouselProps> = ({ currentLang, onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const t = TRANSLATIONS[currentLang];

  const slides = [
    {
      id: 1,
      title: t.home.slide1Title,
      badge: t.home.slide1Badge,
      desc: t.home.slide1Desc,
      image: ecuProgrammingImage,
      alt: 'Reprogrammation et clonage calculateur Bosch K-TAG dans atelier professionnel CARECU',
      actionPage: 'services' as PageId,
      actionText: t.home.box1Action,
      secondaryPage: 'contact' as PageId,
      secondaryText: t.nav.requestQuote,
      featureBadge: 'KTAG • Bench • Boot • OBD'
    },
    {
      id: 2,
      title: t.home.slide2Title,
      badge: t.home.slide2Badge,
      desc: t.home.slide2Desc,
      image: winolsImage,
      alt: 'Modification de cartographie moteur 3D sur logiciel WinOLS atelier CARECU',
      actionPage: 'ecu-files' as PageId,
      actionText: t.home.box3Action,
      secondaryPage: 'contact' as PageId,
      secondaryText: t.nav.requestQuote,
      featureBadge: 'WinOLS 3D • Map Pack • Damos'
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section 
      className="relative w-full overflow-hidden bg-slate-950 border-b border-slate-800"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="CARECU Presentation Carousel"
    >
      <div className="relative min-h-[500px] sm:min-h-[580px] lg:min-h-[640px] flex items-center">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Image with fallback */}
              <div className="absolute inset-0 bg-slate-900">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center scale-100 transform transition-transform duration-10000"
                />
                {/* Advanced measured contrast scrim */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#040813] via-[#060e20]/80 to-[#040813]/60 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040813] via-transparent to-[#040813]/40" />
              </div>

              {/* Slide Content */}
              <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-16 sm:py-24">
                <div className="max-w-2xl space-y-5">
                  
                  {/* Main Headline */}
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display leading-[1.15] text-balance">
                    {slide.title}
                  </h1>

                  {/* Action buttons */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onNavigate(slide.actionPage)}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-red-600 hover:bg-red-700 active:scale-95 rounded-lg shadow-lg shadow-red-950/40 transition-all cursor-pointer whitespace-nowrap"
                    >
                      <span>{slide.actionText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => onNavigate(slide.secondaryPage)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 hover:text-white border border-slate-700/80 rounded-lg transition-all cursor-pointer whitespace-nowrap"
                    >
                      <span>{slide.secondaryText}</span>
                    </button>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Manual Navigation Controls */}
      <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2">
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="p-2.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 shadow-md transition-all active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-lg">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 transition-all rounded-full ${
                idx === currentSlide ? 'w-8 bg-red-600' : 'w-2 bg-slate-600 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="p-2.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 shadow-md transition-all active:scale-95"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
