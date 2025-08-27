import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";
import { assets } from "../assets/assets.js";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [doctorInfo, setDoctorInfo] = useState(null);

  const fetchDoctorInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDoctorInfo(docInfo);
    console.log(docInfo);
  };
  useEffect(() => {
    fetchDoctorInfo();
  }, [docId, doctors]);
  return (
    <div>
      {/* Doctors Details */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img
            className="bg-primary w-full sm:max-w-72 rounded-lg"
            src={doctorInfo?.image}
          />
        </div>
        <div className="flex-1 border border-[#ADADAD] rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          <div className="flex gap-2 items-center">
            <p className="flex items-center gap-2 text-3xl font-medium text-gray-700">
              {doctorInfo?.name}
            </p>
            <img className="w-5" src={assets.verified_icon} alt="" />
          </div>
          <div className="flex items-center gap-2 mt-1 text-gray-600">
            <p>
              {doctorInfo?.degree} - {doctorInfo?.speciality}
            </p>
            <button className="py-0.5 px-2 border text-xs rounded-full">
              {doctorInfo?.experience}
            </button>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium text-[#262626] mt-3">
            <p>About</p>
            <img src={assets.info_icon} alt="w-3" />
          </div>
          <p className="text-sm text-gray-600 max-w-[700px] mt-1">
            {doctorInfo?.about}
          </p>
          <p className="text-gray-600 font-medium mt-4">
            Appointment fee:
            <span className="text-gray-800"> ${doctorInfo?.fees}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
