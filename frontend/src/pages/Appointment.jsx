import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";
import { assets } from "../assets/assets.js";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currentSymbol } = useContext(AppContext);
  const daysOfWeek = ['SUN' , 'MON' ,'TUE' , 'WED' , 'THU' , 'FRI' , 'SAT']
  const [doctorInfo, setDoctorInfo] = useState(null);
  const [docSlots , setDocSlots] = useState([]) 
  const [slotIndex , setSlotIndex] = useState(0) 
  const [slotTime , setSlotTime] = useState('') 
  const fetchDoctorInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDoctorInfo(docInfo);
  };
  // const getAvailableSlots = async ()=>{
  //   let today = new Date()
  //   for (let i =0 ; i<7;i++){
  //     // get data with index
  //     let currentDate = new Date(today)
  //     currentDate.setDate(today.getDate()+i)

  //     // setting end time to data ith index
  //     let endTime = new Date()
  //     endTime.setDate(today.getDate()+i)
  //     endTime.setHours(21,0,0,0)

  //     // setting hours
  //     if (today.getDate() === currentDate.getDate()){
  //       currentDate.setHours(currentDate.getHours() > 10 ?currentDate.getHours() +1 : 10)
  //       currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 10)
  //     }else{
  //       currentDate.setHours(10)
  //       currentDate.setMinutes(0)
  //     }
  //     let timeSlots = []
  //     while (currentDate < endTime){
  //       let formattedTime = currentDate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})

  //       timeSlots.push({
  //         datetime:new Date(currentDate),
  //         time:formattedTime
  //       })
  //       currentDate.setMinutes(currentDate.getMinutes() + 30)
  //     }
  //     setDocSlots(prev=>([...prev,timeSlots]))
  //   }
  // }
  const getAvailableSlots = async () => {
  let today = new Date();
  let slots = [];

  for (let i = 0; i < 7; i++) {
    // start date
    let currentDate = new Date(today);
    currentDate.setDate(today.getDate() + i);

    // end time (9 PM)
    let endTime = new Date(currentDate);
    endTime.setHours(21, 0, 0, 0);

    // start time logic
    if (i === 0) {
      // today → start from next half hour
      let now = new Date();
      currentDate.setHours(now.getHours() >= 10 ? now.getHours() + 1 : 10);
      currentDate.setMinutes(now.getMinutes() > 30 ? 30 : 0);
    } else {
      // other days → start at 10:00 AM
      currentDate.setHours(10, 0, 0, 0);
    }

    // build slots for the day
    let timeSlots = [];
    while (currentDate < endTime) {
      let formattedTime = currentDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      timeSlots.push({
        datetime: new Date(currentDate),
        time: formattedTime,
      });

      currentDate.setMinutes(currentDate.getMinutes() + 30);
    }

    slots.push(timeSlots);
  }

  setDocSlots(slots);
};

  useEffect(() => {
    fetchDoctorInfo();
  }, [docId, doctors]);

  useEffect(()=>{
    getAvailableSlots()
  },[doctorInfo])
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
            {doctorInfo?.name}
            {doctorInfo?.about}
          </p>
          <p className="text-gray-600 font-medium mt-4">
            Appointment fee:
            <span className="text-gray-800">
              {" "}
              {currentSymbol}
              {doctorInfo?.fees}
            </span>
          </p>
        </div>
      </div>
      {/* Booking slots */}
      <div className="sm:ml-72 sm:pl-4 mt-8 font-medium text-[#565656]">
          <p>Booking slots</p>
          <div  className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {
              docSlots.length && docSlots.map((item , index)=>(
                <div onClick={()=>setSlotIndex(index)} key={index} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white':'border border-gray-200'}`}>
                    <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                    <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))
            }
          </div>
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {docSlots.length && docSlots[slotIndex].map((item , index)=>(
                <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time ===slotTime ? 'bg-primary text-white':'text-gray-400 border border-gray-300'}`} key={index}>
                  {item.time.toLowerCase()}
                </p>
            ))}
          </div>
          <button className="bg-primary text-white text-sm font-light px-20 py-3 rounded-full my-6">
            Book an appointment
          </button>
      </div>
    </div>
  );
};

export default Appointment;
