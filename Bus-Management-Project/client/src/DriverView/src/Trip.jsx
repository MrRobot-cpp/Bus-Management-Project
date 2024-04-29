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
}  = props;
    return(
        <div className="trip-container common" >
            <div className="trip">
                <p className="trip-text">
                    departure: {`${depHour} : ${depMinute} ${depPeriod}` } <br/>
                    Arrival: {`${arrHour} : ${arrMinute} ${arrPeriod}`} <br/>
                    Number Of Students: {numStudents} <br/>
                    Maximum Student Count: {maxNumberStudents} <br/>
                    Speed Limit: {speedLimit} <br/> 
                    Stops: {stops.map((stop,index)=>(`${stop} ,` ))} <br/>
                    Line Begining: {`${startPoint}`}
                    Line End: {`${endPoint}`}
                </p>
            </div>
        </div>
    
)
}
export default Trip