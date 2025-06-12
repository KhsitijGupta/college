import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Award,
  Lightbulb,
} from "lucide-react";

const MissionVision = () => {
  const [data, setData] = useState({ mission: '', vision: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/about/getmissionVision')  // Adjust URL to your actual backend route
      .then((response) => {
        setData(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Failed to fetch data');
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-16">Loading...</p>;
  if (error) return <p className="text-center py-16 text-red-500">Error: {error}</p>;

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
          {/* Mission */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-200 hover:bg-white/90 transition-all duration-300 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mr-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-700">Our Mission</h3>
            </div>
            {/* Assuming mission is a multiline string or list separated by line breaks */}
            <ul className="space-y-4 text-gray-600">
              {data.mission.split('\n').map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Vision */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-200 hover:bg-white/90 transition-all duration-300 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-700">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{data.vision}</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;
