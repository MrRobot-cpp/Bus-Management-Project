// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { validatePassword } from './validation';
import './login.css';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [newPasswordError, setNewPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [loginClicked, setLoginClicked] = useState(false);
    const [credentialsError, setCredentialsError] = useState('');

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoginClicked(true);
        setCredentialsError('');

        if (email && password) {
            try {
                const response = await axios.post('http://localhost:3030/auth/login', { email, password });

                const {token} = response.data;
                const {role} = response.data.user;

                 // Store the token and role in localStorage
                localStorage.setItem('authToken', token);
                localStorage.setItem('userRole', role);

                console.log('Form submitted successfully!', response.data);
                // Handle successful login, e.g., storing token, redirecting, etc.

                 // Redirect based on role
            if (role === 'Admin') {
                window.location.href = '/admin';
            } else if(role === 'Driver'){
                // Redirect to another appropriate page if not admin
                window.location.href = '/driver';
            }else if(role === 'Student'){
                // Redirect to another appropriate page if not admin
                window.location.href = '/student';
            }
            } catch (error) {
                setCredentialsError("Invalid Email or Password");
                console.log("Invalid credentials", error);
            }
        }
    };

    const handleResetPassword = (e) => {
        e.preventDefault();
        // Perform password reset logic here
    };

    return (
        <div className='login'>
            <div className="login-container">
                <form className='login-form' onSubmit={showForgotPassword ? handleResetPassword : handleSubmit}>
                    <h1 className='login-header'>{showForgotPassword ? 'Reset Password' : 'Login In'}</h1>
                    <br />
                    {credentialsError && !showForgotPassword && <span className='error'>{credentialsError}</span>}
                    <br />
                    <br />
                    {!showForgotPassword && (
                        <div className='user-credentials'>
                            <div className='login-div-holder'>
                                {loginClicked && !email && <span className='error'>Email is required</span>}
                                <br />
                                <div className="top-border"><label htmlFor="Email">Email</label></div>
                                <input
                                    className='login-input'
                                    type="email"
                                    id="Email"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </div>
                            <br />
                            <div className='login-div-holder'>
                                {loginClicked && !password && <span className='error'>Password is required</span>}
                                <br />
                                <div className="top-border"><label htmlFor="Password">Password</label></div>
                                <input
                                    className='login-input'
                                    type="password"
                                    id="Password"
                                    maxLength="20"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                            </div>
                            <br />
                            <a className="forgot-password-link" href="#" onClick={handleForgotPasswordClick}>Forgot Password?</a>
                        </div>
                    )}
                    {showForgotPassword && (
                        <div>
                            <div className='login-div-holder'>
                                {newPasswordError && <span className='error'>{newPasswordError}</span>}
                                <br />
                                <br />
                                <div className="top-border"><label htmlFor="NewPassword">New Password</label></div>
                                <input
                                    className='login-input'
                                    type="password"
                                    id="NewPassword"
                                    maxLength="20"
                                    value={newPassword}
                                    onChange={handleNewPasswordChange}
                                />
                            </div>
                            <br />
                            <div className='login-div-holder'>
                                {confirmPasswordError && <span className='error'>{confirmPasswordError}</span>}
                                <br />
                                <div className="top-border"><label htmlFor="ConfirmPassword">Confirm Password</label></div>
                                <input
                                    className='login-input'
                                    type="password"
                                    id="ConfirmPassword"
                                    maxLength="20"
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                />
                            </div>
                            <br />
                            <a className='forgot-password-btn' onClick={handleReturnClick}>Return to Login</a>
                        </div>
                    )}
                    {!showForgotPassword ? (
                        <div className='login-div-holder'>
                            <br />
                            <button className='Login-btn' type="submit" id="submit">Login</button>
                        </div>
                    ) : (
                        <div className='login-div-holder'>
                            <button className='Login-btn' type="submit" id="submit">Reset Password</button>
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
};

export default Login;
