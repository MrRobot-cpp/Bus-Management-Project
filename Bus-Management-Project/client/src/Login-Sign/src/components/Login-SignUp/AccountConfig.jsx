// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './AccountConfig.css';
import Dropdown from '../General/Dropdown.jsx';

function AccountConfig() {
    const options1 = ['Nozha', 'Shobra', 'Heliopolis', '5th settlement', 'El Rehab'];
    const options2 = ['MIU - Misr International University', 'BUE - British University in Egypt', 'El Galala University'];

    const [step, setStep] = useState(1);
    // eslint-disable-next-line no-unused-vars
    const [selectedOption1, setSelectedOption1] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [selectedOption2, setSelectedOption2] = useState('');
    const [numberOfDays, setNumberOfDays] = useState('');
    const [continueButtonColor, setContinueButtonColor] = useState('#E4E5E7');

    const handleStudentButtonClick = () => {
        setStep(2);
    };

    const handleOption1Select = (option) => {
        setSelectedOption1(option);
        setStep(3);
    };

    const handleOption2Select = (option) => {
        setSelectedOption2(option);
        setStep(4);
        setContinueButtonColor('#E4E5E7');
    };

    return (
        <div className='login'>
            <div className="login-container">
                <div className='Config-text-div'>
                    <h4>Question {step}</h4>
                    <div className='loading-Questions'>
                        {[1, 2, 3, 4, 5].map((item) => (
                            <div key={item} className={`loading-dash ${step >= item  ? 'active' : ''}`}></div>
                        ))}
                    </div>
                    <h2 className='login-header'>Tell us about yourself</h2>
                    <h4>{step === 1 ? 'Who are you' : ''}</h4>
                {step === 1 && (
                    <div className='buttons-holder'>
                        <button className='Login-btn'>Driver</button>
                        <button className='Login-btn' onClick={handleStudentButtonClick}>Student</button>
                    </div>
                )}
                {step === 2  && (
                    <div>
                        <h4>{step == 2 ? 'Where are you from?' : 'Select an option'}</h4>
                        <Dropdown options={options1} onSelect={handleOption1Select} />
                    </div>
                )}
                {step === 3 && (
                    <div>
                        <h4>{step == 3 ? 'What is your Destination?' : 'Select an option'}</h4>
                        <Dropdown options={options2} onSelect={handleOption2Select} />
                    </div>
                )}
                {step === 4 && (
                    <div>
                        <h4>{step == 4 ? 'How many days you go to this Destination?' : 'Select an option'}</h4>
                        <input
                            type="number"
                            className='NumberOfDays'
                            value={numberOfDays}
                            onChange={(e) => setNumberOfDays(e.target.value)}
                            placeholder='Enter the days in numbers here'
                            />
                    </div>
                )}
                {step === 5 && (
                    <div>
                        <h4>{step == 5 ? 'How many days you go to this Destination?' : 'Select an option'}</h4>
                        <input
                            type="number"
                            className='NumberOfDays'
                            value={numberOfDays}
                            onChange={(e) => setNumberOfDays(e.target.value)}
                            placeholder='Enter the days in numbers here'
                            />
                    </div>
                )}
                </div>
                <button className='Continue-Button' style={{backgroundColor: continueButtonColor}}>Continue</button>
                {/* Render other steps similarly */}
            </div>
        </div>
    );
}

export default AccountConfig;
