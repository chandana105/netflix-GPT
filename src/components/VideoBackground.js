import React from "react";
import useSeriesTrailer from "../hooks/useSeriesTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ seriesId }) => {
  const trailerVideo = useSelector((store) => store?.series?.trailerVideo);

  useSeriesTrailer(seriesId);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

// for video bg:- there is trailer playing in bg of netflix :- so to fetch videos of series recieved
// need to make a call as in tmdb
// https://developer.themoviedb.org/reference/tv-series-videos

// for that we need series id
// now with series id :- ll make a fetch call

// i dont want my comp's to manage their own state :- if we are using redux:- lets use it pwoers
