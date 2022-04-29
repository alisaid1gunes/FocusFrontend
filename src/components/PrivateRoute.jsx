import React from 'react';
import { Navigate } from 'react-router-dom';
export default function PrivateRoute({ children }) {
  const isAuthenticated = true;

  if (isAuthenticated) {
    return children;
  }

  return <Navigate to='/login' />;
}
