import IndoorPlantCard from "../../components/IndoorPlantCard";
export async function generateMetadata() {
  return {
    title: "Buy Indoor Plants | Groway Horticulture",
    description:
      "Buy flower seeds in Indore like Rose, Marigold, Petunia. Call or WhatsApp to order.",
    alternates: {
      canonical: "https://growayhorticulture.com/indoor-plants",
    },
  };
}

export default function IndoorPlantPage() {

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">

      {/* SEO Text */}
      <section className="mt-14 text-sm text-gray-700 leading-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-green-700">
  Buy Indoor Plants from Groway Horticulture
</h1>

        <p>
          At Groway Horticulture, you will find all types of indoor plants that you can place anywhere in your home. We offer a wide variety of plants that can grow well even in low-light conditions. At Groway Horticulture, indoor plants are available in all sizes, according to your space and needs. You can purchase indoor plants from us both online and offline. 
        </p>
  
      </section>
      <section className="mt-14 text-sm text-gray-700 leading-6">
      <IndoorPlantCard/>
      </section>
      <section class="max-w-6xl mx-auto px-4 py-8">
  <h2 class="text-2xl md:text-3xl font-bold text-green-700 mb-6">
    🌿Our Indoor Plant Categories
  </h2>
<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  
  <li class="border rounded-2xl p-5 shadow-sm hover:shadow-md transition">
    <h3 class="text-lg font-semibold text-gray-800">
      Low Light Indoor Plants
    </h3>
    <p class="text-sm text-gray-600 mt-2">
      Perfect plants for rooms with low or indirect sunlight
    </p>
  </li>

  <li class="border rounded-2xl p-5 shadow-sm hover:shadow-md transition">
    <h3 class="text-lg font-semibold text-gray-800">
      Oxygen Giving Indoor Plants
    </h3>
    <p class="text-sm text-gray-600 mt-2">
      Plants that help keep your home air fresh and healthy
    </p>
  </li>

  <li class="border rounded-2xl p-5 shadow-sm hover:shadow-md transition">
    <h3 class="text-lg font-semibold text-gray-800">
      Air Purifying Plants
    </h3>
    <p class="text-sm text-gray-600 mt-2">
      Indoor plants that help reduce indoor air pollution
    </p>
  </li>

  <li class="border rounded-2xl p-5 shadow-sm hover:shadow-md transition">
    <h3 class="text-lg font-semibold text-gray-800">
      Indoor Plants for Living Room & Bedroom
    </h3>
    <p class="text-sm text-gray-600 mt-2">
      Beautiful and calming plants for your living and bedroom spaces
    </p>
  </li>

  <li class="border rounded-2xl p-5 shadow-sm hover:shadow-md transition">
    <h3 class="text-lg font-semibold text-gray-800">
      Indoor Plants for Office
    </h3>
    <p class="text-sm text-gray-600 mt-2">
      Low maintenance plants for offices and workspaces
    </p>
  </li>

  <li class="border rounded-2xl p-5 shadow-sm hover:shadow-md transition">
    <h3 class="text-lg font-semibold text-gray-800">
      Big & Small Size Indoor Plants
    </h3>
    <p class="text-sm text-gray-600 mt-2">
      Indoor plants available in all sizes to fit every space
    </p>
  </li>

</ul>

</section>
 <section class="max-w-6xl mx-auto px-4 py-8">
  <h2 class="text-2xl md:text-3xl font-bold text-green-700 mb-6">
    🌿Indoor Plants by Size
  </h2>
      <p class="text-sm md:text-base text-gray-600 mt-4 leading-relaxed">
  At Groway Horticulture, you can buy indoor plants in all sizes to suit your space and requirements.
  We offer a wide range of indoor plants including 
  <span class="font-medium text-gray-800"> small, medium, and large size plants</span>.
  To purchase indoor plants, you can visit our 
  <span class="font-medium text-green-700">Contact</span> page to get our address and phone number.
  You can buy plants from us both <span class="font-medium text-green-700"> online and offline</span>, as per your convenience.
</p>

  </section>

<section class="max-w-6xl mx-auto px-4 py-8">
  <h2 class="text-2xl md:text-3xl font-bold text-green-700 mb-6">
    🌿Indoor Plants for Every Space
  </h2>
      <p class="text-sm md:text-base text-gray-600 mt-4 leading-relaxed">
 <p class="text-sm md:text-base text-gray-600 mt-4 leading-relaxed">
  Nowadays, pollution is increasing rapidly in both villages and cities, while the number of trees is continuously decreasing.
  In such a situation, to protect ourselves from pollution, we should place indoor plants in our 
  <span class="font-medium text-gray-800">homes, offices, shops, kitchens, and other indoor spaces</span>.
  Indoor plants help improve air quality and create a healthier environment.
  You can buy suitable indoor plants for your 
  <span class="font-medium text-gray-800">office, shop, kitchen, and home</span> from 
  <span class="font-medium text-green-700">Groway Horticulture</span>.
</p>
</p>

  </section>

    </main>
  );
}
