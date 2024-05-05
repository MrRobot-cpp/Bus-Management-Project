// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './AccountConfig.css';
import Dropdown from '../General/Dropdown.jsx';
import { validateNumberOfDays } from './validation.js'; 

function AccountConfig() {
    const options1 = ['Nozha', 'Shobra', 'Heliopolis', '5th settlement', 'El Rehab'];
    const options2 = ['MIU - Misr International University', 'BUE - British University in Egypt', 'El Galala University','GUC - German University in Cairo'];

    const [step, setStep] = useState(1);
    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');
    const [numberOfDays, setNumberOfDays] = useState('');
    const [locationInput, setLocationInput] = useState('');
    const [continueButtonColor, setContinueButtonColor] = useState('#E4E5E7');

    useEffect(() => {
        // Check if all dropdowns and inputs are filled and valid
        if (step === 4 && validateNumberOfDays(numberOfDays) && selectedOption1 && selectedOption2 && isGoogleMapsLink(locationInput)) {
            setContinueButtonColor('#263159');
        } else {
            setContinueButtonColor('#E4E5E7');
        }
    }, [step, selectedOption1, selectedOption2, numberOfDays, locationInput]);

    const handleOption1Select = (option) => {
        setSelectedOption1(option);
        setStep(2);
    };

    const handleOption2Select = (option) => {
        setSelectedOption2(option);
        setStep(4); 
    };

    const handleLocationInputChange = (e) => {
        setLocationInput(e.target.value);
        if (isGoogleMapsLink(e.target.value)) {
            setStep(3);
        }
    };
    const handleNumberOfDaysChange = (e) => {
        const days = parseInt(e.target.value);
        if (!isNaN(days) && days >= 1 && days <= 7) {
            setNumberOfDays(days);
        }
    };
    const isGoogleMapsLink = (input) => {
        return /^https?:\/\/maps\.app\.goo\.gl\/.*$/.test(input);
    };

    return (
        <div className='login'>
            <div className="login-container">
                <div className='Config-text-div'>
                    <h4>Question {step > 4 ? 4 : step}</h4>
                    <div className='loading-Questions'>
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className={`loading-dash ${step >= item ? 'active' : ''}`}></div>
                        ))}
                    </div>
                    <h2 className='login-header'>Tell us about yourself</h2>
                    {step >= 1 && (
                        <div className='drop-holder'>
                            <Dropdown options={options1} onSelect={handleOption1Select} />
                        </div>
                    )}
                    {step >= 2 && (
                        <div className='drop-holder'>
                            <h4>{step >= 2 ? 'What’s your Location there?' : 'Select an option'}</h4>
                            <input
                                type="text"
                                className='location-input'
                                value={locationInput}
                                onChange={handleLocationInputChange}
                                placeholder='Insert your location link'
                            />
                            {locationInput && !isGoogleMapsLink(locationInput) && (
                                <p className="error">Please enter a valid Google Maps link.</p>
                            )}
                        </div>
                    )}
                    {step >= 3 && (
                        <div className='drop-holder'>
                            <h4>{step >= 3 ? 'What is your Destination?' : 'Select an option'}</h4>
                            <Dropdown options={options2} onSelect={handleOption2Select} />
                        </div>
                    )}
                    {step >= 4 && (
                        <div className='drop-holder'>
                            <h4>{step >= 4 ? 'How many days you go to this Destination?' : 'Select an option'}</h4>
                            <input
                                type="number"
                                className='NumberOfDays'
                                min='1'
                                max='7'
                                value={numberOfDays}
                                onChange={handleNumberOfDaysChange}
                                placeholder='Enter the days in numbers here'
                            />
                        </div>
                    )}
                </div>
                {/* Add continue button */}
                <button className='Continue-Button' onClick={() => setStep(step + 1)} style={{ backgroundColor: continueButtonColor }}>Continue</button>
            </div>
        </div>
    );
}

export default AccountConfig;
