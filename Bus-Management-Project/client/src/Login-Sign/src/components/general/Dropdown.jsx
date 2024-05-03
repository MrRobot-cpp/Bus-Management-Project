/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './Dropdown.css'


// eslint-disable-next-line no-unused-vars
function Dropdown({selected, setSelected}) {
    const [isActive, setIsActive] = useState(false);
    const options =['React','Vue','Angular'];

    return (
    <div className='dropdown'>
        <div className='dropdown-btn' onClick={() => setIsActive(!isActive)}>
            {selected}
            <span className='fas fa-caret-down'></span>
            </div>
            {isActive && (
        <div className="dropdown-content">
            {options.map(option =>(
                // eslint-disable-next-line react/jsx-key
                <div  onClick={() =>{setSelected(option) 
                    setIsActive(false)
                }}className="dropdown-item">{option}</div>
            ))}
        </div>
)}
    </div>
)
}

export default Dropdown