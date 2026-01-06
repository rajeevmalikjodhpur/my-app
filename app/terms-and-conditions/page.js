  export default function TermsAndConditions() {
    return (
      <section className="w-full bg-gray-50 py-10 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-10">
          
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
            Terms & Conditions
          </h1>
  
          <p className="text-gray-700 mb-6">
            Please read the below points carefully to understand the expressions
            under each circumstance before having a wonderful shopping experience
            with <strong>Groway Horticulture Pvt. Ltd.</strong>
          </p>
  
          {/* Definitions */}
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            Definitions
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li><strong>Buyer:</strong> Person who buys goods from the Seller</li>
            <li><strong>Seller:</strong> growayhorticulture.com</li>
            <li><strong>Goods:</strong> Products offered for sale on the website</li>
            <li><strong>List Price:</strong> Prices listed on the website</li>
            <li>
              <strong>Terms & Conditions:</strong> Rules mentioned in this document
            </li>
          </ul>
  
          {/* Website Usage */}
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            Website Usage
          </h2>
          <p className="text-gray-700 mb-6">
            By accessing or making a purchase on growayhorticulture.com, you agree
            to be bound by these Terms & Conditions. Groway Horticulture reserves
            the right to update or modify these terms at any time without prior
            notice.
          </p>
  
          {/* Limitations */}
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            Limitations of Liability
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>
              Seller shall not be responsible for any direct or indirect loss,
              damage, or profit loss.
            </li>
            <li>
              Orders may be cancelled by the seller without assigning any reason.
            </li>
            <li>
              Placing an order means acceptance of these Terms & Conditions.
            </li>
          </ul>
  
          {/* Warranty */}
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            Warranty
          </h2>
          <p className="text-gray-700 mb-6">
            Goods delivered shall match the description provided on the website.
            Any change shall require buyer approval.
          </p>
  
          {/* Pricing & Delivery */}
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            Price, Payment & Delivery
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>All prices are inclusive of applicable taxes.</li>
            <li>Delivery is subject to availability.</li>
            <li>Cash on Delivery is available for home delivery orders.</li>
            <li>
              Risk transfers to the buyer once invoice is generated.
            </li>
          </ul>
  
          {/* Force Majeure */}
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            Force Majeure
          </h2>
          <p className="text-gray-700 mb-6">
            Groway Horticulture shall not be liable for delay or failure due to
            events beyond reasonable control such as natural disasters, strikes,
            or war.
          </p>
  
          {/* Governing Law */}
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            Governing Law & Jurisdiction
          </h2>
          <p className="text-gray-700 mb-6">
            These terms shall be governed by Indian laws and jurisdiction shall
            lie with courts at <strong>Jodhpur, Rajasthan</strong>.
          </p>
  
          {/* Privacy */}
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            Privacy Policy
          </h2>
          <p className="text-gray-700 mb-6">
            Personal data shared with us is protected and used only as per the
            Information Technology Act, 2000.
          </p>
  
          {/* Contact */}
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            Contact & Grievance
          </h2>
          <p className="text-gray-700">
            📧 Email: <strong>info@growayhorticulture.com</strong><br />
            📞 Phone: <strong>+91 9520712211</strong><br />
            🕒 Timing: Monday to Saturday (8:00 AM – 06:00 PM)
          </p>
  
          <div className="mt-8 text-sm text-gray-500 border-t pt-4">
            © {new Date().getFullYear()} Groway Horticulture Pvt. Ltd. All rights
            reserved.
          </div>
        </div>
      </section>
    );
  }
  