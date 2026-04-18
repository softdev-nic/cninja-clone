import React, { use, useState } from 'react'

function Stories(props) {
    const [filters,setFilters] = useState('')
    const filterhandler = (query)=>{
        setFilters(query)
    }   
  return (
     <div className='bg-black flex  text-white justify-center item-center'>
        <h1 className="text-md text-white mt-5 ml-5 ">Stories from people like you</h1>
        <div className=" gap-2 flex item-center  mt-10 justify-center list-none ">
            {
                props.types.map((types)=>(
                     <li className="border-1 rounded-lg  h-10px" key={types}>
                        {types}
                     </li>
                ))
            }
        </div>
        {/* {props.stories.map((stories)=>(
            <div>
                <img src={stories.img} alt="" />
                <p>{stories.name}</p>
                <p>{stories.story}</p>

            </div>
        ))} */}
     </div>
  )
}

export default Stories