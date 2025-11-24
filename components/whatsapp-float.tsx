"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in your products. Please provide more information."
    window.open(`https://wa.me/919505544950?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 animate-pulse hover:animate-none"
        size="icon"
      >
        <MessageCircle className="h-6 w-6 lg:h-8 lg:w-8" />
      </Button>
    </div>
  )
}
