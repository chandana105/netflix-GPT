import React, { useEffect, useRef, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    user && navigate("/browse");
  }, [user, navigate]); 

  // TODO: NOT TO SHOW EVEN BLINK OF HOME PAGE ALSO HERE IF GOING TO "/" PAGE

  const [isSignInForm, setIsSignInForm] = useState(true); //at start its sign in form

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
          const user = userCredential.user;
          console.log(user, "before uodating");
          updateProfile(auth.currentUser, {
            displayName: fullNameRef.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/39641650?v=4",
          })
            .then(() => {
              // Profile updated!
              // update the store of addUser with updated values
              const { uid, email, displayName, photoURL } = auth.currentUser;
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
            })
            .catch((error) => {
              // An error occurred
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
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    }
  };

  return (
    <div className="relative">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="bg-img-login "
        />
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

// now after we sign up/sign in :- we got user obj :- we might need this user obj after signin or sign up
// acrosos the app , so as son as user sign up sogn in , we ll add this data/user ibj to my redux store
// and then navigate th euser to browse page
