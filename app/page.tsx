import { HeroSection } from "@/components/hero-section"
import { TrustedBrands } from "@/components/trusted-brands"
import { Button } from "@/components/ui/button"
import CurvedLoop from "@/components/ui/curved-loop"
import ShinyText from "@/components/ui/shiny-text"
import { Users, Award, ArrowRight, CheckCircle, Star } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Animated Text Loop */}
      <section className="py-8 bg-white border-b border-gray-100">
        <CurvedLoop
          marqueeText="SEROW ESSENTRON ✦ QUALITY FOOTWEAR ✦ TRUSTED PARTNER ✦ PREMIUM SOLUTIONS ✦"
          speed={2}
          direction="left"
          className="text-gray-900 font-bold text-lg lg:text-2xl"
        />
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 mb-4 lg:mb-6">
                <Star className="h-4 w-4 lg:h-5 lg:w-5 text-gray-900 animate-pulse" />
                <span className="text-gray-900 font-semibold text-xs lg:text-sm uppercase tracking-wider">
                  About Us
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                <ShinyText text="Serow Essentron Pvt. Ltd." speed={4} className="text-gray-900" />
              </h2>

              <div className="space-y-4 lg:space-y-6 text-base lg:text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-900">SEROW ESSENTRON PVT LTD</strong> is a prominent name in the footwear
                  industry, specializing in high-quality safety shoes. Located in Andhra Pradesh, we have established
                  ourselves as a trusted supplier for educational institutions and industries.
                </p>
                <p>
                  Our strong foothold allows us to serve more than{" "}
                  <strong className="text-gray-900">325 school clients</strong>,{" "}
                  <strong className="text-gray-900">100+ Medical & Nursing colleges</strong>, and{" "}
                  <strong className="text-gray-900">200+ Pharma and Other industries</strong> across the region.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4">
                {[
                  { icon: CheckCircle, text: "Quality Assured", color: "text-green-600" },
                  { icon: Award, text: "Certified Products", color: "text-blue-600" },
                  { icon: Users, text: "Trusted Partner", color: "text-purple-600" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 lg:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 animate-fadeIn"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <item.icon className={`h-5 w-5 lg:h-6 lg:w-6 ${item.color}`} />
                    <span className="font-semibold text-gray-900 text-sm lg:text-base">{item.text}</span>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <Button size="lg" className="btn-professional px-6 lg:px-8 py-3 lg:py-4 group animate-slideIn">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="relative order-1 lg:order-2 animate-fadeIn">
              <img
                src="/catalog-school-overview.png"
                alt="About Serow Essentron"
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-200/20 to-gray-300/20 rounded-3xl blur-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands */}
      <TrustedBrands />

      {/* Product Categories Preview */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <ShinyText text="Our Product Categories" speed={3} className="text-gray-900" />
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive footwear solutions for every industry and application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Safety Footwear",
                description: "Industrial safety shoes and protective equipment",
                image: "/catalog-safety-footwear.png",
                link: "/products?category=safety",
              },
              {
                title: "Healthcare Footwear",
                description: "Specialized medical and nursing footwear",
                image: "/catalog-healthcare-footwear.png",
                link: "/products?category=healthcare",
              },
              {
                title: "School Footwear",
                description: "Quality educational footwear solutions",
                image: "/catalog-school-overview.png",
                link: "/products?category=school",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover group animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-48 lg:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm lg:text-base">{category.description}</p>
                  <Link href={category.link}>
                    <Button className="w-full btn-professional group">
                      View Products
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gray-900 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 lg:mb-8">
            <ShinyText text="Ready to Get Started?" speed={3} className="text-white" />
          </h2>
          <p className="text-lg lg:text-xl mb-8 lg:mb-12 text-gray-300 leading-relaxed">
            Contact us today for bulk orders, custom requirements, or to learn more about our comprehensive footwear
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100 font-semibold px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg rounded-lg group animate-slideIn"
              >
                Get Quote Now
                <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg rounded-lg bg-transparent animate-slideIn"
                style={{ animationDelay: "0.1s" }}
              >
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
