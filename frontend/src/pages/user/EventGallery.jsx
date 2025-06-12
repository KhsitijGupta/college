import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const EventGallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("/api/event/getEventImages");
        setImages(response.data); // expects [{ image: "filename.jpg", createdAt: ... }]
      } catch (err) {
        setError("Failed to load images");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-6xl mx-auto mt-15">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">College Event Gallery</h1>
            <p className="text-gray-600">Click on any photo to view it in full size</p>
          </div>

          {loading && <p className="text-center text-gray-500">Loading images...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
          {!loading && !error && images.length === 0 && (
            <p className="text-center text-gray-500">No images found</p>
          )}

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((imageObj, idx) => (
              <div
                key={idx}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-md bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                onClick={() => openModal({ src: `/uploads/Event/${imageObj.image}`, alt: `Event Image ${idx + 1}` })}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={`/uploads/Event/${imageObj.image}`}
                    alt={`Event Image ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
              onClick={handleBackdropClick}
            >
              <div className="relative max-w-4xl max-h-full">
                <button
                  onClick={closeModal}
                  className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors duration-200"
                  aria-label="Close modal"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventGallery;
