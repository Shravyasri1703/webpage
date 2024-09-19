'use client'
import React, { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Bs1Circle } from "react-icons/bs";
import { Bs2Circle } from "react-icons/bs";
import { Bs3Circle } from "react-icons/bs";
import { Bs4Circle } from "react-icons/bs";
import { FaAngleLeft } from "react-icons/fa6";
import react from '../app/react-course.png'
import ts from '../app/typescript-crash-course.png' 
import Image from 'next/image';
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}


const Sidebar: React.FC<SidebarProps> = ({isOpen, onClose }) => {
  const [isAccordion1Open, setIsAccordion1Open] = useState(true);
  const [isAccordion2Open, setIsAccordion2Open] = useState(true);

  const toggleAccordian1 = () =>{
    setIsAccordion1Open(prev => !prev)
  }

  const toggleAccordian2 = () =>{
    setIsAccordion2Open(prev => !prev)
  }

  return (
    <div className={`fixed flex flex-col top-0 left-0 min-h-screen w-screen lg:w-[250px] bg-white text-black lg:bg-black lg:text-white transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out z-50 items-center p-3 `}>
      <div className='flex flex-row items-center mt-2 gap-1' onClick={onClose}>
        <FaAngleLeft />
      <h1 className='text-sm font-semibold text-gray-500 text-center'>Back To Course</h1>
      </div>
      <div className='flex flex-col gap-4 mt-5 w-full'>
        <p className='text-sm'>
          Course
        </p>
        <h1 className='text-lg font-semibold text-slate-50'>
          Blender 3D Fundamentals
        </h1>
        <div className='flex flex-col w-full'>
         <div className='flex flex-col w-full '>
           <div className='flex flex-col gap-6 p-2 text-sm'>
              <div className='flex flex-row justify-between'>
              <h1 onClick={toggleAccordian1}>Course Introduction</h1>
              {isAccordion1Open ? <MdKeyboardArrowUp size={20} className='text-black lg:text-white' onClick={toggleAccordian1}/> : <MdKeyboardArrowDown size={20} className='text-black lg:text-white' onClick={toggleAccordian1}/> }
              </div>
              {isAccordion1Open && (
              <div className='flex flex-col p-3 gap-3'>
               <div className='flex flex-row gap-2 items-center py-2'>
                <h1><Bs1Circle size={18} color='#5D3FD3'/></h1>
                <h1 className='text-sm text-[#5D3FD3]'>Introduction</h1>
                <p className='text-[10px] px-1 bg-gray-600 rounded-sm ml-6'>Preview</p>
               </div>
                 
               <div className='flex flex-row gap-2 items-center py-2'>
                <h1><Bs2Circle size={18} color='white'/></h1>
                <h1 className='text-sm lg:text-slate-200 text-black'>Downloading Blender</h1>
          
               </div>

               <div className='flex flex-row gap-2 items-center py-2'>
                <h1><Bs3Circle size={18} color='white'/></h1>
                <h1 className='text-sm lg:text-slate-200 text-black'>Settingsand Preferences</h1>
               
               </div>

               <div className='flex flex-row gap-2 items-center py-2'>
                <h1><Bs4Circle size={18} color='white'/></h1>
                <h1 className='text-sm lg:text-slate-200 text-black'>Blender Interface</h1>
                
               </div>

              </div> 

               )}

               <div className='flex flex-row justify-between'>
               <h1 onClick={toggleAccordian2}>Basics of Blender 3D</h1>
               {isAccordion2Open ? <MdKeyboardArrowUp size={20} className='text-black lg:text-white' onClick={toggleAccordian2}/> : <MdKeyboardArrowDown size={20} className='text-black lg:text-white' onClick={toggleAccordian2}/> }
               </div>
               {isAccordion2Open && (
              <div className='flex flex-col gap-3'>
               <div className='flex flex-row gap-2 h-24 w-full items-center bg-slate-200 lg:bg-slate-900 rounded-md p-2'>
                 <Image src={react} alt='rct' className='w-24 h-16 rounded-md' />
                  <div className='flex flex-col ml-1'>
                    <p className='text-[14px]'>Absolute Basics</p>
                    <p className='text-[10px] text-slate-500'>49.28</p>
                  </div> 
               </div>
                 
               <div className='flex flex-row gap-2 h-24 w-full items-center bg-slate-200 lg:bg-slate-900 rounded-md p-2'>
                 <Image src={ts} alt='rct' className='w-24 h-16 rounded-md' />
                  <div className='flex flex-col ml-1'>
                    <p className='text-[14px]'>Object Editing</p>
                    <p className='text-[10px] text-slate-500'>26.47</p>
                  </div> 
               </div>

              </div> 
               )}
               
               <div className='flex flex-row justify-between'>
                <h1>Mesh Modeling</h1>
                <MdKeyboardArrowDown size={20}/>
               </div>

               <div className='flex flex-row justify-between'>
                <h1>Mesh Editing Operations</h1>
                <MdKeyboardArrowDown size={20}/>
               </div>
               
               <div className='flex flex-row justify-between'>
                <h1>Most Common Modifiers</h1>
                <MdKeyboardArrowDown size={20}/>
               </div>
                
               <div className='flex flex-row justify-between'>
                <h1>Orthographic References</h1>
                <MdKeyboardArrowDown size={20}/>
               </div>

               <div className='flex flex-row justify-between'>
                <h1>Sculpting</h1>
                <MdKeyboardArrowDown size={20}/>
               </div>

           </div>
         </div>
        
        </div>
      </div>
 
    </div>
  )
}

export default Sidebar