import {
  GraduationCap,
  BookOpen,
  Award,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Calendar,
  Target,
} from "lucide-react"

const Services = () => {
  const programs = [
    {
      title: "Five Year B.A. LL.B",
      duration: "5 Years",
      icon: GraduationCap,
      intake: "120 Students",
      highlights: ["Integrated Program", "Liberal Arts Foundation", "Comprehensive Legal Training"],
      description:
        "An integrated program combining liberal arts education with comprehensive legal training, preparing students for diverse career opportunities in law and beyond.",
      color: "from-blue-400 to-indigo-500",
    },
    {
      title: "Three Year LL.B",
      duration: "3 Years",
      icon: BookOpen,
      intake: "60 Students",
      highlights: ["Professional Degree", "Practical Training", "Industry Exposure"],
      description:
        "A focused legal education program for graduates, emphasizing practical skills and professional development in various areas of law.",
      color: "from-emerald-400 to-teal-500",
    },
    {
      title: "Two Year LL.M",
      duration: "2 Years",
      icon: Award,
      intake: "30 Students",
      highlights: ["Specialization", "Research Focus", "Advanced Studies"],
      description:
        "An advanced program for law graduates seeking specialization in specific areas of law with emphasis on research and scholarly pursuits.",
      color: "from-purple-400 to-violet-500",
    },
  ]

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-indigo-50/50">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6 shadow-lg">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Academic Programs</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose from our comprehensive range of legal education programs designed to shape future legal
              professionals with excellence, ethics, and expertise.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 group hover:-translate-y-3 overflow-hidden"
              >
                {/* Card Header */}
                <div className="relative p-8 pb-6">
                 

                  <div className="text-center mb-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                    >
                      <program.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{program.title}</h3>
                    <div className="flex items-center justify-center space-x-2 text-blue-600">
                      <Clock className="w-4 h-4" />
                      <span className="font-semibold">{program.duration}</span>
                    </div>
                  </div>

            
                </div>

                {/* Card Content */}
                <div className="px-8 pb-8">
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">{program.description}</p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <Target className="w-4 h-4 mr-2 text-blue-500" />
                      Program Highlights
                    </h4>
                    <div className="space-y-2">
                      {program.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>


                  {/* Action Button */}
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
    </>
  )
}

export default Services
