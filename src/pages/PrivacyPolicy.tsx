import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdBanner from '../components/AdBanner';
import { Shield, Eye, Database, Cookie, Mail, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
  const ads = [
    {
      id: 1,
      title: 'Secure Travel Insurance',
      description: 'Protect your privacy and journey',
      image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.policybazaar.com',
      color: 'bg-green-600'
    },
    {
      id: 2,
      title: 'Data Protection Services',
      description: 'Keep your information safe',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.norton.com',
      color: 'bg-blue-600'
    },
    {
      id: 3,
      title: 'Legal Advisory',
      description: 'Professional legal consultation',
      image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.vakilsearch.com',
      color: 'bg-purple-600'
    }
  ];

  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'Personal identification information (Name, email, phone number)',
        'Travel preferences and booking history',
        'Payment information (processed securely through third-party providers)',
        'Device information and IP addresses',
        'Cookies and similar tracking technologies'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'To provide and improve our airport services',
        'To process bookings and reservations',
        'To communicate important updates and notifications',
        'To personalize your experience on our website',
        'To comply with legal and regulatory requirements'
      ]
    },
    {
      icon: Shield,
      title: 'Data Protection',
      content: [
        'We implement industry-standard security measures',
        'Your data is encrypted during transmission and storage',
        'Access to personal information is restricted to authorized personnel',
        'Regular security audits and updates are conducted',
        'We never sell your personal information to third parties'
      ]
    },
    {
      icon: Cookie,
      title: 'Cookies Policy',
      content: [
        'We use cookies to enhance your browsing experience',
        'Essential cookies for website functionality',
        'Analytics cookies to understand user behavior',
        'Marketing cookies for personalized advertisements',
        'You can manage cookie preferences in your browser settings'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-xl text-blue-100">
              Your privacy is important to us. Learn how we protect your information.
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
                Halwara International Airport is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or use our services.
              </p>
            </div>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <section.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-blue-50 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us About Privacy</h3>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">info@halwaraairport.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">+91 161 234 5678</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AdBanner ads={ads} />
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;