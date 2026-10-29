import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";
import { CiMobile1 } from "react-icons/ci";
import { FaLocationDot} from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";

const SERVICE_ID = "service_45mmoxg";
const TEMPLATE_ID = "template_dr011ji";
const PUBLIC_KEY = "kQVAinRxEd6QlRARx";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        alert("Message sent successfully ✅");
        formRef.current?.reset();
      })
      .catch((err) => {
        console.error(err);
        alert(err?.text || "Something went wrong ❌");
      });
  };

  return (
    <>
    <div className="flex flex-col items-center gap-5 mt-10 sm:mt-0 mx-8">
        <a href=""id="con" ></a>
        {/*عنوان  */}
        <div className="flex flex-col items-center">
            <p className="text-4xl font-bold"> Get in <span className="text-blue-600">touch</span></p>
            <p className="mt-3 text-gray-500">  Have a project in mind or just want to say <span className="ml-20 sm:ml-0">hi? Send me a message.</span></p>
        </div>
       
        <div className="flex flex-col sm:flex-row gap-10 px-15">
           {/* info */}
        <div className="flex flex-col gap-4">

        <div className="flex items-center gap-4 w-max px-5 h-15 shadow-2xl rounded-2xl bg-white">
            <p className="w-8 h-8 rounded-[50%] bg-[#1E293B] text-white flex items-center justify-center"><MdEmail/></p>
            <div className="flex flex-col"><p className="text-sm text-gray-600">Email</p><p className="text-[#1E293B] font-bold text-sm">ahmedsamerr17@gmail.com</p></div>
        </div>
        <div className="flex items-center gap-4 w-70 px-5 h-15 shadow-2xl rounded-2xl bg-white">
            <p className="w-8 h-8 rounded-[50%] bg-[#1E293B] text-white flex items-center justify-center"><CiMobile1/></p>
            <div className="flex flex-col"><p className="text-sm text-gray-600">Phone</p><p className="text-[#1E293B] font-bold text-sm">01205186077</p></div>
        </div>
        <div className="flex items-center gap-4 w-70 px-5 h-15 shadow-2xl rounded-2xl bg-white">
            <p className="w-8 h-8 rounded-[50%] bg-[#1E293B] text-white flex items-center justify-center"><FaLocationDot/></p>
            <div className="flex flex-col"><p className="text-sm text-gray-600">Location</p><p className="text-[#1E293B] font-bold text-sm">Egypt/Sharqia/Zagazig</p></div>
        </div>
    <div className="flex gap-3 ml-5">
         <a className="px-2 py-2 bg-[#1E293B] text-white rounded-[50%] text-sm" href="https://www.linkedin.com/in/ahmed-samer-06a5a8317?utm_source=share_via&utm_content=profile&utm_medium=member_android"><TiSocialLinkedin/></a>
         <a className="px-2 py-1.5 bg-[#1E293B] text-white rounded-[50%] text-sm flex items-center" href="https://github.com/ahm8648u-crypto"><FaGithub /></a>
         <a className="px-2 py-1.5 bg-[#1E293B] text-white rounded-[50%] text-sm flex items-center" href="https://wa.me/201205186077"><FaWhatsapp /></a>
         <a className="px-2 py-1.5 bg-[#1E293B] text-white rounded-[50%] text-sm flex items-center" href="https://m.me/samerahmed.megahed"><FaFacebookMessenger /></a>
         <a className="px-2 py-1.5 bg-[#1E293B] text-white rounded-[50%] text-sm flex items-center" href="https://instagram.com/ahmed_samer0i"><FaInstagram /></a>
    </div>
        
        </div>
        {/* form*/}
       <div>
        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col shadow-2xl gap-6 p-5 w-80 h-65 rounded-2xl" action="">
            <input className="border border-gray-400 p-1 rounded-lg" type="text" name="name" id="" placeholder="your name" required />
            <input className="border  border-gray-400 p-1 rounded-lg" type="email" name="email" id="" placeholder="your email" required />
            <textarea className="border  border-gray-400 p-1 rounded-lg"  name="message" id="" placeholder="your message" required />
            <button type="submit" className="cursor-pointer w-full bg-[#1E293B] text-white rounded-2xl text-sm py-1.5">send message</button>
        </form>

       </div>

        </div>
    </div>
    
    </>
  )
}