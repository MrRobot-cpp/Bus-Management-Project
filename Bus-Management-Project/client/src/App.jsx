// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login-SignUp/Login.jsx';
//import Student from './components/Student/Student';
// import Admin from './components/Admin/Admin'
// import Signup from './components/Login-SignUp/signUp';
//import AccountConfig from './components/Login-SignUp/AccountConfig';
// import Student from './components/Student/Student';
//import Driver from './components/Driver/Driver'
//import AccountConfig from './components/Login-SignUp/AccountConfig';
//import Admin from './components/Admin/Admin'
import Signup from './components/Login-SignUp/signUp';
//import AccountConfig from './components/Login-SignUp/AccountConfig';
import Student from './components/Student/Student';
import Driver from './components/Driver/Driver'
import LandingPage from './components/LandingPage/LandingPage'
function App() {
    // eslint-disable-next-line no-unused-vars
    const toggleDropDown = () => {

    };
    return (
        <>
      {/*SAMER: MA7DSH YL3B FL ROUTES ELY 3AOZ YGRB 7AGA Y COMMENT EL ROUTES W YKTB T7TEHA */}
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
            {/*SHAYFK YALY BTFKR TSHELHOM HA3DOK */}
        </>
    );
}
export default App;