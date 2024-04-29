import "./Trip.css"

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
            <img src="./herson-rodriguez-w8CcH9Md4vE-unsplash-removebg.png" />
                <p className="trip-text">
                    <div className="time-line">
                    <span className="arrival-departure">
                    departure: {`${depHour} : ${depMinute} ${depPeriod}` } <br/>
                    Arrival: {`${arrHour} : ${arrMinute} ${arrPeriod}`} <br/>
                    </span>
                    Stops: {stops.map((stop,index)=>(`${stop} ,` ))} <br/>
                    Line Begining: {`${startPoint}`}
                    Line End: {`${endPoint}`}
                    </div>
                    <div className="student-count">
                    Number Of Students: {numStudents} <br/>
                    Maximum Student Count: {maxNumberStudents} 
                    </div>
                    <div className="extra-trip-info">
                    Speed Limit: {speedLimit} <br/>
                    Trip Status: {status} 
                    </div>
                    
                </p>
            </div>
        </div>
    
)
}
export default Trip