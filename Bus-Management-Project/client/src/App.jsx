// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login-SignUp/Login.jsx';
//import Signup from './components/signUp.jsx';
//import StudentProfile from './components/StudentProfile/StudentProfile/';
//import Driver from './components/Driver/Driver';
//import VerticalNavbar from './components/VerticalNavbar/VerticalNavbar';
// import Student from './components/Student/Student';
//import Driver from './components/Driver/Driver'
//import Home from './components/Home'
//import AccountConfig from './components/Login-SignUp/AccountConfig';
// import Admin from './components/Admin/Admin'
import Signup from './components/Login-SignUp/signUp';
//import AccountConfig from './components/Login-SignUp/AccountConfig';
//import VerticalNavbar from './components/VerticalNavbar/VerticalNavbar';
import Student from './components/Student/Student';
import Driver from './components/Driver/Driver'
//import Home from './components/Home'

import LandingPage from './components/LandingPage/LandingPage'
function App() {
    // eslint-disable-next-line no-unused-vars
    const toggleDropDown = () => {

    };
    return (
        <>
           {/*  <Login /> */}
            {/* <Signup /> */}
            {/* <AccountConfig /> */}
            {/* <VerticalNavbar /> */}
           {/*  <Home/> */}
            {/* <Student/>    */}
            {/* <Driver/> */}
            {/* <Admin /> */}
            <Routes>
            <Route 
              path={"/Landing-page"}
              element={<LandingPage/>}
              />
               <Route 
              path={"/"}
              element={<LandingPage/>}
              />
              <Route
                path={"/Login"}
                element={<Login/>}
              />
              <Route
              path={"/sign-up"}
              element={<Signup/>}
              />
              {/* <Route
              path={"/admin-view"}
              element={<Admin/>}
              /> */}
              <Route
              path={"/Login/student-view"}
              element={<Student/>}
              />
              <Route
              path={"/Login/driver-view"}
              element={<Driver/>}
              />
            </Routes>
        </>
    );
}
export default App;