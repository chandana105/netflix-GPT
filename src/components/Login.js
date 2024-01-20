import React, { useRef, useState } from "react";
import Header from "./Header";
import {
  checkEmailAndPassword,
  checkSignUpValidations,
} from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { LOGIN_PAGE_BG_IMAGE, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [errorMessage, setErrorMessage] = useState("");

  const toggleSignInForm = () => {
    setIsSignInForm((prev) => !prev);
  };

  const handleButtonClick = () => {
    let message = "";
    if (isSignInForm) {
      message = checkEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      );
      setErrorMessage(message);
    } else {
      message = checkSignUpValidations(
        fullNameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      );
      setErrorMessage(message);
    }

    if (message) return; //if there is any validation error then do not proceed further

    // Sign in / Sign up

    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed up
          updateProfile(auth.currentUser, {
            displayName: fullNameRef.current.value,
            photoURL: USER_AVATAR, //default img
          })
            .then(() => {
              // Profile updated!
              // update the store of addUser with updated values
              const { uid, email, displayName, photoURL } = auth.currentUser;
              // add the updated user in store
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    }
  };

  // now no need to navigate form here, as everytihng taken  care in onAuthStatechanged handler

  return (
    <div className="relative">
      <Header />
      <div className="absolute">
        <img src={LOGIN_PAGE_BG_IMAGE} alt="bg-img-login " />
      </div>
      <form
        noValidate
        onSubmit={(e) => e.preventDefault()}
        className="text-white absolute right-0 left-0 w-4/12 bg-black bg-opacity-90  my-20 mx-auto rounded-md py-12 px-14"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <>
            <input
              ref={fullNameRef}
              type="text"
              placeholder="Full Name"
              className="rounded-md p-4 my-4 bg-gray-800 w-full "
            />
          </>
        )}
        <input
          ref={emailRef}
          type="email"
          placeholder="Email Address"
          className="rounded-md p-4 mt-4 mb-2  bg-gray-800 w-full "
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="rounded-md p-4 mt-4 mb-2 bg-gray-800 w-full "
        />

        <p className="text-sm mb-2  text-orange-600">{errorMessage || null}</p>

        <button
          className="rounded-md p-4 my-4 font-bold bg-red-700 w-full "
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4">
          {isSignInForm ? "New to Netflix? " : "Already Registered? "}
          <span className="font-bold cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? "Sign up now" : "Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
