import React from "react";
import { lang } from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const defaultLanguage = useSelector(
    (store) => store?.config?.defaultLanguage
  );
  return (
    <div className="pt-28">
      <form
        className="bg-black p-10 w-1/2 mx-auto grid grid-cols-12"
        // onSubmit={(e) => handleFormSubmit(e)}
      >
        <input
          type="text"
          placeholder={lang[defaultLanguage].gptSearchPlaceholder}
          className="col-span-9 px-3 text-base "
        />
        <button className="bg-red-700 px-3 py-4 text-lg text-white font-semibold col-span-3">
          {lang[defaultLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
