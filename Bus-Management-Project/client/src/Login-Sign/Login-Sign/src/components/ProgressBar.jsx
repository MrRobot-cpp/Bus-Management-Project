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
                {stops.map((stop, index) => (
                    <div key={index} className="progress-bar-time-line">
                        {index === 0 && <p className="progress-bar-time-line-text">{`${depHour}:${depMinute} ${depPeriod}`}</p>}
                        <div className="circle">{stop}</div>
                        {index !== stops.length - 1 && <div className="bar"></div>}
                        {index === stops.length - 1 && <p className="progress-bar-time-line-text">{`${arrHour}:${arrMinute} ${arrPeriod}`}</p>}
                    </div>
                ))}
            </div>
        </>
    );
}

export default ProgressBar;
