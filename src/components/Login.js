import React, { useCallback, useRef, useState, useEffect } from "react";
import Header from "./Header";
import { checkEmail, checkPassword, checkFullName } from "../utils/validation";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true); //at start its sign in form

  const [inputValidity, setInputValidity] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm((prev) => !prev);
  };

  const [isFormValid, setIsFormValid] = useState(true);

  useEffect(() => {
    // Here we use the updated state to perform validation
    if (
      inputValidity.email ||
      inputValidity.fullName ||
      inputValidity.password
    ) {
      setIsFormValid(false);
      // Perform additional actions if the form is not valid
    } else {
      setIsFormValid(true);
    }
  }, [inputValidity]);

  const handleValidation = useCallback((inputType) => {
    switch (inputType) {
      case "fullName":
        const nameValidityMessage = checkFullName(fullNameRef.current.value);
        setInputValidity((prev) => ({
          ...prev,
          fullName: nameValidityMessage,
        }));

        // if (nameValidityMessage) {
        //   // sign in
        // }

        return;
      case "email":
        const emailValidityMessage = checkEmail(emailRef.current.value);
        setInputValidity((prev) => ({
          ...prev,
          email: emailValidityMessage,
        }));
        return;

      case "password":
        const passwordValidityMessage = checkPassword(
          passwordRef.current.value
        );
        setInputValidity((prev) => ({
          ...prev,
          password: passwordValidityMessage,
        }));
        return;

      default:
        return;
    }
  }, []);

  const handleButtonClick = () => {
    !isSignInForm && handleValidation("fullName");
    handleValidation("email");
    handleValidation("password");

    if (!isFormValid) {
      console.log("not valid");
    } else {
      console.log("valid");
      // Proceed with other actions, like createUserWithEmailAndPassword
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
              onBlur={() => handleValidation("fullName")}
              placeholder="Full Name"
              className="rounded-md p-4 my-4 bg-gray-800 w-full "
            />
            <p className="text-sm mb-2  text-orange-600">
              {inputValidity.fullName}
            </p>
          </>
        )}
        <input
          ref={emailRef}
          type="email"
          onBlur={() => handleValidation("email")}
          placeholder="Email Address"
          className="rounded-md p-4 mt-4 mb-2  bg-gray-800 w-full "
        />
        <p className="text-sm mb-2  text-orange-600">{inputValidity.email}</p>
        <input
          ref={passwordRef}
          onBlur={() => handleValidation("password")}
          type="password"
          placeholder="Password"
          className="rounded-md p-4 mt-4 mb-2 bg-gray-800 w-full "
        />
        <p className="text-sm mb-2  text-orange-600">
          {inputValidity.password}
        </p>

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

// used the gradient propertry of tailiwnd to bottom from black color
//  taken logo fro mnetwork of netflix in img

// to ocnvert sign in page t osign up also. :- ie to change signin form to sign up form
// pehle ek onclick on signup now ko click handler

// if u have a big form :- so many fieds :- use formik

// MOST IMPORTANTLY HERE, WE HAVE BUILD BOTH THE FORMS :- WITH JUST SINGLE FORM , JUST BY TOGGLING

// if i click on sign in /sign up button :- fields value should be validated, and ie havign one button so onclcik hona chaoye

// BASED ON WHETHER ITS SIGN IN OR SIGN UP WE LL DO EITHER LOGIN OR SIGN UP :- BUT BEFORE THAT VALIDATION OF FORM DATA
// basically when should the vaisation should happen, when i clcik on sgn in button :-
// 1. it should validate the form
// 2. if there is error msg ,should show it

// usecallback to see

// now lets build the authentciatoin - for that needed backedn - firebase
// when enabledfirebase for app, then enable authentciation for our app also in friebase webaite

// to use createUserWithEmailAndPassword api from firebase to create user with email and password on firebASE

// if there is no validation msg , then createuser (signin/signup)


// lets revive the code, coz it was simple validagtions to be doen, max range vlaidations to be doen using formik and yup 