import React, { useState } from 'react';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleDeleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  const appStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  const contactFormStyle = {
    marginBottom: '20px',
  };

  return (
    <div style={appStyle}>
      <h1>Contact Book</h1>
      <div style={contactFormStyle}>
        <ContactForm onAddContact={handleAddContact} />
      </div>
      <ContactList contacts={contacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;