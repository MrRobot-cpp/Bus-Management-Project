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
    // Confirm password validation: must match password
    return password === confirmPassword;
};

export const validateTermsAndConditions = (isChecked) => {
    // Terms and conditions validation: checkbox must be checked
    return isChecked;
};

export function handleInputFocus(setIsInputFocused, setNumberOfDays) {
    setIsInputFocused(true);
    // Clear the placeholder text when focused
    setNumberOfDays('');
}

export function handleInputBlur(numberOfDays, setIsInputFocused, setNumberOfDays) {
    setIsInputFocused(false);
    // Reset the placeholder text if input is empty
    if (numberOfDays === '') {
        setNumberOfDays('Enter the days in numbers here');
    }
}

export const validateOption1 = (option) => {
    // Validation logic for the first dropdown (options1)
    return option !== ''; // You can add more complex validation logic as needed
};

export const validateOption2 = (option) => {
    // Validation logic for the second dropdown (options2)
    return option !== ''; // You can add more complex validation logic as needed
};

export const validateNumberOfDays = (numberOfDays) => {
    // Validation logic for the number of days input
    return numberOfDays !== '' && numberOfDays > 0; // Validate if it's not empty and greater than 0
};
