import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => (
  <div className={styles.container}>
    <h1>Welcome to the Phonebook App!</h1>
    <p>
      This application allows you to manage your personal
      contacts.
    </p>
    <p>Please register or log in to start using it.</p>
  </div>
);

export default HomePage;
