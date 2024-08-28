import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <nav className="w-full flex justify-between items-center py-6 px-12 bg-white shadow-sm">
        <div className="flex items-center space-x-4">
          <img src="/logo.svg" alt="Logo" className="h-12" />
        </div>
        <div className="flex font-bold hover:text-black space-x-8 text-primary">
          <Link to="/about" className="hover:text-primary hover:underline ">Record</Link>
          <Link to="/assintant" className="hover:text-primary hover:underline ">Assistant</Link>
          <Link to="/pricing" className="hover:text-primary hover:underline ">Job Search</Link>
        </div>
        {/* Hide the Login button on small screens */}
        <Link to="/login">
          <button className="bg-secondary text-white py-2 px-6 rounded-lg shadow-lg hover:bg-primary hidden md:block">
            Login
          </button>
        </Link>
      </nav>

      <div className="flex flex-col items-center justify-center flex-grow px-6 text-center">
        <h2 className="text-5xl font-bold text-primary mb-4">
          Let's Apply Jobs Just Like You
        </h2>
        <p className="text-lg text-gray-600 max-w-xl">
          We do the Research, Send out applications, Manage Applications, Do follow-ups, 
          and Send you Notifications when an interview is in Place.
        </p>
        <Link to="/sign-up">
          <button className="mt-8 bg-secondary text-white py-2 px-6 rounded-lg shadow-lg hover:bg-primary">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
