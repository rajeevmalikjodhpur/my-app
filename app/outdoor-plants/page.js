"use client";
import { useState } from "react";

const outdoorPlants = [
  {
    name: "Areca Palm",
    image: "/Areca Palm.jpg",
    desc: "Low maintenance air purifying plant",
    price: 699,
    discount: 200,
    info: "Height: 3–5 ft | Indoor light | Water twice a week | Air purifier",
  },
  {
    name: "coleus",
    image: "/coleus.jpg",
    desc: "Easy to grow indoor plant for home and office",
    price: 299,
    discount: 100,
    info: "Low light plant | Fast growing | Best for beginners",
  },
  {
    name: "Croton",
    image: "/croton.jpg",
    desc: "Easy to grow indoor plant for home and office",
    price: 299,
    discount: 100,
    info: "Low light plant | Fast growing | Best for beginners",
  },
  {
    name: "dieffenbachia",
    image: "/dieffenbachia.jpg",
    desc: "Easy to grow indoor plant for home and office",
    price: 299,
    discount: 100,
    info: "Low light plant | Fast growing | Best for beginners",
  },
  {
    name: "Ixora wast indian jasmine",
    image: "/Ixora wast indian jasmine.jpg",
    desc: "Easy to grow indoor plant for home and office",
    price: 299,
    discount: 100,
    info: "Low light plant | Fast growing | Best for beginners",
  },
  {
    name: "morraya dwarf madhu kami",
    image: "/morraya dwarf madhu kaini folowring.jpg",
    desc: "Easy to grow indoor plant for home and office",
    price: 299,
    discount: 100,
    info: "Low light plant | Fast growing | Best for beginners",
  },
  {
    name: "Red plumeria champa",
    image: "/red plumeria champa flower plants.jpg",
    desc: "Easy to grow indoor plant for home and office",
    price: 299,
    discount: 100,
    info: "Low light plant | Fast growing | Best for beginners",
  },
  {
    name: "Royal bottle palm",
    image: "/Royal bottle palm.jpg",
    desc: "Easy to grow indoor plant for home and office",
    price: 299,
    discount: 100,
    info: "Low light plant | Fast growing | Best for beginners",
  },
  {
    name: "Thuja morpankhi",
    image: "/thuja morpankhi coniferous.jpg",
    desc: "Easy to grow indoor plant for home and office",
    price: 299,
    discount: 100,
    info: "Low light plant | Fast growing | Best for beginners",
  },

];

export default function OutdoorPlantsPage() {
  const [selectedPlant, setSelectedPlant] = useState(null);

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Outdoor Plants
      </h1>

      <p className="text-gray-600 mb-10">
      Outdoor plants are planted outside the home, in gardens, on terraces, and other open areas because they grow larger in size. These plants help purify the air and create a healthy environment. To get healthy and high-quality plants, buy outdoor plants from Groway Horticulture.
      </p>

      {/* Plants Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {outdoorPlants.map((plant, index) => {
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
                    href="tel:+919520712211"
                    className="text-center bg-green-700 text-white py-2 rounded-lg text-sm"
                  >
                    Call
                  </a>

                  <a
                    href={`https://wa.me/919520712211?text=I%20want%20to%20buy%20${plant.name}`}
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

      {/* SEO Text */}
      <section className="mt-14 text-sm text-gray-700 leading-6">
        <h2 className="text-xl font-semibold mb-2">
          Buy Outdoor Plants from Groway Horticulture
        </h2>
        <p>
          Groway Horticulture supplies outdoor plants for gardens, parks,
          farmhouses, societies and landscaping projects.
          We provide neem, ashoka, flowering plants, shade trees and more.
          Contact us for retail and bulk orders.
        </p>
      </section>
    </main>
  );
}
