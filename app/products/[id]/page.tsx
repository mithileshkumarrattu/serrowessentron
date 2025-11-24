"use client"

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Star, Shield, Award, Truck, MessageCircle, Phone, Mail, ChevronLeft, ChevronRight, Zap, CheckCircle, Package, Clock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const products = {
  1: {
    id: 1,
    name: 'SafeGuard Pro Steel Toe',
    category: 'safety',
    price: '₹2,499',
    originalPrice: '₹2,999',
    images: [
      '/industrial-safety-shoes.png',
      '/modern-shoe-manufacturing.png',
      '/military-combat-boots.png'
    ],
    description: 'Premium steel toe safety shoes with slip-resistant sole and electrical hazard protection. Designed for industrial environments where safety and comfort are paramount.',
    features: ['Steel Toe Protection', 'Slip Resistant Sole', 'Electrical Hazard Protection', 'Oil Resistant', 'Puncture Resistant', 'Breathable Lining'],
    certifications: ['ASTM F2413', 'IS 15298', 'CE Certified'],
    specifications: {
      'Upper Material': 'Full Grain Leather',
      'Sole Material': 'Polyurethane',
      'Safety Features': 'Steel Toe, Metatarsal Guard',
      'Weight': '1.2 kg per pair',
      'Sizes Available': '6-12 UK',
      'Colors': 'Black, Brown',
      'Warranty': '6 Months'
    },
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['Black', 'Brown'],
    rating: 4.8,
    reviews: 156,
    inStock: true,
    deliveryTime: '3-5 business days',
    bulkPricing: [
      { quantity: '50-99 pairs', price: '₹2,299', discount: '8%' },
      { quantity: '100-499 pairs', price: '₹2,199', discount: '12%' },
      { quantity: '500+ pairs', price: '₹1,999', discount: '20%' }
    ]
  },
  2: {
    id: 2,
    name: 'Combat Elite Tactical',
    category: 'army',
    price: '₹3,299',
    originalPrice: '₹3,799',
    images: [
      '/military-combat-boots.png',
      '/industrial-safety-shoes.png',
      '/motorcycle-biker-boots.png'
    ],
    description: 'Military-grade combat boots designed for extreme conditions and long-duration wear. Built to withstand the toughest environments.',
    features: ['Waterproof Construction', 'Lightweight Design', 'All-Terrain Grip', 'Quick Dry Technology', 'Ankle Support', 'Shock Absorption'],
    certifications: ['MIL-STD-810', 'IS 6240', 'NATO Approved'],
    specifications: {
      'Upper Material': 'Cordura Nylon & Leather',
      'Sole Material': 'Vibram Rubber',
      'Safety Features': 'Ankle Protection, Non-slip',
      'Weight': '1.1 kg per pair',
      'Sizes Available': '6-13 UK',
      'Colors': 'Desert Tan, Black',
      'Warranty': '12 Months'
    },
    sizes: ['6', '7', '8', '9', '10', '11', '12', '13'],
    colors: ['Desert Tan', 'Black'],
    rating: 4.9,
    reviews: 89,
    inStock: true,
    deliveryTime: '5-7 business days',
    bulkPricing: [
      { quantity: '25-49 pairs', price: '₹3,099', discount: '6%' },
      { quantity: '50-199 pairs', price: '₹2,999', discount: '9%' },
      { quantity: '200+ pairs', price: '₹2,799', discount: '15%' }
    ]
  },
  3: {
    id: 3,
    name: 'RoadMaster Biker Pro',
    category: 'biker',
    price: '₹4,199',
    originalPrice: '₹4,799',
    images: [
      '/motorcycle-biker-boots.png',
      '/military-combat-boots.png',
      '/industrial-safety-shoes.png'
    ],
    description: 'Premium leather motorcycle boots with ankle protection and gear shift pad. Perfect blend of style, comfort, and protection.',
    features: ['Full Grain Leather', 'Ankle Protection', 'Gear Shift Pad', 'Reinforced Toe', 'Side Zip', 'Oil Resistant Sole'],
    certifications: ['CE Certified', 'EN 13634', 'DOT Approved'],
    specifications: {
      'Upper Material': 'Full Grain Leather',
      'Sole Material': 'Rubber Compound',
      'Safety Features': 'Ankle Guards, Toe Protection',
      'Weight': '1.3 kg per pair',
      'Sizes Available': '6-12 UK',
      'Colors': 'Black, Brown',
      'Warranty': '12 Months'
    },
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['Black', 'Brown'],
    rating: 4.7,
    reviews: 203,
    inStock: true,
    deliveryTime: '4-6 business days',
    bulkPricing: [
      { quantity: '20-49 pairs', price: '₹3,999', discount: '5%' },
      { quantity: '50-99 pairs', price: '₹3,799', discount: '10%' },
      { quantity: '100+ pairs', price: '₹3,599', discount: '14%' }
    ]
  }
}

