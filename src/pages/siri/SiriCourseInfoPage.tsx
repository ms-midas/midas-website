import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SiriCourseInfoPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold text-white mb-6">
            SIRI Course <span className="text-yellow-500">Information</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Course information will be provided later.
          </p>
          <div className="mt-8">
            <Link
              to="/siri/training-schedule"
              className="inline-flex items-center bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              View Training Schedule
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiriCourseInfoPage;