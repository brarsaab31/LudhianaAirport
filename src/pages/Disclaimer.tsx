import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdBanner from '../components/AdBanner';
import { AlertTriangle, Info, Clock, Plane } from 'lucide-react';

const Disclaimer = () => {
  const ads = [
    {
      id: 1,
      title: 'Legal Advisory',
      description: 'Professional legal consultation',
      image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.vakilsearch.com',
      color: 'bg-orange-600'
    },
    {
      id: 2,
      title: 'Risk Management',
      description: 'Protect against uncertainties',
      image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.policybazaar.com',
      color: 'bg-red-600'
    },
    {
      id: 3,
      title: 'Information Accuracy',
      description: 'Verify before you travel',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      website: 'https://www.factchecker.in',
      color: 'bg-yellow-600'
    }
  ];

  const disclaimers = [
    {
      icon: Info,
      title: 'General Information',
      content: [
        'This website provides general information about Halwara International Airport',
        'Information is provided for informational purposes only',
        'We make no representations or warranties about the accuracy of information',
        'Content may be updated without notice',
        'Users should verify information independently before making decisions'
      ]
    },
    {
      icon: Plane,
      title: 'Flight Information',
      content: [
        'Flight schedules and information are subject to change without notice',
        'We are not responsible for flight delays, cancellations, or schedule changes',
        'Passengers should confirm flight details directly with airlines',
        'Real-time flight information may not be available during development phase',
        'Airport operations are subject to weather and operational conditions'
      ]
    },
    {
      icon: Clock,
      title: 'Service Availability',
      content: [
        'Airport services and facilities are subject to operational requirements',
        'Operating hours may change based on flight schedules',
        'Some services may be temporarily unavailable during maintenance',
        'Third-party services are provided by independent operators',
        'We do not guarantee continuous availability of all services'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Limitation of Liability',
      content: [
        'We disclaim all liability for any loss or damage arising from use of this website',
        'Users access and use this website at their own risk',
        'We are not liable for any indirect, incidental, or consequential damages',
        'This disclaimer applies to the fullest extent permitted by law',
        'Some jurisdictions may not allow certain limitations of liability'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Disclaimer</h1>
            <p className="text-xl text-orange-100">
              Important information about the use of our website and services.
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
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0" />
                  <p className="text-yellow-800 font-medium">
                    Please read this disclaimer carefully before using our website or services.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              {disclaimers.map((section, index) => (
                <div key={index} className="border-l-4 border-orange-500 pl-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <section.icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-red-50 rounded-xl border border-red-200">
              <h3 className="text-xl font-bold text-red-800 mb-4">Important Notice</h3>
              <p className="text-red-700 mb-4">
                This website is not the official website of Halwara International Airport or any government authority. It is a personal initiative created to help people access general and useful information about the airport.
 </p>
              <p className="text-red-700">
All content is sourced from publicly available data, news, and user submissions. We make efforts to ensure accuracy but cannot guarantee it. For official updates, flight information, or government announcements, please refer to authorized sources.<p> </p>
 </p>
             
              <p className="text-red-700">
                Use the information on this site at your own discretion.
<p> </p>
              </p>
              
              <p className="text-red-700">
                For the most current and accurate information, please contact the airport directly 
                or check with relevant authorities.
              </p>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Contact for Clarifications</h3>
              <p className="text-blue-700">
                If you have any questions about this disclaimer or need clarification on any matter, 
                please contact us at <strong>info@halwaraairport.com</strong> or call 
                <strong> +91 161 234 5678</strong>.
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

export default Disclaimer;