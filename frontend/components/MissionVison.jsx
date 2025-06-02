import React from 'react';
import {

  Award,
  Lightbulb,

} from "lucide-react"

const MissionVision = () => {
  return (
    <>
           <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
             <div className="container mx-auto px-4">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                 {/* Vision */}
                 <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-200 hover:bg-white/90 transition-all duration-300 shadow-lg">
                   <div className="flex items-center mb-6">
                     <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                       <Lightbulb className="w-6 h-6 text-white" />
                     </div>
                     <h3 className="text-2xl font-bold text-gray-700">Our Vision</h3>
                   </div>
                   <p className="text-gray-600 leading-relaxed">
                     To be a center of excellence in legal education, fostering ethical, skilled, and socially responsible
                     legal professionals who contribute to justice, governance, and the development of a just society.
                   </p>
                 </div>
     
                 {/* Mission */}
                 <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-200 hover:bg-white/90 transition-all duration-300 shadow-lg">
                   <div className="flex items-center mb-6">
                     <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mr-4">
                       <Award className="w-6 h-6 text-white" />
                     </div>
                     <h3 className="text-2xl font-bold text-gray-700">Our Mission</h3>
                   </div>
                   <ul className="space-y-4 text-gray-600">
                     <li className="flex items-start">
                       <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                       <span>
                         <strong className="text-gray-700">Academic Excellence:</strong> Integrating theory with practice to
                         prepare students for the legal field.
                       </span>
                     </li>
                     <li className="flex items-start">
                       <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                       <span>
                         <strong className="text-gray-700">Ethical Responsibility:</strong> Nurturing a commitment to justice
                         and public service.
                       </span>
                     </li>
                     <li className="flex items-start">
                       <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                       <span>
                         <strong className="text-gray-700">Research & Innovation:</strong> Encouraging legal reform and
                         critical thinking.
                       </span>
                     </li>
                     <li className="flex items-start">
                       <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                       <span>
                         <strong className="text-gray-700">Practical Training:</strong> Real-world exposure through moot
                         courts and internships.
                       </span>
                     </li>
                     <li className="flex items-start">
                       <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                       <span>
                         <strong className="text-gray-700">Global Outlook:</strong> Interdisciplinary and international legal
                         education.
                       </span>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
           </section>
      
    </>
  );
};

export default MissionVision;