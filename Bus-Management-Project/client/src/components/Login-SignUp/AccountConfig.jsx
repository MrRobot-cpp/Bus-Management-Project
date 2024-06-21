// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './AccountConfig.css';
import Dropdown from '../General/Dropdown.jsx';

function AccountConfig() {
    const options1 = ['Nozha', 'Sheraton', 'Shobra', 'Heliopolis', '5th settlement', 'El Rehab', 'Nasr City', '6 October'];

    const [step, setStep] = useState(1);
    const [selectedOption1, setSelectedOption1] = useState('');
    const [locationInput, setLocationInput] = useState('');
    const [inputValid, setInputValid] = useState(false);

    useEffect(() => {
        // Validate input and enable continue button only when area and location are selected and valid
        if (step === 2 && selectedOption1 && inputValid) {
            setInputValid(true);
        } else {
            setInputValid(false);
        }
    }, [step, selectedOption1, inputValid]);

    const handleOption1Select = (option) => {
        setSelectedOption1(option);
        setStep(2);
    };

    const handleLocationInputChange = (e) => {
        const value = e.target.value;
        setLocationInput(value);
        setInputValid(validateInput(value));
    };

    const validateInput = (input) => {
        const regex = /^[0-9]+(\s[A-Za-z]+)+$/;
        return regex.test(input);
    };

    const handleContinue = () => {
        // Ensure step does not exceed 2
        if (step < 2) {
            setStep(step + 1);
        }
    };

    return (
        <div className='Ilogin'>
            <div className="Ilogin-container">
                <div className='IConfig-text-div'>
                    <h4>Question {step > 2 ? 2 : step}</h4>
                    <div className='Iloading-Questions'>
                        <div key={1} className={`Iloading-dash ${step >= 1 ? 'active' : ''}`}></div>
                        <div key={2} className={`Iloading-dash ${step >= 2 ? 'active' : ''}`}></div>
                    </div>
                    <h2 className='Ilogin-header'>Tell us about yourself</h2>
                    {step >= 1 && (
                        <div className='Idrop-holder'>
                            <h4>Where do you live?</h4>
                            <Dropdown options={options1} onSelect={handleOption1Select} />
                        </div>
                    )}
                    {step >= 2 && (
                        <div className='Idrop-holder'>
                            <h4>What’s your home address?</h4>
                            <input
                                type="text"
                                className='Ilocation-input'
                                value={locationInput}
                                onChange={handleLocationInputChange}
                                placeholder='Enter your home address'
                            />
                            {!inputValid && locationInput && (
                                <p className="Ierror">Please enter a valid home address (e.g., "123 Main St").</p>
                            )}
                        </div>
                    )}
                </div>
                {/* Continue button */}
                {step === 2 && (
                    <button 
                        className={`IContinue-Button ${inputValid ? 'active' : ''}`}
                        onClick={handleContinue} 
                        disabled={!inputValid}>
                        Continue
                    </button>
                )}
            </div>
        </div>
    );
}

export default AccountConfig;
