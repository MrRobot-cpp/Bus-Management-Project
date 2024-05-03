import "./Home.css";
import Trip from "./Trip";
import DriverProfile from "./DriverProfile";
import DateOrganizer from "./DateOrganizer";


function Home(props) {
  const {driver,trips} = props;
  return (
    <>
      <div className="home-container">
        <div className="left-container">
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
      </div>
    </>
  );
}
export default Home;
