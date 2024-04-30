export const validateEmail = (email) => {
    // Basic email validation using regular expression
    return /\S+@\S+\.\S+/.test(email);
};

export const validatePassword = (password) => {
    // Password validation: at least 8 characters
    return password.length >= 8;
};

export const validateName = (name) => {
    // Name validation: non-empty string
    return name.trim() !== '';
};

export const validateConfirmPassword = (password, confirmPassword) => {
    // Confirm password validation: must match password
    return password === confirmPassword;
};