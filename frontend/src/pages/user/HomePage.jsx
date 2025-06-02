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
