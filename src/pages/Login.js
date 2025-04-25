import React from "react";
import Header from "../components/common/Header";
import {
  ALREADY_REGISTERED,
  LOGIN_PAGE_BG_IMAGE,
  NEW_TO_NETFLIX,
  SIGN_IN_BUTTON_TEXT,
  SIGN_IN_NOW,
  SIGN_UP_BUTTON_TEXT,
  SIGN_UP_NOW,
} from "../utils/constants";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const {
    isSignInForm,
    fullNameRef,
    emailRef,
    passwordRef,
    errorMessage,
    copied,
    handleCopy,
    handleButtonClick,
    toggleSignInForm,
  } = useAuth();

  return (
    <div className="relative">
      <Header />
      <div className="absolute">
        <img
          src={LOGIN_PAGE_BG_IMAGE}
          alt="bg-img-login "
          className="h-screen object-cover md:h-full"
        />
      </div>
      <form
        noValidate
        onSubmit={(e) => e.preventDefault()}
        className="text-white absolute right-0 left-0 md:w-4/12 bg-black bg-opacity-90  my-20 m-4  md:mx-auto rounded-md py-12 px-14 "
      >
        <h1 className="font-bold text-xl md:text-3xl py-4">
          {isSignInForm ? SIGN_IN_BUTTON_TEXT : SIGN_UP_BUTTON_TEXT}
        </h1>
        {!isSignInForm && (
          <>
            <input
              ref={fullNameRef}
              type="text"
              placeholder="Full Name"
              className="rounded-md p-4 my-4 bg-gray-800 w-full text-sm  md:text-base "
            />
          </>
        )}
        <input
          ref={emailRef}
          type="email"
          placeholder="Email Address"
          className="rounded-md p-4 mt-4 mb-2  bg-gray-800 w-full text-sm  md:text-base "
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="rounded-md p-4 mt-4 mb-2 bg-gray-800 w-full text-sm  md:text-base "
        />

        <p className="text-xs md:text-sm mb-2  text-orange-600">
          {errorMessage || null}
        </p>

        <button
          className="rounded-md p-4 my-4 font-bold bg-red-700 w-full text-sm  md:text-base "
          onClick={handleButtonClick}
        >
          {isSignInForm ? SIGN_IN_BUTTON_TEXT : SIGN_UP_BUTTON_TEXT}
        </button>
        <p className="py-4 text-sm  md:text-base">
          {isSignInForm ? NEW_TO_NETFLIX : ALREADY_REGISTERED}
          <span
            className="font-bold cursor-pointer text-sm  md:text-base"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? SIGN_UP_NOW : SIGN_IN_NOW}
          </span>
        </p>
        {isSignInForm && (
          <span className="text-white text-center text-xs md:text-sm">
            <p className="font-bold">For testing purpose use</p>
            <div>
              email:{" "}
              <button
                onClick={() => handleCopy("chandana@gmail.com")}
                className="cursor-pointer text-blue-300 underline"
                title="Click to copy email"
                type="button"
              >
                chandana@gmail.com
              </button>{" "}
              , password:{" "}
              <button
                onClick={() => handleCopy("Qwerty1@")}
                className="cursor-pointer text-blue-300 underline"
                title="Click to copy password"
                type="button"
              >
                Qwerty1@
              </button>
            </div>
            {copied && (
              <p className="text-green-400 mt-1">
                Copied: <span className="italic">{copied}</span>
              </p>
            )}
          </span>
        )}
      </form>
    </div>
  );
};

export default Login;
