import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addSeries } from "../utils/seriesSlice";
import { useEffect } from "react";

const useTVSeries = () => {
  const dispatch = useDispatch();

  const getTVSeries = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/tv?first_air_date_year=2024&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_origin_country=KR",
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
