import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import './HamburgerBtn.css';

function HamburgerBtn(props) {
    // eslint-disable-next-line react/prop-types
    const { toggle, transform, backgroundColor } = props;

    
    const midLineStyles = {
        left: toggle ? "none" : "50%",
        top: toggle ? "none" : "50%",
        opacity: toggle ? "0" : "1",
        transform: toggle ? "translateX(20px)" : "translate(-50%,-50%)",
    };

    const bottomLineStyles = {
        left: toggle ? "2px" : "50%",
        top: toggle ? "14px" : "70%",
        transform: toggle ? "rotate(-45deg)" : "rotate(0) translate(-50%,-50%)",
    };

    const topLineStyles = {
        left: toggle ? "2px" : "50%",
        top: toggle ? "14px" : "30%",
        transform: toggle ? "rotate(45deg)" : "rotate(0) translate(-50%,-50%)",
    };

    HamburgerBtn.propTypes = {
        toggle: PropTypes.bool, 
    };

    return (
        <div className="toggle" style={{transform}}>
            <span className="top_line common" style={{...topLineStyles, backgroundColor}}></span>
            <span className="middle_line common" style={{...midLineStyles, backgroundColor}}></span>
            <span className="bottom_line common" style={{...bottomLineStyles, backgroundColor}}></span>
        </div>
    );
}

export default HamburgerBtn;
