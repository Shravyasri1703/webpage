'use client'
import Navbar from "@/components/navbar";
import Sidebar from "@/components/Sidebar";
import { MdOndemandVideo } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { RiShare2Line } from "react-icons/ri";
import { CiPlay1 } from "react-icons/ci";
import { FaRegFolder } from "react-icons/fa6";
import { FiClipboard } from "react-icons/fi";
import { CiMobile1 } from "react-icons/ci";
import { MdOutlineFindInPage } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { BsFillFileEarmarkPlayFill } from "react-icons/bs";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import react from './react-course.png'
import ts from './typescript-crash-course.png'
import thumbnail from './3D_Course.png'
import Image from "next/image";
import icon from './favicon.ico'
import { useState } from "react";


export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [likes, setLikes] = useState(false)

  const handleLike = () =>{
    setLikes(prev => !prev)
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };
  return (
    <>
    
     <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar}/>
     <div className={`flex flex-col min-h-screen max-w-screen bg-black px-3 lg:px-10 overflow-hidden transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-[250px]' : 'ml-0'}`}>
      <div className="flex flex-row items-center">
        <HiMiniBars3BottomLeft  size={25} color="gray" onClick={toggleSidebar}/>
      <Navbar />
      </div>
      
    
       <div className={`flex flex-col lg:flex-row w-full h-full bg-gray-200 rounded-3xl p-5 overflow-hidden mt-2 gap-2`}>

        <div className="flex flex-col w-full lg:w-3/5 h-full gap-5 p-1">
         <div className="flex flex-col w-full p-4 ">
          <div className="h-96 w-full  rounded-xl">
            <Image src={thumbnail} alt='course' className="w-full h-full rounded-xl"/>
          </div>
         </div> {/* video */}
         <div className="flex flex-row w-full justify-evenly">
           <Image src={icon} alt='icon' className="w-10 h-10 mr-2"/>
           <div className="flex flex-col w-1/2">
            <h4 className="text-black font-bold">Ryan Curtis</h4>
            <p className="text-sm text-gray-500">Publisher</p>
           </div>
           <div className="flex flex-row items-center w-1/2 justify-end mr-5">
             <FaHeart color={likes ? 'red' : ''} size={22} onClick={handleLike} />
              <p className="ml-1">{likes ? '950' : '949'}</p>
             <RiShare2Line className="ml-3"/>
             <p>Share</p>
             <p className="ml-3">...</p>
           </div>
         </div> {/*profile snd like */}
         <div className="flex flex-col w-full">
          <h2 className="text-xl font-bold text-black">Description</h2>
          <p className=" p-1">Welocme to the world of Blender 3D! In This comprehensive Course , we will dive into the fundamentals of Blender ,
            equipping you with the essential knowledge and skills to create stunning 3D projects. Whether
            you&apos;re a beginner or eager to explore the realm of 3D modeling or an experienced artist to expand your capabalities, this course will guide you every step of the way. 
          </p>
         </div>
         <div className="flex flex-col w-full gap-4">
           <h2 className="text-xl font-bold text-black">Course Details</h2>
           <div className="flex flex-row w-full justify-evenly gap-6">
            
            <div className="flex flex-col w-40 h-20 bg-white rounded-lg justify-center px-5">
             <h6 className="font-bold text-sm text-gray-400">Lessons</h6>
             <div className="flex flex-row gap-2 items-center">
              <MdOndemandVideo color="black" size={20} />
              <h2 className="font-semibold">128</h2>
             </div>
            </div>
            <div className="flex flex-col w-40 h-20 bg-white rounded-lg justify-center px-5">
            <h6 className="font-bold text-sm text-gray-400">Duration</h6>
             <div className="flex flex-row gap-2 items-center">
              <IoMdTime color="black" size={20} />
              <h2 className="font-semibold">56h 28m </h2>
             </div>
            </div>
            <div className="flex flex-col w-40 h-20 bg-white rounded-lg justify-center px-5">
            <h6 className="font-bold text-sm text-gray-400">Skill Level</h6>
             <div className="flex flex-row gap-2 items-center">
              <MdOutlineSignalCellularAlt color="black" size={20} />
              <h2 className="font-semibold">Beginner</h2>
             </div>
            </div>
            <div className="flex flex-col w-40 h-20 bg-white rounded-lg justify-center px-5">
            <h6 className="font-bold text-sm text-gray-400">Views</h6>
             <div className="flex flex-row gap-2 items-center">
              <IoEyeOutline color="black" size={20} />
              <h2 className="font-semibold">12,620</h2>
             </div>
            </div>
           </div>
         </div> 
         <div className="flex flex-col w-full">
          <div>
            <h1 className="text-xl font-bold text-black">Frequently Asked Questions</h1>
          </div>
          <div className="flex flex-col p-3 gap-4 ">
           <div className="w-full  h-14 flex flex-row items-center px-5 bg-white rounded-xl justify-between">
              <h6>How long does it take to learn ?</h6>
              <IoMdAdd color="black" size={22} />
           </div>
           <div className="w-full  h-14 flex flex-row items-center px-5 bg-white rounded-xl justify-between">
              <h6>How much does Blender Cost ?</h6>
              <IoMdAdd color="black" size={22} />
           </div>
           <div className="w-full  h-14 flex flex-row items-center px-5 bg-white rounded-xl justify-between">
              <h6>How long will the course stay active after purchase ? </h6>
              <IoMdAdd color="black" size={22} />
           </div>
        
          </div>
         </div>
        </div>

        
        <div className="flex flex-col w-full lg:w-2/5 bg-gray-200 rounded-2xl p-1 gap-6">

         <div className="w-full h-96 flex flex-col bg-slate-50 rounded-2xl p-2">
          <h1 className="text-sm font-semibold px-4 text-slate-400 mt-2">Full Course</h1>
          <div className="flex flex-row w-full items-center justify-between px-5">
           <h1 className="font-bold text-2xl ">$15.99 <span className="text-gray-400 text-sm line-through">$39.99</span></h1>
           <div className="h-6 w-20 flex  bg-purple-200 font-bold text-purple-600 items-center justify-center text-sm rounded-md">60% off</div>
          
          </div>
          <h1 className="font-bold mt-2 px-4">Course includes:</h1>
          <div className="flex flex-col mt-2 gap-2">
           <div className="flex flex-row items-center text-sm gap-3 px-7">
            <CiPlay1 />
            <p className="font-extralight">56 hours on-demand video</p>
           </div>
           <div className="flex flex-row items-center text-sm gap-3 px-7">
            <FiClipboard color="gray"/>
            <p className="font-extralight">6 Articles</p>
           </div>
           <div className="flex flex-row items-center text-sm gap-3 px-7">
            <FaRegFolder color="gray"/>
            <p className="font-extralight">8 Downloadable Resources</p>
           </div>
           <div className="flex flex-row items-center text-sm gap-3 px-7">
            <CiMobile1 />
            <p className="font-extralight">Mobile Version</p>
           </div>
           </div>
           <div className="flex flex-col w-full px-10 gap-4 mt-7">
           <button className="h-10 w-full bg-indigo-500 text-white rounded-lg">Add to Cart</button>
           <button className="h-10 w-full bg-white text-indgio-500 border-2 border-indigo-500 rounded-lg">Buy Now</button>
           </div>
           <h2 className="text-sm text-slate-400 px-10 mt-2">30 Day money-back guarantee</h2>
         </div>

         <div className="flex flex-row w-full bg-slate-50 h-16 rounded-2xl items-center">
         <h1 className="text-4xl mx-3">🤩</h1>
          <div className="flex flex-col w-1/2">
           <h1 className="font-semibold">Ratings</h1>
           <p className="text-sm text-slate-400">2500 Students</p>
          </div>
          <div className="flex flex-row w-1/2 justify-end px-8 items-center gap-2">
          <FaStar size={22} color="ffc300"/>
          <p>4.4/5</p>
          </div>
         </div>

         <div className="flex flex-col bg-slate-50 h-80 w-full rounded-2xl p-5 gap-3">
          <h1 className="font-bold">Publisher</h1>
          <div className="flex flex-row items-center justify-between px-3">
            <Image src={icon} alt="icon" className="h-10 w-10" />
            <div className="flex flex-col w-1/2 px-3">
              <h2 className="font-bold">Ryan Curtis</h2>
              <p className="text-sm text-slate-400">3D Artist</p>
            </div>
            <div className="w-1/2 flex justify-end">
            <h1 className="text-slate-300">Follow +</h1>
            </div>
          </div>
           <p className="text-sm text-slate-400 px-5">Hey! My name is Ryan, I&apos;m 26 and an educator teaching Blender.
            I am a freelance 3D Artist with aryond 5 years of experience making Blender  3D a fun.
           </p>

           <div className="flex flex-col px-4 text-slate-600 gap-2 ">
             <div className="flex flex-row items-center gap-4">
              <FaStar />
              <p>4.8 Instructor rating</p>
             </div>

             <div className="flex flex-row items-center gap-4">
              <MdVerified />
              <p>889 Reviews</p>
             </div>

             <div className="flex flex-row items-center gap-4">
              <BsFillPeopleFill />
              <p>4,887 Students</p>
             </div>

             <div className="flex flex-row items-center gap-4">
              <BsFillFileEarmarkPlayFill />
              <p>6 Courses</p>
             </div>
           </div>

         </div> 

         <div className="flex flex-col bg-slate-50 h-[230px] w-full rounded-2xl p-4 gap-2">
          <h1 className="font-semibold">Suggest Courses</h1>
          <div className="flex flex-row h-1/2 w-full px-5 gap-7 items-center rounded-xl">
           <div className="h-[70px] w-32 rounded-xl ">
            <Image src={react} alt="react" className="w-full h-full rounded-xl"/>
           </div>
           <div className="flex flex-col py-1 w-2/5">
            <h1 className="font-semibold">React JS</h1>
            <p className="text-sm text-slate-400">by XYZ</p>
            <p>⭐ <span className="text-slate-400 text-sm">4.4</span></p>
           </div>
           <button className="h-8 w-20 bg-indigo-500 text-white border-2 border-indigo-700 p-1 rounded-lg text-sm">Start</button>
          </div>
          <div className="flex flex-row h-1/2 w-full px-5 bg-slate-50 rounded-xl items-center gap-7">
          <div className="h-[70px] w-32 rounded-xl">
          <Image src={ts} alt="react" className="w-full h-full rounded-xl"/>
          </div>
           <div className="flex flex-col py-1 w-2/5">
            <h1 className="font-bold">Typescript</h1>
            <p className="text-sm text-slate-400">by XYZ</p>
            <p>⭐ <span className="text-sm text-slate-400">4.2</span></p>
           </div>
           <button className="h-8 w-20 bg-indigo-500 text-white border-2 border-indigo-700 p-1 rounded-lg text-sm">Start</button>
          </div>
         </div>


         
        </div>
       </div>
     </div>
    </>
  );
}
