import React from 'react';
import './signupStyle.css'; // Assuming you have this CSS file in your project

function Signup() {
    return (
        <div className="Creation-container">
            <form>
                <h1>Create Account</h1>
                <br />
                <br />
                <div className="top-border-name">
                    <div><label htmlFor="fname">First Name</label></div>
                    <input type="text" id="fname" />
                    <div><label htmlFor="lname">Last Name</label></div>
                    <input type="text" id="lname" />
                </div>
                <br />
                <div>
                    <div className="top-border-email"><label htmlFor="Email"> Email</label></div>
                    <input type="email" id="Email" />
                </div>
                <br />
                <br />
                <div>
                    <div className="top-border-pass"><label htmlFor="Password"> Password</label></div>
                    <input type="password" id="Password" maxLength="20" required />
                </div>
                <br />
                <br />
                <div>
                    <div className="top-border-pass"><label htmlFor="ReEnterPassword"> Re-enter Password</label></div>
                    <input type="password" id="ReEnterPassword" maxLength="20" required />
                </div>
                <br />
                <label className="termsLine">
                    <input className="checker" type="checkbox" defaultChecked name="remember" /> I Have Read the <a href="">Terms &amp; Conditions</a>
                </label>
                <br />
                <br />
                <br />
                <div>
                    <button type="submit" id="submit">Sign Up</button>
                </div>
                <br />
                <h4 className="not-regist">Already Have An Account? <a href="">Login</a></h4>
                <h4>Or Join with</h4>
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
