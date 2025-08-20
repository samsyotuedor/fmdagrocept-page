export default function Gallery() {
  const galleryImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-19%20at%202.52.46%20PM%20%281%29-wLs2faWt6DVubU41SLFdOjCq6XdmAY.jpeg",
      alt: "Youth Agricultural Training",
      category: "Training",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-19%20at%202.52.45%20PM%20%281%29-oQMCEQAAkE92ZiF3d22rwC3iF3XS8a.jpeg",
      alt: "Community Training Program",
      category: "Training",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-19%20at%201.25.25%20PM-ZEKpW1A1qoB4mI5HkupniDFY15qTRf.jpeg",
      alt: "Seedling Production",
      category: "Products",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-19%20at%202.56.48%20PM-M5opkPfzJAIIOVWSWdVHH5F5J3Qo1O.jpeg",
      alt: "Packaged Smoked Catfish",
      category: "Products",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-19%20at%201.26.58%20PM-VBokZoFPExveBEOTOqWsyl2o1UJ91w.jpeg",
      alt: "Fresh Grilled Fish",
      category: "Products",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-19%20at%201.25.22%20PM-g3BxFVGZ4LamB6jvDQixrWfFVSsvLq.jpeg",
      alt: "Fresh Tomato Harvest",
      category: "Products",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-19%20at%201.26.59%20PM-Vyv0t4G3A7RuaF0YfPvedNs0QOXpOY.jpeg",
      alt: "Fresh Catfish",
      category: "Products",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-19%20at%204.46.49%20PM-BE75WNAExHWouwk9zIlYgwBe65igtb.jpeg",
      alt: "Entrepreneur Academy",
      category: "Training",
    },
  ]

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Work in Action</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            See our impact through training programs, fresh produce, and community development
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gray-50 hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-emerald-600 rounded-full mb-2">
                  {image.category}
                </span>
                <p className="text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
