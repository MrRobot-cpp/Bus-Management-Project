import { useState } from 'react'
import VerticalNavbar from './VerticalNavbar/VerticalNavbar'
import StudentProfile from './StudentProfile/StudentProfile'
import './App.css'

function App() {
  return(
    <>
    <div className='main-container'>
     <VerticalNavbar/>
     <StudentProfile/>
     </div>
  </>
  )
}

export default App
