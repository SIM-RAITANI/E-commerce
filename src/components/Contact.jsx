import React from 'react'

function Contact() {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-[#f8f4f0] flex-col gap-7 mt-5  text-3xl'>
      <div className='flex flex-col justify-center items-center gap-1'>
      <div>Contact Us</div>
      <div className='bg-[#BC4C2A] w-[100px] rounded-lg h-[3px]'></div>
      </div>
      <div className='flex items-center justify-center flex-col gap-5'>
        <div className='flex  gap-5'>
          <div className='bg-white rounded-lg border-2 border-gray-300 w-[300px] h-[200px] hover:scale-105 cursor-pointer flex flex-col justify-center items-center gap-7 p-4'>
            <p className='text-base'>Customers</p>
            <p className='text-sm text-center'>From new products to the older one, we respect our customer's review.</p>
            <a href="" className='underline text-blue-600 text-sm'>fashionlane@gmail.com</a>

          </div>
          <div className='bg-white rounded-lg border-2 border-gray-300 w-[300px] h-[200px] hover:scale-105 cursor-pointer flex flex-col justify-center items-center gap-7 p-4'>
            <p className='text-base'>Influencers</p>
            <p className='text-sm text-center'>If you're curious about our business,then give us a chance to connect with you.</p>
            <a href="" className='underline text-blue-600 text-sm'>fashionlane@gmail.com</a>

          </div>

        </div>
        <div className='flex gap-5'>
        <div className='bg-white rounded-lg border-2 border-gray-300 w-[300px] h-[200px] hover:scale-105 cursor-pointer flex flex-col justify-center items-center gap-7 p-4'>
            <p className='text-base'>Press</p>
            <p className='text-sm text-center'>Wondering,how to feature "FashionLane"? Contact us at:</p>
            <a href="" className='underline text-blue-600 text-sm'>fashionlane@gmail.com</a>

          </div>
          <div className='bg-white rounded-lg border-2 border-gray-300 w-[300px] h-[200px] hover:scale-105 cursor-pointer flex flex-col justify-center items-center gap-7 p-4'>
            <p className='text-base'>Sponsorship</p>
            <p className='text-sm text-center'>From school to college evnts,we sponsor in all kind of events that matches with our CSR. </p>
            <a href="" className='underline text-blue-600 text-sm'>fashionlane@gmail.com</a>

          </div>

        </div>
        
      </div>
      
    </div>
  )
}

export default Contact
