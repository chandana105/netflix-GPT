import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/seriesSlice";

const VideoBackground = ({ seriesId }) => {
  // now fetchign trailervideo from stroe
  const trailerVideo = useSelector((store) => store?.series?.trailerVideo);
  const dispatch = useDispatch();

  // Fetch Trailer based on sereis id and updating the store with trailer video
  const getTVSeriesTrailer = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${seriesId}/videos?language=en-US`,
        API_OPTIONS
      );

      const json = await response.json();
      console.log(json.results);

      const filterData = json.results.filter(
        (video) => video.type === "Trailer"
      );

      // now to get trailer or if trailer not present :- then get teaser
      const trailer = filterData.length ? filterData[0] : json.results[0];
      console.log(trailer);
      // console.log(trailer?.key); //to save the info of first series/movie playing into the store
      dispatch(addTrailerVideo(trailer)); //after addign to stroe:- check redux dev tools
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTVSeriesTrailer();
  }, []);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerVideo.key}`}
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
