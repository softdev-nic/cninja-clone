import React, { useState } from 'react'
import Logo from './logo.png'

function Slider() {
  
  
  
  return (
    <div className='flex flex-col h-full   w-500 bg-white shadow-2xl animate-slide-in overflow-hidden'>
         
    <div className=' p-8' >
       <div className='flex justify-between items-center mb-8 w-full'>
        <img src={Logo} alt=""  />
        <button  className="text-2xl font-bold">&times;</button>
       </div>
        <div className="loginbox p-4">
            <li>Login WIth</li>
            <div className='flex flex-col  list-none gap-3 justify-center '>
              <li >
                <button className='border-2 p-3 w-100'>
                    Google 
                </button>

            </li>
            <li>
                <button className='border-2 p-3 w-100'>
                    Naukri
                </button>
            
            </li>
            </div>
            <p>OR</p>
            <div>
              <h5>Email</h5>
              <input type="text" className='p-3 w-100 border-1 outline-none'  autoComplete='off' placeholder='email' />
              
            </div>

            <div>
            
            </div>
       </div>
        </div>
    </div>
  
  )
}

export default Slider