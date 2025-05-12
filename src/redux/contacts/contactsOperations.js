import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://connections-api.goit.global';

// Асинхронний запит для отримання контактів
export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Асинхронний запит для додавання контакту
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        '/contacts',
        contact
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Асинхронний запит для видалення контакту
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Асинхронний запит для оновлення контакту
export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, updatedContact }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(
        `/contacts/${id}`,
        updatedContact
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
