import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addOnTheAirSeries } from "../utils/seriesSlice";
import { useEffect } from "react";

const useOnTheAirTVSeries = () => {
  const dispatch = useDispatch();

  const getTVSeries = async () => {
    try {
      const currentDate = new Date().toISOString().split("T")[0]; // Get current date in YYYY-MM-DD format

      // Set the date range for on-the-air TV series
      const minDate = currentDate; // Assuming you want series airing from today
      const maxDate = "2024-12-31"; // Set an upper limit for the date

      const discoverUrl = `https://api.themoviedb.org/3/discover/tv?api_key=YOUR_API_KEY&include_adult=false&language=en-US&page=1&sort_by=popularity.desc&air_date.lte=${maxDate}&air_date.gte=${minDate}&with_origin_country=KR`;

      const response = await fetch(discoverUrl, API_OPTIONS);

      const json = await response.json();
      dispatch(addOnTheAirSeries(json?.results));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTVSeries();
  }, []);
};

export default useOnTheAirTVSeries;
