export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are a leading agricultural enterprise committed to transforming communities through sustainable farming
            practices, quality produce, and comprehensive training programs.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-19%20at%202.52.45%20PM%20%281%29-oQMCEQAAkE92ZiF3d22rwC3iF3XS8a.jpeg"
                alt="Agricultural Training Program"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
            <h3 className="text-xl font-semibold text-emerald-600 mb-4">Our Mission</h3>
            <p className="mb-6">
              To provide sustainable agricultural solutions that enhance food security, create economic opportunities,
              and build resilient communities through innovative farming practices and comprehensive training programs.
            </p>

            <h3 className="text-xl font-semibold text-emerald-600 mb-4">Why Choose Us</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                <span>Over a decade of experience in sustainable agriculture</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                <span>Proven track record with 2,000+ trained individuals</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                <span>Commitment to environmental sustainability and community impact</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                <span>Comprehensive support from farm setup to market access</span>
              </li>
            </ul>

            <p>
              Our team of agricultural experts, trainers, and consultants work tirelessly to ensure that every project
              we undertake contributes to building a more sustainable and food-secure future for all.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
