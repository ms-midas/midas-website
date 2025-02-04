import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Dave Oddis',
    role: 'Managing Director, Global Operations',
    bio: '35+ years experience in digital transformation and manufacturing excellence. Certified SIRI and COSIRI Assessor & Trainer.',
    linkedin: '#',
    image: '/images/dave.jpg'
  },
  {
    name: 'Mike Stevens',
    role: 'Training Director',
    bio: 'Manufacturing technology expert with 30+ years experience in Industry 4.0 implementation and training delivery.',
    linkedin: '#',
    image: '/images/mike.jpg'
  },
  {
    name: 'Louise Diamond',
    role: 'Head of Marketing',
    bio: 'Marketing expert driving impactful strategies to enhance brand visibility and audience engagement.',
    linkedin: '#',
    image: '/images/louise.jpg'
  },
  {
    name: 'Kathryn Aitchison',
    role: 'Head of Client Services',
    bio: 'Ensuring exceptional client support and delivering tailored solutions to meet diverse needs in sustainable manufacturing and digital transformation.',
    linkedin: '#',
    image: '/images/kathryn.jpg'
  }
];

const TeamPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-6">
          Meet the <span className="text-yellow-500">Team</span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-12">
          Our team of industry experts brings decades of combined experience in manufacturing excellence, digital transformation, and sustainability.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-yellow-500 mb-4">{member.role}</p>
                <p className="text-gray-300 mb-6">{member.bio}</p>
                <div className="flex space-x-4">
                  <a
                    href={member.linkedin}
                    className="text-gray-400 hover:text-yellow-500 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.name.toLowerCase().replace(/\s+/g, '.')}@midasdx.com`}
                    className="text-gray-400 hover:text-yellow-500 transition"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            Our Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Industry Experience',
                items: [
                  'Digital Manufacturing',
                  'Industry 4.0',
                  'Lean Manufacturing',
                  'Quality Management',
                  'Process Optimization'
                ]
              },
              {
                title: 'Training & Development',
                items: [
                  'SIRI Assessment',
                  'COSIRI Certification',
                  'Custom Training Programs',
                  'Workshop Facilitation',
                  'Consulting Services'
                ]
              }
            ].map((section, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;