import React from 'react'
import { specialityData } from '../assets/assets.js'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id='speciality' className='mx-auto py-16 flex flex-col justify-center items-center text-gray-800 px-4'>
        <h3 className='text-2xl sm:text-3xl font-semibold'>Find by Speciality</h3>
        <p className='text-center my-4 text-sm sm:text-base max-w-2xl'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
        <div className='flex sm:justify-center gap-4 sm:gap-5 pt-5 w-full overflow-scroll'>
            {specialityData.map((item,index)=>(
               <Link onClick={()=>scrollTo(0,0)} to={`/doctors/${item.speciality}`} key={index} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'>
                 <img src={item.image} className='w-16 sm:w-24 mb-2' alt={item.speciality}/>
                 <p className='text-xs sm:text-sm'>{item.speciality}</p>
               </Link>
            ))}
        </div>
    </div>
  )
}

export default SpecialityMenu