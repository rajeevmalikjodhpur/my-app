  
  export default function AboutUs() {
    return (
      <section className="w-full bg-gray-50 py-10 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-10">
          
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
            About Us
          </h1>
  
          <p className="text-gray-700 mb-6 text-lg">
            Welcome to <strong>Groway Horticulture Pvt. Ltd.</strong> – your
            one-stop destination for quality plants, seeds, gardening products
            and complete horticulture solutions.
          </p>
  
          {/* Who We Are */}
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            Who We Are
          </h2>
          <p className="text-gray-700 mb-6">
            Groway Horticulture Pvt. Ltd. is an India-based horticulture company
            committed to promoting greenery, sustainable gardening and healthy
            living. We specialize in indoor plants, outdoor plants, flower seeds,
            pots, gardening accessories and plant nutrition products.
          </p>
  
          {/* Our Mission */}
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            Our Mission
          </h2>
          <p className="text-gray-700 mb-6">
            Our mission is to make gardening easy, affordable and accessible to
            everyone. We aim to deliver high-quality horticulture products that
            help people grow plants effortlessly at home, gardens, farms and
            commercial spaces.
          </p>
  
          {/* Our Vision */}
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            Our Vision
          </h2>
          <p className="text-gray-700 mb-6">
            We envision a greener and healthier future by encouraging plantation,
            urban gardening and eco-friendly practices across India.
          </p>
  
          {/* Why Choose Us */}
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            Why Choose Groway Horticulture?
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Premium quality plants, seeds and gardening products</li>
            <li>Carefully packed and quality-checked shipments</li>
            <li>Affordable pricing with transparent policies</li>
            <li>Customer-centric support and guidance</li>
            <li>Trusted by gardeners, nurseries and plant lovers</li>
          </ul>
  
          {/* What We Offer */}
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            What We Offer
          </h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 mb-6">
            <li>🌱 Indoor & Outdoor Plants</li>
            <li>🌼 Flower & Vegetable Seeds</li>
            <li>🪴 Plastic & Ceramic Pots</li>
            <li>🌿 Gardening Tools & Accessories</li>
            <li>💧 Plant Nutrients & Soil Solutions</li>
          </ul>
  
          {/* Commitment */}
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            Our Commitment
          </h2>
          <p className="text-gray-700 mb-6">
            We are committed to delivering fresh, healthy and authentic
            horticulture products. Every order is handled with care to ensure
            customer satisfaction and long-term trust.
          </p>
  
          {/* Contact */}
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            Get in Touch
          </h2>
          <p className="text-gray-700">
            📧 Email: <strong>info@growayhorticulture.com</strong><br />
            📞 Phone: <strong>+91 9520712211</strong><br />
            🕒 Working Hours: Monday to Saturday (8:00 AM – 06:00 PM)
          </p>
  
          <div className="mt-8 text-sm text-gray-500 border-t pt-4">
            © {new Date().getFullYear()} Groway Horticulture Pvt. Ltd. All rights
            reserved.
          </div>
        </div>
      </section>
    );
  }
  