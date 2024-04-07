import React from 'react'

const Newbatch = () => {
  return (
    <div className='flex justify-center items-center font-bold w-full gap-3 p-4 mt-16 ' id='newbatch'>
     <div className='flex justify-center items-center flex-col w-full border-2 p-4 rounded-lg border-black/20 font-bold bg-black/15 gap-3'>
     <div className='border-b-2 border-yellow-300 text-center mt-3 pb-2 text-lg'>
         <h3 className='text-yellow-300'>New Batch</h3>
      </div>
        <div className='flex justify-evenly w-full'>
           <span>Starting Date </span>
           <span>-</span>
           <span>10 April 2024</span>
        </div>
        <div className='flex justify-evenly w-full'>
           <span>Morning Time </span>
           <span>-</span>
           <span>8:00 to 10:00</span>
        </div>
        <div className='flex justify-evenly w-full'>
           <span>Evening Time </span>
           <span>-</span>
           <span>5:00 to 7:00</span>
        </div>
     </div>
    </div>
  )
}

export default Newbatch