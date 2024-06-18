import './StudentDashboard.css'
import Schedule from '../schedule/Schedule';

import studentLogo from '../../../assets/studenticon.png'
import profilePic from '../../../assets/profilepic.png'


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


        <div className="left-section">
            <Schedule/>


            <div className="driver-info">
                <img className='profile-pic' src={profilePic} alt="profile picture" />
                <h3>Driver Name</h3>
                <div className="star-rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                </div>
                <p className='rating-number'>4.38</p>
                <p className="driver-phone">+201204837593</p>
                <p className="live-loc">Live Location</p> {/* should link to navigation tab */}
            </div>
        </div>

        <div className="right-section">
            <div className="current-trip"></div>
            <div className="payments"></div>
        </div>
    </>
    );
    
}
export default StudentDashboard;