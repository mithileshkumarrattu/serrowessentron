import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search, Calendar, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'The Evolution of Safety Footwear: From Basic Protection to Smart Technology',
    excerpt: 'Explore how safety footwear has evolved over the decades, incorporating new materials and smart technologies to provide better protection and comfort.',
    author: 'Rajesh Kumar',
    date: '2024-01-15',
    category: 'Industry Insights',
    readTime: '5 min read',
    image: '/industrial-safety-shoes.png',
    featured: true
  },
  {
    id: 2,
    title: 'Understanding ASTM F2413 Standards: A Complete Guide for Buyers',
    excerpt: 'A comprehensive guide to understanding ASTM F2413 standards and what they mean for safety footwear performance and protection.',
    author: 'Priya Sharma',
    date: '2024-01-10',
    category: 'Standards & Compliance',
    readTime: '7 min read',
    image: '/modern-shoe-manufacturing.png'
  },
  {
    id: 3,
    title: 'Military Footwear Requirements: Meeting the Demands of Modern Combat',
    excerpt: 'Learn about the specific requirements and challenges in designing military footwear for modern combat scenarios.',
    author: 'Amit Patel',
    date: '2024-01-05',
    category: 'Military & Defense',
    readTime: '6 min read',
    image: '/military-combat-boots.png'
  },
  {
    id: 4,
    title: 'Motorcycle Safety: Why Quality Boots Matter More Than You Think',
    excerpt: 'Discover the critical role that quality motorcycle boots play in rider safety and how to choose the right pair.',
    author: 'Sarah Johnson',
    date: '2023-12-28',
    category: 'Motorcycle Safety',
    readTime: '4 min read',
    image: '/motorcycle-biker-boots.png'
  },
  {
    id: 5,
    title: 'Sustainable Manufacturing: Our Journey Towards Eco-Friendly Production',
    excerpt: 'Learn about our initiatives to reduce environmental impact while maintaining the highest quality standards.',
    author: 'Environmental Team',
    date: '2023-12-20',
    category: 'Sustainability',
    readTime: '8 min read',
    image: '/modern-shoe-manufacturing.png'
  },
  {
    id: 6,
    title: 'Custom Manufacturing: Bringing Your Vision to Life',
    excerpt: 'Explore our custom manufacturing capabilities and how we work with clients to create specialized footwear solutions.',
    author: 'Design Team',
    date: '2023-12-15',
    category: 'Manufacturing',
    readTime: '5 min read',
    image: '/industrial-safety-shoes.png'
  }
]

const categories = [
  'All Posts',
  'Industry Insights',
  'Standards & Compliance',
  'Military & Defense',
  'Motorcycle Safety',
  'Sustainability',
  'Manufacturing'
]

export default function BlogPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-12 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Industry Insights & News
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stay updated with the latest trends, insights, and developments in industrial footwear and safety equipment.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={index === 0 ? "bg-black text-white" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Article</h2>
          </div>
          
          {blogPosts.filter(post => post.featured).map((post) => (
            <Card key={post.id} className="overflow-hidden card-hover">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-gold text-black">
                    Featured
                  </Badge>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <Badge variant="outline">{post.category}</Badge>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h3>
                  <p className="text-gray-600 mb-6">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`}>
                    <Button className="bg-black hover:bg-gray-800 text-white btn-elegant">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Latest Articles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <Card key={post.id} className="card-hover">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-black/80 text-white">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg font-bold line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="outline" size="sm" className="btn-elegant">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Subscribe to our newsletter to receive the latest industry insights, product updates, and company news.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white text-black"
            />
            <Button className="bg-gold hover:bg-yellow-600 text-black font-semibold btn-elegant">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  )
}
