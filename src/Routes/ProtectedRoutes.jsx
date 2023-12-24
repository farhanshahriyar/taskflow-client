/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner';

const ProtectedRoute = ({ children }) => {
  const { user, loading} = useContext(AuthContext);
  console.log(user)

  if(loading) {
    return <LoadingSpinner/>
  }

  if (user) {
    return children
  }
  return <Navigate to="/login" replace></Navigate>;
};

export default ProtectedRoute;

