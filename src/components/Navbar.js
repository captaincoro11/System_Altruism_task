import React from 'react'
import { Link } from 'react-router-dom'
import { SiSolana } from "react-icons/si";


const Navbar = () => {
  return (
    <div className='flex justify-center items-center '>
    <div className=' w-4/5 fixed mt-32 flex justify-between items-center h-20 rounded-lg bg-opacity-95 bg-gray-300'>
    <div className=' '>
    <Link to='/'>
    <h1 className=' mt-2 text-3xl font-bold font-custom-Font ml-12'>FORGD</h1>
    <div className='flex'>
    <p className='ml-12 text-md font-custom-Font font-extralight'>on Solana</p>
    <SiSolana className=' size-4 mt-1.5 ml-1' />
      
    </div>

    </Link>
  

    </div>
    <div className=' flex space-x-12 font-bold  font-custom-Font'>
    <div className=' '><Link className='' to='/tools'>Tools & Services</Link></div>
    <div><Link to='/about'>About</Link></div>
    <div><Link to='/contact'>Contact Us</Link></div>
    




    </div>

    <div className='flex space-x-6 mr-6'>
    <Link className='text-black font-semibold p-2 text-md font-mono ' to='/comingsoon'>Sign In</Link>

    <Link to='/comingsoon'><button className='text-white bg-black  w-32 h-10  font-semibold rounded-md text-md font-mono'>Register</button></Link>

    </div>

      
    </div>
    </div>
  )
}

export default Navbar
