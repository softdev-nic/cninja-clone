import React from 'react'
import Courses from './Courses'
import MiddleTransition from './MiddleTransition'
import FeaturesTable from './FeaturesTable'
import Placeent_carousol from './Placeent_carousol'
import Stories from './Stories'
const roles = ['software development', 'Data Analyst', 'GenAI']
const courses = [{name:"Professional Certification in Data Analytics with GenAI ", img: "https://files.codingninjas.in/image-645-1771335523.webp"},{name:"rofessional Certification in Data Analytics with GenAI", img: "https://files.codingninjas.in/image-639-1771335520.webp" },{name:"Professional Certification in Data Analytics with GenAI ", img: "https://files.codingninjas.in/image-645-1771335523.webp"},{name:"Professional Certification in Data Analytics with GenAI ", img: "https://files.codingninjas.in/image-645-1771335523.webp"},{name:"Professional Certification in Data Analytics with GenAI ", img: "https://files.codingninjas.in/image-645-1771335523.webp"},{name:"Professional Certification in Data Analytics with GenAI ", img: "https://files.codingninjas.in/image-645-1771335523.webp"},{name:"Professional Certification in Data Analytics with GenAI ", img: "https://files.codingninjas.in/image-645-1771335523.webp"},{name:"Professional Certification in Data Analytics with GenAI ", img: "https://files.codingninjas.in/image-645-1771335523.webp"},{name:"Professional Certification in Data Analytics with GenAI ", img: "https://files.codingninjas.in/image-645-1771335523.webp"},{name:"Professional Certification in Data Analytics with GenAI ", img: "https://files.codingninjas.in/image-645-1771335523.webp"},{name:"Professional Certification in Data Analytics with GenAI ", img: "https://files.codingninjas.in/image-645-1771335523.webp"},{name:"Professional Certification in Data Analytics with GenAI ", img: "https://files.codingninjas.in/image-645-1771335523.webp"},{name:"Professional Certification in Data Analytics with GenAI ", img: "https://files.codingninjas.in/image-645-1771335523.webp"},{name:"Professional Certification in Data Analytics with GenAI ", img: "https://files.codingninjas.in/image-645-1771335523.webp"},{name:"Professional Certification in Data Analytics with GenAI ", img: "https://files.codingninjas.in/image-645-1771335523.webp"}]
const types = [,'technical', 'non-technical']

const stories = [
  {
    img: "https://i.pravatar.cc/150?u=11",
    name: "Arjun Mehta",
    story: "The structured curriculum helped me transition from a non-tech background to a SDE role at Amazon within 6 months.",
    type: "technical"
  },
  {
    img: "https://i.pravatar.cc/150?u=12",
    name: "Sneha Kapoor",
    story: "The 1:1 doubt support was a lifesaver. I cleared my concepts and landed a Data Analyst position at Google.",
    type: "technical"
  },
  {
    img: "https://i.pravatar.cc/150?u=13",
    name: "Rohan Das",
    story: "I was struggling with DSA, but the way it was taught here made it so simple. Proud to be a Ninja at Microsoft!",
    type: "technical"
  },
  {
    img: "https://i.pravatar.cc/150?u=14",
    name: "Priya Sharma",
    story: "The placement cell is amazing. They guided me through mock interviews which helped me crack Adobe.",
    type: "technical"
  }
];

function Hero() {
  return (
 <div className='flex flex-col p-3 h-full w-full bg-black '>
    <div className="innercontent w-full h-full bg-black flex  ">
        <div className='grid grid-col-2 gap-5 position ml-50 mt-40'>
        <div className="headtext text-white font-bold text-sm left-5 top-5 font-mullish ">
        <p>Restricted opportunities?</p>
     </div>
     <div className='text-white text-4xl'>
         <h2>Get the tech career</h2>
         <h2>You deserve faster</h2>
     </div>
        
        </div>
        <div className="formdivision border-1 bg-black shadow-2xl rounded-lg overflow-hidden border-white h-150 w-100 justify-center items-center flex">
            <div className="form-content h-146 w-96 border-round border-1 bg-black shadow-2xl rounded-lg overflow-hidden border-white" >
                <div className="form bg-white flex h-full w-full bg-white">
                    <form action="" className='bg-white ml-5 mt-10 gap-3 '>
                        <h3 className='text-bold text-black text-1xl font-mullish '>Let's find the right course for you</h3>
                        <p>experience</p>
                        
                            <div className='grid grid-cols-1 gap-3'>
                                <label className="  gap-2"><input type="radio" name="experience" value="tech" /> Working Professional - Technical Roles</label>
                                <label className="  gap-2"><input type="radio" name="experience" value="non-tech" /> Working Professional - Non Technical Roles</label>
                                <label className=" gap-2"><input type="radio" name="experience" value="final-year" /> College Student - Final Year</label>
                                <label className="  gap-2"><input type="radio" name="experience" value="pre-final" /> College Student - 1st to Pre-final Year</label>
                                 
                            </div>
                            <p>select topic of interests</p>    
                            <select name="options" id="" className='border-1 p-2 w-full'>
                                {
                                    roles.map((role)=>(

                                        <option value={role} key={role} >{role}</option>
                                    ))
                                }
                            </select>
                            <p>Name</p>
                            <div>
                                <input type="text" className='border-1 p-2 w-full'/>
                            </div>
                            <p>phone number</p>
                               <div>
                                <input type="text" className='border-1 p-2 w-full'/>
                            </div>
                            <p>Email</p>
                               <div>
                                <input type="email" className='border-1 p-2 w-full'/>
                            </div>
                               <div>
                                <button type="button" className='border-1 p-2 w-full mt-5  bg-orange-500 text-white'>Find course </button>
                            </div>
                            
                            
                    </form>
                </div>
            </div>
        </div>
 
    </div>
    <Courses courses={roles} subcourses={courses}/>
    <MiddleTransition/>
    <FeaturesTable/>
    <Placeent_carousol/>
    <div className='flex flex-row'>

    <Stories stories={stories} types={types}/>
    </div>
 </div>
  )
}

export default Hero