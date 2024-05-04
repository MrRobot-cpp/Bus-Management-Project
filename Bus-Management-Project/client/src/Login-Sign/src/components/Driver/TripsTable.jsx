// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./TripsTable.module.css";

function TripsTable() {
  return (
    <>
      <div className={styles["trips-table-container"]}>
        <div className={styles["trips-table"]}>
          <table>
          <thead>
    <tr>
      <th>Departure Time</th>
      <th>Arrival Time</th>
      <th>Max Num. of Students</th>
      <th>Start Point</th>
      <th>End Point</th>
      <th>Status</th>
      <th>Date</th>
      <th/>
    </tr>
  </thead>
  <tbody>
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
  </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TripsTable;
