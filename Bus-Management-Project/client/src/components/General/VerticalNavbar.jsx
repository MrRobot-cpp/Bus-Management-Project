/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import styles from "./VerticalNavbar.module.css"
import Logout from './Logout';

function VerticalNavbar(props) {
    const [toggle,setToggle] = useState(false)
    const {menuItems,onQuery} = props;

    const handleOnQuery = (text) => {
        console.log(text);
        return () => {
            onQuery(text);
        };
    };

    const handleLogoutClick = () => {
        setToggle(!toggle)
    }
    

    
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
                            <a href='#' className={styles["dashboard-link"]}>
                                {/* <HamburgerBtn className="{styles["hamburger-btn" transform={`translate(${toggle?"0px":"-15px" },-20px)`} 
                                backgroundColor={backgroundColor} toggle={toggle}/> */}
                                Dashboard
                            </a>
                        </li>
                        {menuItems.map((item, index) => (
                            <li key={index} onClick={handleOnQuery(item.text)}>
    
                                <a href="#">
                                {/* <i className={item.icon}/>    */}
                                {item.text}
                                </a>
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
                <a onClick={handleLogoutClick}>Logout</a>
            </div>
            {toggle&&<Logout onQuery={setToggle}/>}
        </div>
    </>
    );
}

export default VerticalNavbar;
