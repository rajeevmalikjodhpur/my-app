"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <header className="relative z-50 bg-green-700 text-white">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <img src="logo.png" alt="Groway Horticulture" className="h-9 w-9" />
          <span className="text-lg font-bold">
            Groway <span className="text-green-200">Horticulture</span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>

          {/* Plants */}
          <div className="relative">
            <button onClick={() => toggleMenu("plants")}>Plants ▾</button>
            {openMenu === "plants" && (
              <div className="absolute mt-2 w-60 bg-white text-black rounded-xl shadow-xl z-[9999]">
                <a href="indoor-plants" className="block px-4 py-2 hover:bg-green-100">Indoor Plants</a>
                <a href="outdoor-plants" className="block px-4 py-2 hover:bg-green-100">Outdoor Plants</a>
                <a href="flower-plants" className="block px-4 py-2 hover:bg-green-100">Flowering Plants</a>
                <a href="fruit-plants" className="block px-4 py-2 hover:bg-green-100">Fruit Plants</a>
              </div>
            )}
          </div>

          {/* Seeds */}
          <div className="relative">
            <button onClick={() => toggleMenu("seeds")}>Seeds ▾</button>
            {openMenu === "seeds" && (
              <div className="absolute mt-2 w-60 bg-white text-black rounded-xl shadow-xl z-[9999]">
                <Link href="flower-seeds" className="block px-4 py-2 hover:bg-green-100">Flower Seeds</Link>
              </div>
            )}
          </div>

          {/* Pots */}
          <div className="relative">
            <button onClick={() => toggleMenu("pots")}>Pots ▾</button>
            {openMenu === "pots" && (
              <div className="absolute mt-2 w-60 bg-white text-black rounded-xl shadow-xl z-[9999]">
                <Link href="plastic-pots" className="block px-4 py-2 hover:bg-green-100">Plastic Pots</Link>
              </div>
            )}
          </div>

          <Link href="contact-us">Contact</Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU PANEL */}
      {mobileOpen && (
        <div className="md:hidden bg-green-800 text-white px-6 py-4 space-y-2">

          <Link href="/" className="block py-2">Home</Link>
          <Link href="aboutus" className="block py-2">About</Link>

          {/* Mobile Plants */}
          <button onClick={() => toggleMenu("m-plants")} className="w-full text-left py-2">
            Plants ▾
          </button>
          {openMenu === "m-plants" && (
            <div className="pl-4 space-y-1">
              <Link href="indoor-plants" className="block py-1">Indoor Plants</Link>
              <Link href="outdoor-plants" className="block py-1">Outdoor Plants</Link>
              <Link href="flower-plants" className="block py-1">Flowering Plants</Link>
              <Link href="fruit-plants" className="block py-1">Fruit Plants</Link>
            </div>
          )}

          {/* Mobile Seeds */}
          <button onClick={() => toggleMenu("m-seeds")} className="w-full text-left py-2">
            Seeds ▾
          </button>
          {openMenu === "m-seeds" && (
            <div className="pl-4 space-y-1">
              <Link href="flower-seeds" className="block py-1">Flower Seeds</Link>
           
            </div>
          )}

          {/* Mobile Pots */}
          <button onClick={() => toggleMenu("m-pots")} className="w-full text-left py-2">
            Pots ▾
          </button>
          {openMenu === "m-pots" && (
            <div className="pl-4 space-y-1">
              <Link href="plastic-pots" className="block py-1">Plastic Pots</Link>
            </div>
          )}

          <Link href="contact-us" className="block py-2">Contact</Link>
        </div>
      )}
    </header>
  );
}
