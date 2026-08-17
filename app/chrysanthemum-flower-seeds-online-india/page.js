export const metadata = {
    title: "Buy chrysanthemum flower seeds online india",
    description: "Our company offers Chrysanthemum flower seeds at a very affordable price, with a 99.9% germination rate. Our seeds are high-quality and suitable for growing healthy, beautiful Chrysanthemum plants."
  };
  
  export default function ChrysanthemumSeed() {
    return (
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Buy chrysanthemum flower seeds online india</h1>
        <p className="text-center text-gray-600 mb-10">
          Buy premium Buy chrysanthemum flower seeds online india from <strong>Groway Horticulture</strong>. Call or WhatsApp to place your order.
        </p>
        <div className="grid md:grid-cols-2 gap-8 items-start">

  {/* Product Image */}
  <div className="bg-white rounded-xl shadow-md p-4">
  <img
  src="/chrysanthemum flower seeds.jpg"
  alt="/chrysanthemum flower seeds"
  className="w-full object-contain rounded-lg"
/>
  </div>

  {/* Product Details */}
  <div className="bg-white rounded-xl shadow-md p-6">

    <h2 className="text-2xl font-bold text-gray-800 mb-3">
      {s.name}
    </h2>

    <div className="text-sm text-green-600 font-semibold mb-4">
      ✓ 99.9% Germination Rate
    </div>

    <p className="text-gray-600 mb-5">
      High-quality Chrysanthemum flower seeds with fast growth
      and beautiful flowering.
    </p>

    {/* Price */}
    <div className="mb-5">
      <span className="text-3xl font-bold text-green-600">
        ₹99
      </span>
      <span className="text-gray-500 ml-2">
        / Pack
      </span>
    </div>

    {/* Quantity */}
    <div className="mb-5">
      <label className="block font-semibold mb-2">
        Quantity
      </label>

      <select className="border rounded-lg px-4 py-2 w-full">
        <option>1 Pack</option>
        <option>2 Packs</option>
        <option>5 Packs</option>
        <option>10 Packs</option>
      </select>
    </div>

    {/* Order Buttons */}
    <div className="grid grid-cols-2 gap-3">

      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white
                   text-center py-3 rounded-lg font-semibold"
      >
        WhatsApp Order
      </a>

      <a
        href="tel:+91XXXXXXXXXX"
        className="bg-blue-600 hover:bg-blue-700 text-white
                   text-center py-3 rounded-lg font-semibold"
      >
        Call to Order
      </a>

    </div>

    {/* Product Information */}
    <div className="border-t mt-6 pt-5 space-y-2 text-sm">
      <p><strong>Product:</strong> Chrysanthemum Flower Seeds</p>
      <p><strong>Germination:</strong> 99.9%</p>
      <p><strong>Growth:</strong> Fast Growing</p>
      <p><strong>Suitable for:</strong> Home Gardening & Farming</p>
    </div>

  </div>

</div>
      </main>
    );
  }
  