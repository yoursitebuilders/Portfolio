import React, { useState } from 'react';
import styled from 'styled-components';

const FAQComponent = () => {
    const [openIndex, setOpenIndex] = useState(null);
  
    const faqData = [
      {
        question: 'What services do you offer?',
        answer: 'We offer a wide range of services including web development, mobile app development, and more.',
      },
      {
        question: 'How seasoned is your squad of experts?',
        answer: 'Our team consists of highly experienced professionals who have worked over different projects and made interactive websites for the clients.',
      },
      {
        question: 'What makes your UI/UX designs stand out?',
        answer: 'Our focus on user-centered design and attention to detail helps us create intuitive and engaging experiences.',
      },
      {
        question: 'What is the process you follow for project development?',
        answer: "Our project development journey starts by diving deep into your needs, brand essence, and challenges. We follow a six-step process that's all about collaboration. At each stage, we gather your insights and feedback to ensure we're on the same page. This keeps us aligned with your vision every step of the way. Before we hand over the project, we give it a final quality check to make sure it's nothing short of amazing",
      },
      {
        question: 'What software do you use?',
        answer: 'We utilize a variety of tools and software based on the specific needs of each project.',
      },
    ];
  
    return (
      <FAQContainer>
         <Heading>We’ve got the answers to your questions</Heading>
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(index === openIndex ? null : index)}
          >
            <Question>{item.question}</Question>
            {openIndex === index && <Answer>{item.answer}</Answer>}
          </FAQItem>
        ))}
      </FAQContainer>
    );
  };
  
const FAQContainer = styled.div`
  background: black;
  color: white;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
  margin-top: 10%;
  margin-bottom: 10%;
  margin-left: 5%;
  margin-right: 5%;
`;
const Heading = styled.h2`
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  font-size: 60px;
  margin-bottom: 5%;
`;

const FAQItem = styled.div`
  border: 1px solid grey;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 30px;
  cursor:pointer;
`;

const Question = styled.h3`
  color: violet;
  display: flex;

  justify-content: center;

`;

const Answer = styled.p`
  color: grey;
  display: flex;
  justify-content: center;
  font-weight: 500;
`;

export default FAQComponent;
