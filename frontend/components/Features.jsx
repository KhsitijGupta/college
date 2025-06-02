import React from 'react';
import {

  BookOpen,
  Users,
  Award,
  Calendar,

} from "lucide-react"

const Features = () => {
      const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Academic Excellence",
      description: "Comprehensive curriculum designed to challenge and inspire students at every level.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Faculty",
      description: "Dedicated teachers with years of experience and passion for education.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Achievement Focus",
      description: "Celebrating student success and fostering a culture of excellence.",
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Rich Programs",
      description: "Diverse extracurricular activities and programs for holistic development.",
    },
  ]

  return (
    <div>
            <section id="programs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose EduPrime School?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a comprehensive educational experience that prepares students for success in an ever-changing
              world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;