import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdBanner from '../components/AdBanner';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock, Car, Plane } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        { label: 'General Inquiries', value: '+91 161 234 5678' },
        { label: 'Flight Information', value: '+91 161 234 5679' },
        { label: 'Emergency', value: '+91 161 234 5680' },
        { label: 'Lost & Found', value: '+91 161 234 5681' }
      ]
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        { label: 'General Info', value: 'info@halwaraairport.com' },
        { label: 'Customer Service', value: 'support@halwaraairport.com' },
        { label: 'Media Inquiries', value: 'media@halwaraairport.com' },
        { label: 'Feedback', value: 'feedback@halwaraairport.com' }
      ]
    },
    {
      icon: MapPin,
      title: 'Address',
      details: [
        { label: 'Airport Location', value: 'Halwara International Airport' },
        { label: 'City', value: 'Ludhiana, Punjab' },
        { label: 'PIN Code', value: '141001' },
        { label: 'Country', value: 'India' }
      ]
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      details: [
        { label: 'Airport Operations', value: '24/7' },
        { label: 'Customer Service', value: '6:00 AM - 10:00 PM' },
        { label: 'Information Desk', value: '5:00 AM - 11:00 PM' },
        { label: 'Lost & Found', value: '24/7' }
      ]
    }
  ];

  const departments = [
    {
      icon: Plane,
      name: 'Flight Operations',
      phone: '+91 161 234 5690',
      email: 'operations@halwaraairport.com',
      description: 'Flight schedules, delays, cancellations'
    },
    {
      icon: Car,
      name: 'Ground Transportation',
      phone: '+91 161 234 5691',
      email: 'transport@halwaraairport.com',
      description: 'Taxi, parking, shuttle services'
    },
    {
      icon: MapPin,
      name: 'Terminal Services',
      phone: '+91 161 234 5692',
      email: 'terminal@halwaraairport.com',
      description: 'Facilities, accessibility, amenities'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        <div className="bg-gradient-to-r from-green-600 to-green-700 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-green-100">
              Get in touch with us for any questions or assistance.
            </p>
          </div>
        </div>

        <AdBanner />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <info.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{info.title}</h3>
                </div>
                <div className="space-y-4">
                  {info.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-600 font-medium">{detail.label}:</span>
                      <span className="text-gray-900 font-semibold">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Department Contacts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {departments.map((dept, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <dept.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.name}</h3>
                  <p className="text-gray-600 mb-4">{dept.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="font-medium">Phone:</span> {dept.phone}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Email:</span> {dept.email}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Location Map</h2>
            <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">Interactive map coming soon</p>
                <p className="text-gray-500">Halwara International Airport, Ludhiana, Punjab</p>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
        
        <AdBanner />
      </div>

      <Footer />
    </div>
  );
};

export default Contact;