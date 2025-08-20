export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-emerald-50 to-blue-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Fresh Produce. Expert Training.
            <span className="text-emerald-600"> Real Impact.</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            FMD Agro Concept is a leading provider of aquaculture, crops, and horticulture solutions. We deliver fresh
            produce, comprehensive training, and sustainable agricultural practices that create lasting impact in
            communities.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#products"
              className="rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-colors"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-emerald-600 transition-colors"
            >
              Contact Us <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-emerald-400 to-blue-400 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </section>
  )
}
