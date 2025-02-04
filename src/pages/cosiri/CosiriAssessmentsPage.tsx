import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ClipboardCheck, BarChart4 } from 'lucide-react';

const CosiriAssessmentsPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold text-white mb-6">
            COSIRI <span className="text-yellow-500">Assessment Process</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your workforce capabilities with our comprehensive COSIRI assessment services.
          </p>
        </div>

        {/* Assessment Process */}
        <section className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Initial Analysis',
                description: 'We assess your current workforce competencies and transformation goals.',
                icon: <ClipboardCheck className="h-8 w-8 text-yellow-500" />
              },
              {
                title: 'Competency Mapping',
                description: 'Our certified assessors evaluate skills gaps and development needs.',
                icon: <CheckCircle2 className="h-8 w-8 text-yellow-500" />
              },
              {
                title: 'Development Plan',
                description: 'Receive a detailed competency development roadmap.',
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
              <h3 className="text-xl font-semibold text-white mb-4">For Organizations</h3>
              <ul className="space-y-3">
                {[
                  'Comprehensive workforce competency evaluation',
                  'Clear understanding of skills gaps',
                  'Targeted development recommendations',
                  'Industry benchmark comparisons',
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
                  'Certified COSIRI assessors',
                  'Deep industry knowledge',
                  'Global assessment experience',
                  'Proven competency frameworks',
                  'Comprehensive assessment tools'
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
            Ready to Develop Your <span className="text-yellow-500">Workforce Capabilities</span>?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us to discuss how a COSIRI assessment can help your organization build the competencies needed for Industry 4.0.
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
              to="/cosiri/introduction"
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

export default CosiriAssessmentsPage;