import React from 'react'
import logo from "./logo1.png"
import './Gradiant.css'
// import useref from 'useref'
const Navbar = ({scrollToContactSection,contactSectionRef}) => {
  return (
    
    <div className=' sm:mb-0 bg-black z-50 sticky top-0 -mb-3 flex font-medium sm:w-[100%] w-[100%] px-6 py-4  justify-between m-auto  ' >
    <div>
    {/* <img src={logo} className='sm:w-[80px] w-[50px] h-[50px] ' alt='logo'/> */}

    <div className='text-white  font-pixelify  text-[22px]'>

    <div className="-translate-x-[20px]  ">
      Site
    </div>
    <div className='-mt-[7px]'>
      Builders
    </div>
       

    </div>

    </div>

    <div className='flex  items-center  '>
       
  

        
           <button onClick={()=>scrollToContactSection()} className='sm:scale-100 scale-75  bg-gradient-animation z-20 duration-500 text-black rounded-[20px] text-bold font-bold bg-yellow-500   sm:px-10   px-2 py-2  hover:bg-white   uppercase'>Contact Us</button>
 
         

            
        
    </div>

   
      
    </div>
  )
}

export default Navbar
