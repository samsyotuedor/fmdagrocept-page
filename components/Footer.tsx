export default function Footer() {
  const navigation = {
    main: [
      { name: "Home", href: "#home" },
      { name: "Products", href: "#products" },
      { name: "Services", href: "#services" },
      { name: "Impact", href: "#impact" },
      { name: "About", href: "#about" },
      { name: "Contact", href: "#contact" },
    ],
    products: [
      { name: "Aquaculture", href: "#products" },
      { name: "Crops", href: "#products" },
      { name: "Horticulture", href: "#products" },
    ],
    services: [
      { name: "Training Programs", href: "#services" },
      { name: "Consultancy", href: "#services" },
      { name: "Farm Construction", href: "#services" },
      { name: "Equipment Supply", href: "#services" },
    ],
  }

  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-19%20at%201.29.18%20PM-pXOmC8sRldoJum1GPxqMJIAWdnALra.jpeg"
                alt="FMD Agro Concept"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm leading-6 text-gray-300">
              Transforming communities through sustainable agriculture, quality produce, and comprehensive training
              programs.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <div className="h-6 w-6 bg-current rounded"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <div className="h-6 w-6 bg-current rounded"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <div className="h-6 w-6 bg-current rounded"></div>
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Products</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.products.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-emerald-400 transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-emerald-400 transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-emerald-400 transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">&copy; 2024 FMD Agro Concept. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
