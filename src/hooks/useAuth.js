import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
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
import { USER_AVATAR } from "../utils/constants";
import { addUser } from "../store/userSlice";

const useAuth = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [copied, setCopied] = useState("");

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [errorMessage, setErrorMessage] = useState("");

  const toggleSignInForm = () => {
    setIsSignInForm((prev) => !prev);
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(""), 1500);
      console.log("Text copied to clipboard");
    } catch (err) {
      console.error("Failed to copy text to clipboard", err);
    }
  };

  const handleCopy = (text) => {
    copyToClipboard(text);
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
          // The central level hook will handle updating the Redux store
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    }
  };

  return {
    isSignInForm,
    fullNameRef,
    emailRef,
    passwordRef,
    errorMessage,
    copied,
    handleCopy,
    handleButtonClick,
    toggleSignInForm,
  };
};

export default useAuth;
