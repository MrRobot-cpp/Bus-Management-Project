// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PageHeader from '../Student/PageHeader/PageHeader'
import AdminDashboard from './adminDashboard/AdminDashboard';
import StudentsManagment from './studentManagement/StudentsManagement';
import DriversManagment from './driversManagement/DriversManagement';
import AdminProfile from './adminprofile/AdminProfile'
import PaymentsManagement from './paymentsManagement/PaymentsManagement';
import RouteManagement from './RouteManagement/RouteManagement';
import TripsManagement from './tripsManagement/TripsManagement'
import VerticalNavbar from '../General/VerticalNavbar'
import styles from './Admin.module.css'

function Admin() {

const[header,setHeader] = useState('Dashboard')

  const menuItems = [
    {text: "Routes" },
    // {text: "Drivers" },
    // {text: "Students" },
    {text: "Trips" },
    {text: "Payments" },
    {text: "Profile" },

  ];
  return (
    <>
    <div className={styles['admin-container']}>
    <PageHeader text={`Admin ${header}`}/>
    <div className={styles['admin-page-container']}>
        <div className="admin-navbar-container">
          <VerticalNavbar menuItems={menuItems} onQuery={setHeader}/>
        </div>
    <div className={styles["admin-right-container"]}>
     {header==="Dashboard"&&< AdminDashboard/>} 
      {header==="Routes"&&<RouteManagement /> }
     {header==="Payments"&&<PaymentsManagement />}
     {header==="Drivers"&&<DriversManagment/>}
     {header==="Students"&&<StudentsManagment/>}
     {header==="Trips"&&<TripsManagement/>}
     {header==="Profile"&&<AdminProfile/>}
     
    </div>
    </div>
    </div>
    
    </>
  )
}

export default Admin