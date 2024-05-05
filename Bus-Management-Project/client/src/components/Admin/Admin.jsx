// eslint-disable-next-line no-unused-vars
import React from 'react'
// import AdminDashboard from './AdminDashboard'
import RouteManagement from './RouteManagement'
import VerticalNavbar from '../General/VerticalNavbar'
import './Admin.css'
function Admin() {
  const menuItems = [
    {text: "Routes" },
    {text: "Drivers" },
    {text: "Students" },
    {text: "Trips" },
    {text: "Profile" },
  ];
  return (
    <>
    <div className='admin-container'>
    {/* < AdminDashboard/> */}
    <RouteManagement />
    <div className='Admin-navbar'>
    <VerticalNavbar menuItems={menuItems} user/>
    </div>
    </div>
    </>
  )
}

export default Admin