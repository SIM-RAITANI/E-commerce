import React, { useState } from 'react'

function Footer() {


  const [email,setEmail]=useState("")
  return (
    <div className=' bg-[#0f0f0fcc]  px-10  py-28 flex gap-[100px] w-full'>
      <div className='flex flex-col gap-7'>
        <div className='flex flex-col gap-0'>
        <div className='text-white font-medium text-xl'>Contact</div>
        <div className='h-[2px] bg-[#BC4C2A] w-[55px] rounded-lg'></div>
        </div>
        <div className='text-sm text-white flex flex-col gap-1 '>
          <p className='cursor-pointer hover:underline'>Instagram</p>
          <p className='cursor-pointer hover:underline'>Facebook</p>
          <p className='cursor-pointer hover:underline'>Twitter</p>
          <p className='cursor-pointer hover:underline'>Whatsapp</p>
        </div>

      </div>
      <div className='flex flex-col gap-7'>
        <div className='flex flex-col gap-0'>
        <div className='text-white font-medium text-xl'>Online-Shop</div>
        <div className='h-[2px] bg-[#BC4C2A] w-[65px] rounded-lg'></div>
        </div>
        <div className='text-sm text-white flex flex-col gap-1 '>
          <p className='cursor-pointer hover:underline'>Earrings</p>
          <p className='cursor-pointer hover:underline'>Handbag</p>
          <p className='cursor-pointer hover:underline'>Belts</p>
          <p className='cursor-pointer hover:underline'>Jewellery</p>
        </div>

      </div>
      <div className='flex flex-col gap-7'>
        <div className='flex flex-col gap-0'>
        <div className='text-white font-medium text-xl'>Get Help</div>
        <div className='h-[2px] bg-[#BC4C2A] w-[55px] rounded-lg'></div>
        </div>
        <div className='text-sm text-white flex flex-col gap-1 '>
          <p className='cursor-pointer hover:underline'>Delivery</p>
          <p className='cursor-pointer hover:underline'>Return and Refund</p>
          <p className='cursor-pointer hover:underline'>Shipping</p>
          <p className='cursor-pointer hover:underline'>Order Status</p>
          <p className='cursor-pointer hover:underline'>Payment Options</p>

        </div>

      </div>
      <div className='flex flex-col gap-7'>
        <div className='flex flex-col gap-0'>
        <div className='text-white font-medium text-xl'>Company</div>
        <div className='h-[2px] bg-[#BC4C2A] w-[55px] rounded-lg'></div>
        </div>
        <div className='text-sm text-white flex flex-col gap-1 '>
          <p className='cursor-pointer hover:underline'>Our Policy</p>
          <p className='cursor-pointer hover:underline'>Services</p>
          <p className='cursor-pointer hover:underline'>FAQs</p>
          <p className='cursor-pointer hover:underline'>About-Us</p>
        </div>

        

      </div>
      <div className=" flex-grow flex justify-center  flex-col gap-5  ml-16">
          <p className='text-white'>Drop your Email to get recent updates</p>
          <div className='flex'>
          <input type="text" placeholder='abc@gmail.com' className='bg-white px-4 py-2 h-10  font-medium outline-none' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <button className='bg-[#BC4C2A] text-white px-5 py-2 h-10' onClick={()=> setEmail("") }>Submit</button>

          </div>
           
        </div>
     
    
      
    </div>
  )
}

export default Footer
