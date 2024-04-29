import "./ProgressBar.css"

function ProgressBar(props){
    const { departure: { hour: depHour, minute: depMinute, period: depPeriod } 
    = { hour: 0, minute: 0, period: 'AM' },
    arrival: { hour: arrHour, minute: arrMinute, period: arrPeriod } 
    = { hour: 0, minute: 0, period: 'AM' },
    stops} = props;
    return(
        <>
       
        <div className="progress-bar">
        {stops.map((stop,index)=>(<>
         <span className="progress-bar-time-line">
         {index === 0 && <p className="progress-bar-time-line-text">{`${depHour}:${depMinute} ${depPeriod}`}</p>}
         </span>
        <>
        <div className="circle">{stop}</div>
        {index !== stops.length - 1 && <div className="bar"></div>}
        <span className="progress-bar-time-line">
        {index === stops.length - 1 && <p className="progress-bar-time-line-text">{`${arrHour}:${arrMinute} ${arrPeriod}`}</p>}
        </span>
        </>
        </>
    ))}
        </div>
        </>
    );
}
export default ProgressBar