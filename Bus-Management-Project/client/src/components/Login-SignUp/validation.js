export const validateEmail = (email) => {
    // Basic email validation using regular expression
    return /\S+@\S+\.\S+/.test(email);
};

export const validatePassword = (password) => {
    // Password validation: at least 8 characters
    return password.length >= 8;
};

export const validateName = (name) => {
    // Name validation: letters only (no numbers)
    return /^[a-zA-Z]+$/.test(name);
};

export const validateConfirmPassword = (password, confirmPassword) => {
    // Confirm password validation: should match the password
    return password === confirmPassword;
};

export const validatePhoneNumber = (phoneNumber) => {
    // Phone number validation: digits only, 10 digits long
    return /^\d{10}$/.test(phoneNumber);
};

export const validateTermsAndConditions = (isChecked) => {
    // Terms and conditions validation: checkbox must be checked
    return isChecked;
};

export const validateOption1 = (option) => {
    // Validation logic for the first dropdown (options1)
    return option !== ''; // You can add more complex validation logic as needed
};

