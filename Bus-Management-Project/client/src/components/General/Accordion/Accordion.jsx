import "./Accordion.css";
import PropTypes from 'prop-types';


const Accordion = ({ headlineText, descriptionText, isOpen, setIsOpen }) => {




    
    return (
        <div className="accordion">

            <div className="headline-and-button">
                <h2 className="headline">{headlineText}</h2>
                <span onClick={() => {
                    if (isOpen === headlineText) {
                        setIsOpen('');
                    } else {
                        setIsOpen(headlineText);
                    }
                }}
                className="accordion-dropdown-btn">
                    <i className={`fa-solid fa-circle-chevron-${isOpen === headlineText ? 'up' : 'down'}`}></i>
                </span>
            </div>

            <div className={(isOpen === headlineText ? 'open' : '') + "divider-and-description"} >
                <hr className="divider" />
                <p className="description">{descriptionText}</p>
            </div>

        </div>
        
    );
}

export default Accordion;

Accordion.propTypes = {
    headlineText: PropTypes.string,
    descriptionText: PropTypes.string,
    isOpen: PropTypes.string,
    setIsOpen: PropTypes.func
} 



