import React from 'react';
import { BookOpen } from "lucide-react";

const OurLegacy = () => {
  return (
    <>
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">About Our Legacy</h2>
            <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-6 md:mb-8"></div>
          </div>

          <div className="bg-white rounded-2xl md:shadow-lg p-6 sm:p-8 md:p-12 border border-blue-100 max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
            {/* Image Section */}
            <div className="w-full md:w-1/3">
              <img
                src="/images/ourlagacy.png"
                alt="College legacy"
                className="rounded-2xl shadow-lg w-full object-cover aspect-[1]"
              />
            </div>

            {/* Text Content Section */}
            <div className="w-full md:w-2/3">
              <div className="bg-white rounded-2xl shadow-md md:shadow-lg p-6 sm:p-8 md:p-12 border border-blue-100">
                <div className="flex items-start space-x-4 mb-4 md:mb-6">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-1">Our Foundation</h3>
                  </div>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-gray-600">
                  Founded by the Late Advocate Besahoolal Sharaf, a revered figure in Indian legal circles, the College
                  of Law and Legal Aid, Shahdol was established to empower future legal professionals through
                  high-quality education and practical legal training. Since 1961, we have nurtured countless legal
                  minds, promoting justice, ethics, and leadership across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurLegacy;
