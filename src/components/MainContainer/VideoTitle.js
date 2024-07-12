import React from "react";

const VideoTitle = ({ name, overview }) => {
  return (
    <div className="h-full md:h-auto space-y-1 md:space-y-5 pl-10 absolute pt-[65%] md:pt-[25%] bg-gradient-to-r from-black text-white w-screen aspect-video">
      <h1 className="text-lg font-bold md:text-5xl italic">{name}</h1>
      <p className="hidden md:block text-base font-medium w-1/4">{overview}</p>
    </div>
  );
};

export default VideoTitle;
