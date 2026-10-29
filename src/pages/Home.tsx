import { FaGithub } from 'react-icons/fa'
import { TiSocialLinkedin } from "react-icons/ti";
import Ahmed from '../image/Ahmed_Samer_CV.pdf'
import myimg from '../image/Fac.jpeg'

import Experience from './Experience';
import Contact from './Contact';

export default function Home() {
  return (
    <>
    <div className='flex flex-col md:flex-row items-center mx-auto my-10 sm:my-40 -gap-40 md:gap-15 sm:pr-0 relative -left-3'>
      {/* جزء الصورة */}
      <div className="w-97 h-97">
        <img
          className="mx-auto w-65 h-65 md:w-full md:h-full rounded-full object-cover "
          src={myimg}
          alt="Ahmed Samer"
        />
      </div>

      {/* جزء العنوان */}
      <div className='flex flex-col items-center gap-2.5'>
        <p className="text-sm font-medium text-gray-800">Hello, I'm</p>
        <p className="text-4xl sm:text-5xl font-bold text-black">Ahmed Samer</p>
        <p className="mt-3 text-xl sm:text-2xl font-semibold text-gray-600">Frontend Developer</p>
        {/* دا جزء الزراير */}
        <div className=' flex gap-3'>
        <a
         href={Ahmed}
         download="cv"
         className="mt-6 inline-block rounded-full border bg-gray-800 text-white border-black hover:text-black  px-6 py-3 font-semibold hover:bg-white  transition "
         >
         Download CV
         </a>
         <a className="mt-6 inline-block rounded-full border   border-black text-black  px-3 py-3 font-semibold hover:text-white  transition hover:bg-black cursor-pointer" >Contact info</a>
         </div>
         {/* جزء لينكدان و وجيت هاب */}
        <div className='flex text-3xl gap-3 ml-4 mt-3'>
            <div className='rounded-[50%] bg-black'>
             <a
         href="https://www.linkedin.com/in/ahmed-samer-06a5a8317?utm_source=share_via&utm_content=profile&utm_medium=member_android"
         className='text-white h-full w-full'
         target="_blank"
         rel="noopener noreferrer"
         aria-label="LinkedIn"
       >
         <TiSocialLinkedin/>
       </a>  
       </div>
       <a
    href="https://github.com/ahm8648u-crypto"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>          
   
        </div>
 

      </div>
    </div>
          <Experience/>
          <Contact/>
      
    </>
  )
}