"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const slides = [
  {
    id: 1,
    title: "Safety First Priority",
    subtitle: "Professional Safety Solutions",
    description:
      "SEROW ESSENTRON PVT LTD specializes in high-quality safety footwear and equipment. Serving 325+ schools, 100+ medical colleges, and 200+ industries across Andhra Pradesh.",
    image: "/catalog-safety-footwear.png",
    bgColor: "bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900",
  },
  {
    id: 2,
    title: "Healthcare Excellence",
    subtitle: "Medical Professional Footwear",
    description:
      "Specialized healthcare footwear designed for medical professionals. Complete range including WELCRO, LAYES, CANVAS, CLOGS with APRON and ORTHO accessories.",
    image: "/catalog-healthcare-footwear.png",
    bgColor: "bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900",
  },
  {
    id: 3,
    title: "School Solutions",
    subtitle: "Quality Educational Footwear",
    description:
      "Authorized distributor for renowned brands like Paragon, Asian, and Jindal. Comprehensive school footwear solutions designed for comfort and durability.",
    image: "/catalog-school-overview.png",
    bgColor: "bg-gradient-to-br from-zinc-900 via-slate-800 to-zinc-900",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-screen overflow-hidden mt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/3 rounded-full blur-2xl animate-float"></div>
      </div>

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <div className={`${slide.bgColor} h-full relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black/20" />

            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Content */}
                  <div className="text-white space-y-6 lg:space-y-8 order-2 lg:order-1">
                    <div
                      className={`transition-all duration-1000 delay-300 ${
                        isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                      }`}
                    >
                      <div className="flex items-center space-x-2 mb-4 lg:mb-6">
                        <Sparkles className="h-5 w-5 lg:h-6 lg:w-6 text-yellow-400 animate-pulse" />
                        <span className="text-yellow-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
                          Premium Quality
                        </span>
                      </div>

                      <h1 className="hero-text font-bold mb-4 lg:mb-6 leading-tight">{slide.title}</h1>

                      <h2 className="hero-subtitle text-gray-300 font-light mb-4 lg:mb-8">{slide.subtitle}</h2>

                      <p className="hero-description leading-relaxed text-gray-200 max-w-xl mb-6 lg:mb-12">
                        {slide.description}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6">
                        <Link href="/products">
                          <Button
                            size="lg"
                            className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100 font-semibold px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 transform group"
                          >
                            Explore Products
                            <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </Link>
                        <Link href="/contact">
                          <Button
                            size="lg"
                            variant="outline"
                            className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg rounded-xl transition-all duration-300 bg-transparent hover:shadow-2xl hover:scale-105 transform"
                          >
                            Get Quote
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative order-1 lg:order-2">
                    <div
                      className={`transition-all duration-1000 delay-500 ${
                        isLoaded ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                      }`}
                    >
                      <img
                        src={slide.image || "/placeholder.svg"}
                        alt={slide.title}
                        className="w-full h-auto max-h-80 lg:max-h-96 object-contain rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 hover:rotate-1"
                      />
                      <div className="absolute -inset-6 bg-gradient-to-r from-white/10 to-white/5 rounded-3xl blur-2xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 rounded-full w-10 h-10 lg:w-12 lg:h-12 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 rounded-full w-10 h-10 lg:w-12 lg:h-12 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110"
        onClick={nextSlide}
      >
        <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 lg:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-8 lg:w-12 h-2 lg:h-3 bg-white shadow-lg"
                : "w-2 lg:w-3 h-2 lg:h-3 bg-white/50 hover:bg-white/70 hover:scale-125"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 lg:bottom-8 right-6 lg:right-8 animate-bounce">
        <div className="w-5 h-8 lg:w-6 lg:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 lg:h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
