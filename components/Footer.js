"use client";

import { FaFacebookF, FaInstagram, FaWhatsapp,FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Groway Horticulture</h2>
          <p className="text-gray-300">
At Groway Horticulture, you get very high-quality plants, seeds, and pots. The plants and seeds grow healthy and start giving fruits very quickly.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
            <li><a href="/plants" className="hover:text-yellow-400">Plants</a></li>
            <li><a href="/seeds" className="hover:text-yellow-400">Seeds</a></li>
            <li><a href="#" className="hover:text-yellow-400">Blog</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul>
            <li><a href="/about-us" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="/privacy-policy" className="hover:text-yellow-400">Privacy Policy</a></li>
            <li><a href="/disclaimer" className="hover:text-yellow-400">Disclaimer</a></li>
            <li><a href="/terms-conditions" className="hover:text-yellow-400">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p>📞 +91 12345 67890</p>
          <p>✉️ info@growayhorticulture.com</p>
          <div className="flex gap-4 mt-4 text-xl">
  <a href="https://facebook.com" target="_blank" className="hover:text-yellow-400">
    <FaFacebookF />
  </a>

  <a href="https://instagram.com" target="_blank" className="hover:text-yellow-400">
    <FaInstagram />
  </a>

  <a href="https://wa.me/911234567890" target="_blank" className="hover:text-yellow-400">
    <FaWhatsapp />
  </a>

  <a href="https://youtube.com/@yourchannel" target="_blank" className="hover:text-yellow-400">
    <FaYoutube />
  </a>
</div>

        </div>

      </div>

      <div className="text-center text-gray-400 text-sm mt-8">
        © {new Date().getFullYear()} Groway Horticulture. All rights reserved.
      </div>
    </footer>
  );
}
