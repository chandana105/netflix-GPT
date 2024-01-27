import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const series = useSelector((store) => store?.series?.series);

  // if (series === null) return; //when no series are there then return :- early return
  if (!series) return;

  const mainSeries = series[1];

  console.log(mainSeries);

  const { name, overview } = mainSeries;

  return (
    <div className="pt-56 pl-20">
      <VideoTitle name={name} overview={overview} />
      <VideoBackground />
      {/* trailer */}
    </div>
  );
};

export default MainContainer;

// here we ll have video bg and video title ll overlap the video bg

// Main container needs movie description
// if no miives then i ll return , else i ll show the first mivie there as main mvie
