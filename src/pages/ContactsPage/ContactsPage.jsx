import React from 'react';
import ContactsForm from '../../components/ContactsForm/ContactsForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import { useSelector } from 'react-redux';
import {
  selectLoading,
  selectError,
} from '../../redux/contacts/selectors';
import styles from './ContactsPage.module.css';

const ContactsPage = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactsForm />

      <h2>Contacts</h2>
      <SearchBox />
      {loading && <p>Loading contacts...</p>}
      {error && <p>Something went wrong: {error}</p>}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
