import React from 'react';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { useAuth } from '../../hooks/useAuth';
import styles from './AppBar.module.css';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
