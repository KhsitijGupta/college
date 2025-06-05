import { useEffect, useState } from "react";
import axios from "axios";
import {
  GraduationCap,
  Clock,
  CheckCircle,
  ArrowRight,
  Target,
} from "lucide-react";

const Services = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await axios.get("/api/home/getAllPrograms"); 
        console.log(res.data)
        setPrograms(res.data);
      } catch (error) {
        console.error("Error fetching programs:", error);
      }
    };

    fetchPrograms();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-indigo-50/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6 shadow-lg">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Academic Programs</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive range of legal education programs designed to shape future legal professionals with excellence, ethics, and expertise.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 group hover:-translate-y-3 overflow-hidden"
            >
              {/* Image */}
              {program.image && (
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
              )}

              {/* Content */}
              <div className="p-8 pb-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{program.title}</h3>
                <div className="flex items-center justify-center space-x-2 text-blue-600 mb-4">
                  <Clock className="w-4 h-4" />
                  <span className="font-semibold">{program.duration}</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">{program.description}</p>

                {/* Highlights */}
                <div className="mb-6 text-left">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Target className="w-4 h-4 mr-2 text-blue-500" />
                    Program Highlights
                  </h4>
                  <div className="space-y-2">
                    {program.highlights?.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center space-x-2 group/btn">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
