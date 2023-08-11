import React from 'react';
import  {  useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import './ContactList.css';
import API from '../../contact-service';
import {
  addNewContact,
  deleteContact,
  selectContact,
  getContacts,
} from '../../store/actions/contactActions'

function ContactList() {
 
  const dispatch = useDispatch();

  const contacts = useSelector((store)=>store.contacts);

  useEffect(()=>{
    API.get('/')
    .then(({data})=>dispatch(getContacts(data)))
    .catch(({statusText})=>console.log({statusText}))
  },[dispatch]);


function onAddNewContact(){
  dispatch(addNewContact());
}
return (
    <div className='list-container'>
      <div className='item-container'>
        {contacts.map((contact) => (
          <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={deleteContact}
          onEdit={selectContact}
          />
        ))}
      </div>
      <button id='new' onClick={onAddNewContact}>
        New
      </button>
    </div>
  );
};
export default ContactList;

