import React from 'react';
import { FaSearch } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { HiArrowsUpDown } from "react-icons/hi2";

const Functionality = () => {
  return (
   <div className="p-5">
   <h2 className="font-semibold md:text-lg">Transactions | This Month</h2>

   <div className="flex justify-between">
     <div className="w-40 md:w-64 flex rounded-md  bg-slate-100 shadow-sm gap-2 mt-2">
       <FaSearch className="text-slate-600 m-auto" />
       <input
         className="outline-none bg-slate-100"
         type="text"
         placeholder={"Search by order ID"}
       />
     </div>

     <div className="flex gap-2">
       <p className="p-2 flex gap-1 bg-gray-100 cursor-pointer">
         Sort <HiArrowsUpDown className="m-auto"/>
       </p>
       <p className="p-2 bg-gray-100 cursor-pointer">
         <BsDownload />
       </p>
     </div>
   </div>
 </div>
  )
}

export default Functionality