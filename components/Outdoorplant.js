"use client";
import { useState } from "react";

const plants = [
  {
    id: 1,
    name: "Croton",
    image: "/croton.jpg",
    oldPrice: 75,
    price: 50,
    desc: "Easy to grow outdoor plant for garden",
    info: "Low light plant | Fast growing | Best for beginners",
  },
  {
    id: 2,
    name: "Ixora West Indian Jasmine",
    image: "/Ixora wast indian jasmine.jpg",
    oldPrice: 155,
    price: 100,
    desc: "Easy to grow outdoor plant for garden",
    info: "Low light plant | Fast growing | Best for beginners",
  },
  {
    id: 3,
    name: "Red Plumeria Champa",
    image: "/red plumeria champa flower plants.jpg",
    oldPrice: 199,
    price: 150,
    desc: "Easy to grow outdoor plant for garden",
    info: "Low light plant | Fast growing | Best for beginners",
  },
  {
    id: 4,
    name: "Thuja Morpankhi",
    image: "/thuja morpankhi coniferous.jpg",
    oldPrice: 60,
    price: 50,
    desc: "Easy to grow outdoor plant for garden",
    info: "Low light plant | Fast growing | Best for beginners",
  },
   {
  id: 5,
  name: "Golden Cypress",
  image: "/golden cypress.jpg",
  oldPrice: 770,
  price: 400,
  desc: "Easy to grow outdoor plant for garden",
  info: "Low light plant | Fast growing | Best for beginners",
},
{
  id: 6,
  name: "Conocarpus Tree",
  image: "/conocarpus tree.jpg",
  oldPrice: 150,
  price: 50,
  desc: "Easy to grow outdoor plant for garden",
  info: "Low light plant | Fast growing | Best for beginners",
},
{
  id: 7,
  name: "Laila Majnu",
  image: "/laila majnu exoecria.jpg",
  oldPrice: 70,
  price: 40,
  desc: "Easy to grow outdoor plant for garden",
  info: "Low light plant | Fast growing | Best for beginners",
},
{
  id: 8,
  name: "China Palm",
  image: "/china palm.jpg",
  oldPrice: 150,
  price: 80,
  desc: "Easy to grow outdoor plant for garden",
  info: "Low light plant | Fast growing | Best for beginners",
},
{
  id: 9,
  name: "Phoenix Palm",
  image: "/phoenix palm.jpg",
  oldPrice: 99,
  price: 80,
  desc: "Easy to grow outdoor plant for garden",
  info: "Low light plant | Fast growing | Best for beginners",
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
