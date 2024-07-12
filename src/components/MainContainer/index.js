import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const latestSeries = useSelector((store) => store?.series?.latestSeries);

  if (!latestSeries) return;

  const mainSeries = latestSeries[0];

  const { name, overview, id, poster_path } = mainSeries;

  return (
    <div className="bg-black ">
      <VideoTitle name={name} overview={overview} />
      <VideoBackground seriesId={id} poster={poster_path} />
    </div>
  );
};

export default MainContainer;
