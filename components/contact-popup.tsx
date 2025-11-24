"use client"

import { useState } from "react"
import { X, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Contact Button */}
      <div className="fixed left-4 lg:left-6 top-1/2 transform -translate-y-1/2 z-40">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-gray-900 hover:bg-gray-800 text-white p-2 lg:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 rotate-90 animate-pulse"
          size="sm"
        >
          <span className="text-xs lg:text-sm font-medium">Contact</span>
        </Button>
      </div>

      {/* Popup */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center animate-fadeIn">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
          <div className="relative bg-white rounded-2xl p-6 lg:p-8 max-w-md w-full mx-4 shadow-2xl">
            <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </Button>

            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-gray-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone Numbers</p>
                  <p className="text-gray-600 text-sm lg:text-base">+91 950 5544 950</p>
                  <p className="text-gray-600 text-sm lg:text-base">+91 950 5522 950</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-gray-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600 text-sm lg:text-base">Sales@serowessentron.com</p>
                  <p className="text-gray-600 text-sm lg:text-base">www.serowestron.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-gray-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Address</p>
                  <p className="text-gray-600 text-sm lg:text-base">
                    Madhurawada, Visakhapatnam
                    <br />
                    Andhra Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button onClick={() => window.open("tel:+919505544950")} className="flex-1 btn-professional">
                Call Now
              </Button>
              <Button
                onClick={() => window.open("mailto:Sales@serowessentron.com")}
                variant="outline"
                className="flex-1"
              >
                Email Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
