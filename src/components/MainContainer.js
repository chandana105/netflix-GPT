import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const latestSeries = useSelector((store) => store?.series?.latestSeries);

  // if (series === null) return; //when no series are there then return :- early return
  if (!latestSeries) return;

  const mainSeries = latestSeries[0]; //well, for now its series[1] by default its series[0]

  const { name, overview, id, poster_path } = mainSeries;

  return (
    <div className="bg-black ">
      <VideoTitle name={name} overview={overview} />
      <VideoBackground seriesId={id} poster={poster_path} />
    </div>
  );
};

export default MainContainer;

// here we ll have video bg and video title ll overlap the video bg

// Main container needs movie description
// if no miives then i ll return , else i ll show the first mivie there as main mvie
