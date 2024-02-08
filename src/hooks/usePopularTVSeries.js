import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularSeries } from "../utils/seriesSlice";
import { useEffect } from "react";

const usePopularTVSeries = () => {
  const dispatch = useDispatch();

  const popularSeries = useSelector((store) => store.series.popularSeries);

  const getTVSeries = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&with_origin_country=KR",
        API_OPTIONS
      );

      const json = await response.json();
      dispatch(addPopularSeries(json?.results));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    !popularSeries && getTVSeries();
  }, []);
};

export default usePopularTVSeries;
