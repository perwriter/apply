import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
const Hero = () => {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const toggleMenu = () => {
    //   setIsMenuOpen(!isMenuOpen);
    // };
  
    return (
      <div className="bg-white min-h-screen flex flex-col items-center">
       

  
        <div className="flex flex-col items-center justify-center flex-grow px-6 text-center">
        <h2 className="text-5xl font-bold text-primary mb-4">
    Apply for Jobs with Confidence
  </h2>
  <p className="text-lg text-gray-600 max-w-xl">
    We handle the research, send out applications, manage your submissions, follow up on your behalf, and notify you when interviews are scheduled. 
    <br/>Let us simplify your job search journey.
  </p>
  
          <Link to="/signup">
            <button className="mt-8 bg-secondary text-white py-2 px-6 rounded-lg shadow-lg hover:bg-primary">
              Get Started
            </button>
          </Link>
          <div className='w-full pt-20'>

          <img src="/sankey.svg" alt="Sankey Diagram" className="w-full h-[200px]" />
          </div>
        </div>
      </div>
    );
  };
export default Hero