import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Award, Globe, Building, Heart, Shield } from "lucide-react"
import Link from "next/link"

const values = [
  {
    icon: Target,
    title: "Quality First",
    description:
      "We never compromise on quality, ensuring every product meets the highest standards of safety and durability.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description:
      "Our customers are at the heart of everything we do. We listen, understand, and deliver solutions that exceed expectations.",
  },
  {
    icon: Award,
    title: "Innovation",
    description:
      "Continuous innovation drives us to develop cutting-edge footwear solutions for evolving industry needs.",
  },
  {
    icon: Globe,
    title: "Reliability",
    description:
      "We are committed to providing reliable footwear solutions that meet the rigorous demands of various industries.",
  },
]

const achievements = [
  { icon: Building, label: "School Clients", value: "325+", description: "Educational institutions served" },
  { icon: Heart, label: "Medical & Nursing Colleges", value: "100+", description: "Healthcare institutions" },
  { icon: Shield, label: "Pharma & Industries", value: "200+", description: "Industrial clients served" },
  { icon: Globe, label: "Years of Excellence", value: "25+", description: "Years in the industry" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">About Serow Essentron</h1>
            <p className="text-lg md:text-xl text-red-100 max-w-4xl mx-auto leading-relaxed">
              A prominent name in the footwear industry, specializing in high-quality safety shoes and serving
              educational institutions, healthcare facilities, and industries across Andhra Pradesh and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-900">SEROW ESSENTRON PVT LTD</strong> is a prominent name in the footwear
                  industry, specializing in high-quality safety shoes. Located in the bustling city of Andhra Pradesh,
                  the company has established itself as a trusted supplier for educational institutions, catering to the
                  needs of students across the region.
                </p>
                <p>
                  Our strong foothold in Andhra Pradesh allows us to serve more than{" "}
                  <strong className="text-red-600">325 school clients</strong>,{" "}
                  <strong className="text-red-600">100+ Medical & Nursing colleges</strong>, and{" "}
                  <strong className="text-red-600">200+ Pharma and Other industries</strong>. With this extensive
                  network, the company not only highlights its reputation but also demonstrates its commitment to
                  quality.
                </p>
                <p>
                  As an authorized distributor for renowned brands such as{" "}
                  <strong className="text-gray-900">Paragon, Asian, and Jindal</strong>, SEROW ESSENTRON PVT LTD offers
                  a diverse range of school shoes designed for comfort, durability, and style. Their product lineup
                  includes options suitable for various age groups and school requirements, ensuring that every student
                  can find the perfect fit for their needs.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/catalog-school-overview.png"
                alt="Serow Essentron Overview"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-3xl blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Achievements</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl transition-all duration-300 rounded-2xl bg-white"
                >
                  <CardHeader className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-red-100 rounded-full mx-auto mb-4">
                      <IconComponent className="h-8 w-8 lg:h-10 lg:w-10 text-red-600" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-red-600 mb-2">{achievement.value}</div>
                    <CardTitle className="text-lg lg:text-xl font-bold text-gray-900">{achievement.label}</CardTitle>
                    <CardDescription className="text-gray-600">{achievement.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide every decision we make and every product we deliver
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl transition-all duration-500 rounded-2xl bg-white group"
                >
                  <CardHeader className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-6 group-hover:bg-red-600 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-red-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-4">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <CardDescription className="text-gray-600 leading-relaxed">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Brand Partnerships */}
      <section className="py-16 lg:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Authorized Brand Partners</h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  As an authorized distributor for renowned brands such as{" "}
                  <strong className="text-white">Paragon, Asian, and Jindal</strong>, we ensure that our customers
                  receive authentic, high-quality products backed by manufacturer warranties and support.
                </p>
                <p>
                  Our partnerships with these leading brands allow us to offer a comprehensive range of footwear
                  solutions, from safety and industrial shoes to healthcare and school footwear, meeting the diverse
                  needs of our extensive client base.
                </p>
                <p>
                  We also work with specialized brands like{" "}
                  <strong className="text-white">Hi-Son, Liberty, and Tiger</strong> for industrial safety equipment,
                  ensuring complete workplace safety solutions for our industrial clients.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/products">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg"
                  >
                    View Our Products
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img src="/catalog-construction.png" alt="Brand Partners" className="rounded-2xl shadow-2xl" />
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-3xl blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Partner With Us</h2>
          <p className="text-lg md:text-xl mb-12 text-red-100">
            Join hundreds of satisfied customers who trust Serow Essentron for their footwear needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-xl"
              >
                Contact Us Today
              </Button>
            </Link>
            <Link href="/capability">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg rounded-lg transition-all duration-300 bg-transparent"
              >
                Our Capabilities
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
