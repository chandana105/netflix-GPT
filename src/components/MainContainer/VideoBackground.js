import React from "react";
import useSeriesTrailer from "../../hooks/useSeriesTrailer";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../../utils/constants";

const VideoBackground = ({ seriesId, poster }) => {
  useSeriesTrailer(seriesId);

  const trailerVideo = useSelector((store) => store?.series?.trailerVideo);

  return (
    <div className="w-full pt-[40%] md:pt-0">
      {trailerVideo ? (
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      ) : (
        <img
          src={`${IMG_CDN_URL}${poster}`}
          alt="poster"
          className="w-screen aspect-video "
        />
      )}
    </div>
  );
};

export default VideoBackground;
