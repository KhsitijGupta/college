import React from 'react';

const About = () => {
  return (
    <div>
            <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About EduPrime School</h2>
              <p className="text-lg text-gray-600 mb-6">
                For over 50 years, EduPrime School has been committed to providing exceptional education that nurtures
                the whole child. Our innovative approach combines traditional academic excellence with modern teaching
                methods and technology.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe every student has unique potential, and our dedicated faculty works tirelessly to help each
                child discover their strengths and pursue their passions.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600">1,200+</div>
                  <div className="text-gray-600">Students</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">95%</div>
                  <div className="text-gray-600">College Acceptance</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500"
                alt="School building"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;