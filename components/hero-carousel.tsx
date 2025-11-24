"use client"

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const slides = [
  {
    id: 1,
    title: "Engineered for Safety",
    subtitle: "Crafted for Excellence",
    description: "Premium industrial footwear designed to protect and perform in the most demanding environments.",
    image: "/industrial-safety-shoes.png"
  },
  {
    id: 2,
    title: "Military Grade Protection",
    subtitle: "Built for Warriors",
    description: "Combat-ready footwear that meets the highest military standards for durability and performance.",
    image: "/military-combat-boots.png"
  },
  {
    id: 3,
    title: "Biker's Choice",
    subtitle: "Road Tested Excellence",
    description: "Premium motorcycle boots combining style, comfort, and protection for the ultimate riding experience.",
    image: "/motorcycle-biker-boots.png"
  }
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
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
    <div className="relative h-screen overflow-hidden">
      <div className="carousel-container h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-white max-w-5xl px-6">
                <div className="animate-slide-up">
                  <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <h2 className="text-3xl md:text-5xl font-light mb-8 gold-accent">
                    {slide.subtitle}
                  </h2>
                  <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link href="/products">
                      <Button size="lg" className="btn-elegant bg-gold hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg">
                        Explore Products
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button size="lg" className="btn-elegant btn-white border-2 border-white text-black hover:bg-gray-100 px-8 py-4 text-lg">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 rounded-full w-14 h-14 backdrop-blur-sm border border-white/20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 rounded-full w-14 h-14 backdrop-blur-sm border border-white/20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? 'w-12 h-3 bg-gold' 
                : 'w-3 h-3 bg-white/50 hover:bg-white/70'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
