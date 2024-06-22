// ProtectedRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const adminProtectedRoute = ({ requiredRole }) => {
    const token = localStorage.getItem('authToken');
    const role = localStorage.getItem('userRole');

    if (!token || role !== requiredRole) {
        return <Navigate to="/Login" />;
    }

    return <Outlet />;
};

export default adminProtectedRoute;
