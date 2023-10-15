import React from 'react'
import logo from "./tailwind4523 (2).jpg"
import './Gradiant.css'
// import useref from 'useref'
const Navbar = ({scrollToContactSection,contactSectionRef}) => {
  return (
    
    <div className='sm:mb-0 -mb-3 flex font-medium w-[80%]   justify-between m-auto border-gray-300 border-b-2' >
    <div>
    <img src={logo} className='sm:w-[150px] w-[100px] ' alt='logo'/>

    </div>

    <div className='flex  items-center '>
       


        
           <button onClick={()=>scrollToContactSection()} className='hover:bg-violet-600 gradient-animation text-white rounded-md text-bold font-bold bg-violet-500 border-b-violet-950 border-r-violet-950 border-solid border-2 sm:px-10  px-1 py-1 hover:scale-110 uppercase'>Contact Us</button>


            
        
    </div>

   
      
    </div>
  )
}

export default Navbar
