// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import "./AccountConfig.css" 
import Dropdown from '../General/Dropdown.jsx'
function AccountConfig() { 
    const [selected, setSelected] = useState('');
return (
    <div className='login'>
        <div className="login-container">
                <h4>Question 1</h4>
                <h1 className='login-header'>Tell us about yourself</h1>
                <h4>Who are you</h4>
                <div className='login-div-holder'>
                </div>
                <div className='login-div-holder'>
                    <button className='Login-btn' type="submit" id="submit">Driver</button>
                    <button className='Login-btn' type="submit" id="submit">Student</button>
                <Dropdown selected={selected} setSelected={setSelected}/>
                </div>
                <div>
                <button className='Login-btn' type="submit" id="submit">Continue</button>
                </div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        </div>
        </div>
)
}

export default AccountConfig