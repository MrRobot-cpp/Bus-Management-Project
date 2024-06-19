import './StudentDashboard.css'
import Schedule from '../schedule/Schedule';

import studentLogo from '../../../assets/studenticon.png'
import profilePic from '../../../assets/profilepic.png'
import tripStatus from '../../../assets/tripstatus.png'
import MenuItemButtonHighlighted from '../../General/MenuItemButton/MenuItemButtonHighLighted';


function StudentDashboard() {
    
    function getDate(type) {
        const today = new Date();
        const monthNames = [
            "January", "February", "March", "April", 
            "May", "June", "July", "August", 
            "September", "October", "November", "December"
        ];
        const month = monthNames[today.getMonth()]; // Get month name
        const year = today.getFullYear();
        const date = today.getDate();
        const day = today.getDay()

        if (type == 'all') {
            return `${month} ${date}, ${year}`; // Format: Month Date, Year
        }
        else if (type == 'month') {
            return month; // Format: Month
        }
        else if (type == 'year') {
            return year; // Format: year
        }
        else if (type == 'day') {
            return day; // Format: day (week)
        }
        else if (type == 'date') {
            return date; // Format: date (number)
        }
    }



    return (
    <>
        <div className="welcome-container">
            <div className="welcome-text">
                <p>{getDate("all")}</p>
                <h1>&ensp; Welcome Shady!</h1>  {/*replace shady with name of user (db) */}
                <p>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp;We are here to make your journey smooth and hassle-free.</p>
            </div>
            <img className='student-logo' src={studentLogo} alt="student icon" />
        </div>

        <div className="student-left-right-sections">

            <div className="left-section">
                <Schedule/>


                <div className="driver-info">
                    <div className="pic-name-rate">
                        <img className='profile-pic' src={profilePic} alt="profile picture" />
                        <h3>Driver Name</h3>
                    </div>
                    <div className="star-rating">
                        <div className="star-rating-icons">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <p className='rating-number'>4.38</p>
                    </div>
                    <div className="driver-contact">
                    <p className="driver-phone">+201204837593</p>
                    <p className="live-loc">Live Location</p> {/* should link to navigation tab */}
                    </div>
                </div>

            </div>

            <div className="student-right-section">

                <div className="current-trip">
                    <p className="current-trip-title">Current Trip</p>
                    <hr />
                    <div className="current-trip-contents">
                    <div className="current-trip-info">
                        <span className='current-trip-text'>
                            <p>Time until bus arrival:</p>
                            <p className='current-trip-time'>00:00</p>
                        </span>
                        <span className='current-trip-text'>
                            <p>Destination Time:</p>
                            <p className='current-trip-time'>00:00</p>
                        </span>
                    </div>
                    </div>
                </div>

                <div className="payments">
                    <p className="payments-title">Payments</p>
                    <hr />
                    <div className="payments-content">

                        <div className="payments-info">
                            <span className="payments-text">
                                <p>Amount Paid:</p>
                                <p className="payments-amount">00.00 EGP</p>
                            </span>
                            <span className="payments-text">
                                <p>Amount Expected:</p>
                                <p className="payments-amount">00.00 EGP</p>
                            </span>
                        </div>

                        <div className="payments-date">
                            <span className="payments-text">
                                <p>Due Date:</p>
                                <p className="payments-date-1">May 27, 2024</p>
                            </span>
                            <span className="payments-text">
                                <p>Time Remaining:</p>
                                <p className="payments-date-2">00:00</p>
                            </span>
                        </div>
                    </div>
                    <div className="payments-button">
                        <MenuItemButtonHighlighted text={"Pay Now"}/> {/*will navigate to deposit page */}
                    </div>
                </div>
            </div>
        </div>
    </>
    );
    
}
export default StudentDashboard;