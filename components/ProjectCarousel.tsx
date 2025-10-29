// Ini file src/components/ProjectCarousel.tsx

"use client"; // Ini WAJIB, karena kita pake hooks (interaktivitas)

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Kita terima 'children' (ini nanti kartu-kartu proyek lu)
export default function ProjectCarousel({ children }: { children: React.ReactNode }) {
  // Setup Embla:
  // - loop: true = Biar bisa muter terus
  // - align: 'center' = Slide aktif bakal di tengah
  // - containScroll: false = Biar bisa "ngintip"
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center', 
    containScroll: false 
  });

  // State buat nyimpen slide mana yang lagi aktif
  const [selectedIndex, setSelectedIndex] = useState(0);

  // State buat ngatur tombol (kalo nggak di-loop)
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  // Fungsi buat nge-scroll
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Fungsi buat nge-update state
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  // "Nyalain" listener-nya pas komponen siap
  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    // Ini adalah wrapper utama carousel (class .embla dari globals.css)
    <div className="embla">
      {/* 1. Viewport (bingkai) */}
      <div className="embla__viewport" ref={emblaRef}>
        {/* 2. Container (yang nampung semua slide) */}
        <div className="embla__container">
          {/* 3. Kita "petakan" semua kartu proyek lu ke dalem slide */}
          {React.Children.map(children, (child, index) => (
            <div 
              // Ini class buat ngatur lebar & efek
              className={`embla__slide ${index === selectedIndex ? 'is-selected' : ''}`} 
              key={index}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* 4. Tombol Panah Kiri & Kanan */}
      <button className="embla__button embla__button--prev" onClick={scrollPrev}>
        <FaChevronLeft />
      </button>
      <button className="embla__button embla__button--next" onClick={scrollNext}>
        <FaChevronRight />
      </button>
    </div>
  );
}