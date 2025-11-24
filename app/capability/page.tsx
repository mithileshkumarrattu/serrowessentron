import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Factory, Users, Award, Truck, Settings, CheckCircle, Building, Heart, Shield } from "lucide-react"
import Link from "next/link"

const capabilities = [
  {
    icon: Factory,
    title: "Authorized Distribution",
    description: "Official distributor for renowned brands like Paragon, Asian, Jindal, Hi-Son, Liberty, and Tiger.",
    details: ["Multi-brand portfolio", "Authentic products", "Manufacturer warranties", "Direct brand support"],
  },
  {
    icon: Users,
    title: "Extensive Network",
    description: "Strong foothold serving 325+ schools, 100+ medical colleges, and 200+ industries.",
    details: ["325+ school clients", "100+ medical institutions", "200+ industrial clients", "Regional expertise"],
  },
  {
    icon: Settings,
    title: "Custom Solutions",
    description: "Tailored footwear solutions for specific institutional and industrial requirements.",
    details: ["Bulk order management", "Size distribution planning", "Custom specifications", "Institutional branding"],
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Commitment to delivering high-quality products that meet industry standards.",
    details: ["Brand authenticity", "Quality control", "Product warranties", "Customer satisfaction"],
  },
  {
    icon: Truck,
    title: "Efficient Logistics",
    description: "Reliable delivery network across Andhra Pradesh and neighboring regions.",
    details: ["Regional coverage", "Timely delivery", "Bulk order handling", "Flexible scheduling"],
  },
  {
    icon: CheckCircle,
    title: "Customer Support",
    description: "Dedicated support team for pre-sales consultation and after-sales service.",
    details: ["Expert consultation", "Product guidance", "After-sales support", "24/7 availability"],
  },
]

const serviceAreas = [
  {
    icon: Building,
    title: "Educational Institutions",
    description: "Comprehensive school footwear solutions for students of all ages.",
    clients: "325+ Schools",
    products: ["School shoes", "Sports footwear", "Uniform shoes", "Custom designs"],
  },
  {
    icon: Heart,
    title: "Healthcare Sector",
    description: "Specialized medical footwear for healthcare professionals.",
    clients: "100+ Medical Colleges",
    products: ["Medical shoes", "Nursing footwear", "Hospital clogs", "Comfort shoes"],
  },
  {
    icon: Shield,
    title: "Industrial Sector",
    description: "Safety footwear and equipment for industrial applications.",
    clients: "200+ Industries",
    products: ["Safety shoes", "Industrial boots", "Protective equipment", "Work gear"],
  },
]

export default function CapabilityPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Capabilities</h1>
            <p className="text-lg md:text-xl text-red-100 max-w-3xl mx-auto">
              Comprehensive footwear solutions backed by strong partnerships and extensive experience serving diverse
              industries.
            </p>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Core Capabilities</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive capabilities ensure we can meet any footwear requirement across various sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon
              return (
                <Card key={index} className="hover:shadow-2xl transition-all duration-500 rounded-2xl bg-white group">
                  <CardHeader className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6 group-hover:bg-red-600 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-red-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-4">{capability.title}</CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {capability.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <ul className="space-y-2">
                      {capability.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-red-600 rounded-full mr-3" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Service Areas</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized solutions for different sectors with proven track record
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <Card key={index} className="hover:shadow-2xl transition-all duration-500 rounded-2xl bg-white">
                  <CardHeader className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mx-auto mb-6">
                      <IconComponent className="h-10 w-10 text-red-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-4">{area.title}</CardTitle>
                    <Badge className="bg-red-600 text-white text-lg px-4 py-2 mb-4">{area.clients}</Badge>
                    <CardDescription className="text-gray-600 leading-relaxed text-lg">
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <h4 className="font-semibold text-gray-900 mb-4">Product Range:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {area.products.map((product, productIndex) => (
                        <Badge key={productIndex} variant="outline" className="text-center py-2">
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Brand Portfolio */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Brand Portfolio</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Authorized distributor for leading footwear brands across different categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "School Footwear",
                brands: ["Asian", "Paragon", "Jindal"],
                image: "/catalog-asian-brand.png",
                description: "Complete range of school shoes for all age groups",
              },
              {
                category: "Healthcare Footwear",
                brands: ["Welcro", "Layes", "Canvas", "Clogs"],
                image: "/catalog-healthcare-footwear.png",
                description: "Specialized medical and healthcare footwear",
              },
              {
                category: "Safety Equipment",
                brands: ["Hi-Son", "Liberty", "Tiger"],
                image: "/catalog-safety-footwear.png",
                description: "Industrial safety footwear and protective equipment",
              },
            ].map((portfolio, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden">
                <div className="relative">
                  <img
                    src={portfolio.image || "/placeholder.svg"}
                    alt={portfolio.category}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{portfolio.category}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{portfolio.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {portfolio.brands.map((brand, brandIndex) => (
                      <Badge key={brandIndex} className="bg-red-100 text-red-800">
                        {brand}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 lg:py-24 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Our Impact</h2>
            <p className="text-lg md:text-xl text-red-100 max-w-3xl mx-auto">
              Numbers that demonstrate our reach and commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Total Clients Served", value: "625+" },
              { label: "Product Categories", value: "50+" },
              { label: "Brand Partners", value: "10+" },
              { label: "Years of Excellence", value: "25+" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-red-100 text-sm lg:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Ready to Experience Our Capabilities?</h2>
          <p className="text-lg md:text-xl mb-12 text-gray-300">
            Contact us to discuss your requirements and see how our capabilities can serve your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-xl"
              >
                Get Quote Now
              </Button>
            </Link>
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg rounded-lg transition-all duration-300 bg-transparent"
              >
                View Our Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
