"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, MessageCircle, ArrowRight } from "lucide-react"

const productCategories = [
  {
    id: "safety",
    name: "Safety Footwear & Equipment",
    description: "Industrial safety shoes and protective equipment for workplace safety",
    image: "/catalog-safety-footwear.png",
    products: [
      {
        id: "tiger",
        name: "TIGER",
        sizes: "06X07, 08X10, 11X13, 1X3, 4X6, 7X10",
        description: "Premium safety footwear with steel toe protection",
        features: ["Steel Toe", "Slip Resistant", "Oil Resistant"],
      },
      {
        id: "freedom",
        name: "FREEDOM",
        sizes: "06X07, 08X10, 11X13, 1X3, 4X6, 7X10",
        description: "Comfortable safety boots for long working hours",
        features: ["Comfort Fit", "Breathable", "Anti-Fatigue"],
      },
      {
        id: "warrior",
        name: "WARRIOR",
        sizes: "06X07, 08X10, 11X13, 1X3, 4X6, 7X10",
        description: "Heavy-duty safety footwear for extreme conditions",
        features: ["Heavy Duty", "Waterproof", "Chemical Resistant"],
      },
      {
        id: "hillson",
        name: "HILLSON",
        sizes: "06X07, 08X10, 11X13, 1X3, 4X5, 6X7, 8",
        description: "Professional safety boots with superior grip",
        features: ["Superior Grip", "Ankle Support", "Puncture Resistant"],
      },
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare Footwear",
    description: "Specialized medical footwear for healthcare professionals",
    image: "/catalog-healthcare-footwear.png",
    products: [
      {
        id: "welcro",
        name: "WELCRO",
        sizes: "12/01, 02/05, 06/10",
        description: "Comfortable healthcare footwear for medical professionals",
        features: ["Easy Clean", "Slip Resistant", "Professional Look"],
      },
      {
        id: "layes",
        name: "LAYES",
        sizes: "8X10S, 11X13, 1X3, 4X5, 6X10B",
        description: "Lightweight and breathable shoes for healthcare workers",
        features: ["Lightweight", "Breathable", "All-Day Comfort"],
      },
      {
        id: "canvas",
        name: "CANVAS",
        sizes: "08/10, 11/13, 01/03, 04/08",
        description: "Canvas material shoes perfect for medical environments",
        features: ["Canvas Material", "Washable", "Durable"],
      },
      {
        id: "clogs",
        name: "CLOGS",
        sizes: "06X07, 08X10, 11X13, 1X3, 4X6, 7X10",
        description: "Professional clogs for healthcare and food service",
        features: ["Easy Slip-On", "Non-Slip Sole", "Easy to Clean"],
      },
    ],
  },
  {
    id: "school",
    name: "School Footwear",
    description: "Quality school shoes from authorized brands",
    image: "/catalog-school-overview.png",
    products: [
      {
        id: "asian-customised",
        name: "ASIAN CUSTOMISED",
        sizes: "8X10S, 11X13, 1X3, 4X5, 6X10B",
        description: "Customizable school shoes from Asian brand",
        features: ["Customizable", "Durable", "School Approved"],
      },
      {
        id: "paragon-774",
        name: "PARAGON 774",
        sizes: "12/01, 02/05, 06/10",
        description: "Classic school shoes from Paragon brand",
        features: ["Classic Design", "Durable", "Comfortable"],
      },
      {
        id: "jindal-gola",
        name: "JINDAL GOLA WELCRO",
        sizes: "06X07, 08X10, 11X13, 1X3, 4X6, 7X10",
        description: "Velcro school shoes for easy wear",
        features: ["Velcro Closure", "Easy Wear", "Durable"],
      },
    ],
  },
]

function ProductsContent() {
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const category = searchParams.get("category")
    if (category && productCategories.some((cat) => cat.id === category)) {
      setSelectedCategory(category)
    }
  }, [searchParams])

  const filteredCategories =
    selectedCategory === "all" ? productCategories : productCategories.filter((cat) => cat.id === selectedCategory)

  const handleWhatsAppInquiry = (product: any) => {
    const message = `Hi! I'm interested in ${product.name}%0A%0AProduct Details:%0A- Available Sizes: ${product.sizes}%0A%0APlease provide pricing and availability information.`
    window.open(`https://wa.me/919505544950?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive range of footwear solutions for safety, healthcare, school, and industrial applications
            </p>
          </div>
        </div>
      </section>

      {/* Filters - Fixed at top */}
      <section className="sticky top-16 z-40 py-4 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full lg:w-auto">
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-64">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="safety">Safety Footwear</SelectItem>
                  <SelectItem value="healthcare">Healthcare Footwear</SelectItem>
                  <SelectItem value="school">School Footwear</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
                {filteredCategories.map((category) => (
                  <Card
                    key={category.id}
                    className={`cursor-pointer transition-all duration-200 ${
                      selectedProduct?.category === category.id ? "ring-2 ring-gray-900" : "hover:shadow-md"
                    }`}
                    onClick={() => setSelectedProduct({ category: category.id, product: null })}
                  >
                    <CardHeader className="p-4">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <CardTitle className="text-sm font-semibold">{category.name}</CardTitle>
                      <CardDescription className="text-xs">{category.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* Products Display */}
            <div className="lg:col-span-3">
              {selectedProduct ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {productCategories.find((cat) => cat.id === selectedProduct.category)?.name}
                    </h2>
                    <Button variant="outline" onClick={() => setSelectedProduct(null)}>
                      Back to Categories
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {productCategories
                      .find((cat) => cat.id === selectedProduct.category)
                      ?.products.map((product) => (
                        <Card key={product.id} className="card-hover">
                          <CardHeader>
                            <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                              <span className="text-gray-500">Product Image</span>
                            </div>
                            <CardTitle className="text-lg">{product.name}</CardTitle>
                            <CardDescription>{product.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Available Sizes:</h4>
                                <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">{product.sizes}</p>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                                <div className="flex flex-wrap gap-2">
                                  {product.features.map((feature, index) => (
                                    <Badge key={index} variant="outline" className="text-xs">
                                      {feature}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <Button
                                onClick={() => handleWhatsAppInquiry(product)}
                                className="w-full btn-professional"
                              >
                                <MessageCircle className="h-4 w-4 mr-2" />
                                Get Quote
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredCategories.map((category) => (
                    <Card
                      key={category.id}
                      className="card-hover cursor-pointer"
                      onClick={() => setSelectedProduct({ category: category.id, product: null })}
                    >
                      <CardHeader>
                        <img
                          src={category.image || "/placeholder.svg"}
                          alt={category.name}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <CardTitle className="text-xl">{category.name}</CardTitle>
                        <CardDescription>{category.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">{category.products.length} Products Available</span>
                          <ArrowRight className="h-4 w-4 text-gray-400" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ProductsLoading() {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Loading Products...</h1>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsLoading />}>
      <ProductsContent />
    </Suspense>
  )
}
