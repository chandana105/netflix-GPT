import React, { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const user = useSelector((state) => state.user);
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  return (
    <>
      <div className="absolute w-full px-16 bg-gradient-to-b from-black z-10 flex justify-between items-center  ">
        <div>
          <img
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            className="w-52"
            alt="logo"
          />
        </div>
        {user && (
          <div ref={dropdownRef}>
            <img
              src={user?.photoURL}
              className="rounded mx-4 cursor-pointer w-10  "
              alt="profile"
              onMouseEnter={handleShowDropdown}
            />
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
