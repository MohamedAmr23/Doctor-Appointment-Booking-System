import React from 'react'
import { assets } from '../assets/assets.js'

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
        {/* left side */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[9.7vw] md:mb-[-14px]'>
            <p className='text-3xl text-center md:text-start md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>Book Appointment <br/> With Trusted Doctors</p>
            <div className='flex flex-col md:flex-row gap-3 text-white text-sm font-light items-center'>
                <img src={assets.group_profiles} alt='' className=' w-28'/>
                <p className='text-white w-full'>Simply browse through our extensive list of trusted<br className='hidden sm:block'/> doctors,<br/>
                schedule your appointment hassle-free.</p>
            </div>

            <div className='cursor-pointer flex items-center gap-2 bg-white px-8 py-3 rounded-full text-[#595959] text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
            <a href='#speciality'>Book appointment </a>
            <img src={assets.arrow_icon} className='w-3'/>
            </div>
        </div>
        {/* Right side */}
        <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img}/>
        </div>
    </div>
  )
}

export default Header