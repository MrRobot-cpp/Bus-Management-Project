import React, { useState } from 'react';
import PageHeader from '../Student/PageHeader/PageHeader';
import AdminDashboard from './adminDashboard/AdminDashboard';
// import StudentsManagement from './studentManagement/StudentsManagement';
import DriversManagement from './driversManagement/DriversManagement';
import AdminProfile from './adminprofile/AdminProfile';
import PaymentsManagement from './paymentsManagement/PaymentsManagement';
import RouteManagement from './RouteManagement/RouteManagement';
import TripsManagement from './tripsManagement/TripsManagement';
import VerticalNavbar from '../General/VerticalNavbar';
import styles from './Admin.module.css';
import axios from 'axios';


function Admin() {
  const [header, setHeader] = useState('Dashboard');

  const menuItems = [
    { text: "Drivers" },
    // { text: "Students" },
    { text: "Trips" },
    { text: "Payments" },
    { text: "Profile" }
  ];


  return (
    <div className={styles['admin-container']}>
      <PageHeader text={`Admin ${header}`} />
      <div className={styles['admin-page-container']}>
        <div className="admin-navbar-container">
          <VerticalNavbar menuItems={menuItems} onQuery={setHeader} />
        </div>
        <div className={styles["admin-right-container"]}>
          {header === "Dashboard" && <AdminDashboard />}
          {header === "Payments" && <PaymentsManagement />}
          {header === "Drivers" && <DriversManagement />}
          {/* {header === "Students" && <StudentsManagement />} */}
          {header === "Trips" && <TripsManagement />}
          {header === "Profile" && <AdminProfile />}
        </div>
      </div>
    </div>
  );
}

export default Admin;
