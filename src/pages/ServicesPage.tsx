import React from 'react';
import { ArrowRight, BookOpen, Target, Award, Users, Workflow, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-yellow-500">Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Comprehensive solutions to transform your manufacturing operations through digital innovation and sustainability.
          </p>
        </div>
      </div>

      {/* Main Services */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Digital Transformation Training',
                description: 'Industry-leading training programs for manufacturing excellence. Our certified courses include SIRI and COSIRI assessor training, providing you with internationally recognized qualifications.',
                features: [
                  'SIRI Assessor Training',
                  'COSIRI Assessor Training',
                  'Custom Training Programs',
                  'Online and In-Person Options'
                ],
                icon: <BookOpen className="h-6 w-6" />,
                cta: {
                  text: 'View Training Schedule',
                  link: '/training'
                }
              },
              {
                title: 'Manufacturing Excellence',
                description: 'Expert guidance on implementing lean manufacturing principles and operational excellence. We help you optimize your processes and drive continuous improvement.',
                features: [
                  'Process Optimization',
                  'Lean Manufacturing',
                  'Quality Management',
                  'Performance Metrics'
                ],
                icon: <Target className="h-6 w-6" />,
                cta: {
                  text: 'Learn More',
                  link: '#contact'
                }
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-500 p-3 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white ml-4">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-400">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.cta.link}
                  className="inline-flex items-center text-yellow-500 hover:text-yellow-400"
                >
                  {service.cta.text} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Additional <span className="text-yellow-500">Services</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Sustainability Consulting',
                description: 'Strategic guidance for sustainable manufacturing practices and ESG compliance',
                icon: <Award className="h-6 w-6" />
              },
              {
                title: 'Digital Maturity Assessment',
                description: 'Comprehensive evaluation of your digital transformation readiness',
                icon: <LineChart className="h-6 w-6" />
              },
              {
                title: 'Implementation Support',
                description: 'Hands-on assistance with digital transformation initiatives',
                icon: <Workflow className="h-6 w-6" />
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-500 p-3 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white ml-4">{service.title}</h3>
                </div>
                <p className="text-gray-400">{service.description}</p>
                <a href="#contact" className="flex items-center text-yellow-500 mt-4 hover:text-yellow-400">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Why Choose <span className="text-yellow-500">MidasDX</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8 text-yellow-500" />,
                title: 'Industry Certified',
                description: 'Internationally recognized certifications and accreditations'
              },
              {
                icon: <Target className="h-8 w-8 text-yellow-500" />,
                title: 'Practical Approach',
                description: 'Hands-on training with real-world manufacturing scenarios'
              },
              {
                icon: <Users className="h-8 w-8 text-yellow-500" />,
                title: 'Expert Team',
                description: 'Learn from industry veterans with decades of experience'
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg">
                {item.icon}
                <h3 className="text-xl font-semibold text-white mt-4 mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;