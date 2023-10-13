import React from 'react'

import { GiHeartBattery } from "react-icons/gi";
import { GiHotMeal } from "react-icons/gi";
import { GiInvertedDice5 } from "react-icons/gi";
import { TbTournament } from "react-icons/tb";
import { GiLaptop } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";



const HeroBg = () => {
  return (
    <div className='mt-[20px] w-[100%] h-[50%] flex justify-center gap-[200px] flex-wrap items-center gap-y-[300px]'>


    
   <GiLaptop className='h-[100px] -z-40 w-[100px] text-gray-700 rotate-[-45deg]'/>
   <div></div> 
   <TbTournament className='h-[50px] w-[50px] text-gray-700 rotate-[-45deg]'/>
   <div></div>
   <GiInvertedDice5 className='h-[150px] w-[150px] text-gray-700 rotate-[-45deg]'/>
   <GiHotMeal className='h-[100px] w-[100px] text-gray-700 rotate-[-45deg]'/>
   <div className='h-[150px]  w-[150px] text-gray-700 rotate-[-45deg]'/>
   <div></div>
   <GiHamburger className='h-[100px] w-[100px] text-gray-700 rotate-[-45deg]'/>


   

   
      
    </div>
  )
}

export default HeroBg
