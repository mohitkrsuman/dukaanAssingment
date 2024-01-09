import React from 'react';
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

const data = [
   {
      id : 1,
      no : '1',
   },
   {
      id : 2,
      no : '2',
   },
   {
      id : 3,
      no : '...',
   },
   {
      id : 4,
      no : '10',
   },
   {
      id : 5,
      no : '11',
   },
   {
      id : 6,
      no : '12',
   },
]

const Pagination = () => {
  return (
    <div className='flex gap-1 my-10'>
       <div className='flex m-auto bg-slate-100 p-2  hover:bg-slate-200 cursor-pointer'><GrFormPrevious className='m-auto'/> Previous</div>
       <div className='flex'>
            {
               data.map((item) => (
                  <div key={item.id} className='bg-slate-100 p-2 ml-1 rounded-md cursor-pointer hover:bg-slate-200 '>{item.no}</div>
               ))
            }
       </div>
       <div className='flex m-auto bg-slate-100 p-2  hover:bg-slate-200 cursor-pointer'>Next <MdNavigateNext className='m-auto'/></div>
    </div>
  )
}

export default Pagination