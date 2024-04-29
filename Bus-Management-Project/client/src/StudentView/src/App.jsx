import { useState } from 'react'
import VerticalNavbar from 'C:/Users/medog/OneDrive/Desktop/Bus-Management-Project-1/Bus-Management-Project/client/src/DriverView/src/VerticalNavbar/VerticalNavbar.jsx'
import StudentProfile from './StudentProfile/StudentProfile'
// import * as All from './layout'
import './App.css'

function App() {
  return(
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
    <div className='main-container'>
     <VerticalNavbar/>
     <StudentProfile/>
     </div>
  </>
  )
}

export default App
