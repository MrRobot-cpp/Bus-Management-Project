export const validateEmail = (email) => {
    // Basic email validation using regular expression
    return /\S+@\S+\.\S+/.test(email);
};

export const validatePassword = (password) => {
    // Password validation: at least 8 characters
    return password.length >= 8;
};