import Image from "next/image";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutUs from "@/components/AboutUs";
export const metadata = {
  title: "Groway Horticulture | Online Plant Nursery, Seeds & Garden Plants in India",
  description:
    "Buy indoor, outdoor, flower & fruit plants from Groway Horticulture. Quality seeds and garden plants available. Call or WhatsApp to order today.",
};


export default function Home() {
  return (
    <div>
      <main>
 <Categories/>
 <FeaturedProducts />
 <AboutUs />
 
      </main>
    </div>
  );
}
