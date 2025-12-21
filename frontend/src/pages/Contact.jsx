import React from 'react'
import { assets } from '../assets/assets'
const Contact = () => {
  return (
    <div>
      <div className='text-center pt-12 text-2xl text-[#707070]'>
         <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center gap-10 my-12 text-sm mb-28'>
          <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="Contact" />
         <div className='flex flex-col gap-6 justify-center items-start '>
            <h5 className='font-semibold text-lg text-gray-600'>OUR OFFICE</h5>
            <p className='text-gray-500'>ElTelephone Street <br/>Mit Ghamr, Mansoura, EGY</p>
            <p className='text-gray-500'>Tel: (+020) 15520-22094<br/>Email: amrm96754@gmail.com</p>
            <h5 className='font-semibold text-lg text-gray-600'>CAREERS AT PRESCRIPTO</h5>
            <p className='text-gray-500'>Learn more about our teams and job openings.</p>
            <button className='px-8 py-4 border border-black text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
         </div>
      </div>
    </div>
  )
}

export default Contact