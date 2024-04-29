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
        <div className="trip-container" >
            <div className="trip">
                <p className="trip-text">
                    Arrival: {`${depHour} : ${depMinute} ${depPeriod}` }
                </p>
            </div>
        </div>
    
)
}
export default Trip