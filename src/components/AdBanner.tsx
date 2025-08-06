import React from 'react';
import { ExternalLink } from 'lucide-react';

interface AdBannerProps {
  ads: {
    id: number;
    title: string;
    description: string;
    image: string;
    website: string;
    color: string;
  }[];
}

const AdBanner: React.FC<AdBannerProps> = ({ ads }) => {
  return (
    <div className="py-8 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ads.map((ad) => (
            <a
              key={ad.id}
              href={ad.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div 
                className={`${ad.color} h-24 flex items-center justify-between p-4 relative`}
                style={{
                  backgroundImage: `url('${ad.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundBlendMode: 'overlay'
                }}
              >
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 flex-1">
                  <h3 className="text-white font-bold text-lg mb-1">{ad.title}</h3>
                  <p className="text-white/90 text-sm">{ad.description}</p>
                </div>
                <div className="relative z-10 ml-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 group-hover:bg-white/30 transition-colors">
                    <ExternalLink className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdBanner;