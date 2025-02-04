import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Let Netlify handle the form submission
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-900 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-6">
          Contact <span className="text-yellow-500">Us</span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Contact Information */}
          <div className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 text-yellow-500 mr-3" />
                <span>info@midasdx.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 text-yellow-500 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 text-yellow-500 mr-3" />
                <span>123 Training Center, Innovation District</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Globe className="h-5 w-5 text-yellow-500 mr-3" />
                <span>Global offices in UK, UAE, and USA</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-white mb-6">Send us a Message</h2>
            {submitted ? (
              <div className="text-center py-8">
                <h3 className="text-xl font-semibold text-white mb-2">Thank you for your message!</h3>
                <p className="text-gray-300">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  className="w-full bg-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-gray-900 py-3 px-4 rounded-lg font-semibold hover:bg-yellow-400 transition"
              >
                Send Message
              </button>
            </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;