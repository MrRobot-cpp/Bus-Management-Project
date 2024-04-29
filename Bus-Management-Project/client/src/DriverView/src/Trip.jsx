import React, {useState} from "react";
import "./Trip.css"
import ProgressBar from "./ProgressBar";
function Trip(props){
const { departure: { hour: depHour, minute: depMinute, period: depPeriod } 
= { hour: 0, minute: 0, period: 'AM' },
arrival: { hour: arrHour, minute: arrMinute, period: arrPeriod } 
= { hour: 0, minute: 0, period: 'AM' },
numStudents,
maxNumberStudents,
speedLimit,
stops,
startPoint,
endPoint,
status,
}  = props;


    return(
        <div className="trip-container common" >
            <div className="trip">
                
                    {/* <div className="student-count text-style">
                    Number Of Students: {numStudents} <br />
                    Maximum Student Count: {maxNumberStudents} 
                    </div> */}

                    <div className="time-line text-style">
                    {/* <span className="arrival-departure">
                    departure: {`${depHour} : ${depMinute} ${depPeriod}` } <br/>
                    Arrival: {`${arrHour} : ${arrMinute} ${arrPeriod}`} <br/>
                    </span> */}
                    {/* Stops: {stops.map((stop,index)=>(`${stop} ,` ))} <br/> */}
                    <div className="progress-bar-container">
                    <ProgressBar stops={stops}
                     departure={{ hour: depHour, minute: depMinute, period: depPeriod }}
                     arrival={{ hour: arrHour, minute: arrMinute, period: arrPeriod }} />
                    </div>
                    </div>
                    
                    <div className="extra-trip-info text-style">
                    <p className="speed-limit extra-trip-info-text">
                    Speed Limit: {`${speedLimit} mph`}
                    </p>
                    <p className="trip-status extra-trip-info-text"> 
                    Trip Status: {(status && "Completed")||"Not Completed"} 
                    </p>
                    </div>
                    
            </div>
        </div>
    
)
}
export default Trip