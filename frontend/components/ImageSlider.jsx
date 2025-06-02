"use client"

import { useState, useEffect } from "react"

const topRowImages = [
  { id: 1, src: "/images/event/PHOTO-2025-03-19-00-22-52.jpg", alt: "Event Image 1" },
  { id: 2, src: "/images/event/PHOTO-2025-03-19-00-22-52_1.jpg", alt: "Event Image 2" },
  { id: 3, src: "/images/event/PHOTO-2025-03-19-00-22-54.jpg", alt: "Event Image 3" },
  { id: 4, src: "/images/event/PHOTO-2025-03-19-00-22-55.jpg", alt: "Event Image 4" },
  { id: 5, src: "/images/event/PHOTO-2025-03-19-00-22-55_1.jpg", alt: "Event Image 5" },
  { id: 6, src: "/images/event/PHOTO-2025-03-19-00-24-13.jpg", alt: "Event Image 6" },
  { id: 7, src: "/images/event/PHOTO-2025-03-19-00-24-13_1.jpg", alt: "Event Image 7" },
  { id: 8, src: "/images/event/PHOTO-2025-03-19-00-24-14.jpg", alt: "Event Image 8" },
  { id: 9, src: "/images/event/PHOTO-2025-03-19-00-24-14_1.jpg", alt: "Event Image 9" },
  { id: 10, src: "/images/event/PHOTO-2025-03-19-00-24-46.jpg", alt: "Event Image 10" },
  { id: 11, src: "/images/event/PHOTO-2025-03-19-00-24-47.jpg", alt: "Event Image 11" },
  { id: 12, src: "/images/event/PHOTO-2025-03-19-00-24-47_1.jpg", alt: "Event Image 12" },
  { id: 13, src: "/images/event/PHOTO-2025-03-19-00-24-48.jpg", alt: "Event Image 13" },
  { id: 14, src: "/images/event/PHOTO-2025-03-19-00-24-48_1.jpg", alt: "Event Image 14" },
  { id: 15, src: "/images/event/PHOTO-2025-03-19-00-24-49.jpg", alt: "Event Image 15" },
  { id: 16, src: "/images/event/PHOTO-2025-03-19-00-24-50.jpg", alt: "Event Image 16" },
  { id: 17, src: "/images/event/PHOTO-2025-03-19-00-24-51.jpg", alt: "Event Image 17" },
  { id: 18, src: "/images/event/PHOTO-2025-03-19-00-24-51_1.jpg", alt: "Event Image 18" },
  { id: 19, src: "/images/event/PHOTO-2025-03-19-00-25-34.jpg", alt: "Event Image 19" },
  { id: 20, src: "/images/event/PHOTO-2025-03-19-00-25-35.jpg", alt: "Event Image 20" },
  { id: 21, src: "/images/event/PHOTO-2025-03-19-00-25-35_1.jpg", alt: "Event Image 21" },
  { id: 22, src: "/images/event/PHOTO-2025-03-19-00-25-36.jpg", alt: "Event Image 22" },
  { id: 23, src: "/images/event/PHOTO-2025-03-19-00-25-36_1.jpg", alt: "Event Image 23" }
];


const bottomRowImages = [...topRowImages];


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
    <>
      <div className="text-center my-10 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">College Events</h2>
        <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-6 md:mb-8"></div>
      </div>
      <div className="min-h-full flex items-center justify-center">
        <div className="w-full max-w-6xl relative overflow-hidden shadow-lg">
          {/* Divider */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-white-400 z-10 transform -translate-y-1/2" />

          {/* Top Row (moves right to left) */}
          <div className="overflow-hidden h-52 relative mb-2.5 ">
            <div
              className="flex absolute right-0"
              style={{
                transform: `translateX(${topOffset}px)`,
                width: `${duplicatedTop.length * imageWidth}px`,
              }}
            >
              {duplicatedTop.map((img, idx) => (
                <div key={`top-${idx}`} className="w-[300px] h-full px-1 flex-shrink-0 ">
                  <div className="relative w-full h-full bg-white rounded shadow">
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
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
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
