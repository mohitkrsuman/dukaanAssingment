import React from 'react'

const data = [
   {
      id : '1',
      orderid : '#754321',
      orderdate : '09 Jan 2024',
      orderamount : '$ 99.89',
      transactionfees : '$ 4.43'
   },
   {
      id : '1',
      orderid : '#754321',
      orderdate : '09 Jan 2024',
      orderamount : '$ 99.89',
      transactionfees : '$ 4.43'
   },
   {
      id : '1',
      orderid : '#754321',
      orderdate : '09 Jan 2024',
      orderamount : '$ 99.89',
      transactionfees : '$ 4.43'
   },
   {
      id : '1',
      orderid : '#754321',
      orderdate : '09 Jan 2024',
      orderamount : '$ 99.89',
      transactionfees : '$ 4.43'
   },
   {
      id : '1',
      orderid : '#754321',
      orderdate : '09 Jan 2024',
      orderamount : '$ 99.89',
      transactionfees : '$ 4.43'
   },
]

const Datas = () => {
  return (
    <div className='p-5'>
       <div className='flex justify-between text-xs md:text-sm font-semibold bg-blue-100 p-2'>
          <p>Order ID</p>
          <p>Order Date</p>
          <p>Order Amount</p>
          <p>Transaction Fees</p>
       </div>
      {
         data.map((item) => (
            <div key={item.id} className='flex justify-between text-xs md:text-sm font-semibold bg-slate-50 p-2 shadow-sm'>
               <p className='text-blue-600'>{item.orderid}</p>
               <p>{item.orderdate}</p>
               <p>{item.orderamount}</p>
               <p>{item.transactionfees}</p>
            </div>
         
         ))
      }
    </div>
  )
}

export default Datas