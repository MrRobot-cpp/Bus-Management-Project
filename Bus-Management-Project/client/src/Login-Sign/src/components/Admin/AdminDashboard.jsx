// eslint-disable-next-line no-unused-vars
import React from 'react'
import './AdminDashboard.css'
import PageHeader from '../Student/PageHeader/PageHeader'
import VerticalNavbar from '../General/VerticalNavbar'
import studentImage from './User.png'; // Import the image
import iconImage from './Rectangle 2373.png';
import iconImage1 from './Rectangle 2374.png';
import iconImage2 from './Rectangle 2375.png';
import chartimage from './Order.png';
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
      <PageHeader text='Admin Dashboard'/>
      <div className='main-container'>
        <div className='tempNav'>
          <VerticalNavbar menuItems={menuItems} user/>
        </div>

        {/* da b2a m4 el tany da el awlany w rkz m3aya kda  */}
        <div className='Students'>
  <h6>Students</h6>
    <h2>4,209</h2>
  <div className='info'>
    <div className='percentages'>
      <ul>
      <ul>
                <li className="small-text"><img src={iconImage} alt="New Icon" /> 62% New</li>
                <li className="small-text"><img src={iconImage1} alt="Returning Icon" /> 13% Returning</li>
                <li className="small-text"><img src={iconImage2} alt="Inactive Icon" /> 23% Inactive</li>
              </ul>
      </ul>
    </div>
    <img className='Pie' src={studentImage} alt="Student" />
  </div>
</div>

ِ{/* m4 el box el awlany da el tany  */}
<div className='Students'>
  <h6>Trips</h6>
    <h2>1,302</h2>
  <div className='info'>
    <div className='percentages'>
      <ul>
      <ul>
                <li className="small-text"><img src={iconImage} alt="New Icon" /> 40% Prepaid</li>
                <li className="small-text"><img src={iconImage1} alt="Returning Icon" /> 60% Postpaid</li>
              </ul>
      </ul>
    </div>
    <img className='Pie' src={chartimage} alt="Student" />
  </div>
</div>

      </div>
    </div>
  )
}

export default AdminDashboard

