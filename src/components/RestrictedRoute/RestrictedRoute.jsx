import React from 'react';
import { Navigate } from 'react-router-dom'; // Outlet тут не потрібен
import { useAuth } from '../../hooks/useAuth';

export const RestrictedRoute = ({
  children,
  redirectTo = '/',
}) => {
  const { isLoggedIn, isRefreshing } = useAuth();

  return isLoggedIn && !isRefreshing ? (
    <Navigate to={redirectTo} />
  ) : (
    children
  );
};
