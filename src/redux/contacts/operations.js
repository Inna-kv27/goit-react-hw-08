import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://connections-api.goit.global/contacts'
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://connections-api.goit.global/contacts',
        contact
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `https://connections-api.goit.global/contacts/${contactId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Додаткова необов'язкова операція для оновлення контакту
// Якщо вам знадобиться ця функціональність
export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, updatedContact }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `https://connections-api.goit.global/contacts/${id}`,
        updatedContact
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//
// const operations = {
//   fetchContacts,
//   addContact,
//   deleteContact,
//   updateContact,
// };
// export default operations;
