import React from 'react';
import AppBar from '../AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

const Layout = () => (
  <div className={styles.container}>
    <AppBar />
    <Outlet />
  </div>
);

export default Layout;
