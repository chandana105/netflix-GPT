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

  if (validation1 && validation2) {
    return `${validation1} ${validation2}`;
  }

  return validation1 || validation2 || null;
};
