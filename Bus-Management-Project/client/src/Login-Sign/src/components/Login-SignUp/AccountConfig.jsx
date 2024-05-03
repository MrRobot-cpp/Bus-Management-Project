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
        setContinueButtonColor('#263159');
    };

    return (
        <div className='login'>
            <div className="login-container">
                <div className='Config-text-div'>
                    <h4>Question 1</h4>
                    <div className='loading-Questions'>
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className={`loading-dash ${step >= item  ? 'active' : ''}`}></div>
                        ))}
                    </div>
                    <h2 className='login-header'>Tell us about yourself</h2>
                    <h4>{step === 1 ? 'Who are you' : 'Select an option'}</h4>
                </div>
                {step === 1 && (
                    <div>
                        <button className='Login-btn'>Driver</button>
                        <button className='Login-btn' onClick={handleStudentButtonClick}>Student</button>
                    </div>
                )}
                {step === 2 && (
                    <div>
                        <Dropdown options={options1} onSelect={handleOption1Select} />
                    </div>
                )}
                {step === 3 && (
                    <div>
                        <Dropdown options={options2} onSelect={handleOption2Select} />
                    </div>
                )}
                {step === 4 && (
                    <div>
                        <input
                            type="number"
                            className='NumberOfDays'
                            value={numberOfDays}
                            onChange={(e) => setNumberOfDays(e.target.value)}
                            placeholder='Enter the days in numbers here'
                        />
                    </div>
                )}
                <button className='Continue-Button' style={{backgroundColor: continueButtonColor}}>Continue</button>
                {/* Render other steps similarly */}
            </div>
        </div>
    );
}

export default AccountConfig;
