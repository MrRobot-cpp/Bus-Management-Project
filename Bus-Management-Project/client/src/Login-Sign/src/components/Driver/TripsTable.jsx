import React, { useState } from "react";
import styles from "./TripsTable.module.css";

function MinBtn({ onButtonClick }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    onButtonClick();
  };

  return (
    <>
      <div className={styles["min-btn-container"]}>
        <div
          className={styles[`${clicked ? "plus-btn" : "min-btn"}`]}
          onClick={handleClick}
        >
          <div className={styles["horizontal-bar"]} />
          <div className={styles["vertical-bar"]} />
        </div>
      </div>
    </>
  );
}

function TripsTable(props) {
  const { trips, tripHead, activateStatBtn } = props;
  const [buttonClicked, setButtonClicked] = useState(true);
  const [stautsButtonClicked, setStautsButtonClicked] = useState(
    Array(trips.length).fill(false)
  );

  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };

  const handleStatusButtonClick = (index) => {
    const updatedTrips = [...stautsButtonClicked];
    updatedTrips[index] = !updatedTrips[index];
    setStautsButtonClicked(updatedTrips);
  };

  const tripTableStyles = {
    height: buttonClicked ? "90%" : "10%",
    animationName: buttonClicked ? "animation1" : "animation2",
  };
  const tripHeadStyles = {
    borderBottom: buttonClicked ? "1.5px solid #EFF0F6" : "none",
  };

  return (
    <>
      <div className={styles["trips-table-container"]} style={tripTableStyles}>
        <div className={styles["table-head"]} style={tripHeadStyles}>
          <p>{tripHead}</p>
          <MinBtn onButtonClick={handleButtonClick} />
        </div>
        {buttonClicked && (
          <div className={styles["trips-table"]}>
            <table>
              <thead>
                <tr>
                  <th>Departure</th>
                  <th>Arrival</th>
                  <th>Max Num. of Students</th>
                  <th>Start Point</th>
                  <th>End Point</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {trips.map((trip, index) => (
                  <tr key={index}>
                    <td>
                      {trip.departure.hour}:{trip.departure.minute}{" "}
                      {trip.departure.period}
                    </td>
                    <td>
                      {trip.arrival.hour}:{trip.arrival.minute}{" "}
                      {trip.arrival.period}
                    </td>
                    <td>{trip.maxNumberStudents}</td>
                    <td>{trip.startPoint}</td>
                    <td>{trip.endPoint}</td>
                    <td>{trip.status ? "not completed" : "completed"}</td>
                    <td>{trip.date.toLocaleDateString()}</td>
                    <td>
                      {activateStatBtn&&<button
                        className={
                          styles[`${stautsButtonClicked[index] ? "status-btn-active":"status-btn"}`]
                        }
                        onClick={() => handleStatusButtonClick(index)}
                        disabled={stautsButtonClicked[index] ? true : false}
                      >
                        {(stautsButtonClicked[index] && "Active") || "start"}
                      </button>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default TripsTable;
