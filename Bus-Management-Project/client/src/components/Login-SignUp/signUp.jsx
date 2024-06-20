// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { validateEmail, validatePassword, validateName } from './validation';
import './signUp.css'; // Assuming you have this CSS file in your project
import TermsAndConditions from './TermsAndConditions';
import { Link } from 'react-router-dom';

function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [toggleIsChecked, setToggleIsChecked] = useState(false);
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [termsError, setTermsError] = useState('');
    const [signupClicked, setSignupClicked] = useState(false);

    const handleFirstNameChange = (e) => {
        const value = e.target.value;
        setFirstName(value);
        setFirstNameError(validateName(value) ? '' : 'Names must contain letters only');
    };

    const handleLastNameChange = (e) => {
        const value = e.target.value;
        setLastName(value);
        setLastNameError(validateName(value) ? '' : 'Names must contain letters only');
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setEmailError(validateEmail(value) ? '' : 'Invalid email');
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setPasswordError(validatePassword(value) ? '' : 'Password must be at least 8 characters');
    };

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
        setConfirmPasswordError(value === password ? '' : 'Passwords do not match');
    };

    const handleTermsChange = (e) => {
        const checked = e.target.checked;
        setIsChecked(checked);
        setTermsError(checked ? '' : 'Please agree to the terms and conditions');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSignupClicked(true);
        setTermsError(isChecked ? '' : 'Please agree to the terms and conditions');

        if (validateEmail(email) && validatePassword(password) && password === confirmPassword && isChecked) {
            // Proceed with form submission
            console.log('Form submitted successfully!');
        } else {
            console.log('Form submission failed. Please check input fields.');
        }
    };

    const handleToggleTerms = () => {
        setToggleIsChecked(!toggleIsChecked);
    };

    return (
        <div className='sign'>
            <div className="Creation-container">
                <form className='sign-form' onSubmit={handleSubmit} noValidate>
                    <h1 className='sign-header'>Create Account</h1>
                    <br />
                    <br />
                    <div className='labels-container'>
                        <div className='names'>
                            <div className='name-div'>
                                {signupClicked && !firstName && <span className="error">First name is required</span>}
                                {firstNameError && <span className="error">{firstNameError}</span>}
                                <br />
                                <div className="top-border"><label htmlFor="FirstName">First Name</label></div>
                                <input className='sign-input' type="text" id="FirstName" value={firstName} onChange={handleFirstNameChange} required />
                            </div>
                            <div className='name-div'>
                                {signupClicked && !lastName && <span className="error">Last name is required</span>}
                                {lastNameError && <span className="error">{lastNameError}</span>}
                                <br />
                                <div className="top-border"><label htmlFor="LastName">Last Name</label></div>
                                <input className='sign-input' type="text" id="LastName" value={lastName} onChange={handleLastNameChange} required />
                            </div>
                        </div>
                        <br />
                        <div className='sign-div-holder'>
                            {signupClicked && !email && <span className="error">Email is required</span>}
                            {emailError && <span className="error">{emailError}</span>}
                            <br />
                            <div className="top-border"><label htmlFor="Email">Email</label></div>
                            <input className='sign-input' type="email" id="Email" value={email} onChange={handleEmailChange} required />
                        </div>
                        <br />
                        <div className='sign-div-holder'>
                            {signupClicked && !password && <span className="error">Password is required</span>}
                            {passwordError && <span className="error">{passwordError}</span>}
                            <br />
                            <div className="top-border"><label htmlFor="Password">Password</label></div>
                            <input className='sign-input' type="password" id="Password" maxLength="20" value={password} onChange={handlePasswordChange} required />
                        </div>
                        <br />
                        <div className='sign-div-holder'>
                            {signupClicked && !confirmPassword && <span className="error">Confirm password is required</span>}
                            {confirmPasswordError && <span className="error">{confirmPasswordError}</span>}
                            <br />
                            <div className="top-border"><label htmlFor="ConfirmPassword">Re-enter Password</label></div>
                            <input className='sign-input' type="password" id="ConfirmPassword" maxLength="20" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
                        </div>
                        <br />
                    </div>
                    <div className='termsLine'>
                        <br />
                        <h5><input className='checker' type="checkbox" checked={isChecked} onChange={handleTermsChange} /> I Have Read the <a href="#" onClick={handleToggleTerms}>Terms & Conditions</a></h5>
                        {termsError && <span className="error">{termsError}</span>}
                    </div>
                    <div className='sign-div-holder'>
                        <button className='Sign-btn' type="submit" id="submit">Sign Up</button>
                    </div>
                    <h4 className="not-regist">Already Have An Account? <Link className="create-acc-link" to="/login">Login</Link></h4>
                    <h4>Or Join with</h4>
                    <br />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
                    <div className="social-icons">
                        <a href=""><i className="fab fa-google"></i></a>
                        <a href=""><i className="fab fa-facebook"></i></a>
                        <a href=""><i className="fab fa-apple"></i></a>
                    </div>
                </form>
            </div>
            {toggleIsChecked && <TermsAndConditions onQuery={setIsChecked} onQueryII={setToggleIsChecked} />}
        </div>
    );
}

export default Signup;
