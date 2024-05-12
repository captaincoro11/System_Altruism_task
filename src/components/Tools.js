import React,{useState} from 'react'
import Navbar from './Navbar'
import { IoAddCircleOutline } from "react-icons/io5";
import { IoAddCircleSharp } from "react-icons/io5";
import { GrSubtractCircle } from "react-icons/gr";
import Footer from './Footer';

const Tools = () => {

  const [isClicked1 , setIsClicked1] = useState('');
  const [isClicked2 , setIsClicked2] = useState('');
  const [isClicked3 , setIsClicked3] = useState('');
  const [isClicked4 , setIsClicked4] = useState('');
  const [isClicked5 , setIsClicked5] = useState('');
  const [isClicked6 , setIsClicked6] = useState('');
  const [isClicked7 , setIsClicked7] = useState('');
  const [isClicked8 , setIsClicked8] = useState('');



  const openDown1 = ()=>{
    if(isClicked1==='')
      setIsClicked1('clicked1');
    else
    setIsClicked1('')

  }

  const openDown2 = ()=>{
    if(isClicked2==='')
      setIsClicked2('clicked2');
    else
    setIsClicked2('')

  }

  const openDown3 = ()=>{
    if(isClicked3==='')
      setIsClicked3('clicked3');
    else
    setIsClicked3('')

  }

  const openDown4 = ()=>{
    if(isClicked4==='')
      setIsClicked4('clicked4');
    else
    setIsClicked4('')

  }

  const openDown5 = ()=>{
    if(isClicked5==='')
      setIsClicked5('clicked5');
    else
    setIsClicked5('')

  }

  const openDown6 = ()=>{
    if(isClicked6==='')
      setIsClicked6('clicked6');
    else
    setIsClicked6('')

  }

  const openDown7 = ()=>{
    if(isClicked7==='')
      setIsClicked7('clicked7');
    else
    setIsClicked7('')

  }

  const openDown8 = ()=>{
    if(isClicked8==='')
      setIsClicked8('clicked8');
    else
    setIsClicked8('')

  }
  return (
    <div className=''>
    <Navbar/>
    <div className=''>

    <div className='ml-40 mt-40'>
      <p className=' bg-white  w-52 rounded-full text-center font-medium font-mono bg-opacity-50 p-2 text-blue-600 text-md'>Tools & Services</p>
      <p className='font-mono text-blue-600 text-7xl mt-8 '>Advanced functionality</p>
      <p className=' font-mono text-black text-7xl'>meets seamless usage.</p>
      <p className='mt-12 text-gray-500 text-md font-mono'>Forgd is an arsenal of purpose-built tools designed to support blockchain entrepreneurs throughout every   </p>
      <p className='text-gray-500 font-mono text-md ' > stage of their life cycle. Our tools provide tremendous value to both advanced DeFi cypherpunks as  </p>
      <p className='text-gray-500 font-mono text-md'> well as  first time Web 3 entrepreneurs. Browse our suite of offerings below:</p>
     
    </div>

    
    <div className='bg-white w-3/5 rounded-lg mt-20 ml-40 cursor-pointer   '>
    <div className='flex justify-evenly'>
    <div className='w-7/12 ml-2 mt-8'>
    <p className=' bg-yellow-200 w-52 text-blue-600 rounded-full ml-4 text-blue font-mono text-center p-2' >Pre-TGE & Post TGE </p>
    <p className='mt-4 ml-4 text-4xl font-mono '>PathFinder</p>
    <p className=' text-gray-600 font-mono ml-4 mt-6'>PathFinder is a step-by-step guide to preparing for your TGE & listing. Map your business’s value flows, identify opportunities to capture value in your token, and design a compelling value proposition. Best practices and templates for your Tokenomics, including your Distribution & Emissions schedules. Learn about market maker collaboration, exchange listings, and launch mechanisms. Leverage our proprietary quantitative models to estimate post-TGE price performance and optimize your Tokenomics & demand drivers.</p>

    </div>
   
    <div className=' m-4 mt-20 '>
      <img className=' rounded-lg h-4/5 '  src="https://miro.medium.com/v2/resize:fit:702/1*Ra02AqsQlC0KV229EvM98g.png" alt="" />
    </div>
    </div>

    <div>
    
      <button onClick={openDown1} className={isClicked1==='clicked1'?'ml-4 mt-2 rounded-full border-none ':'ml-4 mt-2 hover:bg-black hover:text-white rounded-full border-none'}>{isClicked1==='clicked1'?<GrSubtractCircle size={40}/>:<IoAddCircleOutline className=' ' size={40}/>}</button>
    </div>

    <div className={isClicked1==='clicked1'?'':'hidden'}>
    <hr className="h-px m-6 my-8 bg-gray-200 border-0 dark:bg-gray-700" />

    <div className='flex'>
      <div className='ml-8'>
        <p className='text-black  font-mono text-xl font-semibold'>Why did we build it?</p>
        <p className=' text-gray-500 mt-12 font-mono text-md '>PathFinder is your gateway to becoming a blockchain visionary. Our mission is to empower every entrepreneur with unmatched expertise. Begin forging your path with a tool that unveils the secrets of "what lies ahead" on your path to a successful TGE and beyond.</p>
        <button className=' bg-black text-white text-md font-mono font-semibold p-3 rounded-lg mt-4 mb-4'>Sign up for Free</button>

      </div>
      <div className='ml-12'>
      <p className='text-black font-mono text-xl font-semibold'>How does it work?</p>
        <p className=' text-gray-500 mt-12 font-mono text-md '>Forgd maintains a holistic library of all things related to pre-TGE activities and post-listing best practices. PathFinder is where we store educational guides and link to our favorite third-party resources so you can become a subject matter expert. PathFinder is interactive and will track your progress throughout your journey.</p>

      </div>
    </div>


    </div>

    
   
  

    </div>

    <div className='bg-white w-3/5 rounded-lg mt-20 ml-40 cursor-pointer   '>
    <div className='flex justify-evenly'>
    <div className='w-7/12 ml-2 mt-8'>
    <p className=' bg-yellow-200 w-52 text-blue-600 rounded-full ml-4 text-blue font-mono text-center p-2' >Pre-TGE</p>
    <p className='mt-4 ml-4 text-4xl font-mono '>Tokenomics</p>
    <p className=' text-gray-600 font-mono ml-4 mt-6'>Utilize our templates to build your Tokenomics from the ground up or leverage our off-the-shelf templates. Craft token emission schedules for investors, employees, advisors, DAO, and others. Estimate performance for price, market cap, and FDV using our proprietary quantitative models. Optimize performance with our data-driven approach.</p>

    </div>
   
    <div className=' m-4 mt-20 '>
      <img className=' rounded-lg h-4/5 '  src="https://miro.medium.com/v2/resize:fit:702/1*Ra02AqsQlC0KV229EvM98g.png" alt="" />
    </div>
    </div>

    <div>
    
      <button onClick={openDown2} className={isClicked2==='clicked2'?'ml-4 mt-2 rounded-full border-none ':'ml-4 mt-2 hover:bg-black hover:text-white rounded-full border-none'}>{isClicked2==='clicked2'?<GrSubtractCircle size={40}/>:<IoAddCircleOutline className=' ' size={40}/>}</button>
    </div>

    <div className={isClicked2==='clicked2'?'':'hidden'}>
    <hr className="h-px m-6 my-8 bg-gray-200 border-0 dark:bg-gray-700" />

    <div className='flex'>
      <div className='ml-8'>
        <p className='text-black  font-mono text-xl font-semibold'>Why did we build it?</p>
        <p className=' text-gray-500 mt-12 font-mono text-md '>We built Tokenomics to demystify emissions schedules including unlock and vesting schedules seamlessly. Our goal is to use our predictive performance models to educate projects on the tradeoffs associated with some of the most important decisions for their TGE.</p>
        <button className=' bg-black text-white text-md font-mono font-semibold p-3 rounded-lg mt-4 mb-4'>Sign up for Free</button>

      </div>
      <div className='ml-12'>
      <p className='text-black font-mono text-xl font-semibold'>How does it work?</p>
        <p className=' text-gray-500 mt-12 font-mono text-md '>Using basic inputs, Forgd creates interactive charts such as “Circulating Token Supply over Time”, “Estimated Sell Pressure over Time”, and “Estimated Price vs. Market Capitalization over Time”. These charts can be published to a unique URL to share with investors & community supporters.</p>

      </div>
    </div>


    </div>

    
   
  

    </div>

    <div className='bg-white w-3/5 rounded-lg mt-20 ml-40 cursor-pointer   '>
    <div className='flex justify-evenly'>
    <div className='w-7/12 ml-2 mt-8'>
    <p className=' bg-yellow-200 w-52 text-blue-600 rounded-full ml-4 text-blue font-mono text-center p-2' >Pre-TGE & Post TGE </p>
    <p className='mt-4 ml-4 text-4xl font-mono '>AutoDistribution</p>
    <p className=' text-gray-600 font-mono ml-4 mt-6'>Automate token distribution with customizable smart contracts. Ensure investors, advisors, and employees receive tokens in a timely manner. Monitor unlocks and sell pressure from a single dashboard.</p>

    </div>
   
    <div className=' m-4 mt-20 '>
      <img className=' rounded-lg h-4/5 '  src="https://miro.medium.com/v2/resize:fit:702/1*Ra02AqsQlC0KV229EvM98g.png" alt="" />
    </div>
    </div>

    <div>
    
      <button onClick={openDown3} className={isClicked3==='clicked3'?'ml-4 mt-2 rounded-full border-none ':'ml-4 mt-2 hover:bg-black hover:text-white rounded-full border-none'}>{isClicked3==='clicked3'?<GrSubtractCircle size={40}/>:<IoAddCircleOutline className=' ' size={40}/>}</button>
    </div>

    <div className={isClicked3==='clicked3'?'':'hidden'}>
    <hr className="h-px m-6 my-8 bg-gray-200 border-0 dark:bg-gray-700" />

    <div className='flex'>
      <div className='ml-8'>
        <p className='text-black  font-mono text-xl font-semibold'>Why did we build it?</p>
        <p className=' text-gray-500 mt-12 font-mono text-md '>AutoDistribution allows projects to stream tokens to a large number of recipients based on their unique vesting schedules and unlock cliffs without manual intervention. Our goal is to minimize HR & Admin overhead and involvement in a process that should be fully auditable, and “trustless”.</p>
        <button className=' bg-black text-white text-md font-mono font-semibold p-3 rounded-lg mt-4 mb-4'>Sign up for Free</button>

      </div>
      <div className='ml-12'>
      <p className='text-black font-mono text-xl font-semibold'>How does it work?</p>
        <p className=' text-gray-500 mt-12 font-mono text-md '>Forgd deploys smart contracts for various groups of token recipients such as Seed Investors or Advisors that share the same vesting schedule. Following TGE, projects deposit tokens to these smart contracts so that distribution can occur. Once distribution of tokens begins, Forgd tracks unlocks vs. claims for individual recipients and will alert projects on potential sell pressure from early investor unlocks by tracking on their cost basis vs. the current price.</p>

      </div>
    </div>


    </div>

    
   
  

    </div>

    <div className='bg-white w-3/5 rounded-lg mt-20 ml-40 cursor-pointer   '>
    <div className='flex justify-evenly'>
    <div className='w-7/12 ml-2 mt-8'>
    <p className=' bg-yellow-200 w-52 text-blue-600 rounded-full ml-4 text-blue font-mono text-center p-2' >Post TGE </p>
    <p className='mt-4 ml-4 text-4xl font-mono '>AMM</p>
    <p className=' text-gray-600 font-mono ml-4 mt-6'>Deploy automated market making strategies for all centralized & decentralized exchanges from a single dashboard. Advanced algorithms accessible to beginners.</p>

    </div>
   
    <div className=' m-4 mt-20 '>
      <img className=' rounded-lg h-4/5 '  src="https://miro.medium.com/v2/resize:fit:702/1*Ra02AqsQlC0KV229EvM98g.png" alt="" />
    </div>
    </div>

    <div>
    
      <button onClick={openDown4} className={isClicked4==='clicked4'?'ml-4 mt-2 rounded-full border-none ':'ml-4 mt-2 hover:bg-black hover:text-white rounded-full border-none'}>{isClicked4==='clicked4'?<GrSubtractCircle size={40}/>:<IoAddCircleOutline className=' ' size={40}/>}</button>
    </div>

    <div className={isClicked4==='clicked4'?'':'hidden'}>
    <hr className="h-px m-6 my-8 bg-gray-200 border-0 dark:bg-gray-700" />

    <div className='flex'>
      <div className='ml-8'>
        <p className='text-black  font-mono text-xl font-semibold'>Why did we build it?</p>
        <p className=' text-gray-500 mt-12 font-mono text-md '>AMM2 is the next generation of automated market making (“AMM”). This tool allows projects to automate liquidity provision and arbitrage strategies on centralized (and decentralized) exchanges in a similar manner to decentralized AMM protocols. Our goal is to equip projects with the same advanced algorithms utilized by sophisticated trading desks and eliminate the significant costs required to engage a leading market maker such as Jump Trading, GSR, or Wintermute.</p>
        <button className=' bg-black text-white text-md font-mono font-semibold p-3 rounded-lg mt-4 mb-4'>Sign up for Free</button>

      </div>
      <div className='ml-12'>
      <p className='text-black font-mono text-xl font-semibold'>How does it work?</p>
        <p className=' text-gray-500 mt-12 font-mono text-md '>Forgd uses in-house trading algorithms to direct trading activity of a project’s capital based on customizable parameters. Users can deploy strategies across over 50 CEX’s & DEX’s. AMM² is non-custodial, meaning Forgd will never take direct deposits of assets.</p>

      </div>
    </div>


    </div>

    
   
  

    </div>

    <div className='bg-white w-3/5 rounded-lg mt-20 ml-40 cursor-pointer   '>
    <div className='flex justify-evenly'>
    <div className='w-7/12 ml-2 mt-8'>
    <p className=' bg-yellow-200 w-52 text-blue-600 rounded-full ml-4 text-blue font-mono text-center p-2' >Post TGE </p>
    <p className='mt-4 ml-4 text-4xl font-mono '>Full-Service Market Making</p>
    <p className=' text-gray-600 font-mono ml-4 mt-6'>Partner with a professional team of traders to manage liquidity. 24/7 white-glove market making services across all majors exchanges.</p>

    </div>
   
    <div className=' m-4 mt-20 '>
      <img className=' rounded-lg h-4/5 '  src="https://miro.medium.com/v2/resize:fit:702/1*Ra02AqsQlC0KV229EvM98g.png" alt="" />
    </div>
    </div>

    <div>
    
      <button onClick={openDown5} className={isClicked5==='clicked5'?'ml-4 mt-2 rounded-full border-none ':'ml-4 mt-2 hover:bg-black hover:text-white rounded-full border-none'}>{isClicked5==='clicked5'?<GrSubtractCircle size={40}/>:<IoAddCircleOutline className=' ' size={40}/>}</button>
    </div>

    <div className={isClicked5==='clicked5'?'':'hidden'}>
    <hr className="h-px m-6 my-8 bg-gray-200 border-0 dark:bg-gray-700" />

    <div className='flex'>
      <div className='ml-8'>
        <p className='text-black  font-mono text-xl font-semibold'>Why did we build it?</p>
        <p className=' text-gray-500 mt-12 font-mono text-md '>Full-service market making connects projects directly with experienced professionals to provide liquidity across all major exchanges that support trading of their native token. This tool requires minimal input from projects and promotes (i) tight spreads, (ii) deep two-sided liquidity, and (iii) efficient price discovery. Full-service market making is most-suitable for opening new markets and coverage for large market cap projects that are listed across many venues. </p>
        <button className=' bg-black text-white text-md font-mono font-semibold p-3 rounded-lg mt-4 mb-4'>Sign up for Free</button>

      </div>
      <div className='ml-12'>
      <p className='text-black font-mono text-xl font-semibold'>How does it work?</p>
        <p className=' text-gray-500 mt-12 font-mono text-md '>Full-service market making connects projects directly with experienced professionals to provide liquidity across all major exchanges that support trading of their native token. This tool requires minimal input from projects and promotes (i) tight spreads, (ii) deep two-sided liquidity, and (iii) efficient price discovery. Full-service market making is most-suitable for opening new markets and coverage for large market cap projects that are listed across many venues. </p>

      </div>
    </div>


    </div>

    
   
  

    </div>

    <div className='bg-white w-3/5 rounded-lg mt-20 ml-40 cursor-pointer   '>
    <div className='flex justify-evenly'>
    <div className='w-7/12 ml-2 mt-8'>
    <p className=' bg-yellow-200 w-52 text-blue-600 rounded-full ml-4 text-blue font-mono text-center p-2' >Pre-TGE & Post TGE </p>
    <p className='mt-4 ml-4 text-4xl font-mono '>Listing & Liquidity</p>
    <p className=' text-gray-600 font-mono ml-4 mt-6'>Consult with professionals to craft your go-to-market strategy. List on CEXs & DEXs. Analyze exchanges across (i) historical performance, (ii) cost, (iii) liquidity & volume requirements, and (iv) accessibility. Seed order books & AMMs with liquidity to promote a smooth transition into the secondary market.</p>

    </div>
   
    <div className=' m-4 mt-20 '>
      <img className=' rounded-lg h-4/5 '  src="https://miro.medium.com/v2/resize:fit:702/1*Ra02AqsQlC0KV229EvM98g.png" alt="" />
    </div>
    </div>

    <div>
    
      <button onClick={openDown6} className={isClicked6==='clicked6'?'ml-4 mt-2 rounded-full border-none ':'ml-4 mt-2 hover:bg-black hover:text-white rounded-full border-none'}>{isClicked6==='clicked6'?<GrSubtractCircle size={40}/>:<IoAddCircleOutline className=' ' size={40}/>}</button>
    </div>

    <div className={isClicked6==='clicked6'?'':'hidden'}>
    <hr className="h-px m-6 my-8 bg-gray-200 border-0 dark:bg-gray-700" />

    <div className='flex'>
      <div className='ml-8'>
        <p className='text-black  font-mono text-xl font-semibold'>Why did we build it?</p>
        <p className=' text-gray-500 mt-12 font-mono text-md '>

Selecting the right exchange for a token's initial listing plays a critical role in its subsequent success. It is not only important to ensure that there's ample liquidity allocated to these venues but also to implement proper pre-market order placement.

Such strategies promote efficient price discovery of the token and allow protocol economics to operate effectively in the long run. This product was developed to address these challenges and provide a seamless user experience.
</p>
        <button className=' bg-black text-white text-md font-mono font-semibold p-3 rounded-lg mt-4 mb-4'>Sign up for Free</button>

      </div>
      <div className='ml-12'>
      <p className='text-black font-mono text-xl font-semibold'>How does it work?</p>
        <p className=' text-gray-500 mt-12 font-mono text-md '>Our research analysts have compiled data associated with token performance post-listing across over 1,000 projects and 50 exchanges from the past 4 years. We utilize this data to create a comprehensive breakdown of exchange-by-exchange performance for various project types.

Forgd users can leverage this data to make informed decisions about which exchanges to list on. Next, Forgd deploys a team of professionals to collaborate with a project team and connect them directly with exchanges to facilitate a listing. Once a listing agreement and schedule has been achieved, Forgd provides full-service market making to support initial token listing.

Our team, which has the experience of hundreds of launches under its belt, provides tailored pre-market orders for centralized exchanges and considers thoughtful liquidity provisions for decentralized exchanges. This comprehensive approach enhances liquidity, reduces slippage, and facilitates healthy interaction with the protocol, offering our clients the best chance of a successful launch.</p>

      </div>
    </div>


    </div>

    
   
  

    </div>

    <div className='bg-white w-3/5 rounded-lg mt-20 ml-40 cursor-pointer   '>
    <div className='flex justify-evenly'>
    <div className='w-7/12 ml-2 mt-8'>
    <p className=' bg-yellow-200 w-52 text-blue-600 rounded-full ml-4 text-blue font-mono text-center p-2' >Post TGE </p>
    <p className='mt-4 ml-4 text-4xl font-mono '>Business Intelligence</p>
    <p className=' text-gray-600 font-mono ml-4 mt-6'>Visualize real-time & historical KPI’s such as depth, spreads, volume, and price performance. Compare performance indicators relative to competitors & peers. Generate customized reports for your team with Forgd-curated insights on key drivers.</p>

    </div>
   
    <div className=' m-4 mt-20 '>
      <img className=' rounded-lg h-4/5 '  src="https://miro.medium.com/v2/resize:fit:702/1*Ra02AqsQlC0KV229EvM98g.png" alt="" />
    </div>
    </div>

    <div>
    
      <button onClick={openDown7} className={isClicked7==='clicked7'?'ml-4 mt-2 rounded-full border-none ':'ml-4 mt-2 hover:bg-black hover:text-white rounded-full border-none'}>{isClicked7==='clicked7'?<GrSubtractCircle size={40}/>:<IoAddCircleOutline className=' ' size={40}/>}</button>
    </div>

    <div className={isClicked7==='clicked7'?'':'hidden'}>
    <hr className="h-px m-6 my-8 bg-gray-200 border-0 dark:bg-gray-700" />

    <div className='flex'>
      <div className='ml-8'>
        <p className='text-black  font-mono text-xl font-semibold'>Why did we build it?</p>
        <p className=' text-gray-500 mt-12 font-mono text-md '>Monitoring trading KPI’s is critical once TGE occurs and tokens are actively traded on exchanges. Our goal is to provide projects with unparalleled transparency and access to both real-time & historical data. We also provide commentary on market trends to educate projects on opportunities to improve KPI’s. Existing data aggregation platforms such as Coinmarketcap and Coingecko are designed for retail investors and therefore have extreme limitations – most notably, they lack historical KPIs and commentary on how to take proactive measures that can be taken to improve marketplace conditions such as depth and spreads.</p>
        <button className=' bg-black text-white text-md font-mono font-semibold p-3 rounded-lg mt-4 mb-4'>Sign up for Free</button>

      </div>
      <div className='ml-12'>
      <p className='text-black font-mono text-xl font-semibold'>How does it work?</p>
        <p className=' text-gray-500 mt-12 font-mono text-md '>Forgd aggregates data across hundreds of decentralized and centralized exchanges to provide projects a comprehensive overview of present and historical performance. Projects can visualize KPIs via an interactive chart or tabular breakdown with metrics displayed relative to Solana. Market commentary is provided for each visualization with suggestions on how to improve the relevant KPIs.</p>

      </div>
    </div>


    </div>

    
   
  

    </div>

    <div className='bg-white w-3/5 rounded-lg mt-20 ml-40 cursor-pointer   '>
    <div className='flex justify-evenly'>
    <div className='w-7/12 ml-2 mt-8'>
    <p className=' bg-yellow-200 w-52 text-blue-600 rounded-full ml-4 text-blue font-mono text-center p-2' >Pre-TGE & Post TGE </p>
    <p className='mt-4 ml-4 text-4xl font-mono '>Growth Capital</p>
    <p className=' text-gray-600 font-mono ml-4 mt-6'>Learn best practices on growth capital strategies for token and equity sales with holistic informational and education sessions, including 1-on-1 workshops, pitch deck preparations, investor outreach best practices and typical terms to expect.</p>

    </div>
   
    <div className=' m-4 mt-20 '>
      <img className=' rounded-lg h-4/5 '  src="https://miro.medium.com/v2/resize:fit:702/1*Ra02AqsQlC0KV229EvM98g.png" alt="" />
    </div>
    </div>

    <div>
    
      <button onClick={openDown8} className={isClicked8==='clicked8'?'ml-4 mt-2 rounded-full border-none ':'ml-4 mt-2 hover:bg-black hover:text-white rounded-full border-none'}>{isClicked8==='clicked8'?<GrSubtractCircle size={40}/>:<IoAddCircleOutline className=' ' size={40}/>}</button>
    </div>

    <div className={isClicked8==='clicked8'?'':'hidden'}>
    <hr className="h-px m-6 my-8 bg-gray-200 border-0 dark:bg-gray-700" />

    <div className='flex'>
      <div className='ml-8'>
        <p className='text-black  font-mono text-xl font-semibold'>Why did we build it?</p>
        <p className=' text-gray-500 mt-12 font-mono text-md '>Growth capital is essential for bootstrapping development and scaling growth efforts. We've gathered data over the last 5 years related to Web3 fundraising to educate founders on the process for token sales (ex: SAFT), equity raises, and exit opportunities via Mergers & Acquisitions (“M&A”). We provide 1-on-1 support every step of the way.</p>
        <button className=' bg-black text-white text-md font-mono font-semibold p-3 rounded-lg mt-4 mb-4'>Sign up for Free</button>

      </div>
      <div className='ml-12'>
      <p className='text-black font-mono text-xl font-semibold'>How does it work?</p>
        <p className=' text-gray-500 mt-12 font-mono text-md '>

We connect with each team and project 1-on-1 to understand their mission, vision, market opportunity, team and growth plans. After building a Company profile, we provide real-time market intelligence through workshops and informational sessions with other founders, investors, board members and industry professionals. The workshop process includes:

    Pre-fundraising support
    Pitch Deck Preparation
    Financial Modeling
    Valuation & Terms Support
    Strategic Investor Targeting & Outreach
    Legal (Term Sheet, Shareholders Agreement)
    Full Life-cycle on-going support

</p>

      </div>
    </div>


    </div>

    
   
  

    </div>





    
    </div>
    <div className='mt-24'>

    <Footer/>
    </div>

  
    
      
    </div>
  )
}

export default Tools
