import Links from "../re-use/Links";
import { IoInformationCircleSharp } from "react-icons/io5";
import { LuBicepsFlexed } from "react-icons/lu";
import { GrProjects } from "react-icons/gr";
import { GrContact } from "react-icons/gr";
import { LuListFilter } from "react-icons/lu";
import A from '../image/logo-name-2.png'
import { useState } from "react";
import { MdOutlineFolderCopy } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
import { FaFacebookMessenger, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import Ahmed from '../image/Ahmed_Samer_CV.pdf'

export default function Nav() {
    const [open,setOpen]=useState(false);
    const Linkks=[
        {Name:'About',icon:<IoInformationCircleSharp/>,href:'#ab'},
        {Name:'Experience',icon:<LuBicepsFlexed/>,href:'#sk'},
        {Name:'Projects',icon:<GrProjects/>,href:'#ex'},
        {Name:'Contact',icon:<GrContact/>,href:'#con'},

    ]
     const Linkkks=[
        {Name:'About',icon:<IoInformationCircleSharp/>,href:'#ab'},
        {Name:'Experience',icon:<LuBicepsFlexed/>,href:'#ex'},
        {Name:'Projects',icon:<MdOutlineFolderCopy/>,href:'#ex'},
        {Name:'Contact',icon:<GrContact/>,href:'#con'},

    ]
  return (
    <>
    <div className="flex  md:mx-auto  items-center sm:gap-30 md:gap-20 justify-between sticky top-0  xl:gap-90 bg-white shadow  w-full md:w-max pr-3 z-90 " >
     {/* جزء الاسم */}
     <div>
      <img className="w-40 object-cover md:w-50 ml-2" src={A} alt="" />
     </div>
     {/* Links */}
     <div className="">
        <p className={`text-3xl flex md:hidden cursor-pointer duration-700`} onClick={()=>setOpen(!open)}><LuListFilter className={`${open==true?"rotate-180":""}`} /></p>
        <ul className="  md:gap-7 hidden md:flex">
        {Linkks.map((el)=>(
            <li className="flex" key={el.href}>
                
        <Links  {...el}/>
            </li>

        ))}
</ul>
     </div>
     

    </div>
    <div className={`w-full min-h-dvh fixed bg-[#7B808A]/50 z-98  ${open==true?"translate-x-0" : "translate-x-full"} duration-500 md:hidden`}onClick={()=>setOpen(!open)}>
    <div className={` fixed top-0  w-72 h-screen bg-white z-99 shadow-lg md:hidden ${open==true?"translate-x-0" : "translate-x-full"}duration-500 px-3`} onClick={(e) => e.stopPropagation()}>
        <div className="flex border-b-2 border-gray-200 py-2 items-center" >
        <div className="px-0 py-0 rounded-[50%] bg-[#7B808A]/50 w-8 h-8 text-center flex items-center justify-center mt-2"onClick={()=>setOpen(!open)}>
            <p className="text-white  text-xl mb-0.5">x</p>
        </div>
         <div>
      <img className="w-35 object-cover  ml-2" src={A} alt="" />
     </div>
     </div>
        <div className="mt-10" >
        <ul className="  md:gap-7 flex gap-12 hover:bg-[#EFF6FF] flex-col md:hidden">
        {Linkkks.map((el)=>(
            <li className="flex w-full"onClick={()=>setOpen(!open)} key={el.href} >
                
        <Links  {...el}/>
            </li>

        ))}
</ul>
     </div>
     <div className="flex flex-col items-center gap-3 absolute bottom-3 mx-auto">
         <a
         href={Ahmed}
         download="cv"
         className="mt-6 flex gap-3  rounded-full border bg-gray-800 text-white border-black hover:text-black  px-15 py-3 font-semibold hover:bg-white  transition "
         >
         <FaDownload/> Download CV
         </a>
       
        <div className="flex gap-3 ">
                 <a className="px-2 py-2 bg-[#1E293B] text-white rounded-[50%] text-sm" href="https://www.linkedin.com/in/ahmed-samer-06a5a8317?utm_source=share_via&utm_content=profile&utm_medium=member_android"><TiSocialLinkedin/></a>
                 <a className="px-2 py-1.5 bg-[#1E293B] text-white rounded-[50%] text-sm flex items-center" href="https://github.com/ahm8648u-crypto"><FaGithub /></a>
                 <a className="px-2 py-1.5 bg-[#1E293B] text-white rounded-[50%] text-sm flex items-center" href="https://wa.me/201205186077"><FaWhatsapp /></a>
                 <a className="px-2 py-1.5 bg-[#1E293B] text-white rounded-[50%] text-sm flex items-center" href="https://m.me/samerahmed.megahed"><FaFacebookMessenger /></a>
                 <a className="px-2 py-1.5 bg-[#1E293B] text-white rounded-[50%] text-sm flex items-center" href="https://instagram.com/ahmed_samer0i"><FaInstagram /></a>
            </div>
     </div>
     </div>
     </div>
    </>
  )
}
