import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import { useSelector } from "react-redux";
import { SIGN_OUT_BUTTON_TEXT } from "../../utils/constants";
import useHeader from "../../hooks/useHeader";

const Dropdown = ({ onMouseLeaveContainer }) => {
  const user = useSelector((state) => state.user);

  const { handleSignOut } = useHeader();

  return (
    <div
      className=" flex flex-col justify-center items-end z-10 absolute top-16  right-[2.2rem] "
      onMouseLeave={onMouseLeaveContainer}
    >
      <TiArrowSortedUp size={24} className="self-end" />
      <ul className="text-white  w-56  bg-black bg-opacity-90 border-[1px] border-gray-500  rounded-md py-2 ">
        <li className="py-2 px-4 text-base cursor-pointer ">
          Hi, {user?.displayName}
        </li>
        <div className="w-full h-[0.01rem] bg-gray-500"></div>
        <li
          className="py-2 text-center text-base cursor-pointer"
          onClick={handleSignOut}
        >
          {SIGN_OUT_BUTTON_TEXT}
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
