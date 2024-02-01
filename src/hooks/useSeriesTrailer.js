import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/seriesSlice";
import { useEffect } from "react";

const useSeriesTrailer = (seriesId) => {
  const dispatch = useDispatch();

  // Fetch Trailer based on sereis id and updating the store with trailer video
  const getTVSeriesTrailer = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${seriesId}/videos?language=en-US`,
        API_OPTIONS
      );

      const json = await response.json();

      const filterData = json.results.filter(
        (video) => video.type === "Trailer"
      );

      // now to get trailer or if trailer not present :- then get teaser
      const trailer = filterData.length ? filterData[0] : json.results[0];
      dispatch(addTrailerVideo(trailer));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTVSeriesTrailer();
  }, [seriesId]); //changed as was not updatign if i was chainging series[2] 
};

export default useSeriesTrailer;
