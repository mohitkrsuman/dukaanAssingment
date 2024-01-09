import React from 'react'

const data = [
   {
      id: 1,
      title : 'Online Orders',
      number : '777'
   },
   {
      id: 2,
      title : 'Amount Received',
      number : '$ 91,54,435.23'
   }
]

const Middle = () => {
  return (
    <div className='flex justify-between mt-2'>
       {data.map((item) => (
         <div key={item.id} className='shadow-md p-3 md:p-7 md:w-96 bg-slate-50'>
             <div>
                 <p className='text-sm md:text-xl font-light'>{item.title}</p>
                 <p className='md:text-2xl'>{item.number}</p>
             </div>
         </div>
       ))}
    </div>
  )
}

export default Middle