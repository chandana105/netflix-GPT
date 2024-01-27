import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addSeries } from "../utils/seriesSlice";
import { useEffect } from "react";

const useTVSeries = () => {
  const dispatch = useDispatch();

  //   https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1&with_origin_country=KR&with_original_language=ko
  // Fetch data from TMDB API  and update store
  const getTVSeries = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1&with_origin_country=KR&with_original_language=ko",
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
