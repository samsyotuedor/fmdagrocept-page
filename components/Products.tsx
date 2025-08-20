export default function Products() {
  const aquaculture = [
    {
      name: "Fresh Catfish",
      description: "Premium quality fresh catfish from our sustainable farms",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-19%20at%201.26.59%20PM-Vyv0t4G3A7RuaF0YfPvedNs0QOXpOY.jpeg",
    },
    {
      name: "Smoked Catfish",
      description: "Expertly smoked catfish with authentic traditional methods",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-19%20at%202.56.48%20PM-M5opkPfzJAIIOVWSWdVHH5F5J3Qo1O.jpeg",
    },
    {
      name: "Tilapia",
      description: "Fresh tilapia raised in controlled aquaculture environments",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-19%20at%201.26.58%20PM-VBokZoFPExveBEOTOqWsyl2o1UJ91w.jpeg",
    },
    {
      name: "Wesafu",
      description: "High-quality wesafu fish for diverse culinary applications",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-19%20at%201.25.24%20PM%20%281%29-wlyWK9ZgmIOvsyumt46FSA3viipcu6.jpeg",
    },
  ]

  const crops = [
    { name: "Cassava", description: "High-yield cassava varieties for food and industrial use" },
    { name: "Rice", description: "Premium rice varieties grown with sustainable farming practices" },
    { name: "Yam", description: "Quality yam tubers from our certified organic farms" },
  ]

  const horticulture = [
    { name: "Bell Peppers", description: "Fresh, colorful bell peppers grown in controlled environments" },
    {
      name: "Tomatoes",
      description: "Vine-ripened tomatoes with exceptional flavor and nutrition",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-19%20at%201.25.22%20PM-g3BxFVGZ4LamB6jvDQixrWfFVSsvLq.jpeg",
    },
    {
      name: "Habanero",
      description: "Premium hot peppers for culinary and processing applications",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-19%20at%201.25.25%20PM-ZEKpW1A1qoB4mI5HkupniDFY15qTRf.jpeg",
    },
  ]

  return (
    <section id="products" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Products</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Fresh, sustainable, and high-quality agricultural products from our farms to your table
          </p>
        </div>

        {/* Aquaculture */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-emerald-600 mb-8">🐟 Aquaculture</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {aquaculture.map((product) => (
              <div
                key={product.name}
                className="group relative bg-gray-50 rounded-2xl p-6 hover:bg-emerald-50 transition-colors"
              >
                <div className="aspect-square w-full rounded-xl overflow-hidden mb-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">{product.name}</h4>
                <p className="mt-2 text-sm text-gray-600">{product.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Crops */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-emerald-600 mb-8">🌾 Crops</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {crops.map((product) => (
              <div
                key={product.name}
                className="group relative bg-gray-50 rounded-2xl p-6 hover:bg-emerald-50 transition-colors"
              >
                <div className="aspect-square w-full rounded-xl bg-amber-100 mb-4 flex items-center justify-center">
                  <div className="text-4xl">🌾</div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">{product.name}</h4>
                <p className="mt-2 text-sm text-gray-600">{product.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Horticulture */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-emerald-600 mb-8">🍅 Horticulture</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {horticulture.map((product) => (
              <div
                key={product.name}
                className="group relative bg-gray-50 rounded-2xl p-6 hover:bg-emerald-50 transition-colors"
              >
                <div className="aspect-square w-full rounded-xl overflow-hidden mb-4">
                  {product.image ? (
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-4xl">🍅</div>
                  )}
                </div>
                <h4 className="text-lg font-semibold text-gray-900">{product.name}</h4>
                <p className="mt-2 text-sm text-gray-600">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
