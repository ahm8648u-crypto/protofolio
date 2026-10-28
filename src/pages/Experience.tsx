import { useState } from "react"
import proj from '../image/proj.png'
import { HiOutlineLink } from "react-icons/hi";
import { FaRegCheckCircle } from "react-icons/fa";

function ProjectCard({ title, type, link }: { title: string; type: string; link: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="group relative w-70 h-50 overflow-hidden rounded-2xl cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <img className="block w-full h-full object-cover" src={proj} alt="" />

      <div
        className={`absolute inset-0 bg-black/50 transition-transform duration-300 group-hover:translate-y-0 ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="absolute bottom-4 left-4 flex flex-col gap-1">
          <p className="text-gray-200 font-semibold">{type}</p>
          <p className="text-white font-bold">{title}</p>

          <a
            className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center text-white"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <HiOutlineLink />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [active, setActive] = useState("proj");
  const base = "rounded-xl h-12 w-30 flex items-center justify-center hover:bg-white cursor-pointer";

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <div className="mx-auto bg-gray-300 w-70 h-15 rounded-xl mt-10 md:mt-20 flex items-center justify-center gap-4">
          <a className={`${base} ${active === "proj" ? "bg-white" : ""}`} onClick={() => setActive("proj")}>Projects</a>
          <a className={`${base} ${active === "skill" ? "bg-white" : ""}`} onClick={() => setActive("skill")}>Skills</a>
        </div>

        <div className={` ${active === "proj" ? "h-210 sm:h-150" : "h-150 sm:h-100 "}  w-150 relative overflow-hidden`}>
          {/* projects */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 absolute left-40 sm:left-0 ${active === "proj" ? "translate-x-0" : " -translate-x-150"} duration-500`}>
            <ProjectCard title="E-commerce Site" type="web" link="https://ahm8648u-crypto.github.io/final-projectt/" />
            <ProjectCard title="E-commerce Site" type="web" link="https://ahm8648u-crypto.github.io/final-projectt/" />
            <ProjectCard title="E-commerce Site" type="web" link="https://ahm8648u-crypto.github.io/final-projectt/" />
            <ProjectCard title="E-commerce Site" type="web" link="https://ahm8648u-crypto.github.io/final-projectt/" />
          </div>
          {/* end projects */}

          {/* skills */}
          <div className={` w-full flex flex-col items-center
            transition-transform duration-500
            ${active === "skill" ? "translate-x-0" : "translate-x-full"}`}>
            <p className="font-black">FrontEnd Developer</p>

            <div className="flex flex-col sm:flex-row gap-10 absolute top-10 left-40 sm:left-30">
              <div className="flex flex-col gap-5">
                <p className="flex items-center gap-1.5"><FaRegCheckCircle className="text-blue-300" />HTML</p>
                <p className="flex items-center gap-1.5"><FaRegCheckCircle className="text-blue-300" />Css</p>
                <p className="flex items-center gap-1.5"><FaRegCheckCircle className="text-blue-300" />Java Script</p>
              </div>

              <div className="flex flex-col gap-5">
                <p className="flex items-center gap-1.5"><FaRegCheckCircle className="text-blue-300" />React</p>
                <p className="flex items-center gap-1.5"><FaRegCheckCircle className="text-blue-300" />BootStrap</p>
                <p className="flex items-center gap-1.5"><FaRegCheckCircle className="text-blue-300" />TailWind</p>
              </div>

              <div className="flex flex-col gap-5">
                <p className="flex items-center gap-1.5"><FaRegCheckCircle className="text-blue-300" />supaBase</p>
                <p className="flex items-center gap-1.5"><FaRegCheckCircle className="text-blue-300" />Type Script</p>
                <p className="flex items-center gap-1.5"><FaRegCheckCircle className="text-blue-300" />Axios</p>
              </div>
            </div>
          </div>
          {/* end skills */}
        </div>
      </div>
    </>
  )
}
