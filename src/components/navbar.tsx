'use client'
import React from 'react'
import { CiHeart } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";
import { CiBellOn } from "react-icons/ci";

const Navbar = () => {
  
  return (
    <nav className={`flex flex-row w-screen h-12 bg-black top-0  items-center p-2`}>
        <div className='flex flex-row h-full w-1/2 items-center gap-7 ml-6'>
            <h1 className={`text-2xl font-extrabold text-gray-300 `}>Quantum</h1>
        </div>
        <div className='flex flex-row h-full w-1/2 items-center gap-10 justify-end mr-16'>
         <CiHeart size={25} color='white'/>
         <SlHandbag size={20} color='white'/>
         <CiBellOn size={25} color='white'/>
        </div>
    </nav>
  )
}

export default Navbar