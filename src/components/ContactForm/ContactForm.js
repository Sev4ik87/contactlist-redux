import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addContact, deleteContact } from '../../store/actions/contactActions';
import './ContactForm.css';

const ContactForm = ({ contactForEdit, onSubmit, onDelete }) => {
  const [contact, setContact] = useState({});

  useEffect(() => {
    
      console.log("Contact for edit:", contactForEdit);
      setContact({ ...contactForEdit });
    
  }, [contactForEdit]);
  

  const createEmptyContact = () => {
    return {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    };
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;

    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const onClearField = (fieldName) => {
    setContact((prevContact) => ({
      ...prevContact,
      [fieldName]: '',
    }));
  };

  const onFormSubmit = (e) => {

    e.preventDefault();
    console.log("Form submitted. Contact:", contact);

    onSubmit(contact);
  };

  const onContactDelete = () => {
    onDelete(contact.id);
    setContact(createEmptyContact());
  };

  return (
    <form id='contact-form' onSubmit={onFormSubmit}>
      <div className='form-container'>
        <div className='contact-info'>
          <input
            type='text'
            className='text-field'
            placeholder='First name'
            required
            name='firstName'
            value={contact.firstName}
            onChange={onInputChange}
          />
          <span className='clear' onClick={() => onClearField('firstName')}>
            X
          </span>
        </div>
        <div className='contact-info'>
          <input
            type='text'
            className='text-field'
            placeholder='Last name'
            required
            name='lastName'
            value={contact.lastName}
            onChange={onInputChange}
          />
          <span className='clear' onClick={() => onClearField('lastName')}>
            X
          </span>
        </div>
        <div className='contact-info'>
          <input
            type='email'
            className='text-field'
            placeholder='Email'
            required
            name='email'
            value={contact.email}
            onChange={onInputChange}
          />
          <span className='clear' onClick={() => onClearField('email')}>
            X
          </span>
        </div>
        <div className='contact-info'>
          <input
            type='text'
            className='text-field'
            placeholder='Phone'
            required
            name='phone'
            value={contact.phone}
            onChange={onInputChange}
          />
          <span className='clear' onClick={() => onClearField('phone')}>
            X
          </span>
        </div>
      </div>

      <div className='btns'>
        <button id='save' type='submit'>
          Save
        </button>
        {contact.id ? (
          <button id='delete' type='button' onClick={onContactDelete}>
            Delete
          </button>
        ) : (
          ''
        )}
      </div>
    </form>
  );
};

// Функция для связывания компонента с Redux хранилищем
const mapStateToProps = (state) => ({
  contactForEdit: state.contacts.contactForEdit,
});

const mapDispatchToProps = {
  onSubmit: addContact, // Подразумевается, что в store/actions/contactActions.js есть функция addContact, которая добавляет новый контакт
  onDelete: deleteContact, // Подразумевается, что в store/actions/contactActions.js есть функция deleteContact, которая удаляет контакт
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
