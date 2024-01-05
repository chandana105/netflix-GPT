// export const checkAllInputs = (fullName, email, password) => {
//   const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
//   const isValidPassword =
//     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
//   const isValidFullName = /^[a-zA-Z]{3,}(?: [a-zA-Z]{3,}){1,}$/.test(fullName);

//   if (!isValidFullName) return "Please enter valid full Name";
//   if (!isValidEmail)
//     return "Please enter a valid email address or phone number.";
//   if (!isValidPassword)
//     return "Your password must contain between 8 and above characters.";

//   return null;
// };

export const checkEmailAndPassword = (email, password) => {
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isValidEmail) return "Please enter a valid email address";
  if (!isValidPassword)
    return "Your password must contain between 8 and above characters.";

  return null;
};

export const checkFullName = (fullName) => {
  const isValidFullName = /^[a-zA-Z]{3,}(?: [a-zA-Z]{3,}){1,}$/.test(fullName);

  if (!isValidFullName) return "Please enter valid full Name";

  return null;
};

export const checkSignUpValidations = (fullName, email, password) => {
  const validation1 = checkEmailAndPassword(email, password);
  const validation2 = checkFullName(fullName);

  // if (validation1 !== null && validation2 !== null) {
  //   return `${validation1} ${validation2}`;
  // } else if (validation1 !== null) {
  //   return validation1;
  // } else if (validation2 !== null) {
  //   return validation2;
  // }
  // return null;

  // /explanation :- yaa string aayega
  // validation1 = "Please enter valid full Name"
  // validation1 = null aayega

  // toh agr , validation1 and vlaidation2 mein kuch hai string type :- toh concatencate rkdo
  // else agr dono mein se bhi koi ek null hai valition1 = null , validpat2 = null == null rettrun
  // ie || or operatro

  if (validation1 && validation2) {
    return `${validation1} ${validation2}`;
  }

  return validation1 || validation2 || null;
};

// export const checkEmail = (email) => {
//   const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

//   if (!isValidEmail) return "Please enter a valid email address";

//   return null;
// };

// export const checkPassword = (password) => {
//   const isValidPassword =
//     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

//   if (!isValidPassword)
//     return "Your password must contain between 8 and above characters.";

//   return null;
// };
