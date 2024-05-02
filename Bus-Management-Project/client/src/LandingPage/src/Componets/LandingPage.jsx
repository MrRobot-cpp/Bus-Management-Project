import './LandingPage.css'
import "./MenuItemButton/MenuItemButton.css"

import MenuItemButtonRegular from "./MenuItemButton/MenuItemButtonRegular.jsx"
import HorizontalCard from "./HorizontalCard/HorizontalCard.jsx";
import FeatureCard from "./FeatureCard/FeatureCard.jsx";
import MenuItemButtonHighlighted from "./MenuItemButton/MenuItemButtonHighLighted.jsx";

import CustomerCard from "./CustomerCard/CustomerCard.jsx";
import busImage1 from '../assets/bus-image-1.png' 
import busImage2 from '../assets/bus-image-2.svg'
import busImage3 from '../assets/bus-image-3.svg'

import client1Image from "../assets/client1.jpeg";
import client2Image from "../assets/client2.jpeg";
import client3Image from "../assets/client3.jpeg";
import client4Image from "../assets/client4.jpeg";
import client5Image from "../assets/client5.jpeg";
import client6Image from "../assets/client6.jpeg";
import client7Image from "../assets/client7.jpeg";

function LandingPage() {

const toggleDropDown = () => {
    const toggleBtnIcon = document.querySelector('.toggle-btn i');
    const dropDownMenu = document.querySelector('.dropdown-menu');

    const isOpen = dropDownMenu.classList.toggle('open');

    toggleBtnIcon.classList.toggle('fa-bars', !isOpen);
    toggleBtnIcon.classList.toggle('fa-xmark', isOpen);
};


return (
    <>
    {/* Header */}
    <nav className="header">
    <div className="header-contents">
        <div className="logo-nav"><h1 className="logo-placeholder">RouteMinder</h1></div>
            <ul className="unordered-list">
                <li className="list"><MenuItemButtonRegular text="Home" hRef={"#"} /></li>
                <li className="list"><MenuItemButtonRegular text="Services" hRef={"#"} /></li>
                <li className="list"><MenuItemButtonRegular text="About" hRef={"#"} /></li>
                <li className="list"><MenuItemButtonRegular text="Contact Us" hRef={"#"} /></li>
                <MenuItemButtonHighlighted text="Login" classCondition="true" className2="header-login-btn"  />
            </ul>

        <div className="toggle-btn" onClick={toggleDropDown}>
            <i className="fa-solid fa-bars toggle-btn-logo"></i>
        </div>
        <div className="dropdown-menu" >
            <li className="list"><MenuItemButtonRegular text="Home" hRef={"#"} /></li>
            <li className="list"><MenuItemButtonRegular text="Services" hRef={"#"} /></li>
            <li className="list"><MenuItemButtonRegular text="About" hRef={"#"} /></li>
            <li className="list"><MenuItemButtonRegular text="Contact Us" hRef={"#"} /></li>
            <li className="list"><MenuItemButtonHighlighted text="Login" classCondition="true" className2="dropdown-login-btn"/></li>
        </div>
    </div>
    </nav>
    {/* End of Header */}



    {/* Title Area */}
    <HorizontalCard imageSide={"row"} imageLink={busImage1} background={'#495579'} headlineText={"RouteMinder. - Simplifying Bus Transport."} 
    descriptionText={"At RouteMinder, we understand the critical importance of safe, reliable, and efficient transportation for schools and universities. Whether you're a bustling urban campus or a quaint rural school district, our comprehensive transportation services are tailored to meet your unique needs."}/>
    {/* End of Title Area  */}



    {/* Services Section */}
    <div className="feature-card-container">
        <h2 className="features-title">Services</h2>
        <div className="feature-card-display">
            <FeatureCard iconLink={"fa-regular fa-hourglass-half"} iconColor={'#000'} headlineText={"Real-Time Tracking"} descriptionText={"Students can stay updated and track bus location and arrival time. Encourages stress-free transportation"}  />
            <FeatureCard iconLink={"fa-solid fa-route"} iconColor={'#251749'} headlineText={"Route Management"} descriptionText={"Drivers ensure timely departure and arrival. Manage routes with multiple stops for each round efficiently."} />
            <FeatureCard iconLink={"fa-regular fa-comments"} iconColor={'#263159'} headlineText={"Commnunication Channel"} descriptionText={"Facilitate easy communication between drivers and students."} />
            <FeatureCard iconLink={"fa-regular fa-user"} iconColor={'#4B5880'} headlineText={"Extensive Profile"} descriptionText={"Streamline administrative tasks for route, driver, and student management."} />
        </div>
        <MenuItemButtonHighlighted text="More About Our Services"  Width="225px" />
    </div>
    {/* End of Services Section */}



    {/* About Us Section */}
    <div className="about-us-container">
        <h1 className="about-us-headline">About Us</h1>
        <HorizontalCard imageSide={'row-reverse'} imageLink={busImage2} imageSize={"450px"} headlineText={'Our Mission'} textColor={"#000"} descriptionText={"At RoutMinder., our mission is simple: to provide seamless transportation solutions that enhance the educational experience for all. We believe that access to safe and reliable transportation is essential for students to fully engage in their academic pursuits. Therefore, we are committed to delivering exceptional service that prioritizes safety, reliability, and convenience."} />
        <HorizontalCard imageSide={'row'} imageLink={busImage3} headlineText={'Our Vision'} textColor={"#000"} descriptionText={"Our vision is to be the premier transportation provider for educational institutions nationwide. We envision a future where every school and university has access to top-notch transportation services that enable students, faculty, and staff to thrive. By continuously innovating and adapting to the evolving needs of our clients, we aim to set the standard for excellence in educational transportation."} />
    </div>
    {/* End of About Us Section */}




    {/* Customer Card Section */}
{/* 
    <div className="customer-card-container">
        <h1 className="customer-card-headline">Hear From Our Customers</h1>
        <div className="customer-card-display">
            <CustomerCard imageLink={client1Image} />
            <CustomerCard imageLink={client2Image} />
            <CustomerCard imageLink={client3Image} />
            <CustomerCard imageLink={client4Image} />
            <CustomerCard imageLink={client5Image} />
            <CustomerCard imageLink={client6Image} />
            <CustomerCard imageLink={client7Image} />
        </div>
    </div> */}

    </>
);
}

export default LandingPage;