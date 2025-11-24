"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface ShinyTextProps {
  text: string
  disabled?: boolean
  speed?: number
  className?: string
}

export default function ShinyText({ text, disabled = false, speed = 3, className }: ShinyTextProps) {
  const [animationDuration, setAnimationDuration] = useState(`${speed}s`)

  useEffect(() => {
    setAnimationDuration(`${speed}s`)
  }, [speed])

  if (disabled) {
    return <span className={className}>{text}</span>
  }

  return (
    <span
      className={cn(
        "inline-block bg-gradient-to-r from-transparent via-black to-transparent bg-[length:200%_100%] bg-clip-text text-transparent animate-shine",
        className,
      )}
      style={{
        animationDuration,
        backgroundImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.8) 50%, transparent 100%)",
      }}
    >
      {text}
    </span>
  )
}
