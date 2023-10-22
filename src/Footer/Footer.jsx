import { useState } from 'react';
import Contact from './Contact';
function Footer({contactSectionRef}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Message: ', message);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <footer className="bg-black p-5 text-white py-5 flex justify-center">
      <div className="container">
        <div className="border-4 border-gray-600 rounded-lg p-5 mb-5">
          <h3 className="text-3xl text-center border-4 text-yellow-400 border-gray-600 rounded-lg mb-5 px-5 py-3">About Us</h3>
          <p className="text-lg text-gray-400 px-5 py-3">
            We are a group of enthusiastic developers looking for the opportunity to develop and provide great complete
            end-to-end websites of almost all varieties custom-suited to your needs. We have worked on numerous sites
            with varities of technologies and specialize in making effective and responsive sites with user-friendly
            designs suitable to all your needs.
          </p>
        </div>
        <div className="flex items-center justify-center mb-5">
          <h3 className="text-3xl border-4 text-yellow-400 border-gray-600 rounded-lg mb-5 px-5 py-3">Contact Us</h3>
        </div>
        <div ref={contactSectionRef} id="contact">
        <Contact/>
         
        </div>
        <div className="flex items-center justify-center mt-5 mb-5">
          <a href="https://wa.me/+918858751634" target="_blank" rel="noopener noreferrer" className="text-white mr-10">
            <img
              src="https://tochat.be/whatsapp-icon-white.png"
              alt="WhatsApp"
              className="mr-2 w-5 h-5 inline-block"
            />
            WhatsApp
          </a>
          <div></div>
          <a href="mailto:yoursitebuilders@gmail.com" target="_blank"  className="text-white">
            <img
              src="https://www.freepnglogos.com/uploads/gmail-email-logo-png-16.png"
              alt="Email"
              className="mr-2 w-5 h-3 inline-block"
            />
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
