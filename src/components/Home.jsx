import React from 'react'
import "./Home.css"
import { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./download.png"


function Home() {
  
  


  return (
    <div className='w-full bg-white  mt-1'>
        
      <div className='image w-full flex justify-center flex-col items-center gap-10 box scroll-image'>
        <h1 className='text-white font-bold   text-4xl'>CUE THE COLOR</h1>
        <NavLink to="/arrival"><button className='  border-2 border-white px-5 py-3 text-sm text-white hover:text-[#BC4C2A] hover:bg-white hover:transition-colors'>Shop the collection</button></NavLink>
        
        
      </div>

      <div className=' flex flex-col gap-2 justify-center items-center   mt-24'>
        <h1 className=' text-5xl '>
            Best Sellers
        </h1>
        <div className=' bg-[#BC4C2A] h-1 w-20 rounded-md' >
        </div>
      </div>
      <div className='flex gap-10 flex-wrap justify-center mt-20 cursor-pointer'>
         <div className=' rounded-lg w-[300px] h-[300px] bg-[#BC4C2A] overflow-hidden'>
          <img src="https://media-us.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000013393537-Beige-OFFWHITE-1000013393537_01-2100.jpg" className=' w-full h-full hover:scale-110' alt="" />
         
         </div>
         
         <div className=' rounded-lg w-[300px] h-[300px]  bg-[#BC4C2A] overflow-hidden'>
          <img src="https://media-uk.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000012863170-Black-BLACK-1000012863170_01-2100.jpg" alt="" className=' w-full h-full hover:scale-110'/>
         
         </div>
         <div className=' rounded-lg w-[300px] h-[300px]  bg-[#BC4C2A] overflow-hidden'>
         <img src="https://media-us.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000013536203-Brown-TAN-1000013536203_01-2100.jpg" alt="" className=' w-full h-full hover:scale-110'/>
         
         
         </div>
      </div>
      <div className=' flex justify-center mt-[100px]'>
        <NavLink to="/arrival"><button className='border-[1px] border-[#BC4C2A] px-12 py-4 hover:border-none text-sm text-[#BC4C2A] hover:text-white hover:bg-[#BC4C2A] hover:transition-colors'>Shop All Accessory</button></NavLink>
      </div>

      <div className='w-full flex flex-col bg-[rgba(248,244,240,255)] mt-20'>
        <div className='flex w-full '>
            <div className=' w-[50%] right-image'></div>
            <div className=' w-[50%] flex items-center justify-center '>
              <img src="" alt="" />
            </div>

        </div>

        <div className='flex w-full '>
            
            <div className=' w-[50%] '></div>
            <div className=' w-[50%] left-image'></div>

        </div>

        

        </div>
        <div className=' flex flex-col gap-2 justify-center items-center   mt-24'>
        <h1 className=' text-4xl  font-normal'>
            Follow-Us
        </h1>
        <div className=' bg-[#BC4C2A] h-1 w-16 rounded-md ' ></div>

        <div className='flex  gap-7 mt-8 mb-10'>
          <div className=' rounded-full flex justify-center items-center  w-14 h-14 border-[1px]  border-gray-400  cursor-pointer'>
                 <FontAwesomeIcon icon={faInstagram} color='gray' size='xl'/>
          </div>
          <div className=' rounded-full flex justify-center items-center w-14 h-14 border-[1px] border-gray-400 cursor-pointer'>
                 <FontAwesomeIcon icon={faTwitter} color='gray' size='xl'/>
          </div>
          <div className=' rounded-full flex justify-center items-center w-14 h-14 border-[1px] border-gray-400 cursor-pointer'>
                 <FontAwesomeIcon icon={faTelegram} color='gray' size='xl'/>
          </div>
          <div className=' rounded-full flex justify-center items-center w-14 h-14 border-[1px] border-gray-400  cursor-pointer'>
                 <FontAwesomeIcon icon={faFacebook} color='gray' size='xl'/>
          </div>
        </div>
      </div>
      </div>
    

      
      
    
  )
}

export default Home
