import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Download, Award, Shield, Globe, CheckCircle } from 'lucide-react'

const certifications = [
  {
    id: 'iso-9001',
    title: 'ISO 9001:2015',
    category: 'Quality Management',
    description: 'International standard for quality management systems, ensuring consistent quality in our manufacturing processes.',
    issuer: 'International Organization for Standardization',
    validUntil: '2025-12-31',
    icon: Award,
    image: '/modern-shoe-manufacturing.png'
  },
  {
    id: 'astm-f2413',
    title: 'ASTM F2413',
    category: 'Safety Standards',
    description: 'Standard specification for performance requirements of protective footwear.',
    issuer: 'American Society for Testing and Materials',
    validUntil: '2026-06-30',
    icon: Shield,
    image: '/industrial-safety-shoes.png'
  },
  {
    id: 'is-15298',
    title: 'IS 15298',
    category: 'Indian Standards',
    description: 'Indian standard for safety footwear with protective toecaps.',
    issuer: 'Bureau of Indian Standards',
    validUntil: '2025-09-15',
    icon: Shield,
    image: '/industrial-safety-shoes.png'
  },
  {
    id: 'ce-marking',
    title: 'CE Marking',
    category: 'European Conformity',
    description: 'Conformity marking for products sold within the European Economic Area.',
    issuer: 'European Union',
    validUntil: '2026-03-20',
    icon: Globe,
    image: '/motorcycle-biker-boots.png'
  },
  {
    id: 'en-13634',
    title: 'EN 13634',
    category: 'Motorcycle Footwear',
    description: 'European standard for protective footwear for motorcycle riders.',
    issuer: 'European Committee for Standardization',
    validUntil: '2025-11-10',
    icon: Shield,
    image: '/motorcycle-biker-boots.png'
  },
  {
    id: 'mil-std-810',
    title: 'MIL-STD-810',
    category: 'Military Standards',
    description: 'Military standard for environmental engineering considerations and laboratory tests.',
    issuer: 'U.S. Department of Defense',
    validUntil: '2026-01-25',
    icon: Award,
    image: '/military-combat-boots.png'
  }
]

const categories = [
  { name: 'Quality Management', count: 2, color: 'bg-blue-100 text-blue-800' },
  { name: 'Safety Standards', count: 3, color: 'bg-green-100 text-green-800' },
  { name: 'European Conformity', count: 2, color: 'bg-purple-100 text-purple-800' },
  { name: 'Military Standards', count: 1, color: 'bg-red-100 text-red-800' },
  { name: 'Indian Standards', count: 1, color: 'bg-orange-100 text-orange-800' }
]

export default function CertificationsPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-12 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Certifications & Standards
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our commitment to quality and safety is validated by internationally recognized certifications and standards.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold gold-accent mb-2">15+</div>
              <div className="text-gray-600">Active Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gold-accent mb-2">5</div>
              <div className="text-gray-600">Standard Categories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gold-accent mb-2">100%</div>
              <div className="text-gray-600">Compliance Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gold-accent mb-2">25+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>

          {/* Categories */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Certification Categories</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <Badge key={index} className={`${category.color} px-4 py-2 text-sm font-medium`}>
                  {category.name} ({category.count})
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each certification represents our dedication to meeting and exceeding industry standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => {
              const IconComponent = cert.icon
              return (
                <Card key={cert.id} className="card-hover">
                  <div className="relative">
                    <img
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg">
                      <IconComponent className="h-6 w-6 text-gold" />
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl font-bold">{cert.title}</CardTitle>
                      <Badge className="bg-green-100 text-green-800">
                        Active
                      </Badge>
                    </div>
                    <Badge variant="outline" className="w-fit mb-2">
                      {cert.category}
                    </Badge>
                    <CardDescription className="text-gray-600">
                      {cert.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Issued by:</span>
                        <span className="font-medium">{cert.issuer}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Valid until:</span>
                        <span className="font-medium">{new Date(cert.validUntil).toLocaleDateString()}</span>
                      </div>
                      <Button className="w-full mt-4 bg-black hover:bg-gray-800 text-white btn-elegant" variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Download Certificate
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Compliance Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Compliance Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure continuous compliance with all relevant standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: 'Standard Analysis',
                description: 'Thorough analysis of applicable standards and requirements',
                icon: CheckCircle
              },
              {
                step: 2,
                title: 'Implementation',
                description: 'Implementation of processes and controls to meet standards',
                icon: Award
              },
              {
                step: 3,
                title: 'Testing & Validation',
                description: 'Rigorous testing and validation of products and processes',
                icon: Shield
              },
              {
                step: 4,
                title: 'Continuous Monitoring',
                description: 'Ongoing monitoring and improvement to maintain compliance',
                icon: Globe
              }
            ].map((step) => {
              const IconComponent = step.icon
              return (
                <Card key={step.step} className="text-center card-hover">
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gold rounded-full mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-black" />
                    </div>
                    <div className="text-sm font-bold gold-accent mb-2">STEP {step.step}</div>
                    <CardTitle className="text-lg font-bold">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Certifications Matter
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our certifications provide assurance that our products meet the highest standards of quality, safety, and performance.
              </p>
              <ul className="space-y-4">
                {[
                  'Guaranteed product quality and consistency',
                  'Compliance with international safety standards',
                  'Reduced liability and risk for customers',
                  'Access to global markets and opportunities',
                  'Continuous improvement and innovation',
                  'Customer confidence and trust'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-gold mr-3" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="/modern-shoe-manufacturing.png"
                alt="Quality Control"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trust in Quality
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Our certifications are your guarantee of quality, safety, and performance. Contact us to learn more about our certified products.
          </p>
          <div className="space-x-4">
            <Button size="lg" className="bg-gold hover:bg-yellow-600 text-black font-semibold btn-elegant">
              View Certified Products
            </Button>
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white btn-elegant">
              Download All Certificates
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
