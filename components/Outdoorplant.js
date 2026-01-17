"use client";
import { useState } from "react";

const plants = [
  {
    id: 1,
    name: "China Palm",
    image: "/china-palm.jpg",
    oldPrice: 150,
    price: 130,
    desc: "Easy to grow indoor plant for home and office",
    info: "Needs indirect sunlight and moderate watering",
  },
  {
    id: 2,
    name: "Areca Palm",
    image: "/areca-palm.jpg",
    oldPrice: 250,
    price: 210,
    desc: "Air purifying indoor plant",
    info: "Bright indirect light, water twice a week",
  },
  {
    id: 3,
    name: "Croton",
    image: "/croton.jpg",
    oldPrice: 120,
    price: 95,
    desc: "Colorful leaves plant",
    info: "Bright light required, moderate watering",
  },
];

export default function OutdoorPlant() {
  const [selectedPlant, setSelectedPlant] = useState(null);

  return (
    <>
      {/* Plants Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {plants.map((plant) => (
          <div
            key={plant.id}
            className="max-w-xs bg-white rounded-2xl shadow-md overflow-hidden mx-auto"
          >
            {/* Image */}
            <img
              src={plant.image}
              alt={plant.name}
              className="w-full h-80 object-cover"
            />

            {/* Content */}
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{plant.name}</h3>

              {/* Price */}
              <div className="flex justify-center gap-2 mt-1">
                <span className="text-gray-400 line-through">
                  ₹{plant.oldPrice}
                </span>
                <span className="text-green-600 font-bold">
                  ₹{plant.price}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-2">{plant.desc}</p>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <a href="tel:9876543210">
                  <button className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    📞 Call
                  </button>
                </a>

                <a
                  href={`https://wa.me/919876543210?text=Hello, I want to buy ${plant.name}`}
                  target="_blank"
                >
                  <button className="px-3 py-1.5 text-sm bg-green-500 text-white rounded-lg hover:bg-green-600">
                    💬 WhatsApp
                  </button>
                </a>

                <button
                  onClick={() => setSelectedPlant(plant)}
                  className="px-3 py-1.5 text-sm bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  ℹ Info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Info Modal */}
      {selectedPlant && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[90%] max-w-sm">
            <h4 className="text-xl font-bold mb-2">
              {selectedPlant.name}
            </h4>
            <p className="text-gray-700 text-sm">
              {selectedPlant.info}
            </p>

            <button
              onClick={() => setSelectedPlant(null)}
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
