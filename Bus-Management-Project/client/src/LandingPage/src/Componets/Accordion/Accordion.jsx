import "./Accordion.css";
import PropTypes from 'prop-types';
import { useState } from 'react';



const Accordion = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };


return (
    <div className={`accordion ${isOpen ? 'open' : ''}`} style={isOpen ? { height: "172px" } : {}}>
        <div className="headline-and-button" onClick={toggleAccordion}>
            <h2 className="headline">{props.headlineText}</h2>
            <i className={`fa-solid fa-circle-chevron-${isOpen ? 'up' : 'down'} dropdown-btn`} ></i>
        </div>
        {isOpen && (
                <>
                    <hr className="divider" />
                    <p className="description">{props.descriptionText}</p>
                </>
            )}
    </div>
);
}

Accordion.propTypes = {
    headlineText: PropTypes.string,
    descriptionText: PropTypes.string,
    openCount: PropTypes.number
}


export default Accordion
