import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import styles from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.contactCard}>
      <p className={styles.contactInfo}>
        {name}: {number}
      </p>
      <button
        onClick={handleDelete}
        className={styles.deleteButton}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
