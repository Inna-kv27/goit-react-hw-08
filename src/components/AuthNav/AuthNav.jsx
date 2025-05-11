import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => (
  <div>
    <NavLink className={styles.link} to="/register">
      Register
    </NavLink>
    <NavLink className={styles.link} to="/login">
      Log In
    </NavLink>
  </div>
);

export default AuthNav;
