"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image src="/images/serow-logo.png" alt="Serow Essentron" width={48} height={48} className="w-12 h-12" />
              <div>
                <span className="font-bold text-xl text-white">Serow Essentron</span>
                <div className="text-sm text-gray-400">Pvt. Ltd.</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed text-sm lg:text-base">
              Authorized distributor for renowned brands serving 325+ school clients, 100+ medical & nursing colleges,
              and 200+ pharma and other industries across Andhra Pradesh.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 lg:h-5 lg:w-5 text-gray-400" />
                <div>
                  <div className="text-white text-sm lg:text-base">+91 950 5544 950</div>
                  <div className="text-white text-sm lg:text-base">+91 950 5522 950</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 lg:h-5 lg:w-5 text-gray-400" />
                <div>
                  <div className="text-white text-sm lg:text-base">Sales@serowessentron.com</div>
                  <div className="text-gray-400 text-sm lg:text-base">www.serowestron.com</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 lg:h-5 lg:w-5 text-gray-400 mt-1" />
                <div className="text-gray-300 text-sm lg:text-base">
                  Madhurawada, Visakhapatnam
                  <br />
                  Andhra Pradesh, India
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/capability"
                  className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
                >
                  Capability
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Product Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products?category=safety"
                  className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
                >
                  Safety Footwear
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=healthcare"
                  className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
                >
                  Healthcare Footwear
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=school"
                  className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
                >
                  School Footwear
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Serow Essentron Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Built with excellence for quality footwear solutions</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
