"use client";

import { useState } from "react";

const fruitPlants = [
  {
    name: "Mango Plant",
    image: "/h.jpg",
    desc: "Best fruit plant for home garden and farming",
    price: 300,
    discount: 100,
    info:
      "Mango plant needs full sunlight and well-drained soil. Fruiting starts in 3–4 years.",
  },
];

export default function FruitPlantsPage() {
  const [openInfo, setOpenInfo] = useState(null);

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Buy Fruit Plants
      </h1>

      <p className="text-gray-600 mb-8">
      Plant fruit plants in your garden and enjoy fresh, pure air along with healthy and delicious fruits that help improve your overall well-being. You can buy high-quality fruit plants from Groway Horticulture. These plants are carefully grown to ensure fast growth and early fruiting, giving you the best results in a short time. 
      </p>

      {/* Plants Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {fruitPlants.map((plant, index) => {
          const finalPrice = plant.price - plant.discount;

          return (
            <div
              key={index}
              className="border rounded-xl shadow-sm hover:shadow-lg transition"
            >
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-56 object-cover rounded-t-xl"
              />

              <div className="p-4">
                <h2 className="text-lg font-semibold">
                  {plant.name}
                </h2>

                {/* Price */}
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-gray-400 line-through text-sm">
                    ₹{plant.price}
                  </span>
                  <span className="text-green-700 font-bold text-lg">
                    ₹{finalPrice}
                  </span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                    Save ₹{plant.discount}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mt-2">
                  {plant.desc}
                </p>

                {/* MORE INFO BUTTON */}
                <button
                  onClick={() =>
                    setOpenInfo(openInfo === index ? null : index)
                  }
                  className="text-sm text-green-700 font-medium mt-2"
                >
                  {openInfo === index ? "Hide Info" : "More Info"}
                </button>

                {/* INFO SHOW */}
                {openInfo === index && (
                  <p className="text-sm text-gray-600 mt-2">
                    {plant.info}
                  </p>
                )}

                {/* Buttons */}
                <div className="flex gap-2 mt-4">
                  <a
                    href="tel:+919520712211"
                    className="w-1/2 text-center bg-green-700 text-white py-2 rounded-lg text-sm"
                  >
                    Call Now
                  </a>

                  <a
                    href="https://wa.me/919520712211?text=Hello%20I%20want%20fruit%20plants"
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

      {/* SEO TEXT 
      <section className="mt-12 text-sm text-gray-700 leading-6">
        <h2 className="text-xl font-semibold mb-2">
          Buy Fruit Plants from Groway Horticulture
        </h2>
        <p>
          We provide mango, lemon, guava, papaya and other fruit plants
          at best prices. Contact us for bulk and retail orders.
        </p>
      </section>*/}
    </main>
  );
}
