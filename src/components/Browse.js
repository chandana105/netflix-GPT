import React from "react";
import Header from "./Header";
import useTVSeries from "../utils/useTVSeries";

const Browse = () => {
  useTVSeries();

  return (
    <div>
      <Header />
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
