"use client";
import { useState } from "react";

const flowerPlants = [
  {
    name: "Rose Plant",
    image: "/rose.jpg",
    desc: "Popular flowering plant with beautiful fragrance",
    price: 299,
    discount: 100,
    info: "Full sunlight | Regular watering | Best for garden & pots",
  },
  {
    name: "Jasmine (Mogra)",
    image: "/jasmine.jpg",
    desc: "Fragrant white flowering plant",
    price: 249,
    discount: 80,
    info: "Medium sunlight | Moderate water | Highly fragrant flowers",
  },
  {
    name: "Hibiscus",
    image: "/hibiscus.jpg",
    desc: "Large colorful flowering outdoor plant",
    price: 349,
    discount: 100,
    info: "Daily sunlight | Regular watering | Large blooms",
  },
];

export default function FlowerPlantsPage() {
  const [selectedPlant, setSelectedPlant] = useState(null);

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Buy Flower Plants
      </h1>

      <p className="text-gray-600 mb-10">
      You can plant flower plants in your room, balcony, or on the terrace. They allow you to enjoy natural fragrance and beauty, making your surroundings more pleasant and refreshing. You can buy healthy and high-quality flowering plants from Groway Horticulture.
      </p>

      {/* Plants Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {flowerPlants.map((plant, index) => {
          const finalPrice = plant.price - plant.discount;

          return (
            <div
              key={index}
              className="border rounded-xl shadow-sm hover:shadow-lg transition"
            >
              {/* Image */}
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-56 object-cover rounded-t-xl"
              />

              {/* Content */}
              <div className="p-4">
                {/* Name */}
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

                {/* Description */}
                <p className="text-sm text-gray-600 mt-2 mb-4">
                  {plant.desc}
                </p>

                {/* Buttons */}
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href="tel:+919411812745"
                    className="text-center bg-green-700 text-white py-2 rounded-lg text-sm"
                  >
                    Call
                  </a>

                  <a
                    href={`https://wa.me/919411812745?text=I%20want%20to%20buy%20${plant.name}`}
                    className="text-center bg-green-500 text-white py-2 rounded-lg text-sm"
                  >
                    WhatsApp
                  </a>

                  <button
                    onClick={() => setSelectedPlant(plant)}
                    className="bg-blue-600 text-white py-2 rounded-lg text-sm"
                  >
                    Info
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Info Popup */}
      {selectedPlant && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full relative">
            <button
              onClick={() => setSelectedPlant(null)}
              className="absolute top-2 right-3 text-gray-500 text-xl"
            >
              ✕
            </button>

            <h3 className="text-xl font-bold mb-2">
              {selectedPlant.name}
            </h3>

            <img
              src={selectedPlant.image}
              alt={selectedPlant.name}
              className="w-full h-40 object-cover rounded mb-3"
            />

            <p className="text-sm text-gray-700 mb-2">
              {selectedPlant.desc}
            </p>

            <p className="text-sm text-gray-600">
              <strong>Plant Details:</strong> {selectedPlant.info}
            </p>
          </div>
        </div>
      )}

      {/* SEO Section */}
  
    </main>
  );
}
