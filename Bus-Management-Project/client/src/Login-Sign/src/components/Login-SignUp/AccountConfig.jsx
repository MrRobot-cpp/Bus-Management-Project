// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import "./AccountConfig.css" 
import Dropdown from '../General/Dropdown.jsx'
function AccountConfig() { 
    const options1 =['Nozha','Shobra','Heliopolis','5th settlement','El Rehab',];
    const options2 =['MIU - Misr International University','BUE - British University in Egypt','El Galala University'];
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
                <Dropdown options={options1}/>
                <Dropdown options={options2}/>
                <input type="number" className='NumberOfDays' />
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