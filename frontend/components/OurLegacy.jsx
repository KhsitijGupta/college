import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BookOpen } from 'lucide-react';

const OurLegacy = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/about/getfoundation')
      .then((response) => {
        setData(response.data.foundations);
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
    <section className="pt-16 my-10 md:pt-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">About Our Legacy</h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-6 md:mb-8"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[90%] md:w-[45%] lg:w-[30%] bg-white rounded-2xl shadow-lg border border-blue-100 p-4 flex flex-col"
            >
              {/* Image */}
              {item?.ourFoundationImage && (
                <img
                  src={`/uploads/About/${item.ourFoundationImage}`}
                  alt={`Legacy ${index}`}
                  className="rounded-t-xl shadow-md object-cover w-60 h-60 mb-4 mx-auto"
                />
              )}

              {/* Content */}
              <div className="flex items-start space-x-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">{item.name || "Legacy Title"}</h3>
                </div>
              </div>
              <p className="p-1 rounded-xl text-gray-600 text-sm overflow-y-auto max-h-40 whitespace-pre-line">
                {item?.content || "No content available."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurLegacy;
