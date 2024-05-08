import './LandingPage.css'
import "../General/MenuItemButton/MenuItemButton.css";

import { addAnimation } from "../General/CustomerCard/scrollingAnimation.js";
import { useEffect, useState } from 'react'

import MenuItemButtonRegular from "../General/MenuItemButton/MenuItemButtonRegular.jsx"
import HorizontalCard from "../General/HorizontalCard/HorizontalCard.jsx";
import FeatureCard from "../General/FeatureCard/FeatureCard.jsx";
import MenuItemButtonHighlighted from "../General/MenuItemButton/MenuItemButtonHighLighted.jsx";
import CustomerCard from "../General/CustomerCard/CustomerCard.jsx";
import Accordion from '../General/Accordion/Accordion.jsx';

import busImage1 from '../../assets/bus-image-1.png' 
import busImage2 from '../../assets/bus-image-2.svg'
import busImage3 from '../../assets/bus-image-3.svg'

import client1Image from "../../assets/client1.jpeg";
import client2Image from "../../assets/client2.jpeg";
import client3Image from "../../assets/client3.jpeg";
import client4Image from "../../assets/client4.jpeg";
import client5Image from "../../assets/client5.jpeg";
import client6Image from "../../assets/client6.jpeg";
import client7Image from "../../assets/client7.jpeg";
import iphoneImage from "../../assets/iphoneImage.png";

import instagramImage from "../../assets/instagramImage.png"
import facebookImage from "../../assets/facebookImage.png"
import twitterXImage from "../../assets/twitterXImage.png"



