import React, { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  GPT_SEARCH_BUTTON_TEXT,
  HOME_BUTTON_TEXT,
  LOGO,
  SUPPORTED_LANGUAGES,
} from "../utils/constants";
import { clearGptMovieResults, toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const user = useSelector((state) => state.user);
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);

  // we are checking auth everytime the page loads
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        // add the user in store
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // remove the user form store
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when compo unmounts
    return () => unsubscribe();
  }, []);

  // TODO: NOT TO SHOW EVEN BLINK OF HOME PAGE ALSO HERE IF GOING TO "/" PAGE

  const handleShowDropdown = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeaveContainer = (e) => {
    if (
      !e.relatedTarget ||
      !(e.relatedTarget instanceof Node) ||
      !dropdownRef.current.contains(e.relatedTarget)
    ) {
      setIsDropdownVisible(false);
    }
  };
  // TODO:to make all text to have size

  const handleToggleGptSearchView = () => {
    dispatch(toggleGptSearchView());
    dispatch(clearGptMovieResults());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <>
      <div className="absolute w-full px-12 bg-gradient-to-b  from-black z-10 flex justify-between items-center  ">
        <div>
          <img src={LOGO} className="w-52" alt="logo" />
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
              className="bg-red-700 px-3 py-2 rounded-md text-base text-white font-semibold "
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

// as soon as this header loads , useffect ll run after rnedring :- onAuth... listner ll be there
// and it ll heck for auth everytime
// so whenver my auth status l change  , it ll automatically reidrects us

// this useffect is called once when my comp loads  but my headrr can be loaded mulitple tiesin a smae single session
// so it ll keep attachign event lisnters in my browser , it ll put my onAuth... code everytine my useffecti s ccalled
// when my comp is there it is perfectly fien to do this
// but when my comp unmkunts  :- i should also unsubscribe ot this action
// bascially i mam tryign to sbscribe to this onAuthstate ... :- it is loke an event list to us
// it keeps the uath status :- whenver the user loggs in , logs out :- it kkeos the trakc ofi t
// so if my comp unmounts wanna unsubscribe tihs laso
// this oinUAthstate change :- returns unsibscribe fnx
