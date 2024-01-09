import React from 'react'
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { RiVipDiamondFill } from "react-icons/ri";

const Header = () => {
  return (
    <div className='flex w-full shadow-md'>
       <div className='flex p-3'>
           <p className='font-medium md:text-lg'>Payments</p>
           <p className='flex text-sm md:text-base ml-10 gap-1 m-auto'><FaRegCircleQuestion className='m-auto'/>How it works</p>
       </div>

       <div className='m-auto flex bg-slate-100 p-2 gap-1 rounded-md'>
          <FaSearch className='m-auto text-slate-600'/>
          <input className='outline-none w-7 md:w-80 bg-slate-100' type="text" placeholder={'Search features, tutorials, etc.'}/>
       </div>

       <div className='flex gap-1 md:gap-4 m-auto'>
         <GrAnnounce className='p-1 md:p-2 rounded-full bg-slate-100 md:text-4xl'/>
         <RiVipDiamondFill className='p-1 md:p-2 rounded-full bg-slate-100 md:text-4xl'/>
       </div>
    </div>
  )
}

export default Header