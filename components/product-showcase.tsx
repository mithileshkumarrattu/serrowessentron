import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ShinyText from "@/components/ui/shiny-text"
import { ArrowRight, Shield, Heart, GraduationCap, HardHat } from "lucide-react"

const productCategories = [
  {
    id: "safety",
    title: "Safety Footwear & Equipment",
    description:
      "Complete range including TIGER, FREEDOM, WARRIOR, HILLSON, PANTHER, FENDER, 745, 746, CLOGS, 1182. Plus safety equipment: BOILER SUIT, SAFETY HARNESS, REFLECTING JACKET, TRAFFIC CONES, GLOVES, HELMET.",
    image: "/catalog-safety-footwear.png",
    icon: Shield,
    brands: ["Tiger", "Freedom", "Warrior", "Hillson", "Panther", "Fender"],
    gradient: "from-blue-500 to-blue-600",
    hoverGradient: "hover:from-blue-600 hover:to-blue-700",
  },
  {
    id: "healthcare",
    title: "Healthcare Footwear & Accessories",
    description:
      "Specialized medical footwear: WELCRO, LAYES, CANVAS, CLOGS, HAWAIA, BELLY, MERAVAS. Plus APRON and ORTHO accessories for comprehensive healthcare solutions.",
    image: "/catalog-healthcare-footwear.png",
    icon: Heart,
    brands: ["Welcro", "Layes", "Canvas", "Clogs", "Hawaia", "Belly"],
    gradient: "from-green-500 to-green-600",
    hoverGradient: "hover:from-green-600 hover:to-green-700",
  },
  {
    id: "school",
    title: "School Footwear Collection",
    description:
      "Comprehensive school shoes from authorized brands: Asian (CUSTOMISED, FUN TIME, B-12, MONITOR, RUN WELCRO, GOLA WELCRO, EXPO), Paragon (774, 795, 756, 755, 752, 751, 797), Jindal (GOLA WELCRO, SCHOOL GOLA WELCRO, SCHOOL SHOE LACE, TENNIS).",
    image: "/catalog-school-overview.png",
    icon: GraduationCap,
    brands: ["Asian", "Paragon", "Jindal"],
    gradient: "from-purple-500 to-purple-600",
    hoverGradient: "hover:from-purple-600 hover:to-purple-700",
  },
  {
    id: "industrial",
    title: "Industrial & Construction",
    description:
      "Heavy-duty solutions for construction and industrial environments. Partnered with Hi-Son, Liberty, and Tiger brands for comprehensive workplace safety and protection equipment.",
    image: "/catalog-construction-overview.png",
    icon: HardHat,
    brands: ["Hi-Son", "Liberty", "Tiger"],
    gradient: "from-orange-500 to-orange-600",
    hoverGradient: "hover:from-orange-600 hover:to-orange-700",
  },
]

export function ProductShowcase() {
  return (
    <section className="py-16 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Products</span>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            <ShinyText
              text="Complete Footwear Solutions"
              speed={4}
              className="bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 bg-clip-text"
            />
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Authorized distributor serving <strong className="text-blue-600">325+ school clients</strong>,{" "}
            <strong className="text-green-600">100+ medical & nursing colleges</strong>, and{" "}
            <strong className="text-purple-600">200+ pharma and other industries</strong> across Andhra Pradesh
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {productCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={category.id}
                className={`group hover:shadow-2xl transition-all duration-700 overflow-hidden bg-white rounded-3xl border-0 shadow-lg ${category.hoverGradient} hover:scale-[1.02] transform`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div
                    className={`absolute top-6 left-6 p-3 rounded-2xl bg-gradient-to-r ${category.gradient} shadow-lg`}
                  >
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <Badge className="bg-white/90 text-gray-900 font-semibold px-4 py-2">
                      {category.brands.length} Brands Available
                    </Badge>
                  </div>
                </div>

                <CardHeader className="p-6 lg:p-8">
                  <CardTitle className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-500">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base lg:text-lg leading-relaxed group-hover:text-gray-100 transition-colors duration-500">
                    {category.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 lg:p-8 pt-0">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 group-hover:text-white transition-colors duration-500">
                        Available Brands:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {category.brands.map((brand, brandIndex) => (
                          <Badge
                            key={brandIndex}
                            variant="outline"
                            className="border-gray-300 text-gray-700 hover:border-white hover:text-white transition-all duration-300 group-hover:border-white group-hover:text-white"
                          >
                            {brand}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Link href={`/products?category=${category.id}`} className="block">
                      <Button
                        className={`w-full bg-gradient-to-r ${category.gradient} hover:shadow-xl text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-105 transform group-hover:bg-white group-hover:text-gray-900`}
                      >
                        View Products & Get Quote
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
