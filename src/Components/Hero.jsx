import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <div className="bg-white min-h-screen flex flex-col items-center">
        <nav className="w-full flex justify-between items-center py-6 px-12 bg-white shadow-sm">
          <div className="flex items-center space-x-4">
            <img src="/logo.svg" alt="Logo" className="h-12" />
          </div>
  
          {/* Centered Login Button for Mobile */}
          <Link to="/login" className="md:hidden flex-grow text-center">
            <button className="bg-secondary text-white py-2 px-6 rounded-lg shadow-lg hidden hover:bg-primary">
              Login
            </button>
          </Link>
  
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex font-bold hover:text-black space-x-8 text-primary">
            <Link to="/about" className="hover:text-primary hover:underline">About Us</Link>
            <Link to="/assistant" className="hover:text-primary hover:underline">Assistant</Link>
            <Link to="/pricing" className="hover:text-primary hover:underline">Pricing</Link>
            <Link to="/contact" className="hover:text-primary hover:underline">Contact Us</Link>
          </div>
  
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-primary focus:outline-none ml-auto"
          >
            {/* Toggle between Hamburger and X Icon */}
            {isMenuOpen ? (
              <svg
                className="w-8 h-8 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-8 h-8 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
  
          {/* Desktop Login Button */}
          <Link to="/login" className="hidden md:block">
            <button className="bg-secondary text-white py-2 px-6 rounded-lg shadow-lg hover:bg-primary">
              Login
            </button>
          </Link>
        </nav>
  
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg flex flex-col pt-20 gap-4 font-semibold text-xl p-6 z-50 text-primary">
            <div className="flex items-start space-x-4 pl-8">
            <img src="/logo.svg" alt="Logo" className="h-12" />
          </div>
          <div className='flex flex-col gap-8 justify-center items-center pt-20'>
            
            <Link to="/about" className="hover:text-secondary hover:underline text-xl mb-4" onClick={toggleMenu}>About Us</Link>
            <Link to="/assistant" className="hover:text-secondary hover:underline text-xl mb-4" onClick={toggleMenu}>Assistant</Link>
            <Link to="/pricing" className="hover:text-secondary hover:underline text-xl mb-4" onClick={toggleMenu}>Pricing</Link>
            <Link to="/contact" className="hover:text-secondary hover:underline text-xl mb-4" onClick={toggleMenu}>Contact Us</Link>
            <Link to="/login" className=" md:block">
            <button className="bg-secondary text-white py-2 px-6 rounded-lg shadow-lg hover:bg-primary">
              Login
            </button>
          </Link>
          </div>
          </div>
        )}
  
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
        </div>
      </div>
    );
  };
export default Hero