/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Overlay.module.css";

function Overlay(props) {
  // eslint-disable-next-line react/prop-types
  const { trip } = props;

  return (
    <div className={styles["overlay"]}>
        <div className={styles["trip-info-container"]}>
      <div className={styles["trip-info"]}>
        <h2> Trip Details </h2>
        <hr className={styles["thick-line2"]} />
        <p>
          Departure Time: {trip.departure.hour}:{trip.departure.minute}{" "}
          {trip.departure.period}
        </p>
        <p>
          Arrival Time: {trip.arrival.hour}:{trip.arrival.minute}{" "}
          {trip.arrival.period}
        </p>
        <p>Number of Stops: {trip.numStudents}</p>
        <p>Maximum Number of Students: {trip.maxNumberStudents}</p>
        <p>Stops: {trip.stops.join(", ")}</p>
        <p>Start Point: {trip.startPoint}</p>
        <p>End Point: {trip.endPoint}</p>
        <p>Status: {trip.status ? "Completed" : "Pending"}</p>
        <p>Date: {trip.date.toDateString()}</p>
      </div>
    </div>
    </div>
  );
}

export default Overlay;
