import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// eslint-disable-next-line
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // template_68azonv    service_0uyg9cq  qrJn5xE2cSg6QSrTI
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
        'service_0uyg9cq',
        'template_68azonv',
        {
          from_name: form.name,
          to_name: "Yuvraj",
          from_email: form.email,
          to_email: "yuvrajsingh7452@gmail.com",
          message: form.message,
        },
       'qrJn5xE2cSg6QSrTI'
     
       
      )
      .then(
        () => {
          setLoading(false);
          // alert("Thank you. I will get back to you as soon as possible.");
          console.log("mail sent successfully" );
         
          toast.success("Thank you. I will get back to you as soon as possible.");
          
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);


          // alert(" something went wrong. Please try again.");
          toast.warning(" something went wrong. Please try again.");
        }
      );
  };
  const submitButtonStyle = {
    border: "2px solid #FFD700", 
    backgroundColor: "#FFD700", 
    color: "white", 
    padding: "12px 24px", 
    borderRadius: "8px", 
    outline: "none", 
    fontWeight: "bold",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
  };
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      
       
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4 '>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className=' py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email address?"
              className=' py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className=' py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            style={submitButtonStyle}
            className=' py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

     

    
    </div>
  );
};


export default Contact;