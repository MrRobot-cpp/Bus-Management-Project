// eslint-disable-next-line no-unused-vars
import React , {useState} from 'react';
import { validateEmail, validatePassword } from './validation';
import './login.css'; // Assuming you have this CSS file in your project

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

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
    return (
        <>
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h1>Sign In</h1>
                <br />
                <br />
                <div>
                    <div className="top-border"><label htmlFor="Email"> Email</label></div>
                    <input type="email" id="Email" value={email} onChange={handleEmailChange}/>
                    <br />
                    {emailError && <span className='error'>{emailError}</span>}
                </div>
                <br />
                <div>
                    <div className="top-border"><label htmlFor="Password"> Password</label></div>
                    <input type="password" id="Password" maxLength="20" value={password} onChange={handlePasswordChange} />
                    <br />
                    {passwordError && <span className='error'>{passwordError}</span>}
                </div>
                <br />
                <a className="Forgot-Password" href="">Forgot Password?</a>
                <br />
                <div>
                    <button type="submit" id="submit">Login</button>
                </div>
                <h4 className="not-regist">Not Registered yet? <a href="">Create An Account</a></h4>
                <h4>Or Join with</h4>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
                <div className="social-icons">
                    <a href=""><i className="fab fa-google"></i></a>
                    <a href=""><i className="fab fa-facebook"></i></a>
                    <a href=""><i className="fab fa-apple"></i></a>
                </div>
            </form>
        </div>
        </>
    );
}
export default Login;