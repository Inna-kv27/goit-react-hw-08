import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://connections-api.herokuapp.com/contacts'
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/contacts',
        contact
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `https://connections-api.herokuapp.com/contacts/${contactId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, updatedContact }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `https://connections-api.herokuapp.com/contacts/${id}`,
        updatedContact
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const operations = {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
};
export default operations;
