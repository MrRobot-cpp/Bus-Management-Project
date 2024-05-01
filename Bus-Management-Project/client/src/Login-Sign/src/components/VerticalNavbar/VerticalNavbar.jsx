// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import HamburgerBtn from "./HamburgerBtn/HamburgerBtn";
import "./VerticalNavbar.css";

function VerticalNavbar() {
    const [toggle, setToggle] = useState(true);
    const [backgroundColor, setBackgroundColor] = useState("#FFFBEB");
    const [hoverBox, setHoverBox] = useState("14vw");
    const [hoverBoxMargin, setHoverBoxMargin] = useState("10px");

    function handleToggle() {
    const newToggleValue = !toggle;
    setToggle(newToggleValue);   
    document.getElementsByClassName("vertical-navbar")[0].style.width = newToggleValue ? "18vw" : "80px"; 
    document.getElementsByClassName("vertical-navbar-container")[0].style.width = newToggleValue ? "18vw" : "80px"; 

    }

    function handleMouseOver() {
        setBackgroundColor("#263159");
        setHoverBox(toggle ? "auto" : "40px");
        setHoverBoxMargin(toggle ? "10px":"20px");
    }

    function handleMouseOut() {
        setBackgroundColor("#FFFBEB");
        setHoverBox(toggle ? "auto" : "40px");
        setHoverBoxMargin(toggle ? "10px":"20px");
    }

    const menuItems = [
        { icon: "fa-solid fa-shop", text: "Home" },
        { icon: "fa-solid fa-bus", text: "Trips" },
        { icon: "fa-regular fa-comments", text: "Chat" },
        { icon: "fa-solid fa-clock-rotate-left", text: "History" },
        { icon: "fa-solid fa-user", text: "Profile" },
        { icon: "fa-solid fa-arrow-right-from-bracket", text: "LogOut" },
    ];
   

    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
            <div className="vertical-navbar-container common">
                <div className="vertical-navbar">
                    <ul>
                        <li style={{marginLeft: hoverBoxMargin}}>
                         <div className="header">
                            <h2>{(toggle && "RouteMinder.")||"RM."}</h2>
                         </div>
                        </li>
                        <li style={{marginLeft: hoverBoxMargin}}>
                            <a href="#" className="dashboard-link" onClick={handleToggle} onMouseOver={handleMouseOver} 
                            onMouseOut={handleMouseOut} style={{width: hoverBox}}>
                                <HamburgerBtn className="hamburger-btn" transform="translate(-10px,-20px)" 
                                backgroundColor={backgroundColor} toggle={toggle}/>
                                {toggle && "Dashboard"}
                            </a>
                        </li>
                        {menuItems.map((item, index) => (
                            <li key={index} style={{marginLeft: hoverBoxMargin}}>
                                <a href="#" style={{width: hoverBox}}>
                                <i className={`fa-solid ${item.icon}`}></i>
                                {toggle && item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default VerticalNavbar;
