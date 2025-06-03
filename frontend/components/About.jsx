import { useEffect, useState } from 'react';
import axios from 'axios';

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get('/api/about/getrAboutContent'); // Adjust this URL to match your actual route
        setAboutData(response.data.data);
      } catch (error) {
        console.error('Failed to fetch about data:', error);
      }
    };

    fetchAboutData();
  }, []);

  return (
    <div>
      {aboutData ? (
        <section id="about" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {aboutData.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">{aboutData.description}</p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">{aboutData.students}+</div>
                    <div className="text-gray-600">Students</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">{aboutData.collegeAcceptance}%</div>
                    <div className="text-gray-600">College Acceptance</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">{aboutData.yearsOfExcellence}+</div>
                    <div className="text-gray-600">Years of Excellence</div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={`/uploads/About/${aboutData.image}`} // Ensure this path is correct based on your server
                  alt="School building"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      ) : (
        <p className="text-center py-10">Loading...</p>
      )}
    </div>
  );
};

export default About;
