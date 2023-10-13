import React, { useEffect, useState } from 'react'
import Video from './banner2.mp4'
import VariableText from './VariableText'
import HeroBg from './HeroBg'

const Hero = () => {

 
const text=" Remember  tlearTimeout"
    
  


  return (

    <div className='relative w-[100%] h-[100%]'>

    {/* back */}

    <div className='absolute z-10  text-yellow-100 w-[100%] flex justify-center items-start h-[100%] '>

    <HeroBg/>

       





    </div>

    {/* main */}

   


    <div className=' flex h-[200vh] z-20 bg-transparent w-[80%] flex-col justify-between m-auto'>
    {/* left */}
    <div className='flex  flex-col justify-between gap-3  w-[100%] h-[100vh]   py-[100px]' >

    <div className='flex mx-auto w-[90%] h-[100px]  '>
        <div className=' z-30 font-bold text-violet-600 h-[100px] justify-start flex text-[40px]'>

      
      <VariableText   text={text} />


      </div>
    </div>

    {/* for cursive test */}

    <div className='text-purple-500 z-30 text-[40px] italic font-medium'>

    Remember to clear the timeout using clearTimeout
    </div>

    

      <div className='justify-start flex'>

      <div className='font-serif z-30 leading-10  justify-start flex p-3 text-[30px] text-start text-gray-400'>

      Remember to clear the timeout using clearTimeout when the component unmounts or if you want to cancel it for some reason. This is essential to prevent memory leaks and unexpected behavior
      </div>

      </div>



    </div>

    {/* right */}

    <div className='flex  w-[105%] h-[100vh] rounded-[10px] justify-center items-center ' >

    {/* <Video/> */}

    <video
            className="rounded-[10px]  shadow-[20px_20px_rgba(255,255,255)]"
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
  )
}

export default Hero
