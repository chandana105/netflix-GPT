import React from "react";
import Header from "./Header";
import useTVSeries from "../hooks/useLatestTVSeries";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useOnTheAirTVSeries from "../hooks/useOnTheAirTVSeries";
import usePopularTVSeries from "../hooks/usePopularTVSeries";
import useTopRatedTVSeries from "../hooks/useTopRatedTVSeries";

const Browse = () => {
  useTVSeries();
  useOnTheAirTVSeries();
  usePopularTVSeries();
  useTopRatedTVSeries();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
       - Main Container
         -Video background
         -Video title
       - Secondary Container
         - Movie list * n
            - movie cards * n
      */}
    </div>
  );
};

export default Browse;

// calling my api in useeffect, so that i can call that api only once.
// why my api called is two times in console :- ,sometimes in react tools :- two same events called
// it hapens coz of reactstrict mode
// it ll just hapen in ur local , when developing, not in when u ll make build in production
// it runs twice :- coz react does extra renderign of ur comp's to check for some inconsistency btw ur calls, and this ll only happen in dev mode and ll throw eeror if there is any inconsitency in ur rendering cycle
// so its a good thing :- if it s happenigntwice

// movie slice:- and all data all movies to it

// so nowbrowse comp should only have my render logic

// now to get the dispaly movie , its trailer nad info, so lets take out the movie form the movies stored in store

// lets just think how to design the browse page first

// this whole browse page of netflix is dividied into two parts :-
// 1st part is the main video part  :- where we have one movie (most trneding movie/recommneded movie)
// 2nd part :- is the movie recommendation :- whcih sohws movies list

// spend time in planning UI (never make it directly)

// im boerwse page tihs hook is fetcihgn the now playign mivie and udpating the sote useTVSeries();
