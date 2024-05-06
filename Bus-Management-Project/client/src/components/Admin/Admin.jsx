// eslint-disable-next-line no-unused-vars
import React from 'react'
import PageHeader from '../Student/PageHeader/PageHeader'
//import AdminDashboard from './AdminDashboard'
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
    <PageHeader text={'Admin Dashboard'}/>
    <div className='admin-page-container'>
        <div className="admin-navbar-container">
          <VerticalNavbar menuItems={menuItems} user/>
        </div>
    <div className="admin-right-container">
    {/* < AdminDashboard/> */}
    <RouteManagement />
    </div>
    </div>
    </div>
    
    </>
  )
}

export default Admin