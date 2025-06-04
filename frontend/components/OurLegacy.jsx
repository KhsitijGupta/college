import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BookOpen } from 'lucide-react';

const OurLegacy = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/about/getfoundation')
      .then((response) => {
        console.log(response.data.foundation)
        setData(response.data.foundation);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Error fetching data');
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-16">Loading...</p>;
  if (error) return <p className="text-center py-16 text-red-500">Error: {error}</p>;

  return (
    <section className="pt-16 md:pt-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">About Our Lagacy</h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-6 md:mb-8"></div>
        </div>

        <div className="bg-white mb-7 rounded-2xl md:shadow-lg p-6 sm:p-8 md:p-12 border border-blue-100 max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          {/* Image Section */}
          <div className="w-full md:w-1/3">
            <img
              src={`/uploads/About/${data.ourFoundationImage}`}
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
              <p className="h-45 overflow-y-scroll text-base md:text-lg leading-relaxed text-gray-600">{data.content}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLegacy;
