import IndoorPlantCard from "../../components/IndoorPlantCard";
export const metadata = {
  title: "Buy Indoor  plants | Groway Horticulture",
  description: "Buy flower seeds in Indore like Rose, Marigold, Petunia. Call or WhatsApp to order."
};

export default function IndoorPlantPage() {

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">

      {/* SEO Text */}
      <section className="mt-14 text-sm text-gray-700 leading-6">
        <h2 className="text-xl font-semibold mb-2">
          Buy Indoor Plants from Groway Horticulture
        </h2>
        <p>
          Groway Horticulture supplies outdoor plants for gardens, parks,
          farmhouses, societies and landscaping projects.
          We provide neem, ashoka, flowering plants, shade trees and more.
          Contact us for retail and bulk orders.
        </p>
      </section>
      <section className="mt-14 text-sm text-gray-700 leading-6">
      <IndoorPlantCard/>
      </section>
    </main>
  );
}
