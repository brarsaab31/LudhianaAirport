import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdBanner from '../components/AdBanner';
import { FileText, AlertTriangle, Scale, Users } from 'lucide-react';

const TermsOfUse = () => {
  const ads = [
    {
      id: 1,
      title: 'Legal Services',
      description: 'Professional legal consultation',
      image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.vakilsearch.com',
      color: 'bg-purple-600'
    },
    {
      id: 2,
      title: 'Business Insurance',
      description: 'Protect your business interests',
      image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.policybazaar.com',
      color: 'bg-green-600'
    },
    {
      id: 3,
      title: 'Compliance Solutions',
      description: 'Stay compliant with regulations',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.cleartax.in',
      color: 'bg-blue-600'
    }
  ];

  const sections = [
    {
      icon: FileText,
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using this website, you accept and agree to be bound by these Terms of Use',
        'If you do not agree to these terms, please do not use our website or services',
        'We reserve the right to modify these terms at any time without prior notice',
        'Your continued use of the website constitutes acceptance of any changes'
      ]
    },
    {
      icon: Users,
      title: 'Use of Services',
      content: [
        'You must be at least 18 years old to use our services',
        'You are responsible for maintaining the confidentiality of your account',
        'You agree to provide accurate and complete information',
        'You will not use our services for any unlawful or prohibited activities',
        'Commercial use of our content requires prior written permission'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Prohibited Activities',
      content: [
        'Attempting to gain unauthorized access to our systems',
        'Transmitting viruses, malware, or other harmful code',
        'Harassing, threatening, or defaming other users',
        'Violating any applicable laws or regulations',
        'Interfering with the proper functioning of our website'
      ]
    },
    {
      icon: Scale,
      title: 'Limitation of Liability',
      content: [
        'Our services are provided "as is" without warranties of any kind',
        'We are not liable for any indirect, incidental, or consequential damages',
        'Our total liability shall not exceed the amount paid for our services',
        'Some jurisdictions do not allow limitation of liability',
        'Flight schedules and information are subject to change without notice'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Terms of Use</h1>
            <p className="text-xl text-purple-100">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>

        <AdBanner ads={ads} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="text-center mb-12">
              <p className="text-lg text-gray-600 leading-relaxed">
                Last updated: January 27, 2025
              </p>
              <p className="text-gray-600 mt-4">
                These Terms of Use ("Terms") govern your use of the Halwara International Airport 
                website and services. By using our website, you agree to comply with these terms.
              </p>
            </div>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="border-l-4 border-purple-500 pl-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <section.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-red-50 rounded-xl border border-red-200">
              <h3 className="text-xl font-bold text-red-800 mb-4">Important Notice</h3>
              <p className="text-red-700">
                Violation of these terms may result in termination of your access to our services. 
                We reserve the right to take appropriate legal action for any violations.
              </p>
            </div>
          </div>
        </div>

        <AdBanner ads={ads} />
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfUse;