import React from 'react'
import logo from './logo.png'
import dropdown from './chevron-down.png'
import Studentmenu from './Studentmenu'
function Navbar() {
   const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const dropdownAnimationHandler = (isOpen) => {
    if (isOpen) {
      return 'animate-dropdown-open';
    } else {
      return 'animate-dropdown-close';
    }
  };


  return (

     <nav className='flex flex-row gap-4 items-center p-4 w-full bg-white h-16 justify-center sticky top-0 z-50 shadow-sm'>
    
          <div className=' display flex gap-40  text-black lrft-50 justify-center items-center '> 
        <img src={logo} alt="Logo" srcset="" />
         <li className='list-none flex items-center gap-1 cursor-pointer hover:bg-gray-200 p-2 rounded-lg '>
            For Students
            <button>
             <img src={dropdown} alt="Dropdown"   srcset="" className='h-3 w-3' />
            </button>
         </li>
         <li className='list-none flex items-center gap-1 cursor-pointer hover:bg-gray-200 p-2 rounded-lg '>
            For professionals
            <button>
             <img src={dropdown} alt="Dropdown"   srcset="" className='h-3 w-3' />
 
            </button>
             
         </li>
         
          <div className='ml-auto flex gap-4 border-3 border-none p-3 b text-white bg-orange-500 border- rounded-lg cursor-pointer hover:bg-orange-600 hover:text-white '>
            <button>Login</button>
        </div>
        </div>
        
        
       
     </nav>

  )
}

export default Navbar