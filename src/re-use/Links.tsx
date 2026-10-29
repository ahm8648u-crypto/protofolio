import type { ReactNode } from "react"
// import { NavLink } from "react-router-dom"
type Tlinks={
    Name:ReactNode,
    icon :ReactNode,
    href:string,
    }
export default function Links({Name,icon,href}:Tlinks) {
    

  return (
    <>
    <div>
        <a href={href}>
            <div className="flex items-center">
                <span className="text-lg mr-1">{icon}</span>
                <span className="text-xl md:text-2xl hover:text-gray-500">{Name}</span>
            
            </div>
            </a>
    </div>
    
    </>
  )
}
