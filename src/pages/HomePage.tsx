import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Users, Award, Target, BookOpen } from 'lucide-react';
import { SERVICES, TESTIMONIALS } from '../utils/constants';

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const maxPage = Math.ceil(TESTIMONIALS.length / 2) - 1;
  const autoPlayRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!isHovered) {
      autoPlayRef.current = setInterval(() => {
        setCurrentPage((prev) => (prev >= maxPage ? 0 : prev + 1));
      }, 10000);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isHovered, maxPage]);

  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover object-center"
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
            alt="Modern manufacturing environment"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-gray-900/80 to-gray-900"></div>
        </div>
        <div className="relative max-w-7xl mx-auto pt-48 px-4 sm:pt-56 sm:px-6 lg:px-8 flex flex-col min-h-screen">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Industry-Leading Training, Assessments and Consulting for {' '}
            <span className="text-yellow-500">Manufacturing Excellence</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Certified training programs and consulting in Digital Transformation and Sustainability to transform your manufacturing capabilities.
          </p>
         
          <div className="flex flex-wrap gap-4">
            <a
              href="/training"
              className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              Book Training Courses
            </a>
            <a
              href="#services"
              className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-gray-900 transition"
            >
              Contact Us
            </a>
          </div>
          <div className="flex flex-col items-center mt-16 mb-16">
            <div className="flex text-yellow-500 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <a
              href="#testimonials"
              className="text-gray-300 hover:text-yellow-500 transition flex items-center gap-1"
            >
              See what our clients say
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="flex-grow"></div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-10 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            What Our <span className="text-yellow-500">Clients Say</span>
          </h2>
          <div
            className="relative max-w-3xl mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentPage * 100}%)`,
                }}
              >
                {TESTIMONIALS.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gray-900 p-8 rounded-lg">
                      <div className="flex flex-col items-center text-center">
                        <p className="text-gray-300 mb-8 text-lg leading-relaxed">"{testimonial.quote}"</p>
                        <div>
                          <p className="text-yellow-500 font-semibold text-lg mb-1">{testimonial.author}</p>
                          <p className="text-gray-400">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center items-center space-x-2 mt-8">
              {[...Array(TESTIMONIALS.length)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentPage === index
                      ? 'bg-yellow-500 w-4'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Our <span className="text-yellow-500">Services</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-500 p-3 rounded-lg">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white ml-4">{service.title}</h3>
                </div>
                <p className="text-gray-400">{service.description}</p>
                <a href="#contact" className="flex items-center text-yellow-500 mt-4 hover:text-yellow-400">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/training"
              className="inline-flex items-center bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              View Training Schedule
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;