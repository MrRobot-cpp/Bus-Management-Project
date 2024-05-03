// eslint-disable-next-line no-unused-vars
import React from 'react'
import './AdminDashboard.css'
import PageHeader from '../Student/PageHeader/PageHeader'
import VerticalNavbar from '../General/VerticalNavbar'
import studentImage from './User.png'; // Import the image

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
      <div className='main-container'>
        <div className='tempNav'>
          <VerticalNavbar menuItems={menuItems} user />
        </div>
        <div className='Students'>
          <h6>Students</h6>
          <h2>4,209</h2>
          <div className='info'>
            <div className='percentages'>
              <ul>
                <li>62% New </li>
                <li>13% Returning</li>
                <li>23% Inactive</li>
              </ul>
            </div>
            <img className='Pie' src={studentImage} alt="Student" />
          </div>
        </div> 
      </div>
    </div>
  )
}

export default AdminDashboard
