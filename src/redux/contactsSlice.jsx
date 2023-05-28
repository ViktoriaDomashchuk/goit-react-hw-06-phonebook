import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialContacts = [
  { id: 'id-1', name: 'Larry Tucker', number: '+380 123 123 123' },
  { id: 'id-2', name: 'Maia Moss', number: '+380 123 123 123' },
  { id: 'id-3', name: 'Rowan Berg', number: '+380 123 123 123' },
];

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContacts(state, action) {
      const contact = { ...action.payload, id: nanoid() };
      state.push(contact);
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContacts, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;