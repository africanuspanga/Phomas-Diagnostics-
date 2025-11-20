"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface EventCarouselProps {
  images: string[]
  alt: string
}

export function EventCarousel({ images, alt }: EventCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  // If only one image, just display it without carousel controls
  if (images.length === 1) {
    return (
      <div className="relative h-64 w-full">
        <Image src={images[0] || "/placeholder.svg"} alt={alt} fill className="object-cover" />
      </div>
    )
  }

  return (
    <div className="relative h-64 w-full group">
      {/* Current Image */}
      <Image
        src={images[currentIndex] || "/placeholder.svg"}
        alt={`${alt} - Image ${currentIndex + 1}`}
        fill
        className="object-cover transition-opacity duration-500"
      />

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-5 w-5 text-primary-900" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Next image"
      >
        <ChevronRight className="h-5 w-5 text-primary-900" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
