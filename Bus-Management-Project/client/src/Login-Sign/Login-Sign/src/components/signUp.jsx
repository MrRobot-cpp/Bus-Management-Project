// eslint-disable-next-line no-unused-vars
import React , {useState} from 'react';
import { validateEmail, validatePassword } from './validation';
import './signupStyle.css'; // Assuming you have this CSS file in your project
function Signup() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add further validation if needed
        if (validateEmail(email) && validatePassword(password) && password === confirmPassword) {
            // Proceed with form submission
            console.log('Form submitted successfully!');
        } else {
            // Display error messages or handle invalid input
            console.log('Form submission failed. Please check input fields.');
        }
    };

    return (
        <div className="Creation-container">
            <form onSubmit={handleSubmit}>
                <h1>Create Account</h1>
                <div className='labels-container'>
                <div className='names'>
                    <div className='name-div'>
                    <div className="top-border"><label htmlFor="Text">First Name</label></div>
                    <input type="text" id="FirstName" value={firstName} onChange={handleFirstNameChange} />
                    </div>
                    <div className='name-div'>
                    <div className="top-border"><label htmlFor="Text">Last Name</label></div>
                    <input type="text" id="LastName" value={lastName} onChange={handleLastNameChange} />
                </div>
                </div>
                <br />
                <div>
                    <div className="top-border"><label htmlFor="Email"> Email</label></div>
                    <input type="email" id="Email" value={email} onChange={handleEmailChange}/>
                    {emailError && <span className="error">{emailError}</span>}
                </div>
                <br />
                <div>
                    <div className="top-border"><label htmlFor="Password"> Password</label></div>
                    <input type="password" id="Password" maxLength="20" required value={password} onChange={handlePasswordChange}/>
                    {passwordError && <span className="error">{passwordError}</span>}
                </div>
                <br />
                <div>
                    <div className="top-border"><label htmlFor="Password">Re-enter Password</label></div>
                    <input type="password" id="Password" maxLength="20" required value={confirmPassword} onChange={handleConfirmPasswordChange}/>
                    {confirmPasswordError && <span className="error">{confirmPasswordError}</span>}
                </div>
                <br />
                </div>
                <div className='termsLine'>
                    <input className='checker' type="checkbox" />
                <h5>I Have Read the<a className="Forgot-Password" href=""> Terms & Conditions</a></h5>
                </div>
                <br />
                <div>
                    <button type="submit" id="submit">Sign Up</button>
                </div>
                <br />
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
    );
}

export default Signup;
