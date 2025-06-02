import { useEffect, useState } from 'react';
import axios from 'axios';

const OurFoundation = () => {
  const [foundationContent, setFoundationContent] = useState('');

  // Fetch existing foundation content
useEffect(() => {
  const fetchFoundationContent = async () => {
    try {
      const res = await axios.get('/api/about/getfoundation');
      console.log(res)
      if (res.data.foundation?.content) {
        setFoundationContent(res.data.foundation?.content);
      }
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

  fetchFoundationContent();
}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/about/updatefoundation' ,{ content: foundationContent });
      alert('Content submitted successfully!');
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Enter Our Foundation Content</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-medium mb-1 text-gray-700">Our Foundation</label>
          <textarea
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="8"
            value={foundationContent}
            onChange={(e) => setFoundationContent(e.target.value)}
            placeholder="Write about your foundation here..."
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default OurFoundation;
