"use client"

import { useState, useEffect } from "react"
import axios from "axios"

const imageWidth = 300
const slideSpeed = 1 // pixels per frame

export default function ImageSlider() {
  const [images, setImages] = useState([])
  const [topOffset, setTopOffset] = useState(0)
  const [bottomOffset, setBottomOffset] = useState(0)

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await axios.get("/api/event/getEventImages") // Make sure this API returns an array of { image: "filename.jpg" }
        const formattedImages = res.data.map((img, idx) => ({
          src: `/uploads/Event/${img.image}`,
          alt: `Event Image ${idx + 1}`,
        }))
        setImages(formattedImages)
      } catch (error) {
        console.error("Failed to fetch images:", error)
      }
    }
    fetchImages()
  }, [])

  const totalWidth = imageWidth * images.length

  useEffect(() => {
    if (images.length === 0) return

    const interval = setInterval(() => {
      setTopOffset((prev) => (prev >= totalWidth ? 0 : prev + slideSpeed))
      setBottomOffset((prev) => (Math.abs(prev) >= totalWidth ? 0 : prev - slideSpeed))
    }, 20)

    return () => clearInterval(interval)
  }, [images, totalWidth])

  const duplicatedImages = [...images, ...images]

  return (
    <>
      <div className="text-center my-10 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">College Events</h2>
        <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-6 md:mb-8"></div>
      </div>
      <div className="min-h-full flex items-center justify-center">
        <div className="w-full max-w-6xl relative overflow-hidden shadow-lg">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-white-400 z-10 transform -translate-y-1/2" />

          {/* Top Row */}
          <div className="overflow-hidden h-52 relative mb-2.5 ">
            <div
              className="flex absolute right-0"
              style={{
                transform: `translateX(${topOffset}px)`,
                width: `${duplicatedImages.length * imageWidth}px`,
              }}
            >
              {duplicatedImages.map((img, idx) => (
                <div key={`top-${idx}`} className="w-[300px] h-full px-1 flex-shrink-0">
                  <div className="relative w-full h-full bg-white rounded shadow">
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row */}
          <div className="overflow-hidden h-52 relative">
            <div
              className="flex absolute"
              style={{
                transform: `translateX(${bottomOffset}px)`,
                width: `${duplicatedImages.length * imageWidth}px`,
              }}
            >
              {duplicatedImages.map((img, idx) => (
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
