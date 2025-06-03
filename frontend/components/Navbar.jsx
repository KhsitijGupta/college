import React from 'react';
import { useState, useEffect } from "react"
import {
  Menu,
  X,
 
} from "lucide-react"
import { Link } from 'react-router-dom';

const Navbar = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false)
    
  return (
    <div>
      <nav className="bg-white shadow-lg fixed w-full z-50 h-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
           <div className="flex bg-white">
            <div className="flex pt-5">
              <img src="/images/logo.png" alt="" className='h-15 w-20'  />
              <h1 className="text-xs md:text-lg pt-2 md:pt-0 font-extrabold text-blue-700 leading-snug">
                वववि एवं ववविक सहायता<br />
                <span className="text-gray-700">महाविद्यालय, शहडोल (म.प्र.)</span>
              </h1>
            </div>
          </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Home
                </Link>
                
              
                  <Link to={"/aboutUs"}
                    className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"

                  >
                  
                  About
                   </Link>
                
                <Link
                  to="#"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Blogs
                </Link>
                <Link to="/eventGallery"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Event Gallery
                </Link>
                <Link
                  to="/contactUs"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Contact
                </Link>
                <button className="ml-4 custom-button"> <Link to="/addmissionForm"> Admissions</Link></button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className=" inline-flex items-center justify-center p-2 rounded-md text-black-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
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
              <Link
                to="/"
                className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/aboutUs"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="#"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>
              <Link
                to="/eventGallery"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Event Gallery
              </Link>
              <Link
                to="/contactUs"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <button className="w-full custom-button"><Link to="/addmissionForm"> Admissions</Link></button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;