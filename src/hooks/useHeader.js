import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../store/userSlice";
import { clearGptMovieResults, toggleGptSearchView } from "../store/gptSlice";
import { changeLanguage, resetLanguage } from "../store/configSlice";

const useHeader = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);

  //  checking auth everytime the page loads
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
        dispatch(clearGptMovieResults());
        navigate("/");
      }
    });
    // unsubscribe when compo unmounts
    return () => unsubscribe();
  }, []);

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

  const handleToggleGptSearchView = () => {
    dispatch(toggleGptSearchView());
    dispatch(clearGptMovieResults());
    dispatch(resetLanguage());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful. (navigate done from central level ie header)
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return {
    showGptSearch,
    dropdownRef,
    isDropdownVisible,
    handleLanguageChange,
    handleMouseLeaveContainer,
    handleToggleGptSearchView,
    handleShowDropdown,
    handleSignOut,
  };
};

export default useHeader;
