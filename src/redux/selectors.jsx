import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => {
  
  return state.contacts;
};

export const getValueFilter = state => state.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getValueFilter],
  (contacts, filter) => {
    
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({name}) => name.toLowerCase().includes(normalizedFilter));
  }
);