import React from 'react'
import dropdown from './chevron-down.png'

function Studentmenu() {
  return (
    <div className='p-6 max-w-7xl mx-auto Bottom-100'>
      <div className='grid md:grid-cols-2 gap-6'>
        <div>
          <h2 className='text-lg font-semibold mb-3'>Student domains</h2>
          <ul className='space-y-3 text-sm text-gray-800'>
            <li className='flex items-center justify-between rounded-lg p-3 hover:bg-gray-50 transition cursor-pointer'>
              Web Development
              <img src={dropdown} alt='' className='h-3 w-3 transform rotate-270' />
            </li>
            <li className='flex items-center justify-between rounded-lg p-3 hover:bg-gray-50 transition cursor-pointer' >
              Data Science
              <img src={dropdown} alt='' className='h-3 w-3 transform rotate-270'  />
            </li>
            <li className='flex items-center justify-between rounded-lg p-3 hover:bg-gray-50 transition cursor-pointer'>
              Mobile App Development
              <img src={dropdown} alt='' className='h-3 w-3 transform rotate-270' />
            </li>
            <li className=' flex items-center justify-between rounded-lg p-3 hover:bg-gray-50 transition cursor-pointer'>Game Development
                <img src={dropdown} alt="" className='h-3 w-3 transform rotate-270' />
            </li>
            <li className=' flex items-center justify-between rounded-lg p-3 hover:bg-gray-50 transition cursor-pointer'>Artificial Intelligence
                <img src={dropdown} alt="" className='h-3 w-3 transform rotate-270' />
            </li>
          </ul>
        </div>
        <div>
          <h2 className='text-lg font-semibold mb-3'>Certificates</h2>
          <ul className='space-y-3 text-sm text-gray-800'>
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Studentmenu
