import React, { useEffect } from 'react';
import './FeatureComponent.css'; // Create a CSS file for your component styles
import CertificateLogo from './components/certificate.png';
import fast from './components/quick.png';
import price from './components/tags.png';
import updates from './components/loading-arrow.png';
import flexi from './components/flexibility.png';
import production from './components/deployment.png';

const FeatureComponent = () => {
  const featureData = [
    {
      title: 'Top-notch quality',
      description: 'Unleash awe-inspiring design concepts whenever you desire, surpassing industry standards.',
      logo: CertificateLogo,
    },
    {
      title: 'Lightning fast delivery',
      description: 'Get your designs at least 2X faster compared to traditional agencies.',
      logo: fast,
    },
    {
      title: 'Fixed Prices',
      description: 'No surprises here! Pay the fixed price for your project, no billing by the hour.',
      logo: price,
    },
    {
      title: 'Regular Updates',
      description: 'Stay informed through consistent updates via weekly meetings, ensuring you\'re always in the loop.',
      logo: updates,
    },
    {
      title: 'Flexible and scalable',
      description: 'Need more hands? or wish to add new elements? Rest assured, we\'ll get it all done. On time.',
      logo: flexi,
    },
    {
      title: 'Production-Ready Code',
      description: 'We work with Webflow that helps us get you a fully-functional website within days.',
      logo: production,
    },
  ];

  useEffect(() => {
    const featureItems = document.querySelectorAll('.feature-item');

    function handleScroll() {
      featureItems.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;
        const itemBottom = item.getBoundingClientRect().bottom;

        if (itemTop < window.innerHeight && itemBottom > 0) {
          item.classList.add('slide-in'); // Add your CSS class for the slide-in animation
        }
      });
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-black w-[100%] text-gray-300 sm:p-20 sm:mt-0 -mt-[80vh] sm:mx-5">
      <h2 className="text-white text-center font-sarif text-2xl sm:text-5xl mb-10">Why you'll love us</h2>
      <div className="flex flex-wrap">
        {featureData.map((item, index) => (
          <div key={index} className="hover:scale-105 ease-in-out duration-100 sm:w-1/2 flex flex-wrap p-5 feature-item">
            <div className="border border-white rounded-lg h-full p-5 flex flex-col items-center">
              <img
                src={item.logo}
                alt={`Logo${index + 1}`}
                className={`w-10 h-10 mb-3 ${index % 3 === 0 ? 'animate-bounce' : 'animate-pulse'}`}
              />
              <h3 className="text-purple-600 text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureComponent;
