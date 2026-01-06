"use client";
import { useState } from "react";


const indoorPlants = [
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

export default function IndoorPlantsPage() {
  const [selectedPlant, setSelectedPlant] = useState(null);

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Buy Indoor Plants
      </h1>

      <p className="text-gray-600 mb-10">
      You can keep indoor plants in your home, room, or even small spaces. They help purify the air and make your home healthier. Buy indoor plants today from Groway Horticulture and get plants delivered to your home with ease.</p>

      {/* Plants Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {indoorPlants.map((plant, index) => {
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
                <h2 className="text-lg font-semibold">{plant.name}</h2>

                <div className="flex items-center gap-2 mt-1">
                  <span className="text-gray-400 line-through text-sm">
                    ₹{plant.price}
                  </span>
                  <span className="text-green-700 font-bold text-lg">
                    ₹{finalPrice}
                  </span>
                </div>

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

                  {/* Info Button */}
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
              <strong>Plant Info:</strong> {selectedPlant.info}
            </p>
          </div>
        </div>
      )}
       <h2 className="text-2xl md:text-3xl font-bold mb-4">Indoor Plants Benefits</h2>
       <ul className="list-disc list-inside space-y-2 text-gray-700">
       <li>Planting indoor plants helps purify the air inside your home</li>
<li>You can grow them even in very small spaces</li>
<li>Indoor plants enhance the beauty of your home</li>
<li>Indoor plants require very little maintenance</li>
<li>Indoor plants grow easily in pots</li>

</ul>   
    </main>
    
  );

}
