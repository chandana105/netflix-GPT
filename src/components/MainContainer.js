import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  return (
    <div>
      <h1>Main Container</h1>
      <VideoTitle />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;

// here we ll have video bg and video title ll overlap the video bg
