import React from "react";
import { useSelector } from "react-redux";
import SeriesList from "../SecondaryContainer/SeriesList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="bg-black  text-white m-4  bg-opacity-90   ">
      {movieNames.map((movieName, index) => (
        <SeriesList title={movieName} series={movieResults[index]} key="" />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
