 import React from 'react'
 import dropdown from './chevron-down.png'
 import { useState } from 'react';
 
 function Professionalmenu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState({student:false,professional:false});


   return (
     <div className='p-6 max-w-7xl mx-auto Bottom-100 '>
       <div className='grid md:grid-cols-2 gap-6'>
         <div> 
           <h2 className='text-lg font-semibold mb-3'>Professional domains</h2>
           <ul className='space-y-3 text-sm text-gray-800'>
            <li className='flex flex-row  items-center gap-31'>
              Web Development
              <img src={dropdown} alt=""  className='h-3 w-3 transform rotate-270' />
            </li>
            <li className='flex flex-row  items-center gap-40'>
              Data Science
              <img src={dropdown} alt="" className='h-3 w-3 transform rotate-270 '/>
            </li>
            <li className='flex flex-row  items-center gap-20'>
              Mobile App Development
              <img src={dropdown} className='h-3 w-3 transform rotate-270'alt="" />
            </li>
            <li className='flex flex-row  items-center gap-29' >
              Game Development
              <img src={dropdown} className='h-3 w-3 transform rotate-270' alt="" />
            </li>
            <li className='flex flex-row  items-center gap-28'>
              Artificial Intelligence
              <img src={dropdown} className='h-3 w-3 transform rotate-270' alt="" />

            </li>
           </ul>
         </div>
         <div className='list-none'>
            <h2 className='text-lg font-semibold mb-3'>Certificates</h2>
            <li>
              Web Development
            </li>
            <li>
              Data Science
            </li>
            <li>
              Mobile App Development  
            </li>
         </div>
       </div>

     </div>
   )
 }
 
 export default Professionalmenu