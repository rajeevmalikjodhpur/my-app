export default function AboutUs() {
    return (
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
  
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
              About Groway Horticulture
            </h2>
  
            <p className="text-gray-700 mb-4 leading-relaxed">
              Groway Horticulture is a trusted nursery providing healthy plants,
              premium quality seeds, and gardening solutions for homes, farms,
              and green spaces. We believe that every plant deserves the right
              care and every customer deserves the best quality.
            </p>
  
            <h3 className="text-2xl font-semibold text-green-800 mb-3">
              Our Mission
            </h3>
  
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our mission is to promote greenery and sustainable living by
              supplying strong, disease-free plants and high-germination seeds.
              We aim to support gardeners, farmers, and plant lovers with
              reliable guidance and quality products.
            </p>
  
            <a
              href="/contact"
              className="inline-block bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition"
            >
              Contact Us
            </a>
          </div>
  
          {/* Why Choose Us */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-green-900 mb-6">
              Why Choose Us?
            </h3>
  
            <ul className="space-y-4 text-gray-700">
              <li>🌱 Healthy & well-grown plants</li>
              <li>🌾 High-quality seeds with better germination</li>
              <li>🚚 Safe packaging & timely delivery</li>
              <li>📞 Easy contact & personal guidance</li>
              <li>💚 Trusted by gardeners & farmers</li>
            </ul>
          </div>
  
        </div>
      </section>
    );
  }
  