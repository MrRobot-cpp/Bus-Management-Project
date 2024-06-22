
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login-SignUp/Login.jsx';
import Admin from './components/Admin/Admin';
import Signup from './components/Login-SignUp/signUp';
import Student from './components/Student/Student';
import Driver from './components/Driver/Driver';
import AccountConfig from './components/Login-SignUp/AccountConfig.jsx';
import LandingPage from './components/LandingPage/LandingPage';
import ProtectedRoute from './protectedRoutes/ProtectedRoute.jsx'; // Make sure to import ProtectedRoute

function App() {
    return (
     
        <>
            {/*SAMER: MA7DSH YL3B FL ROUTES ELY 3AOZ YGRB 7AGA Y COMMENT EL ROUTES W YKTB T7TEHA */}
        <Admin/>
            {/* <Routes>
                <Route path="/landing-page" element={<LandingPage />} />
                <Route path="/" element={<LandingPage />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/sign-up" element={<Signup />} />
                <Route path="/account-configuration" element={<AccountConfig />} />

                <Route element={<ProtectedRoute requiredRole="Admin" />}>
                    <Route path="/admin" element={<Admin />} />
                </Route>
                
                <Route element={<ProtectedRoute requiredRole="Student" />}>
                    <Route path="/student" element={<Student />} />
                </Route>
                
                <Route element={<ProtectedRoute requiredRole="Driver" />}>
                    <Route path="/driver" element={<Driver />} />
                </Route>
            </Routes> */}
            {/*SHAYFK YALY BTFKR TSHELHOM HA3DOK*/}
        </>
    );
}

export default App;
