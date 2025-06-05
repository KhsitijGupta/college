import { useState, useEffect } from 'react';
import axios from 'axios';

const MissionVision = () => {
  const [missionVision, setMissionVision] = useState({
    mission: '',
    vision: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMissionVision((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    async function getData() {
      try {
        const result = await axios.get('/api/about/getmissionVision');
        const mission = result.data.data?.mission || '';
        const vision = result.data.data?.vision || '';
        setMissionVision({ mission, vision });
      } catch (err) {
        console.error('Data not fetched:', err);
        alert('Data not fetched! Please try again.');
      }
    }
    getData();
  }, []);

  const isValid = () => {
    return missionVision.mission.trim() !== '' && missionVision.vision.trim() !== '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid()) {
      axios
        .put('/api/about/missionVisionUpdate', missionVision)
        .then((res) => {
          alert(res.data.message);
          setMissionVision({ mission: '', vision: '' });
        })
        .catch((err) => {
          alert('Data not updated! Please try again.');
          console.error('Data not saved:', err);
        });
    } else {
      alert("Mission & Vision can't be empty!");
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-5 bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-xl">
      <h2 className="text-3xl font-extrabold mb-10 text-center text-blue-700 underline decoration-blue-500">Mission & Vision</h2>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mission Section */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold text-gray-800 mb-2">Mission Statement</label>
          <textarea
            className="border-2 border-gray-300 rounded-xl p-4 h-60 focus:ring-2 focus:ring-blue-400 resize-none bg-white shadow-sm"
            name="mission"
            value={missionVision.mission}
            onChange={handleInputChange}
            placeholder="Write your mission statement here..."
          ></textarea>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold text-gray-800 mb-2">Vision Statement</label>
          <textarea
            className="border-2 border-gray-300 rounded-xl p-4 h-60 focus:ring-2 focus:ring-blue-400 resize-none bg-white shadow-sm"
            name="vision"
            value={missionVision.vision}
            onChange={handleInputChange}
            placeholder="Write your vision statement here..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-3 rounded-xl transition-all duration-300 shadow-md"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default MissionVision;
