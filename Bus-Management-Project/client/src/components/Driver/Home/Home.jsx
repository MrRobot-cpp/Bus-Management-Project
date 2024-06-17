/* eslint-disable react/prop-types */
import "./Home.css";
import Trip from "../trips/Trip";
import DriverProfile from "../DriverProfile/DriverProfile";
// import DateOrganizer from "./DateOrganizer/DateOrganizer.jsx";
import DateOrganizer from "../DateOrganizer/DateOrganizer";


function Home(props) {
  const {driver,trips} = props;
  return (
    <>
      {/* <div className="home-container"> */}
        <div className="left-container">
          \
          {/* <div className="welcome-container">
            <div className="welcome">
              <p className="welcome-text">Welcome Home!</p>
            </div>
  </div> */}


 <div className="driver-profile-container">
            <DriverProfile
              name={driver.name}
              age={driver.age}
              noOfTrips={driver.noOfTrips}
              type={driver.type}
            />
          </div>
<div className="DG">
          <div className="daily-summary">
          <h2>Daily Summary</h2>
          <p>Trips For Today: <input type="text" value="9" readOnly /></p>
          <p>Trips Left: <input type="text" value="4" readOnly /></p>
          <p>Trips Completed: <input type="text" value="5" readOnly /></p>
          <p>Driving Time For today: <input type="text" value="6 Hours" readOnly /></p>
          </div>
          
          
      
          </div>
         

          <div className="trip-container">
            <Trip
              departure={trips[0].departure}
              arrival={trips[0].arrival}
              numStudents={trips[0].numStudents}
              maxNumberStudents={trips[0].maxNumberStudents}
              speedLimit={trips[0].speedLimit}
              stops={trips[0].stops}
              startPoint={trips[0].startPoint}
              endPoint={trips[0].endPoint}
              status={trips[0].status}
            ></Trip>
          </div>
        </div>

        <div className="right-container">
          <div className="data-organizer-container">
            <DateOrganizer trips={trips}/>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}
export default Home;
