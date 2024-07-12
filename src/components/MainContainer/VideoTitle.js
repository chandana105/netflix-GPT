import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MORE_INFO, PLAY_BUTTON_TEXT } from "../../utils/constants";

const VideoTitle = ({ name, overview }) => {
  return (
    <div className="h-full md:h-auto space-y-1 md:space-y-5 pl-10 absolute pt-[65%] md:pt-[25%] bg-gradient-to-r from-black text-white w-screen aspect-video">
      <h1 className="text-lg font-bold md:text-5xl italic">{name}</h1>
      <p className="hidden md:block text-base font-medium w-1/4">{overview}</p>
      {/* <div className="flex space-x-3">
        <button className=" rounded-md flex items-center bg-white hover:bg-opacity-80 px-2 py-1 md:py-2 md:px-7 gap-2 text-sm md:text-lg tracking-wide text-black">
          <FaPlay /> {PLAY_BUTTON_TEXT}
        </button>
        <button className="hidden md:flex rounded-md  items-center bg-gray-500 py-2 px-7 gap-2 text-lg tracking-wide hover:bg-gray-600 font-semibold">
          <IoMdInformationCircleOutline size={25} /> {MORE_INFO}
        </button>
      </div> */}
    </div>
  );
};

export default VideoTitle;
