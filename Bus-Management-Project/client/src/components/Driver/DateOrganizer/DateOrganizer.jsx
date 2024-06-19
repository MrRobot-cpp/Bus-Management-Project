/* eslint-disable react/prop-types */
import styles from "./DataOrganizer.module.css";
import Overlay from "../overlay/Overlay";
import React, { useState } from "react";

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

const days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
const today = new Date();
const weekDates = days.map((day) => {
  const date = new Date();
  date.setDate(currentDate.getDate() - currentDate.getDay() + days.indexOf(day));
  return date;
});

function getDate(type) {
  const date = new Date();
  if (type === "month") {
    return monthsOfYear[date.getMonth()];
  } else if (type === "year") {
    return date.getFullYear();
  }
}

function DateOrganizer(props) {
  const { trips } = props;
  const [toggleStates, setToggleStates] = useState(new Array(trips.length).fill(false));

  function handleTripClick(index) {
    const newToggleStates = [...toggleStates];
    newToggleStates[index] =!newToggleStates[index];
    setToggleStates(newToggleStates);
  }

  return (
    <>
      <link rel="stylesheet" href="https://kit.fontawesome.com/a076d05399.js" />
      <div className={styles["data-organizer"]}>
        <div className={styles["data"]}>
          <h2 className={styles["data-organizer-header"]}>Schedule</h2>

          <div className={styles["current-date-container"]}>
            <p>
              {currentDayOfMonth} {currentMonth},{currentDay}
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

          <div className="schedule">
            <p className='month-title'>{`${getDate("month")} ${getDate('year')}`}</p>
            <div className="current-week">
              {days.map((day, index) => {
                const date = weekDates[index];
                const isToday = date.toDateString() === today.toDateString();
                return (
                  <div className='current-day' key={day} style={{ backgroundColor: isToday? '#263159' : '#495579' }}>
                    <div>{day}</div>
                    <div>{date.getDate()}</div>
                  </div>
                );
              })}
            </div>

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
      </div>
    </>
  );
}

export default DateOrganizer;