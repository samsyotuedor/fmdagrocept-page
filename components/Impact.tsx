"use client"

import { useEffect, useState } from "react"

export default function Impact() {
  const [counts, setCounts] = useState({
    youth: 0,
    fish: 0,
    clients: 0,
  })

  const finalCounts = {
    youth: 2000,
    fish: 30,
    clients: 40,
  }

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    const counters = Object.keys(finalCounts).map((key) => {
      const finalCount = finalCounts[key as keyof typeof finalCounts]
      const increment = finalCount / steps
      let currentCount = 0

      return setInterval(() => {
        currentCount += increment
        if (currentCount >= finalCount) {
          currentCount = finalCount
          clearInterval(counters.find((c) => c === counters[Object.keys(finalCounts).indexOf(key)]))
        }
        setCounts((prev) => ({
          ...prev,
          [key]: Math.floor(currentCount),
        }))
      }, stepDuration)
    })

    return () => {
      counters.forEach(clearInterval)
    }
  }, [])

  const stats = [
    {
      id: "youth",
      name: "Youth & Women Trained",
      value: counts.youth,
      suffix: "+",
      description: "Empowered through our comprehensive training programs",
      icon: "👥",
    },
    {
      id: "fish",
      name: "Tonnes of Fish Produced",
      value: counts.fish,
      suffix: "+",
      description: "Fresh fish delivered from our sustainable aquaculture farms",
      icon: "🐟",
    },
    {
      id: "clients",
      name: "Clients Served Successfully",
      value: counts.clients,
      suffix: "+",
      description: "Satisfied clients across various agricultural projects",
      icon: "🤝",
    },
  ]

  return (
    <section id="impact" className="py-24 sm:py-32 bg-gradient-to-br from-emerald-600 to-blue-600">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Impact</h2>
          <p className="mt-4 text-lg leading-8 text-emerald-100">
            Creating sustainable change through agriculture, training, and community empowerment
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center text-center">
                <div className="text-6xl mb-4">{stat.icon}</div>
                <dt className="text-base font-semibold leading-7 text-emerald-100">{stat.name}</dt>
                <dd className="order-first text-5xl font-bold tracking-tight text-white sm:text-6xl">
                  {stat.value.toLocaleString()}
                  {stat.suffix}
                </dd>
                <dd className="mt-4 text-base leading-7 text-emerald-100 max-w-xs">{stat.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        {/* Training images section */}
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-19%20at%202.52.46%20PM%20%281%29-wLs2faWt6DVubU41SLFdOjCq6XdmAY.jpeg"
                alt="Youth Training in Agriculture"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h4 className="font-semibold text-emerald-600">Hands-On Training</h4>
                <p className="text-sm text-gray-600 mt-2">Youth learning practical agriculture skills</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-19%20at%204.46.49%20PM-BE75WNAExHWouwk9zIlYgwBe65igtb.jpeg"
                alt="Entrepreneur Academy Graduates"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h4 className="font-semibold text-emerald-600">Success Stories</h4>
                <p className="text-sm text-gray-600 mt-2">Entrepreneur Academy graduates</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-19%20at%202.52.46%20PM%20%282%29-IhAhlyMqVLv9l4rQ7oNnijXcLbS4A2.jpeg"
                alt="Business Support Program"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h4 className="font-semibold text-emerald-600">Business Support</h4>
                <p className="text-sm text-gray-600 mt-2">Accelerator program achievements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
