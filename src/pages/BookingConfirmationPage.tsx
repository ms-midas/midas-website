import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const BookingConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/');
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate, location.state]);

  useEffect(() => {
    if (!location.state?.booking) {
      navigate('/');
    }
  }, [location.state, navigate]);

  if (!location.state?.booking) return null;

  const { course, participants } = location.state.booking;

  return (
    <div className="bg-gray-900 min-h-screen py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 rounded-lg p-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-4">
            Booking Confirmed!
          </h1>
          
          <p className="text-gray-300 mb-8">
            Thank you for booking {course.course_name}. A confirmation email has been sent to all participants
            with further details.
          </p>

          <div className="bg-gray-700/50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-white mb-4">Next Steps</h2>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>Check your email for booking confirmation</li>
              <li>An invoice will be sent separately to the billing contact</li>
              <li>Course materials will be provided after payment is received</li>
            </ul>
          </div>

          <div className="space-y-4">
            <Link
              to="/training"
              className="inline-flex items-center justify-center w-full bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              Book Another Course
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            
            <p className="text-sm text-gray-400">
              Redirecting to home page in {countdown} seconds...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmationPage;