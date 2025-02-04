import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ClipboardCheck, BarChart4 } from 'lucide-react';

const SiriAssessmentsPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold text-white mb-6">
            SIRI <span className="text-yellow-500">Assessment Process</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your manufacturing operations with our comprehensive SIRI assessment services.
          </p>
        </div>

        {/* Assessment Process */}
        <section className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Initial Consultation',
                description: 'We work with you to understand your goals and scope the assessment.',
                icon: <ClipboardCheck className="h-8 w-8 text-yellow-500" />
              },
              {
                title: 'Assessment Execution',
                description: 'Our certified assessors conduct a thorough evaluation using the SIRI framework.',
                icon: <CheckCircle2 className="h-8 w-8 text-yellow-500" />
              },
              {
                title: 'Results & Roadmap',
                description: 'Receive detailed insights and a customized transformation roadmap.',
                icon: <BarChart4 className="h-8 w-8 text-yellow-500" />
              }
            ].map((step, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {step.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{step.title}</h3>
                </div>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-gray-800 rounded-lg px-8 mt-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Why Choose Our <span className="text-yellow-500">Assessment Service</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">For Manufacturers</h3>
              <ul className="space-y-3">
                {[
                  'Objective evaluation of Industry 4.0 maturity',
                  'Clear understanding of strengths and gaps',
                  'Prioritized improvement recommendations',
                  'Benchmark against industry standards',
                  'Expert guidance throughout the process'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">Our Expertise</h3>
              <ul className="space-y-3">
                {[
                  'Certified SIRI assessors',
                  'Extensive manufacturing industry experience',
                  'Global assessment experience',
                  'Deep understanding of Industry 4.0',
                  'Proven assessment methodology'
                ].map((point, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your <span className="text-yellow-500">Manufacturing Operations</span>?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us to discuss how a SIRI assessment can help your organization achieve manufacturing excellence.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/about/contact"
              className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/siri/introduction"
              className="border border-yellow-500 text-yellow-500 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-gray-900 transition"
            >
              Learn More
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SiriAssessmentsPage;