import React from "react";
import Dropdown from "./Dropdown";
import { useSelector } from "react-redux";
import {
  GPT_SEARCH_BUTTON_TEXT,
  HOME_BUTTON_TEXT,
  LOGO,
  SUPPORTED_LANGUAGES,
} from "../../utils/constants";

import useHeader from "../../hooks/useHeader";

const Header = () => {
  const {
    showGptSearch,
    dropdownRef,
    isDropdownVisible,
    handleLanguageChange,
    handleMouseLeaveContainer,
    handleToggleGptSearchView,
    handleShowDropdown,
  } = useHeader();

  const user = useSelector((state) => state.user);

  return (
    <>
      <div className="absolute w-full px-3 bg-gradient-to-b  from-black z-10 flex justify-between items-center flex-col md:flex-row">
        <div>
          <img src={LOGO} className="w-44 md:w-52" alt="logo" />
        </div>
        {user && (
          <div className="flex gap-3">
            {showGptSearch && (
              <select
                className="bg-black text-white text-base px-3 py-2 cursor-pointer rounded-md"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((language) => (
                  <option value={language.identifier} key={language.identifier}>
                    {language.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="bg-red-700 px-3 py-2 rounded-md text-sm  md:text-base text-white font-semibold "
              onClick={handleToggleGptSearchView}
            >
              {!showGptSearch ? GPT_SEARCH_BUTTON_TEXT : HOME_BUTTON_TEXT}
            </button>

            <div ref={dropdownRef}>
              <img
                src={user?.photoURL}
                className="rounded mx-4 cursor-pointer w-10  "
                alt="profile"
                onMouseEnter={handleShowDropdown}
              />
            </div>
          </div>
        )}
      </div>
      {isDropdownVisible && (
        <Dropdown onMouseLeaveContainer={handleMouseLeaveContainer} />
      )}
    </>
  );
};

export default Header;
