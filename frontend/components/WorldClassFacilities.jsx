import React from 'react';
import {
    Scale,
    Users,
    Building,
    Wifi,
    Monitor,
    Trophy,
} from "lucide-react"

const WorldClassFacilities = () => {
  return (
    <div>
            <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-700 mb-4">World-Class Facilities</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience excellence with our state-of-the-art facilities designed to enhance your learning journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Moot Court & Legal Aid", icon: Scale, color: "from-blue-400 to-blue-500" },
              { title: "Smart Classrooms & Library", icon: Monitor, color: "from-green-400 to-green-500" },
              { title: "Internship & Placement Cell", icon: Users, color: "from-purple-400 to-purple-500" },
              { title: "Computer Lab & Free Wi-Fi", icon: Wifi, color: "from-indigo-400 to-indigo-500" },
              { title: "Cultural Fest & Seminars", icon: Trophy, color: "from-pink-400 to-pink-500" },
              { title: "Sports & Auditorium", icon: Building, color: "from-orange-400 to-orange-500" },
            ].map((facility, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 group hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${facility.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <facility.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-700">{facility.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorldClassFacilities;