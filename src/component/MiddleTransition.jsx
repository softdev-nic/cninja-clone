import React from 'react'
import '../component/Animation.css'
import tie from './tie.svg'
import rupee from './rupee.svg'
import growth from './growth.svg'
import './font.css'
import Videoplayer from './Videoplayer'
import FeaturesTable from './FeaturesTable'
function MiddleTransition() {
  return (
    <div className='flex w-full bg-black justify-center items-center list-none min-h-screen top-0'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
 <div className="transitAnimation text-white text-4xl font-bold bg-black w-full ">
    <div className='flex flex-col w-full h-screen justify-center items-center text-center'>
  <li  style={{"--i":0}}>10 years of</li>
    <li  style={{"--i":1}}>transforming</li>
    <li  style={{"--i":2}} >tech careers</li>
    </div>
  <div className=' bg-black w-full h-screen justify-center items-center flex flex-col relative mt-0'>
    <div className='flex flex-col items-center relative z-10 -mt-[300px]'>
      <div className='absolute w-1 bg-gray-700 h-24 top-20 left-1/2 -translate-x-1/2 z-0'></div>
      <div className='flex items-center w-20 gap-2 justify-center bg-[rgb(98,73,197)] border-1 rounded-lg h-20 p-2 shadow-[0_0_15px_rgba(98,73,197,0.5)]' >
    <svg  color='white'  xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>
      </div>
      <div className='text-center mt-6'>
        <h1 className='text-5xl font-bold text-white'>1.5 Lakh students</h1>
        <p className='text-sm text-gray-400'>cracked dream roles at top tech companies</p>
      </div>
        <div className='relative flex flex-col items-center'>
          <div className='w-1 bg-gray-700 h-24 z-0'></div>
          <div className='flex w-20 bg-[rgb(98,73,197)] items-center justify-center color-white border-1 rounded-lg h-20 p-2 shadow-[0_0_15px_rgba(98,73,197,0.5)] relative z-10'>
        <img src={tie} alt="" />
          </div>
    </div>
    <div>
        <h1>
            1,400 Alumni in MAANG
          </h1>
          <p className='text-sm text-gray-400 text-center'>
            & more in 103/111 Unicorns
</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='w-1 bg-gray-700 h-24 z-0'></div>
          <div className= 'flex w-20 bg-[rgb(98,73,197)] items-center justify-center color-white border-1 rounded-lg h-20 p-2 shadow-[0_0_15px_rgba(98,73,197,0.5)] relative z-10'>
            <img src={rupee} alt="" />
          </div>

         <h1 className='text-5xl font-bold text-white'>
          1 Cr+ highest CTC
          </h1> 
          <p className='text-sm text-gray-400 text-center'>
 
after completing the course
          </p>
        </div>
           <div className='flex flex-col items-center'>
          <div className='w-1 bg-gray-700 h-24 z-0'></div>
          <div className= 'flex w-20 bg-[rgb(98,73,197)] color-white items-center justify-center color-white border-1 rounded-lg h-20 p-2 shadow-[0_0_15px_rgba(98,73,197,0.5)] relative z-10'>
            <img src={growth} alt="" />
          </div>

         <h1 className='text-5xl font-bold text-white'>
          128% average hike
          </h1> 
          <p className='text-sm text-gray-400 text-center'>
           in salary after completing the course
 
          </p>
        </div>
          <div className='mt-10'>
            <button className='bg-orange-500 text-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors'>
              Explore offerings
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-black p-10">
        <div className="why-us mb-10">
          <h1 className='font-mulish font-bold text-black text-5xl text-center'>Why us?</h1>
        </div>
      <div className='flex flex-row'>
             <div className='w-full max-w-2xl'>
          <Videoplayer url="./vid.mp4" />
        </div>
        <div className='grid grid-cols-1   gap-4 [font-size:25px] text-center  items-center p-3 w-full'>
          <div className='p-2 w-150 bg-lime-300 h-10 w-20 rounded-lg  '>
         <p>   Fastest 1:1 doubt support</p>
          </div>
              <div className='p-2 w-150 bg-lime-300 h-10 w-20 rounded-lg  '>
         <p>   Fastest 1:1 doubt support</p>
          </div>
              <div className='p-2 w-150 bg-lime-300 h-10 w-20 rounded-lg  '>
         <p>   Fastest 1:1 doubt support</p>
          </div>
      </div>
          

        </div>
      </div>
      </div>
    </div>
     
           
    </div>
  )
}

export default MiddleTransition