import React, { useContext } from "react";
// import { doctors } from "../assets/assets.js";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";

const TopDoctors = () => {
  const navigate = useNavigate()
  const {doctors} = useContext(AppContext)
  return (
    <div
      id=""
      className="mx-auto py-16 flex flex-col justify-center items-center text-gray-800 md:mx-10"
    >
      <h3 className="text-3xl font-semibold">Top Doctors to Book</h3>
      <p className="text-center my-4  text-sm">
        Simply browse through our extensive list of trusted 
        <br /> doctors.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0,10).map((item)=>(
          <div onClick={()=>navigate(`/appointments/${item._id}`)} key={item._id} className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
            <img src={item.image} alt={item._id} className="bg-[#EAEFFF]"/>
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 rounded-full bg-green-500"></p> <p>Availability</p>
              </div>
              <h2 className="text-[#262626] text-lg font-medium">{item.name}</h2>
              <p className="text-[#5C5C5C] text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <Link to={'/doctors'}><button onClick={()=>scrollTo(0,0)} className="bg-[#EAEFFF] text-gray-600 px-12 py-3 rounded-full mt-10">more</button></Link>
    </div>
  );
};

export default TopDoctors;
