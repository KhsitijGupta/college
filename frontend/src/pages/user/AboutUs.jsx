import {
  GraduationCap,
  Scale,
  BookOpen,
  Users,
  Award,
  Lightbulb,
  Building,
  Wifi,
  Monitor,
  Trophy,
  MapPin,
  Phone,
} from "lucide-react"
import About from "../../../components/About"
import Features from "../../../components/Features"
import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer"
import WorldClassFacilities from "../../../components/WorldClassFacilities"
import MissionVision from "../../../components/MissionVison"
import OurLegacy from "../../../components/OurLegacy"

const AboutUs = () => {
  return (
    <>
    <Navbar/>
      {/* Hero Header with Light Theme */}
      <header className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-white/30"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-transparent to-purple-100/50"></div>
        </div>
        <div className="relative container mx-auto px-4 py-24 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6 shadow-lg">
            <Scale className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
            The College of Law and Legal Aid
          </h1>
          <p className="text-xl text-blue-600 mb-2">Shahdol, Madhya Pradesh</p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Empowering Legal Minds Since 1961</p>
        </div>
      </header>
        <About/>
        <Features/>
      {/* About Section with Light Cards */}
        <OurLegacy/>

      {/* Vision and Mission with Light Layout */}
        <MissionVision/>

      {/* Facilities with Light Grid */}
        {/* <WorldClassFacilities/> */}

      {/*Footer section */}
      <Footer/>
    </>
  )
}

export default AboutUs
