import {useState,useEffect} from 'react';
import axios from 'axios';

const MissionVision = () => {
  const [missionVision, setMissionVision] = useState({
    mission:'',
    vision:'',
  });
  
    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMissionVision((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


    useEffect(() => {
     async function getdata(){
      try{

        const result = await axios.get('/api/about/getmissionVision')
        const mission = result.data.data?.mission || '';
        const vision = result.data.data?.vision || '';

      setMissionVision({ mission, vision });
      }catch(err){
        console.error('data not fetched',err)
        alert('data not fetched ! try again...')
      }
     }
     getdata();
    }, []);

const validations = ()=>{
  if(missionVision.mission ===''&& missionVision.vision ===''){
    return false;
  }
}

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validations){
      console.log(missionVision)
      axios.put('/api/about/missionVisionUpdate',missionVision)
      .then((res)=>{
        alert(res.data.message)
        setMissionVision({
          mission:'',
          vision:''
        })
      })
      .catch((err)=>{
        alert('Data not updated ! try again ...');
        console.error('data not saved',err)
      })

      
      // Reset form
    }
  };
  
  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Enter Mission & Vision</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-medium mb-1 text-gray-700">Mission Statement</label>
          <textarea
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            value={missionVision.mission}
            onChange={handleInputChange}
            placeholder="Write your mission statement here..."
            required
            name='mission'
          ></textarea>
        </div>

        <div>
          <label className="block font-medium mb-1 text-gray-700">Vision Statement</label>
          <textarea
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            name='vision'
            value={missionVision.vision}
            onChange={handleInputChange}
            placeholder="Write your vision statement here..."
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
export default MissionVision;