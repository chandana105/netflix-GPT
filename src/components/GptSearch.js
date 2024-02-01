import React from "react";
import { LOGIN_PAGE_BG_IMAGE, languageWords } from "../utils/constants";
import { useSelector } from "react-redux";

const GptSearch = () => {
  //   const handleFormSubmit = (e) => {
  //     e.preventDefualt();
  //   };
  const defaultLanguage = useSelector(
    (store) => store?.language?.defaultLanguage
  );

  return (
    <div className="">
      <div className="absolute -z-10">
        <img src={LOGIN_PAGE_BG_IMAGE} alt="bg-img-login " />
      </div>
      <div className="pt-28">
        <form
          className="bg-black p-10 w-1/2 mx-auto grid grid-cols-12"
          // onSubmit={(e) => handleFormSubmit(e)}
        >
          <input
            type="text"
            placeholder={languageWords.inputText[defaultLanguage]}
            className="col-span-9 px-3 text-base"
          />
          <button className="bg-red-700 px-3 py-4 text-lg text-white font-semibold col-span-3">
            {languageWords.searchBtn[defaultLanguage]}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearch;
