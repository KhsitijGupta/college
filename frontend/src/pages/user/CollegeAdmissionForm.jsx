"use client"

import { useState } from "react"
import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer"
import img from "../../../public/images/1.webp"

const CollegeAdmissionForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    course: "",
    qualification: "",
    marks: "",
  })

  const [activeTab, setActiveTab] = useState("personal")

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form Submitted:", formData)
  }

  const tabs = [
    { id: "personal", label: "Personal", icon: "👤" },
    { id: "academic", label: "Academic", icon: "🎓" },
    { id: "submission", label: "submission", icon: "📄" },
  ]

  return (
    <>
      <Navbar />
      <br />
      <div
        className="mt-12 min-h-screen bg-cover bg-center py-6 px-4 "
        style={{
          backgroundImage: `url('/images/formBg.jpg')`, // Correct usage
        }}
      >
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center ">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold bg-white bg-clip-text text-transparent mb-1">
              College Admission
            </h1>
            <p className="text-gray-50">Complete your application in 3 simple steps</p>
          </div>

          {/* Main Form Card */}
          <div className="bg-white rounded-2xl  shadow-xl border border-gray-100 overflow-hidden w-150">
            {/* Tab Navigation */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-200">
              <div className="flex">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-4 px-6 text-sm font-medium transition-all duration-200 ${activeTab === tab.id
                        ? "bg-white text-blue-600 border-b-2 border-blue-600 shadow-sm"
                        : "text-gray-600 hover:text-blue-600 hover:bg-white/50"
                      }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              {/* Personal Information Tab */}
              {activeTab === "personal" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullname"
                          value={formData.fullname}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Date of Birth *
                        </label>
                        <input
                          type="date"
                          name="dob"
                          value={formData.dob}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Gender *
                        </label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                          placeholder="+1 (555) 000-0000"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Address *
                        </label>
                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          rows={1}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                          placeholder="Enter your complete address"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => setActiveTab("academic")}
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                    >
                      Next: Academic Info →
                    </button>
                  </div>
                </div>
              )}

              {/* Academic Information Tab */}
              {activeTab === "academic" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Select Course *
                        </label>
                        <select
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                          required
                        >
                          <option value="">Choose your desired course</option>
                          <option value="btech">B.Tech - Bachelor of Technology</option>
                          <option value="bsc">B.Sc - Bachelor of Science</option>
                          <option value="bcom">B.Com - Bachelor of Commerce</option>
                          <option value="ba">BA - Bachelor of Arts</option>
                          <option value="mtech">M.Tech - Master of Technology</option>
                          <option value="mba">MBA - Master of Business Administration</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Previous Qualification *
                        </label>
                        <input
                          type="text"
                          name="qualification"
                          value={formData.qualification}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                          placeholder="e.g., 12th Grade, Bachelor's Degree"
                          required
                        />
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Previous Qualification Percentage/CGPA *
                        </label>
                        <input
                          type="text"
                          name="marks"
                          value={formData.marks}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                          placeholder="e.g., 85% or 8.5 CGPA"
                          required
                        />
                      </div>

                      {/* Academic Achievement Card */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-800 mb-2">📊 Academic Summary</h4>
                        <div className="text-sm text-blue-700 space-y-1">
                          <p>
                            <strong>Course:</strong> {formData.course || "Not selected"}
                          </p>
                          <p>
                            <strong>Qualification:</strong> {formData.qualification || "Not entered"}
                          </p>
                          <p>
                            <strong>Score:</strong> {formData.marks || "Not entered"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={() => setActiveTab("personal")}
                      className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-200 font-medium"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("submission")}
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                    >
                      Next: submission →
                    </button>
                  </div>
                </div>
              )}

              {/* submission Tab */}
              {activeTab === "submission" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Right Column - Application Summary */}
                    <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-lg border border-gray-200">
                      <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                        <span className="mr-2">📋</span>
                        Application Summary
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Name:</span>
                          <span className="font-medium">{formData.fullname || "Not entered"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Email:</span>
                          <span className="font-medium">{formData.email || "Not entered"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Phone:</span>
                          <span className="font-medium">{formData.phone || "Not entered"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Course:</span>
                          <span className="font-medium">{formData.course || "Not selected"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Qualification:</span>
                          <span className="font-medium">{formData.qualification || "Not entered"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Score:</span>
                          <span className="font-medium">{formData.marks || "Not entered"}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={() => setActiveTab("academic")}
                      className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-200 font-medium"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200 font-bold shadow-lg hover:shadow-xl flex items-center"
                    >
                      <span className="mr-2">🚀</span>
                      Submit Application
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Footer */}
          <div className="text-center mt-6">
            <p className="text-xs text-gray-50">
              By submitting this form, you agree to our terms and conditions and privacy policy.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <img src={img} alt="" />
         <img src={img} alt="" />
      </div>
      <Footer />
    </>
  )
}

export default CollegeAdmissionForm
