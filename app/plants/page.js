import Link from "next/link";

const plantCategories = [
  {
    name: "Indoor Plants",
    slug: "indoor-plants",
    image: "/q.jpg",
    desc: "You can keep indoor plants in your home to enjoy fresh air and a pleasant fragrance.",
  },
  {
    name: "Outdoor Plants",
    slug: "outdoor-plants",
    image: "/b.jpg",
    desc: "Outdoor plants make your garden look beautiful and keep the surroundings filled with a pleasant fragrance.",
  },
  {
    name: "Flowering Plants",
    slug: "flower-plants",
    image: "/a.jpg",
    desc: "Flower plants give you a unique sense of joy and make your home and garden look very beautiful.",
  },
  {
    name: "Fruit Plants",
    slug: "fruit-plants",
    image: "h.jpg",
    desc: "Fruit plants provide fresh air and delicious fruits, so you should definitely plant them in your garden.",
  },
];

export default function PlantsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Our Plant Categories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {plantCategories.map((item) => (
          <div
            key={item.slug}
            className="border rounded-xl shadow-sm hover:shadow-lg transition"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-t-xl"
            />

            {/* Content */}
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-1">
                {item.name}
              </h2>

              <p className="text-sm text-gray-600 mb-4">
                {item.desc}
              </p>

              {/* View More Button */}
              <Link
                href={`${item.slug}`}
                className="block text-center bg-green-600 text-white py-2 rounded-lg text-sm hover:bg-green-700"
              >
                View More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
