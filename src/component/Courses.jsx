        import React, { useState } from 'react'
import deopdown from './chevron-down.png'

function Courses(props) {
    const [filteredCourses, setFilteredCourses] = useState(props.subcourses);
    const [activeFilter, setActiveFilter] = useState('all');

    const courses = props.courses;

    const filters = (query) => {
        setActiveFilter(query);
        if (query === 'all') {
            setFilteredCourses(props.subcourses);
        } else {
            const filtered = props.subcourses.filter((course) =>
                course.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredCourses(filtered);
        }
    };
   
  return (
      <div className='flex-col h-auto py-10 w-full text-[rgb(227,227,227)] bg-white text-center justify-center text-4xl '>
        <h1 className='font-bold text-black'>Our Courses</h1>
        <div className='flex flex-wrap gap-4 mt-6 justify-center'>
            <button 
                className={`border-2 px-6 py-2 rounded-full text-lg cursor-pointer ${activeFilter === 'all' ? 'bg-purple-500 text-white' : 'text-black border-gray-300'}`}
                onClick={() => filters('all')}
            >
                All
            </button>
            {courses.map((course) => (
                <button 
                    className={`border-2 px-6 py-2 rounded-full text-lg cursor-pointer hover:bg-purple-500 hover:text-white ${activeFilter === course ? 'bg-purple-500 text-white' : 'text-black border-gray-300'}`}
                    key={course} 
                    onClick={() => filters(course)}
                >
                    {course}
                </button>
            ))}
        </div>
        <div className='flex p-4 gap-6 mt-10 w-full bg-white overflow-x-auto no-scrollbar'>
            {filteredCourses.map((course, index) => (
                <div className='gap-2 border border-gray-200 h-auto min-w-[300px] justify-center items-center flex flex-col rounded-lg text-black cursor-pointer list-none text-sm font-semibold text-center shadow-sm' key={index}>
                    <img src={course.img} alt={course.name} className='w-full h-48 object-cover rounded-t-lg' />
                    <li className='p-4'>{course.name}</li>

                </div>
            ))}
        </div>
        <p className='left-0 text-black'>For students</p>
        <div className='flex flex-wrap gap-4 mt-6 justify-center'>
            <button 
                className={`border-2 px-6 py-2 rounded-full text-lg cursor-pointer ${activeFilter === 'all' ? 'bg-purple-500 text-white' : 'text-black border-gray-300'}`}
                onClick={() => filters('all')}
            >
                All
            </button>
            {courses.map((course) => (
                <button 
                    className={`border-2 px-6 py-2 rounded-full text-lg cursor-pointer hover:bg-purple-500 hover:text-white ${activeFilter === course ? 'bg-purple-500 text-white' : 'text-black border-gray-300'}`}
                    key={course} 
                    onClick={() => filters(course)}
                >
                    {course}
                </button>
            ))}
        </div>
            <div className='flex p-4 gap-6 mt-10 w-full bg-white overflow-x-auto no-scrollbar'>
            {filteredCourses.map((course, index) => (
                <div className='gap-2 border border-gray-200 h-auto min-w-[300px] justify-center items-center flex flex-col rounded-lg text-black cursor-pointer list-none text-sm font-semibold text-center shadow-sm' key={index}>
                    <img src={course.img} alt={course.name} className='w-full h-48 object-cover rounded-t-lg' />
                    <li className='p-4'>{course.name}</li>
                    
                </div>
            ))}
        </div>

      </div>
  );
}

export default Courses;