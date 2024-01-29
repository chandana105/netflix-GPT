import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ name, overview }) => {
  return (
    <div className="space-y-5 pl-20 absolute pt-[20%] bg-gradient-to-r from-black text-white w-screen aspect-video">
      <h1 className="font-bold text-5xl italic">{name}</h1>
      <p className="text-base font-medium w-1/4">{overview}</p>
      <div className="flex space-x-3">
        <button className=" rounded-md flex items-center bg-white hover:bg-opacity-80  py-2 px-7 gap-2 text-lg tracking-wide text-black">
          <FaPlay size={20} /> Play
        </button>
        <button className=" rounded-md flex items-center bg-gray-500 py-2 px-7 gap-2 text-lg tracking-wide hover:bg-gray-600 font-semibold">
          <IoMdInformationCircleOutline size={25} /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

// FIRST PUT THE BASIC HTML , THEN SEE WHERE NEEDS TO PUT WHT CSS
// JUST MAKE SOME CSS FOR A COMP, THEN LATER IMPROVE IT
