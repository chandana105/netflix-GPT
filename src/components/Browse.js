import React from "react";
import Header from "./Header";
import useTVSeries from "../hooks/useLatestTVSeries";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useOnTheAirTVSeries from "../hooks/useOnTheAirTVSeries";
import usePopularTVSeries from "../hooks/usePopularTVSeries";
import useTopRatedTVSeries from "../hooks/useTopRatedTVSeries";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);

  useTVSeries();
  useOnTheAirTVSeries();
  usePopularTVSeries();
  useTopRatedTVSeries();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;

{
  /* 
       - Main Container
         -Video background
         -Video title
       - Secondary Container
         - Movie list * n
            - movie cards * n
      */
}
