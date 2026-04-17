import React from 'react'
import logo from './logo.png'
import dropdown from './chevron-down.png'
import Studentmenu from './Studentmenu'
import Professionalmenu from './Professionalmenu'
import Slider from './Slider'
import { useState } from 'react'
const sizeArray = {
    'small' : 450,
    'medium': 1000,
    'large' : 1500,
    
}
function Navbar() {
   const [isDropdownOpen, setIsDropdownOpen] = React.useState({student:false,professional:false});
   const [Loginscreen, setLoginscreen] = useState(false);
    
   
  function toggleDropdown(switchkey){
    if (switchkey === 'student-on') {
      setIsDropdownOpen({ student: true, professional: false });
    } else if (switchkey === 'student-off' || switchkey === 'professional-off') {
      setIsDropdownOpen({ student: false, professional: false });
    } else if (switchkey === 'professional-on') {
      setIsDropdownOpen({ student: false, professional: true });
    }
    console.log(isDropdownOpen)
  }
 const loginscreenswitch = ()=>{
  Loginscreen?setLoginscreen(false):setLoginscreen(true);
  console.log(Loginscreen)
 }
 
 


  return (
    <>
       <nav className='flex flex-row gap-2 md:gap-1 items-center p-4 w-full bg-white h-16 justify-center sticky top-0 z-40 shadow-sm'>
    
          <div className=' display flex gap-2 md:gap-40 text-black justify-center items-center w-full max-w-7xl px-2'> 
        <img src={logo} alt="Logo" className='h-8 md:h-auto' />
         <li className='list-none flex items-center gap-1 cursor-pointer hover:bg-gray-200 p-2 rounded-lg '>
            For Students
            <button onClick={() => toggleDropdown(isDropdownOpen.student===true ? 'student-off' : 'student-on')}>
             <img src={dropdown} alt="Dropdown"    className='h-3 w-3'  />
            </button>
         </li>
         <li className='list-none flex items-center gap-1 cursor-pointer hover:bg-gray-200 p-2 rounded-lg '>
            For professionals
            <button onClick={() => toggleDropdown(isDropdownOpen.professional===true ? 'professional-off' : 'professional-on')}>
             <img src={dropdown} alt="Dropdown"    className='h-3 w-3' />
 
            </button>
             
         </li>
         
          <div className='ml-auto flex gap-4 border-none p-2 md:p-3 text-white bg-orange-500 rounded-lg cursor-pointer hover:bg-orange-600 hover:text-white ' >
            <button onClick={loginscreenswitch}>Login</button>
        </div>
        </div>
        
        
     </nav>

     {isDropdownOpen.student && (
       <div className='absolute top-16 left-0 w-full bg-white shadow-lg z-50 border-t'>
         <Studentmenu />
       </div>
     )}
     {
      isDropdownOpen.professional &&(
        <div className='absolute top-16 left-0 w-full bg-white shadow-lg z-50 border-t'>
        <Professionalmenu/>
        
       </div>

      )
      

      }
      {
         
       1&&Loginscreen &&( 
        
       
        
        <div className='flex flex-col w-100 h-full top-0 z-index-3 right-0  overflow-hidden overflow-y-hidden fixed transform transition-transform duration-300 transition-x-full  '>
          <Slider/>
          </div>
      )
          

     }

    </>

  )
}

export default Navbar