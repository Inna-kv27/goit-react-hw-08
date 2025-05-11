import React from 'react';
import { Navigate } from 'react-router-dom'; // Outlet тут не потрібен
import { useAuth } from '../../hooks/useAuth';

export const PrivateRoute = ({
  children,
  redirectTo = '/',
}) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? (
    <Navigate to={redirectTo} />
  ) : (
    children
  );
};
