import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Dropdown = ({ onMouseLeaveContainer }) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        // TODO: SHOW A TOAST
        console.log(error);
        navigate("/error"); //TODO: TO BUILD COOL ERROR PAGE
      });
  };
  return (
    <div
      className=" flex flex-col justify-center items-end z-10 absolute top-16  right-[4.5rem] "
      onMouseLeave={onMouseLeaveContainer}
    >
      <TiArrowSortedUp size={24} className="self-end" />
      <ul className="text-white  w-56  bg-black bg-opacity-90 border-[1px] border-gray-500  rounded-md py-2 ">
        <li className="py-2 px-4 text-base cursor-pointer ">
          Hi, {user?.displayName}
        </li>
        <li className="py-2 px-4 text-base cursor-pointer">Manage Profiles</li>

        <div className="w-full h-[0.01rem] bg-gray-500"></div>
        <li
          className="py-2 text-center text-base cursor-pointer"
          onClick={handleSignOut}
        >
          Sign out of Netflix
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
