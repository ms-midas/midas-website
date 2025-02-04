import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isSiriOpen, setIsSiriOpen] = useState(false);
  const [isCoSiriOpen, setIsCoSiriOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-10 border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 text-yellow-500 mr-2" />
              <span className="text-xl font-bold">
                <span className="text-white">Midas</span>
                <span className="text-yellow-500">DX</span>
              </span>
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link to="/" className="text-white hover:text-yellow-500 px-3 py-2 transition">Home</Link>
             <Link to="/training" className="text-white hover:text-yellow-500 px-3 py-2 transition">Training</Link>
            <Link to="/services" className="text-white hover:text-yellow-500 px-3 py-2 transition">Services</Link>
            <div className="relative group">
              <button
                onClick={() => setIsSiriOpen(!isSiriOpen)}
                onBlur={() => setTimeout(() => setIsSiriOpen(false), 200)}
                className="flex items-center text-white hover:text-yellow-500 px-3 py-2 transition"
              >
                SIRI
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              {isSiriOpen && (
                <div className="absolute left-0 mt-1 w-48 bg-gray-800 rounded-lg shadow-lg py-2 border border-gray-700">
                  <Link
                    to="/siri/introduction"
                    className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-yellow-500"
                  >
                    SIRI Introduction
                  </Link>
                  <Link
                    to="/siri/course-info"
                    className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-yellow-500"
                  >
                    Course Information
                  </Link>
                  <Link
                    to="/siri/training-schedule"
                    className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-yellow-500"
                  >
                    Training Schedule
                  </Link>
                  <Link
                    to="/siri/assessments"
                    className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-yellow-500"
                  >
                    SIRI Assessments
                  </Link>
                </div>
              )}
            </div>
            <div className="relative group">
              <button
                onClick={() => setIsCoSiriOpen(!isCoSiriOpen)}
                onBlur={() => setTimeout(() => setIsCoSiriOpen(false), 200)}
                className="flex items-center text-white hover:text-yellow-500 px-3 py-2 transition"
              >
                COSIRI
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              {isCoSiriOpen && (
                <div className="absolute left-0 mt-1 w-48 bg-gray-800 rounded-lg shadow-lg py-2 border border-gray-700">
                  <Link
                    to="/cosiri/introduction"
                    className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-yellow-500"
                  >
                    COSIRI Introduction
                  </Link>
                  <Link
                    to="/cosiri/course-info"
                    className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-yellow-500"
                  >
                    Course Information
                  </Link>
                  <Link
                    to="/cosiri/training-schedule"
                    className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-yellow-500"
                  >
                    Training Schedule
                  </Link>
                  <Link
                    to="/cosiri/assessments"
                    className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-yellow-500"
                  >
                    COSIRI Assessments
                  </Link>
                </div>
              )}
            </div>
            <div className="relative group">
              <button
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                onBlur={() => setTimeout(() => setIsAboutOpen(false), 200)}
                className="flex items-center text-white hover:text-yellow-500 px-3 py-2 transition"
              >
                About
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              {isAboutOpen && (
                <div className="absolute left-0 mt-1 w-48 bg-gray-800 rounded-lg shadow-lg py-2 border border-gray-700">
                  <Link
                    to="/about/contact"
                    className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-yellow-500"
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/about/global-reach"
                    className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-yellow-500"
                  >
                    Global Reach
                  </Link>
                  <Link
                    to="/about/team"
                    className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-yellow-500"
                  >
                    Meet the Team
                  </Link>
                  <Link
                    to="/about/privacy"
                    className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-yellow-500"
                  >
                    Privacy Policy
                  </Link>
                </div>
              )}
            </div>
           
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;