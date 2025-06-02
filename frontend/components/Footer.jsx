import React from 'react';

const Footer = () => {
  return (
    <div>
            <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">EduPrime School</h3>
              <p className="text-gray-400">Nurturing minds, building futures, creating leaders of tomorrow.</p>
              <p className="mt-10 text-gray-400"> <a href='/adminpannel'>Admin Login </a></p>
           
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#programs" className="text-gray-400 hover:text-white">
                    Programs
                  </a>
                </li>
                <li>
                  <a href="#admissions" className="text-gray-400 hover:text-white">
                    Admissions
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Elementary
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Middle School
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    High School
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Extracurriculars
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>(555) 123-4567</li>
                <li>info@eduprimeschool.edu</li>
                <li>
                  123 Education Street
                  <br />
                  Learning City, LC 12345
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} EduPrime School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;