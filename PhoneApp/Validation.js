var passwordValidation =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
var emailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var nameValidation = /^[a-zA-Z -]+$/;

const ValidatePassword = data => {
  return passwordValidation.test(data);
};
const ValidateEmail = data => {
  return emailValidation.test(data);
};
const ValidateName = data => {
  return nameValidation.test(data);
};
export {ValidateEmail, ValidatePassword, ValidateName};
