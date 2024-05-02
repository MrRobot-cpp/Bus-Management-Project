import React from "react";
import styles from "./Overlay.module.css";

function Overlay(props) {
  const { trip } = props;

  return (
    <div className={styles["overlay"]}>
        <div className={styles["trip-info-container"]}>
      <div className={styles["trip-info"]}>
        <h2>Trip Details</h2>
        <p>
          Departure Time: {trip.departure.hour}:{trip.departure.minute}{" "}
          {trip.departure.period}
        </p>
        <p>
          Arrival Time: {trip.arrival.hour}:{trip.arrival.minute}{" "}
          {trip.arrival.period}
        </p>
        <p>Number of Students: {trip.numStudents}</p>
        <p>Maximum Number of Students: {trip.maxNumberStudents}</p>
        <p>Speed Limit: {trip.speedLimit} mph</p>
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
