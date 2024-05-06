/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
// import React, {useState} from "react";
import { Link } from 'react-router-dom';
import styles from "./VerticalNavbar.module.css"

function VerticalNavbar(props) {
    // eslint-disable-next-line no-unused-vars
    // const [toggle, setToggle] = useState(true);
    // eslint-disable-next-line no-unused-vars
    // const [backgroundColor, setBackgroundColor] = useState("#FFFBEB");
    // eslint-disable-next-line no-unused-vars
    // const [hoverBox, setHoverBox] = useState("14vw");
    // eslint-disable-next-line no-unused-vars
    // const [hoverBoxMargin, setHoverBoxMargin] = useState("10px");

    const {menuItems,onQuery} = props;

    const handleOnQuery = (text) => {
        return () => {
            onQuery(text);
        };
    };
    

    
    //ahmed

    // function handleToggle() {
    // const newToggleValue = !toggle;
    // setToggle(newToggleValue);   
    // document.getElementsByClassName("{styles["vertical-navbar")[0].style.width = newToggleValue ? "18vw" : "80px"; 
    // document.getElementsByClassName("{styles["vertical-navbar-container")[0].style.width = newToggleValue ? "18vw" : "80px"; 

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
        <div className={styles["vertical-navbar-container"]}>
            <div className={styles["vertical-navbar"]}>
                    <ul className={styles["vertical-navbar-ul"]}>
                    {/* <li style={{marginLeft: hoverBoxMargin}}> */}
                    <li>
                        <div className={styles["header"]}>
                        <p>RouteMinder.</p>
                        </div>
                    </li>
                        <li className={styles["hamburger-btn-line"]} onClick={handleOnQuery("Dashboard")}>
                            {/* <a href="#" className="{styles["dashboard-link" onClick={handleToggle} onMouseOver={handleMouseOver} 
                            onMouseOut={handleMouseOut} style={{width: hoverBox}}> */}
                                <Link to="/home" className={styles["dashboard-link"]}>
                                {/* <HamburgerBtn className="{styles["hamburger-btn" transform={`translate(${toggle?"0px":"-15px" },-20px)`} 
                                backgroundColor={backgroundColor} toggle={toggle}/> */}
                                Dashboard
                            </Link>
                        </li>
                        {menuItems.map((item, index) => (
                            <li key={index} onClick={handleOnQuery(item.text)}>
                                <Link to={`/driver${item.text}`}>
                                {/* <i className={item.icon}/>    */}
                                {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/* <div className="{styles["minimal-info">
                    <div className="{styles["hr-line"></div>
                    <p className="{styles["name">
                        {user.name}
                    </p>
                    <p className="{styles["email">
                        {user.mail}
                    </p>
                    </div> */}
            </div>
            <div className={styles["logout-bottom-container"]}>
                <a>Logout</a>
            </div>
        </div>
    </>
    );
}

export default VerticalNavbar;
