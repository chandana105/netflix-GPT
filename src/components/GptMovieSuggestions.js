import React from "react";
import { useSelector } from "react-redux";
import SeriesList from "./SeriesList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="bg-black  text-white m-4 p-4 bg-opacity-90">
      {movieNames.map((movieName, index) => (
        <SeriesList title={movieName} series={movieResults[index]} key="" />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;

// moviename
// search results of movie name (to show it like this )

// for eaxh moviename we  ll redner movieesult[index] , :- 1st movie index = 0 etc and acc moiveresuts wil be dispalyewd
