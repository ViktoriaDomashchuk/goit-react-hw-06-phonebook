import { useState, useEffect } from 'react';
import { Box } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const allContacts = [{ id: 'id-1', name: 'Larry Tucker', number: '+380 123 123 123' },
  { id: 'id-2', name: 'Maia Moss', number: '+380 123 123 123' },
  { id: 'id-3', name: 'Rowan Berg', number: '+380 123 123 123' },];

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      return (parsedContacts);
    } else {
       return allContacts;
    }
  });
  const [filter, setFilter] = useState('');
  
  const addContact = ({ name, number }) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in your Phonebook!`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, {
      id: nanoid(),
      name,
      number,
    }]
    );
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => 
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const searchContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));
  };

  useEffect(() => {
    if (contacts.length === 0) return;
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  
  const resultFilter = searchContact();

    return (
      <Box>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={addContact}          
        />
        <h2>Contacts</h2>
        <Filter
          onChange={changeFilter}
          value={filter} 
        /> 
        <ContactList
          items={resultFilter}
          onDelete={deleteContact}
        />
      </Box>
    );
  }

App.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired
}.isRequired