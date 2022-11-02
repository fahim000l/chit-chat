import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authentication } from '../Contexts/AuthContext';

const PrivateRoute = ({ children }) => {

    const location = useLocation();

    const { user, loader } = useContext(Authentication)

    if (loader) {
        return <p>Loading...</p>
    }
    if (user && user.uid) {
        return children;
    }

    return <Navigate to={'/auth/signin'} state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;