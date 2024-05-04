import "./Accordion.css";
import PropTypes from 'prop-types';


const Accordion = (props, isOpen, setIsOpen) => {
    return (
        <div className="accordion">

            <div className="headline-and-button">
                <h2 className="headline">{props.headlineText}</h2>
                <span onClick={() => setIsOpen(props.headlineText)} className="dropdown-btn">
                    <i className={`fa-solid fa-circle-chevron-${isOpen === props.headlineText ? 'up' : 'down'}`}></i>
                </span>
            </div>

            <div className={(isOpen === props.headlineText ? 'open' : '') + "divider-and-description"}>
                <hr className="divider" />
                <p className="description">{props.descriptionText}</p>
            </div>

        </div>
        
    );
}

export default Accordion;

Accordion.propTypes = {
    headlineText: PropTypes.string,
    descriptionText: PropTypes.string
} 



{/* <div className="headline-and-button" onClick={toggleAccordion}>
    <h2 className="headline">{props.headlineText}</h2>
    <i className={`fa-solid fa-circle-chevron-${isOpen ? 'up' : 'down'} dropdown-btn`} ></i>
</div>
{isOpen && (
        <>
            <hr className="divider" />
            <p className="description">{props.descriptionText}</p>
        </>
    )}
</div> */}


{/* 
    <div className={`accordion ${isOpen ? 'open' : ''}`} style={isOpen ? { height: "172px" } : {}}>
        <div> 
            {dataCollention.map((item, index) => 
                <div key={index}>

                    <div className="headline-and-button">
                        <div><h2 className="headline">{item.headline}</h2></div>
                        <div><i className={`fa-solid fa-circle-chevron-${isOpen ? 'up' : 'down'} dropdown-btn`} onClick={toggleAccordion} ></i></div>
                    </div>

                    <div>
                        {isOpen && (
                            <>
                                <hr className="divider" />
                                <p className="description">{item.description}</p>
                            </>
                        )}
                    </div>

                </div>
            )}
        </div>

    </div>
    */}

