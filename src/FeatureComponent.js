import React from 'react';
import styled from 'styled-components';
import CertificateLogo from './components/certificate.png';
import fast from './components/quick.png'
import price from './components/tags.png'
import updates from './components/loading-arrow.png'
import flexi from './components/flexibility.png'
import production from './components/deployment.png'




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
    <FeatureContainer>
      <FeatureHeader>Why you'll love us</FeatureHeader>
      <Features>
        {featureData.map((item, index) => (
          <FeatureItem key={index}>
            <Logo src={item.logo} alt={`Logo${index + 1}`} />
            <FeatureTitle>{item.title}</FeatureTitle>
            <FeatureDescription>{item.description}</FeatureDescription>
          </FeatureItem>
        ))}
      </Features>
    </FeatureContainer>
  );
};

const FeatureContainer = styled.div`
  background: black;
  color: grey;
  padding: 20px;
  margin-left: 5%;
  margin-right: 5%;
`;

const FeatureHeader = styled.h2`
    color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  font-size: 60px;
  margin-bottom: 5%;
`;
const Logo = styled.img`
  max-width: 50px;
  max-height: 50px;
  margin-bottom: 10px;
  
  

`;
const Features = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FeatureItem = styled.div`
  width: 45%;
  margin-bottom: 20px;
  border: 1px solid white;
  border-radius: 10px;
  padding: 10px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: purple;
  font-weight: bold;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
`;

export default FeatureComponent;
