"use client"

import { useEffect, useRef } from "react"
import ShinyText from "@/components/ui/shiny-text"
import { Star } from "lucide-react"

const brands = [
  { name: "Asian", logo: "/brands/asian-logo.png", tagline: "Swag in Every Step" },
  { name: "Paragon", logo: "/brands/paragon-logo.png", tagline: "Walk in Style, Everywhere You Go" },
  { name: "Jindal", logo: "/catalog-jindal-brand.png", tagline: "Cool Style, Cooler Feet" },
  { name: "Hi-Son", logo: "/catalog-construction-overview.png", tagline: "Industrial Safety" },
  { name: "Liberty", logo: "/catalog-construction-overview.png", tagline: "Quality Footwear" },
  { name: "Tiger", logo: "/catalog-safety-footwear.png", tagline: "Safety First" },
]

export function BrandPartners() {
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

    const interval = setInterval(scroll, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 lg:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 mb-6">
            <Star className="h-5 w-5 text-yellow-400 animate-pulse" />
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Authorized Partners</span>
            <Star className="h-5 w-5 text-yellow-400 animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            <ShinyText
              text="Trusted Brand Partners"
              speed={3}
              className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text"
            />
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Official distributor for leading footwear brands across India, ensuring authentic products and reliable
            service
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm shadow-2xl border border-white/10">
          <div ref={scrollRef} className="flex space-x-8 lg:space-x-12 py-12" style={{ width: "calc(200% + 4rem)" }}>
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 lg:w-80 h-40 lg:h-48 flex flex-col items-center justify-center bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-6 group hover:scale-105 transform"
              >
                <img
                  src={brand.logo || "/placeholder.svg"}
                  alt={brand.name}
                  className="max-w-full max-h-24 object-contain mb-4 filter group-hover:filter-none transition-all duration-500"
                />
                <div className="text-center">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{brand.name}</h3>
                  <p className="text-sm text-gray-600 italic">{brand.tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {[
            { label: "School Clients", value: "325+", color: "text-green-400" },
            { label: "Medical Colleges", value: "100+", color: "text-blue-400" },
            { label: "Industries", value: "200+", color: "text-purple-400" },
            { label: "Brand Partners", value: "10+", color: "text-yellow-400" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-gray-300 text-sm lg:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
