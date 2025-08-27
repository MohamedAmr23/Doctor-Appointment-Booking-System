import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const [docFilter, setDocFilter] = useState([]);
  const { doctors } = useContext(AppContext);
  const applyFilter = () => {
    if (speciality) {
      setDocFilter(doctors.filter((doc) => doc.speciality == speciality));
    } else {
      setDocFilter(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);
  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-gray-600 text-sm">
          <p
            className={`border border-gray-300 rounded-md transition-all  py-2 pl-3 pr-12 cursor-pointer ${
              speciality === "General physician"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
            onClick={() =>
              speciality === "General physician"
                ? navigate("/doctors")
                : navigate("/doctors/General physician")
            }
          >
            General physician
          </p>
          <p
            className={`border border-gray-300 rounded-md transition-all  py-2 pl-3 pr-12 cursor-pointer ${
              speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""
            }`}
            onClick={() => navigate("/doctors/Gynecologist")}
          >
            Gynecologist
          </p>
          <p
            className={`border border-gray-300 rounded-md transition-all  py-2 pl-3 pr-12 cursor-pointer ${
              speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""
            }`}
            onClick={() => navigate("/doctors/Dermatologist")}
          >
            Dermatologist
          </p>
          <p
            className={`border border-gray-300 rounded-md transition-all  py-2 pl-3 pr-12 cursor-pointer ${
              speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""
            }`}
            onClick={() => navigate("/doctors/Pediatricians")}
          >
            Pediatricians
          </p>
          <p
            className={`border border-gray-300 rounded-md transition-all  py-2 pl-3 pr-12 cursor-pointer ${
              speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""
            }`}
            onClick={() => navigate("/doctors/Neurologist")}
          >
            Neurologist
          </p>
          <p
            className={`border border-gray-300 rounded-md transition-all  py-2 pl-3 pr-12 cursor-pointer ${
              speciality === "Gastroenterologist"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
            onClick={() => navigate("/doctors/Gastroenterologist")}
          >
            Gastroenterologist
          </p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4  gap-y-6 ">
          {docFilter.map((item) => (
            <div
              onClick={() => navigate(`/appointments/${item._id}`)}
              key={item._id}
              className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              <img src={item.image} alt={item._id} className="bg-[#EAEFFF]" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 rounded-full bg-green-500"></p>{" "}
                  <p>Availability</p>
                </div>
                <h2 className="text-[#262626] text-lg font-medium">
                  {item.name}
                </h2>
                <p className="text-[#5C5C5C] text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
