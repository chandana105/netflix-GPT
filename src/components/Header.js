import React, { useRef, useState } from "react";
import Dropdown from "./Dropdown";
import { useSelector } from "react-redux";

const Header = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const user = useSelector((state) => state.user);

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
