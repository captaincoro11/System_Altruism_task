import React,{useState} from 'react'
import Navbar from './Navbar'
import { TiTick } from "react-icons/ti";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { CiShare1 } from "react-icons/ci";
import Footer from './Footer'

const Home = () => {

  const [isClicked1 , setIsClicked1] = useState('');
  const [isClicked2 , setIsClicked2] = useState('');
  const [isClicked3 , setIsClicked3] = useState('');
  const [isClicked4 , setIsClicked4] = useState('');

  const onClickButton1 = ()=>{
    if(isClicked1==='')
    setIsClicked1('clicked1');
    else{
      setIsClicked1('');

    }
    
  }

  const onClickButton2 =  ()=>{
    if(isClicked2==='')
      setIsClicked2('clicked2');
  
    else{
      setIsClicked2('');

    }
  }
  const onClickButton3 =  ()=>{
    if(isClicked3==='')
      setIsClicked3('clicked3');
  
    else{
      setIsClicked3('');

    }
  }
  const onClickButton4 =  ()=>{
    if(isClicked4==='')
      setIsClicked4('clicked4');
  
    else{
      setIsClicked4('');

    }
  }
  return (
    <div className='flex-col ' >
  
    <div className=' bg-black font-mono m-8 rounded-xl'>
    <Navbar/>
   
    <div className='text-white mt-56 ml-20  '>
    <p className='text-6xl font-semibold' >The end-to-end </p>
    <p className='text-6xl font-semibold'>software toolkit to</p>
    <p className='text-6xl font-semibold'>optimize token &</p>
    <p className='text-6xl font-semibold'>protocol</p>
    <p className='text-6xl font-semibold'>performance</p>

    <p className='w-2/5 mt-8'>Forgd is a one-stop destination for all pre & post-TGE support to drive long term success. Interact with self-service products complemented by white-glove support from Forgd professionals.</p>

    <div className='flex space-x-6 mt-4'>
      <button className=' bg-blue-600 text-white mb-28 rounded-md font-medium p-2 w-52'>Join Forgd</button>
      <button className=' border rounded-md p-2 mb-28 text-md'>Schedule a consultation</button>
    </div>
    </div>



    </div>

    <div className=' flex mt-40 justify-center'>
      <div className='flex-col'>
      <p className='text-6xl ml-6 font-medium font-mono'>Holistic support, for pre-</p>
      <p className='text-6xl font-medium font-mono'>TGE & listed projects,<label className=' text-blue-600'>every</label></p>
      
      <p className='text-6xl ml-40 font-medium font-mono text-blue-600'>step of the way</p> 
      <button className='text-white font-medium font-mono ml-72 mt-4 p-3 rounded-md bg-black'> Register for Free</button>
      

      </div>
      
       
    </div>
    <div className='flex justify-center'>

    <div className='mt-40 flex bg-gray-400 bg-opacity-20 w-5/12 rounded-lg'>
      <div className=' mt-8 p-2   '>
      <div className=' ml-20'>
      <p className=' border border-blue-500 rounded-full p-2 w-40 text-blue-500 font-mono'>Pre-TGE Projects</p>
      <p className=' mt-4 text-5xl font-mono font-medium'>An incubator with a </p>
      <p className=' text-5xl font-mono font-medium'> dynamic product </p>
      <p className=' text-5xl font-mono font-medium'> suite</p>
      <p className=' mt-8 text-gray-500 font-medium font-mono'>Forgd codifies best industry practices and makes them easy for  </p>
      <p  className='text-gray-500 font-medium font-mono'>any project to implement into their go-to-market playbook.</p>
      <p className='flex mt-8 text-gray-500 font-medium font-mono '><TiTick  color='blue' className=' size-8' /> Build Tokenomics using quantitative models and historical data from past projects. </p>
      <p className='flex mt-8 text-gray-500 font-medium font-mono '><TiTick  color='blue' className=' size-7' /> Visualize & map protocol value flows and identify token demand drivers. </p>
      <p className='flex mt-8 text-gray-500 font-medium font-mono '><TiTick  color='blue' className=' size-8' /> Growth Capital workshops for token (ex: SAFT) & equity sales to accelerate development.  </p>
      <p className='flex mt-8 mb-8 text-gray-500 font-medium font-mono '><TiTick  color='blue' className=' size-6' /> Get listed on major CEXs & seed DEX liquidity pools. </p>

      </div>
   

      </div>
    
    </div>
    <div className=' w-2/5 flex-col justify-center mt-40 bg-blue-950 ml-4 rounded-md'>
      <img className='m-6 rounded-md w-11/12' src="https://d3caycb064h6u1.cloudfront.net/wp-content/uploads/2020/11/Graph-Analytics-Reasons-Why-More-Businesses-Are-Adopting-It.jpg" alt="" />
      <div className=' flex'>
      <img className='  w-5/12 m-6 rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9kJE-QAixI5dKOKG8mQWxcX6jN9qGFg-87fAw8HHy1A&s" alt="" />
      <img className='rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcjXbn5MAknc4WxZmQxd18Hc4Kk9o1SvcuWR6a7jx5bw&s" alt="" />

      </div>

      </div>

    </div>


   


<div className='flex justify-center'>

    
    <div className=' w-2/5 flex-col justify-center mt-40 bg-blue-950  rounded-md'>
      <img className='m-6 rounded-md w-11/12' src="https://d3caycb064h6u1.cloudfront.net/wp-content/uploads/2020/11/Graph-Analytics-Reasons-Why-More-Businesses-Are-Adopting-It.jpg" alt="" />
      <div className=' flex'>
      <img className='  w-5/12 m-6 rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9kJE-QAixI5dKOKG8mQWxcX6jN9qGFg-87fAw8HHy1A&s" alt="" />
      <img className='rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcjXbn5MAknc4WxZmQxd18Hc4Kk9o1SvcuWR6a7jx5bw&s" alt="" />

      </div>

      </div>
      <div className='mt-40 flex bg-gray-400 ml-4 bg-opacity-20 w-5/12 rounded-lg'>
      <div className=' mt-8 p-2   '>
      <div className=' ml-20'>
      <p className=' border border-blue-500 rounded-full p-2 w-40 text-blue-500 font-mono'>Listed Projects</p>
      <p className=' mt-4 text-5xl font-mono font-medium'>Automation & </p>
      <p className=' text-5xl font-mono font-medium'> scalability with full </p>
      <p className=' text-5xl font-mono font-medium'> transparency.</p>
      <p className=' mt-8 text-gray-500 font-medium font-mono'>Projects can access the same tools used by sophisticated   </p>
      <p  className='text-gray-500 font-medium font-mono'>institutions to optimize token performance.</p>
      <p className='flex mt-8 text-gray-500 font-medium font-mono '><TiTick  color='blue' className=' size-12' /> Automate token vesting to core contributors, investors, and others while monitoring estimated sell pressure on an individual basis. </p>
      <p className='flex mt-8 text-gray-500 font-medium font-mono '><TiTick  color='blue' className=' size-9' /> Deploy advanced market making strategies across all major CEXs & DEXs from a single dashboard.  </p>
      <p className='flex mt-8 text-gray-500 font-medium font-mono '><TiTick  color='blue' className=' size-14' /> Scale your userbase with customized marketing support including key opinion leaders (“KOLs”), press releases, content creation, and paid advertising.   </p>
      <p className='flex mt-8 mb-8 text-gray-500 font-medium font-mono '><TiTick  color='blue' className=' size-8' />  Generate customized reports on trading KPIs such as depth, spreads, and volume.  </p>

      </div>
   

      </div>
    
    </div>

    </div>

<div className=' bg-black mt-40 m-4 rounded-lg'>

<div className=' flex justify-center font-mono m-8 rounded-xl'>
    <div className=''>
      <p  className='text-white ml-60 border rounded-full mt-16 w-40 p-2 text-center  '>Our Products</p>
      <div className='text-white mt-12'>
      <p className=' text-5xl font-semibold font-mono'>Forgd is an arsenal of purpose-</p>
      <p className=' text-5xl font-semibold font-mono'>built tools designed to support</p>
      <p className=' text-5xl ml-20 font-semibold font-mono'>blockchain entrepreneurs</p>

     
    </div>
   
   
    

    
    </div>
</div>

<div className=' '>
<div className='flex  justify-center'>

<div className='w-1/5 border bg-blue-800 bg-opacity-20 border-blue-600 rounded-tl-lg '>
      <p className='text-2xl mt-20 ml-8 text-white font-mono font-semibold '>PathFinder</p>
      <p className='bg-blue-600 ml-6 mt-2 rounded-full p-1 text-sm text-white font-semibold w-60 font-mono text-center'>Pre-TGE & Listed Projects</p>
      <p className=' text-gray-400 ml-6 mt-12 mr-8 mb-8 font-medium font-mono'>Part guide,part resource hub. A step-by-step manual to prepare for your TGE & listing.Resources and best practices for optimizing protocol growth and scaling your DAO.</p>

      </div>
      <div className='w-1/5 border bg-blue-800 bg-opacity-20 border-blue-600 '>
      <p className='text-2xl mt-20 ml-8 text-white font-mono font-semibold '>Tokenomics</p>
      <p className='bg-blue-600 ml-6 mt-2 rounded-full p-1 text-sm text-white font-semibold w-60 font-mono text-center'>Pre-TGE & Listed Projects</p>
      <p className=' text-gray-400 ml-6 mt-12 mr-8 mb-8 font-medium font-mono'>Part guide,part resource hub. A step-by-step manual to prepare for your TGE & listing.Resources and best practices for optimizing protocol growth and scaling your DAO.</p>

      </div>
      <div className='w-1/5 border bg-blue-800 bg-opacity-20 border-blue-600  '>
      <p className='text-2xl mt-20 ml-8 text-white font-mono font-semibold '>AutoDistribution</p>
      <p className='bg-blue-600 ml-6 mt-2 rounded-full p-1 text-sm text-white font-semibold w-60 font-mono text-center'>Pre-TGE & Listed Projects</p>
      <p className=' text-gray-400 ml-6 mt-12 mr-8 mb-8 font-medium font-mono'>Part guide,part resource hub. A step-by-step manual to prepare for your TGE & listing.Resources and best practices for optimizing protocol growth and scaling your DAO.</p>

      </div>
      <div className='w-1/5 border bg-blue-800 bg-opacity-20 border-blue-600 rounded-tr-lg '>
      <p className='text-2xl mt-20 ml-8 text-white font-mono font-semibold '>AMM</p>
      <p className='bg-blue-600 ml-6 mt-2 rounded-full p-1 text-sm text-white font-semibold w-60 font-mono text-center'>Pre-TGE & Listed Projects</p>
      <p className=' text-gray-400 ml-6 mt-12 mr-8 mb-8 font-medium font-mono'>Part guide,part resource hub. A step-by-step manual to prepare for your TGE & listing.Resources and best practices for optimizing protocol growth and scaling your DAO.</p>

      </div>
</div>

<div className='flex justify-center'>

<div className='w-1/5 border bg-blue-800 bg-opacity-20 border-blue-600 rounded-bl-lg '>
      <p className='text-2xl mt-20 ml-8 text-white font-mono font-semibold '>PathFinder</p>
      <p className='bg-blue-600 ml-6 mt-2 rounded-full p-1 text-sm text-white font-semibold w-60 font-mono text-center'>Pre-TGE & Listed Projects</p>
      <p className=' text-gray-400 ml-6 mt-12 mr-8 mb-8 font-medium font-mono'>Part guide,part resource hub. A step-by-step manual to prepare for your TGE & listing.Resources and best practices for optimizing protocol growth and scaling your DAO.</p>

      </div>
      <div className='w-1/5 border bg-blue-800 bg-opacity-20 border-blue-600  '>
      <p className='text-2xl mt-20 ml-8 text-white font-mono font-semibold '>PathFinder</p>
      <p className='bg-blue-600 ml-6 mt-2 rounded-full p-1 text-sm text-white font-semibold w-60 font-mono text-center'>Pre-TGE & Listed Projects</p>
      <p className=' text-gray-400 ml-6 mt-12 mr-8 mb-8 font-medium font-mono'>Part guide,part resource hub. A step-by-step manual to prepare for your TGE & listing.Resources and best practices for optimizing protocol growth and scaling your DAO.</p>

      </div>
      <div className='w-1/5 border bg-blue-800 bg-opacity-20 border-blue-600  '>
      <p className='text-2xl mt-20 ml-8 text-white font-mono font-semibold '>PathFinder</p>
      <p className='bg-blue-600 ml-6 mt-2 rounded-full p-1 text-sm text-white font-semibold w-60 font-mono text-center'>Pre-TGE & Listed Projects</p>
      <p className=' text-gray-400 ml-6 mt-12 mr-8 mb-8 font-medium font-mono'>Part guide,part resource hub. A step-by-step manual to prepare for your TGE & listing.Resources and best practices for optimizing protocol growth and scaling your DAO.</p>

      </div>
      <div className='w-1/5 border bg-blue-800 bg-opacity-20 border-blue-600 rounded-br-lg '>
      <p className='text-2xl mt-20 ml-8 text-white font-mono font-semibold '>PathFinder</p>
      <p className='bg-blue-600 ml-6 mt-2 rounded-full p-1 text-sm text-white font-semibold w-60 font-mono text-center'>Pre-TGE & Listed Projects</p>
      <p className=' text-gray-400 ml-6 mt-12 mr-8 mb-8 font-medium font-mono'>Part guide,part resource hub. A step-by-step manual to prepare for your TGE & listing.Resources and best practices for optimizing protocol growth and scaling your DAO.</p>

      </div>
</div>
      


      </div>
   

      <div className='mt-40 flex justify-center'>
      <div>
      <p className='text-white font-medium font-mono text-5xl'>“Gone are the days of paying five advisors,</p>
      <p className='text-white ml-12 font-medium font-mono text-5xl'>and two market makers. Forgd does it all</p>
      <p className='text-white ml-40 font-medium font-mono text-5xl'>with transparency & seamless UX.”</p>
      <p className=' text-gray-400 ml-80 font-mont text-md tracking-widest mt-4 '>Ben Sparango | Head of Ecosystem Strategy, Solana Foundation</p>

      </div>

    </div>


    <div className='mt-40 flex justify-center'>
      <div className=''>
      <p className='font-light font-mono text-9xl text-white'>Become a subject</p>
      <p className='font-light font-mono ml-24 text-9xl text-white'>matter expert</p>

      </div>
    </div>

    <div className='flex justify-evenly'>

    <div className='mt-12 text-white'>
      <div>
      <p className='border rounded-full p-1 text-white font-mono w-60 text-center'>Educational Resources</p>
      <p className='text-3xl mt-6 font-medium font-mono'>It’s difficult to launch, scale, and </p>
      <p className='text-3xl font-medium font-mono'>operate a blockchain project </p>
      <p className='text-3xl font-medium font-mono' >without external support.<label className='font-semibold'>We can</label> </p>
      <p className='text-3xl font-semibold font-mono'>help.</p>


      </div>
      <div className='mt-8'>
        <p className='font-mono '>Forgd maintains a holistic library of all things related to pre-TGE </p>
        <p className='font-mono '>activities and post-listing best practices. We author educational</p>
        <p className='font-mono '>guides in-house based on our first-hand experience and link to our </p>
        <p className='font-mono '>favorite third-party resources so our users can optimize for success. </p>
        <a href='https://forgd.com/gitbook/?location=' className='flex mt-2 font-mono cursor-pointer '>Learn more on Gitbook <a className='mt-1.5 ml-2 font-bold'  ><CiShare1 /></a></a>
      </div>
    </div>
    <div className='text-white mt-12 w-1/2 ml-12' >
    <div className='flex-col border rounded-lg p-4'>
    <div className='flex justify-between'>
    <p className=' text-xl font-mono w-80 '><button onClick={onClickButton1}>What is Forgd?</button></p>
    <button onClick={onClickButton1} className='mt-2'><IoIosArrowDropdownCircle/></button>
    </div>
    <div>
    <p  className={isClicked1==='clicked1'?' font-mono text-xs':"hidden"}>Forgd is an end-to-end software toolkit to optimize token & protocol performance. We are a one-stop destination for all pre & Listed Projects support to drive long term success. Forgd products are self-service and can be utilized by projects at their sole discretion; however, 1-on-1 workshops are available for those that want white-glove support from a subject matter expert. This allows Forgd users to go at their own pace and skip directly to relevant activities depending on what stage a project is at in its lifecycle.</p>

    </div>

    </div>

    <div className='flex-col border mt-4 rounded-lg p-4'>
    <div className='flex justify-between'>
    <p className=' text-xl font-mono w-80 '><button onClick={onClickButton2}>What is Forgd?</button></p>
    <button onClick={onClickButton2} className='mt-2'><IoIosArrowDropdownCircle/></button>
    </div>
    <div>
    <p  className={isClicked2==='clicked2'?' font-mono text-xs':"hidden"}>Forgd is an end-to-end software toolkit to optimize token & protocol performance. We are a one-stop destination for all pre & Listed Projects support to drive long term success. Forgd products are self-service and can be utilized by projects at their sole discretion; however, 1-on-1 workshops are available for those that want white-glove support from a subject matter expert. This allows Forgd users to go at their own pace and skip directly to relevant activities depending on what stage a project is at in its lifecycle.</p>

    </div>

    </div>

    <div className='flex-col border mt-4 rounded-lg p-4'>
    <div className='flex justify-between'>
    <p className=' text-xl font-mono w-80 '><button onClick={onClickButton3}>What is Forgd?</button></p>
    <button onClick={onClickButton3} className='mt-2'><IoIosArrowDropdownCircle/></button>
    </div>
    <div>
    <p  className={isClicked3==='clicked3'?' font-mono text-xs':"hidden"}>Forgd is an end-to-end software toolkit to optimize token & protocol performance. We are a one-stop destination for all pre & Listed Projects support to drive long term success. Forgd products are self-service and can be utilized by projects at their sole discretion; however, 1-on-1 workshops are available for those that want white-glove support from a subject matter expert. This allows Forgd users to go at their own pace and skip directly to relevant activities depending on what stage a project is at in its lifecycle.</p>

    </div>

    </div>

    <div className='flex-col border mt-4 rounded-lg p-4 mb-20'>
    <div className='flex justify-between'>
    <p className=' text-xl font-mono w-80 '><button onClick={onClickButton4}>What is Forgd?</button></p>
    <button onClick={onClickButton4} className='mt-2 '><IoIosArrowDropdownCircle/></button>
    </div>
    <div>
    <p  className={isClicked4==='clicked4'?' font-mono text-xs':"hidden"}>Forgd is an end-to-end software toolkit to optimize token & protocol performance. We are a one-stop destination for all pre & Listed Projects support to drive long term success. Forgd products are self-service and can be utilized by projects at their sole discretion; however, 1-on-1 workshops are available for those that want white-glove support from a subject matter expert. This allows Forgd users to go at their own pace and skip directly to relevant activities depending on what stage a project is at in its lifecycle.</p>

    </div>

    </div>

    </div>
    </div>


    
    



    </div>

    <div className=''>
    <Footer/>
    </div>
    


    
   

    
          
    </div>
  )
}

export default Home


