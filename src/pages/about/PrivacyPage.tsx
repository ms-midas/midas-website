import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-6">
          Privacy <span className="text-yellow-500">Policy</span>
        </h1>
        
        <div className="bg-gray-800 rounded-lg p-8 mt-8">
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300">
              Last updated: January 25, 2025
            </p>

            <div className="mt-8 space-y-12">
              <section>
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-yellow-500 mr-3" />
                  <h2 className="text-2xl font-semibold text-white">Data Protection</h2>
                </div>
                <p className="text-gray-300">
                  We are committed to protecting your personal data and ensuring its privacy, security, and integrity. This privacy policy explains how we collect, use, and protect your personal information.
                </p>
              </section>

              <section>
                <div className="flex items-center mb-4">
                  <Eye className="h-6 w-6 text-yellow-500 mr-3" />
                  <h2 className="text-2xl font-semibold text-white">Information We Collect</h2>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Contact information (name, email, phone number)</li>
                  <li>• Company details</li>
                  <li>• Training participation records</li>
                  <li>• Certification status</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center mb-4">
                  <FileText className="h-6 w-6 text-yellow-500 mr-3" />
                  <h2 className="text-2xl font-semibold text-white">How We Use Your Information</h2>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Provide training services</li>
                  <li>• Process certifications</li>
                  <li>• Send important updates</li>
                  <li>• Improve our services</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center mb-4">
                  <Lock className="h-6 w-6 text-yellow-500 mr-3" />
                  <h2 className="text-2xl font-semibold text-white">Data Security</h2>
                </div>
                <p className="text-gray-300">
                  We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including:
                </p>
                <ul className="space-y-2 text-gray-300 mt-4">
                  <li>• Encryption of personal data</li>
                  <li>• Regular security assessments</li>
                  <li>• Access controls and authentication</li>
                  <li>• Regular security training for staff</li>
                </ul>
              </section>
            </div>

            <div className="mt-12 p-6 bg-gray-700 rounded-lg">
              <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-yellow-500 mt-2">info@midasdx.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;