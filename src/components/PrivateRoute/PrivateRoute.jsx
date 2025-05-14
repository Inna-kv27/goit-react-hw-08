import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const PrivateRoute = ({
  children,
  redirectTo = '/',
}) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  const shouldRedirectCorrected = !isLoggedIn;

  return shouldRedirectCorrected ? (
    <Navigate to={redirectTo} />
  ) : (
    children
  );
};
