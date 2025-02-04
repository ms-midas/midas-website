import React from 'react';
import { Globe, MapPin } from 'lucide-react';
import WorldMap from '../../components/WorldMap';

const GlobalReachPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-6">
          Global <span className="text-yellow-500">Reach</span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-12">
          The Global reach of MidasDX. We deliver world-class training and consulting services globally.
        </p>

        <div className="mb-12">
          <WorldMap />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              region: 'United Kingdom',
              location: 'Coventry',
              timezone: 'GMT/BST',
              description: 'Our European headquarters, serving clients across the UK and EU'
            },
            {
              region: 'United Arab Emirates',
              location: 'Dubai',
              timezone: 'GST',
              description: 'Middle East operations hub, supporting MENA region clients'
            },
            {
              region: 'United States',
              location: 'New York',
              timezone: 'EST',
              description: 'Americas headquarters, serving North and South American clients'
            }
          ].map((office, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Globe className="h-6 w-6 text-yellow-500 mr-3" />
                <h3 className="text-xl font-semibold text-white">{office.region}</h3>
              </div>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>{office.location}</span>
                </div>
                <p>{office.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Global Training Delivery
          </h2>
          <div className="bg-gray-800 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Online Training</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Live instructor-led sessions</li>
                  <li>• Interactive workshops</li>
                  <li>• Multiple timezone options</li>
                  <li>• Global networking opportunities</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">In-Person Training</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• On-site training at your facility</li>
                  <li>• Regional training centers</li>
                  <li>• Hands-on workshops</li>
                  <li>• Custom location arrangements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalReachPage;