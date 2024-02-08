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
    <div className="pt-[42%] md:pt-28 flex justify-center">
      {/* p-5 md:p-0 */}
      <form
        // p-2 md:p-5
        className="w-full md:w-1/2 bg-black    grid grid-cols-12 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchTextRef}
          placeholder={lang[defaultLanguage].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9 text-xs md:text-base rounded"
          // className="col-span-9 p-4 m-4 md:p-4 md:m-4 text-sm md:text-base rounded-lg md:rounded-md  "
        />
        <button
          className="m-4 ml-0 py-2 col-span-3 bg-red-700 text-white rounded
        text-xs md:text-base
        "
          // className="bg-red-700  rounded-lg m-4 w-full md:w-auto md:p-4 md:m-4 text-sm md:text-lg text-white font-semibold col-span-3  "
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
