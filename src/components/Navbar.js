import React from 'react'
import logo from "./tailwind4523.jpg"

const Navbar = () => {
  return (
    <div className='flex w-[80%] justify-between m-auto border-violet-900 border-b-2' >
    <div>
    <img src={logo} className='w-[100px]' alt='logo'/>

    </div>

    <div className='flex justify-between items-center  w-[60%]'>
        <ul className='flex justify-between w-[60%] text-[20px]'>
            <li  className='hover:text-violet-600 text-gray-400 hover:bg-zinc-200 rounded-md px-2 py-1 ease-in-out duration-100 transition-transform hover:scale-110 uppercase'>Home</li>
            <li  className='hover:text-violet-600 text-gray-400 hover:bg-zinc-200 rounded-md px-2 py-1 ease-in-out duration-100 transition-transform hover:scale-110 uppercase'>Our Work</li>
            <li  className='hover:text-violet-600 text-gray-400 hover:bg-zinc-200 rounded-md px-2 py-1 ease-in-out duration-100 transition-transform hover:scale-110 uppercase'>About Us</li>
        </ul>

        <ul className='flex justify-between w-[25%]'>
            <li><button className='hover:bg-violet-600 text-white rounded-md text-bold font-bold bg-violet-500 border-b-violet-950 border-r-violet-950 border-solid border-2 px-2 py-1 hover:scale-110 uppercase'>Contact Us</button></li>


            
        </ul>
    </div>
      
    </div>
  )
}

export default Navbar
