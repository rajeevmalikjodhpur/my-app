export const metadata = {
  title: "buy indoor plants online india very cheap price",
  description:
    "Groway Horticulture offers all types of indoor plants at very affordable prices, along with excellent quality.",
};

const plants = [
  {
    id: 1,
    name: "Areca Palm",
    image: "/Areca Palm.jpg",
    oldPrice: 200,
    price: 150,
    desc: "Low maintenance air purifying plant",
    slug: "/buy-areca-palm-online-india",
  },
  {
    id: 2,
    name: "Dracena Drop",
    image: "/coleus.jpg",
    oldPrice: 60,
    price: 45,
    desc: "Easy to grow indoor plant for home and office",
    slug: "/buy-indoor-plants",
  },
  {
    id: 3,
    name: "Dieffenbachia",
    image: "/dieffenbachia.jpg",
    oldPrice: 150,
    price: 100,
    desc: "Easy to grow any climate",
    slug: "/dieffenbachia-plant-buy-online",
  },
  {
    id: 4,
    name: "Murraya Dwarf Madhu Kamini",
    image: "/morraya dwarf madhu kaini folowring.jpg",
    oldPrice: 60,
    price: 50,
    desc: "Easy to madhu kamini plant for home and office",
    slug: "/buy-madhu-kamini-plant-online",
  },
  {
    id: 5,
    name: "Royal Bottle Palm",
    image: "/Royal bottle palm.jpg",
    oldPrice: 250,
    price: 150,
    desc: "Easy to grow indoor plant for home and office",
    slug: "/buy-indoor-plants",
  },
  {
    id: 6,
    name: "Red Macheera China Doll",
    image: "/red machera china doll.jpg",
    oldPrice: 199,
    price: 89,
    desc: "Easy to grow indoor plant for home and office",
    slug: "/buy-china-doll-plant-online",
  },
  {
    id: 7,
    name: "Dracaena Kolkata",
    image: "/dracaens kolkata.jpg",
    oldPrice: 80,
    price: 50,
    desc: "Easy to grow indoor plant for home and office",
    slug: "/buy-indoor-plants",
  },
  {
    id: 8,
    name: "Copper Plant",
    image: "/coper plant.jpg",
    oldPrice: 99,
    price: 85,
    desc: "Easy to grow indoor plant for home and office",
    slug: "/buy-indoor-plants",
  },
  {
    id: 9,
    name: "Dracaena Mahatma",
    image: "/dracaena mahatma.jpg",
    oldPrice: 50,
    price: 40,
    desc: "Easy to grow indoor plant for home and office",
    slug: "/buy-indoor-plants",
  },
  {
    id: 10,
    name: "Schefflera (Saplera)",
    image: "/saplera.jpg",
    oldPrice: 99,
    price: 80,
    desc: "Easy to grow indoor plant for home and office",
    slug: "/buy-indoor-plants",
  },
  {
    id: 11,
    name: "Syngonium",
    image: "/syngonium.jpg",
    oldPrice: 99,
    price: 50,
    desc: "Easy to grow indoor plant for home and office",
    slug: "/buy-indoor-plants",
  },
];

