import React from "react";
import { LOGIN_PAGE_BG_IMAGE } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          src={LOGIN_PAGE_BG_IMAGE}
          alt="bg-img-login "
          className="h-screen object-cover md:h-full"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;

// moive recommendation system using gpt

// when we click on search btn :- it should make a call to gpt apis and fetch the results
// for that to register for gpt apis :- avaialble on open ai
// platform.openai.com
