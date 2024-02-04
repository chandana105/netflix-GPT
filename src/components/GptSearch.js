import React from "react";
import { LOGIN_PAGE_BG_IMAGE } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearch = () => {
  return (
    <div className="">
      <div className="absolute -z-10">
        <img src={LOGIN_PAGE_BG_IMAGE} alt="bg-img-login " />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions   />
    </div>
  );
};

export default GptSearch;

// moive recommendation system using gpt
