"use client"

import { cn } from "@/lib/utils"

interface CurvedLoopProps {
  marqueeText: string
  speed?: number
  direction?: "left" | "right"
  className?: string
}

export default function CurvedLoop({ marqueeText, speed = 3, direction = "left", className }: CurvedLoopProps) {
  const animationDuration = `${20 / speed}s`
  const directionMultiplier = direction === "left" ? -1 : 1

  return (
    <div className="relative overflow-hidden w-full h-16 flex items-center justify-center">
      <div
        className={cn("absolute whitespace-nowrap text-2xl font-bold animate-marquee", className)}
        style={{
          animation: `marquee ${animationDuration} linear infinite`,
        }}
      >
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className="mx-8">
            {marqueeText}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(${100 * directionMultiplier}%);
          }
          100% {
            transform: translateX(${-100 * directionMultiplier}%);
          }
        }
      `}</style>
    </div>
  )
}
