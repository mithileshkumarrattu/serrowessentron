"use client"

import { useEffect, useRef } from "react"

const brands = [
  {
    name: "Asian",
    logo: "/brands/asian-logo.png",
    tagline: "Swag in Every Step",
    description: "Premium school and casual footwear",
  },
  {
    name: "Paragon",
    logo: "/brands/paragon-logo.png",
    tagline: "Walk in Style, Everywhere You Go",
    description: "Quality footwear for all occasions",
  },
  {
    name: "Jindal",
    logo: "/catalog-jindal-brand.png",
    tagline: "Cool Style, Cooler Feet",
    description: "Comfortable and stylish shoes",
  },
]

export function TrustedBrands() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
    }

    const interval = setInterval(scroll, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Trusted Brand Partners</h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Official distributor for leading footwear brands across India, ensuring authentic products and reliable
            service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover group"
            >
              <div className="text-center">
                <div className="mb-6 h-16 lg:h-20 flex items-center justify-center">
                  <img
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">{brand.name}</h3>
                <p className="text-gray-600 italic mb-3 text-sm lg:text-base">{brand.tagline}</p>
                <p className="text-xs lg:text-sm text-gray-500">{brand.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center">
          {[
            { label: "School Clients", value: "325+", color: "text-blue-600" },
            { label: "Medical Colleges", value: "100+", color: "text-green-600" },
            { label: "Industries", value: "200+", color: "text-purple-600" },
            { label: "Brand Partners", value: "3+", color: "text-orange-600" },
          ].map((stat, index) => (
            <div key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-gray-600 text-sm lg:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
