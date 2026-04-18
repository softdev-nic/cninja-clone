import React from 'react'

function Videoplayer(props) {
  return (
    <div className='flex justify-center item center border-1 rounded-lg h-100 w-100'>
       
        <video src={props.url} controls className='border-1 rounded-lg box-shadow-[1px grey]'></video>
    </div>
  )
}

export default Videoplayer