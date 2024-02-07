import React from "react";
import Header from "./Header";
import useLatestTVSeries from "../hooks/useLatestTVSeries";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useOnTheAirTVSeries from "../hooks/useOnTheAirTVSeries";
import usePopularTVSeries from "../hooks/usePopularTVSeries";
import useTopRatedTVSeries from "../hooks/useTopRatedTVSeries";
import GptSearch from "./GptSearch";
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



// Understanding memoization of data in our apps 
// when going from gpt page, to home page :- it keeps on making api calss, rather all the data is still present in redux store 


// why it is making an api call ?
// coz see above, jb showgptserch tb gpt vala pg else oher contaienrs 
// toh when we go from back and forth :- the other page is nit in the dom 
// so evertytime my page laods again when we reach ti there :
// it again laods th epg, see the code :- go to the hooks make the cal and store is updated ;ls all this repeats 
// data was already there i n redxu tools :- if data was already there : - why to fetch it agai nand again 
// we ll use the concept of memoizatio nto stop this or minimize the api calls :- its verty easy