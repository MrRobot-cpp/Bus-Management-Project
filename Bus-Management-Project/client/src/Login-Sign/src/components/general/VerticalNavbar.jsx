/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import "./VerticalNavbar.css";

function VerticalNavbar(props) {
    // eslint-disable-next-line no-unused-vars
    const [toggle, setToggle] = useState(true);
    // eslint-disable-next-line no-unused-vars
    const [backgroundColor, setBackgroundColor] = useState("#FFFBEB");
    // eslint-disable-next-line no-unused-vars
    const [hoverBox, setHoverBox] = useState("14vw");
    // eslint-disable-next-line no-unused-vars
    const [hoverBoxMargin, setHoverBoxMargin] = useState("10px");

    // eslint-disable-next-line react/prop-types
    const {menuItems,user} = props;
    //ahmed

    // function handleToggle() {
    // const newToggleValue = !toggle;
    // setToggle(newToggleValue);   
    // document.getElementsByClassName("vertical-navbar")[0].style.width = newToggleValue ? "18vw" : "80px"; 
    // document.getElementsByClassName("vertical-navbar-container")[0].style.width = newToggleValue ? "18vw" : "80px"; 

    // }

    // function handleMouseOver() {
    //     setBackgroundColor("#263159");
    //     setHoverBox(toggle ? "auto" : "40px");
    //     setHoverBoxMargin(toggle ? "10px":"20px");

    // }

    // function handleMouseOut() {
    //     setBackgroundColor("#FFFBEB");
    //     setHoverBox(toggle ? "auto" : "40px");
    //     setHoverBoxMargin(toggle ? "10px":"20px");
    // }

    

    return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <div className="vertical-navbar-container common">
            <div className="vertical-navbar">
                    <ul className="vertical-navbar-ul">
                    {/* <li style={{marginLeft: hoverBoxMargin}}> */}
                    <li>
                        <div className="header">
                        <p>RouteMinder.</p>
                        </div>
                    </li>
                        <li style={{marginLeft: hoverBoxMargin}} className="hamburger-btn-line">
                            {/* <a href="#" className="dashboard-link" onClick={handleToggle} onMouseOver={handleMouseOver} 
                            onMouseOut={handleMouseOut} style={{width: hoverBox}}> */}
                                <a href="#" className="dashboard-link">
                                {/* <HamburgerBtn className="hamburger-btn" transform={`translate(${toggle?"0px":"-15px" },-20px)`} 
                                backgroundColor={backgroundColor} toggle={toggle}/> */}
                                {toggle && "Dashboard"}
                            </a>
                        </li>
                        {menuItems.map((item, index) => (
                            <li key={index} style={{marginLeft: hoverBoxMargin}}>
                                <a href="#" style={{width: hoverBox}}>
                                <i className={item.icon}></i>   
                                {toggle && item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="minimal-info">
                    <div className="hr-line"></div>
                    <p className="name">
                        {user.name}
                    </p>
                    <p className="email">
                        {user.mail}
                    </p>
                    </div>
            </div>
        </div>
    </>
    );
}

export default VerticalNavbar;
