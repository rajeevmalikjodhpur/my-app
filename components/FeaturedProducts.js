import Image from "next/image";

const products = [
  {
    name: "Aloe Vera Plant",
    image: "/products/aloe-vera.jpg",
    price: "₹250",
    link: "/contact", // Contact page
  },
  {
    name: "Rose Plant",
    image: "/products/rose.jpg",
    price: "₹150",
    link: "/contact",
  },
  {
    name: "Tomato Seeds Pack",
    image: "/products/tomato-seeds.jpg",
    price: "₹50",
    link: "/contact",
  },
  {
    name: "Basil Seeds Pack",
    image: "/products/basil-seeds.jpg",
    price: "₹60",
    link: "/contact",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-green-900">
          Featured Products / Best Sellers
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-green-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-green-800">
                  {product.name}
                </h3>
                <p className="text-gray-700 mb-4">{product.price}</p>
                <a
                  href={product.link}
                  className="inline-block px-5 py-2 bg-green-700 text-white font-medium rounded-full hover:bg-green-800 transition"
                >
                  Contact Us
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
