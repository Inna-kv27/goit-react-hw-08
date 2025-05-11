import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={styles.wrapper}>
      <p className={styles.username}>
        Welcome, {user.name}
      </p>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className={styles.logoutButton}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
