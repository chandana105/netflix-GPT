import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedSeries } from "../utils/seriesSlice";
import { useEffect } from "react";

const useTopRatedTVSeries = () => {
  const dispatch = useDispatch();

  const topRatedSeries = useSelector((store) => store.series.topRatedSeries);

  const getTVSeries = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=200&with_origin_country=KR",
        API_OPTIONS
      );

      const json = await response.json();
      dispatch(addTopRatedSeries(json?.results));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    !topRatedSeries && getTVSeries();
  }, []);
};

export default useTopRatedTVSeries;
