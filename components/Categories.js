import Image from "next/image";

const categories = [
  {
    name: "Plants",
    image: "/a.jpg",
    description: "All types of Indoor, Outdoor, and Flowering Plants available — buy from home at affordable prices.",
    link: "/plants",
  },
  {
    name: "Seeds",
    image: "/d.png",
    description: "All types of high-quality vegetable and flower seeds available for better yield and flowering.",
    link: "flower-seeds",
  },
  {
    name: "Pots",
    image: "/po.png",
    description: "Groway Horticulture offers a wide range of high-quality pots at affordable prices.",
    link: "plastic-pots",
  },
];

export default function Categories() {
  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-green-900">
          Explore Our Categories
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-green-800">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <a
                  href={category.link}
                  className="inline-block px-5 py-2 bg-green-700 text-white font-medium rounded-full hover:bg-green-800 transition"
                >
                  View More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
