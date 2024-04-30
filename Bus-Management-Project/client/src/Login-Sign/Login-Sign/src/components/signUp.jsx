// eslint-disable-next-line no-unused-vars
import React from 'react';
import './signupStyle.css'; // Assuming you have this CSS file in your project
function Signup() {
    return (
        <div className="Creation-container">
            <form>
                <h1>Create Account</h1>
                <div className='labels-container'>
                <div className='names'>
                    <div className='name-div'>
                    <div className="top-border"><label htmlFor="Text">First Name</label></div>
                    <input type="text" />
                    </div>
                    <div className='name-div'>
                    <div className="top-border"><label htmlFor="Text">Last Name</label></div>
                    <input type="text" />
                </div>
                </div>
                <br />
                <div>
                    <div className="top-border"><label htmlFor="Email"> Email</label></div>
                    <input type="email" id="Email" />
                </div>
                <br />
                <div>
                    <div className="top-border"><label htmlFor="Password"> Password</label></div>
                    <input type="password" id="Password" maxLength="20" required />
                </div>
                <br />
                <div>
                    <div className="top-border"><label htmlFor="Password">Re-enter Password</label></div>
                    <input type="password" id="Password" maxLength="20" required />
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
