import { useState } from 'react';

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
          <h3 className="text-3xl text-center border-4 border-gray-600 rounded-lg mb-5 px-5 py-3">About Us</h3>
          <p className="text-lg text-gray-400 px-5 py-3">
            We are a group of enthusiastic developers looking for the opportunity to develop and provide great complete
            end-to-end websites of almost all varieties custom-suited to your needs. We have worked on numerous sites
            with varities of technologies and specialize in making effective and responsive sites with user-friendly
            designs suitable to all your needs.
          </p>
        </div>
        <div className="flex items-center justify-center mb-5">
          <h3 className="text-3xl border-4 border-gray-600 rounded-lg mb-5 px-5 py-3">Contact Us</h3>
        </div>
        <div ref={contactSectionRef} id="contact">
          <form className="max-w-2xl mx-auto text-black" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleInputChange}
              required
              className="block w-full border-2 border-gray-500 p-2 rounded-lg mb-3"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleInputChange}
              required
              className="block w-full border-2 border-gray-500 p-2 rounded-lg mb-3"
            />
            <textarea
              name="message"
              placeholder="Tell us about your requirements"
              value={message}
              onChange={handleInputChange}
              required
              className="block w-full border-2 border-gray-500 p-2 rounded-lg mb-3"
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-900 text-white border-2 border-indigo-900 rounded-lg p-2 text-lg cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex items-center justify-center mt-5 mb-5">
          <a href="https://wa.me/+91-8318264953" target="_blank" rel="noopener noreferrer" className="text-white mr-10">
            <img
              src="https://tochat.be/whatsapp-icon-white.png"
              alt="WhatsApp"
              className="mr-2 w-10 h-10 inline-block"
            />
            WhatsApp
          </a>
          <div></div>
          <a href="yourwebsitebuilders@gmail.com" className="text-white">
            <img
              src="https://www.freepnglogos.com/uploads/gmail-email-logo-png-16.png"
              alt="Email"
              className="mr-2 w-10 h-10 inline-block"
            />
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
