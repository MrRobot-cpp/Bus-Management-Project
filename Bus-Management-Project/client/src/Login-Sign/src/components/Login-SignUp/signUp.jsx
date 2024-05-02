// eslint-disable-next-line no-unused-vars
import React , {useState} from 'react';
import { validateEmail, validatePassword, validateName } from '../validation';
import './signUp.css'; // Assuming you have this CSS file in your project
function Signup() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [termsError, setTermsError] = useState('');
    
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
        // Here you can add further validation if needed
        const isTermsValid = isChecked;
        setTermsError(isTermsValid ? '' : 'Please agree to the terms and conditions');
        if (validateEmail(email) && validatePassword(password) && password === confirmPassword && isTermsValid) {
            // Proceed with form submission
            console.log('Form submitted successfully!');
        } else {
            // Display error messages or handle invalid input
            console.log('Form submission failed. Please check input fields.');
        }
    };
    

    return (
        <div className='sign'>
        <div className="Creation-container">
            <form className='sign-form' onSubmit={handleSubmit}>
                <h1 className='sign-header'>Create Account</h1>
                <br />
                <br />
                <div className='labels-container'>
                <div className='names'>
                    <div className='name-div'>
                    <div className="top-border"><label htmlFor="Text">First Name</label></div>
                    <input className='sign-input' type="text" id="FirstName" value={firstName} onChange={handleFirstNameChange} />
                    <br />
                    {firstNameError && <span className="error">{firstNameError}</span>}
                    </div>
                    <div className='name-div'>
                    <div className="top-border"><label htmlFor="Text">Last Name</label></div>
                    <input className='sign-input' type="text" id="LastName" value={lastName} onChange={handleLastNameChange} />
                    <br />
                    {lastNameError && <span className="error">{lastNameError}</span>}                
                </div>
                </div>
                <br />
                <div className='sign-div-holder'>
                    <div className="top-border"><label htmlFor="Email"> Email</label></div>
                    <input className='sign-input' type="email" id="Email" value={email} onChange={handleEmailChange}/>
                    <br />
                    {emailError && <span className="error">{emailError}</span>}
                </div>
                <br />
                <div className='sign-div-holder'>
                    <div className="top-border"><label htmlFor="Password"> Password</label></div>
                    <input className='sign-input' type="password" id="Password" maxLength="20" required value={password} onChange={handlePasswordChange}/>
                    <br />
                    {passwordError && <span className="error">{passwordError}</span>}
                </div>
                <br />
                <div className='sign-div-holder'>
                    <div className="top-border"><label htmlFor="Password">Re-enter Password</label></div>
                    <input className='sign-input' type="password" id="Password" maxLength="20" required value={confirmPassword} onChange={handleConfirmPasswordChange}/>
                    <br />
                    {confirmPasswordError && <span className="error">{confirmPasswordError}</span>}
                </div>
                <br />
                </div>
                <div className='termsLine'>
                    <br />
                <h5><input className='checker' type="checkbox" checked={isChecked} onChange={handleTermsChange}/> I Have Read the<a  href=""> Terms & Conditions</a></h5>
                {termsError && <span className="error"  >{termsError}</span>}
                </div>
                <div className='sign-div-holder'>
                    <button className='Sign-btn' type="submit" id="submit">Sign Up</button>
                </div>
                <h4 className="not-regist">Not Registered yet? <a className="create-acc-link" href="">Create An Account</a></h4>
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

export default Signup;
