import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addLatestSeries } from "../utils/seriesSlice";
import { useEffect } from "react";

const useLatestTVSeries = () => {
  const dispatch = useDispatch();

  const latestSeries = useSelector((store) => store.series.latestSeries);

  const getTVSeries = async () => {
    try {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();

      const response = await fetch(
        `https://api.themoviedb.org/3/discover/tv?first_air_date_year=${currentYear}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_origin_country=KR`,
        API_OPTIONS
      );

      const json = await response.json();
      dispatch(addLatestSeries(json?.results));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    !latestSeries && getTVSeries();
  }, []);
};

export default useLatestTVSeries;

// dispatch(addLatestSeries(json?.results)); if my store already has this , why to fetch it again
// this concept is known as memoization
