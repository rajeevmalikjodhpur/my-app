export const metadata = {
    title: "Contact Us | Groway Horticulture",
    description:
      "Get in touch with Groway Horticulture Pvt. Ltd. for plants, seeds and gardening products. Call, email or visit us.",
  };
  
  export default function ContactUs() {
    return (
      <section className="w-full bg-gray-50 py-10 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-10">
  
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
            Contact Us
          </h1>
  
          <p className="text-gray-700 mb-8 text-lg">
            We would love to hear from you 🌱  
            Reach out to <strong>Groway Horticulture Pvt. Ltd.</strong> using the
            details below for any product queries, support or business enquiries.
          </p>
  
          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
  
            <div>
              <h2 className="text-2xl font-semibold text-green-600 mb-4">
                Our Office
              </h2>
  
              <ul className="space-y-4 text-gray-700">
                <li>
                  📍 <strong>Address:</strong><br />
                  Groway Horticulture Pvt. Ltd.<br />
                  Jhall to Salfa Road,Jahll, Shamli,Uttar Pradesh, 247776
                  </li>
  
                <li>
                  📞 <strong>Phone:</strong><br />
                  <a href="tel:+919520712211" className="text-green-700 hover:underline">
                    +91 9520712211
                  </a>
                </li>
  
                <li>
                  📧 <strong>Email:</strong><br />
                  <a
                    href="mailto:info@growayhorticulture.com"
                    className="text-green-700 hover:underline"
                  >
                    info@growayhorticulture.com
                  </a>
                </li>
  
                <li>
                  🕒 <strong>Working Hours:</strong><br />
                  Monday – Saturday<br />
                  8:00 AM – 06:00 PM
                </li>
              </ul>
            </div>
  
            {/* Map */}
            <div className="w-full h-[300px] rounded-lg overflow-hidden border">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.1355346245123!2d77.33411327460428!3d29.395590949023138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c2f0e953a2adf%3A0x4aff7e53b4837326!2sGroway%20Horticulture!5e0!3m2!1sen!2sin!4v1767682395567!5m2!1sen!2sin"
    className="w-full h-full"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
          </div>
  
          {/* Support Note */}
          <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-md text-gray-700">
            For bulk orders, nursery partnerships, or dealership enquiries,
            please contact us during working hours. Our team will be happy to
            assist you.
          </div>
  
          <div className="mt-8 text-sm text-gray-500 border-t pt-4">
            © {new Date().getFullYear()} Groway Horticulture Pvt. Ltd. All rights
            reserved.
          </div>
        </div>
      </section>
    );
  }
  