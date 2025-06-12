import  { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import Topbar from "./Topbar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


  return (
    <div className={`fixed  w-full z-50 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
      {/* Short Blue Navbar */}
      <Topbar show={showNavbar}/>

      {/* Main Navbar */}
      <nav className="bg-white shadow-lg w-full h-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex mt-6">
              <img src="/images/logo.png" alt="" className="h-15 w-20" />
              <h1 className="text-xs md:text-lg pt-2 md:pt-0 font-extrabold text-blue-700 leading-snug">
                वववि एवं ववविक सहायता<br />
                <span className="text-gray-700">महाविद्यालय, शहडोल (म.प्र.)</span>
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink to="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</NavLink>
                <NavLink to="/aboutUs" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</NavLink>
                <NavLink to="/blogs" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Blogs</NavLink>
                <NavLink to="/eventGallery" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Event Gallery</NavLink>
                <NavLink to="/contactUs" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Contact</NavLink>
                <button className="ml-4 custom-button">
                  <NavLink to="/addmissionForm">Admissions</NavLink>
                </button>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-black-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <NavLink to="/" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
              <NavLink to="/aboutUs" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>About</NavLink>
              <NavLink to="/blogs" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>Blogs</NavLink>
              <NavLink to="/eventGallery" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>Event Gallery</NavLink>
              <NavLink to="/contactUs" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
              <div className="px-3 py-2">
                <button className="w-full custom-button">
                  <NavLink to="/addmissionForm">Admissions</NavLink>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
