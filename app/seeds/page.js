export const metadata = {
    title: "Seeds in Indore | Vegetable & Flower Seeds – Groway Horticulture",
    description:
      "Buy vegetable seeds, flower seeds and hybrid seeds in Indore. Best quality seeds available at Groway Horticulture."
  };
  
  const seedCategories = [
    {
      name: "Flower Seeds",
      image: "/seeds/flower.jpg",
      desc: "Colorful flower seeds for home & garden",
      link: "flower-seeds",
    },
  ];
  
  export default function SeedsPage() {
    return (
      <main className="max-w-7xl mx-auto px-4 py-10">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Seeds Collection in Indore
        </h1>
  
        <p className="text-center text-gray-600 mb-10">
          Buy premium quality seeds from <strong>Groway Horticulture</strong>.  
          Call or WhatsApp to order seeds in Indore.
        </p>
  
        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {seedCategories.map((item, index) => (
            <div
              key={index}
              className="border rounded-xl shadow-sm hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={`${item.name} in Indore`}
                className="w-full h-48 object-cover rounded-t-xl"
              />
  
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-1">{item.name}</h2>
                <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
  
                <div className="flex gap-2">
                  <a
                    href={item.link}
                    className="w-1/2 text-center border border-green-600 text-green-600 py-2 rounded-lg text-sm"
                  >
                    View Seeds
                  </a>
  
                  <a
                    href="https://wa.me/911234567890"
                    target="_blank"
                    className="w-1/2 text-center bg-green-600 text-white py-2 rounded-lg text-sm"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* SEO Content */}
        <section className="mt-12 text-gray-700 text-sm leading-6">
          <h2 className="text-xl font-semibold mb-2">
            Buy Seeds in Indore from Groway Horticulture
          </h2>
          <p>
            Groway Horticulture provides vegetable seeds, flower seeds, fruit seeds,
            hybrid seeds and herbal seeds in Indore. We supply seeds for home gardeners,
            farmers and nurseries at best prices.
          </p>
        </section>
      </main>
    );
  }
  