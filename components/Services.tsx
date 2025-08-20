import {
  AcademicCapIcon,
  DocumentTextIcon,
  WrenchScrewdriverIcon,
  BuildingOfficeIcon,
  TruckIcon,
} from "@heroicons/react/24/outline"

export default function Services() {
  const services = [
    {
      name: "Agriculture Training",
      description:
        "Comprehensive training programs for youth and women in modern farming techniques, aquaculture, and sustainable agriculture practices.",
      icon: AcademicCapIcon,
    },
    {
      name: "Proposal Writing & Consultancy",
      description:
        "Expert consultancy services and professional proposal writing for agricultural projects, grants, and business development.",
      icon: DocumentTextIcon,
    },
    {
      name: "Farm Construction & Setup",
      description:
        "Complete farm construction services including pond construction, greenhouse setup, and modern farming infrastructure.",
      icon: WrenchScrewdriverIcon,
    },
    {
      name: "MSMEs Capacity Building",
      description:
        "Capacity building programs for Micro, Small, and Medium Enterprises in the agricultural value chain.",
      icon: BuildingOfficeIcon,
    },
    {
      name: "Agricultural Inputs & Equipment Supply",
      description:
        "Supply of quality agricultural inputs, equipment, and tools for efficient and productive farming operations.",
      icon: TruckIcon,
    },
  ]

  return (
    <section id="services" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Comprehensive agricultural services designed to empower farmers and build sustainable communities
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex flex-col bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon className="h-8 w-8 flex-none text-emerald-600" aria-hidden="true" />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
