
import React, { Suspense, useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { PrivateRoute } from './components/PrivateRoute';
import { RestrictedRoute } from './components/RestrictedRoute';
import { refreshUser } from './redux/auth/authOperations';
import { useAuth } from './hooks';
import { fetchContacts } from './redux/contacts/contactsOperations';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/