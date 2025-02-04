import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const COSIRICourseInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-yellow-500 hover:text-yellow-400 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </button>

        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <div className="h-24 bg-white flex items-center justify-center p-4">
            <img
              src="/images/cosiri-logo.png"
              alt="COSIRI logo"
              className="h-full object-contain"
            />
          </div>
          
          <div className="p-8">
            <h1 className="text-3xl font-bold text-white mb-6">
              COSIRI Assessor Training Course
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300">
                Course information will be provided later.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default COSIRICourseInfo;