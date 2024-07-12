import React, { useRef } from "react";
import { lang } from "../../utils/languageConstants";
import { useSelector } from "react-redux";
import useGptSearch from "../../hooks/useGptSearch";

const GptSearchBar = () => {
  const defaultLanguage = useSelector(
    (store) => store?.config?.defaultLanguage
  );
  const searchTextRef = useRef(null);

  const { handleGptSearchClick, errorMessage } = useGptSearch(searchTextRef);

  return (
    <div className="pt-[42%] md:pt-28 flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black    grid grid-cols-12 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchTextRef}
          placeholder={lang[defaultLanguage].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9 text-xs md:text-base rounded"
        />
        <button
          className="m-4 ml-0 py-2 col-span-3 bg-red-700 text-white rounded
        text-xs md:text-base
        "
          onClick={handleGptSearchClick}
        >
          {lang[defaultLanguage].search}
        </button>
      </form>
      {errorMessage && (
        <p className="text-red-500 mt-2 bg-black m-4 p-4 font-bold">{errorMessage}</p>
      )}
    </div>
  );
};

export default GptSearchBar;
