"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200" : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image
                src="/images/serow-logo.png"
                alt="Serow Essentron"
                width={40}
                height={40}
                className="w-10 h-10 transition-all duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                Serow Essentron
              </span>
              <span className="text-xs text-gray-500 font-medium">Pvt. Ltd.</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Capability", href: "/capability" },
              { name: "Contact Us", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium py-2 px-1"
              >
                {item.name}
              </Link>
            ))}

            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-gray-900 transition-all duration-300 font-medium py-2 px-1">
                Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 p-2 bg-white border border-gray-200 rounded-lg shadow-lg">
                <DropdownMenuItem className="rounded-md p-3 hover:bg-gray-50 transition-colors duration-200">
                  <Link href="/products?category=safety" className="w-full">
                    <div className="font-semibold text-gray-900">Safety Footwear</div>
                    <div className="text-xs text-gray-500">Industrial & Construction</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-md p-3 hover:bg-gray-50 transition-colors duration-200">
                  <Link href="/products?category=healthcare" className="w-full">
                    <div className="font-semibold text-gray-900">Healthcare Footwear</div>
                    <div className="text-xs text-gray-500">Medical & Nursing</div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-md p-3 hover:bg-gray-50 transition-colors duration-200">
                  <Link href="/products?category=school" className="w-full">
                    <div className="font-semibold text-gray-900">School Footwear</div>
                    <div className="text-xs text-gray-500">Students & Educational</div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button className="btn-professional px-6 py-2 rounded-lg font-semibold">Get Quote</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 animate-fadeIn">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Products", href: "/products" },
                { name: "Capability", href: "/capability" },
                { name: "Contact Us", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium"
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link href="/contact" onClick={closeMobileMenu}>
                  <Button className="w-full btn-professional py-3 rounded-lg font-semibold">Get Quote</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
