import Navbar from "../../../components/Navbar"
import Features from "../../../components/Features"
import About from "../../../components/About"
import Testimonials from "../../../components/Testimonials"
import Footer from "../../../components/Footer"
import Herosection from "../../../components/Herosection"
import ImageSlider from "../../../components/ImageSlider"
import ContactForm from "../../../components/ContactForm"
import WorldClassFacilities from "../../../components/WorldClassFacilities"
import OurLegacy from "../../../components/OurLegacy"
import Services from "../../../components/Services"
// import { useState } from "react";
// const slidesData = [
//   [
//     "https://images.unsplash.com/photo-1743942439157-2194bd47bd1f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1748199625285-622076001599?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1743942439157-2194bd47bd1f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1748199625285-622076001599?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1743942439157-2194bd47bd1f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1748199625285-622076001599?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   ],
// ];
export default function HomePage() {

  return (
    <div className="min-h-screen bg-white">
        <Navbar/>
      {/* Hero Section with Slider */}
        <Herosection/>
      {/* Features Section */}
          <Features/>
      {/* Services Section */}
          <Services/>
      {/* About Section */}
          <About/>
      {/* Our Legacy Section */}
          <OurLegacy/>
      {/* Gallery Section */}
          <ImageSlider/>
      {/* World Class Facilities Section */}
          <WorldClassFacilities/>
      {/* Testimonials Section */}
          <Testimonials/>
      {/* Contact Section */}
          <ContactForm/>
      {/* Footer */}
          <Footer/>
    </div>
  )
}
