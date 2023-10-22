import React, { useEffect, useState } from 'react';
import Video from './banner2.mp4';
import HeroBg from './HeroBg';
import './Hero.css';
import {BiLogoWhatsappSquare  } from "react-icons/bi";

const Hero = () => {
  const text = "Crafting Digital Identities, One Website at a Time";
  



 

 
  return (
    <div className="relative   -sm:mt-16 -mt-8  w-[100%] h-[100%] ">
      <div className="absolute z-10 text-yellow-100 w-[100%] flex justify-center items-start h-[100%]">
        {/* <HeroBg /> */}
      </div>
      <div className={`flex  sm:h-[200vh] h-[150vh] z-20 bg-transparent w-[80%] flex-col justify-between m-auto `}>
        <div className="flex flex-col justify-around w-[100%] h-[100vh] py-[100px]">
          <div className="text-white h-[100px]  z-40 text-[20px] sm:text-[40px] italic font-medium" >
            Want websites <span className='text-yellow-400 font-pixelify '>according to your custom needs</span> then you are at the right destination
          </div>
          <div className="justify-start flex">
            <div className="font-mono z-30 sm:leading-10 leading-10 text-center border-[2px] rounded-[2px_25px] sm:mt-0 mt-7 border-gray-400 justify-start flex p-3 text-[15px] sm:py-0   sm:text-[20px] text-white" >
              We specialize in creating custom-designed, responsive websites tailored to meet your unique business requirements.
            </div>
          </div>

          <div  className='sm:scale-100 scale-75  bg-gradient-animation z-20 duration-500 text-black rounded-[50px] text-bold font-bold bg-yellow-500 text-[30px] sm:hidden  visible translate-y-[8vh]   sm:px-10   px-2 py-4  hover:bg-white   uppercase'>
          <a href="https://wa.me/+918858751634" target="_blank" rel="noopener noreferrer" className="text-black mr-10 flex justify-center items-center gap-3 ">
            <BiLogoWhatsappSquare className='text-green-600 scale-150'/>
            
            WhatsApp
          </a>
          </div>
        </div>
        <div className="flex  -translate-x-6 sm:mt-7 mt-16 sm:translate-x-0 w-[120%] sm:w-[105%] h-[100vh] rounded-[10px] justify-center items-center" >
          <video
            className="rounded-[10px] shadow-[20px_20px_rgba(120, 120, 120)]"
            muted
            loop
            style={{ width: '100%', height: 'auto' }}
            autoPlay
          >
            <source src={Video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
