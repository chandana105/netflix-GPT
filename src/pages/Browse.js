import React from "react";
import Header from "../components/common/Header";
import useLatestTVSeries from "../hooks/useLatestTVSeries";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import useOnTheAirTVSeries from "../hooks/useOnTheAirTVSeries";
import usePopularTVSeries from "../hooks/usePopularTVSeries";
import useTopRatedTVSeries from "../hooks/useTopRatedTVSeries";
import GptSearch from "../components/GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);

  useLatestTVSeries();
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