function LandingPage() {

    const toggleDropDown = () => {
        const toggleBtnIcon = document.querySelector('.toggle-btn i');
        const dropDownMenu = document.querySelector('.dropdown-menu');

        const isOpen = dropDownMenu.classList.toggle('open');

        toggleBtnIcon.classList.toggle('fa-bars', !isOpen);
        toggleBtnIcon.classList.toggle('fa-xmark', isOpen);
    };

    //check for media queries
    //if user has reduced motion OFF --> add animation function
    //reduced motion minimizes the amount of animation or motion it uses
    useEffect(() => {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }
    }, []);

    const [isOpen, setIsOpen] = useState("");


    return (
        <>
            <div className='main-container'>
            {/* Header */}
            <nav className="header">
            <div className="header-contents">
                <div className="logo-nav"><h1 className="logo-placeholder">RouteMinder</h1></div>
                    <ul className="unordered-list">
                        <li className="list"><MenuItemButtonRegular text="Home" hRef={""} /></li>
                        <li className="list"><MenuItemButtonRegular text="Services" hRef={""} /></li>
                        <li className="list"><MenuItemButtonRegular text="About" hRef={""} /></li>
                        <li className="list"><MenuItemButtonRegular text="Contact Us" hRef={""} /></li>
                        <MenuItemButtonHighlighted text="Login" classCondition={true} className2="header-login-btn" hRef="/Login" />
                    </ul>

                <div className="toggle-btn" onClick={toggleDropDown}>
                    <i className="fa-solid fa-bars toggle-btn-logo"></i>
                </div>
                <div className="dropdown-menu" >
                    <li className="list"><MenuItemButtonRegular text="Home" hRef={"#"} /></li>
                    <li className="list"><MenuItemButtonRegular text="Services" hRef={"#"} /></li>
                    <li className="list"><MenuItemButtonRegular text="About" hRef={"#"} /></li>
                    <li className="list"><MenuItemButtonRegular text="Contact Us" hRef={"#"} /></li>
                    <li className="list"><MenuItemButtonHighlighted text="Login" classCondition={true} className2="dropdown-login-btn"/></li>
                </div>
            </div>
            </nav>
            {/* End of Header */}



            {/* Title Area */}
            <HorizontalCard 
                imageSide={"row"} 
                imageLink={busImage1} 
                imageSize={"500px"}
                background={'#495579'} 
                headlineText={"RouteMinder. - Simplifying Bus Transport."} 
                descriptionText={"At RouteMinder, we understand the critical importance of safe, reliable, and efficient transportation for schools and universities. Whether you're a bustling urban campus or a quaint rural school district, our comprehensive transportation services are tailored to meet your unique needs."}
            />
            {/* End of Title Area  */}



            {/* Services Section */}
            <div className="feature-card-container">
                <h2 className="features-title">Services</h2>
                <div className="feature-card-display">
                    <FeatureCard 
                        iconLink={"fa-regular fa-hourglass-half"} 
                        iconColor={'#000'}
                        headlineText={"Real-Time Tracking"} 
                        descriptionText={"Students can stay updated and track bus location and arrival time."}  
                    />

                    <FeatureCard 
                        iconLink={"fa-solid fa-route"} 
                        iconColor={'#251749'} 
                        headlineText={"Route Management"} 
                        descriptionText={"Drivers manage routes with multiple stops for each round efficiently."} 
                    />

                    <FeatureCard 
                        iconLink={"fa-regular fa-comments"} 
                        iconColor={'#263159'} 
                        headlineText={"Commnunication Channel"} 
                        descriptionText={"Facilitate easy communication between drivers and students."}
                    />

                    <FeatureCard 
                    iconLink={"fa-regular fa-user"} 
                    iconColor={'#4B5880'} 
                    headlineText={"Extensive Profile"} 
                    descriptionText={"Streamline tasks for route, driver, and student management."} 
                    />

                </div>
                <MenuItemButtonHighlighted text="More About Our Services"  Width="225px" />
            </div>
            {/* End of Services Section */}



            {/* About Us Section */}
            <div className="about-us-container">
                <h1 className="about-us-headline">About Us</h1>
                <HorizontalCard 
                    imageSide={'row-reverse'} 
                    imageLink={busImage2}
                    imageSize={"450px"} 
                    headlineText={'Our Mission'}
                    textColor={"#000"} 
                    bottomPadding={"0"}
                    descriptionText={"At RoutMinder., our mission is simple: to provide seamless transportation solutions that enhance the educational experience for all. We believe that access to safe and reliable transportation is essential for students to fully engage in their academic pursuits. Therefore, we are committed to delivering exceptional service that prioritizes safety, reliability, and convenience."} 
                />

                <HorizontalCard 
                    imageSide={'row'} 
                    imageLink={busImage3} 
                    imageSize={"600px"}
                    headlineText={'Our Vision'} 
                    textColor={"#000"} 
                    descriptionText={"Our vision is to be the premier transportation provider for educational institutions nationwide. We envision a future where every school and university has access to top-notch transportation services that enable students, faculty, and staff to thrive. By continuously innovating and adapting to the evolving needs of our clients, we aim to set the standard for excellence in educational transportation."} 
                />
            </div>
            {/* End of About Us Section */}




            {/* Customer Card Section */}
            <div className="customer-card-container">
                <h1 className="customer-card-headline">Hear From Our Customers</h1>
                    <div className="customer-card-scroller" data-animated={true} >
                        <div className="customer-card-display customer-card-inner-scroller">
                        <CustomerCard 
                            imageLink={client1Image} 
                            name="Samantha Rodriguez" 
                            position="Teacher &#64; Westside High School" 
                            descriptionText={`"RouteMinder has transformed our school's transportation system! With its real-time tracking feature, I can easily monitor the arrival and departure times of our buses, ensuring our students get to class on time. It's been a game-changer for us!"`} 
                        />

                        <CustomerCard 
                            imageLink={client2Image} 
                            name="Michael Nguyen" 
                            position="Principal &#64; Oakridge Middle School" 
                            descriptionText={`"As a principal, safety is my top priority. RouteMinder's route management tool has helped us optimize our bus routes for efficiency and safety. The communication channel feature also allows us to quickly communicate with drivers and parents, enhancing overall security."`} 
                        />

                        <CustomerCard 
                            imageLink={client3Image} 
                            name="Emily Patel" 
                            position="Parent of two students" 
                            descriptionText={`"I can't thank RouteMinder enough for providing peace of mind during my kids' commute to school. The app's extensive profile feature lets me input crucial information about my children, ensuring their safety during transit."`} 
                        />

                        <CustomerCard 
                            imageLink={client4Image} 
                            name="David Thompson" 
                            position="School Bus Driver" 
                            descriptionText={`"As a bus driver, RouteMinder has simplified my job immensely. The route management tool helps me plan the most efficient routes, reducing travel time and fuel costs. The communication channel also allows me to communicate with school staff and parents seamlessly."`} 
                        />

                        <CustomerCard 
                            imageLink={client5Image} 
                            name="Sarah Johnson" 
                            position="School Administrator &#64; Maple Elementary" 
                            descriptionText={`"RouteMinder has been a lifesaver for our school! With its intuitive interface and user-friendly features, managing our transportation needs has never been easier. The real-time tracking feature ensures we can quickly respond to any delays or emergencies."`} 
                        />

                        <CustomerCard 
                            imageLink={client6Image} 
                            name="Kevin Lee" 
                            position="Parent Association President" 
                            descriptionText={`"RouteMinder has been an invaluable asset to our parent community. The app's user-friendly interface makes it easy for parents to track their children's buses in real-time. It has significantly reduced the stress and uncertainty of the morning rush!"`}  
                        />

                        <CustomerCard 
                            imageLink={client7Image} 
                            name="Jessica Martinez" 
                            position="Student &#64; Central High School" 
                            descriptionText={`"As a student, I appreciate RouteMinder's commitment to safety and efficiency. Knowing that my bus is equipped with real-time tracking gives me peace of mind during my daily commute."`}  
                        />

                        </div>
                    </div>
            </div>
            {/* End of Customer Card Section */}



            {/* CTA Section */}
            <div className="cta-container">
                <div className="cta">
                    <div className="cta-contents">
                        <div className="cta-headline-and-description">
                            <h2 className="cta-headline">Download Now</h2>
                            <p className="cta-description">
                                See why so many people enjoy our app. 
                                Discover the satisfaction firsthand.
                            </p>
                        </div>
                        <div className="screen">
                            <img className="iphone-image" src={iphoneImage} alt="iphone screen"/>
                        </div>
                        <div className="review-and-download">
                            <div className="reviews">
                                <span className="star-icon">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </span>
                                <p className="review-amount">5/5 &#x2022; 361 reviews</p>
                            </div>
                            <MenuItemButtonHighlighted text="Download Now" Width="140px" />
                        </div>

                    </div>
                </div>
            </div>
            {/* End of CTA Section */}




            {/* Accordion Section */}
            <div className="accordion-container">
                <h1 className="accordion-headline">Frequently Asked Questions (FAQs)</h1>

                <Accordion 
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    headlineText="headline1" 
                    descriptionText="This is an answer to a frequently asked question. A couple more works to specify the subject further, provide more detail and make sure the user understands everything." 
                />

                <Accordion 
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    headlineText="headline2" 
                    descriptionText="This is an answer to a frequently asked question. A couple more works to specify the subject further, provide more detail and make sure the user understands everything." 
                />

                <Accordion 
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    headlineText="headline3" 
                    descriptionText="This is an answer to a frequently asked question. A couple more works to specify the subject further, provide more detail and make sure the user understands everything." 
                />

                <Accordion 
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    headlineText="headline4" 
                    descriptionText="This is an answer to a frequently asked question. A couple more works to specify the subject further, provide more detail and make sure the user understands everything." 
                />
                
                <Accordion 
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    headlineText="headline5" 
                    descriptionText="This is an answer to a frequently asked question. A couple more works to specify the subject further, provide more detail and make sure the user understands everything." 
                />
            </div>
            {/* End of Accordion Section */}




            {/* Footer Section */}
            <div className="footer-container" >
                    <div className="footer-info-box">
                        <h2 className='footer-logo'>RouteMinder.</h2>
                        <p className='footer-company-refer'>&copy; 2024 RouteMinder. Inc.</p>
                        <span className="social-media">
                            <img className="social-media-logo" src={instagramImage} alt="instagram"/>
                            <img className="social-media-logo" src={facebookImage} alt="facebook"/>
                            <img className="social-media-logo" src={twitterXImage} alt="twitter-x"/>
                        </span>
                    </div>
                </div>
            </div>
            {/* End of Footer Section */}


        </>
    );
}

export default LandingPage;
