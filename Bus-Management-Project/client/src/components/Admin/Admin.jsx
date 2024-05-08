// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PageHeader from '../Student/PageHeader/PageHeader'
 //import AdminDashboard from './AdminDashboard';
//import RouteManagement from './RouteManagement'
import PaymentsManagement from './PaymentsManagement';
import VerticalNavbar from '../General/VerticalNavbar'
import './Admin.css'
function Admin() {
  //import AdminDashboard from './AdminDashboard'

const[header,setHeader] = useState('Dashboard')

  const menuItems = [
    {text: "Routes" },
    {text: "Drivers" },
    {text: "Students" },
    {text: "Trips" },
    {text: "Payments" },
    {text: "Profile" },

  ];
  return (
    <>
    <div className='admin-container'>
    <PageHeader text={`Admin ${header}`}/>
    <div className='admin-page-container'>
        <div className="admin-navbar-container">
          <VerticalNavbar menuItems={menuItems} onQuery={setHeader}/>
        </div>
    <div className="admin-right-container">
   {/*  < AdminDashboard/> */}
     {/*   <RouteManagement />  */}
     {<PaymentsManagement />}
    </div>
    </div>
    </div>
    
    </>
  )
}

export default Admin