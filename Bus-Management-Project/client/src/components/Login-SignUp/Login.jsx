// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { validateEmail, validatePassword } from './validation';
import './login.css';

const driverCredntials = {
    email: "ahmedsamersayed22@gmail.com",
    password: "samortchy2004"
}

const studentCredntials = {
    email: "shadyyasset@gmail.com",
    password: "shdshddd2002"
}

const adminCredntials = {
    email: "ghazouly2007@gmail.com",
    password: "ghazou2007"
}

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [newPasswordError, setNewPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

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

    const handleNewPasswordChange = (e) => {
        const value = e.target.value;
        setNewPassword(value);
        setNewPasswordError(validatePassword(value) ? '' : 'Password must be at least 8 characters');
    };

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
        setConfirmPasswordError(value === newPassword ? '' : 'Passwords do not match');
    };

    const handleForgotPasswordClick = () => {
        setShowForgotPassword(true);
    };

    const handleReturnClick = () => {
        setShowForgotPassword(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add further validation if needed
        if (validateEmail(email) && validatePassword(password)) {
            // Proceed with form submission
            console.log('Form submitted successfully!');
        } else {
            // Display error messages or handle invalid input
            console.log('Form submission failed. Please check input fields.');
        }
    };

    const handleResetPassword = (e) => {
        e.preventDefault();
        // Perform password reset logic here
    };

    const handleRedirection = () =>{
        let link;
        if(email===driverCredntials.email && password===driverCredntials.password){
            link="driver-view"
        }else 
        if(email===adminCredntials.email && password===adminCredntials.password){
            link="admin-view"
        }else 
        if(email===studentCredntials.email && password===studentCredntials.password){
            link="student-view"
        }else {console.log("invalid credntials")}
        console.log(link);
        return link
    }

    return (
        <div className='login'>
            <div className="login-container">
                <form className='login-form' onSubmit={showForgotPassword ? handleResetPassword : handleSubmit}>
                    <h1 className='login-header'>{showForgotPassword ? 'Reset Password' : 'Sign In'}</h1>
                    <br />
                    <br />
                    {!showForgotPassword && (
                        <div>
                            <div className='login-div-holder'>
                                <div className="top-border"><label htmlFor="Email"> Email</label></div>
                                <input className='login-input' type="email" id="Email" value={email} onChange={handleEmailChange}/>
                                <br />
                                {emailError && <span className='error'>{emailError}</span>}
                            </div>
                            <br />
                            <div className='login-div-holder'>
                                <div className="top-border"><label htmlFor="Password"> Password</label></div>
                                <input className='login-input' type="password" id="Password" maxLength="20" value={password} onChange={handlePasswordChange} />
                                <br />
                                {passwordError && <span className='error'>{passwordError}</span>}
                            </div>
                            <br />
                            <a className="forgot-password-link" href="#" onClick={handleForgotPasswordClick}>Forgot Password?</a>
                        </div>
                    )}
                    {showForgotPassword && (
                        <div>
                            <div className='login-div-holder'>
                                <div className="top-border"><label htmlFor="NewPassword"> New Password</label></div>
                                <input className='login-input' type="password" id="NewPassword" maxLength="20" value={newPassword} onChange={handleNewPasswordChange} />
                                <br />
                                {newPasswordError && <span className='error'>{newPasswordError}</span>}
                            </div>
                            <br />
                            <div className='login-div-holder'>
                                <div className="top-border"><label htmlFor="ConfirmPassword"> Confirm Password</label></div>
                                <input className='login-input' type="password" id="ConfirmPassword" maxLength="20" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                                <br />
                                {confirmPasswordError && <span className='error'>{confirmPasswordError}</span>}
                            </div>
                            <br />
                            <a className='forgot-password-btn' onClick={handleReturnClick}>Return to Login</a>
                        </div>
                    )}
                    <br />
                    {!showForgotPassword && (
                        <div className='login-div-holder'>
                            <Link to={handleRedirection()}><button className='Login-btn' type="submit" id="submit">{showForgotPassword ? 'Reset Password' : 'Login'}</button></Link>
                        </div>
                    )}
                    <h4 className="not-regist">Not Registered yet? <Link className='create-account-login-link' to="/sign-up">Create An Account</Link></h4>
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
        </div>
    );
}
export default Login;
