/* eslint-disable react/prop-types */
import "./ProgressBar.css";

function ProgressBar(props) {
    // eslint-disable-next-line react/prop-types
    const { departure: { hour: depHour, minute: depMinute, period: depPeriod } 
    = { hour: 0, minute: 0, period: 'AM' },
    // eslint-disable-next-line react/prop-types
    arrival: { hour: arrHour, minute: arrMinute, period: arrPeriod } 
    = { hour: 0, minute: 0, period: 'AM' },
    // eslint-disable-next-line react/prop-types
    stops } = props;
    return (
<>
    <div className="progress-bar">
     <div className="progress-bar-info">   
      <p className="progress-bar-time-line-text">{`${depHour}:${depMinute} ${depPeriod}`}</p>
      <p className="progress-bar-time-line-text">{`${arrHour}:${arrMinute} ${arrPeriod}`}</p>
     </div>
        <div className="progress-bar-graphics">
            {stops.map((stop, index) => (
                <div className="graphics" key={index}>
                    <div className="circle">{stop}</div>
                    {index !== stops.length - 1 && <div className="bar"></div>}
                </div>
            ))}
        </div>
    </div>
</>

    );
}

export default ProgressBar;
