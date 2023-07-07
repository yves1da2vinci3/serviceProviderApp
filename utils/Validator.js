// Function to validate email address using regular expression
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Function to validate password length
  const isValidPassword = (password) => {
    return password.length >= 8;
  };
  
  // Function to validate phone number using regular expression
  const isValidPhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^\d{10}$/; // Assumes a 10-digit phone number format
    return phoneNumberRegex.test(phoneNumber);
  };

  export {isValidEmail,isValidPhoneNumber,isValidPassword}