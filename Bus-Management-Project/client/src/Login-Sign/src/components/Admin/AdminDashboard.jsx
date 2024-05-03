// eslint-disable-next-line no-unused-vars
import React from 'react'
import './AdminDashboard.css'
import PageHeader from '../Student/PageHeader/PageHeader'
import VerticalNavbar from '../General/VerticalNavbar'
function AdminDashboard() {
  const menuItems = [
    {text: "Routes" },
    {text: "Drivers" },
    {text: "Students" },
    {text: "Trips" },
    {text: "Profile" },
  ];

  return (
    <div className='Dashboard-Container'>
    <PageHeader text='Admin Dashboard' />
    <div className='tempNav'>
    <VerticalNavbar menuItems={menuItems} user />
    </div>
    <div className='Students'> 
    </div>
    </div>
  )
}

export default AdminDashboard