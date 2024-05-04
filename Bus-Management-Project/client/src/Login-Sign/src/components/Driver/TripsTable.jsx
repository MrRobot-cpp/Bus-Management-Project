import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./TripsTable.module.css";

function MinBtn({onButtonClick}){
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    onButtonClick();
  };

  return(<>
  <div className={styles["min-btn-container"]}>
    <div className={styles[`${clicked?"plus-btn":"min-btn"}`]} onClick={handleClick}>
      <div className={styles["horizontal-bar"]}/>
      <div className={styles["vertical-bar"]}/>
    </div>
  </div>
  </>)
}

function TripsTable(props) {
  const {trips,tripHead} = props;
  const [buttonClicked, setButtonClicked] = useState(true);


  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };

   const tripTabletyles = {
     height: buttonClicked ?"90%":"10%",
     animationName: buttonClicked?"animation1":"animation2"

 };
 const tripHeadStyles = {
  borderBottom: buttonClicked ?"1.5px solid #EFF0F6":"none"
 };


  return (
    <>
      <div className={styles["trips-table-container"]} style={tripTabletyles}>

        <div className={styles["table-head"]} style={tripHeadStyles}>
          <p>tripHead</p>
          <MinBtn onButtonClick={handleButtonClick} />
        </div>
        {buttonClicked && <div className={styles["trips-table"]}>
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
      <th/>
    </tr>
  </thead>
  <tbody>
    {trips.map((index,trip) => (
      <tr key={index}>
      <td>9:30 AM</td>
      <td>2:15 PM</td>
      <td>30</td>
      <td>School A</td>
      <td>School B</td>
      <td>not completed</td>
      <td>5/3/24</td>
      <td><button>Start</button></td>
    </tr>

    ))}
    {trips.map((index,trip) => (
      <tr>
      <td>9:30 AM</td>
      <td>2:15 PM</td>
      <td>30</td>
      <td>School A</td>
      <td>School B</td>
      <td>not completed</td>
      <td>5/3/24</td>
      <td><button>Start</button></td>
    </tr>

    ))}
  </tbody>
          </table>
        </div>}
      </div>
    </>
  );
}

export default TripsTable;
