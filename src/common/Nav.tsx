import Links from "../re-use/Links";
import { IoInformationCircleSharp } from "react-icons/io5";
import { LuBicepsFlexed } from "react-icons/lu";
import { GrProjects } from "react-icons/gr";
import { GrContact } from "react-icons/gr";
import { LuListFilter } from "react-icons/lu";
import A from '../image/logo-name-2.png'

export default function Nav() {
    const Linkks=[
        {Name:'About',icon:<IoInformationCircleSharp/>,href:'#con'},
        {Name:'Experience',icon:<LuBicepsFlexed/>,href:'#ex'},
        {Name:'Projects',icon:<GrProjects/>,href:'#ex'},
        {Name:'Contact',icon:<GrContact/>,href:'#con'},

    ]
  return (
    <>
    <div className="flex  md:mx-auto  items-center sm:gap-30 md:gap-20 justify-between sticky top-0  xl:gap-90 bg-white  w-full md:w-max pr-3 z-90">
     {/* جزء الاسم */}
     <div>
      <img className="w-40 object-cover md:w-50 ml-2" src={A} alt="" />
     </div>
     {/* Links */}
     <div className="">
        <p className="text-3xl flex md:hidden cursor-pointer"><LuListFilter/></p>
        <ul className="  md:gap-7 hidden md:flex">
        {Linkks.map((el)=>(
            <li className="flex" key={el.href}>
                
        <Links  {...el}/>
            </li>

        ))}
</ul>
     </div>

    </div>
    </>
  )
}
