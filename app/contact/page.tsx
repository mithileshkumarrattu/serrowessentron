"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiry: "",
    quantity: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `New Inquiry from Website:%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ACompany: ${formData.company}%0AInquiry Type: ${formData.inquiry}%0AQuantity: ${formData.quantity}%0A%0AMessage: ${formData.message}`
    window.open(`https://wa.me/919505544950?text=${whatsappMessage}`, "_blank")
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl text-red-100 max-w-3xl mx-auto">
              Get in touch with our team for inquiries, bulk orders, or custom requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                  <p className="text-gray-600 mb-8 text-lg">
                    We're here to help with all your footwear needs. Reach out to us through any of the following
                    channels.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">Address</h3>
                      <p className="text-gray-600">
                        Madhurawada, Visakhapatnam
                        <br />
                        Andhra Pradesh, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">Phone</h3>
                      <p className="text-gray-600">+91 950 5544 950</p>
                      <p className="text-gray-600">+91 950 5522 950</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">Email</h3>
                      <p className="text-gray-600">hello@serowestron.com</p>
                      <p className="text-gray-600">www.serowestron.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-2xl rounded-2xl">
                <CardHeader className="text-center p-8">
                  <CardTitle className="text-2xl lg:text-3xl font-bold">Send us a Message</CardTitle>
                  <CardDescription className="text-lg">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="Your full name"
                          className="rounded-lg"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="your.email@company.com"
                          className="rounded-lg"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="+91 12345 67890"
                          className="rounded-lg"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company/Institution
                        </label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          placeholder="Your company/institution name"
                          className="rounded-lg"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 mb-2">
                          Inquiry Type *
                        </label>
                        <Select value={formData.inquiry} onValueChange={(value) => handleChange("inquiry", value)}>
                          <SelectTrigger className="rounded-lg">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="safety-footwear">Safety Footwear & Equipment</SelectItem>
                            <SelectItem value="healthcare-footwear">Healthcare Footwear</SelectItem>
                            <SelectItem value="school-footwear">School Footwear</SelectItem>
                            <SelectItem value="industrial-footwear">Industrial Footwear</SelectItem>
                            <SelectItem value="bulk-order">Bulk Order</SelectItem>
                            <SelectItem value="custom-requirements">Custom Requirements</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                          Quantity Required
                        </label>
                        <Select value={formData.quantity} onValueChange={(value) => handleChange("quantity", value)}>
                          <SelectTrigger className="rounded-lg">
                            <SelectValue placeholder="Select quantity range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-50">1-50 pairs</SelectItem>
                            <SelectItem value="51-100">51-100 pairs</SelectItem>
                            <SelectItem value="101-500">101-500 pairs</SelectItem>
                            <SelectItem value="501-1000">501-1000 pairs</SelectItem>
                            <SelectItem value="1000+">1000+ pairs</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Please provide details about your requirements, including size distribution, delivery timeline, customization needs, etc."
                        className="rounded-lg"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        type="submit"
                        size="lg"
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 text-lg rounded-lg"
                      >
                        <MessageCircle className="h-5 w-5 mr-2" />
                        Send via WhatsApp
                      </Button>
                      <Button
                        type="button"
                        size="lg"
                        variant="outline"
                        className="flex-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white py-4 text-lg rounded-lg bg-transparent"
                        onClick={() => window.open("tel:+919505544950")}
                      >
                        <Phone className="h-5 w-5 mr-2" />
                        Call Now
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quick Contact Options</h2>
            <p className="text-lg text-gray-600">Choose the most convenient way to reach us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardHeader className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-bold">WhatsApp</CardTitle>
                <CardDescription>Get instant responses via WhatsApp</CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg"
                  onClick={() => window.open("https://wa.me/919505544950", "_blank")}
                >
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardHeader className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold">Phone Call</CardTitle>
                <CardDescription>Speak directly with our team</CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                  onClick={() => window.open("tel:+919505544950")}
                >
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardHeader className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-4">
                  <Mail className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl font-bold">Email</CardTitle>
                <CardDescription>Send us a detailed email</CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <Button
                  className="w-full bg-red-600 hover:bg-red-700 text-white rounded-lg"
                  onClick={() => window.open("mailto:hello@serowestron.com")}
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
