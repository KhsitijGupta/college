import React, { useState, useEffect } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Herosection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState([]); // Array of image objects

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("/api/home/bannerImages");
        setImages(response.data); // response.data: [{ imageUrl, _id }]
      } catch (err) {
        alert(err.message || "Failed to fetch images");
      }
    };
    fetchImages();
  }, []);

  const fallbackSlides = [
    {
      title: "Excellence in Education",
      subtitle: "Nurturing minds, building futures, creating leaders of tomorrow",
      cta: "Learn More",
    },
    {
      title: "Modern Learning Environment",
      subtitle: "State-of-the-art facilities and innovative teaching methods",
      cta: "Take a Tour",
    },
    {
      title: "Join Our Community",
      subtitle: "Where every student matters and every dream is possible",
      cta: "Apply Now",
    },
    {
      title: "Excellence in Education",
      subtitle: "Nurturing minds, building futures, creating leaders of tomorrow",
      cta: "Learn More",
    },
    {
      title: "Modern Learning Environment",
      subtitle: "State-of-the-art facilities and innovative teaching methods",
      cta: "Take a Tour",
    },
    {
      title: "Join Our Community",
      subtitle: "Where every student matters and every dream is possible",
      cta: "Apply Now",
    },
  ];

  const heroSlides = Array.isArray(images) && images.length
    ? images.map((img, i) => ({
        image: `/uploads/Home/${img.imageUrl}`,
        ...fallbackSlides[i % fallbackSlides.length],
      }))
    : [];

  const finalSlides =
    heroSlides.length > 0
      ? heroSlides
      : fallbackSlides.map((slide, i) => ({
          ...slide,
          image: [
            "https://images.unsplash.com/photo-1640480920935-c9d02c060d1d?q=80&w=1470&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1664110691200-0d37f5d0aea5?q=80&w=1645&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1680807988328-7ba28ad24d9f?q=80&w=1471&auto=format&fit=crop",
          ][i],
        }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % finalSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [finalSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % finalSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + finalSlides.length) % finalSlides.length);
  };

  return (
    <section id="home" className="relative h-140 overflow-hidden">
      <div className="relative h-full">
        {finalSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover absolute"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 -z-10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                <button className="custom-button">{slide.cta}</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-dark p-2 rounded-full transition-all"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-dark p-2 rounded-full transition-all"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {finalSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-blue-600"
                : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Herosection;
