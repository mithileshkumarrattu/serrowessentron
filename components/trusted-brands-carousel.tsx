"use client"

import { useEffect, useRef } from 'react'

const brands = [
  { name: "TechCorp Industries", logo: "/abstract-tech-logo.png" },
  { name: "SafeGuard Solutions", logo: "/safety-company-logo.png" },
  { name: "Military Contractors", logo: "/military-contractor-logo.png" },
  { name: "Industrial Partners", logo: "/industrial-logo.png" },
  { name: "Construction Corp", logo: "/construction-company-logo.png" },
  { name: "Defense Systems", logo: "/abstract-tech-logo.png" },
]

export function TrustedBrandsCarousel() {
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Brands Nationwide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join hundreds of companies that trust Serow Essentron for their industrial footwear needs
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
          <div
            ref={scrollRef}
            className="flex space-x-8 animate-scroll py-8"
            style={{ width: 'calc(200% + 2rem)' }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-24 flex items-center justify-center bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 card-hover"
              >
                <img
                  src={brand.logo || "/placeholder.svg"}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
