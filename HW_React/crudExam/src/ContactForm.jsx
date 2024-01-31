import React, { useState } from 'react';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const inputStyle = {
    margin: '5px',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
  };

  const handleAddContact = () => {
    const newContact = { id: Date.now(), name, email };
    onAddContact(newContact);
    setName('');
    setEmail('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle}
      />
      <button onClick={handleAddContact} style={buttonStyle}>
        Add Contact
      </button>
    </div>
  );
};

export default ContactForm;