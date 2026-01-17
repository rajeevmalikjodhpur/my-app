import Image from "next/image";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutUs from "@/components/AboutUs";
export const metadata = {
  title: "Groway Horticulture | plant service online and offline ",
  description:
    "Groway Horticulture provides all facilities and tools related to horticulture. With Groway Horticulture, you can avail services and products both online and offline.",
};


export default function Home() {
  return (
    <div>
      <main>
 <Categories/>
 <FeaturedProducts />
 <section className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-4">
    
    {/* SEO Heading */}
    <div className="text-center max-w-3xl mx-auto mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-green-800">
        Our Horticulture Services
      </h2>
      <p className="mt-4 text-gray-600 leading-relaxed">
        Groway Horticulture provides complete plant nursery, gardening and
        horticulture services. You can avail our services both online and
        offline with expert support.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Service Card */}
      <div className="group border rounded-2xl p-6 hover:shadow-lg transition">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-700 text-xl font-bold mb-4">
          🌱
        </div>
        <h3 className="text-xl font-semibold text-gray-800">
          Plant Nursery
        </h3>
        <p className="mt-2 text-gray-600">
          Healthy indoor, outdoor and flowering plants available at our nursery.
        </p>
      </div>

      <div className="group border rounded-2xl p-6 hover:shadow-lg transition">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-700 text-xl font-bold mb-4">
          🏡
        </div>
        <h3 className="text-xl font-semibold text-gray-800">
          Home Gardening Setup
        </h3>
        <p className="mt-2 text-gray-600">
          Complete gardening solutions for homes, balconies and terraces.
        </p>
      </div>

      <div className="group border rounded-2xl p-6 hover:shadow-lg transition">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-700 text-xl font-bold mb-4">
          🏢
        </div>
        <h3 className="text-xl font-semibold text-gray-800">
          Office & Commercial Plants
        </h3>
        <p className="mt-2 text-gray-600">
          Plants for offices, shops, hotels and commercial spaces.
        </p>
      </div>

      <div className="group border rounded-2xl p-6 hover:shadow-lg transition">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-700 text-xl font-bold mb-4">
          🌳
        </div>
        <h3 className="text-xl font-semibold text-gray-800">
          Landscaping Support
        </h3>
        <p className="mt-2 text-gray-600">
          Expert guidance for garden planning and landscaping projects.
        </p>
      </div>

      <div className="group border rounded-2xl p-6 hover:shadow-lg transition">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-700 text-xl font-bold mb-4">
          🛠
        </div>
        <h3 className="text-xl font-semibold text-gray-800">
          Gardening Tools & Supplies
        </h3>
        <p className="mt-2 text-gray-600">
          Quality pots, soil, seeds and gardening tools available.
        </p>
      </div>

      <div className="group border rounded-2xl p-6 hover:shadow-lg transition">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-700 text-xl font-bold mb-4">
          🚚
        </div>
        <h3 className="text-xl font-semibold text-gray-800">
          Online & Offline Ordering
        </h3>
        <p className="mt-2 text-gray-600">
          Order plants online via Call or WhatsApp or visit our nursery offline.
        </p>
      </div>

    </div>
  </div>
</section>

 <AboutUs />
 <section className="bg-green-700 py-14">
  <div className="max-w-6xl mx-auto px-4 text-center text-white">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold">
      Online & Offline Availability
    </h2>

    {/* Description */}
    <p className="mt-4 text-lg text-green-100 max-w-3xl mx-auto">
      Groway Horticulture provides services both online and offline.
      You can order plants and gardening services online or visit our office
      directly for offline support. Groway Horticulture services are available
      across India.
    </p>

    {/* Address */}
    <div className="mt-6 bg-green-600/40 rounded-2xl p-5 max-w-3xl mx-auto">
      <p className="text-green-100 text-lg font-semibold">
        📍 Office Address
      </p>
      <p className="mt-2 text-green-50">
        Groway Horticulture, <br />
        Jhall to Salfa Road /  Jahll, <br />
        Shamli – Uttar Pradesh, 247776
      </p>
    </div>

    {/* CTA Buttons */}
    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

      {/* Call Button */}
      <a
        href="tel:+919876543210"
        className="bg-white text-green-700 font-semibold px-8 py-3 rounded-full hover:bg-green-100 transition"
      >
        📞 Call Now
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        className="bg-green-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-green-600 transition"
      >
        💬 WhatsApp Chat
      </a>

      {/* Visit Office Button */}
      <a
        href="https://www.google.com/maps/place/Groway+Horticulture/@29.3955909,77.3341133,17z/data=!4m14!1m7!3m6!1s0x390c2f0e953a2adf:0x4aff7e53b4837326!2sGroway+Horticulture!8m2!3d29.3955863!4d77.3366882!16s%2Fg%2F11y9qbmr24!3m5!1s0x390c2f0e953a2adf:0x4aff7e53b4837326!8m2!3d29.3955863!4d77.3366882!16s%2Fg%2F11y9qbmr24?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        className="bg-green-800 text-white font-semibold px-8 py-3 rounded-full hover:bg-green-900 transition"
      >
        📍 Visit Office
      </a>

    </div>
  </div>
</section>
 
      </main>
    </div>
  );
}
