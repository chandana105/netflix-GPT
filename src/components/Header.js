import React, { useRef, useState } from "react";
import Dropdown from "./Dropdown";

const Header = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const handleShowDropdown = () => {
    setIsDropdownVisible(true);
  };

  // const handleHideDropdown = () => {
  //   // setIsDropdownVisible(false);

  //   setTimeout(() => {
  //     setIsDropdownVisible(false);
  //   }, 200);
  // };

  const handleMouseLeaveContainer = (e) => {
    if (
      !e.relatedTarget ||
      !(e.relatedTarget instanceof Node) ||
      !dropdownRef.current.contains(e.relatedTarget)
    ) {
      // console.log(e);
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
        <div ref={dropdownRef}>
          <img
            src="https://occ-0-4189-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
            className="rounded mx-4 cursor-pointer  "
            alt="profile"
            onMouseEnter={handleShowDropdown}
          />
        </div>
      </div>
      {isDropdownVisible && (
        <Dropdown onMouseLeaveContainer={handleMouseLeaveContainer} />
      )}
    </>
  );
};

export default Header;
