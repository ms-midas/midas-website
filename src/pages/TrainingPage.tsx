import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Calendar, Clock, MapPin, Globe, Info, Filter } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { format } from 'date-fns';
import { useNavigate, useLocation } from 'react-router-dom';

interface Course {
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
}

const TrainingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [courseTypeFilter, setCourseTypeFilter] = useState<'all' | 'SIRI' | 'COSIRI'>('all');
  const [timezoneFilter, setTimezoneFilter] = useState<'all' | 'UAE' | 'UK' | 'USA'>('all');

  useLayoutEffect(() => {
    // Set initial filter if provided in location state
    if (location.state?.courseTypeFilter) {
      setCourseTypeFilter(location.state.courseTypeFilter);
    }
  }, [location.state]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const { data, error } = await supabase
        .from('training_sessions')
        .select('*')
        .eq('is_visible', true)
        .order('start_date', { ascending: true });

      if (error) throw error;

      setCourses(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const getLogoPath = (courseType: string) => {
    return courseType === 'SIRI' ? '/images/siri-logo.png' : '/images/cosiri-logo.png';
  };

  const handleBooking = (course: Course) => {
    navigate('/booking', { state: { course } });
  };

  const filteredCourses = courses.filter(course => {
    const matchesType = courseTypeFilter === 'all' || course.course_type === courseTypeFilter;
    const matchesTimezone = timezoneFilter === 'all' || course.timezone === timezoneFilter;
    return matchesType && matchesTimezone;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading courses...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <h1 className="text-4xl font-bold text-white mb-6 md:mb-0">
            Training <span className="text-yellow-500">Schedule</span>
          </h1>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <select
                value={courseTypeFilter}
                onChange={(e) => setCourseTypeFilter(e.target.value as 'all' | 'SIRI' | 'COSIRI')}
                className="bg-gray-800 text-white rounded-lg pl-10 pr-4 py-2 appearance-none focus:ring-2 focus:ring-yellow-500 focus:outline-none border border-gray-700 min-w-[160px]"
              >
                <option value="all">All Course Types</option>
                <option value="SIRI">SIRI</option>
                <option value="COSIRI">COSIRI</option>
              </select>
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-yellow-500" />
            </div>

            <div className="relative">
              <select
                value={timezoneFilter}
                onChange={(e) => setTimezoneFilter(e.target.value as 'all' | 'UAE' | 'UK' | 'USA')}
                className="bg-gray-800 text-white rounded-lg pl-10 pr-4 py-2 appearance-none focus:ring-2 focus:ring-yellow-500 focus:outline-none border border-gray-700 min-w-[160px]"
              >
                <option value="all">All Regions</option>
                <option value="UAE">UAE</option>
                <option value="UK">UK</option>
                <option value="USA">USA</option>
              </select>
              <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-yellow-500" />
            </div>
          </div>
        </div>

        {filteredCourses.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No courses found matching your filters.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 flex flex-col"
              >
                {/* Course Logo */}
                <div className="h-[80px] bg-white flex items-center justify-center p-3">
                  <img
                    src={getLogoPath(course.course_type)}
                    alt={`${course.course_type} logo`}
                    className="h-full object-contain"
                  />
                </div>

                {/* Course Header */}
                <div className="p-4 border-b border-gray-700 text-center">
                  <h3 className="text-lg font-semibold text-white mb-3">{course.course_name}</h3>
                  <div className="text-yellow-500 font-bold text-xl">
                    {format(new Date(course.start_date), 'MMM do')} - {format(new Date(course.end_date), 'MMM do yyyy')}
                  </div>
                </div>

                {/* Course Details */}
                <div className="p-4 space-y-3 flex-grow">
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-300 text-sm">
                      <Globe className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                      <span>{course.display_timezone}</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <Clock className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                      <span>{course.time}</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <MapPin className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                      <span>Online (Instructor Led)</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <Calendar className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                      <span>5 Days (40 hours)</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-700">
                    <div className="flex items-center mb-3">
                      <span className="text-xl font-bold text-white">£{course.price.toLocaleString()}</span>
                      <span className="text-sm text-gray-400 ml-1">+ taxes per participant</span>
                    </div>
                    <button
                      onClick={() => handleBooking(course)}
                      className="w-full bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg font-semibold hover:bg-yellow-400 transition text-sm"
                    >
                      Book Now
                    </button>
                    <div className="flex items-start mt-3 text-xs text-gray-400">
                      <Info className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Optional certification fee: £950 + taxes per participant</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainingPage;