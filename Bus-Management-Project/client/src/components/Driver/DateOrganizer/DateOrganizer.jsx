/* eslint-disable react/prop-types */
import styles from "./DataOrganizer.module.css";
import Overlay from "../overlay/Overlay";
// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";

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
  "Dec"
];
const currentMonth = monthsOfYear[month];
const curryear=currentDate.getFullYear();
const currentDayOfMonth = currentDate.getDate();


function DateOrganizer(props) {
  // eslint-disable-next-line react/prop-types
  const { trips } = props;
  const [toggleStates, setToggleStates] = useState(new Array(trips.length).fill(false));

  function handleTripClick(index) {
  const newToggleStates = [...toggleStates];
  newToggleStates[index] = !newToggleStates[index];
  setToggleStates(newToggleStates);
}

const getWeekDates = () => {
  const today = new Date();
  const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
  
  // Days to show: Sunday, Monday, Tuesday, Wednesday, Thursday, Saturday (excluding Friday)
  const daysToShow = [0, 1, 2, 3, 4, 6]; // 0: Sunday, 1: Monday, etc.
  
  const weekDates = daysToShow.map(offset => {
  const date = new Date(firstDayOfWeek);
  date.setDate(firstDayOfWeek.getDate() + offset);
  return date;
  });

  return weekDates;
};

function getDate(type) {
  const today = new Date();
  const monthNames = [
      "January", "February", "March", "April", 
      "May", "June", "July", "August", 
      "September", "October", "November", "December"
  ];

  const year = today.getFullYear();
  const date = today.getDate();
  const month = monthNames[today.getMonth()]; // Get month name

  if (type == 'month') {
      return month;
  } else if (type == 'year') {
      return year;
  } else if (type == 'monthDate') {
      return `${month} ${date}`;
  }
}


const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Sat'];
const weekDates = getWeekDates();
const today = new Date();
  

  return (
    
    <>
    
      <link src="https://kit.fontawesome.com/a076d05399.js" />
      <div className={styles["data-organizer"]}>
        <div className={styles["data"]}> 
          <h2 className={styles["data-organizer-header"]}>{currentMonth}  {curryear}</h2>
          <div className={styles["current-date-container"]}>
            <p>
            <br></br>
            <div className="current-week">
                {days.map((day, index) => {
                    const date = weekDates[index];
                    const isToday = date.toDateString() === today.toDateString();
                    return (
                    <div className='current-day' key={day} style={{backgroundColor: isToday ? '#263159' : '#495579'}}>
                        <div>{day}</div>
                        <div>{date.getDate()}</div>
                    </div>
                    );
                })}
            </div>

            </p>
          </div>

          <div className={styles["current-data"]}>
            <ul className={styles["trip-list"]}>
              {trips.map((trip, index) => {
                if (
                  trip.date.getDate() === currentDayOfMonth &&
                  trip.date.getMonth() === month
                ) {
                  return (
                    <li key={index} onClick={() => handleTripClick(index)}>
                    {toggleStates[index] && <Overlay trip={trip} />}
                      <div className={styles["trip-info"]}>
                        <h2 className={styles["trip-header"]}> 
                          Trip {index + 1}
                        </h2>
                        <p>
                          {trip.departure.hour}:{trip.departure.minute}{" "}
                          {trip.departure.period} - {trip.arrival.hour}:
                          {trip.arrival.minute} {trip.arrival.period}{" "}
                          <br/>Top Speed: {trip.speedLimit} mph
                        </p>
                        <br />
                        <p>Dep. Station: {trip.startPoint}</p>
                        <p>Arr. Station: {trip.endPoint}</p>
                      </div>
                    </li>
                  );
                }
                return null; // Return null if the condition is not met
              })}
            </ul>

          </div>
              <hr className={styles.t1} />
             <p className={styles.test}>Schedule</p>

             <div className={styles["upcoming-data"]}>
          <ul className={styles["trip-list"]}>
              {trips.map((trip, index) => {
                if (
                  !(trip.date.getDate() === currentDayOfMonth &&
                  trip.date.getMonth() === month)
                ) {
                  return (
                    <li key={index} onClick={() => handleTripClick(index)}>
                    {toggleStates[index] && <Overlay trip={trip} />}
                      <div className={styles["trip-info"]}>
                        <h2 className={styles["trip-header"]}>
                          Trip {index + 1}
                        </h2>
                        <p>
                          {trip.departure.hour}:{trip.departure.minute}{" "}
                         
                          {trip.departure.period} - {trip.arrival.hour}:
                          {trip.arrival.minute} {trip.arrival.period}{" "}
                     
                        <br/>Top Speed: {trip.speedLimit} mph 
                        </p>
                        <br />
                        <p>Dep. Station: {trip.startPoint}</p>
                        <p>Arr. Station: {trip.endPoint}</p>
                      </div>
                    </li>
                  );
                }
                return null; // Return null if the condition is not met
              })}
            </ul>
          </div>

          <hr className={styles.t1} />

             <p>Upcoming</p>


          <div className={styles["upcoming-data"]}>
          <ul className={styles["trip-list"]}>
              {trips.map((trip, index) => {
                if (
                  !(trip.date.getDate() === currentDayOfMonth &&
                  trip.date.getMonth() === month)
                ) {
                  return (
                    <li key={index} onClick={() => handleTripClick(index)}>
                    {toggleStates[index] && <Overlay trip={trip} />}
                      <div className={styles["trip-info"]}>
                        <h2 className={styles["trip-header"]}>
                          Trip {index + 1}
                        </h2>
                        <p>
                          {trip.departure.hour}:{trip.departure.minute}{" "}
                          {trip.departure.period} - {trip.arrival.hour}:
                          {trip.arrival.minute} {trip.arrival.period}{" "}
                        <br/>Top Speed: {trip.speedLimit} mph
                        </p>
                        <br />
                        <p>Dep. Station: {trip.startPoint}</p>
                        <p>Arr. Station: {trip.endPoint}</p>
                      </div>
                    </li>
                  );
                }
                return null; // Return null if the condition is not met
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default DateOrganizer;
