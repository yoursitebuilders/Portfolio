import React, { useEffect, useState } from 'react'
import Video from './banner.mp4'
import VariableText from './VariableText'
const Hero = () => {

 

    
  


  return (
    <div className='flex w-[80%] justify-between m-auto'>
    {/* left */}
    <div className='flex  flex-col justify-between gap-10  w-[50%] h-[100%]   py-[100px]' >

      <div className='font-bold text-violet-600 h-[100px] justify-start flex text-[40px]'>

      
      <VariableText   text={'Its your website builders'} />


      </div>

      <div className='justify-start flex'>

      <div className='justify-start flex  text-start text-gray-400'>

      Remember to clear the timeout using clearTimeout when the component unmounts or if you want to cancel it for some reason. This is essential to prevent memory leaks and unexpected behavior.

The setTimeout fetching data with a delay, or implementing any functionality that requires a timed event.
      </div>

      </div>



    </div>

    {/* right */}

    <div className='flex w-[50%]  justify-center items-center ' >

    {/* <Video/> */}

    <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
        
            autoPlay
          >
            <source src={Video} type="video/mp4" />
          </video>

    </div>


      
    </div>
  )
}

export default Hero
