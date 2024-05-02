import styles from "./DataOrganizer.module.css";

const currentDate = new Date();

const week = currentDate.getDay();
const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
const currentDay = daysOfWeek[week];

const month = currentDate.getMonth();
const monthsOfYear = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const currentMonth = monthsOfYear[month];

const currentDayOfMonth = currentDate.getDate();

function DateOrganizer(props) {
  const { trips } = props;

  let tripTimeValidation = function(trip){
    if(trip.date.getDate() === currentDayOfMonth && trip.date.getMonth === currentMonth){
        return true;
    } else{return false;}

  }

  console.log(trips);
  return (
    <>
      <link src="https://kit.fontawesome.com/a076d05399.js" />
      <div className={styles["data-organizer"]}>
        <div className={styles["data"]}>
          <h2>Schedule</h2>

          <span>
            <p>
              {currentDayOfMonth} {currentMonth},{currentDay}
            </p>
            <p>
              <i className="fas fa-angle-down"></i>
            </p>
          </span>

          <div className={styles["current-data"]}>
            <ul className="trip-list">
              {trips.map((trip, index) => {
               
                  tripTimeValidation(trip) && (
                    <li key={index}>
                      <div className={styles["trip-info"]}>
                        <h2>Trip {index + 1}</h2>
                        <p>
                          {trip.departure.hour}:{trip.departure.minute}{" "}
                          {trip.departure.period} - {trip.arrival.hour}:
                          {trip.arrival.minute} {trip.arrival.period}
                        </p>
                        <p>Speed: {trip.speedLimit} MPH</p>
                        <p>Dep. Station: {trip.startPoint}</p>
                        <p>Arr. Station: {trip.endPoint}</p>
                      </div>
                    </li>
                  )
              })}
            </ul>
          </div>

          <span>
            <h3>Upcoming</h3>
            <h3>
              <i className="fas fa-angle-down"></i>
            </h3>
          </span>

          <div className={styles["upcoming-data"]}></div>
        </div>
      </div>
    </>
  );
}

export default DateOrganizer;
