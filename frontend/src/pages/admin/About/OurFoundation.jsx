import { useEffect, useState } from 'react';
import axios from 'axios';
import ImageUploader from '../../../../components/admin/ImageUploader';

const OurFoundation = () => {
  const [foundationContent, setFoundationContent] = useState({
    name: '',
    content: '',
  });

  // Fetch existing foundation content
  useEffect(() => {
    const fetchFoundationContent = async () => {
      try {
        const res = await axios.get('/api/about/getfoundation');
        console.log(res)
        if (res.data.foundation) {
          setFoundationContent(res.data.foundation);
        }
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };

    fetchFoundationContent();
  }, []);


  const handleUploadSuccess = (data) => {
    console.log("Upload response:", data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/about/updatefoundation', foundationContent);
      alert('Content submitted successfully!');
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <div className="max-w-full mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Enter Our Foundation Content</h2>
      <div className='flex gap-4'>

        <ImageUploader
          title="Upload our foundation Images"
          maxImages={1}
          uploadUrl="/api/about/uploadOurFoundationImages"
          onUploadSuccess={handleUploadSuccess}
          inputName="image"
          />
      <form onSubmit={handleSubmit} className="space-y-6 w-full ">
        <div >
          <label className="block font-medium mb-1 text-gray-700">Name</label>
          <input
            type="text"
            value={foundationContent.name}
            name="name"
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
          <div className="text-end">
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
    </div>
  );
};

export default OurFoundation;