export default function ProductDetailPage() {
  const params = useParams()
  const productId = parseInt(params.id as string)
  const product = products[productId as keyof typeof products]
  
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [bulkInquiry, setBulkInquiry] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    quantity: '',
    message: ''
  })

  if (!product) {
    return <div className="pt-16 min-h-screen flex items-center justify-center">Product not found</div>
  }

  const handleWhatsAppOrder = () => {
    const message = `Hi! I'm interested in ordering ${product.name}%0A%0ADetails:%0A- Size: ${selectedSize}%0A- Color: ${selectedColor}%0A- Quantity: ${quantity}%0A- Price: ${product.price}%0A%0APlease provide more information about availability and delivery.`
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank')
  }

  const handleBulkWhatsApp = () => {
    const message = `Hi! I'm interested in bulk order for ${product.name}%0A%0ADetails:%0A- Company: ${bulkInquiry.company}%0A- Quantity: ${bulkInquiry.quantity}%0A- Contact: ${bulkInquiry.phone}%0A%0AMessage: ${bulkInquiry.message}%0A%0APlease provide bulk pricing and delivery details.`
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank')
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-gold transition-colors">Products</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Badge className="bg-red-500 text-white text-lg px-4 py-2">Out of Stock</Badge>
                  </div>
                )}
              </div>
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-gold' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-2 bg-gold text-black">{product.category.toUpperCase()}</Badge>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                  <span className="text-xl text-gray-500 line-through">{product.originalPrice}</span>
                  <Badge className="bg-green-100 text-green-800">
                    Save {Math.round(((parseInt(product.originalPrice.slice(1)) - parseInt(product.price.slice(1))) / parseInt(product.originalPrice.slice(1))) * 100)}%
                  </Badge>
                </div>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Product Options */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border rounded-lg transition-all ${
                          selectedSize === size
                            ? 'border-gold bg-gold text-black'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 border rounded-lg transition-all ${
                          selectedColor === color
                            ? 'border-gold bg-gold text-black'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                    >
                      -
                    </button>
                    <Input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-20 text-center"
                      min="1"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <Button
                  onClick={handleWhatsAppOrder}
                  disabled={!selectedSize || !selectedColor || !product.inStock}
                  className="w-full btn-elegant bg-green-600 hover:bg-green-700 text-white py-4 text-lg"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Order via WhatsApp
                </Button>
                <div className="grid grid-cols-2 gap-4">
                  <Button className="btn-elegant bg-black hover:bg-gray-800 text-white">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                  <Button className="btn-elegant bg-black hover:bg-gray-800 text-white">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Inquiry
                  </Button>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center space-x-4">
                  <Truck className="h-5 w-5 text-gold" />
                  <div>
                    <p className="font-medium">Free Delivery</p>
                    <p className="text-sm text-gray-600">Estimated delivery: {product.deliveryTime}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-4 rounded-xl bg-white p-1">
              <TabsTrigger value="features" className="rounded-lg">Features</TabsTrigger>
              <TabsTrigger value="specifications" className="rounded-lg">Specifications</TabsTrigger>
              <TabsTrigger value="certifications" className="rounded-lg">Certifications</TabsTrigger>
              <TabsTrigger value="bulk-pricing" className="rounded-lg">Bulk Pricing</TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="mt-8">
              <Card className="rounded-xl">
                <CardHeader>
                  <CardTitle>Key Features</CardTitle>
                  <CardDescription>What makes this product special</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-gold" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="mt-8">
              <Card className="rounded-xl">
                <CardHeader>
                  <CardTitle>Technical Specifications</CardTitle>
                  <CardDescription>Detailed product specifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                        <span className="font-medium text-gray-700">{key}:</span>
                        <span className="text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="certifications" className="mt-8">
              <Card className="rounded-xl">
                <CardHeader>
                  <CardTitle>Certifications & Standards</CardTitle>
                  <CardDescription>Quality and safety certifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {product.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                        <Award className="h-6 w-6 text-gold" />
                        <span className="font-medium">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="bulk-pricing" className="mt-8">
              <Card className="rounded-xl">
                <CardHeader>
                  <CardTitle>Bulk Order Pricing</CardTitle>
                  <CardDescription>Special pricing for bulk orders</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {product.bulkPricing.map((tier, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <span className="font-medium">{tier.quantity}</span>
                          <Badge className="ml-2 bg-green-100 text-green-800">{tier.discount} OFF</Badge>
                        </div>
                        <span className="text-xl font-bold text-gold">{tier.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Bulk Order Form */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="rounded-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Bulk Order Inquiry</CardTitle>
              <CardDescription>Get special pricing for bulk orders (25+ pairs)</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <Input
                      value={bulkInquiry.name}
                      onChange={(e) => setBulkInquiry({...bulkInquiry, name: e.target.value})}
                      placeholder="Your full name"
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <Input
                      type="email"
                      value={bulkInquiry.email}
                      onChange={(e) => setBulkInquiry({...bulkInquiry, email: e.target.value})}
                      placeholder="your.email@company.com"
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                    <Input
                      type="tel"
                      value={bulkInquiry.phone}
                      onChange={(e) => setBulkInquiry({...bulkInquiry, phone: e.target.value})}
                      placeholder="+91 12345 67890"
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <Input
                      value={bulkInquiry.company}
                      onChange={(e) => setBulkInquiry({...bulkInquiry, company: e.target.value})}
                      placeholder="Your company name"
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quantity Required *</label>
                  <Select value={bulkInquiry.quantity} onValueChange={(value) => setBulkInquiry({...bulkInquiry, quantity: value})}>
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Select quantity range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="25-49">25-49 pairs</SelectItem>
                      <SelectItem value="50-99">50-99 pairs</SelectItem>
                      <SelectItem value="100-499">100-499 pairs</SelectItem>
                      <SelectItem value="500+">500+ pairs</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Additional Requirements</label>
                  <Textarea
                    value={bulkInquiry.message}
                    onChange={(e) => setBulkInquiry({...bulkInquiry, message: e.target.value})}
                    placeholder="Please specify size distribution, delivery timeline, customization requirements, etc."
                    rows={4}
                    className="rounded-lg"
                  />
                </div>
                <Button
                  type="button"
                  onClick={handleBulkWhatsApp}
                  className="w-full btn-elegant bg-green-600 hover:bg-green-700 text-white py-4 text-lg"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Send Bulk Inquiry via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
