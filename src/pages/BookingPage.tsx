import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { format } from 'date-fns';
import { Plus, Minus, Info, ArrowLeft, ArrowRight, Calendar, Clock, MapPin, Globe } from 'lucide-react';
import { countries } from '../utils/countries';

interface BookingFormData {
  billingDetails: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    companyName: string;
    billingAddress: string;
    country: string;
    vatNumber: string;
  };
  includeCertification: boolean;
  participants: {
    firstName: string;
    lastName: string;
    email: string;
  }[];
}

interface LocationState {
  course: {
    id: string;
    course_name: string;
    course_type: 'SIRI' | 'COSIRI';
    start_date: string;
    end_date: string;
    timezone: 'UAE' | 'UK' | 'USA';
    display_timezone: string;
    time: string;
    price: number;
    is_visible: boolean;
  };
}

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state?.course) {
      navigate('/training');
    }
  }, [location.state, navigate]);

  if (!location.state?.course) return null;
  
  const { course } = location.state as LocationState;
  
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<BookingFormData>({
    billingDetails: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      companyName: '',
      billingAddress: '',
      country: '',
      vatNumber: ''
    },
    includeCertification: true,
    participants: [{ firstName: '', lastName: '', email: '' }]
  });

  const handleBillingDetailsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      billingDetails: {
        ...formData.billingDetails,
        [e.target.name]: e.target.value
      }
    });
  };

  const handleCertificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      includeCertification: e.target.checked
    });
  };

  const handleParticipantChange = (index: number, field: string, value: string) => {
    const updatedParticipants = [...formData.participants];
    updatedParticipants[index] = {
      ...updatedParticipants[index],
      [field]: value
    };
    setFormData({
      ...formData,
      participants: updatedParticipants
    });
  };

  const addParticipant = () => {
    if (formData.participants.length < 4) {
      setFormData({
        ...formData,
        participants: [
          ...formData.participants,
          { firstName: '', lastName: '', email: '' }
        ]
      });
    }
  };

  const removeParticipant = (index: number) => {
    const updatedParticipants = formData.participants.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      participants: updatedParticipants
    });
  };

  const copyBillingToParticipant = () => {
    const updatedParticipants = [...formData.participants];
    updatedParticipants[0] = {
      firstName: formData.billingDetails.firstName,
      lastName: formData.billingDetails.lastName,
      email: formData.billingDetails.email
    };
    setFormData({
      ...formData,
      participants: updatedParticipants
    });
  };

  const calculateTotal = () => {
    const courseFee = course.price * formData.participants.length;
    const certificationFee = formData.includeCertification ? (950 * formData.participants.length) : 0;
    const subtotal = courseFee + certificationFee;
    const vatRate = formData.billingDetails.country === 'United Kingdom' && !formData.billingDetails.vatNumber ? 0.2 : 0;
    const vat = subtotal * vatRate;
    return {
      subtotal,
      vat,
      total: subtotal + vat
    };
  };

  const validateForm = () => {
    const { firstName, lastName, email, phone, companyName, billingAddress, country } = formData.billingDetails;
    return firstName && lastName && email && phone && companyName && billingAddress && country &&
           formData.participants.every(p => p.firstName && p.lastName && p.email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      alert('Please fill in all required fields before submitting.');
      return;
    }

    try {
      const { data, error } = await supabase
        .from('bookings')
        .insert([
          {
            course_id: course.id,
            billing_details: formData.billingDetails,
            include_certification: formData.includeCertification,
            participants: formData.participants,
            total_amount: calculateTotal().total
          }
        ]);

      if (error) throw error;

      navigate('/booking/confirmation', {
        state: {
          booking: {
            course,
            participants: formData.participants
          }
        }
      });
    } catch (err) {
      alert('Error submitting booking. Please try again.');
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <button
          onClick={() => navigate('/training')}
          className="flex items-center text-yellow-500 hover:text-yellow-400 mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Training Schedule
        </button>

        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{course.course_name}</h2>
              <Link 
                to={`/courses/${course.course_type.toLowerCase()}`}
                className="text-yellow-500 hover:text-yellow-400 text-sm font-medium inline-flex items-center"
              >
                View Course Information
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="h-16 w-auto bg-white rounded-lg p-3">
              <img
                src={`/images/${course.course_type.toLowerCase()}-logo.png`}
                alt={`${course.course_type} logo`}
                className="h-full object-contain"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-gray-300">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-yellow-500 mr-2" />
                <span>{format(new Date(course.start_date), 'MMM do')} - {format(new Date(course.end_date), 'MMM do yyyy')}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-yellow-500 mr-2" />
                <span>{course.time}</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-4 w-4 text-yellow-500 mr-2" />
                <span>{course.display_timezone}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-yellow-500 mr-2" />
                <span>Online (Instructor Led)</span>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-4 mt-4">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Course Fee</span>
                  <div className="text-right">
                    <span className="text-xl font-bold text-white">£{course.price.toLocaleString()}</span>
                    <span className="text-sm text-gray-400 ml-1">+ taxes per participant</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Optional Certification Fee</span>
                  <div className="text-right">
                    <span className="font-bold text-white">£950</span>
                    <span className="text-gray-400 ml-1">+ taxes per participant</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start mt-4 pt-4 border-t border-gray-700/50">
                <Info className="h-4 w-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-400">
                  Certification examination fees are optional and can be added during the booking process.
                </p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Billing Details */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-6">Billing Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.billingDetails.firstName}
                  onChange={handleBillingDetailsChange}
                  className="w-full bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.billingDetails.lastName}
                  onChange={handleBillingDetailsChange}
                  className="w-full bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.billingDetails.email}
                  onChange={handleBillingDetailsChange}
                  className="w-full bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.billingDetails.phone}
                  onChange={handleBillingDetailsChange}
                  className="w-full bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-300 mb-2">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  required
                  value={formData.billingDetails.companyName}
                  onChange={handleBillingDetailsChange}
                  className="w-full bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-300 mb-2">
                  Billing Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="billingAddress"
                  required
                  value={formData.billingDetails.billingAddress}
                  onChange={handleBillingDetailsChange}
                  className="w-full bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">
                  Country <span className="text-red-500">*</span>
                </label>
                <select
                  name="country"
                  required
                  value={formData.billingDetails.country}
                  onChange={handleBillingDetailsChange}
                  className="w-full bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                >
                  <option value="">Select a country</option>
                  {countries.map((country) => (
                    <option key={country.code} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">
                  VAT Number
                  {formData.billingDetails.country === 'United Kingdom' && (
                    <span className="text-sm text-gray-400 ml-2">(required for VAT exemption)</span>
                  )}
                </label>
                <input
                  type="text"
                  name="vatNumber"
                  value={formData.billingDetails.vatNumber}
                  onChange={handleBillingDetailsChange}
                  className="w-full bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Certification Option */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-6">Examinations & Certification</h3>
            <div className="flex items-start space-x-4">
              <input
                type="checkbox"
                id="certification"
                checked={formData.includeCertification}
                onChange={handleCertificationChange}
                className="mt-1"
              />
              <div>
                <label htmlFor="certification" className="text-white font-medium">
                  Add examination fees (£950 plus taxes per participant)
                </label>
                <p className="text-gray-400 text-sm mt-1">
                  Include official certification examination fees for all participants
                </p>
              </div>
            </div>
          </div>

          {/* Participants */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-6">Participants</h3>
            
            <div className="mb-6">
              <button
                type="button"
                onClick={copyBillingToParticipant}
                className="text-yellow-500 hover:text-yellow-400 text-sm font-medium"
              >
                Use billing contact as Participant 1
              </button>
            </div>

            {formData.participants.map((participant, index) => (
              <div key={index} className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-white font-medium">Participant {index + 1}</h4>
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeParticipant(index)}
                      className="text-red-500 hover:text-red-400"
                    >
                      <Minus className="h-5 w-5" />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={participant.firstName}
                      onChange={(e) => handleParticipantChange(index, 'firstName', e.target.value)}
                      className="w-full bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={participant.lastName}
                      onChange={(e) => handleParticipantChange(index, 'lastName', e.target.value)}
                      className="w-full bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-300 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={participant.email}
                      onChange={(e) => handleParticipantChange(index, 'email', e.target.value)}
                      className="w-full bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            ))}

            {formData.participants.length < 4 && (
              <button
                type="button"
                onClick={addParticipant}
                className="flex items-center text-yellow-500 hover:text-yellow-400 font-medium"
              >
                <Plus className="h-5 w-5 mr-2" />
                Add Participant
              </button>
            )}

            <div className="mt-6 p-4 bg-gray-700 rounded-lg flex items-start space-x-3">
              <Info className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
              <p className="text-gray-300 text-sm">
                For bookings of 5 or more participants, please contact us for details of group discounts and company-specific courses.
              </p>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Order Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-300">
                <span>Course Fee ({formData.participants.length} participant{formData.participants.length > 1 ? 's' : ''})</span>
                <span>£{(course.price * formData.participants.length).toLocaleString()}</span>
              </div>
              {formData.includeCertification && (
                <div className="flex justify-between text-gray-300">
                  <span>Certification Fee ({formData.participants.length} participant{formData.participants.length > 1 ? 's' : ''})</span>
                  <span>£{(950 * formData.participants.length).toLocaleString()}</span>
                </div>
              )}
              <div className="border-t border-gray-700 pt-3">
                <div className="flex justify-between text-white font-bold">
                  <span>Subtotal</span>
                  <span>£{calculateTotal().subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-300 mt-2">
                  <span>VAT ({formData.billingDetails.country === 'United Kingdom' && !formData.billingDetails.vatNumber ? '20%' : '0%'})</span>
                  <span>£{calculateTotal().vat.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-white font-bold mt-2 pt-2 border-t border-gray-700">
                  <span>Total</span>
                  <span>£{calculateTotal().total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Terms Confirmation */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="termsConfirmation"
                  required
                  className="mt-1"
                />
                <label htmlFor="termsConfirmation" className="text-gray-300 text-sm">
                  I understand and agree that:
                  <ul className="mt-2 space-y-1 list-disc list-inside">
                    <li>An invoice will be sent to {formData.billingDetails.firstName} {formData.billingDetails.lastName} ({formData.billingDetails.email})</li>
                    <li>All participants will receive a confirmation email with course details</li>
                    <li>No financial information will be sent to participants</li>
                    <li>Full payment must be received before course materials and access are provided</li>
                  </ul>
                </label>
              </div>
              
              <div className="flex items-start space-x-3 pt-4 border-t border-gray-700">
                <input
                  type="checkbox"
                  id="privacyTerms"
                  required
                  className="mt-1"
                />
                <label htmlFor="privacyTerms" className="text-gray-300 text-sm">
                  I agree to the <a href="#" className="text-yellow-500 hover:text-yellow-400">Privacy Policy</a> and{' '}
                  <a href="#" className="text-yellow-500 hover:text-yellow-400">Terms & Conditions</a>
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-gray-900 py-3 px-4 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Complete Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;