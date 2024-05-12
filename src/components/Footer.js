import React from 'react'
import { CiBellOn } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
const Footer = () => {
  return (
    <div className='' >
    <div className='flex justify-evenly mr-2 ' >
    <div>
    <div className='flex'>
    <CiBellOn size={60} />
    <p className='text-4xl font-mono font-light mt-2'>Stay in the know</p>

    </div>
    <div className='text-lg mt-12 ml-2 text-gray-500 font-mono'>
    Shoot us your email to stay up to date with the latest 
    </div>
    <div className='text-lg  ml-2 text-gray-500 font-mono'>
    offerings news from Forgd
    </div>


    <div className='mt-12' >
    <p className='text-sm font-mono ml-2'>Your email</p>
    <input className=' p-4 w-80 rounded-lg ml-2' placeholder='Enter your email' type="text" />

    </div>
   
      
    </div>

    <div className='ml-12'>
        <p className=' text-4xl font-mono font-light'>Forgd Tools & Services</p>
        <div className='flex'>
        <div className='mt-24 flex-col'> 
            <div><a className=' text-gray-500 font-mono text-md hover:text-blue-500 hover:underline ' href="">PathFinder</a></div>
            <div className='mt-4'><a className=' text-gray-500  font-mono text-md hover:text-blue-500 hover:underline ' href="">Tokenomics</a></div>
            <div className='mt-4'><a className=' text-gray-500 font-mono text-md hover:text-blue-500 hover:underline ' href="">AutoDistributions</a></div>
            <div className='mt-4'><a className=' text-gray-500 font-mono text-md hover:text-blue-500 hover:underline ' href="">AMM</a></div>
        </div>
        <div className='mt-24 ml-32 '> 
            <div><a className=' text-gray-500 font-mono text-md hover:text-blue-500 hover:underline ' href="">Full-Service Market Maker</a></div>
            <div className='mt-4'><a className=' text-gray-500  font-mono text-md hover:text-blue-500 hover:underline ' href="">Business Intelligence</a></div>
            <div className='mt-4'><a className=' text-gray-500 font-mono text-md hover:text-blue-500 hover:underline ' href="">Listing & Liquidity</a></div>
            <div className='mt-4'><a className=' text-gray-500 font-mono text-md hover:text-blue-500 hover:underline ' href="">Growth Capital</a></div>
        </div>
        </div>
        
    </div>

   

  

    </div>
    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
    <div className='flex justify-between '>
    <div className=' flex space-x-11  '>

<div><a className=' text-gray-800 ml-24 font-mono text-sm hover:text-blue-500 hover:underline ' href="">What is Forgd</a></div>
<div><a className=' text-gray-800 font-mono text-sm hover:text-blue-500 hover:underline ' href="">Fees & Pricing</a></div>
<div><a className=' text-gray-800 font-mono text-sm hover:text-blue-500 hover:underline ' href="">Contact us</a></div>
<div><a className=' text-gray-800 font-mono text-sm hover:text-blue-500 hover:underline ' href="">FAQs</a></div>
<div><a className=' text-gray-800 font-mono text-sm hover:text-blue-500 hover:underline ' href="">Forgd on Gitbook</a></div>
<div><a className=' text-gray-800 font-mono text-2xl hover:text-blue-500 hover:underline ' href=""><CiLinkedin/></a></div>
<div><a className=' text-gray-800 font-mono text-2xl hover:text-blue-500 hover:underline ' href=""><CiTwitter/></a></div>
</div>

<div className='mr-12'>

<p className='text-md font-medium'>
    2024 Fordg. All rights reserved.
    <a className=' text-blue-500 underline ' href="">Terms & Conditions</a>
</p>


</div>


</div>
</div>
 
  )
}

export default Footer
