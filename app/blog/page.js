export const metadata = {
    title: "Groway Horticulture Blog",
    description: "Groway horticulture blog आप को horticulture से related सभी जानकारी provide करायी जाऐगी ."
  };

  const posts = [
    {
      title: "best fertilizer for areca palm indoor plant",
      description:
        "We will tell you about the best fertilizers that you can use for your areca palm.",
      slug: "/best-fertilizer-for-areca-palm-indoor-plant"
    },
    {
        title: "areca palm pot size in inches",
        description:
          "Today, we will tell you how many inches of pot you should use for planting an areca palm plant.",
        slug: "/areca-palm-pot-size-in-inches"
      },
      {
        title: "how do cow dung and vegetable waste change into manure",
        description:
          "Today, we will tell you how cow dung and vegetable waste are converted into manure, and then you will also be able to make manure from cow dung and vegetable waste.",
        slug: "/how-do-cow-dung-and-vegetable-waste-change-into-manure"
      },
      {
        title: "how to grow karisalankanni at home",
        description:
          "How to Grow Karisalankanni at Home and How to Care for and Grow the Plant – Complete Step-by-Step Guide.",
        slug: "/how-to-grow-karisalankanni-at-home"
      },
      {
        title: "can you grow dieffenbachia in water without soil",
        description:
          "can you grow dieffenbachia in water without soil",
        slug: "#"
      }
  ];
  
  export default function BlogALLpost() {
    return (
      <main className="max-w-7xl mx-auto px-4 py-10">
         <div className="max-w-6xl mx-auto px-4">

{/* Heading */}
<div className="text-center mb-10">
  <h1 className="text-4xl font-bold text-gray-900">
    Groway Horticulture Blog
  </h1>

  <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
  Read useful information about plants, seeds, gardening, and horticulture on the Groway Horticulture Blog.
  </p>
</div>

{/* Blog Posts */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

  {posts.map((post, index) => (
    <article
      key={index}
      className="border border-gray-200 rounded-xl p-6 bg-white
      hover:shadow-lg transition duration-300"
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-3">
        {post.title}
      </h2>

      <p className="text-gray-600 leading-7 mb-6">
        {post.description}
      </p>

      <a
        href={`${post.slug}`}
        className="inline-block bg-green-600 text-white
        px-5 py-2.5 rounded-lg font-medium
        hover:bg-green-700 transition"
      >
        Read More →
      </a>
    </article>
  ))}

</div>
</div>
        
              </main>
    );
  }
  