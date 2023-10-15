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

  return (
    <div className="bg-black w-[100%]  text-gray-300 sm:p-20 sm:mx-5 ">
      <h2 className="text-white text-center font-sarif text-2xl sm:text-5xl mb-10">Why you'll love us</h2>
      <div className="flex flex-wrap">
        {featureData.map((item, index) => (
          <div key={index} className="sm:w-1/2 flex flex-wrap   p-5">
            <div className="border border-white rounded-lg h-full p-5 flex flex-col items-center">
              <img src={item.logo} alt={`Logo${index + 1}`} className="w-10 h-10 mb-3" />
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
