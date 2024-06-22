// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ requiredRole }) => {
    const token = localStorage.getItem('authToken');
    const role = localStorage.getItem('userRole');

    if (!token || role !== requiredRole) {
        return <Navigate to="/Login" />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
