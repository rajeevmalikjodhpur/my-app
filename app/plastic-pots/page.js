"use client";

import { useState } from "react";

const plasticPots = [
  {
    name: "6 inch white pot",
    image: "6 inch white pots.jpg",
    desc: "Best plastic pot for small indoor plants",
    price: 199,
    discount: 50,
    info:
      "Suitable for money plant, snake plant and small flowering plants. Durable and lightweight.",
  },
  {
    name: "8 inch h hexa",
    image: "8 inch h hexa.jpg",
    desc: "Medium size plastic pot for home garden",
    price: 299,
    discount: 80,
    info:
      "Ideal for flowering plants and herbs. UV resistant plastic material.",
  },
  {
    name: "8 inch virat red pot",
    image: "8 inch virat red pot.jpg",
    desc: "Heavy duty plastic pot for outdoor plants",
    price: 449,
    discount: 120,
    info:
      "Perfect for rose plants, hibiscus and medium fruit plants.",
  },
  {
    name: "10 inch black pot",
    image: "/10 inch black pot.jpg",
    desc: "Decorative hanging plastic pot",
    price: 249,
    discount: 70,
    info:
      "Used for money plant, petunia and trailing plants. Comes with hook.",
  },
  {
    name: "10 inch h poneix orange",
    image: "/10 inch h poneix orange.jpg",
    desc: "Large pot for trees and fruit plants",
    price: 699,
    discount: 200,
    info:
      "Strong plastic pot suitable for guava, lemon and ornamental trees.",
  },
  {
    name: "10 inch red pot",
    image: "/10 inch red pot.jpg",
    desc: "Large pot for trees and fruit plants",
    price: 699,
    discount: 200,
    info:
      "Strong plastic pot suitable for guava, lemon and ornamental trees.",
  },
  {
    name: "12 inch nursery white pot",
    image: "/12 inch nursery white pot.jpg",
    desc: "Large pot for trees and fruit plants",
    price: 699,
    discount: 200,
    info:
      "Strong plastic pot suitable for guava, lemon and ornamental trees.",
  },
  {
    name: "12 inch red pot",
    image: "/12 inch red pot.jpg",
    desc: "Large pot for trees and fruit plants",
    price: 699,
    discount: 200,
    info:
      "Strong plastic pot suitable for guava, lemon and ornamental trees.",
  },
  {
    name: "14 inch nurser white pot",
    image: "/14 inch nurser white pot.jpg",
    desc: "Large pot for trees and fruit plants",
    price: 699,
    discount: 200,
    info:
      "Strong plastic pot suitable for guava, lemon and ornamental trees.",
  },
  {
    name: "18 inch red pot",
    image: "/18 inch red pot.jpg",
    desc: "Large pot for trees and fruit plants",
    price: 699,
    discount: 200,
    info:
      "Strong plastic pot suitable for guava, lemon and ornamental trees.",
  },
  {
    name: "19 inch nursery white pot",
    image: "/19 inch nursery white pot.jpg",
    desc: "Large pot for trees and fruit plants",
    price: 699,
    discount: 200,
    info:
      "Strong plastic pot suitable for guava, lemon and ornamental trees.",
  },
  {
    name: "24 inch window planter red",
    image: "/24 inch window planter red.jpg",
    desc: "Large pot for trees and fruit plants",
    price: 699,
    discount: 200,
    info:
      "Strong plastic pot suitable for guava, lemon and ornamental trees.",
  },
  {
    name: "blassom hanging",
    image: "/blassom hanging.jpg",
    desc: "Large pot for trees and fruit plants",
    price: 699,
    discount: 200,
    info:
      "Strong plastic pot suitable for guava, lemon and ornamental trees.",
  },
  {
    name: "budha 7 inch pot",
    image: "/budha 7 inch pot.jpg",
    desc: "Large pot for trees and fruit plants",
    price: 699,
    discount: 200,
    info:
      "Strong plastic pot suitable for guava, lemon and ornamental trees.",
  },
  {
    name: "budha 10 inch pot",
    image: "/budha 10 inch pot.jpg",
    desc: "Large pot for trees and fruit plants",
    price: 699,
    discount: 200,
    info:
      "Strong plastic pot suitable for guava, lemon and ornamental trees.",
  },
  {
    name: "diamante self watering pot ",
    image: "/diamante self watering.jpg",
    desc: "Large pot for trees and fruit plants",
    price: 699,
    discount: 200,
    info:
      "Strong plastic pot suitable for guava, lemon and ornamental trees.",
  },
  {
    name: "hector hook pot",
    image: "/hector hook pot.jpg",
    desc: "Large pot for trees and fruit plants",
    price: 699,
    discount: 200,
    info:
      "Strong plastic pot suitable for guava, lemon and ornamental trees.",
  },
  {
    name: "Heera flower pot 6 inch",
    image: "/Heera flower pot 6 inch.jpg",
    desc: "Large pot for trees and fruit plants",
    price: 699,
    discount: 200,
    info:
      "Strong plastic pot suitable for guava, lemon and ornamental trees.",
  },
  {
    name: "Kristal self watering",
    image: "/kristal self watering.jpg",
    desc: "Large pot for trees and fruit plants",
    price: 699,
    discount: 200,
    info:
      "Strong plastic pot suitable for guava, lemon and ornamental trees.",
  },
  {
    name: "Lov self watering pot",
    image: "/lov self watering pot.jpg",
    desc: "Large pot for trees and fruit plants",
    price: 699,
    discount: 200,
    info:
      "Strong plastic pot suitable for guava, lemon and ornamental trees.",
  },
  {
    name: "pearl 3.5 inch",
    image: "/pearl 3.5 inch.jpg",
    desc: "Large pot for trees and fruit plants",
    price: 699,
    discount: 200,
    info:
      "Strong plastic pot suitable for guava, lemon and ornamental trees.",
  },

  {
    name: "rattan pot 7 inch",
    image: "/rattan pot 7 inch.jpg",
    desc: "Large pot for trees and fruit plants",
    price: 699,
    discount: 200,
    info:
      "Strong plastic pot suitable for guava, lemon and ornamental trees.",
  },
  {
    name: "Self watering pot 4 inch",
    image: "/self watering pot 4 inch.jpg",
    desc: "Large pot for trees and fruit plants",
    price: 699,
    discount: 200,
    info:
      "Strong plastic pot suitable for guava, lemon and ornamental trees.",
  },
  {
    name: "square self watring pot 5 inch",
    image: "/square self watring pot 5 inch.jpg",
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
                className="w-full object-cover rounded-t-xl"
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
                    href="tel:+919520712211"
                    className="w-1/2 text-center bg-green-700 text-white py-2 rounded-lg text-sm"
                  >
                    Call Now
                  </a>

                  <a
                    href="https://wa.me/919520712211?text=Hello%20I%20want%20plastic%20pots"
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
