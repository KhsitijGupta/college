import { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const EventGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Dummy image data
  const images = [
  { id: 1, src: "/images/event/PHOTO-2025-03-19-00-22-52.jpg", alt: "Event Image 1" },
  { id: 2, src: "/images/event/PHOTO-2025-03-19-00-22-52_1.jpg", alt: "Event Image 2" },
  { id: 3, src: "/images/event/PHOTO-2025-03-19-00-22-54.jpg", alt: "Event Image 3" },
  { id: 4, src: "/images/event/PHOTO-2025-03-19-00-22-55.jpg", alt: "Event Image 4" },
  { id: 5, src: "/images/event/PHOTO-2025-03-19-00-22-55_1.jpg", alt: "Event Image 5" },
  { id: 6, src: "/images/event/PHOTO-2025-03-19-00-24-13.jpg", alt: "Event Image 6" },
  { id: 7, src: "/images/event/PHOTO-2025-03-19-00-24-13_1.jpg", alt: "Event Image 7" },
  { id: 8, src: "/images/event/PHOTO-2025-03-19-00-24-14.jpg", alt: "Event Image 8" },
  { id: 9, src: "/images/event/PHOTO-2025-03-19-00-24-14_1.jpg", alt: "Event Image 9" },
  { id: 10, src: "/images/event/PHOTO-2025-03-19-00-24-46.jpg", alt: "Event Image 10" },
  { id: 11, src: "/images/event/PHOTO-2025-03-19-00-24-47.jpg", alt: "Event Image 11" },
  { id: 12, src: "/images/event/PHOTO-2025-03-19-00-24-47_1.jpg", alt: "Event Image 12" },
  { id: 13, src: "/images/event/PHOTO-2025-03-19-00-24-48.jpg", alt: "Event Image 13" },
  { id: 14, src: "/images/event/PHOTO-2025-03-19-00-24-48_1.jpg", alt: "Event Image 14" },
  { id: 15, src: "/images/event/PHOTO-2025-03-19-00-24-49.jpg", alt: "Event Image 15" },
  { id: 16, src: "/images/event/PHOTO-2025-03-19-00-24-50.jpg", alt: "Event Image 16" },
  { id: 17, src: "/images/event/PHOTO-2025-03-19-00-24-51.jpg", alt: "Event Image 17" },
  { id: 18, src: "/images/event/PHOTO-2025-03-19-00-24-51_1.jpg", alt: "Event Image 18" },
  { id: 19, src: "/images/event/PHOTO-2025-03-19-00-25-34.jpg", alt: "Event Image 19" },
  { id: 20, src: "/images/event/PHOTO-2025-03-19-00-25-35.jpg", alt: "Event Image 20" },
  { id: 21, src: "/images/event/PHOTO-2025-03-19-00-25-35_1.jpg", alt: "Event Image 21" },
  { id: 22, src: "/images/event/PHOTO-2025-03-19-00-25-36.jpg", alt: "Event Image 22" },
  { id: 23, src: "/images/event/PHOTO-2025-03-19-00-25-36_1.jpg", alt: "Event Image 23" }
];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
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

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-md bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                onClick={() => openModal(image)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
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
      <Footer/>
    </>
  );
};

export default EventGallery;
