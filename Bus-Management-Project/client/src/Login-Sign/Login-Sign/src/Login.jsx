import React from 'react';
import './loginStyle.css'; // Assuming you have this CSS file in your project

function Login() {
    return (
        <div className="login-container">
            <form>
                <h1>Sign In</h1>
                <br />
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
                <a className="Forgot-Password" href="">Forgot Password?</a>
                <br />
                <br />
                <div>
                    <button type="submit" id="submit">Login</button>
                </div>
                <br />
                <h4 className="not-regist">Not Registered yet? <a href="">Create An Account</a></h4>
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
export default Login;