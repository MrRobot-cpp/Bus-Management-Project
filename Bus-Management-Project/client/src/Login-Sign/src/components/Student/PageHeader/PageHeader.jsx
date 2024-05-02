import "./PageHeader.css";
import PropTypes from "prop-types";

function StudentHeader(props) {
    
    return(
        <>
        <div className="student-header-container">
            <header>
                <h2 className="header-txt">{props.text}</h2>
            </header>
        </div>
        </>
    );
}
StudentHeader.propTypes={
    text: PropTypes.string
}

export default StudentHeader;