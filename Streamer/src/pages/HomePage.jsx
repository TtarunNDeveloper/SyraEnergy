import netflix from '../assets/netflix.png';
import amazonprime from '../assets/amazonprime';
const HomePage = () => {
    return (
      <div className="container mx-auto mt-10">
        <h2 className="text-4xl font-bold mb-6">Let's Be Streamer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <img src={netflix} alt="" />
            <h3 className="text-2xl font-semibold mb-2">Netflix</h3>

          </div>

          <div className="p-4 bg-gray-100 rounded-lg shadow-md">

            <img src={amazonprime} alt="" />
            <h3 className="text-2xl font-semibold mb-2">Amazon Prime Video</h3>
          </div>
        </div>
      </div>
    );
  };
  
  export default HomePage;
  