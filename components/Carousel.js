"use client";

import { useState, useEffect } from "react";

const slides = [
  { id: 1, img: "ps1.png", text: "All Type Healthy Plants With Discount ",button:"Buy Now" },
  { id: 2, img: "seed.png", text: "marry gold jesmein 50%  discount",button:"Buy Now" },
  { id: 3, img: "\download.jfif", text: "Best Quality Nursery",button:"Buy Now" },
  { id: 4, img: "\images.jfif", text: "Green Your Home",button:"Buy Now" },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  // Auto Slide (optional)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-screen overflow-hidden">

      {/* Slides */}
      <div
        className="w-screen flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full relative">
             <img
    src={slide.img}
    alt={slide.text}
    className="w-screen h-[300px] md:h-[450px] object-cover"
  />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-white text-2xl md:text-4xl font-bold">
                {slide.text}
              </h2>
  <button className="
    px-8 py-3
    text-white text-lg md:text-xl font-semibold
    bg-gradient-to-r from-yellow-400 to-yellow-500
    rounded-full
    shadow-lg
    hover:from-yellow-500 hover:to-yellow-600
    hover:scale-105
    transition-all duration-300
    flex items-center gap-2
  ">
    {slide.button}
    <span className="text-2xl">→</span>
  </button>
            </div>
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={() =>
          setCurrent(current === 0 ? slides.length - 1 : current - 1)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 text-black px-3 py-2 rounded-full hover:bg-white"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 text-black px-3 py-2 rounded-full hover:bg-white"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
