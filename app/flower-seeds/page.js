export const metadata = {
    title: "Flower Seeds in Indore | Groway Horticulture",
    description: "Buy flower seeds in Indore like Rose, Marigold, Petunia. Call or WhatsApp to order."
  };
  
  const seeds = [
    { name: "Rose Seeds", price: "₹80", img: "/seeds/rose.jpg", slug: "rose-seeds" },
    { name: "Marigold Seeds", price: "₹60", img: "/seeds/marigold.jpg", slug: "marigold-seeds" },
    { name: "Petunia Seeds", price: "₹70", img: "/seeds/petunia.jpg", slug: "petunia-seeds" },
    { name: "Zinnia Seeds", price: "₹65", img: "/seeds/zinnia.jpg", slug: "zinnia-seeds" },
  ];
  
  export default function FlowerSeeds() {
    return (
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Flower Seeds in Indore</h1>
        <p className="text-center text-gray-600 mb-10">
          Buy premium flower seeds from <strong>Groway Horticulture</strong>. Call or WhatsApp to place your order.
        </p>
  
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {seeds.map((s, i) => (
            <div key={i} className="border rounded-xl p-4 shadow hover:shadow-lg transition">
              <img src={s.img} alt={s.name} className="h-40 w-full object-cover rounded" />
              <h2 className="mt-3 font-semibold text-lg">{s.name}</h2>
              <p className="text-green-700 font-bold">{s.price}</p>
              <p className="text-sm text-gray-600 mt-1">High-quality flower seeds for your garden.</p>
  
              <div className="grid grid-cols-3 gap-2 mt-4 text-sm">
                <a href={`/seeds/${s.slug}`} className="border border-green-600 text-green-600 py-2 rounded text-center">Info</a>
                <a href="tel:911234567890" className="bg-green-600 text-white py-2 rounded text-center">Call</a>
                <a href={`https://wa.me/911234567890?text=I want to buy ${s.name}`} target="_blank" className="bg-green-500 text-white py-2 rounded text-center">WhatsApp</a>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }
  