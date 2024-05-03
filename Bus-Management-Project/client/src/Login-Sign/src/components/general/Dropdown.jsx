/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Dropdown.css';

// eslint-disable-next-line react/prop-types
function Dropdown({ options, onSelect }) {
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState('Select an option');
    
    const handleOptionClick = (option) => {
        setSelected(option);
        setIsActive(false);
        onSelect(option); // Pass the selected option back to the parent component
    };

    return (
        <div className='dropdown'>
            <div className='dropdown-btn' onClick={() => setIsActive(!isActive)}>
                {selected}
                <span className='fas fa-caret-down'></span>
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {options.map(option => (
                        <div
                            key={option}
                            className="dropdown-item"
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown;
