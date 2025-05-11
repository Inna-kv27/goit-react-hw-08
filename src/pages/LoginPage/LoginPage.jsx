import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './LoginPage.module.css';

const LoginPage = () => (
  <div className={styles.container}>
    <LoginForm />
  </div>
);

export default LoginPage;
