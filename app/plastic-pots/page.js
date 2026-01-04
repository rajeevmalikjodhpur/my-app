"use client";

import { useState } from "react";

const plasticPots = [
  {
    name: "8 Inch Plastic Pot",
    image: "/pots/8inch.jpg",
    desc: "Best plastic pot for small indoor plants",
    price: 199,
    discount: 50,
    info:
      "Suitable for money plant, snake plant and small flowering plants. Durable and lightweight.",
  },
  {
    name: "10 Inch Plastic Pot",
    image: "/pots/10inch.jpg",
    desc: "Medium size plastic pot for home garden",
    price: 299,
    discount: 80,
    info:
      "Ideal for flowering plants and herbs. UV resistant plastic material.",
  },
  {
    name: "12 Inch Plastic Pot",
    image: "/pots/12inch.jpg",
    desc: "Heavy duty plastic pot for outdoor plants",
    price: 449,
    discount: 120,
    info:
      "Perfect for rose plants, hibiscus and medium fruit plants.",
  },
  {
    name: "Hanging Plastic Pot",
    image: "/pots/hanging.jpg",
    desc: "Decorative hanging plastic pot",
    price: 249,
    discount: 70,
    info:
      "Used for money plant, petunia and trailing plants. Comes with hook.",
  },
  {
    name: "Large Plastic Pot",
    image: "/pots/large.jpg",
    desc: "Large pot for trees and fruit plants",
    price: 699,
    discount: 200,
    info:
      "Strong plastic pot suitable for guava, lemon and ornamental trees.",
  },
];

export default function PlasticPotsPage() {
  const [openInfo, setOpenInfo] = useState(null);

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Plastic Pots
      </h1>

      <p className="text-gray-600 mb-8">
        Buy high quality plastic pots from{" "}
        <strong>Groway Horticulture</strong>.
        Suitable for indoor, outdoor, flower and fruit plants.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plasticPots.map((pot, index) => {
          const finalPrice = pot.price - pot.discount;

          return (
            <div
              key={index}
              className="border rounded-xl shadow-sm hover:shadow-lg transition"
            >
              <img
                src={pot.image}
                alt={pot.name}
                className="w-full h-56 object-cover rounded-t-xl"
              />

              <div className="p-4">
                <h2 className="text-lg font-semibold">
                  {pot.name}
                </h2>

                {/* Price */}
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-gray-400 line-through text-sm">
                    ₹{pot.price}
                  </span>
                  <span className="text-green-700 font-bold text-lg">
                    ₹{finalPrice}
                  </span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                    Save ₹{pot.discount}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mt-2">
                  {pot.desc}
                </p>

                {/* More Info */}
                <button
                  onClick={() =>
                    setOpenInfo(openInfo === index ? null : index)
                  }
                  className="text-sm text-green-700 font-medium mt-2"
                >
                  {openInfo === index ? "Hide Info" : "More Info"}
                </button>

                {openInfo === index && (
                  <p className="text-sm text-gray-600 mt-2">
                    {pot.info}
                  </p>
                )}

                {/* Buttons */}
                <div className="flex gap-2 mt-4">
                  <a
                    href="tel:+919411812745"
                    className="w-1/2 text-center bg-green-700 text-white py-2 rounded-lg text-sm"
                  >
                    Call Now
                  </a>

                  <a
                    href="https://wa.me/919411812745?text=Hello%20I%20want%20plastic%20pots"
                    target="_blank"
                    className="w-1/2 text-center bg-green-500 text-white py-2 rounded-lg text-sm"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* SEO Text */}
      <section className="mt-12 text-sm text-gray-700 leading-6">
        <h2 className="text-xl font-semibold mb-2">
          Buy Plastic Pots from Groway Horticulture
        </h2>
        <p>
          We offer durable plastic pots in different sizes for indoor,
          outdoor, flower and fruit plants. Best prices for retail
          and bulk orders.
        </p>
      </section>
    </main>
  );
}
