import { useDispatch } from "react-redux";
import { API_OPTIONS } from "./constants";
import { addSeries } from "./seriesSlice";
import { useEffect } from "react";

const useTVSeries = () => {
  const dispatch = useDispatch();
  // Fetch data from TMDB API  and update store
  const getTVSeries = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_origin_country=KR&with_original_language=ko",
        API_OPTIONS
      );
      const json = await response.json();
      console.log(json);
      dispatch(addSeries(json?.results));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTVSeries();
  }, []);
};

export default useTVSeries;
