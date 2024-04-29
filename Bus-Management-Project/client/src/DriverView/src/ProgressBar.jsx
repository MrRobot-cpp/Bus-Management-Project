import "./ProgressBar.css"

function ProgressBar(props){
    const { departure: { hour: depHour, minute: depMinute, period: depPeriod } 
    = { hour: 0, minute: 0, period: 'AM' },
    arrival: { hour: arrHour, minute: arrMinute, period: arrPeriod } 
    = { hour: 0, minute: 0, period: 'AM' },
    stops} = props;
    return(
        <div className="progress-bar-container">
       
        <div className="progress-bar">
        {stops.map((stop,index)=>(<>
        <div className="circle">{stop}</div>
        {index !== stops.length - 1 && <div className="bar"></div>}
        </>
    ))}
        </div>
        </div>
    );
}
export default ProgressBar