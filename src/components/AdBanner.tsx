import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AdBannerProps {
  ads?: {
    id: number;
    title: string;
    description: string;
    image: string;
    website: string;
    color: string;
  }[];
}

const AdBanner: React.FC<AdBannerProps> = ({ ads = [] }) => {
  const navigate = useNavigate();

  const handleAdClick = () => {
    navigate('/advertise');
  };

  return (
    <div className="py-8 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((index) => (
            <button
              key={index}
              onClick={handleAdClick}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full text-left"
            >
              <div 
                className="bg-gradient-to-r from-gray-600 to-gray-700 h-24 flex items-center justify-between p-4 relative"
              >
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 flex-1">
                  <h3 className="text-white font-bold text-lg mb-1">Advertise Here</h3>
                  <p className="text-white/90 text-sm">Promote your business with us</p>
                </div>
                <div className="relative z-10 ml-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 group-hover:bg-white/30 transition-colors">
                    <ExternalLink className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdBanner;