// eslint-disable-next-line no-unused-vars
import React from 'react';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
=======
import { Routes, Route } from "react-router-dom";
>>>>>>> 29ea82b3316e9a151f0932f2b6da925ac6025cef
import Login from './components/Login-SignUp/Login.jsx';
//import Student from './components/Student/Student';
// import Admin from './components/Admin/Admin'
// import Signup from './components/Login-SignUp/signUp';
//import AccountConfig from './components/Login-SignUp/AccountConfig';
// import Student from './components/Student/Student';
//import Driver from './components/Driver/Driver'
//import AccountConfig from './components/Login-SignUp/AccountConfig';
<<<<<<< HEAD
// import Admin from './components/Admin/Admin'
import Signup from './components/Login-SignUp/signUp';
//import AccountConfig from './components/Login-SignUp/AccountConfig';
//import VerticalNavbar from './components/VerticalNavbar/VerticalNavbar';
import Student from './components/Student/Student';
import Driver from './components/Driver/Driver'
//import Home from './components/Home'

=======
import Signup from './components/Login-SignUp/signUp';
import Student from './components/Student/Student';
import Driver from './components/Driver/Driver'
>>>>>>> 29ea82b3316e9a151f0932f2b6da925ac6025cef
import LandingPage from './components/LandingPage/LandingPage'
function App() {

    return (
        <>
<<<<<<< HEAD
     {/* SAMER: MA7DSH YL3B FL ROUTES ELY 3AOZ YGRB 7AGA Y COMMENT EL ROUTES W YKTB T7TEHA */}
            <Routes>
            <Route 
=======
      {/*SAMER: MA7DSH YL3B FL ROUTES ELY 3AOZ YGRB 7AGA Y COMMENT EL ROUTES W YKTB T7TEHA */}
            <Routes> 
              <Route 
>>>>>>> 29ea82b3316e9a151f0932f2b6da925ac6025cef
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
<<<<<<< HEAD
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
=======
              />  
             {/*  <Route
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
>>>>>>> 29ea82b3316e9a151f0932f2b6da925ac6025cef
            {/*SHAYFK YALY BTFKR TSHELHOM HA3DOK */}
        </>
    );
}
export default App;