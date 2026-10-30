import { FaGraduationCap, FaRegCheckCircle } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

const education = [
  {
    year: "2022 - 2026",
    title: "Bachelor's Degree",
    place:"Zagazig Universty / Information of Technology",
  },
  {
    year: "2026",
    title: "Frontend Development Course",
    place: "Bravo..",
    desc: "HTML, CSS, JavaScript, React.",
  },
  {
    year: "2026",
    title: "Advanced React & TypeScript",
    desc: "Tailwind, Supabase, Axios.",
  },
];

const facts = ["Frontend Developer", "React & TypeScript", "Tailwind CSS"];

export default function About() {
  return (
    <section id="ab" className="max-w-4xl mx-auto px-4 py-16 mt-20">
      <h2 className="text-3xl md:text-4xl font-black text-center">
        About <span className="text-blue-600">me</span>
      </h2>
      <p className="text-gray-500 text-center mt-2 mb-10">
        A little about who I am and where I studied.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Intro card */}
        <div className="bg-[#1E293B] text-white rounded-3xl p-6 flex flex-col gap-4">
          <h3 className="text-xl font-bold">Hi, I'm Ahmed Samer</h3>
          <p className="text-gray-300 leading-7">
          Your short bio goes here: what you build, what you enjoy about frontend, and what you're looking for next.
          </p>

          <ul className="flex flex-col gap-3">
            {facts.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <FaRegCheckCircle className="text-blue-400 shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <p className="flex items-center gap-2 text-gray-300 mt-auto">
            <HiOutlineLocationMarker className="text-blue-400 shrink-0" />
            Zagazig, Sharqia, Egypt
          </p>
        </div>

        {/* Education timeline */}
        <div className="bg-white rounded-3xl p-6 shadow-md">
          <h3 className="flex items-center gap-2 text-xl font-bold mb-6">
            <FaGraduationCap className="text-blue-600" />
            Education
          </h3>

          <ol className="border-l-2 border-blue-200 ml-3">
            {education.map((item) => (
              <li key={item.title} className="relative pl-8 pb-8 last:pb-0">
                <span className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-blue-600 ring-4 ring-white flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-white" />
                </span>

                <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 rounded-full px-3 py-1">
                  {item.year}
                </span>
                <h4 className="font-bold mt-2">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.place}</p>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}