import React from 'react';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 text-yellow-500" />
              <span className="ml-2 text-xl font-bold text-white">MidasDX</span>
            </div>
            <p className="text-sm">
              Leading the way in digital transformation and sustainability training for manufacturing excellence.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-yellow-500">Home</a></li>
              <li><a href="/training" className="hover:text-yellow-500">Training</a></li>
              <li><a href="#about" className="hover:text-yellow-500">About Us</a></li>
              <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-yellow-500 mr-2" />
                info@midasdx.com
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 text-yellow-500 mr-2" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 text-yellow-500 mr-2" />
                123 Training Center, Innovation District
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Stay updated with our latest courses and industry insights.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gray-700 text-white p-2 rounded-lg"
              />
              <button
                type="submit"
                className="w-full bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg font-semibold hover:bg-yellow-400 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} MidasDX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;