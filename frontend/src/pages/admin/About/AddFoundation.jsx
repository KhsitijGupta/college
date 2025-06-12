import { useEffect, useState } from 'react';
import axios from 'axios';

const OurFoundation = () => {
  const [foundationContent, setFoundationContent] = useState({
    name: '',
    content: '',
    image: null,
  });
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    const fetchFoundationContent = async () => {
      try {
        const res = await axios.get('/api/about/getfoundation');
        if (res.data.foundation) {
          setFoundationContent(prev => ({
            ...prev,
            name: res.data.foundation.name || '',
            content: res.data.foundation.content || '',
            // Do not preload file image, only text
          }));
        }
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };
    fetchFoundationContent();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFoundationContent({ ...foundationContent, image: file });
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', foundationContent.name);
    formData.append('content', foundationContent.content);
    if (foundationContent.image) {
      formData.append('image', foundationContent.image);
    }

    try {
      await axios.post('/api/about/addfoundation', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Content submitted successfully!');
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <div className="max-w-200 mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Enter Our Foundation Content</h2>
      <form onSubmit={handleSubmit} className="space-y-6 w-full">
        <div>
          <label className="block font-medium mb-1 text-gray-700">Name</label>
          <input
            type="text"
            value={foundationContent.name}
            onChange={(e) =>
              setFoundationContent({ ...foundationContent, name: e.target.value })
            }
            className="w-full mb-3 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label className="block font-medium mb-1 text-gray-700">Our Foundation</label>
          <textarea
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="8"
            value={foundationContent.content}
            onChange={(e) =>
              setFoundationContent({ ...foundationContent, content: e.target.value })
            }
            placeholder="Write about your foundation here..."
            required
          ></textarea>

          <label className="block font-medium mb-1 text-gray-700 mt-4">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border rounded-lg p-3"
          />

          {previewUrl && (
            <div className="mt-4">
              <p className="text-gray-700 font-medium">Image Preview:</p>
              <img
                src={previewUrl}
                alt="Preview"
                className="max-w-xs h-auto mt-2 rounded-lg border"
              />
            </div>
          )}

          <div className="text-end mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OurFoundation;
