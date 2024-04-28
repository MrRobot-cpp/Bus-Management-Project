import { useState } from 'react'
import VerticalNavbar from './VerticalNavbar/VerticalNavbar'
import StudentProfile from './StudentProfile/StudentProfile'
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
