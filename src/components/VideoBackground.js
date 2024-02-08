import React from "react";
import useSeriesTrailer from "../hooks/useSeriesTrailer";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";

const VideoBackground = ({ seriesId, poster }) => {
  useSeriesTrailer(seriesId);

  const trailerVideo = useSelector((store) => store?.series?.trailerVideo);

  // const [videoEnded, setVideoEnded] = useState(false);

  // const handleVideoEnd = () => {
  //   console.log("here");
  //   setVideoEnded(true);
  // };

  return (
    <div className="w-full pt-[40%] md:pt-0">
      {trailerVideo ? (
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // onEnded={handleVideoEnd}
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

// for video bg:- there is trailer playing in bg of netflix :- so to fetch videos of series recieved
// need to make a call as in tmdb
// https://developer.themoviedb.org/reference/tv-series-videos

// for that we need series id
// now with series id :- ll make a fetch call

// i dont want my comp's to manage their own state :- if we are using redux:- lets use it pwoers
