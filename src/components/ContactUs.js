import React, { useState } from 'react'
import Navbar from './Navbar'
import { FaMailBulk, FaMailchimp, FaTelegramPlane } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { SiSolana } from "react-icons/si";
import Footer from './Footer';


const ContactUs = () => {
  const [isYes , setIsYes] = useState('');
  const [isNo , setIsNo] = useState('no');



  const onClickYes = ()=>{
    setIsYes('yes');
    setIsNo('')

  }

  const onClickNo = ()=>{
    setIsNo('no');
    setIsYes('')

  }
  return (
    <>
    <div>
      <div className='flex justify-center items-center '>
    <div className=' w-4/5 mt-20 flex justify-between items-center h-20 rounded-lg bg-opacity-95 bg-gray-300'>
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

    <div className='mt-40 ml-40 '>
    <div className='flex justify-between' >
    <div className=''>
    <p className=' bg-white  w-52 rounded-full text-center font-medium font-mono bg-opacity-50 p-2 text-blue-600 text-md'>Contact Us</p>
    <p className='mt-16 text-5xl font-mono font-medium'>Connect with an </p>
    <p className='text-5xl font-mono font-medium'>expert at Forgd.</p>
    <p className='mt-8 text-md font-mono text-gray-500'>Chat with a real person today by providing your </p>
    <p className=' text-md font-mono text-gray-500'>Telegram or email. Learn more about Forgd or get</p>
    <p className=' text-md font-mono text-gray-500'>educated on how to best utilize our tools.  </p>
    </div>
    <div className=' absolute left-1/2'>
    <p><FaTelegramPlane size={80}/></p>
    <p className='mt-16 text-4xl tracking-tight text-blue-500 font-mono ' >Let's chat on Telegram and</p>
    <p className='text-4xl tracking-tight text-blue-500 font-mono ' >speed things up.</p>
    <p className='mt-12 font-mono tracking-tight'>Share Your Handle</p>
    <div>
    <input className='p-4 w-80 rounded-lg' placeholder='Enter Your Handle' type="text" />
    <button className='ml-8 p-3 font-mono bg-black rounded-lg text-white'>Share Your Handle</button>

    </div>


    <p className=' mt-20'><FaMailBulk size={80}/></p>
    <p className='mt-16 text-4xl tracking-tight  text-blue-600 font-mono '>Shoot us an email</p>
    <p className=' text-4xl tracking-tight  text-blue-600 font-mono '>Our team will reach out </p>
    <p className='text-4xl tracking-tight  text-blue-600 font-mono '> back shortly.</p>
    <p className='mt-12 font-mono tracking-tight'>Email</p>
    <input className='p-4 w-full rounded-lg' placeholder='Enter your email' type="text" />

    <p className='mt-8 font-mono tracking-tight'>Topic</p>
    <input className='p-4 w-full rounded-lg' placeholder='Enter your topic' type="text" />

    <p className='mt-8 font-mono tracking-tight'>Message</p>
    <input className='p-4 w-full rounded-lg' placeholder='Enter your message' type="text" />

    <div className='mt-12 font-mono flex justify-between'>
    <div>
    <p>Are you associated with a blockchain project  </p>
     <p>built in Solana?</p>
    </div>
    <div className='bg-white p-1 rounded-lg' >
    <button onClick={onClickYes} className={isYes==='yes'?'bg-green-400  rounded-lg p-2':'bg-white rounded-tl-lg rounded-bl-lg p-2'}>Yes</button>
    <button onClick={onClickNo} className={isNo==='no'?'bg-black text-white  rounded-lg p-2 ml-2':' ml-2 text-black rounded-tr-lg rounded-br-lg p-2'}>No</button>

    </div>

    </div>

    <button className=' bg-black mt-12 text-white font-mono font-medium p-2 rounded-lg w-full text-center'>SUBMIT EMAIL</button>

   


    

    </div>



    
    </div>
    
   

    </div>
    

   
      
    </div>
   
   </>
    
  )
}

export default ContactUs
