"use client"

import { useState, useEffect } from "react"

const topRowImages = new Array(5).fill(
  "https://media.istockphoto.com/id/2027127656/photo/vibrant-colored-closed-wooden-doors-in-a-row-on-blue-sky-and-sea-background-choice-and.jpg?s=1024x1024&w=is&k=20&c=x0ndhmsibOC4OcnSDdSiCBTf6SJ5sQLnBMUhHFE-2fQ="
)

const bottomRowImages = [...topRowImages]

export default function ImageSlider() {
  const [topOffset, setTopOffset] = useState(0)
  const [bottomOffset, setBottomOffset] = useState(0)
  const slideSpeed = 1 // pixels per frame
  const imageWidth = 300
  const totalWidth = imageWidth * topRowImages.length

  useEffect(() => {
    const interval = setInterval(() => {
      setTopOffset((prev) => (prev >= totalWidth ? 0 : prev + slideSpeed))
      setBottomOffset((prev) => (Math.abs(prev) >= totalWidth ? 0 : prev - slideSpeed))
    }, 20)

    return () => clearInterval(interval)
  }, [])

  const duplicatedTop = [...topRowImages, ...topRowImages]
  const duplicatedBottom = [...bottomRowImages, ...bottomRowImages]

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl relative overflow-hidden shadow-lg">
        {/* Divider */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-white-400 z-10 transform -translate-y-1/2" />

        {/* Top Row (moves right to left) */}
        <div className="overflow-hidden h-52 relative">
          <div
            className="flex absolute"
            style={{
              transform: `translateX(-${topOffset}px)`,
              width: `${duplicatedTop.length * imageWidth}px`,
            }}
          >
            {duplicatedTop.map((img, idx) => (
              <div key={`top-${idx}`} className="w-[300px] h-full px-1 flex-shrink-0">
                <div className="relative w-full h-full bg-white rounded shadow">
                  <img src={img} alt={`Top-${idx}`} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row (moves left to right) */}
        <div className="overflow-hidden h-52 relative">
          <div
            className="flex absolute"
            style={{
              transform: `translateX(${bottomOffset}px)`,
              width: `${duplicatedBottom.length * imageWidth}px`,
            }}
          >
            {duplicatedBottom.map((img, idx) => (
              <div key={`bottom-${idx}`} className="w-[300px] h-full px-1 flex-shrink-0">
                <div className="relative w-full h-full bg-white rounded shadow">
                  <img src={img} alt={`Bottom-${idx}`} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
