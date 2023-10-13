import React, { useState } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0.9108893557422969) 0%, rgba(66,63,63,0.9108893557422969) 0%, rgba(32,31,31,1) 0%, rgba(0,0,0,1) 98%, rgba(0,0,0,0.9108893557422969) 100%);
  color: #fff;
  padding: 20px 0;
 display: flex;
 justify-content: center;
 
`;

const AboutUs = styled.div`
  h3 {
    font-size: 3rem;
   //background-color: #ae00ff;
   border: 3px solid grey;
  border-radius: 20px;
    display:flex;
    align-items: center;
    justify-content: center;
    border-style: solid;
    margin-top:3%;
    margin-bottom: 3%;
       
  }
  p {
    font-size: 1.5rem;
    color: gray;
    font-weight: bold;
    padding-left:5%;
  padding-right:5%;
  margin-bottom: 3%;
  }
`;

const ContactForm = styled.div`

  h3 {
    font-size: 1.5rem;
    color: black;
    display:flex;
     flex-direction:column;

  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 700px;
    margin: 0 auto;
    color:black;
    
    input,
    textarea {
      margin: 10px 0;
      padding: 10px;
      border: 1px solid #777;
      border-radius: 4x;
      font-size: 1rem;
    }
    button {
      background-color:  #ae00ff;
      color: #fff;
      border: none;
      border-radius: 4px;
      padding: 10px;
      font-size: 1rem;
      cursor: pointer;
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; // Spread items horizontally
  margin-top: 20px;
h3{
  font-size:1.5rem;
  border: 3px solid grey;
  border-radius: 10px;
  margin-bottom: 3%;
  margin-top:3% ;
}
  a {
   
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-right: 20px;
    font-size: large;
    margin-bottom: 5%;

    img {
      margin-right: 5px;
      width: 20px;
      height: 20px;
    }
  }
`;

function Footer() {
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
    // Handle form submission here (e.g., send the data to your server).
    // You can use Axios, Fetch, or any other library to make an HTTP request.

    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Message: ', message);

    // Reset the form after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <FooterContainer>
      <div className="container">
        <AboutUs>
          <h3 style={{ color: 'white' }}>About Us</h3>
          <p>
            We are a group of enthusiastic developers looking for the
            opportunity to develop and provide great complete end-to-end
            websites of almost all varieties custom-suited to your needs. We have worked on numerous sites with varities of technologies and specialize in making effective and responsive sites with user-friendly designs suitable to all your needs.
          </p>
        </AboutUs>
        <ContactInfo>
          <h3>Contact Us</h3>
        </ContactInfo>
        <ContactForm>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="message"
              placeholder="Tell us about your requirements"
              value={message}
              onChange={handleInputChange}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </ContactForm>
        <ContactInfo>
          <a href="https://wa.me/+91-8318264953" target="_blank" rel="noopener noreferrer">
            <img src=" https://tochat.be/whatsapp-icon-white.png" alt="WhatsApp" />
            WhatsApp
          </a>
          <a href="yourwebsitebuilders@gmail.com">
            <img src="https://www.freepnglogos.com/uploads/gmail-email-logo-png-16.png" alt="Email" />
            Email
          </a>
        </ContactInfo>
      </div>
    </FooterContainer>
  );
}

export default Footer;
