import React from 'react';
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

const ContactInfo = () => {
  return (
    <>
            <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-700 mb-4">Contact Information</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get in touch with us for admissions, inquiries, or any assistance you may need.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Address Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-blue-200 hover:bg-white transition-all duration-300 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-700">Our Location</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Basant Nagar, Near Kotwali
                  <br />
                  Shahdol, Madhya Pradesh
                  <br />
                  India
                </p>
              </div>

              {/* Contact Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-blue-200 hover:bg-white transition-all duration-300 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-700">Contact Numbers</h4>
                </div>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    +91 9691258721
                  </p>
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    +91 9340210945
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 text-center">
              <div className="bg-white/70 rounded-xl p-6 border border-blue-200 shadow-md">
                <p className="text-gray-600 text-sm">
                  <strong className="text-gray-700">Office Hours:</strong> Monday to Friday, 9:00 AM - 5:00 PM
                  <br />
                  <strong className="text-gray-700">Admission Inquiries:</strong> Welcome throughout the year
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;