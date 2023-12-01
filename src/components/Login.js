import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="relative">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="bg-img-login "
        />
      </div>
      <form className="text-white absolute right-0 left-0 w-4/12 bg-black  my-20 mx-auto rounded-md py-12 px-14">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input
          type="email"
          placeholder="Email Address"
          className="rounded-md p-4 my-4 bg-gray-800 w-full "
        />
        <input
          type="password"
          placeholder="Password"
          className="rounded-md p-4 my-4 bg-gray-800 w-full "
        />
        <button className="rounded-md p-4 my-4 font-bold bg-red-700 w-full ">
          Sign In
        </button>
        <p className="py-4">
          New to Netflix? <span className="font-bold">Sign up now </span>
        </p>
      </form>
    </div>
  );
};

export default Login;

// used the gradient propertry of tailiwnd to bottom from black color 
//  taken logo fro mnetwork of netflix in img
