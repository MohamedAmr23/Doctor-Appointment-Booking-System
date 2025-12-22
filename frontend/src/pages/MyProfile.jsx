import  { useState } from "react";
import { assets } from "../assets/assets";
const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    image: assets.profile_pic,
    emailId: "amrm@gmail.com",
    phoneNumber: "123-456-7890",
    address: "123 Main St, Anytown, USA",
    gender: "Male",
    dob: "1990-01-01",
  });

  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm pt-5">
      <img className="w-36 rounded" src={userData.image} alt="upload icon" />
      {isEdit ? (
        <input
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className=" text-3xl font-medium text-neutral-800 mt-4">
          {userData.name}
        </p>
      )}
      <hr className="bg-[#ADADAD] h-[1px] border-none" />
      <div>
        <p className="text-gray-600 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_1fr] gap-y-2.5 mt-3 text-[#363636]">
          <p className="font-medium">Email id:</p>
          <p className="text-blue-500">{userData.emailId}</p>
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              type="phone"
              value={userData.phoneNumber}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  phoneNumber: e.target.value,
                }))
              }
            />
          ) : (
            <p className="text-blue-500">{userData.phoneNumber}</p>
          )}
          <p className="font-medium">Address:</p>
          {isEdit ? (
            <input
              className="bg-gray-50"
              type="text"
              value={userData.address}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, address: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-500">{userData.address}</p>
          )}
        </div>
      </div>
      <div>
        <p className="text-gray-600 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-[#363636]">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              className="max-w-20 bg-gray-50"
              value={userData.gender}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
            >
              <option value="Not Selected" className="text-gray-500">
                Not Selected
              </option>
              <option value="Male" className="text-gray-500">
                Male
              </option>
              <option value="Female" className="text-gray-500">
                Female
              </option>
            </select>
          ) : (
            <p className="text-gray-500">{userData.gender}</p>
          )}
          <p className="font-medium">Birthday:</p>
          {isEdit ? (
            <input
              className="max-w-28 bg-gray-50"
              type="date"
              value={userData.dob}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
            />
          ) : (
            <p className="text-gray-500">{userData.dob}</p>
          )}
        </div>
      </div>
      <div className="mt-10">
        {isEdit ? (
          <button
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
            onClick={() => setIsEdit(false)}
          >
            Save Information
          </button>
        ) : (
          <button
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
            onClick={() => setIsEdit(true)}
          >
            Edit{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
