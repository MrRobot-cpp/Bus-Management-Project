// eslint-disable-next-line no-unused-vars
import React from "react";
import VerticalNavbar from "../General/VerticalNavbar.jsx";
import Home from "./Home";
import PageHeader from "../Student/PageHeader/PageHeader.jsx";
import TripsTable from "./TripsTable.jsx";
import styles from "./Driver.module.css";

const trips = [
  {
    departure: {
      hour: 9,
      minute: 30,
      period: "AM",
    },
    arrival: {
      hour: 2,
      minute: 15,
      period: "PM",
    },
    numStudents: 20,
    maxNumberStudents: 30,
    speedLimit: 60,
    stops: ["Stop 1", "Stop 2", "Stop 3", "Stop 4", "Stop 5"],
    startPoint: "School A",
    endPoint: "School B",
    status: false,
    date: new Date("2024-05-02"),
  },
  {
    departure: {
      hour: 8,
      minute: 45,
      period: "AM",
    },
    arrival: {
      hour: 1,
      minute: 30,
      period: "PM",
    },
    numStudents: 25,
    maxNumberStudents: 35,
    speedLimit: 50,
    stops: ["Stop 1", "Stop 2", "Stop 3"],
    startPoint: "School C",
    endPoint: "School D",
    status: true,
    date: new Date("2024-05-06"),
  },
  {
    departure: {
      hour: 8,
      minute: 45,
      period: "AM",
    },
    arrival: {
      hour: 1,
      minute: 30,
      period: "PM",
    },
    numStudents: 25,
    maxNumberStudents: 35,
    speedLimit: 50,
    stops: ["Stop 1", "Stop 2", "Stop 3"],
    startPoint: "School C",
    endPoint: "School D",
    status: true,
    date: new Date("2024-05-03"),
  },
  {
    departure: {
      hour: 8,
      minute: 45,
      period: "AM",
    },
    arrival: {
      hour: 1,
      minute: 30,
      period: "PM",
    },
    numStudents: 25,
    maxNumberStudents: 35,
    speedLimit: 50,
    stops: ["Stop 1", "Stop 2", "Stop 3"],
    startPoint: "School C",
    endPoint: "School E",
    status: true,
    date: new Date("2024-05-03"),
  },
];

const driver = {
  //JSON object example
  name: "Ahmed",
  Id: "#200428",
  mail: "ahmedsamersayed22@gmail.com",
  gender: "male",
  age: 40,
  noOfTrips: 1000,
  phone: "01090790791",
  type: "driver",
};

function Driver() {
  const menuItems = [
    { text: "Trips" },
    { text: "History" },
    { text: "Profile" },
  ];
  return (
    <div className={styles["main-container"]}>
      <PageHeader text={"Driver Dashboard"} />
      <div className={styles["container"]}>

        <div className={styles["navbar-container"]}>
          <VerticalNavbar menuItems={menuItems} user={driver} />
        </div>
        <div className={styles["right-container"]}>
          <div className={styles["profile-container"]}></div>
        <TripsTable trips={trips} tripHead="Current Trips" activateStatBtn={true}/>
        <TripsTable trips={trips} tripHead="Completed Trips" activateStatBtn={false}/>
        <TripsTable trips={trips} tripHead="Upcoming Trips" activateStatBtn={false}/>
        </div>
        {/* <Home driver={driver} trips={trips} /> */}
      </div>
    </div>
  );
}

export default Driver;
