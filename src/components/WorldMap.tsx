import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

interface Location {
  country: string;
  coordinates: [number, number];
}

const locations: Location[] = [
  // Europe
  { country: 'United Kingdom', coordinates: [392, 119] },
  { country: 'Ireland', coordinates: [377, 120] },
  { country: 'France', coordinates: [400, 145] },
  { country: 'Poland', coordinates: [440, 125] },
  { country: 'Germany', coordinates: [420, 125] },
  { country: 'Belgium', coordinates: [407, 127] },
  { country: 'Italy', coordinates: [430, 155] },
  { country: 'Switzerland', coordinates: [415, 140] },
  { country: 'Malta', coordinates: [431, 173] },
  { country: 'Turkey', coordinates: [475, 162] },
  
  // Middle East
  { country: 'United Arab Emirates', coordinates: [520, 200] },
  { country: 'Saudi Arabia', coordinates: [500, 205] },
  { country: 'Qatar', coordinates: [515, 195] },
   { country: 'Egypt', coordinates: [467, 195] },
  { country: 'Oman', coordinates: [535, 210] },
  
  // Americas
  { country: 'United States', coordinates: [160, 170] },
  { country: 'Mexico', coordinates: [150, 210] },
  { country: 'Brazil', coordinates: [285, 300] },
  { country: 'Argentina', coordinates: [240, 350] },
  
  // Asia Pacific
  { country: 'Singapore', coordinates: [648, 258] },
  { country: 'Japan', coordinates: [730, 170] },
  { country: 'India', coordinates: [585, 210] },
  { country: 'New Zealand', coordinates: [800, 370] }
];

const WorldMap = () => {
  const [activePin, setActivePin] = useState<string | null>(null);

  return (
    <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <img 
          src="/images/world-map.png" 
          alt="World Map"
          className="w-full h-full object-contain"
        />
      </div>
      
      <svg
        viewBox="-40 -20 880 440"
        className="absolute inset-0 w-full h-full"
      >
        {/* Location Markers */}
        {locations.map((location, index) => (
          <g
            key={index}
            transform={`translate(${location.coordinates[0]},${location.coordinates[1]})`}
            className="cursor-pointer"
            onMouseEnter={() => setActivePin(location.country)}
            onMouseLeave={() => setActivePin(null)}
          >
            {/* Pin Icon */}
            <g transform="translate(-8, -20)">
              <foreignObject width="16" height="20">
                <MapPin 
                  className="w-4 h-5 text-white"
                />
              </foreignObject>
            </g>
            
            {/* Pulsing Effect */}
            <circle
              r="5"
              className="fill-white opacity-40 animate-ping"
            />
            
            {/* Tooltip */}
            {activePin === location.country && (
              <g transform="translate(0, -25)">
                <rect
                  x="-57.5"
                  y="-20"
                  width="115"
                  height="24"
                  rx="4"
                  fill="#1F2937"
                  className="opacity-90"
                />
                <text
                  fill="white"
                  textAnchor="middle"
                  dy="-4"
                  className="text-xs font-medium"
                >
                  {location.country}
                </text>
              </g>
            )}
          </g>
        ))}
      </svg>

      <style>
        {`
          .animate-ping {
            animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
          @keyframes ping {
            75%, 100% {
              transform: scale(1.75);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default WorldMap;