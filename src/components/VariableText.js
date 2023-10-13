import React, { useState, useEffect } from 'react';

const TypingErasingText = ({text}) => {
 
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let currentIndex = 0;
    let erase = false;

    const typeEraseText = () => {
      if (erase) {
        if (currentIndex > 0) {
          setDisplayText(text.slice(0, currentIndex - 1));
          currentIndex--;
        } else {
          erase = false;
        }
      } else {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          erase = true;
        }
      }
      
      const delay = erase ? 200 : 100; // Adjust the typing and erasing speed here
      setTimeout(typeEraseText, delay);
    };

    typeEraseText();

    // Clean up the setTimeout when the component unmounts
    return () => clearTimeout(typeEraseText);
  }, []);

  return (
    <div>
      <p className='text-[50px]  '>{displayText}</p>
    </div>
  );
};

export default TypingErasingText;
