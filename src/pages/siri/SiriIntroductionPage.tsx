import React from 'react';
import { ArrowRight, CheckCircle, BarChart3, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const SiriIntroductionPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              Smart Industry Readiness <span className="text-yellow-500">Index</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              The global standard for Industry 4.0 transformation, helping manufacturers assess and develop their digitalization roadmap.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/siri/course-info"
                className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition inline-flex items-center"
              >
                Get Certified <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/siri/assessments"
                className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-gray-900 transition"
              >
                Learn About Assessments
              </Link>
            </div>
          </div>
        </div>

        {/* Framework Overview */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            The SIRI <span className="text-yellow-500">Framework</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Process',
                items: ['Operations', 'Supply Chain', 'Product Lifecycle'],
                icon: <BarChart3 className="h-8 w-8 text-yellow-500" />
              },
              {
                title: 'Technology',
                items: ['Automation', 'Connectivity', 'Intelligence'],
                icon: <Target className="h-8 w-8 text-yellow-500" />
              },
              {
                title: 'Organization',
                items: ['Talent Readiness', 'Structure & Management', 'Strategy & Governance'],
                icon: <CheckCircle className="h-8 w-8 text-yellow-500" />
              }
            ].map((block, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {block.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{block.title}</h3>
                </div>
                <ul className="space-y-2">
                  {block.items.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-800 rounded-lg px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Benefits of SIRI <span className="text-yellow-500">Assessment</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Objective Evaluation',
                description: 'Get a clear, unbiased view of your Industry 4.0 maturity level'
              },
              {
                title: 'Structured Approach',
                description: 'Follow a proven methodology for digital transformation'
              },
              {
                title: 'Global Benchmarking',
                description: 'Compare your performance against industry standards'
              },
              {
                title: 'Clear Roadmap',
                description: 'Develop a prioritized plan for improvement initiatives'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-yellow-500">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your <span className="text-yellow-500">SIRI Journey</span>?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the global community of certified SIRI assessors and help organizations transform their manufacturing operations.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/siri/training-schedule"
              className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              View Training Schedule
            </Link>
            <Link
              to="/about/contact"
              className="border border-yellow-500 text-yellow-500 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-gray-900 transition"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SiriIntroductionPage;