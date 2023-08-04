// src/App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import { loadContacts, setContactForEdit, addContact, updateContact, deleteContact } from './store/actions/contactActions';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const contactForEdit = useSelector(state => state.contacts.contactForEdit);

  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleAddNewContact = () => {
    dispatch(setContactForEdit(null));
  };

  const handleSelectContact = (contact) => {

    dispatch(setContactForEdit(contact));
  };

  const handleSaveContact = (contact) => {
    if (!contact.id) {
      dispatch(addContact(contact));
    } else {
      dispatch(updateContact(contact));
    }
  };

  return (
    <div className='container'>
      <h1 className='header'>Contact List</h1>
      <div className='main'>
        <ContactList
          contacts={contacts}
          onDelete={handleDeleteContact}
          onAddContact={handleAddNewContact}
          onEditContact={handleSelectContact}
        />
        <ContactForm
          key={contactForEdit?.id}
          contactForEdit={contactForEdit}
          onSubmit={handleSaveContact}
          onDelete={handleDeleteContact}
        />
      </div>
    </div>
  );
};

export default App;
