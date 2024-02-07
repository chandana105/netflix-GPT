import React, { useRef } from "react";
import { lang } from "../utils/languageConstants";
import { useSelector } from "react-redux";
import useGptSearch from "../hooks/useGptSearch";

const GptSearchBar = () => {
  const defaultLanguage = useSelector(
    (store) => store?.config?.defaultLanguage
  );
  const searchTextRef = useRef(null);

  // TODO: SHOW SHIMMER UI FOR WHOLE APP

  const handleGptSearchClick = useGptSearch(searchTextRef);

  return (
    <div className="pt-28">
      <form
        className="bg-black p-5 w-1/2 mx-auto grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchTextRef}
          placeholder={lang[defaultLanguage].gptSearchPlaceholder}
          className="col-span-9  p-4 m-4 text-base rounded-lg "
        />
        <button
          className="bg-red-700  rounded-lg p-4 m-4 text-lg text-white font-semibold col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[defaultLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

// rather than only passing message to the content, need to pass the content like with which gpt understands and give us exact 5 names of movies
