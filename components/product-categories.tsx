import Link from 'next/link'
import { Shield, Zap, Bike } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const categories = [
  {
    id: 'safety',
    title: 'Safety Shoes',
    description: 'Industrial-grade safety footwear with steel toes, slip-resistant soles, and electrical hazard protection.',
    icon: Shield,
    image: '/industrial-safety-shoes.png',
    features: ['Steel Toe Protection', 'Slip Resistant', 'Electrical Hazard', 'Oil Resistant']
  },
  {
    id: 'army',
    title: 'Army Boots',
    description: 'Military-spec combat boots designed for durability, comfort, and performance in extreme conditions.',
    icon: Zap,
    image: '/military-combat-boots.png',
    features: ['Combat Ready', 'All-Terrain', 'Waterproof', 'Lightweight']
  },
  {
    id: 'biker',
    title: 'Biker Shoes',
    description: 'Premium motorcycle boots combining style and protection for the ultimate riding experience.',
    icon: Bike,
    image: '/motorcycle-biker-boots.png',
    features: ['Leather Construction', 'Ankle Protection', 'Gear Shift Pad', 'Stylish Design']
  }
]

export function ProductCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Product Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of premium footwear designed for specific industries and applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Card key={category.id} className="card-hover group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 text-white p-2 rounded-full">
                    <IconComponent className="h-6 w-6" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gold rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/products?category=${category.id}`}>
                    <Button className="w-full bg-black hover:bg-gray-800 text-white btn-elegant">
                      View Products
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
