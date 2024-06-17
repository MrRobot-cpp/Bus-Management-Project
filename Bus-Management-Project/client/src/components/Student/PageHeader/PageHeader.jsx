import "./PageHeader.css";
import PropTypes from "prop-types";

function PageHeader(props) {
    
    return(
        <>
        <div className="student-header-container">
                <h2 className="header-txt">{props.text}</h2>
                <div className="border-box-container">
                <div className="border-box"/>
                </div>
        </div>
        </>
    );
}
PageHeader.propTypes={
    text: PropTypes.string
}

export default PageHeader;