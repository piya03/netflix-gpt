export const checkValidateData = (fullName, email, password, isSignIn) => {


  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.trim())
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(password);
  if (!isSignIn && fullName.trim().length <= 3) {
    return "Enter Full Name"
  }
  if (!isEmailValid) {
    return "Email Id is not valid"
  }
  if (!strongPasswordRegex) {
    return "Password is not valid"
  }
  return null
}