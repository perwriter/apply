import { FaSearch, FaPaperPlane, FaEye, FaComments, FaBook, FaTrophy } from 'react-icons/fa';

const Assistant = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-8 text-center">Your Journey to Success</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center">
            <FaSearch className="text-6xl text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Search</h3>
            <p className="text-gray-600 text-center">Explore and find the right jobs.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaPaperPlane className="text-6xl text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Apply</h3>
            <p className="text-gray-600 text-center">Apply to multiple jobs effortlessly.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaEye className="text-6xl text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Check</h3>
            <p className="text-gray-600 text-center">Track your applications regularly.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaComments className="text-6xl text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Interview</h3>
            <p className="text-gray-600 text-center">Ace your interviews with confidence.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaBook className="text-6xl text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Study</h3>
            <p className="text-gray-600 text-center">Prepare and refine your skills.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaTrophy className="text-6xl text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Celebrate</h3>
            <p className="text-gray-600 text-center">Celebrate your new job offer!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assistant;
