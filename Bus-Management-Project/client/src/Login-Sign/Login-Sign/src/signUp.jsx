// eslint-disable-next-line no-unused-vars
import React from 'react';
import './signupStyle.css'; // Assuming you have this CSS file in your project
import './index.css';
function Signup() {
    return (
        <div className="Creation-container">
            <form>
                <h1>Create Account</h1>
                <br />
                <br />
                <div>
                    <div className="top-border"><label htmlFor="Email"> Email</label></div>
                    <input type="email" id="Email" />
                </div>
                <br />
                <br />
                <div>
                    <div className="top-border"><label htmlFor="Password"> Password</label></div>
                    <input type="password" id="Password" maxLength="20" required />
                </div>
                <br />
                <a className="Forgot-Password" href="">Forgot Password?</a>
                <br />
                <br />
                <div>
                    <button type="submit" id="submit">Login</button>
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