export default function IndoorPlantPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-10">

      {/* SEO Text */}
      <section className="mt-14 text-sm text-gray-700 leading-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-green-700">
          buy indoor plants online india
        </h1>

        <p>
          At Groway Horticulture, you will find all types of indoor plants that
          you can place anywhere in your home. We offer a wide variety of
          plants that can grow well even in low-light conditions. At Groway
          Horticulture, indoor plants are available in all sizes, according to
          your space and needs. You can purchase indoor plants from us both
          online and offline.
        </p>
      </section>

      {/* Heading */}
      <section className="mt-14 text-sm text-gray-700 leading-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-green-700">
              Indoor Plants
            </h1>

            <p className="text-gray-600 mt-2">
              Buy beautiful indoor plants for your home and office
            </p>
          </div>
        </div>
      </section>

      {/* Plants */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {plants.map((plant) => (
          <div
            key={plant.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >

            {/* Image */}
            <img
              src={plant.image}
              alt={plant.name}
              className="w-full h-80 object-cover"
            />

            {/* Content */}
            <div className="p-4">

              {/* Plant Name */}
              <h2 className="text-xl font-semibold text-gray-800">
                {plant.name}
              </h2>

              {/* Price */}
              <div className="flex gap-2 mt-1">
                <span className="text-gray-400 line-through">
                  ₹{plant.oldPrice}
                </span>

                <span className="text-green-600 font-bold">
                  ₹{plant.price}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-2">
                {plant.desc}
              </p>

              {/* View More */}
              <a
                href={plant.slug}
                className="block text-center bg-green-600 text-white py-2 rounded-lg text-sm hover:bg-green-700 mt-3"
              >
                View More
              </a>

              {/* Buttons */}
              <div className="flex gap-2 mt-4">

                {/* Call */}
                <a
                  href="tel:9520712211"
                  className="flex-1 text-center px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Call
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/919520712211?text=Hello, I want to buy ${plant.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-3 py-2 text-sm bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  WhatsApp
                </a>

              </div>

            </div>
          </div>
        ))}

      </section>

      {/* Our Indoor Plant Categories */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
        Our Indoor Plant Categories
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <li className="border rounded-2xl p-5 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-800">
              Low Light Indoor Plants
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              Perfect plants for rooms with low or indirect sunlight
            </p>
          </li>

          <li className="border rounded-2xl p-5 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-800">
              Oxygen Giving Indoor Plants
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              Plants that help keep your home air fresh and healthy
            </p>
          </li>

          <li className="border rounded-2xl p-5 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-800">
              Air Purifying Plants
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              Indoor plants that help reduce indoor air pollution
            </p>
          </li>

          <li className="border rounded-2xl p-5 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-800">
              Indoor Plants for Living Room & Bedroom
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              Beautiful and calming plants for your living and bedroom spaces
            </p>
          </li>

          <li className="border rounded-2xl p-5 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-800">
              Indoor Plants for Office
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              Low maintenance plants for offices and workspaces
            </p>
          </li>

          <li className="border rounded-2xl p-5 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-800">
              Big & Small Size Indoor Plants
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              Indoor plants available in all sizes to fit every space
            </p>
          </li>

        </ul>
      </section>

      {/* Indoor Plants by Size */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
          Indoor Plants by Size
        </h2>

        <p className="text-sm md:text-base text-gray-600 mt-4 leading-relaxed">
          At Groway Horticulture, you can buy indoor plants in all sizes to
          suit your space and requirements. We offer a wide range of indoor
          plants including{" "}
          <span className="font-medium text-gray-800">
            small, medium, and large size plants
          </span>
          . To purchase indoor plants, you can visit our{" "}
          <span className="font-medium text-green-700">Contact</span> page to
          get our address and phone number. You can buy plants from us both{" "}
          <span className="font-medium text-green-700">
            online and offline
          </span>
          , as per your convenience.
        </p>
      </section>

      {/* Indoor Plants for Every Space */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
          Indoor Plants for Every Space
        </h2>

        <p className="text-sm md:text-base text-gray-600 mt-4 leading-relaxed">
          Nowadays, pollution is increasing rapidly in both villages and
          cities, while the number of trees is continuously decreasing. In
          such a situation, to protect ourselves from pollution, we should
          place indoor plants in our{" "}
          <span className="font-medium text-gray-800">
            homes, offices, shops, kitchens, and other indoor spaces
          </span>
          . Indoor plants help improve air quality and create a healthier
          environment. You can buy suitable indoor plants for your{" "}
          <span className="font-medium text-gray-800">
            office, shop, kitchen, and home
          </span>{" "}
          from{" "}
          <span className="font-medium text-green-700">
            Groway Horticulture
          </span>
          .
        </p>
      </section>
    </main>
  );
}