export const metadata = {
    title: "Groway Horticulture Blog",
    description: "Groway horticulture blog आप को horticulture से related सभी जानकारी provide करायी जाऐगी ."
  };

  const posts = [
    {
      title: "Dieffenbachia Plant की पूरी जानकारी",
      description:
        "Dieffenbachia एक सुंदर indoor plant है। जानिए इसे घर, office और balcony में कैसे लगाएं और इसकी सही देखभाल कैसे करें।",
      slug: "dieffenbachia-plant"
    },
    {
      title: "Chrysanthemum Flower Seeds कैसे उगाएं",
      description:
        "Chrysanthemum flower seeds से पौधा तैयार करने की पूरी जानकारी। जानिए मिट्टी, पानी, sunlight और planting का सही तरीका।",
      slug: "chrysanthemum-flower-seeds"
    },
    {
      title: "Indoor Plants के लिए सही Care Tips",
      description:
        "Indoor plants को healthy रखने के लिए sunlight, watering, soil और fertilizer से जुड़ी जरूरी जानकारी यहां पढ़ें।",
      slug: "indoor-plants-care-tips"
    },
    {
      title: "Garden के लिए Best Flower Plants",
      description:
        "अपने garden को खूबसूरत बनाने के लिए अलग-अलग प्रकार के flower plants के बारे में जानें और सही plant चुनें।",
      slug: "best-flower-plants-for-garden"
    },
    {
      title: "Plants के लिए सही मिट्टी कैसे चुनें",
      description:
        "अलग-अलग plants के लिए किस प्रकार की soil बेहतर होती है और अच्छी growth के लिए soil तैयार करने का सही तरीका क्या है।",
      slug: "best-soil-for-plants"
    },
    {
      title: "Plants को कितनी Sunlight चाहिए?",
      description:
        "Indoor और outdoor plants के लिए sunlight कितनी जरूरी है? अलग-अलग plants की sunlight requirements के बारे में जानें।",
      slug: "plants-sunlight-requirement"
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
    Plants, seeds, gardening और plant care से जुड़ी उपयोगी जानकारी
    Groway Horticulture Blog पर पढ़ें।
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
  