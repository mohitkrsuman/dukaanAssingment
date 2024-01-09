import React from 'react'
import PayInfo from '../components/PayInfo'
import { Sidebar } from '../components/Sidebar'

const Payment = () => {
  return (
    <div className='flex'>
       <div className='flex-none w-48 md:w-72'>
           <Sidebar/>
       </div>
       <div className='flex-auto '>
           <PayInfo/>
       </div>
    </div>
  )
}

export default Payment