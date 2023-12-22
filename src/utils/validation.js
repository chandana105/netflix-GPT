export const checkEmailAndPassword = (email, password) => {
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isValidEmail)
    return "Please enter a valid email address or phone number.";
  if (!isValidPassword)
    return "Your password must contain between 8 and above characters.";

  return null;
};

export const checkEmail = (email) => {
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  if (!isValidEmail) return "Please enter a valid email address";

  return null;
};

export const checkPassword = (password) => {
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isValidPassword)
    return "Your password must contain between 8 and above characters.";

  return null;
};
