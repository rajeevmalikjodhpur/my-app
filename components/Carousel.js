"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    img: "/ps1.png",
    title: "Healthy Plants",
    text: "All Type Healthy Plants With Discount",
    button: "Buy Now",
    link: "/plants",
  },
  {
    id: 2,
    img: "/seed.png",
    title: "Flower Seeds",
    text: "Marigold & Jasmine Seeds – 50% OFF",
    button: "Buy Now",
    link: "/seeds",
  },
  {
    id: 3,
    img: "/download.jfif",
    title: "Best Nursery",
    text: "Best Quality Nursery Plants",
    button: "Explore",
    link: "/nursery",
  },
  {
    id: 4,
    img: "/images.jfif",
    title: "Green Home",
    text: "Green Your Home With Nature",
    button: "Shop Plants",
    link: "/plants",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full relative">
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-[260px] sm:h-[350px] md:h-[450px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <div className="text-center px-6 max-w-2xl">
                <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 drop-shadow">
                  {slide.title}
                </h2>

                <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6">
                  {slide.text}
                </p>

                <a
                  href={slide.link}
                  className="
                    inline-flex items-center gap-2
                    px-7 md:px-9 py-3
                    text-white text-sm md:text-lg font-semibold
                    bg-gradient-to-r from-yellow-400 to-yellow-500
                    rounded-full shadow-xl
                    hover:from-yellow-500 hover:to-yellow-600
                    hover:scale-110
                    transition-all duration-300
                  "
                >
                  {slide.button}
                  <span className="text-xl">→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Prev */}
      <button
        onClick={() =>
          setCurrent(current === 0 ? slides.length - 1 : current - 1)
        }
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      >
        ❮
      </button>

      {/* Next */}
      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
